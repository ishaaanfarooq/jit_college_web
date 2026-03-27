'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { gsap } from 'gsap';
import ChatPanel from './ChatPanel';

const GREETING_MESSAGE = {
  id: 'greeting',
  role: 'assistant' as const,
  content: "Hi! I'm JIT's virtual assistant. Ask me anything about admissions, courses, placements, campus life, or facilities! 🎓",
  timestamp: new Date(),
};

function loadMessages() {
  try {
    const saved = sessionStorage.getItem('jit-chat-messages');
    if (!saved) return [GREETING_MESSAGE];
    const parsed = JSON.parse(saved);
    return parsed.map((m: { id: string; role: 'user' | 'assistant'; content: string; timestamp: string }) => ({
      ...m,
      timestamp: new Date(m.timestamp),
    }));
  } catch {
    return [GREETING_MESSAGE];
  }
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(loadMessages);

  // Persist messages to sessionStorage whenever they change
  useEffect(() => {
    try {
      sessionStorage.setItem('jit-chat-messages', JSON.stringify(messages));
    } catch { /* ignore */ }
  }, [messages]);
  const [showTooltip, setShowTooltip] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const bounceTimelineRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    // Initial gentle bounce every 10 seconds
    const startBounce = () => {
      bounceTimelineRef.current = gsap.to(buttonRef.current, {
        y: -10,
        duration: 0.4,
        ease: 'power2.out',
        yoyo: true,
        repeat: 3,
        onComplete: () => {
          // Reset position cleanly
          gsap.set(buttonRef.current, { y: 0 });
        },
      });
    };

    // Run once after 2s, then repeat every 10s
    const initialDelay = setTimeout(() => {
      startBounce();
    }, 2000);

    const interval = setInterval(() => {
      if (!isOpen) {
        startBounce();
      }
    }, 10000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
      bounceTimelineRef.current?.kill();
    };
  }, [isOpen]);

  const toggleChat = () => {
    // Kill bounce animation when opening
    bounceTimelineRef.current?.kill();
    gsap.set(buttonRef.current, { y: 0 });
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <ChatPanel onClose={() => setIsOpen(false)} messages={messages} setMessages={setMessages} />
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="
                bg-dark-charcoal border border-border-gray text-warm-white
                text-sm font-body px-3 py-1.5 rounded-lg shadow-dark
                whitespace-nowrap pointer-events-none select-none
              "
            >
              Need Help?
              {/* Arrow */}
              <span
                className="
                  absolute right-[-6px] top-1/2 -translate-y-1/2
                  border-t-[6px] border-b-[6px] border-l-[6px]
                  border-t-transparent border-b-transparent border-l-border-gray
                "
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button wrapper (relative for pulse dot) */}
        <div className="relative">
          {/* Pulsing dot indicator (only when closed) */}
          {!isOpen && (
            <span
              className="
                absolute top-0 right-0 z-10
                w-3 h-3 rounded-full bg-green-400
                ring-2 ring-primary-black
                animate-pulse
              "
            />
          )}

          <button
            ref={buttonRef}
            onClick={toggleChat}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            aria-label={isOpen ? 'Close chat' : 'Open JIT Assistant chat'}
            style={{ width: 56, height: 56 }}
            className="
              rounded-full
              bg-gradient-to-br from-primary-gold to-accent-gold
              flex items-center justify-center
              shadow-gold-lg
              hover:shadow-gold
              hover:scale-105
              active:scale-95
              transition-transform duration-150
              focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black
              cursor-pointer
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center justify-center"
                >
                  <X size={22} color="#0A0A0A" strokeWidth={2.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center justify-center"
                >
                  <MessageCircle size={24} color="#0A0A0A" strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </>
  );
}
