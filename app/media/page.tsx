'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Newspaper, Mail, Phone, Download, ExternalLink, Image } from 'lucide-react';

const pressReleases = [
  { date: 'Oct 15, 2025', title: 'JIT Signs MoU with Infosys for Industry-Integrated Learning Programme', category: 'Partnership' },
  { date: 'Sep 22, 2025', title: 'JIT Students Win Smart India Hackathon 2025 — Hardware Edition', category: 'Achievement' },
  { date: 'Aug 30, 2025', title: 'State-of-the-Art AI & GPU Computing Lab Inaugurated by Dr. C.N. Raghavendraswamy', category: 'Infrastructure' },
  { date: 'Jul 18, 2025', title: 'JIT Receives NAAC \'A+\' Grade in Re-Accreditation Cycle', category: 'Accreditation' },
  { date: 'May 5, 2025', title: 'JIT Annual Placement Season 2025 Sets Record — 94% Placement Rate', category: 'Placements' },
];

const mediaOutlets = [
  { name: 'Deccan Herald', type: 'Print & Digital' },
  { name: 'Times of India', type: 'Print & Digital' },
  { name: 'Bangalore Mirror', type: 'Print & Digital' },
  { name: 'Edex Live', type: 'Digital' },
  { name: 'Education World', type: 'Print & Digital' },
  { name: 'The Hindu Education', type: 'Digital' },
];

const brandAssets = [
  { name: 'JIT Official Logo', formats: 'PNG, SVG, PDF', size: '2.4 MB' },
  { name: 'Brand Guidelines Document', formats: 'PDF', size: '4.8 MB' },
  { name: 'Press Kit 2025', formats: 'ZIP (logos + photos)', size: '18.5 MB' },
  { name: 'High-Res Campus Photos', formats: 'ZIP (JPEG, 300 DPI)', size: '45 MB' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const categoryColors: Record<string, string> = {
  Partnership: 'bg-blue-900/30 text-blue-400 border-blue-800',
  Achievement: 'bg-green-900/30 text-green-400 border-green-800',
  Infrastructure: 'bg-yellow-900/30 text-yellow-400 border-yellow-800',
  Accreditation: 'bg-primary-gold/10 text-primary-gold border-primary-gold/30',
  Placements: 'bg-purple-900/30 text-purple-400 border-purple-800',
};

export default function MediaPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Media &amp; Press
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Media &amp; Press
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Official press releases, news coverage, media resources, and brand assets for the Jyothy Institute of Technology.
          </motion.p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Official Statements</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Press Releases
          </motion.h2>
          <div className="space-y-4">
            {pressReleases.map((pr, i) => (
              <motion.div
                key={pr.title}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6 group"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-muted-gray">{pr.date}</span>
                      <span className={`font-mono text-xs tracking-widest uppercase px-2 py-0.5 border ${categoryColors[pr.category]}`}>{pr.category}</span>
                    </div>
                    <h3 className="font-body font-semibold text-primary-black text-base leading-snug">{pr.title}</h3>
                  </div>
                  <button className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-primary-black hover:text-primary-gold transition-colors inline-flex items-center gap-2 flex-shrink-0">
                    <Download size={12} /> Download PR
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* In the News */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Coverage</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            In the News
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mediaOutlets.map((outlet, i) => (
              <motion.div
                key={outlet.name}
                className="border border-border-gray hover:border-primary-gold transition-colors p-5 text-center group"
                {...fadeUp}
                transition={{ delay: i * 0.07 }}
              >
                <Newspaper size={24} className="text-primary-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-body font-semibold text-white text-sm mb-1">{outlet.name}</p>
                <p className="font-mono text-xs text-muted-gray">{outlet.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Press Enquiries</p>
            <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-6">Media Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-body text-sm text-gray-700">
                <Mail size={16} className="text-primary-gold flex-shrink-0" />
                <a href="mailto:media@jyothyit.ac.in" className="hover:text-primary-gold transition-colors">media@jyothyit.ac.in</a>
              </div>
              <div className="flex items-center gap-3 font-body text-sm text-gray-700">
                <Phone size={16} className="text-primary-gold flex-shrink-0" />
                +91-80-28437091
              </div>
              <div className="flex items-center gap-3 font-body text-sm text-gray-700">
                <Newspaper size={16} className="text-primary-gold flex-shrink-0" />
                PR & Communications Office, Room 201, Admin Block
              </div>
            </div>
            <p className="font-body text-sm text-muted-gray mt-6 leading-relaxed">
              For interview requests, campus visit scheduling, or media inquiries, please email us at least 48 hours in advance. We endeavour to respond to all press queries within one business day.
            </p>
          </motion.div>

          {/* Brand Assets */}
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Resources</p>
            <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-6">Brand Assets</h2>
            <div className="space-y-3">
              {brandAssets.map((asset) => (
                <div key={asset.name} className="flex items-center justify-between bg-white border border-gray-200 hover:border-primary-gold transition-colors p-4">
                  <div className="flex items-center gap-3">
                    <Image size={16} className="text-primary-gold flex-shrink-0" />
                    <div>
                      <p className="font-body font-semibold text-primary-black text-sm">{asset.name}</p>
                      <p className="font-mono text-xs text-muted-gray">{asset.formats} • {asset.size}</p>
                    </div>
                  </div>
                  <button className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-4 py-2 hover:bg-primary-black hover:text-primary-gold transition-colors inline-flex items-center gap-1">
                    <Download size={10} /> Get
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery CTA */}
      <section className="py-16 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div {...fadeUp}>
            <h3 className="font-display text-2xl tracking-widest uppercase text-white mb-2">Photo Gallery</h3>
            <p className="font-body text-gray-400 max-w-lg text-sm">Browse high-resolution photos of campus life, events, convocations, and student activities in our media gallery.</p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <Link href="/gallery" className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors inline-flex items-center gap-2">
              Visit Gallery <ExternalLink size={12} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
