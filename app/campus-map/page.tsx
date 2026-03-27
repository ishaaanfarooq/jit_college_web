'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, MapPin, Bus, Train, Navigation, ExternalLink } from 'lucide-react';

const locations = [
  { label: 'Main Gate', top: '85%', left: '48%', color: '#CDB87C' },
  { label: 'Academic Block', top: '40%', left: '45%', color: '#CDB87C' },
  { label: 'Admin Block', top: '30%', left: '60%', color: '#CDB87C' },
  { label: 'Library', top: '50%', left: '30%', color: '#CDB87C' },
  { label: 'Hostels', top: '20%', left: '20%', color: '#CDB87C' },
  { label: 'Sports Complex', top: '65%', left: '75%', color: '#CDB87C' },
  { label: 'Canteen', top: '55%', left: '55%', color: '#CDB87C' },
  { label: 'Parking', top: '75%', left: '30%', color: '#CDB87C' },
];

const keyLocations = [
  { name: 'Main Academic Block', desc: 'Departments of CSE, ECE, ME, Civil, ISE — classrooms and faculty cabins' },
  { name: 'Administrative Block', desc: 'Principal office, examination cell, admissions, accounts, and registrar' },
  { name: 'Central Library', desc: '40,000+ volume library with digital section and OPAC terminals' },
  { name: 'Boys Hostel (Block A)', desc: 'Vivekananda Bhavan — 300 student capacity, 3-sharing rooms' },
  { name: 'Girls Hostel (Block B)', desc: 'Sarojini Bhavan — 200 student capacity, 2-sharing rooms' },
  { name: 'Sports Complex', desc: 'Basketball, volleyball, badminton courts; cricket ground; gym' },
  { name: 'Canteen & Cafeteria', desc: 'Full-service cafeteria open 7 AM – 8 PM on all working days' },
  { name: 'Parking Zone', desc: 'Designated two-wheeler and four-wheeler parking for students and staff' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function CampusMapPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Campus Map
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Campus Map
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            JIT campus spread across 15 acres at Tataguni, off Kanakapura Road, Bengaluru – 560082.
          </motion.p>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Interactive Layout</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-8" {...fadeUp} transition={{ delay: 0.1 }}>
            Campus Layout
          </motion.h2>
          <motion.div
            className="relative w-full bg-primary-black rounded-sm overflow-hidden border border-border-gray"
            style={{ height: '560px' }}
            {...fadeUp}
            transition={{ delay: 0.2 }}
          >
            {/* Grid lines */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(10)].map((_, i) => (
                <div key={`h${i}`} className="absolute w-full border-t border-primary-gold" style={{ top: `${i * 10}%` }} />
              ))}
              {[...Array(10)].map((_, i) => (
                <div key={`v${i}`} className="absolute h-full border-l border-primary-gold" style={{ left: `${i * 10}%` }} />
              ))}
            </div>

            {/* Campus boundary */}
            <div className="absolute inset-6 border-2 border-primary-gold/30 rounded-sm" />

            {/* Road */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-dark-charcoal/80 flex items-center px-8">
              <span className="font-mono text-xs text-muted-gray tracking-widest uppercase">← Kanakapura Road</span>
            </div>

            {/* Location pins */}
            {locations.map((loc) => (
              <div
                key={loc.label}
                className="absolute group cursor-pointer"
                style={{ top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}
              >
                <div className="relative flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary-gold animate-pulse" />
                  <div className="absolute bottom-5 bg-primary-black border border-primary-gold px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <span className="font-mono text-xs text-primary-gold tracking-widest">{loc.label}</span>
                  </div>
                  <p className="font-mono text-xs text-white/70 mt-1 whitespace-nowrap text-center hidden md:block" style={{ fontSize: '9px' }}>{loc.label}</p>
                </div>
              </div>
            ))}

            <div className="absolute top-4 right-4">
              <div className="bg-primary-black/80 border border-border-gray p-3">
                <p className="font-mono text-xs text-primary-gold tracking-widest uppercase mb-2">Legend</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-gold" />
                  <span className="font-mono text-xs text-gray-400">Campus Landmark</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Locations List */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Directory</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Key Locations
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {keyLocations.map((loc, i) => (
              <motion.div
                key={loc.name}
                className="flex items-start gap-4 border border-border-gray hover:border-primary-gold transition-colors p-5"
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
              >
                <MapPin size={18} className="text-primary-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-sm tracking-widest uppercase text-white mb-1">{loc.name}</h3>
                  <p className="font-body text-xs text-gray-400 leading-relaxed">{loc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Reach */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Getting Here</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            How to Reach JIT
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6" {...fadeUp} transition={{ delay: 0.1 }}>
              <Bus size={28} className="text-primary-gold mb-4" />
              <h3 className="font-display text-lg tracking-widest uppercase text-primary-black mb-4">By BMTC Bus</h3>
              <ul className="space-y-2 font-body text-sm text-muted-gray">
                <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> Route 500C from Banashankari</li>
                <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> Route KIA-3 via Jayanagar</li>
                <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> Alight at Tataguni Gate Stop</li>
                <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> JIT campus is 200m from the bus stop</li>
              </ul>
            </motion.div>
            <motion.div className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6" {...fadeUp} transition={{ delay: 0.2 }}>
              <Train size={28} className="text-primary-gold mb-4" />
              <h3 className="font-display text-lg tracking-widest uppercase text-primary-black mb-4">By Metro</h3>
              <ul className="space-y-2 font-body text-sm text-muted-gray">
                <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> Namma Metro Green Line</li>
                <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> Alight at Silk Institute station</li>
                <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> Take auto/cab for 8 km to JIT</li>
                <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> Approx. 20 min from station</li>
              </ul>
            </motion.div>
            <motion.div className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6" {...fadeUp} transition={{ delay: 0.3 }}>
              <Navigation size={28} className="text-primary-gold mb-4" />
              <h3 className="font-display text-lg tracking-widest uppercase text-primary-black mb-4">By Road</h3>
              <ul className="space-y-2 font-body text-sm text-muted-gray mb-6">
                <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> NH-948 (Kanakapura Road)</li>
                <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> 18 km from Banashankari Circle</li>
                <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> Landmark: Tataguni Village</li>
              </ul>
              <a
                href="https://maps.google.com/?q=Jyothy+Institute+of+Technology+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-4 py-2 hover:bg-primary-black hover:text-primary-gold transition-colors inline-flex items-center gap-2"
              >
                <ExternalLink size={12} /> Open Google Maps
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
