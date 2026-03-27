'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Download, FileText, ExternalLink, Filter } from 'lucide-react';
import { useState } from 'react';

const papers = [
  { subject: 'Data Structures & Algorithms', dept: 'CSE', sem: 3, year: 2024, type: 'VTU End Sem', size: '1.2 MB' },
  { subject: 'VLSI Design', dept: 'ECE', sem: 5, year: 2024, type: 'VTU End Sem', size: '980 KB' },
  { subject: 'Engineering Mathematics I', dept: 'All', sem: 1, year: 2024, type: 'VTU End Sem', size: '1.5 MB' },
  { subject: 'Thermodynamics', dept: 'ME', sem: 4, year: 2023, type: 'VTU End Sem', size: '870 KB' },
  { subject: 'Computer Networks', dept: 'CSE', sem: 5, year: 2024, type: 'VTU End Sem', size: '1.1 MB' },
  { subject: 'Analog Electronics', dept: 'ECE', sem: 3, year: 2024, type: 'VTU End Sem', size: '760 KB' },
  { subject: 'Structural Analysis', dept: 'Civil', sem: 5, year: 2023, type: 'VTU End Sem', size: '1.3 MB' },
  { subject: 'Database Management Systems', dept: 'ISE', sem: 4, year: 2024, type: 'VTU End Sem', size: '900 KB' },
  { subject: 'Engineering Mathematics II', dept: 'All', sem: 2, year: 2024, type: 'VTU End Sem', size: '1.4 MB' },
  { subject: 'Machine Learning', dept: 'CSE', sem: 6, year: 2024, type: 'Internal Assessment', size: '450 KB' },
  { subject: 'Manufacturing Processes', dept: 'ME', sem: 3, year: 2023, type: 'VTU End Sem', size: '1.0 MB' },
  { subject: 'Marketing Management', dept: 'MBA', sem: 1, year: 2024, type: 'Internal Assessment', size: '380 KB' },
];

const depts = ['All Depts', 'CSE', 'ECE', 'ME', 'Civil', 'ISE', 'MBA', 'All'];
const types = ['All Types', 'VTU End Sem', 'Internal Assessment'];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function QuestionPapersPage() {
  const [activeDept, setActiveDept] = useState('All Depts');
  const [activeType, setActiveType] = useState('All Types');

  const filtered = papers.filter(p => {
    const deptMatch = activeDept === 'All Depts' || p.dept === activeDept;
    const typeMatch = activeType === 'All Types' || p.type === activeType;
    return deptMatch && typeMatch;
  });

  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Question Papers
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Previous Year<br />Question Papers
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Access VTU and JIT internal assessment question papers sorted by department, semester, and year.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <motion.div className="mb-10" {...fadeUp}>
            <div className="flex items-center gap-3 mb-4">
              <Filter size={16} className="text-primary-gold" />
              <p className="font-mono text-xs tracking-widest text-primary-gold uppercase">Filter Papers</p>
            </div>
            <div className="flex flex-wrap gap-3 mb-4">
              <p className="font-mono text-xs text-muted-gray tracking-widest uppercase self-center mr-2">Department:</p>
              {depts.map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDept(d)}
                  className={`font-mono text-xs tracking-widest uppercase px-4 py-2 transition-all ${
                    activeDept === d
                      ? 'bg-primary-gold text-primary-black'
                      : 'border border-gray-200 text-muted-gray hover:border-primary-gold bg-white'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <p className="font-mono text-xs text-muted-gray tracking-widest uppercase self-center mr-2">Type:</p>
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  className={`font-mono text-xs tracking-widest uppercase px-4 py-2 transition-all ${
                    activeType === t
                      ? 'bg-primary-gold text-primary-black'
                      : 'border border-gray-200 text-muted-gray hover:border-primary-gold bg-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results count */}
          <motion.p className="font-mono text-xs text-muted-gray tracking-widest mb-6" {...fadeUp}>
            Showing {filtered.length} of {papers.length} papers
          </motion.p>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((paper, i) => (
              <motion.div
                key={`${paper.subject}-${paper.year}`}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-5 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-black flex items-center justify-center flex-shrink-0 group-hover:bg-dark-charcoal transition-colors">
                    <FileText size={18} className="text-primary-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-body font-semibold text-primary-black text-sm leading-snug">{paper.subject}</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="font-mono text-xs text-primary-gold bg-primary-black px-1.5 py-0.5">{paper.dept}</span>
                      <span className="font-mono text-xs text-muted-gray">Sem {paper.sem}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-muted-gray mb-4">
                  <span>{paper.year}</span>
                  <span className={`px-2 py-0.5 border ${
                    paper.type === 'VTU End Sem'
                      ? 'border-primary-gold/40 text-primary-gold'
                      : 'border-gray-300 text-gray-500'
                  }`}>{paper.type}</span>
                  <span>{paper.size}</span>
                </div>
                <button className="w-full bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase py-2.5 hover:bg-primary-black hover:text-primary-gold transition-colors inline-flex items-center justify-center gap-2">
                  <Download size={12} /> Download PDF
                </button>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-muted-gray">No papers found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* VTU Official Bank */}
      <section className="py-16 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div {...fadeUp}>
            <h3 className="font-display text-2xl tracking-widest uppercase text-white mb-2">VTU Official Question Bank</h3>
            <p className="font-body text-gray-400 max-w-lg text-sm leading-relaxed">
              VTU maintains an extensive official question paper repository at qp.vtu.ac.in with papers dating back to 2005 across all programs and schemes. Use this resource for comprehensive exam preparation.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <a
              href="https://qp.vtu.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >
              Visit VTU QP Bank <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
