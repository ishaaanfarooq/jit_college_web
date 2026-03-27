'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
  titleClassName?: string;
  angled?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className,
  titleClassName,
  angled = false,
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const themeClasses = {
    light: { label: 'text-primary-gold', title: 'text-primary-black', subtitle: 'text-muted-gray' },
    dark: { label: 'text-primary-gold', title: 'text-white', subtitle: 'text-gray-400' },
  };

  if (angled) {
    return (
      <div className={cn('flex flex-col', alignClasses[align], className)}>
        <div className="inline-block bg-primary-black px-8 py-3 skew-x-[-3deg]">
          <h2
            className={cn(
              'font-display text-3xl md:text-4xl lg:text-5xl tracking-widest text-white uppercase skew-x-[3deg]',
              titleClassName
            )}
          >
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className={cn('mt-4 text-base max-w-2xl', themeClasses[theme].subtitle)}>
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      className={cn('flex flex-col', alignClasses[align], className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span
          className={cn(
            'font-mono text-xs tracking-widest uppercase mb-3',
            themeClasses[theme].label
          )}
        >
          — {label} —
        </span>
      )}
      <h2
        className={cn(
          'font-display text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase',
          themeClasses[theme].title,
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-base max-w-2xl', themeClasses[theme].subtitle)}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
