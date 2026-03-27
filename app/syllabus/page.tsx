'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Download, BookOpen, Award, Briefcase, FlaskConical } from 'lucide-react';

const programs = [
  {
    name: 'B.E. Computer Science & Engineering',
    short: 'B.E. CSE',
    semesters: 8,
    credits: 160,
    subjects: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS & SQL', 'Computer Networks', 'Machine Learning', 'Software Engineering', 'Web Technologies', 'Cloud Computing'],
    color: '#1e3a5f',
  },
  {
    name: 'B.E. Electronics & Communication Engineering',
    short: 'B.E. ECE',
    semesters: 8,
    credits: 160,
    subjects: ['Analog & Digital Electronics', 'VLSI Design', 'Communication Systems', 'Embedded Systems', 'Signal Processing', 'Microcontrollers', 'Antenna & Wave Propagation', 'IoT'],
    color: '#5f3a1e',
  },
  {
    name: 'B.E. Mechanical Engineering',
    short: 'B.E. ME',
    semesters: 8,
    credits: 160,
    subjects: ['Engineering Mechanics', 'Thermodynamics', 'Fluid Mechanics', 'Manufacturing Processes', 'CAD/CAM', 'Machine Design', 'Heat & Mass Transfer', 'Industrial Engineering'],
    color: '#1e5f3a',
  },
  {
    name: 'B.E. Civil Engineering',
    short: 'B.E. Civil',
    semesters: 8,
    credits: 160,
    subjects: ['Structural Analysis', 'Geotechnical Engineering', 'Fluid Mechanics', 'Surveying', 'RCC Design', 'Transportation Engineering', 'Environmental Engineering', 'Construction Management'],
    color: '#5f5f1e',
  },
  {
    name: 'B.E. Information Science & Engineering',
    short: 'B.E. ISE',
    semesters: 8,
    credits: 160,
    subjects: ['Programming in C/C++', 'Database Systems', 'Software Testing', 'Cloud Architecture', 'Information Security', 'Big Data Analytics', 'Artificial Intelligence', 'Mobile Computing'],
    color: '#3a1e5f',
  },
  {
    name: 'Master of Business Administration',
    short: 'MBA',
    semesters: 4,
    credits: 100,
    subjects: ['Management Concepts & OB', 'Financial Accounting', 'Marketing Management', 'Operations Research', 'Business Analytics', 'HR Management', 'Strategic Management', 'Entrepreneurship'],
    color: '#5f1e3a',
  },
];

const highlights = [
  { icon: BookOpen, title: 'Choice Based Credit System (CBCS)', desc: 'Students can choose electives from across departments, enabling inter-disciplinary learning aligned with personal interests and career goals.' },
  { icon: Briefcase, title: 'Industry-Aligned Electives', desc: 'Elective subjects designed in consultation with industry partners like Infosys, TCS, and Bosch to ensure market relevance.' },
  { icon: FlaskConical, title: 'Mini & Major Projects', desc: 'Two-semester capstone project experience — mini project in Sem 5/6 and major project in Sem 7/8, allowing deep practical application.' },
  { icon: Award, title: 'Internship Component', desc: 'Mandatory 4-week industry internship after Sem 4, with evaluation integrated into academic credits.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function SyllabusPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Syllabus &amp; Curriculum
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Syllabus &amp;<br />Curriculum
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            JIT follows the Visvesvaraya Technological University (VTU) curriculum, augmented with industry-aligned electives and hands-on project components.
          </motion.p>
        </div>
      </section>

      {/* VTU Note */}
      <section className="py-12 px-6 bg-primary-gold">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Award size={32} className="text-primary-black flex-shrink-0" />
          <p className="font-body text-primary-black text-base leading-relaxed">
            <strong>VTU Affiliation:</strong> All B.E. programs at JIT follow the VTU CBCS curriculum (Scheme 2022). The MBA program follows AICTE-approved curriculum. Syllabi are updated every 4 years in alignment with NEP 2020 guidelines and industry requirements.
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Programs Offered</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Download by Program
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.short}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6 group"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: prog.color }}>
                    <span className="font-mono text-xs text-white tracking-wider">{prog.short.split(' ')[0] === 'B.E.' ? 'BE' : 'MBA'}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-sm tracking-widest uppercase text-primary-black leading-tight">{prog.short}</h3>
                    <div className="flex gap-3 mt-0.5">
                      <span className="font-mono text-xs text-muted-gray">{prog.semesters} Semesters</span>
                      <span className="font-mono text-xs text-muted-gray">{prog.credits} Credits</span>
                    </div>
                  </div>
                </div>
                <p className="font-mono text-xs text-muted-gray tracking-widest uppercase mb-3">Key Subjects</p>
                <ul className="space-y-1 mb-6">
                  {prog.subjects.map((sub) => (
                    <li key={sub} className="flex items-center gap-2 font-body text-xs text-gray-600">
                      <ChevronRight size={10} className="text-primary-gold flex-shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase py-3 hover:bg-primary-black hover:text-primary-gold transition-colors inline-flex items-center justify-center gap-2">
                  <Download size={12} /> Download Syllabus
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Curriculum Design</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Curriculum Highlights
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="border border-border-gray hover:border-primary-gold transition-colors p-8 group"
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <h.icon size={28} className="text-primary-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl tracking-widest uppercase text-white mb-4">{h.title}</h3>
                <p className="font-body text-sm text-gray-400 leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Latest Changes</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Recent Curriculum Updates
          </motion.h2>
          <div className="space-y-4">
            {[
              { date: 'Aug 2025', update: 'AI/ML elective added to B.E. CSE and ISE Sem 6 per VTU Scheme 2022 revision', dept: 'CSE, ISE' },
              { date: 'Jul 2025', update: 'Industry project module introduced in B.E. ME Sem 7 in collaboration with Toyota Kirloskar', dept: 'ME' },
              { date: 'Jan 2025', update: 'Green Building Technologies added as elective in B.E. Civil Sem 7', dept: 'Civil' },
              { date: 'Aug 2024', update: 'Digital Electronics lab updated with new Xilinx FPGA boards (Artix-7 series)', dept: 'ECE' },
              { date: 'Jul 2024', update: 'MBA curriculum updated with Business Analytics and Data Visualization as core subjects', dept: 'MBA' },
            ].map((u, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-6 bg-white border border-gray-200 hover:border-primary-gold transition-colors p-5"
                {...fadeUp}
                transition={{ delay: i * 0.06 }}
              >
                <span className="font-mono text-xs text-primary-gold bg-primary-black px-2 py-1 whitespace-nowrap">{u.date}</span>
                <p className="font-body text-sm text-gray-700 flex-1">{u.update}</p>
                <span className="font-mono text-xs text-muted-gray whitespace-nowrap">{u.dept}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
