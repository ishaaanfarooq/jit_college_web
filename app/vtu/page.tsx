'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Award, ExternalLink, Calendar, BookOpen } from 'lucide-react';

const affiliatedPrograms = [
  { program: 'Bachelor of Engineering — CSE', scheme: 'VTU Scheme 2022', semesters: 8, credits: 160 },
  { program: 'Bachelor of Engineering — ECE', scheme: 'VTU Scheme 2022', semesters: 8, credits: 160 },
  { program: 'Bachelor of Engineering — ME', scheme: 'VTU Scheme 2022', semesters: 8, credits: 160 },
  { program: 'Bachelor of Engineering — Civil', scheme: 'VTU Scheme 2022', semesters: 8, credits: 160 },
  { program: 'Bachelor of Engineering — ISE', scheme: 'VTU Scheme 2022', semesters: 8, credits: 160 },
];

const examSchedule = [
  { event: 'Sem I End Semester Exams', dates: 'Dec 1–20, 2025' },
  { event: 'Sem I Results Declaration', dates: 'Jan 20, 2026 (Expected)' },
  { event: 'Sem II End Semester Exams', dates: 'May 18 – Jun 5, 2026' },
  { event: 'Sem II Results Declaration', dates: 'Jun 20, 2026 (Expected)' },
  { event: 'Supplementary Exams', dates: 'Aug 2026 (tentative)' },
  { event: 'Revaluation Application Window', dates: '30 days after result declaration' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function VTUPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            VTU Affiliation
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            VTU Affiliation
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Jyothy Institute of Technology is affiliated to Visvesvaraya Technological University (VTU), Belagavi — one of India's premier technical universities.
          </motion.p>
        </div>
      </section>

      {/* Affiliation Details */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Affiliation Info</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            VTU Affiliation Details
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="space-y-4" {...fadeUp} transition={{ delay: 0.15 }}>
              {[
                { label: 'University', value: 'Visvesvaraya Technological University (VTU)' },
                { label: 'VTU HQ', value: 'Jnanasangama, Machhe, Belagavi – 590018, Karnataka' },
                { label: 'VTU Affiliation Number', value: 'VTU/JIT/BLR/1432/2007' },
                { label: 'Affiliated Since', value: '2007' },
                { label: 'Current Affiliation', value: 'Valid for Academic Year 2025–26' },
                { label: 'VTU Zonal Office', value: 'Bengaluru Zone — Regional Office, Bengaluru' },
                { label: 'VTU Inspection Status', value: 'All 5 B.E. departments — Full Affiliation' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 pb-3">
                  <span className="font-body text-sm text-muted-gray">{item.label}</span>
                  <span className="font-body font-semibold text-primary-black text-sm sm:text-right max-w-[55%]">{item.value}</span>
                </div>
              ))}
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.25 }}>
              <div className="bg-primary-black p-8 border border-border-gray">
                <div className="flex items-center gap-4 mb-6">
                  <Award size={40} className="text-primary-gold" />
                  <div>
                    <p className="font-mono text-xs text-muted-gray tracking-widest uppercase">Affiliated University</p>
                    <h3 className="font-display text-xl tracking-widest uppercase text-white">VTU Belagavi</h3>
                  </div>
                </div>
                <p className="font-body text-sm text-gray-400 leading-relaxed mb-6">
                  Visvesvaraya Technological University (VTU) was established in 1998 and is a world-class technical university offering B.E., M.Tech, MBA, and Ph.D. programs. VTU is accredited by NAAC with 'A' Grade and is ranked among India's top technical universities.
                </p>
                <a
                  href="https://vtu.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-white transition-colors inline-flex items-center gap-2"
                >
                  Visit vtu.ac.in <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Affiliated Courses</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Programs Under VTU Affiliation
          </motion.h2>
          <motion.div className="overflow-x-auto" {...fadeUp} transition={{ delay: 0.2 }}>
            <table className="w-full border-collapse font-body">
              <thead>
                <tr className="border-b border-border-gray">
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Program</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Scheme</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Semesters</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Total Credits</th>
                </tr>
              </thead>
              <tbody>
                {affiliatedPrograms.map((p, i) => (
                  <tr key={p.program} className={`border-b border-border-gray ${i % 2 === 0 ? 'bg-primary-black/20' : ''}`}>
                    <td className="py-4 px-6 text-white font-body text-sm">{p.program}</td>
                    <td className="py-4 px-6 font-mono text-xs text-primary-gold">{p.scheme}</td>
                    <td className="py-4 px-6 text-gray-300">{p.semesters}</td>
                    <td className="py-4 px-6 text-gray-300">{p.credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <motion.p className="font-body text-xs text-muted-gray mt-4" {...fadeUp} transition={{ delay: 0.3 }}>
            Note: MBA program at JIT is approved by AICTE and affiliated to Bengaluru City University (BCU), not VTU.
          </motion.p>
        </div>
      </section>

      {/* Exam Schedule */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex items-center gap-3 mb-3" {...fadeUp}>
            <Calendar size={18} className="text-primary-gold" />
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase">Academic Year 2025-26</p>
          </motion.div>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            VTU Examination Schedule
          </motion.h2>
          <div className="space-y-4">
            {examSchedule.map((ev, i) => (
              <motion.div
                key={ev.event}
                className="flex items-center justify-between bg-white border border-gray-200 hover:border-primary-gold transition-colors p-5"
                {...fadeUp}
                transition={{ delay: i * 0.06 }}
              >
                <div className="flex items-center gap-3">
                  <BookOpen size={16} className="text-primary-gold flex-shrink-0" />
                  <span className="font-body text-primary-black text-sm">{ev.event}</span>
                </div>
                <span className="font-mono text-xs text-primary-gold">{ev.dates}</span>
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-10" {...fadeUp} transition={{ delay: 0.3 }}>
            <a
              href="https://vtu.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-primary-black hover:text-primary-gold transition-colors inline-flex items-center gap-2"
            >
              Check VTU Official Schedule <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
