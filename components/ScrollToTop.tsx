'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const SCROLL_THRESHOLD = 400;

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scroll-to-top"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{ width: 48, height: 48 }}
          className="
            fixed bottom-[108px] right-6 z-40
            rounded-full
            bg-gradient-to-br from-primary-gold to-accent-gold
            flex items-center justify-center
            shadow-gold
            hover:shadow-gold-lg
            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black
            cursor-pointer
          "
        >
          <ChevronUp size={22} color="#0A0A0A" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
