'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, AlertTriangle, Phone, ShieldAlert, Lock, Search } from 'lucide-react';
import { useState } from 'react';

const emergencyContacts = [
  { label: 'Anti-Ragging Helpline', number: '1800-180-5522', note: 'Toll-Free, 24/7', urgent: true },
  { label: 'Campus Security', number: '+91-80-28437092', note: 'Round the clock', urgent: true },
  { label: 'Principal Office', number: '+91-80-28437091', note: 'Mon–Fri 9 AM–5 PM', urgent: false },
  { label: 'Police Emergency', number: '100', note: 'National Emergency', urgent: true },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function ReportPage() {
  const [formData, setFormData] = useState({ category: '', urgency: '', description: '', location: '', contactEmail: '' });
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [trackRef, setTrackRef] = useState('');
  const [trackResult, setTrackResult] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleTrack = () => {
    if (trackRef.trim()) {
      setTrackResult('Report found. Status: Under Review — assigned to relevant committee. Last updated: Oct 30, 2025.');
    }
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
            Report an Issue
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Report an Issue
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Report ragging, harassment, safety hazards, or other concerns. Every report is taken seriously and handled with strict confidentiality.
          </motion.p>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-12 px-6 bg-red-950/50 border-b border-red-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex items-center gap-3 mb-6" {...fadeUp}>
            <AlertTriangle size={20} className="text-red-400" />
            <p className="font-mono text-xs tracking-widest text-red-400 uppercase">For Emergencies — Call Immediately</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {emergencyContacts.map((c, i) => (
              <motion.div
                key={c.label}
                className={`p-4 border ${c.urgent ? 'border-red-800 bg-red-900/20' : 'border-border-gray bg-dark-charcoal'}`}
                {...fadeUp}
                transition={{ delay: i * 0.07 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Phone size={14} className={c.urgent ? 'text-red-400' : 'text-primary-gold'} />
                  <p className="font-mono text-xs text-muted-gray tracking-widest uppercase">{c.label}</p>
                </div>
                <p className={`font-display text-xl ${c.urgent ? 'text-red-300' : 'text-primary-gold'}`}>{c.number}</p>
                <p className="font-mono text-xs text-muted-gray mt-1">{c.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Form */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Submit a Report</p>
            <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-8">Report Form</h2>

            {submitted ? (
              <div className="bg-primary-black border border-primary-gold p-10 text-center">
                <ShieldAlert size={40} className="text-primary-gold mx-auto mb-4" />
                <p className="font-display text-2xl tracking-widest uppercase text-primary-gold mb-3">Report Submitted</p>
                <p className="font-body text-gray-300 text-sm mb-4">Your report has been received and assigned a reference number.</p>
                <p className="font-mono text-sm text-primary-gold">Reference: RPT-{Date.now().toString().slice(-6)}</p>
                <p className="font-body text-xs text-gray-400 mt-3">Save this number to track your report status.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="anon" checked={anonymous} onChange={e => setAnonymous(e.target.checked)} className="w-4 h-4 accent-primary-gold" />
                  <label htmlFor="anon" className="font-mono text-xs text-muted-gray tracking-widest uppercase">Submit Anonymously</label>
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest text-muted-gray uppercase block mb-2">Category *</label>
                  <select required className="w-full bg-white border border-gray-200 text-primary-black px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors"
                    value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}>
                    <option value="">Select issue category</option>
                    <option>Ragging</option>
                    <option>Harassment</option>
                    <option>Infrastructure Issue</option>
                    <option>Academic Concern</option>
                    <option>Safety Hazard</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest text-muted-gray uppercase block mb-2">Urgency Level *</label>
                  <select required className="w-full bg-white border border-gray-200 text-primary-black px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors"
                    value={formData.urgency} onChange={e => setFormData({ ...formData, urgency: e.target.value })}>
                    <option value="">Select urgency</option>
                    <option>Low — Not time-sensitive</option>
                    <option>Medium — Needs attention soon</option>
                    <option>High — Urgent, affects safety/academics</option>
                    <option>Emergency — Immediate action required</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest text-muted-gray uppercase block mb-2">Description *</label>
                  <textarea required rows={5}
                    className="w-full bg-white border border-gray-200 text-primary-black px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors resize-none"
                    placeholder="Describe the issue in detail. Include date, time, persons involved..."
                    value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest text-muted-gray uppercase block mb-2">Location on Campus</label>
                  <input type="text"
                    className="w-full bg-white border border-gray-200 text-primary-black px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors"
                    placeholder="e.g., Hostel Block A, Room 214 / CSE Lab 3"
                    value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} />
                </div>

                {!anonymous && (
                  <div>
                    <label className="font-mono text-xs tracking-widest text-muted-gray uppercase block mb-2">Your Email (optional)</label>
                    <input type="email"
                      className="w-full bg-white border border-gray-200 text-primary-black px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors"
                      placeholder="For follow-up communication"
                      value={formData.contactEmail} onChange={e => setFormData({ ...formData, contactEmail: e.target.value })} />
                  </div>
                )}

                <button type="submit" className="w-full bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase py-4 hover:bg-primary-black hover:text-primary-gold transition-colors">
                  Submit Report
                </button>
              </form>
            )}
          </motion.div>

          {/* Confidentiality + Tracking */}
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <div className="bg-primary-black border border-primary-gold p-6 mb-8">
              <div className="flex items-start gap-3">
                <Lock size={20} className="text-primary-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono text-xs text-primary-gold tracking-widest uppercase mb-3">Confidentiality Assurance</p>
                  <p className="font-body text-sm text-gray-300 leading-relaxed">
                    All reports — whether anonymous or named — are handled with absolute confidentiality. Identities of reporters are never disclosed without explicit consent. Reports are reviewed only by authorized committee members. Retaliation against any person who files a genuine report is strictly prohibited and punishable.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs tracking-widest text-muted-gray uppercase mb-3">Track Report Status</p>
              <h2 className="font-display text-xl tracking-widest uppercase text-primary-black mb-6">Track Your Report</h2>
              <div className="flex gap-3">
                <input
                  type="text"
                  className="flex-1 bg-white border border-gray-200 text-primary-black px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors"
                  placeholder="Enter Reference Number (e.g., RPT-123456)"
                  value={trackRef}
                  onChange={e => setTrackRef(e.target.value)}
                />
                <button
                  onClick={handleTrack}
                  className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-5 py-3 hover:bg-primary-black hover:text-primary-gold transition-colors inline-flex items-center gap-2"
                >
                  <Search size={14} /> Track
                </button>
              </div>
              {trackResult && (
                <motion.div
                  className="mt-4 border border-primary-gold/30 bg-primary-gold/5 p-4"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                >
                  <p className="font-body text-sm text-primary-black">{trackResult}</p>
                </motion.div>
              )}
            </div>

            <div className="mt-8 space-y-3">
              <h3 className="font-display text-lg tracking-widest uppercase text-primary-black mb-4">Categories Handled</h3>
              {['Ragging', 'Harassment', 'Infrastructure Issue', 'Academic Concern', 'Safety Hazard', 'Other'].map((cat) => (
                <div key={cat} className="flex items-center gap-2 font-body text-sm text-gray-700">
                  <ChevronRight size={14} className="text-primary-gold flex-shrink-0" />
                  {cat}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
