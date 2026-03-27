'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const galleryItems = [
  {
    img: 'https://images.unsplash.com/photo-1667273704848-32df02bd29f3?q=80&w=900&auto=format&fit=crop',
    title: 'Main Campus',
    category: 'Infrastructure',
    desc: 'Spread across 15 acres in Tataguni, off Kanakapura Road, JIT\'s main campus blends green surroundings with modern academic facilities designed for focused learning.',
  },
  {
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&h=600&fit=crop',
    title: 'Convocation Ceremony',
    category: 'Events',
    desc: 'Every year, hundreds of graduates don the academic robe and receive their degrees — a proud moment for students, parents, and faculty of Jyothy Institute of Technology.',
  },
  {
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=600&fit=crop',
    title: 'Research Laboratories',
    category: 'Academics',
    desc: 'State-of-the-art labs equipped with GPU workstations, IoT kits, VLSI design tools, and advanced manufacturing equipment supporting cutting-edge student research.',
  },
  {
    img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900&h=600&fit=crop',
    title: 'Central Library',
    category: 'Facilities',
    desc: 'A quiet, well-lit space with 40,000+ volumes, digital journals, NPTEL access, and study zones open till 9 PM — the heart of academic life at JIT.',
  },
  {
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=600&fit=crop',
    title: 'Tech Fest — JyothyThon',
    category: 'Events',
    desc: 'Our annual technology festival brings together students from across Karnataka for three days of hackathons, paper presentations, robotics, and cultural showcases.',
  },
  {
    img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=900&h=600&fit=crop',
    title: 'Sports Complex',
    category: 'Campus Life',
    desc: 'The JIT sports complex hosts cricket, basketball, volleyball, badminton, and a fully-equipped gym with professional coaching staff for all students.',
  },
  {
    img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&h=600&fit=crop',
    title: 'Student Hostels',
    category: 'Facilities',
    desc: 'Separate boys and girls hostels with 24/7 security, Wi-Fi connectivity, hygienic mess facilities, and recreation rooms — a safe home away from home.',
  },
  {
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&h=600&fit=crop',
    title: 'Industry Workshops',
    category: 'Academics',
    desc: 'Regular workshops by engineers from Infosys, ISRO, Google, and Texas Instruments bridge the gap between classroom learning and real-world industry demands.',
  },
  {
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=600&fit=crop',
    title: 'Cultural Events',
    category: 'Campus Life',
    desc: 'Music, dance, drama, and art competitions flourish at JIT. Our cultural committee organises inter-college events that celebrate talent, diversity, and creativity.',
  },
  {
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=600&fit=crop',
    title: 'Collaborative Learning',
    category: 'Academics',
    desc: 'Project-based learning, group discussions, and peer mentoring foster collaboration. JIT students regularly participate in national-level competitions and win top honours.',
  },
];

export default function GalleryPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Parallax for every image inner div
      gsap.utils.toArray<HTMLElement>('.gallery-img-inner').forEach((img) => {
        gsap.fromTo(img,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: img.closest('.gallery-item') as Element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      });

      // Title reveal for each item
      gsap.utils.toArray<HTMLElement>('.gallery-title').forEach((title) => {
        gsap.fromTo(title,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: title.closest('.gallery-item') as Element,
              start: 'top 80%',
              once: true,
            },
          }
        );
      });

      // Description reveal
      gsap.utils.toArray<HTMLElement>('.gallery-desc').forEach((desc) => {
        gsap.fromTo(desc,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: desc.closest('.gallery-item') as Element,
              start: 'top 75%',
              once: true,
            },
          }
        );
      });

      // Category badge
      gsap.utils.toArray<HTMLElement>('.gallery-badge').forEach((badge) => {
        gsap.fromTo(badge,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: badge.closest('.gallery-item') as Element,
              start: 'top 80%',
              once: true,
            },
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-x-hidden bg-warm-white" ref={containerRef}>

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[420px] flex items-end pb-16 px-6 pt-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1667273704848-32df02bd29f3?q=80&w=1600&auto=format&fit=crop"
          alt="JIT Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-black/65" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[20, 40, 60, 80].map((left) => (
            <motion.div
              key={left}
              className="absolute top-0 bottom-0 w-px bg-primary-gold/10"
              style={{ left: `${left}%` }}
              initial={{ scaleY: 0, transformOrigin: 'top' }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: left / 100 }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Gallery
          </p>
          <motion.h1
            className="font-display text-6xl md:text-8xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Campus<br />Gallery
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-lg font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A visual journey through the spaces, events, and people that make Jyothy Institute of Technology a place to grow, discover, and belong.
          </motion.p>
        </div>

        {/* Scroll arrows */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <span className="font-mono text-xs text-primary-gold tracking-widest uppercase mb-2">Scroll</span>
          {[0, 1, 2].map((i) => (
            <svg key={i} width="30" height="14" viewBox="0 0 30 14" className="text-primary-gold" style={{ animation: `arrowFade 2s infinite ${i * 0.4}s` }}>
              <path d="M0 0 L15 12 L30 0" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          ))}
        </div>
      </section>

      {/* Gallery Items */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        {galleryItems.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              className="gallery-item relative grid grid-cols-1 md:grid-cols-2 gap-0 mb-[18vh] items-center"
            >
              {/* Image side */}
              <div className={`relative overflow-hidden h-[60vw] max-h-[540px] md:h-[500px] ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                {/* Oversized inner div for parallax travel room */}
                <div
                  className="gallery-img-inner absolute w-full"
                  style={{ height: '130%', top: '-15%' }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-primary-black/15" />
                </div>

                {/* Category badge */}
                <div className="gallery-badge absolute top-6 left-6 z-10">
                  <span className="font-mono text-xs tracking-widest uppercase bg-primary-gold text-primary-black px-3 py-1">
                    {item.category}
                  </span>
                </div>

                {/* Number watermark */}
                <div className="absolute bottom-4 right-6 z-10">
                  <span className="font-display text-6xl text-white/10 leading-none select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Text side */}
              <div className={`flex flex-col justify-center px-6 md:px-14 py-10 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                <div className="gallery-desc">
                  <span className="font-mono text-xs tracking-widest text-primary-gold uppercase block mb-4">
                    — {String(i + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')} —
                  </span>
                </div>
                <h2 className="gallery-title font-display text-4xl md:text-5xl lg:text-[3.5rem] tracking-widest uppercase text-primary-black leading-none mb-6">
                  {item.title}
                </h2>
                <div className="gallery-desc">
                  <p className="text-muted-gray leading-relaxed text-base max-w-sm">
                    {item.desc}
                  </p>
                  <div className="mt-8 w-12 h-0.5 bg-primary-gold" />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary-black py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-4">— Visit Us —</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-widest uppercase text-white mb-6">
            Experience JIT In Person
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            No gallery can fully capture the energy of our campus. Come visit us and see it for yourself.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-3 hover:bg-white transition-colors">
              Plan a Visit →
            </Link>
            <Link href="/admissions" className="border border-primary-gold text-primary-gold font-mono text-xs tracking-widest uppercase px-8 py-3 hover:bg-primary-gold hover:text-primary-black transition-colors">
              Apply Now
            </Link>
          </div>
        </motion.div>
      </section>

      <style jsx global>{`
        @keyframes arrowFade {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
