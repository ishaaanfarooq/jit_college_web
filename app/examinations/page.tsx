'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, FileText, Download, Mail, MapPin, AlertCircle, Clock } from 'lucide-react';
import { useState } from 'react';

const tabs = ['Internal Assessment', 'End Semester', 'Supplementary'];

const importantDates = [
  { event: 'Internal Assessment I', date: 'Aug 25 – Sep 5, 2025', status: 'Completed' },
  { event: 'Internal Assessment II', date: 'Oct 1–12, 2025', status: 'Completed' },
  { event: 'Internal Assessment III', date: 'Nov 5–14, 2025', status: 'Upcoming' },
  { event: 'Last Working Day', date: 'Nov 28, 2025', status: 'Upcoming' },
  { event: 'Hall Ticket Issue', date: 'Nov 20, 2025', status: 'Upcoming' },
  { event: 'End Semester Exam', date: 'Dec 1–20, 2025', status: 'Upcoming' },
  { event: 'Result Declaration', date: 'Jan 20, 2026 (Expected)', status: 'Upcoming' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function ExaminationsPage() {
  const [activeTab, setActiveTab] = useState('Internal Assessment');

  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Examination Cell
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Examination Cell
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Everything you need to know about internal assessments, VTU end-semester exams, hall tickets, and results at JIT.
          </motion.p>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex flex-wrap gap-2 mb-12" {...fadeUp}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-mono text-xs tracking-widest uppercase px-6 py-3 transition-all ${
                  activeTab === tab
                    ? 'bg-primary-gold text-primary-black'
                    : 'bg-white border border-gray-200 text-muted-gray hover:border-primary-gold'
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          {activeTab === 'Internal Assessment' && (
            <motion.div className="grid md:grid-cols-2 gap-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div>
                <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-6">Internal Assessment (IA)</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Number of IAs', value: '3 per semester' },
                    { label: 'Marks per IA', value: '30 marks each' },
                    { label: 'Best of', value: '2 IAs counted for final score' },
                    { label: 'Passing Criteria', value: 'Minimum 12/30 in each counted IA' },
                    { label: 'Weightage', value: '30 marks in final semester score' },
                    { label: 'Lab Internals', value: '25 marks per lab course' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <span className="font-body text-sm text-muted-gray">{item.label}</span>
                      <span className="font-body font-semibold text-primary-black text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg tracking-widest uppercase text-primary-black mb-6">IA Format</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 p-4">
                    <p className="font-mono text-xs text-primary-gold tracking-widest uppercase mb-2">Theory Papers</p>
                    <ul className="space-y-2 font-body text-sm text-muted-gray">
                      <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> Duration: 1 hour</li>
                      <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> 2 questions of 15 marks each (answer any 2 of 3)</li>
                      <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> Covers syllabus of preceding 3 units</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-4">
                    <p className="font-mono text-xs text-primary-gold tracking-widest uppercase mb-2">Lab Assessments</p>
                    <ul className="space-y-2 font-body text-sm text-muted-gray">
                      <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> Continuous assessment of lab records</li>
                      <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> Lab test at end of semester: 25 marks</li>
                      <li className="flex gap-2"><ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" /> Viva voce: 5 marks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'End Semester' && (
            <motion.div className="grid md:grid-cols-2 gap-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div>
                <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-6">VTU End Semester Exam</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Conducted by', value: 'Visvesvaraya Technological University (VTU)' },
                    { label: 'Total Marks', value: '100 marks per subject' },
                    { label: 'Duration', value: '3 hours per paper' },
                    { label: 'Passing Minimum', value: '40 marks (40%)' },
                    { label: 'Weightage in Final', value: '70 marks (scaled from 100)' },
                    { label: 'Result Mode', value: 'Online at vtu.ac.in' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <span className="font-body text-sm text-muted-gray">{item.label}</span>
                      <span className="font-body font-semibold text-primary-black text-sm text-right max-w-[55%]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg tracking-widest uppercase text-primary-black mb-6">Score Calculation</h3>
                <div className="bg-primary-black p-6">
                  <p className="font-mono text-xs text-primary-gold tracking-widest uppercase mb-4">Final Subject Score (100 marks total)</p>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-border-gray pb-2">
                      <span className="font-body text-sm text-gray-300">Internal Assessment (best 2 of 3)</span>
                      <span className="font-mono text-xs text-primary-gold">30 marks</span>
                    </div>
                    <div className="flex justify-between border-b border-border-gray pb-2">
                      <span className="font-body text-sm text-gray-300">VTU End Semester Exam (scaled)</span>
                      <span className="font-mono text-xs text-primary-gold">70 marks</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="font-body font-semibold text-white">Total</span>
                      <span className="font-mono text-xs text-primary-gold font-bold">100 marks</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Supplementary' && (
            <motion.div className="grid md:grid-cols-2 gap-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div>
                <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-6">Supplementary / Backlog Exams</h2>
                <ul className="space-y-3">
                  {[
                    'Students who fail in regular end-sem exams may appear for VTU supplementary exams',
                    'Supplementary exams are usually conducted 2–3 months after regular results',
                    'A student can carry a maximum of 4 backlogs into the next semester',
                    'Supplementary exam fees as per VTU norms must be paid before the deadline',
                    'Students with backlogs in prerequisite subjects may have course registration restrictions',
                    'Passed supplementary results are updated in the VTU portal within 4 weeks',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-sm text-gray-700">
                      <ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg tracking-widest uppercase text-primary-black mb-6">Revaluation & Challenge</h3>
                <div className="space-y-4 font-body text-sm text-muted-gray">
                  <p>Students unsatisfied with their marks can apply for:</p>
                  <div className="space-y-3">
                    {[
                      { type: 'Photocopy of Answer Script', fee: '₹500 per subject', window: '15 days from result' },
                      { type: 'Revaluation', fee: '₹800 per subject', window: '30 days from result' },
                      { type: 'Challenge Valuation', fee: '₹2,000 per subject', window: '45 days from result' },
                    ].map((r) => (
                      <div key={r.type} className="border border-gray-200 p-4">
                        <p className="font-semibold text-primary-black">{r.type}</p>
                        <p>Fee: <span className="text-primary-black font-semibold">{r.fee}</span></p>
                        <p>Apply within: <span className="text-primary-black font-semibold">{r.window}</span></p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Current Semester</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Exam Schedule — Sem I (2025–26)
          </motion.h2>
          <motion.div className="overflow-x-auto" {...fadeUp} transition={{ delay: 0.2 }}>
            <table className="w-full border-collapse font-body">
              <thead>
                <tr className="border-b border-border-gray">
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Event</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Date</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {importantDates.map((d, i) => (
                  <tr key={i} className={`border-b border-border-gray ${i % 2 === 0 ? 'bg-primary-black/20' : ''}`}>
                    <td className="py-4 px-6 text-white text-sm">{d.event}</td>
                    <td className="py-4 px-6 font-mono text-xs text-gray-400">{d.date}</td>
                    <td className="py-4 px-6">
                      <span className={`font-mono text-xs tracking-widest uppercase px-2 py-1 ${
                        d.status === 'Completed'
                          ? 'bg-green-900/30 text-green-400 border border-green-800'
                          : 'bg-primary-gold/10 text-primary-gold border border-primary-gold/30'
                      }`}>
                        {d.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Hall Ticket + Contact */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp}>
            <FileText size={32} className="text-primary-gold mb-4" />
            <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-4">Hall Ticket Download</h2>
            <p className="font-body text-sm text-muted-gray mb-6 leading-relaxed">
              Hall tickets for end-semester exams will be available for download from the JIT Student Portal 10 days before the commencement of exams. Students must carry a printed hall ticket to the examination hall without fail. Hall tickets will NOT be issued at the exam centre.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm font-body text-gray-700"><AlertCircle size={14} className="text-primary-gold" /> Ensure fee payment is cleared before downloading</div>
              <div className="flex items-center gap-2 text-sm font-body text-gray-700"><AlertCircle size={14} className="text-primary-gold" /> Minimum 75% attendance required to appear in exams</div>
              <div className="flex items-center gap-2 text-sm font-body text-gray-700"><AlertCircle size={14} className="text-primary-gold" /> Contact exam cell for attendance shortage appeals</div>
            </div>
            <button className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-primary-black hover:text-primary-gold transition-colors inline-flex items-center gap-2">
              <Download size={14} /> Download Hall Ticket
            </button>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-6">Contact Examination Cell</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-body text-sm text-gray-700">
                <Mail size={16} className="text-primary-gold flex-shrink-0" />
                <a href="mailto:exams@jyothyit.ac.in" className="hover:text-primary-gold transition-colors">exams@jyothyit.ac.in</a>
              </div>
              <div className="flex items-center gap-3 font-body text-sm text-gray-700">
                <MapPin size={16} className="text-primary-gold flex-shrink-0" />
                Room 102, Administrative Block, JIT Campus
              </div>
              <div className="flex items-center gap-3 font-body text-sm text-gray-700">
                <Clock size={16} className="text-primary-gold flex-shrink-0" />
                Monday – Friday: 9:30 AM – 5:00 PM
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
