'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from 'next/navigation';
import {
  ArrowRight, GraduationCap, Briefcase, Handshake, Globe,
  ChevronDown, Play, Award, Lightbulb, ChevronRight, Calendar, MapPin,
  Search, X, Plus, BookOpen, Dumbbell, FlaskConical, Users
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const heroImages = [
  'https://images.unsplash.com/photo-1667273704848-32df02bd29f3?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=200&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=200&fit=crop',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=200&fit=crop',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=200&fit=crop',
];

const heroImages2 = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=200&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop',
  'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=200&fit=crop',
  'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=200&fit=crop',
  'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=200&fit=crop',
];

const departments = [
  { name: 'Computer Science & Engineering', desc: 'AI, ML, Software Development', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=350&h=200&fit=crop', href: '/academics' },
  { name: 'Electronics & Communication', desc: 'VLSI, Embedded Systems, IoT', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=350&h=200&fit=crop', href: '/academics' },
  { name: 'Mechanical Engineering', desc: 'Design, Manufacturing, Thermodynamics', img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=350&h=200&fit=crop', href: '/academics' },
  { name: 'Civil Engineering', desc: 'Structures, Construction, Environmental', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=350&h=200&fit=crop', href: '/academics' },
  { name: 'Information Science', desc: 'Data Science, Networks, Cloud', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=350&h=200&fit=crop', href: '/academics' },
  { name: 'MBA', desc: 'Business, Finance, Marketing', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=350&h=200&fit=crop', href: '/academics' },
];

const stats = [
  { number: 25, suffix: '+', label: 'Years of Academic Excellence', icon: GraduationCap },
  { number: 95, suffix: '%', label: 'Placement Rate for Eligible Students', icon: Briefcase },
  { number: 50, suffix: '+', label: 'Industry Partnerships & MoUs', icon: Handshake },
  { number: 6000, suffix: '+', label: 'Proud Alumni Worldwide', icon: Globe },
];

const testimonials = [
  { name: 'Priya Sharma', dept: 'B.E. CSE 2022', quote: 'JIT gave me the foundation I needed. The faculty were incredibly supportive and the placement cell worked tirelessly. I got placed in Infosys with an excellent package.', img: 'https://images.unsplash.com/photo-1494790108755-2616b68a13e0?w=80&h=80&fit=crop&crop=face' },
  { name: 'Rahul Nair', dept: 'B.E. ECE 2021', quote: 'The labs and infrastructure at JIT are world-class. Working on real projects during my final year gave me hands-on experience that my employers truly valued.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face' },
  { name: 'Ananya Reddy', dept: 'MBA 2023', quote: "The MBA program at JIT opened so many doors. The industry mentors, case study approach, and networking opportunities were exceptional. I'm now with a top FMCG company.", img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face' },
  { name: 'Kiran Kumar', dept: 'B.E. ME 2022', quote: 'The mechanical engineering labs are equipped with the latest CNC machines and CAD software. The faculty push you to innovate. Proud to be a JITian!', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face' },
];

const events = [
  { date: 'APR 15', month: '2026', title: 'Annual Tech Fest — JyothyThon 2026', desc: 'Three days of hackathons, paper presentations, and tech exhibitions', link: '/campus-life' },
  { date: 'MAY 02', month: '2026', title: 'Campus Placement Drive', desc: 'Top IT companies visiting campus for final year recruitment', link: '/placements' },
  { date: 'JUN 10', month: '2026', title: 'Alumni Connect 2026', desc: 'Annual alumni meet — networking, panel discussions, and awards', link: '/campus-life' },
  { date: 'AUG 01', month: '2026', title: 'Freshers Orientation Day', desc: "Welcome ceremony for the new academic year's incoming batch", link: '/admissions' },
];

const news = [
  { title: 'JIT Students Win National Hackathon 2025', date: 'March 10, 2026', excerpt: "A team of four final-year CSE students from JIT clinched first place at the Smart India Hackathon 2025, bagging a prize of ₹1 lakh for their AI-powered disaster management solution.", img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=300&fit=crop' },
  { title: 'New AI & Data Science Lab Inaugurated', date: 'Feb 20, 2026', excerpt: 'State-of-the-art AI lab with 50 GPU-enabled workstations inaugurated by the Principal.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=100&fit=crop' },
  { title: 'JIT Signs MoU with Infosys for Training', date: 'Feb 5, 2026', excerpt: 'Landmark partnership with Infosys will provide students with industry-aligned curriculum and internship opportunities.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=100&fit=crop' },
  { title: 'NAAC Accreditation Renewed with High Grade', date: 'Jan 15, 2026', excerpt: "JIT's NAAC accreditation has been renewed, affirming our commitment to academic quality and student welfare.", img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200&h=100&fit=crop' },
];

const companies = [
  'Infosys', 'Wipro', 'TCS', 'Cognizant', 'Accenture', 'HCL', 'L&T', 'Capgemini', 'Mphasis', 'IBM', 'Dell', 'Oracle',
  'Infosys', 'Wipro', 'TCS', 'Cognizant', 'Accenture', 'HCL', 'L&T', 'Capgemini', 'Mphasis', 'IBM', 'Dell', 'Oracle',
];

// ─── Search Section ──────────────────────────────────────────────────────────
const searchTerms = ['Computer Science...', 'Placements...', 'Admissions 2026...', 'Hostel Fees...', 'MBA Program...', 'Fee Structure...'];

const popularTags = [
  { label: 'B.E. Computer Science', href: '/academics' },
  { label: 'B.E. Electronics', href: '/academics' },
  { label: 'MBA', href: '/academics' },
  { label: 'Placement Statistics', href: '/placements' },
  { label: 'Fee Structure', href: '/admissions' },
  { label: 'Hostel', href: '/campus-life' },
];

const searchIndex = [
  { title: 'B.E. Computer Science & Engineering', desc: 'AI, ML, Software Development, Data Structures', page: 'Academics', href: '/academics' },
  { title: 'B.E. Electronics & Communication', desc: 'VLSI, Embedded Systems, IoT, Signal Processing', page: 'Academics', href: '/academics' },
  { title: 'B.E. Mechanical Engineering', desc: 'Design, Manufacturing, Thermodynamics, CAD/CAM', page: 'Academics', href: '/academics' },
  { title: 'B.E. Civil Engineering', desc: 'Structures, Construction, Environmental Engineering', page: 'Academics', href: '/academics' },
  { title: 'B.E. Information Science & Engineering', desc: 'Data Science, Cloud Computing, Networks', page: 'Academics', href: '/academics' },
  { title: 'MBA Program', desc: 'Business Administration, Finance, Marketing, HR', page: 'Academics', href: '/academics' },
  { title: 'Admissions 2026', desc: 'How to apply, eligibility, CET cutoff, seat matrix', page: 'Admissions', href: '/admissions' },
  { title: 'Fee Structure', desc: 'Tuition fees, hostel charges, scholarship details', page: 'Admissions', href: '/admissions' },
  { title: 'Eligibility Criteria', desc: 'Academic requirements, age limit, Karnataka CET', page: 'Admissions', href: '/admissions' },
  { title: 'Placement Statistics', desc: '90%+ placement rate, ₹18 LPA highest package', page: 'Placements', href: '/placements' },
  { title: 'Top Recruiting Companies', desc: 'Infosys, Wipro, TCS, Cognizant, Accenture, HCL', page: 'Placements', href: '/placements' },
  { title: 'Placement Process', desc: 'Aptitude, technical round, HR interview preparation', page: 'Placements', href: '/placements' },
  { title: 'Hostel Facilities', desc: 'Boys & girls hostel, Wi-Fi, mess, 24/7 security', page: 'Campus Life', href: '/campus-life' },
  { title: 'Student Clubs & Activities', desc: 'Cultural, technical, sports clubs and NSS', page: 'Campus Life', href: '/campus-life' },
  { title: 'Sports Complex', desc: 'Cricket, basketball, volleyball, gymnasium', page: 'Campus Life', href: '/campus-life' },
  { title: 'Tech Fest — JyothyThon', desc: 'Annual hackathon, paper presentations, exhibitions', page: 'Campus Life', href: '/campus-life' },
  { title: 'Research Centres', desc: 'AI/ML Lab, IoT Centre, VLSI Design Lab', page: 'Research', href: '/research' },
  { title: 'Faculty Research Publications', desc: '40+ research papers, ISRO & DRDO collaborations', page: 'Research', href: '/research' },
  { title: 'About JIT', desc: 'History, vision, mission, NAAC accreditation, VTU affiliation', page: 'About', href: '/about' },
  { title: 'Leadership & Management', desc: 'Principal, Deans, Department Heads', page: 'About', href: '/about' },
  { title: 'Contact & Directions', desc: 'Address, phone, email, how to reach campus', page: 'Contact', href: '/contact' },
  { title: 'Central Library', desc: '40,000+ volumes, digital journals, NPTEL access', page: 'Academics', href: '/academics' },
];

function SearchSection() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof searchIndex>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [termIndex, setTermIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState('');
  const [typing, setTyping] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Typewriter for placeholder
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const current = searchTerms[termIndex];
    if (typing) {
      if (placeholder.length < current.length) {
        timeout = setTimeout(() => setPlaceholder(current.slice(0, placeholder.length + 1)), 65);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (placeholder.length > 0) {
        timeout = setTimeout(() => setPlaceholder(d => d.slice(0, -1)), 35);
      } else {
        setTermIndex(i => (i + 1) % searchTerms.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [placeholder, typing, termIndex]);

  // Live search filtering
  useEffect(() => {
    const q = query.toLowerCase().trim();
    if (!q) { setResults([]); setShowDropdown(false); return; }
    const filtered = searchIndex.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.page.toLowerCase().includes(q)
    ).slice(0, 6);
    setResults(filtered);
    setShowDropdown(true);
  }, [query]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    if (results.length > 0) {
      router.push(results[0].href);
    }
    setShowDropdown(false);
  };

  const handleResultClick = (href: string) => {
    setShowDropdown(false);
    setQuery('');
    router.push(href);
  };

  return (
    <motion.section
      className="py-20 px-6 bg-warm-white text-center"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-4">— Quick Search —</p>
        <div ref={wrapperRef} className="relative">
          <form onSubmit={handleSearch} className="flex items-center border-b-2 border-primary-black pb-2">
            <Search size={22} className="text-muted-gray mr-3 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onFocus={() => query && setShowDropdown(true)}
              placeholder={placeholder}
              className="flex-1 bg-transparent font-display text-xl md:text-2xl tracking-wider text-primary-black outline-none placeholder:text-muted-gray/40"
            />
            {query && (
              <button type="button" onClick={() => { setQuery(''); setShowDropdown(false); }} className="mr-3 text-muted-gray hover:text-primary-black">
                <X size={18} />
              </button>
            )}
            <button type="submit" className="bg-primary-black text-white font-mono text-xs tracking-widest uppercase px-5 py-2 hover:bg-primary-gold transition-colors duration-200">
              Search
            </button>
          </form>

          {/* Dropdown Results */}
          <AnimatePresence>
            {showDropdown && results.length > 0 && (
              <motion.div
                className="absolute top-full left-0 right-0 bg-white border border-gray-200 shadow-xl z-50 text-left"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                {results.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleResultClick(item.href)}
                    className="w-full flex items-start gap-3 px-5 py-3 hover:bg-warm-white border-b border-gray-100 last:border-0 transition-colors group"
                  >
                    <Search size={14} className="text-primary-gold mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm tracking-wider uppercase text-primary-black group-hover:text-primary-gold transition-colors">{item.title}</p>
                      <p className="text-muted-gray text-xs mt-0.5 truncate">{item.desc}</p>
                    </div>
                    <span className="font-mono text-xs text-primary-gold bg-primary-gold/10 px-2 py-0.5 flex-shrink-0">{item.page}</span>
                  </button>
                ))}
              </motion.div>
            )}
            {showDropdown && query && results.length === 0 && (
              <motion.div
                className="absolute top-full left-0 right-0 bg-white border border-gray-200 shadow-xl z-50 px-5 py-4 text-left"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <p className="text-muted-gray text-sm">No results for <span className="text-primary-black font-semibold">"{query}"</span>. Try browsing our pages.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-8">
          <p className="font-mono text-xs tracking-widest text-muted-gray uppercase mb-3">Popular Searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularTags.map(tag => (
              <Link key={tag.label} href={tag.href}>
                <motion.span
                  className="inline-block border-b border-primary-gold text-primary-gold font-body text-sm px-1 hover:text-primary-black hover:border-primary-black transition-colors cursor-none"
                  whileHover={{ y: -2 }}
                >
                  {tag.label}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ─── Campus Life Parallax + Hotspots ─────────────────────────────────────────
const hotspots = [
  { x: '20%', y: '40%', title: 'World-Class Library', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=200&fit=crop', desc: 'Our central library houses 40,000+ volumes, digital journals, NPTEL access, and quiet study zones open till 9 PM daily.', icon: BookOpen, link: '/about' },
  { x: '55%', y: '25%', title: 'Modern Hostels', img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=200&fit=crop', desc: 'Separate boys & girls hostels with Wi-Fi, mess, recreation rooms, 24/7 security, and a homely atmosphere.', icon: Users, link: '/campus-life' },
  { x: '75%', y: '55%', title: 'Sports Complex', img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=200&fit=crop', desc: 'Cricket, basketball, volleyball, indoor games, and a fully-equipped gymnasium with professional coaching staff.', icon: Dumbbell, link: '/campus-life' },
  { x: '38%', y: '65%', title: 'Research Labs', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop', desc: 'AI/ML Lab, IoT Centre, VLSI Design Lab and more — equipped with industry-grade tools and funded research projects.', icon: FlaskConical, link: '/research' },
];

function CampusParallax() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  useEffect(() => {
    if (!bgRef.current) return;
    const tween = gsap.to(bgRef.current, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: { trigger: bgRef.current.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
    });
    return () => { tween.kill(); };
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Parallax BG */}
      <div ref={bgRef} className="absolute inset-0 scale-125">
        <Image src="https://images.unsplash.com/photo-1667273704848-32df02bd29f3?q=80&w=1600&auto=format&fit=crop" alt="JIT Campus Grounds" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-primary-black/55" />

      {/* Banner label */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-primary-black px-12 py-3 skew-x-[-3deg]">
          <p className="font-display text-2xl md:text-4xl tracking-widest uppercase text-white skew-x-[3deg]">Explore Campus Life</p>
        </div>
      </div>

      {/* Hotspots */}
      {hotspots.map((spot, i) => (
        <div key={i} className="absolute z-20" style={{ left: spot.x, top: spot.y }}>
          {/* Pulsing ring */}
          <div className="absolute inset-0 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary-gold hotspot-pulse opacity-60" />
          <button
            onClick={() => setActiveHotspot(activeHotspot === i ? null : i)}
            className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-gold flex items-center justify-center shadow-gold hover:scale-110 transition-transform cursor-none relative z-10"
            aria-label={`View ${spot.title}`}
          >
            <Plus size={18} className="text-primary-black" />
          </button>
        </div>
      ))}

      {/* Hotspot Cards */}
      <AnimatePresence>
        {activeHotspot !== null && (
          <motion.div
            key={activeHotspot}
            className="absolute z-30 bg-dark-charcoal border border-primary-gold w-72 shadow-gold-lg"
            style={{
              left: `calc(${hotspots[activeHotspot].x} + 30px)`,
              top: hotspots[activeHotspot].y,
              transform: 'translateY(-50%)',
            }}
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <div className="relative h-32 overflow-hidden">
              <Image src={hotspots[activeHotspot].img} alt={hotspots[activeHotspot].title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display text-base tracking-wider uppercase text-white leading-tight">{hotspots[activeHotspot].title}</h3>
                <button onClick={() => setActiveHotspot(null)} className="text-gray-400 hover:text-white ml-2 flex-shrink-0 cursor-none"><X size={14} /></button>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">{hotspots[activeHotspot].desc}</p>
              <Link href={hotspots[activeHotspot].link} className="inline-flex items-center gap-1 mt-3 text-primary-gold font-display text-xs tracking-widest uppercase hover:gap-2 transition-all">
                Explore More <ArrowRight size={10} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stats counter animation
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach((el) => {
      const target = parseInt(el.getAttribute('data-target') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        onUpdate: function () {
          el.textContent = Math.round(obj.val) + suffix;
        },
      });
    });

    // Cards stagger
    gsap.utils.toArray<Element>('.dept-card').forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%', once: true } }
      );
    });

    gsap.utils.toArray<Element>('.event-card').forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 40, rotation: -1 },
        { opacity: 1, y: 0, rotation: 0, duration: 0.6, delay: i * 0.12, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%', once: true } }
      );
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Mosaic */}
      <section className="pt-16 bg-primary-black">
        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden mb-1">
          <div className="marquee-track">
            {[...heroImages, ...heroImages].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 h-40 overflow-hidden relative group cursor-none"
              >
                <Image
                  src={src}
                  alt="JIT Campus"
                  width={256}
                  height={160}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-gold/0 group-hover:bg-primary-gold/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-primary-black/80 px-3 py-1.5">
                  <p className="font-mono text-xs text-primary-gold tracking-widest uppercase">JIT Campus</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden">
          <div className="marquee-track-reverse">
            {[...heroImages2, ...heroImages2].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 h-40 overflow-hidden relative group cursor-none"
              >
                <Image
                  src={src}
                  alt="JIT Campus"
                  width={256}
                  height={160}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-gold/0 group-hover:bg-primary-gold/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-primary-black/80 px-3 py-1.5">
                  <p className="font-mono text-xs text-primary-gold tracking-widest uppercase">JIT Campus</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline + Quick Links */}
      <section className="bg-white py-20 px-6 text-center overflow-hidden">
        {/* Word-by-word title reveal */}
        <div className="max-w-5xl mx-auto">
          <div
            className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-widest text-primary-black leading-tight flex flex-wrap justify-center gap-x-4"
            style={{ perspective: '800px' }}
          >
            {['Shaping', "Tomorrow's", 'Engineers', 'and', 'Leaders', 'Today'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: -40 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'inline-block', transformOrigin: 'bottom center' }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="mt-6 font-mono text-sm tracking-widest text-muted-gray uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Affiliated to VTU &nbsp;|&nbsp; Approved by AICTE &nbsp;|&nbsp; NAAC Accredited
          </motion.p>

          {/* Gold divider line animate */}
          <motion.div
            className="mx-auto mt-6 h-px bg-primary-gold"
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          />

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { label: 'Admissions 2026', href: '/admissions' },
              { label: 'Explore Departments', href: '/academics' },
              { label: 'Placement Highlights', href: '/placements' },
              { label: 'Campus Life', href: '/campus-life' },
              { label: 'Apply Now', href: '/admissions' },
            ].map((btn, i) => (
              <Link key={btn.label} href={btn.href}>
                <motion.span
                  className="inline-flex items-center gap-2 border-2 border-primary-black px-5 py-2.5 font-display text-xs tracking-widest uppercase cursor-none hover:bg-primary-gold hover:border-primary-gold transition-all duration-300"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.1 + i * 0.08 }}
                >
                  {btn.label} <ArrowRight size={14} />
                </motion.span>
              </Link>
            ))}
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-8 flex justify-center"
          >
            <ChevronDown className="text-primary-gold" size={32} />
          </motion.div>
        </div>
      </section>

      {/* Animated Search Section */}
      <SearchSection />

      {/* Stats Section */}
      <section className="bg-primary-black py-20 px-6" ref={statsRef}>
        <SectionHeading title="Why Jyothy Institute of Technology?" theme="dark" className="mb-12" />
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center p-8 border border-border-gray hover:border-primary-gold transition-colors duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <stat.icon className="text-primary-gold mx-auto mb-4" size={36} />
              <div
                className="stat-number font-display text-5xl md:text-6xl text-primary-gold"
                data-target={stat.number}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </div>
              <p className="mt-2 text-gray-400 text-sm leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="text-center text-gray-400 max-w-3xl mx-auto mt-12 leading-relaxed"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Founded in 2007 by the Jyothy Charitable Trust, Jyothy Institute of Technology has grown into one of Bengaluru&apos;s
          most respected private engineering colleges. Our commitment to academic excellence, industry-relevant curriculum,
          and holistic student development has made us the preferred choice for thousands of aspiring engineers and managers.
        </motion.p>
      </section>

      {/* Highlight Cards */}
      <section className="py-16 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Campus Tour */}
          <motion.div className="relative overflow-hidden h-64 cursor-none" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
            <Image src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop" alt="Campus Tour" fill className="object-cover" />
            <div className="absolute inset-0 bg-primary-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center mb-3">
                <Play size={20} fill="white" />
              </div>
              <p className="font-display text-xl tracking-widest uppercase">Campus Tour</p>
            </div>
          </motion.div>

          {/* Card 2: #1 Choice */}
          <motion.div className="bg-primary-gold p-8 flex flex-col justify-center h-64" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
            <p className="font-mono text-xs tracking-widest text-primary-black/60 uppercase mb-2">Bengaluru&apos;s</p>
            <p className="font-display text-5xl text-primary-black leading-none">#1</p>
            <p className="font-display text-xl tracking-wider text-primary-black uppercase mt-2">Top Choice</p>
            <p className="mt-3 text-primary-black/80 text-sm">Private Engineering College on Kanakapura Road</p>
          </motion.div>

          {/* Card 3: Innovation Hub */}
          <motion.div className="relative overflow-hidden h-64 cursor-none" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
            <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" alt="Innovation Hub" fill className="object-cover" />
            <div className="absolute inset-0 bg-primary-black/70" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <Lightbulb className="text-primary-gold mb-2" size={28} />
              <p className="font-display text-xl tracking-widest uppercase">Innovation Hub</p>
              <p className="text-sm text-gray-300 mt-1">State-of-the-art labs & research centres <ArrowRight className="inline" size={12} /></p>
            </div>
          </motion.div>

          {/* Card 4: NAAC */}
          <motion.div className="bg-primary-black p-8 flex flex-col justify-center h-64" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
            <Award className="text-primary-gold mb-3" size={36} />
            <p className="font-display text-2xl tracking-wider text-white uppercase">NAAC<br />Accredited</p>
            <p className="mt-3 text-gray-400 text-sm">Recognized for quality education, infrastructure & student development</p>
          </motion.div>
        </div>
      </section>

      {/* Campus Life Parallax + Hotspots */}
      <CampusParallax />

      {/* Departments Carousel */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-primary-black px-8 py-3 inline-block">
              <h2 className="font-display text-3xl md:text-4xl tracking-widest text-white uppercase">Our Departments</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.name}
                className="dept-card border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image src={dept.img} alt={dept.name} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg tracking-wider uppercase text-primary-black">{dept.name}</h3>
                  <p className="text-muted-gray text-sm mt-1">{dept.desc}</p>
                  <Link href={dept.href} className="inline-flex items-center gap-1 mt-3 text-primary-gold font-display text-xs tracking-widest uppercase hover:gap-2 transition-all">
                    View Details <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/academics">
              <motion.span className="inline-flex items-center gap-2 border-2 border-primary-black px-8 py-3 font-display text-sm tracking-widest uppercase hover:bg-primary-gold hover:border-primary-gold transition-all duration-300 cursor-none" whileHover={{ scale: 1.02 }}>
                View All Departments <ArrowRight size={16} />
              </motion.span>
            </Link>
          </div>
        </div>
      </section>

      {/* Placement Highlights */}
      <section className="py-20 bg-warm-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Where Our Graduates Work" label="Placements" className="mb-12" />
          {/* Scrolling company logos */}
          <div className="overflow-hidden mb-12">
            <div className="flex gap-8 items-center" style={{ animation: 'marquee-left 25s linear infinite', width: 'max-content' }}>
              {companies.map((company, i) => (
                <div key={i} className="flex-shrink-0 bg-white border border-gray-200 px-6 py-3 min-w-[120px] text-center">
                  <span className="font-display text-sm tracking-widest text-primary-black uppercase">{company}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: '₹18 LPA', label: 'Highest Package (2024)' },
              { value: '₹4.5 LPA', label: 'Average Package' },
              { value: '500+', label: 'Offers in 2024-25' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="bg-primary-black text-center p-8 border-l-4 border-primary-gold"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              >
                <p className="font-display text-4xl text-primary-gold">{stat.value}</p>
                <p className="text-gray-400 mt-2 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/placements">
              <motion.span className="inline-flex items-center gap-2 bg-primary-gold px-8 py-3 font-display text-sm tracking-widest uppercase hover:bg-accent-gold transition-colors cursor-none" whileHover={{ scale: 1.02 }}>
                View Full Placement Report <ArrowRight size={16} />
              </motion.span>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-primary-black px-8 py-3 inline-block">
              <h2 className="font-display text-3xl md:text-4xl tracking-widest text-white uppercase">Latest News & Achievements</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative h-64 overflow-hidden mb-4">
                <Image src={news[0].img} alt={news[0].title} fill className="object-cover" />
                <div className="absolute inset-0 bg-primary-black/40" />
              </div>
              <p className="font-mono text-xs text-primary-gold tracking-widest uppercase">{news[0].date}</p>
              <h3 className="font-display text-2xl tracking-wider uppercase mt-1 text-primary-black">{news[0].title}</h3>
              <p className="text-muted-gray mt-2 text-sm leading-relaxed">{news[0].excerpt}</p>
            </motion.div>
            {/* Smaller stories */}
            <div className="space-y-6">
              {news.slice(1).map((item, i) => (
                <motion.div key={i} className="flex gap-4" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-primary-gold tracking-widest uppercase">{item.date}</p>
                    <h4 className="font-display text-sm tracking-wider uppercase text-primary-black mt-0.5">{item.title}</h4>
                    <p className="text-muted-gray text-xs mt-1 line-clamp-2">{item.excerpt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="What Our Students Say" theme="dark" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-dark-charcoal border border-border-gray p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ borderColor: '#CDB87C' }}
              >
                <p className="text-gray-300 text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-5">
                  <Image src={t.img} alt={t.name} width={40} height={40} className="rounded-full object-cover" />
                  <div>
                    <p className="font-display text-sm tracking-wider text-white uppercase">{t.name}</p>
                    <p className="text-primary-gold text-xs font-mono">{t.dept}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Upcoming Events" label="Calendar" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {events.map((event, i) => (
              <motion.div
                key={i}
                className="event-card bg-white border border-gray-200 p-6 hover:border-primary-gold hover:shadow-gold transition-all duration-300"
                whileHover={{ y: -6 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Calendar className="text-primary-gold mt-0.5" size={18} />
                  <div>
                    <p className="font-display text-3xl text-primary-black leading-none">{event.date}</p>
                    <p className="font-mono text-xs text-muted-gray">{event.month}</p>
                  </div>
                </div>
                <h3 className="font-display text-sm tracking-wider uppercase text-primary-black mb-1">{event.title}</h3>
                <p className="text-muted-gray text-xs leading-relaxed">{event.desc}</p>
                <Link href={event.link} className="inline-flex items-center gap-1 mt-3 text-primary-gold font-display text-xs tracking-widest uppercase hover:gap-2 transition-all">
                  Register <ChevronRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary-gold via-accent-gold to-yellow-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-primary-black leading-tight"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            Your Journey Starts Here
          </motion.h2>
          <motion.p
            className="mt-4 text-primary-black/70 text-base"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            Join 6000+ alumni who began their success story at Jyothy Institute of Technology
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          >
            <Link href="/admissions">
              <motion.span className="inline-flex items-center gap-2 bg-primary-black text-white px-10 py-4 font-display text-sm tracking-widest uppercase hover:bg-dark-charcoal transition-colors cursor-none" whileHover={{ scale: 1.02 }}>
                Apply Now <ArrowRight size={16} />
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span className="inline-flex items-center gap-2 border-2 border-primary-black text-primary-black px-10 py-4 font-display text-sm tracking-widest uppercase hover:bg-primary-black hover:text-white transition-all cursor-none" whileHover={{ scale: 1.02 }}>
                Schedule a Visit <MapPin size={16} />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
