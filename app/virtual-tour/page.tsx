'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Eye, BookOpen, Trophy, Home, TreePine, FlaskConical, Layers, Star } from 'lucide-react';

const tourStops = [
  {
    id: '01',
    title: 'Academic Block',
    icon: BookOpen,
    desc: 'Explore state-of-the-art classrooms, seminar halls, and departmental corridors spread across five floors. The academic block houses 6 departments and over 3,000 students daily.',
    highlights: ['Modern smart classrooms', 'Faculty research cabins', 'Departmental notice boards', 'Student project exhibition hall'],
  },
  {
    id: '02',
    title: 'Library & Labs',
    icon: FlaskConical,
    desc: 'Walk through the central library with 40,000+ volumes and explore cutting-edge labs including the GPU Computing Lab and IoT hub equipped with industry-grade tools.',
    highlights: ['Digital library terminals', 'AI & GPU Computing Lab', 'VLSI and Embedded Labs', 'Mechanical CNC Workshop'],
  },
  {
    id: '03',
    title: 'Sports Complex',
    icon: Trophy,
    desc: 'Tour the expansive sports facilities spanning 3 acres — from the cricket ground and outdoor courts to the indoor gymnasium and multi-purpose arena.',
    highlights: ['Cricket & football grounds', 'Basketball & volleyball courts', 'Badminton hall (4 courts)', 'Fully equipped gymnasium'],
  },
  {
    id: '04',
    title: 'Student Hostels',
    icon: Home,
    desc: 'Experience residential life at JIT — from the well-furnished hostel rooms and mess hall to the recreation room and open terrace garden.',
    highlights: ['Boys & Girls hostel blocks', 'Dining mess & canteen', 'Recreation & common rooms', 'Outdoor seating garden'],
  },
];

const highlights = [
  { icon: TreePine, value: '15 Acres', label: 'Green Campus' },
  { icon: Layers, value: 'Modern', label: 'Infrastructure' },
  { icon: FlaskConical, value: 'State-of-Art', label: 'Laboratories' },
  { icon: Star, value: 'World-Class', label: 'Sports Facilities' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function VirtualTourPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Virtual Tour
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Virtual Campus<br />Tour
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore the Jyothy Institute of Technology campus from wherever you are. Take a 360° immersive walk through our world-class facilities.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-dark-charcoal border-b border-border-gray">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-body text-lg text-gray-300 max-w-3xl leading-relaxed" {...fadeUp}>
            Can't visit us in person yet? Our virtual tour takes you through every corner of JIT's 15-acre campus. From high-tech labs to lush green lawns, experience the JIT environment before you arrive. Each tour stop below gives you an immersive look at life at JIT.
          </motion.p>
        </div>
      </section>

      {/* Tour Stops */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>360° Experience</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Tour Stops
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tourStops.map((stop, i) => (
              <motion.div
                key={stop.id}
                className="border border-border-gray hover:border-primary-gold transition-colors p-8 group relative overflow-hidden"
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute top-0 right-0 font-display text-8xl text-white/5 leading-none select-none pointer-events-none pr-4 pt-2">
                  {stop.id}
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-gold/10 border border-primary-gold/30 flex items-center justify-center group-hover:bg-primary-gold/20 transition-colors">
                    <stop.icon size={22} className="text-primary-gold" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-muted-gray tracking-widest uppercase">Stop {stop.id}</span>
                    <h3 className="font-display text-xl tracking-widest uppercase text-white">{stop.title}</h3>
                  </div>
                </div>
                <p className="font-body text-sm text-gray-400 leading-relaxed mb-6">{stop.desc}</p>
                <ul className="space-y-2 mb-8">
                  {stop.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 font-body text-xs text-gray-300">
                      <ChevronRight size={12} className="text-primary-gold flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <button className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-white transition-colors inline-flex items-center gap-2">
                  <Eye size={14} /> View 360°
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>At A Glance</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Campus Highlights
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className="text-center bg-white border border-gray-200 hover:border-primary-gold transition-colors p-8 group"
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <h.icon size={32} className="text-primary-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-display text-2xl tracking-widest text-primary-black mb-2">{h.value}</p>
                <p className="font-mono text-xs tracking-widest uppercase text-muted-gray">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary-gold">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 className="font-display text-3xl md:text-5xl tracking-widest uppercase text-primary-black mb-4" {...fadeUp}>
            Ready to Visit in Person?
          </motion.h2>
          <motion.p className="font-body text-primary-black/80 max-w-xl mx-auto mb-8 text-lg leading-relaxed" {...fadeUp} transition={{ delay: 0.1 }}>
            Schedule a campus visit and meet our faculty, see our labs firsthand, and get a real feel for life at JIT.
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <Link href="/contact" className="bg-primary-black text-primary-gold font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-dark-charcoal transition-colors inline-block">
              Plan Your Campus Visit
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
