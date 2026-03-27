'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Calendar, Download, AlertCircle } from 'lucide-react';

const sem1Events = [
  { date: 'Aug 1, 2025', event: 'Orientation & Induction Programme', type: 'event' },
  { date: 'Aug 5, 2025', event: 'Commencement of Classes — Sem I', type: 'start' },
  { date: 'Aug 15, 2025', event: 'Independence Day (Holiday)', type: 'holiday' },
  { date: 'Aug 25, 2025', event: 'Internal Assessment I — Begins', type: 'exam' },
  { date: 'Sep 5, 2025', event: 'Teacher\'s Day Celebrations', type: 'event' },
  { date: 'Oct 1–10, 2025', event: 'Mid-Term Internal Assessment II', type: 'exam' },
  { date: 'Oct 2, 2025', event: 'Gandhi Jayanti (Holiday)', type: 'holiday' },
  { date: 'Oct 24, 2025', event: 'Dussehra (Holiday)', type: 'holiday' },
  { date: 'Nov 1, 2025', event: 'Kannada Rajyotsava (Holiday)', type: 'holiday' },
  { date: 'Nov 5–14, 2025', event: 'Internal Assessment III', type: 'exam' },
  { date: 'Nov 28, 2025', event: 'Last Working Day — Sem I', type: 'end' },
  { date: 'Dec 1–20, 2025', event: 'VTU End Semester Examinations', type: 'exam' },
  { date: 'Dec 25, 2025', event: 'Christmas (Holiday)', type: 'holiday' },
];

const sem2Events = [
  { date: 'Jan 1, 2026', event: 'New Year\'s Day (Holiday)', type: 'holiday' },
  { date: 'Jan 5, 2026', event: 'Commencement of Classes — Sem II', type: 'start' },
  { date: 'Jan 26, 2026', event: 'Republic Day (Holiday)', type: 'holiday' },
  { date: 'Feb 10, 2026', event: 'Internal Assessment I — Begins', type: 'exam' },
  { date: 'Mar 2–12, 2026', event: 'Mid-Term Internal Assessment II', type: 'exam' },
  { date: 'Apr 14, 2026', event: 'Dr. Ambedkar Jayanti (Holiday)', type: 'holiday' },
  { date: 'Apr 15–25, 2026', event: 'Internal Assessment III', type: 'exam' },
  { date: 'May 1, 2026', event: 'Labour Day (Holiday)', type: 'holiday' },
  { date: 'May 15, 2026', event: 'Last Working Day — Sem II', type: 'end' },
  { date: 'May 18 – Jun 5, 2026', event: 'VTU End Semester Examinations', type: 'exam' },
  { date: 'Jun 20, 2026', event: 'Expected Result Declaration', type: 'event' },
];

const deadlines = [
  { item: 'Fee Payment (Sem I)', deadline: 'Jul 15, 2025', penalty: 'Fine of ₹500/day after due date' },
  { item: 'Fee Payment (Sem II)', deadline: 'Dec 20, 2025', penalty: 'Fine of ₹500/day after due date' },
  { item: 'IA Submission — I', deadline: 'Aug 30, 2025', penalty: 'Zero marks for late submission' },
  { item: 'IA Submission — II', deadline: 'Oct 15, 2025', penalty: 'Zero marks for late submission' },
  { item: 'Project Submission (Final Yr)', deadline: 'Nov 1, 2025', penalty: 'Not eligible for semester exam' },
  { item: 'Internship Completion Certificate', deadline: 'Oct 20, 2025', penalty: 'Internship marks forfeited' },
];

const typeStyles: Record<string, string> = {
  start: 'bg-green-900/30 text-green-400 border-green-800',
  end: 'bg-red-900/30 text-red-400 border-red-800',
  exam: 'bg-yellow-900/30 text-yellow-400 border-yellow-800',
  holiday: 'bg-primary-gold/10 text-primary-gold border-primary-gold/30',
  event: 'bg-blue-900/30 text-blue-400 border-blue-800',
};

const typeLabels: Record<string, string> = {
  start: 'START',
  end: 'END',
  exam: 'EXAM',
  holiday: 'HOLIDAY',
  event: 'EVENT',
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AcademicCalendarPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Academic Calendar
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Academic Calendar<br />2025–26
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Key dates, examination schedules, holidays, and deadlines for the academic year 2025–2026 at JIT.
          </motion.p>
        </div>
      </section>

      {/* Sem I */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex items-center gap-3 mb-3" {...fadeUp}>
            <Calendar size={20} className="text-primary-gold" />
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase">August – December 2025</p>
          </motion.div>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Semester I
          </motion.h2>
          <motion.div className="overflow-x-auto" {...fadeUp} transition={{ delay: 0.2 }}>
            <table className="w-full border-collapse font-body">
              <thead>
                <tr className="bg-primary-black">
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Date</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Event</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Type</th>
                </tr>
              </thead>
              <tbody>
                {sem1Events.map((ev, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-4 px-6 font-mono text-xs text-muted-gray whitespace-nowrap">{ev.date}</td>
                    <td className="py-4 px-6 text-primary-black text-sm">{ev.event}</td>
                    <td className="py-4 px-6">
                      <span className={`font-mono text-xs tracking-widest uppercase px-2 py-1 border ${typeStyles[ev.type]}`}>
                        {typeLabels[ev.type]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Sem II */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex items-center gap-3 mb-3" {...fadeUp}>
            <Calendar size={20} className="text-primary-gold" />
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase">January – June 2026</p>
          </motion.div>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Semester II
          </motion.h2>
          <motion.div className="overflow-x-auto" {...fadeUp} transition={{ delay: 0.2 }}>
            <table className="w-full border-collapse font-body">
              <thead>
                <tr className="border-b border-border-gray">
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Date</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Event</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Type</th>
                </tr>
              </thead>
              <tbody>
                {sem2Events.map((ev, i) => (
                  <tr key={i} className={`border-b border-border-gray ${i % 2 === 0 ? 'bg-primary-black/20' : ''}`}>
                    <td className="py-4 px-6 font-mono text-xs text-muted-gray whitespace-nowrap">{ev.date}</td>
                    <td className="py-4 px-6 text-white text-sm">{ev.event}</td>
                    <td className="py-4 px-6">
                      <span className={`font-mono text-xs tracking-widest uppercase px-2 py-1 border ${typeStyles[ev.type]}`}>
                        {typeLabels[ev.type]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Important Deadlines */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex items-center gap-3 mb-3" {...fadeUp}>
            <AlertCircle size={18} className="text-primary-gold" />
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase">Mark Your Calendar</p>
          </motion.div>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Important Deadlines
          </motion.h2>
          <motion.div className="overflow-x-auto" {...fadeUp} transition={{ delay: 0.2 }}>
            <table className="w-full border-collapse font-body">
              <thead>
                <tr className="bg-primary-black">
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Item</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Deadline</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Consequence if Missed</th>
                </tr>
              </thead>
              <tbody>
                {deadlines.map((d, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-4 px-6 text-primary-black font-semibold text-sm">{d.item}</td>
                    <td className="py-4 px-6 font-mono text-xs text-primary-gold">{d.deadline}</td>
                    <td className="py-4 px-6 text-muted-gray text-sm">{d.penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div {...fadeUp}>
            <h3 className="font-display text-2xl tracking-widest uppercase text-white mb-2">Download Full Calendar</h3>
            <p className="font-body text-gray-400 max-w-lg">Get the complete academic calendar for 2025–26 in PDF format, including all events, examinations, and holiday list.</p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <button className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors inline-flex items-center gap-2">
              <Download size={14} /> Download Calendar PDF
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
