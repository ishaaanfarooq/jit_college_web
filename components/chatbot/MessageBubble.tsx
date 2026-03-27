'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface MessageBubbleProps {
  message: {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  };
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`flex flex-col gap-1 ${isUser ? 'items-end' : 'items-start'}`}
    >
      <div
        className={`
          px-4 py-3 text-sm leading-relaxed break-words
          ${isUser
            ? 'bg-transparent border border-primary-gold text-white rounded-2xl rounded-br-sm self-end max-w-[80%]'
            : 'bg-primary-black/50 text-white rounded-2xl rounded-bl-sm self-start max-w-[90%]'
          }
        `}
      >
        {isUser ? (
          <span>{message.content}</span>
        ) : (
          <ReactMarkdown
            components={{
              h3: ({ children }) => (
                <p className="font-display tracking-wider uppercase text-primary-gold text-xs mt-3 mb-1 first:mt-0">{children}</p>
              ),
              h2: ({ children }) => (
                <p className="font-display tracking-wider uppercase text-primary-gold text-sm mt-3 mb-1 first:mt-0">{children}</p>
              ),
              h1: ({ children }) => (
                <p className="font-display tracking-widest uppercase text-primary-gold text-sm mt-2 mb-1">{children}</p>
              ),
              strong: ({ children }) => (
                <span className="text-primary-gold font-semibold">{children}</span>
              ),
              em: ({ children }) => (
                <span className="text-gray-300 italic">{children}</span>
              ),
              p: ({ children }) => (
                <p className="mb-2 last:mb-0 text-gray-100">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="space-y-1 my-2 pl-1">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="space-y-1 my-2 pl-1 list-decimal list-inside">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="flex items-start gap-2 text-gray-100">
                  <span className="text-primary-gold mt-1 flex-shrink-0">•</span>
                  <span>{children}</span>
                </li>
              ),
              hr: () => (
                <div className="border-t border-border-gray my-3" />
              ),
              code: ({ children }) => (
                <code className="bg-primary-black/60 text-primary-gold text-xs px-1.5 py-0.5 rounded font-mono">{children}</code>
              ),
              a: ({ href, children }) => (
                <a href={href} className="text-primary-gold underline hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">{children}</a>
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>

      <span className="text-[10px] text-gray-500 px-1 select-none">
        {formatTime(message.timestamp)}
      </span>
    </motion.div>
  );
}
