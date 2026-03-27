'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, Search, X, ChevronDown } from 'lucide-react';

const navSearchRoutes: { keywords: string[]; href: string }[] = [
  { keywords: ['admission', 'apply', 'fee', 'eligibility', 'cutoff', 'cet', 'seat', 'rank'], href: '/admissions' },
  { keywords: ['computer', 'cse', 'electronics', 'ece', 'mechanical', 'civil', 'ise', 'mba', 'department', 'course', 'syllabus', 'lab', 'academics'], href: '/academics' },
  { keywords: ['placement', 'company', 'package', 'salary', 'recruit', 'job', 'lpa'], href: '/placements' },
  { keywords: ['hostel', 'club', 'sport', 'fest', 'event', 'cultural', 'canteen', 'gym', 'campus life'], href: '/campus-life' },
  { keywords: ['research', 'publication', 'project', 'phd', 'paper', 'journal'], href: '/research' },
  { keywords: ['contact', 'phone', 'email', 'address', 'location', 'direction'], href: '/contact' },
  { keywords: ['about', 'history', 'principal', 'vision', 'mission', 'naac', 'aicte', 'vtu'], href: '/about' },
  { keywords: ['gallery', 'photo', 'image', 'campus photo'], href: '/gallery' },
];

function getNavSearchHref(query: string): string {
  const q = query.toLowerCase();
  for (const route of navSearchRoutes) {
    if (route.keywords.some(k => q.includes(k))) return route.href;
  }
  return '/academics';
}

interface NavbarProps {
  onMenuToggle: () => void;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Academics', href: '/academics' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Campus Life', href: '/campus-life' },
  { label: 'Placements', href: '/placements' },
  { label: 'Research', href: '/research' },
  { label: 'Contact', href: '/contact' },
];

const departments = [
  { label: 'CSE', href: '/academics/cse' },
  { label: 'ECE', href: '/academics/ece' },
  { label: 'ME', href: '/academics/me' },
  { label: 'Civil', href: '/academics/ce' },
  { label: 'ISE', href: '/academics/ise' },
  { label: 'MBA', href: '/academics/mba' },
];

export default function Navbar({ onMenuToggle }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navbar slides down
      gsap.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
      );

      // Nav links stagger in
      if (linksRef.current) {
        const items = linksRef.current.querySelectorAll('li');
        gsap.fromTo(
          items,
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.1,
            delay: 0.3,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Mega-dropdown hover handlers with delay to prevent accidental close
  const handleAcademicsEnter = () => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setMegaOpen(true);
  };

  const handleAcademicsLeave = () => {
    megaTimeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 150);
  };

  // Mega dropdown GSAP animation
  useEffect(() => {
    if (!megaRef.current) return;
    if (megaOpen) {
      gsap.fromTo(
        megaRef.current,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' }
      );
    }
  }, [megaOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary-black shadow-dark'
          : 'bg-primary-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            {!logoError ? (
              <div className="relative">
                <Image
                  src="https://jyothyit.ac.in/wp-content/uploads/2022/05/JIT-LOGO.png"
                  width={120}
                  height={60}
                  alt="JIT Logo"
                  className="object-contain h-10 w-auto"
                  onError={() => setLogoError(true)}
                  priority
                />
              </div>
            ) : (
              <span className="font-display font-bold text-2xl text-primary-gold tracking-wider">
                JIT
              </span>
            )}
            <div className="hidden sm:block">
              <span className="font-display text-primary-gold tracking-widest text-sm uppercase leading-tight block">
                JYOTHY INSTITUTE
              </span>
              <span className="font-display text-primary-gold tracking-widest text-sm uppercase leading-tight block">
                OF TECHNOLOGY
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul
            ref={linksRef}
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {navLinks.map((link) => {
              if (link.label === 'Academics') {
                return (
                  <li
                    key={link.href}
                    className="relative"
                    onMouseEnter={handleAcademicsEnter}
                    onMouseLeave={handleAcademicsLeave}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 font-body text-sm font-medium transition-colors duration-200 relative group ${
                        isActive(link.href)
                          ? 'text-primary-gold'
                          : 'text-warm-white hover:text-primary-gold'
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                      />
                      {/* Active underline */}
                      {isActive(link.href) && (
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-gold rounded-full" />
                      )}
                    </button>

                    {/* Mega Dropdown */}
                    {megaOpen && (
                      <div
                        ref={megaRef}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[480px] bg-primary-black border border-border-gray rounded-sm shadow-dark overflow-hidden"
                        onMouseEnter={handleAcademicsEnter}
                        onMouseLeave={handleAcademicsLeave}
                      >
                        <div className="px-5 py-3 border-b border-border-gray">
                          <span className="font-display text-xs text-primary-gold tracking-widest uppercase">
                            Departments
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-0 p-4">
                          {departments.map((dept) => (
                            <Link
                              key={dept.href}
                              href={dept.href}
                              className="flex items-center gap-2 px-3 py-2.5 text-sm font-body text-gray-300 hover:text-primary-gold hover:bg-border-gray/40 rounded-sm transition-colors duration-150 group"
                              onClick={() => setMegaOpen(false)}
                            >
                              <span className="w-1 h-1 rounded-full bg-primary-gold/40 group-hover:bg-primary-gold transition-colors duration-150 flex-shrink-0" />
                              {dept.label}
                            </Link>
                          ))}
                        </div>
                        <div className="px-5 py-3 border-t border-border-gray bg-dark-charcoal/50">
                          <Link
                            href="/academics"
                            className="font-display text-xs text-primary-gold/70 hover:text-primary-gold tracking-wider uppercase transition-colors duration-150"
                            onClick={() => setMegaOpen(false)}
                          >
                            View All Programs →
                          </Link>
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3 py-2 font-body text-sm font-medium transition-colors duration-200 block group ${
                      isActive(link.href)
                        ? 'text-primary-gold'
                        : 'text-warm-white hover:text-primary-gold'
                    }`}
                  >
                    {link.label}
                    {/* Active underline */}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-gold rounded-full" />
                    )}
                    {/* Hover underline */}
                    {!isActive(link.href) && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-gold/0 group-hover:bg-primary-gold/60 rounded-full transition-colors duration-200" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center gap-2 bg-border-gray/60 border border-border-gray rounded-sm px-3 py-1.5 backdrop-blur-sm">
                  <button
                    onClick={() => { if (searchQuery.trim()) { router.push(getNavSearchHref(searchQuery)); setSearchOpen(false); setSearchQuery(''); } }}
                    className="flex-shrink-0"
                  >
                    <Search className="w-4 h-4 text-primary-gold hover:text-white transition-colors" />
                  </button>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search JIT..."
                    autoFocus
                    className="bg-transparent text-warm-white text-sm font-body placeholder-gray-500 outline-none w-40"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && searchQuery.trim()) {
                        router.push(getNavSearchHref(searchQuery));
                        setSearchOpen(false);
                        setSearchQuery('');
                      }
                      if (e.key === 'Escape') {
                        setSearchOpen(false);
                        setSearchQuery('');
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="text-gray-400 hover:text-primary-gold transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Open search"
                  className="p-2 text-warm-white hover:text-primary-gold transition-colors duration-200"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Hamburger — mobile only */}
            <button
              onClick={onMenuToggle}
              aria-label="Open navigation menu"
              className="lg:hidden p-2 text-warm-white hover:text-primary-gold transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Gold accent line at bottom of navbar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-primary-gold/20 transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </nav>
  );
}
