'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  loading?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      showArrow = false,
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-display tracking-widest uppercase transition-all duration-300 cursor-none disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-primary-black text-white hover:bg-primary-gold hover:text-primary-black',
      outline: 'border-2 border-primary-black text-primary-black hover:bg-primary-black hover:text-white',
      gold: 'bg-primary-gold text-primary-black hover:bg-accent-gold',
      ghost: 'text-primary-black hover:text-primary-gold underline-offset-4 hover:underline',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-10 py-4 text-base',
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={disabled || loading}
        {...(props as object)}
      >
        {loading ? (
          <span className="spinner" />
        ) : (
          <>
            {children}
            {showArrow && <ArrowRight size={16} />}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
