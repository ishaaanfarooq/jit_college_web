'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  theme?: 'light' | 'dark';
  className?: string;
}

export function Accordion({ items, theme = 'light', className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'border overflow-hidden',
            theme === 'dark'
              ? 'border-border-gray bg-dark-charcoal'
              : 'border-gray-200 bg-white'
          )}
        >
          <button
            className={cn(
              'w-full flex items-center justify-between px-6 py-4 text-left transition-colors',
              theme === 'dark'
                ? 'text-white hover:bg-border-gray'
                : 'text-primary-black hover:bg-warm-white'
            )}
            onClick={() => toggle(index)}
          >
            <span className="font-body font-semibold text-sm md:text-base pr-4">
              {item.question}
            </span>
            <span className="flex-shrink-0 text-primary-gold">
              {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div
                  className={cn(
                    'px-6 pb-4 text-sm leading-relaxed border-t',
                    theme === 'dark'
                      ? 'text-gray-300 border-border-gray'
                      : 'text-muted-gray border-gray-100'
                  )}
                >
                  <div className="pt-3">{item.answer}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
