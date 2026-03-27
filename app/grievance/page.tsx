'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, GraduationCap, Building2, Layers, Shield, Clock, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const grievanceTypes = [
  { icon: GraduationCap, title: 'Academic', desc: 'Issues related to examination results, attendance, course credits, timetable conflicts, or unfair evaluation practices.' },
  { icon: Building2, title: 'Administrative', desc: 'Concerns about fee, certificates, documentation delays, admission process, or policy-related grievances.' },
  { icon: Layers, title: 'Infrastructure', desc: 'Complaints regarding maintenance of classrooms, labs, washrooms, hostels, or common areas.' },
  { icon: Shield, title: 'Harassment', desc: 'Any form of physical, verbal, or sexual harassment by students, faculty, or staff members.' },
];

const committeeMembers = [
  { role: 'Chairperson', name: 'Dr. Meera G.', dept: 'ISE' },
  { role: 'Member', name: 'Prof. Dr. R.K. Sharma', dept: 'Principal' },
  { role: 'Member', name: 'Dr. Suresh Kumar', dept: 'CSE' },
  { role: 'Member', name: 'Dr. Kavitha M.', dept: 'ECE' },
  { role: 'Student Rep.', name: 'Student Welfare Office', dept: 'Student Body' },
];

const escalation = [
  { step: '01', title: 'Submit Grievance', desc: 'Submit grievance via online form, email, or written application to the Grievance Cell.' },
  { step: '02', title: 'Acknowledgement', desc: 'Grievance is acknowledged within 3 working days with a reference number.' },
  { step: '03', title: 'Investigation', desc: 'Committee investigates and gathers responses from relevant parties.' },
  { step: '04', title: 'Resolution', desc: 'Resolution communicated to the student within 30 working days.' },
  { step: '05', title: 'Appeal', desc: 'If unsatisfied, appeal to Principal within 15 days of resolution communication.' },
  { step: '06', title: 'Escalate to VTU', desc: 'Unresolved issues may be escalated to VTU Ombudsperson or UGC.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function GrievancePage() {
  const [formData, setFormData] = useState({ name: '', email: '', dept: '', category: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Grievance Redressal
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Grievance<br />Redressal
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            JIT is dedicated to addressing student concerns promptly, fairly, and transparently through a structured grievance mechanism.
          </motion.p>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-16 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-body text-lg text-gray-300 max-w-3xl leading-relaxed" {...fadeUp}>
            The Grievance Redressal Cell at JIT provides a formal channel through which students, parents, and staff can raise concerns about academic, administrative, infrastructure, or personal matters. Every grievance is treated with utmost confidentiality, fairness, and urgency.
          </motion.p>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Scope</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Types of Grievances Handled
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {grievanceTypes.map((g, i) => (
              <motion.div
                key={g.title}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6 group"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <g.icon size={28} className="text-primary-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg tracking-widest uppercase text-primary-black mb-3">{g.title}</h3>
                <p className="font-body text-sm text-muted-gray leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Form */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Submit Online</p>
            <h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-8">
              Submit Your Grievance
            </h2>
            {submitted ? (
              <div className="border border-primary-gold p-8 text-center">
                <p className="font-display text-2xl tracking-widest uppercase text-primary-gold mb-4">Submitted Successfully</p>
                <p className="font-body text-gray-300">Your grievance has been received. You will receive an acknowledgement within 3 working days at the email address provided.</p>
                <p className="font-mono text-xs text-muted-gray mt-4">Reference ID: GRV-{Date.now().toString().slice(-6)}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-mono text-xs tracking-widest text-primary-gold uppercase block mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-dark-charcoal border border-border-gray text-white px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs tracking-widest text-primary-gold uppercase block mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-dark-charcoal border border-border-gray text-white px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors"
                    placeholder="your.email@jyothyit.ac.in"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs tracking-widest text-primary-gold uppercase block mb-2">Department</label>
                  <input
                    type="text"
                    className="w-full bg-dark-charcoal border border-border-gray text-white px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors"
                    placeholder="e.g., CSE, ECE, ME"
                    value={formData.dept}
                    onChange={e => setFormData({ ...formData, dept: e.target.value })}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs tracking-widest text-primary-gold uppercase block mb-2">Category *</label>
                  <select
                    required
                    className="w-full bg-dark-charcoal border border-border-gray text-white px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors"
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="">Select category</option>
                    <option>Academic</option>
                    <option>Administrative</option>
                    <option>Infrastructure</option>
                    <option>Harassment</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-xs tracking-widest text-primary-gold uppercase block mb-2">Grievance Details *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-dark-charcoal border border-border-gray text-white px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors resize-none"
                    placeholder="Describe your grievance in detail..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors w-full">
                  Submit Grievance
                </button>
              </form>
            )}
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Committee</p>
            <h2 className="font-display text-3xl tracking-widest uppercase text-white mb-8">Grievance Committee</h2>
            <div className="space-y-3 mb-12">
              {committeeMembers.map((m) => (
                <div key={m.name} className="border border-border-gray p-4 flex justify-between items-center">
                  <div>
                    <p className="font-body text-white font-semibold text-sm">{m.name}</p>
                    <p className="font-mono text-xs text-muted-gray tracking-widest">{m.dept}</p>
                  </div>
                  <span className="font-mono text-xs text-primary-gold tracking-widest uppercase">{m.role}</span>
                </div>
              ))}
            </div>
            <div className="border border-border-gray p-6">
              <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-4">Response Timeline</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-primary-gold flex-shrink-0" />
                  <p className="font-body text-sm text-gray-300">Acknowledgement within <span className="text-white font-semibold">3 working days</span></p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-primary-gold flex-shrink-0" />
                  <p className="font-body text-sm text-gray-300">Resolution within <span className="text-white font-semibold">30 working days</span></p>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowUpRight size={16} className="text-primary-gold flex-shrink-0" />
                  <p className="font-body text-sm text-gray-300">Appeal to Principal within 15 days of resolution</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Escalation */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Process</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Escalation Process
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {escalation.map((e, i) => (
              <motion.div
                key={e.step}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6 relative overflow-hidden"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <span className="absolute top-4 right-4 font-display text-5xl text-gray-100 leading-none">{e.step}</span>
                <h3 className="font-display text-lg tracking-widest uppercase text-primary-black mb-3">{e.title}</h3>
                <p className="font-body text-sm text-muted-gray leading-relaxed relative z-10">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
