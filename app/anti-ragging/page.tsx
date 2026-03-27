'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, ShieldAlert, Phone, Mail, ExternalLink, Download, AlertTriangle, Scale } from 'lucide-react';

const committeeMembers = [
  { role: 'Chairperson', name: 'Prof. Dr. R.K. Sharma', designation: 'Principal, JIT' },
  { role: 'Member', name: 'Dr. Anitha Rao', designation: 'Head, Dept. of CSE' },
  { role: 'Member', name: 'Dr. Kavitha M.', designation: 'Head, Dept. of ECE' },
  { role: 'Member', name: 'Dr. Vikram Singh', designation: 'Head, Dept. of ME' },
  { role: 'Member', name: 'Dr. Shalini D.', designation: 'Head, Dept. of Civil' },
  { role: 'Member', name: 'Mr. B.S. Nagaraj', designation: 'Chief Warden' },
  { role: 'Student Representative', name: 'Student Council President', designation: 'Elected Representative' },
  { role: 'External Member', name: 'Sub-Inspector, Kanakapura Police', designation: 'Police Liaison Officer' },
];

const constitutesRagging = [
  'Physically assaulting or threatening any student',
  'Teasingly or threateningly asking a junior to perform acts they would not normally do',
  'Forcing consumption of food, drink, or any substance',
  'Deliberately making a student do physically strenuous activity',
  'Using foul or abusive language directed at a student',
  'Sending lewd or offensive messages, emails, or social media posts',
  'Humiliating a student in any form — verbal, written, or physical',
  'Depriving a student of sleep, food, or comfort',
  'Any act that causes fear, shame, or psychological trauma',
];

const penalties = [
  { level: 'Level 1 — Minor Offence', consequence: 'Written apology, suspension from hostel or campus for 1–5 days, parent/guardian notification' },
  { level: 'Level 2 — Moderate Offence', consequence: 'Suspension from institution for 1 semester, withholding scholarship/academic benefits' },
  { level: 'Level 3 — Severe Offence', consequence: 'Expulsion from institution, rustication, debarment from admission to any institution' },
  { level: 'Criminal Activity', consequence: 'FIR lodged with police, imprisonment as per IPC provisions, academic record annotation' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AntiRaggingPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Anti-Ragging Committee
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Anti-Ragging<br />Committee
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            JIT is committed to providing a safe, respectful, and ragging-free environment for every student.
          </motion.p>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 px-6 bg-primary-gold">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex items-start gap-6" {...fadeUp}>
            <ShieldAlert size={48} className="text-primary-black flex-shrink-0" />
            <div>
              <h2 className="font-display text-2xl md:text-3xl tracking-widest uppercase text-primary-black mb-4">
                JIT's Zero-Tolerance Policy
              </h2>
              <p className="font-body text-primary-black/80 text-lg leading-relaxed max-w-4xl">
                Jyothy Institute of Technology maintains an absolute zero-tolerance policy towards ragging in any form. As mandated by the Hon'ble Supreme Court of India and UGC regulations, the institution has constituted an Anti-Ragging Committee and Anti-Ragging Squad to ensure swift action against any perpetrators. All students must submit a signed affidavit at the time of admission pledging not to indulge in or abet ragging.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Committee Table */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Committee Composition</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Committee Members
          </motion.h2>
          <motion.div className="overflow-x-auto" {...fadeUp} transition={{ delay: 0.2 }}>
            <table className="w-full border-collapse font-body">
              <thead>
                <tr className="bg-primary-black">
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Role</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Name</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Designation</th>
                </tr>
              </thead>
              <tbody>
                {committeeMembers.map((m, i) => (
                  <tr key={i} className={`border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-4 px-6 text-primary-gold font-mono text-xs tracking-widest uppercase">{m.role}</td>
                    <td className="py-4 px-6 text-primary-black font-semibold">{m.name}</td>
                    <td className="py-4 px-6 text-muted-gray text-sm">{m.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* What Constitutes Ragging */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Know Your Rights</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            What Constitutes Ragging
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {constitutesRagging.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 border border-border-gray hover:border-primary-gold transition-colors p-4"
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
              >
                <AlertTriangle size={16} className="text-primary-gold flex-shrink-0 mt-0.5" />
                <p className="font-body text-sm text-gray-300 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Legal Consequences</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Penalties for Ragging
          </motion.h2>
          <div className="space-y-4">
            {penalties.map((p, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6 flex items-start gap-6"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <Scale size={24} className="text-primary-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-sm tracking-widest uppercase text-primary-black mb-2">{p.level}</h3>
                  <p className="font-body text-sm text-muted-gray leading-relaxed">{p.consequence}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Take Action</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Where to Report
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div className="border border-border-gray hover:border-primary-gold transition-colors p-6" {...fadeUp} transition={{ delay: 0.1 }}>
              <Phone size={28} className="text-primary-gold mb-4" />
              <h3 className="font-display text-sm tracking-widest uppercase text-white mb-3">National Helpline</h3>
              <p className="font-display text-2xl text-primary-gold">1800-180-5522</p>
              <p className="font-body text-xs text-muted-gray mt-2">UGC Anti-Ragging Helpline — Toll-Free, 24/7</p>
            </motion.div>
            <motion.div className="border border-border-gray hover:border-primary-gold transition-colors p-6" {...fadeUp} transition={{ delay: 0.2 }}>
              <Mail size={28} className="text-primary-gold mb-4" />
              <h3 className="font-display text-sm tracking-widest uppercase text-white mb-3">Email the Committee</h3>
              <p className="font-body text-primary-gold text-sm">antiragging@jyothyit.ac.in</p>
              <p className="font-body text-xs text-muted-gray mt-2">Confidential reports reviewed within 24 hours</p>
            </motion.div>
            <motion.div className="border border-border-gray hover:border-primary-gold transition-colors p-6" {...fadeUp} transition={{ delay: 0.3 }}>
              <ExternalLink size={28} className="text-primary-gold mb-4" />
              <h3 className="font-display text-sm tracking-widest uppercase text-white mb-3">UGC Portal</h3>
              <a href="https://www.antiragging.in" target="_blank" rel="noopener noreferrer" className="font-body text-primary-gold text-sm hover:text-white transition-colors">
                www.antiragging.in
              </a>
              <p className="font-body text-xs text-muted-gray mt-2">File online complaints with UGC directly</p>
            </motion.div>
          </div>
          <motion.div className="flex flex-col sm:flex-row gap-4" {...fadeUp} transition={{ delay: 0.35 }}>
            <button className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors inline-flex items-center gap-2">
              <Download size={14} /> Download Affidavit Form
            </button>
            <Link href="/report" className="border border-primary-gold text-primary-gold font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-primary-gold hover:text-primary-black transition-colors inline-flex items-center gap-2">
              Report an Incident Online
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
