'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Facebook, Instagram, Linkedin, Youtube, Twitter, MapPin, Phone, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─── Column data ────────────────────────────────────────────────────────────

const exploreLinks = [
  { label: 'Campus Map', href: '/campus-map' },
  { label: 'Virtual Tour', href: '/virtual-tour' },
  { label: 'Student Life', href: '/student-life' },
  { label: 'Departments', href: '/departments' },
  { label: 'Library', href: '/library' },
  { label: 'Labs & Facilities', href: '/facilities' },
  { label: 'Anti-Ragging Committee', href: '/anti-ragging' },
  { label: 'Grievance Redressal', href: '/grievance' },
];

const academicLinks = [
  { label: 'B.E. Programs', href: '/academics/be' },
  { label: 'MBA Program', href: '/academics/mba' },
  { label: 'M.Tech Programs', href: '/academics/mtech' },
  { label: 'Research Centers', href: '/research' },
  { label: 'Faculty Directory', href: '/faculty' },
  { label: 'Academic Calendar', href: '/academic-calendar' },
  { label: 'Syllabus & Curriculum', href: '/syllabus' },
  { label: 'Examination Cell', href: '/examinations' },
];

const studentLinks = [
  { label: 'Student Portal', href: '/student-portal' },
  { label: 'E-Learning Platform', href: '/e-learning' },
  { label: 'Exam Results', href: '/results' },
  { label: 'Scholarships & Aid', href: '/scholarships' },
  { label: 'Hostel Information', href: '/hostel' },
  { label: 'Transport Routes', href: '/transport' },
  { label: 'Previous Year Papers', href: '/question-papers' },
  { label: 'Downloads', href: '/downloads' },
];

const connectLinks = [
  { label: 'Admissions Office', href: '/admissions' },
  { label: 'Training & Placements Cell', href: '/placements' },
  { label: 'Alumni Association', href: '/alumni' },
  { label: 'Media & Press', href: '/media' },
  { label: 'Feedback Form', href: '/feedback' },
  { label: 'Report an Issue', href: '/report' },
  { label: 'Contact Us', href: '/contact' },
];

const footerColumns = [
  { heading: 'Explore', links: exploreLinks },
  { heading: 'Academics', links: academicLinks },
  { heading: 'Student Resources', links: studentLinks },
  { heading: 'Connect', links: connectLinks },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com/jyothyit', icon: Facebook },
  { label: 'Instagram', href: 'https://instagram.com/jyothyit', icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com/school/jyothy-institute-of-technology', icon: Linkedin },
  { label: 'YouTube', href: 'https://youtube.com/@jyothyit', icon: Youtube },
  { label: 'Twitter', href: 'https://twitter.com/jyothyit', icon: Twitter },
];

const bottomLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'AICTE Approval', href: '/aicte' },
  { label: 'VTU Affiliation', href: '/vtu' },
  { label: 'NIRF Data', href: '/nirf' },
  { label: 'Contact Us', href: '/contact' },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!colsRef.current) return;

      const cols = colsRef.current.querySelectorAll('.footer-col');

      gsap.fromTo(
        cols,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: colsRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-dark-charcoal" aria-label="Site footer">

      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">

        {/* Brand & contact row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-14">

          {/* Brand block */}
          <div className="flex-shrink-0 max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              {!logoError ? (
                <Image
                  src="https://jyothyit.ac.in/wp-content/uploads/2022/05/JIT-LOGO.png"
                  width={100}
                  height={50}
                  alt="JIT Logo"
                  className="object-contain h-12 w-auto"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="font-display font-bold text-3xl text-primary-gold tracking-wider">
                  JIT
                </span>
              )}
              <div>
                <span className="font-display text-primary-gold tracking-widest text-xs uppercase leading-tight block">
                  JYOTHY INSTITUTE
                </span>
                <span className="font-display text-primary-gold tracking-widest text-xs uppercase leading-tight block">
                  OF TECHNOLOGY
                </span>
              </div>
            </div>

            <p className="font-body text-sm text-gray-400 leading-relaxed mb-5">
              Shaping tomorrow's engineers and innovators with world-class education,
              research, and industry collaboration since 2001.
            </p>

            {/* AICTE / VTU badge */}
            <div className="inline-flex items-center gap-2 border border-primary-gold/40 px-3 py-1.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-gold flex-shrink-0" />
              <span className="font-display text-primary-gold text-[10px] tracking-widest uppercase">
                AFFILIATED TO VTU | APPROVED BY AICTE
              </span>
            </div>
          </div>

          {/* Contact details */}
          <div className="space-y-3 lg:text-right">
            <div className="flex items-start gap-3 lg:flex-row-reverse">
              <MapPin className="w-4 h-4 text-primary-gold flex-shrink-0 mt-0.5" />
              <p className="font-body text-sm text-gray-400 leading-relaxed">
                Tataguni, Off Kanakapura Road,
                <br />
                Bengaluru - 560082, Karnataka
              </p>
            </div>

            <div className="flex items-center gap-3 lg:flex-row-reverse">
              <Phone className="w-4 h-4 text-primary-gold flex-shrink-0" />
              <a
                href="tel:+918028437091"
                className="font-mono text-sm text-gray-400 hover:text-primary-gold transition-colors duration-200"
              >
                +91-80-28437091
              </a>
            </div>

            <div className="flex items-center gap-3 lg:flex-row-reverse">
              <Mail className="w-4 h-4 text-primary-gold flex-shrink-0" />
              <a
                href="mailto:principal@jyothyit.ac.in"
                className="font-body text-sm text-gray-400 hover:text-primary-gold transition-colors duration-200 break-all"
              >
                principal@jyothyit.ac.in
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 lg:justify-end pt-2">
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
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-gray mb-12" />

        {/* Four-column link grid */}
        <div
          ref={colsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10"
        >
          {footerColumns.map(({ heading, links }) => (
            <div key={heading} className="footer-col">
              <h3 className="font-display uppercase tracking-widest text-primary-gold text-sm mb-5">
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="font-body text-sm text-gray-400 hover:text-white transition-colors duration-200 leading-snug block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Copyright */}
            <p className="font-body text-xs text-gray-500 text-center sm:text-left">
              Copyright &copy; 2026 Jyothy Institute of Technology. All Rights Reserved.
            </p>

            {/* Bottom links */}
            <nav aria-label="Footer legal links">
              <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                {bottomLinks.map(({ label, href }, idx) => (
                  <li key={label} className="flex items-center gap-4">
                    <Link
                      href={href}
                      className="font-body text-xs text-gray-500 hover:text-primary-gold transition-colors duration-200 whitespace-nowrap"
                    >
                      {label}
                    </Link>
                    {idx < bottomLinks.length - 1 && (
                      <span className="text-gray-700 text-xs hidden sm:inline">|</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
