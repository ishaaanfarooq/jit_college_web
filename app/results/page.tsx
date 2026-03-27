'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, ExternalLink, Clock, AlertCircle, FileText, RefreshCw, Phone, Mail } from 'lucide-react';

const steps = [
  'Visit the official VTU results portal at results.vtu.ac.in',
  'Select your examination type: Regular / Lateral Entry / MBA',
  'Choose your Semester and Scheme (e.g., Scheme 2022, Sem 5)',
  'Enter your University Seat Number (USN) exactly as on your hall ticket',
  'Enter the CAPTCHA verification code displayed on screen',
  'Click "Submit" — results will be displayed on screen',
  'Download or print the result page for your records',
  'For official transcripts, apply through the JIT examination cell',
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function ResultsPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Exam Results
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Exam Results
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Access VTU examination results, internal marks, and understand the revaluation process at JIT.
          </motion.p>
        </div>
      </section>

      {/* Portal Info */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div className="bg-primary-black border border-border-gray hover:border-primary-gold transition-colors p-8" {...fadeUp}>
            <ExternalLink size={28} className="text-primary-gold mb-4" />
            <h3 className="font-display text-xl tracking-widest uppercase text-white mb-3">VTU Results</h3>
            <p className="font-body text-sm text-gray-400 mb-6 leading-relaxed">
              All VTU end-semester examination results are published on the official VTU results portal. Results are typically declared 45–60 days after the last exam date.
            </p>
            <a
              href="https://results.vtu.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-white transition-colors inline-flex items-center gap-2"
            >
              Visit results.vtu.ac.in <ExternalLink size={12} />
            </a>
          </motion.div>
          <motion.div className="bg-primary-black border border-border-gray hover:border-primary-gold transition-colors p-8" {...fadeUp} transition={{ delay: 0.15 }}>
            <FileText size={28} className="text-primary-gold mb-4" />
            <h3 className="font-display text-xl tracking-widest uppercase text-white mb-3">Internal Results</h3>
            <p className="font-body text-sm text-gray-400 mb-6 leading-relaxed">
              Internal Assessment (IA) marks are published on the JIT Student Portal within 5 working days of each IA examination. Students can raise discrepancies through the exam cell.
            </p>
            <a
              href="https://portal.jyothyit.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-white transition-colors inline-flex items-center gap-2"
            >
              Login to Student Portal <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16 px-6 bg-primary-gold">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex items-center gap-4" {...fadeUp}>
            <Clock size={32} className="text-primary-black flex-shrink-0" />
            <div>
              <p className="font-mono text-xs tracking-widest text-primary-black/70 uppercase">Current Status</p>
              <h2 className="font-display text-2xl md:text-3xl tracking-widest uppercase text-primary-black mt-1">
                End Sem Dec 2025 — Results Expected: Jan 20, 2026
              </h2>
              <p className="font-body text-primary-black/80 mt-2 text-sm">
                VTU End Semester Exams (Sem I) concluded on Dec 20, 2025. Results are under processing. Expected to be published by Jan 20, 2026 at results.vtu.ac.in.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Step by Step</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            How to Check VTU Results
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 border border-border-gray hover:border-primary-gold transition-colors p-5"
                {...fadeUp}
                transition={{ delay: i * 0.06 }}
              >
                <span className="font-display text-2xl text-primary-gold w-8 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-body text-sm text-gray-300 leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Grace Marks</p>
            <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-6">Grace Marks Policy</h2>
            <ul className="space-y-3">
              {[
                'Grace marks are awarded per VTU regulations to students who narrowly miss pass marks',
                'Maximum 5 grace marks per subject, up to a maximum of 20 grace marks in a semester',
                'Grace marks are applicable only in the VTU end-semester examination',
                'Students who are already declared pass are not eligible for grace marks',
                'Grace marks are automatically applied — no separate application required',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 font-body text-sm text-gray-700">
                  <ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Dispute Resolution</p>
            <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-6">Revaluation Process</h2>
            <div className="space-y-4">
              {[
                { type: 'Photocopy Request', deadline: '15 days from result', fee: '₹500/subject', note: 'Submit application at exam cell with fee receipt' },
                { type: 'Revaluation', deadline: '30 days from result', fee: '₹800/subject', note: 'If marks change, difference is refunded' },
                { type: 'Challenge Valuation', deadline: '45 days from result', fee: '₹2,000/subject', note: 'Reviewed by senior examiner at VTU' },
              ].map((r) => (
                <div key={r.type} className="border border-gray-200 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-body font-semibold text-primary-black text-sm">{r.type}</h3>
                    <span className="font-mono text-xs text-primary-gold">{r.fee}</span>
                  </div>
                  <p className="font-mono text-xs text-muted-gray mb-1">Apply by: {r.deadline}</p>
                  <p className="font-body text-xs text-muted-gray">{r.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-2 mb-4"><AlertCircle size={18} className="text-primary-gold" /><h3 className="font-display text-xl tracking-widest uppercase text-white">Exam Cell Contact</h3></div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300 font-body text-sm"><Mail size={14} className="text-primary-gold" /> exams@jyothyit.ac.in</div>
              <div className="flex items-center gap-2 text-gray-300 font-body text-sm"><Phone size={14} className="text-primary-gold" /> +91-80-28437093</div>
              <div className="flex items-center gap-2 text-gray-300 font-body text-sm"><RefreshCw size={14} className="text-primary-gold" /> Room 102, Admin Block | Mon–Fri 9:30 AM–5 PM</div>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <a
              href="https://results.vtu.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors inline-flex items-center gap-2"
            >
              Check VTU Results <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
