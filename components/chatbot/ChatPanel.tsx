'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { X, Send } from 'lucide-react';
import MessageBubble from './MessageBubble';

type Message = { id: string; role: 'user' | 'assistant'; content: string; timestamp: Date };

interface ChatPanelProps {
  onClose: () => void;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const QUICK_REPLIES = ['Admissions Process', 'Fee Structure', 'Placements', 'Hostel Info', 'Departments'];

function TypingIndicator() {
  return (
    <div className="flex items-start gap-1 self-start">
      <div className="bg-primary-black/50 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 rounded-full bg-primary-gold block"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ChatPanel({ onClose, messages, setMessages }: ChatPanelProps) {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Scroll to bottom whenever messages or loading state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim();
      if (!trimmed || isLoading) return;

      const userMessage: Message = {
        id: crypto.randomUUID(),
        role: 'user',
        content: trimmed,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputValue('');
      setIsLoading(true);

      // Prepare the bot message placeholder for streaming
      const botMessageId = crypto.randomUUID();

      try {
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();

        const allMessages = [...messages, userMessage].map(({ role, content }) => ({
          role,
          content,
        }));

        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: allMessages }),
          signal: abortControllerRef.current.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        if (!response.body) {
          throw new Error('No response body');
        }

        // Add empty bot message to stream into
        setMessages((prev) => [
          ...prev,
          {
            id: botMessageId,
            role: 'assistant',
            content: '',
            timestamp: new Date(),
          },
        ]);
        setIsLoading(false);

        // Stream the response
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulated = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          accumulated += chunk;

          // Handle Server-Sent Events (SSE) format or plain text
          // Support both "data: ..." SSE format and plain streamed text
          const lines = accumulated.split('\n');
          // Keep the last potentially incomplete line
          accumulated = lines.pop() ?? '';

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6).trim();
              if (data === '[DONE]') break;
              try {
                const parsed = JSON.parse(data);
                // Handle both OpenAI-style and Vercel AI SDK style
                const token =
                  parsed?.choices?.[0]?.delta?.content ??
                  parsed?.content ??
                  parsed?.delta?.text ??
                  '';
                if (token) {
                  setMessages((prev) =>
                    prev.map((msg) =>
                      msg.id === botMessageId
                        ? { ...msg, content: msg.content + token }
                        : msg
                    )
                  );
                }
              } catch {
                // If not JSON, treat the raw data line as plain text
                if (data) {
                  setMessages((prev) =>
                    prev.map((msg) =>
                      msg.id === botMessageId
                        ? { ...msg, content: msg.content + data }
                        : msg
                    )
                  );
                }
              }
            } else if (line.trim()) {
              // Plain text line (non-SSE)
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === botMessageId
                    ? { ...msg, content: msg.content + line }
                    : msg
                )
              );
            }
          }
        }

        // Flush any remaining accumulated text
        if (accumulated.trim()) {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessageId
                ? { ...msg, content: msg.content + accumulated }
                : msg
            )
          );
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') return;
        console.error('Chat error:', err);
        setIsLoading(false);
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: 'assistant',
            content:
              "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
            timestamp: new Date(),
          },
        ]);
      }
    },
    [messages, isLoading]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleQuickReply = (reply: string) => {
    sendMessage(reply);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      style={{ transformOrigin: 'bottom right' }}
      className="
        fixed bottom-24 right-6 z-50
        w-96 h-[600px]
        max-sm:w-screen max-sm:h-screen max-sm:bottom-0 max-sm:right-0 max-sm:rounded-none
        bg-dark-charcoal
        border border-border-gray
        rounded-2xl
        shadow-2xl
        flex flex-col
        overflow-hidden
      "
    >
      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="relative flex-shrink-0">
        {/* Gold accent line at top */}
        <div className="h-0.5 w-full bg-gradient-to-r from-primary-gold via-accent-gold to-primary-gold" />

        <div className="flex items-center justify-between px-4 py-3 bg-primary-black/60">
          {/* Left: avatar + name + status */}
          <div className="flex items-center gap-3">
            {/* Bot avatar */}
            <div
              className="
                w-9 h-9 rounded-full
                bg-gradient-to-br from-primary-gold to-accent-gold
                flex items-center justify-center
                text-base select-none flex-shrink-0
              "
            >
              🎓
            </div>

            <div className="flex flex-col">
              <span className="text-white font-display tracking-wide text-sm leading-tight">
                JIT Assistant
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                Online
              </span>
            </div>
          </div>

          {/* Right: close button */}
          <button
            onClick={onClose}
            aria-label="Close chat"
            className="
              w-8 h-8 rounded-full
              flex items-center justify-center
              text-gray-400 hover:text-white
              hover:bg-border-gray
              transition-colors duration-150
              focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-gold
            "
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* ── Messages ───────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 scroll-smooth">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {/* Typing indicator */}
        {isLoading && <TypingIndicator />}

        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* ── Quick Reply Chips ──────────────────────────────────── */}
      <div className="flex-shrink-0 px-4 py-2 flex gap-2 flex-wrap border-t border-border-gray/50">
        {QUICK_REPLIES.map((reply) => (
          <button
            key={reply}
            onClick={() => handleQuickReply(reply)}
            disabled={isLoading}
            className="
              text-[11px] px-2.5 py-1 rounded-full
              border border-border-gray
              text-gray-300 hover:text-primary-gold hover:border-primary-gold
              transition-colors duration-150
              disabled:opacity-40 disabled:cursor-not-allowed
              focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-gold
              whitespace-nowrap
            "
          >
            {reply}
          </button>
        ))}
      </div>

      {/* ── Input Area ─────────────────────────────────────────── */}
      <form
        onSubmit={handleSubmit}
        className="
          flex-shrink-0
          flex items-center gap-2
          px-4 py-3
          border-t border-border-gray
          bg-primary-black/40
        "
      >
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          disabled={isLoading}
          className="
            flex-1 bg-border-gray/40 text-white text-sm
            placeholder-gray-500
            rounded-xl px-4 py-2.5
            border border-border-gray
            focus:outline-none focus:border-primary-gold/60
            transition-colors duration-150
            disabled:opacity-60
          "
        />
        <button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          aria-label="Send message"
          className="
            w-10 h-10 rounded-xl flex-shrink-0
            bg-gradient-to-br from-primary-gold to-accent-gold
            flex items-center justify-center
            hover:shadow-gold
            disabled:opacity-40 disabled:cursor-not-allowed
            transition-all duration-150
            hover:scale-105 active:scale-95
            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold
          "
        >
          <Send size={16} color="#0A0A0A" strokeWidth={2.5} />
        </button>
      </form>
    </motion.div>
  );
}
