'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { X, Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Academics', href: '/academics' },
  { label: 'Campus Life', href: '/campus-life' },
  { label: 'Placements', href: '/placements' },
  { label: 'Research', href: '/research' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/jyothyit',
    icon: Facebook,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/jyothyit',
    icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/school/jyothy-institute-of-technology',
    icon: Linkedin,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@jyothyit',
    icon: Youtube,
  },
];

const overlayVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const linksRef = useRef<HTMLUListElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // GSAP stagger on open
  useEffect(() => {
    if (isOpen && linksRef.current) {
      const items = linksRef.current.querySelectorAll('li');
      gsap.fromTo(
        items,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.45,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 0.15,
        }
      );
    }
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="mobile-menu"
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[60] bg-primary-black flex flex-col overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-border-gray flex-shrink-0">
            <div>
              <span className="font-display text-primary-gold tracking-widest text-xs uppercase block leading-tight">
                JYOTHY INSTITUTE
              </span>
              <span className="font-display text-primary-gold tracking-widest text-xs uppercase block leading-tight">
                OF TECHNOLOGY
              </span>
            </div>

            {/* Close button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 text-warm-white hover:text-primary-gold transition-colors duration-200 group"
            >
              <X className="w-7 h-7 transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 overflow-y-auto px-6 pt-8 pb-4">
            <ul ref={linksRef} className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`
                      group flex items-center gap-4 py-3 font-display uppercase text-4xl
                      tracking-wide transition-colors duration-200 border-b border-transparent
                      hover:border-primary-gold/20
                      ${isActive(link.href)
                        ? 'text-primary-gold'
                        : 'text-white hover:text-primary-gold'
                      }
                    `}
                  >
                    {/* Gold dot indicator for active */}
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200 ${
                        isActive(link.href)
                          ? 'bg-primary-gold'
                          : 'bg-border-gray group-hover:bg-primary-gold/50'
                      }`}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer section */}
          <div className="flex-shrink-0 border-t border-border-gray px-6 py-6 space-y-5">
            {/* Address */}
            <div className="space-y-1">
              <p className="font-display text-xs text-primary-gold tracking-widest uppercase mb-2">
                Find Us
              </p>
              <p className="font-body text-xs text-gray-400 leading-relaxed">
                Tataguni, Off Kanakapura Road
              </p>
              <p className="font-body text-xs text-gray-400 leading-relaxed">
                Bengaluru - 560082, Karnataka
              </p>
              <a
                href="tel:+918028437091"
                className="font-mono text-xs text-gray-400 hover:text-primary-gold transition-colors duration-200 block mt-1"
              >
                +91-80-28437091
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-500 hover:text-primary-gold transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Affiliation badge */}
            <p className="font-mono text-[10px] text-gray-600 tracking-wider uppercase">
              Affiliated to VTU · Approved by AICTE
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
