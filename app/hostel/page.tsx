'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Wifi, UtensilsCrossed, Dumbbell, ShieldCheck, HeartPulse, Gamepad2, WashingMachine, Droplets, Users, Phone, Mail, Clock } from 'lucide-react';

const amenities = [
  { icon: Wifi, label: 'High-Speed Wi-Fi', desc: '24/7 internet access across all floors' },
  { icon: UtensilsCrossed, label: 'Mess & Canteen', desc: 'Nutritious meals, veg & non-veg options' },
  { icon: Dumbbell, label: 'Gymnasium', desc: 'Fully equipped with modern equipment' },
  { icon: ShieldCheck, label: 'CCTV 24/7', desc: 'Round-the-clock surveillance' },
  { icon: HeartPulse, label: 'Medical Room', desc: 'First aid & nursing staff on duty' },
  { icon: Gamepad2, label: 'Recreation Room', desc: 'Indoor games, TV lounge' },
  { icon: WashingMachine, label: 'Laundry', desc: 'Washing machines available on each floor' },
  { icon: Droplets, label: 'Hot Water', desc: 'Solar-heated hot water all day' },
];

const rules = [
  'Entry and exit timings must be strictly followed (Boys: 10 PM, Girls: 9 PM)',
  'Visitors are allowed only during designated hours in the common room',
  'Ragging in any form is strictly prohibited and punishable by expulsion',
  'Residents must maintain cleanliness in rooms, corridors, and common areas',
  'Consumption of alcohol, tobacco, or any narcotics is strictly banned',
  'Loud music or disturbance after 10 PM is not permitted',
  'Electrical appliances like heaters and irons are not allowed in rooms',
  'Students must register leave with the warden before leaving campus',
  'Damage to hostel property will be recovered from the student\'s deposit',
  'Annual hostel admission is subject to good conduct and academic standing',
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function HostelPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Student Hostels
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Student Hostels
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Safe, comfortable, and vibrant residential life at JIT — your home away from home.
          </motion.p>
        </div>
      </section>

      {/* Hostel Cards */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Residential Facilities</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Our Hostel Blocks
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Boys Hostel */}
            <motion.div
              className="bg-primary-black border border-border-gray hover:border-primary-gold transition-colors p-8 rounded-sm"
              {...fadeUp}
              transition={{ delay: 0.15 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-gold flex items-center justify-center">
                  <Users size={24} className="text-primary-black" />
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-widest uppercase text-white">Boys Hostel</h3>
                  <p className="font-mono text-xs text-primary-gold tracking-widest">Block A — Vivekananda Bhavan</p>
                </div>
              </div>
              <ul className="space-y-3 font-body text-gray-300">
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> Total Capacity: <span className="text-white font-semibold ml-1">300 students</span></li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> Room Type: <span className="text-white font-semibold ml-1">Triple sharing (with cots, study tables, wardrobes)</span></li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> AC common room with TV & reading area</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> Fully equipped gymnasium on Ground Floor</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> 24/7 security with biometric entry</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> High-speed Wi-Fi throughout the block</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> In-house mess serving 3 meals + snacks</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> RO-purified drinking water on every floor</li>
              </ul>
              <div className="mt-8 pt-6 border-t border-border-gray">
                <p className="font-mono text-xs text-muted-gray tracking-widest uppercase">Annual Hostel Fee</p>
                <p className="font-display text-3xl text-primary-gold mt-1">₹85,000 <span className="text-base text-gray-400 font-body">/ year</span></p>
              </div>
            </motion.div>

            {/* Girls Hostel */}
            <motion.div
              className="bg-primary-black border border-border-gray hover:border-primary-gold transition-colors p-8 rounded-sm"
              {...fadeUp}
              transition={{ delay: 0.25 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-gold flex items-center justify-center">
                  <Users size={24} className="text-primary-black" />
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-widest uppercase text-white">Girls Hostel</h3>
                  <p className="font-mono text-xs text-primary-gold tracking-widest">Block B — Sarojini Bhavan</p>
                </div>
              </div>
              <ul className="space-y-3 font-body text-gray-300">
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> Total Capacity: <span className="text-white font-semibold ml-1">200 students</span></li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> Room Type: <span className="text-white font-semibold ml-1">Double sharing (with attached bathroom)</span></li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> Resident lady warden on duty 24/7</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> CCTV surveillance at all entry/exit points</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> Spacious common room with indoor games</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> Separate mess with hygienic kitchen</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> Panic buttons installed in corridors</li>
                <li className="flex items-center gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0" /> Dedicated study hall open till 11 PM</li>
              </ul>
              <div className="mt-8 pt-6 border-t border-border-gray">
                <p className="font-mono text-xs text-muted-gray tracking-widest uppercase">Annual Hostel Fee</p>
                <p className="font-display text-3xl text-primary-gold mt-1">₹90,000 <span className="text-base text-gray-400 font-body">/ year</span></p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>What We Offer</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Hostel Amenities
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenities.map((item, i) => (
              <motion.div
                key={item.label}
                className="border border-border-gray hover:border-primary-gold transition-colors p-6 group cursor-default"
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
              >
                <item.icon size={28} className="text-primary-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-sm tracking-widest uppercase text-white mb-2">{item.label}</h3>
                <p className="font-body text-xs text-muted-gray leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hostel Rules */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Discipline & Conduct</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Hostel Rules & Regulations
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {rules.map((rule, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 bg-white border border-gray-200 hover:border-primary-gold transition-colors p-4"
                {...fadeUp}
                transition={{ delay: i * 0.04 }}
              >
                <span className="font-mono text-xs text-primary-gold font-bold flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-body text-sm text-gray-700 leading-relaxed">{rule}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Wardens */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Get In Touch</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Warden Contact Details
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="border border-border-gray p-8" {...fadeUp} transition={{ delay: 0.15 }}>
              <h3 className="font-display text-xl tracking-widest uppercase text-primary-gold mb-6">Boys Hostel Warden</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users size={16} className="text-primary-gold" />
                  <span className="font-body text-white">Mr. Nagaraj B.S.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-primary-gold" />
                  <span className="font-body text-gray-300">+91-80-28437095</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-primary-gold" />
                  <span className="font-body text-gray-300">boyshostel@jyothyit.ac.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-primary-gold" />
                  <span className="font-body text-gray-300">Available: 8:00 AM – 10:00 PM</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="border border-border-gray p-8" {...fadeUp} transition={{ delay: 0.25 }}>
              <h3 className="font-display text-xl tracking-widest uppercase text-primary-gold mb-6">Girls Hostel Warden</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users size={16} className="text-primary-gold" />
                  <span className="font-body text-white">Mrs. Rekha Vishwanath</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-primary-gold" />
                  <span className="font-body text-gray-300">+91-80-28437096</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-primary-gold" />
                  <span className="font-body text-gray-300">girlshostel@jyothyit.ac.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-primary-gold" />
                  <span className="font-body text-gray-300">Available: 8:00 AM – 9:00 PM</span>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div className="mt-12 text-center" {...fadeUp} transition={{ delay: 0.3 }}>
            <Link href="/contact" className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors inline-block">
              Contact Admissions for Hostel Booking
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
