'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Bus, Clock, Mail, MapPin, AlertCircle } from 'lucide-react';

const routes = [
  {
    route: 'Route 1',
    name: 'Jayanagar → JIT',
    via: 'Banashankari, Uttarahalli, Kanakapura Road',
    stops: ['Jayanagar 4th Block', 'Banashankari Bus Stand', 'Uttarahalli Cross', 'Kaggalipura', 'Tataguni Gate', 'JIT Campus'],
    departure: '7:30 AM',
    return: '5:00 PM & 6:00 PM',
    monthlyPass: '₹1,800',
  },
  {
    route: 'Route 2',
    name: 'Electronic City → JIT',
    via: 'BTM Layout, JP Nagar, Kanakapura Road',
    stops: ['Electronic City Phase 1', 'Bommanahalli', 'BTM 2nd Stage', 'JP Nagar 6th Phase', 'Puttenahalli', 'JIT Campus'],
    departure: '7:15 AM',
    return: '5:00 PM & 6:00 PM',
    monthlyPass: '₹2,000',
  },
  {
    route: 'Route 3',
    name: 'Bannerghatta Road → JIT',
    via: 'Arekere, Gottigere, Kanakapura Road',
    stops: ['Bannerghatta Road (BDA)', 'Arekere Gate', 'Gottigere', 'Hulimangala', 'Tataguni', 'JIT Campus'],
    departure: '7:45 AM',
    return: '5:00 PM & 6:00 PM',
    monthlyPass: '₹1,600',
  },
  {
    route: 'Route 4',
    name: 'Kanakapura Road → JIT',
    via: 'Padmanabhanagar, Kaggalipura',
    stops: ['Kanakapura Road (NICE Junction)', 'Padmanabhanagar Circle', 'Dollar Colony', 'Kaggalipura Bus Stand', 'JIT Campus'],
    departure: '8:00 AM',
    return: '5:00 PM & 6:00 PM',
    monthlyPass: '₹1,400',
  },
  {
    route: 'Route 5',
    name: 'Vijayanagar → JIT',
    via: 'Mysore Road, Kengeri, Kanakapura Road',
    stops: ['Vijayanagar Circle', 'Mysore Road (RTO)', 'Kengeri Bus Terminal', 'Rajarajeshwari Nagar', 'Kanakapura Road junction', 'JIT Campus'],
    departure: '7:30 AM',
    return: '5:00 PM & 6:00 PM',
    monthlyPass: '₹1,900',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function TransportPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Transport Routes
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Transport Routes
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            JIT operates dedicated bus services from key locations across Bengaluru, ensuring safe and comfortable commutes for students and staff.
          </motion.p>
        </div>
      </section>

      {/* Timing Banner */}
      <section className="py-12 px-6 bg-primary-gold">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Clock, label: 'Morning Pickup', value: '7:15 – 8:15 AM' },
            { icon: Bus, label: 'Evening Return Batch 1', value: '5:00 PM sharp' },
            { icon: Bus, label: 'Evening Return Batch 2', value: '6:00 PM sharp' },
          ].map((item, i) => (
            <motion.div key={item.label} className="flex items-center justify-center gap-3" {...fadeUp} transition={{ delay: i * 0.1 }}>
              <item.icon size={24} className="text-primary-black flex-shrink-0" />
              <div className="text-left">
                <p className="font-mono text-xs text-primary-black/70 tracking-widest uppercase">{item.label}</p>
                <p className="font-display text-xl text-primary-black">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Routes */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Bus Routes</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            All Routes & Pickup Points
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {routes.map((r, i) => (
              <motion.div
                key={r.route}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-gold flex items-center justify-center flex-shrink-0">
                      <Bus size={18} className="text-primary-black" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted-gray tracking-widest uppercase">{r.route}</p>
                      <h3 className="font-display text-lg tracking-widest uppercase text-primary-black">{r.name}</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs text-muted-gray tracking-widest uppercase">Monthly Pass</p>
                    <p className="font-display text-xl text-primary-gold">{r.monthlyPass}</p>
                  </div>
                </div>
                <p className="font-body text-xs text-muted-gray mb-4 flex items-center gap-1"><MapPin size={12} className="text-primary-gold" /> Via: {r.via}</p>
                <div className="mb-4">
                  <p className="font-mono text-xs text-muted-gray tracking-widest uppercase mb-2">Pickup Stops</p>
                  <div className="flex flex-col gap-1">
                    {r.stops.map((stop, j) => (
                      <div key={stop} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${j === r.stops.length - 1 ? 'bg-primary-gold' : 'bg-gray-300'}`} />
                        <span className={`font-body text-xs ${j === r.stops.length - 1 ? 'text-primary-gold font-semibold' : 'text-gray-600'}`}>{stop}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-6 pt-4 border-t border-gray-100">
                  <div>
                    <p className="font-mono text-xs text-muted-gray tracking-widest uppercase">Departure</p>
                    <p className="font-body text-sm font-semibold text-primary-black">{r.departure}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-gray tracking-widest uppercase">Return</p>
                    <p className="font-body text-sm font-semibold text-primary-black">{r.return}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Transport & Registration */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Public Transport</p>
            <h2 className="font-display text-2xl tracking-widest uppercase text-white mb-6">BMTC Bus Options</h2>
            <div className="space-y-4">
              <div className="border border-border-gray p-4">
                <p className="font-mono text-xs text-primary-gold tracking-widest uppercase mb-1">BMTC Route 500C</p>
                <p className="font-body text-sm text-gray-300">Runs from Banashankari to Kanakapura town. Alight at Tataguni Gate stop (Kanakapura Road).</p>
              </div>
              <div className="border border-border-gray p-4">
                <p className="font-mono text-xs text-primary-gold tracking-widest uppercase mb-1">BMTC Route KIA-3</p>
                <p className="font-body text-sm text-gray-300">Operates from Jayanagar via JP Nagar and Banashankari area towards Kanakapura Road corridor.</p>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-2">
              <AlertCircle size={16} className="text-primary-gold flex-shrink-0 mt-0.5" />
              <p className="font-body text-xs text-gray-400">JIT campus is approximately 200 metres from the Tataguni Gate BMTC stop.</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Register for JIT Bus</p>
            <h2 className="font-display text-2xl tracking-widest uppercase text-white mb-6">How to Register</h2>
            <div className="space-y-4">
              {[
                'Fill out the Transport Registration Form (available at admin office or download below)',
                'Choose your route and specify the boarding point',
                'Pay the monthly/semester bus pass fee at the accounts office',
                'Collect your bus pass from the transport office (Room 010, Ground Floor)',
                'Present your bus pass to the driver every day',
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-primary-gold w-5 flex-shrink-0">{i + 1}.</span>
                  <p className="font-body text-sm text-gray-300">{s}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2 text-gray-300 font-body text-sm"><Mail size={14} className="text-primary-gold" /> transport@jyothyit.ac.in</div>
              <div className="flex items-center gap-2 text-gray-300 font-body text-sm"><Clock size={14} className="text-primary-gold" /> Mon–Fri: 8:30 AM – 5:00 PM</div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
