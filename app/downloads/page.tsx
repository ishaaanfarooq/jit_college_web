'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Download, FileText, Bell, BookOpen, Newspaper, BookMarked } from 'lucide-react';
import { useState } from 'react';

const tabs = ['Forms', 'Circulars', 'Syllabi', 'Brochures', 'Prospectus'];

const forms = [
  { name: 'Admission Application Form', desc: 'For fresh admissions to B.E. / MBA programs', size: '2.3 MB', updated: 'Jul 2025' },
  { name: 'Bonafide Certificate Request', desc: 'For bank loans, visa applications, and scholarship purposes', size: '180 KB', updated: 'Jan 2025' },
  { name: 'Transfer Certificate Form', desc: 'Required for students seeking transfer to another institution', size: '165 KB', updated: 'Jan 2025' },
  { name: 'No Objection Certificate (NOC)', desc: 'For internship, conference participation, or other activities', size: '155 KB', updated: 'Aug 2024' },
  { name: 'Scholarship Application Form', desc: 'For all JIT institutional scholarship categories', size: '480 KB', updated: 'Jul 2025' },
  { name: 'Hostel Application Form', desc: 'For applying to Boys or Girls hostel for new academic year', size: '320 KB', updated: 'Jun 2025' },
  { name: 'Library Membership Form', desc: 'For initial library registration and card issuance', size: '140 KB', updated: 'Aug 2024' },
  { name: 'Fee Receipt Reprint Request', desc: 'For obtaining duplicate fee payment receipts', size: '120 KB', updated: 'Jan 2025' },
];

const circulars = [
  { title: 'Internal Assessment III Schedule — Sem I 2025-26', date: 'Oct 28, 2025', dept: 'All Departments' },
  { title: 'Anti-Ragging Affidavit Submission Reminder — Deadline Nov 10', date: 'Oct 25, 2025', dept: 'All Students' },
  { title: 'Industry Visit to Infosys Campus — CSE & ISE 6th Sem', date: 'Oct 20, 2025', dept: 'CSE, ISE' },
  { title: 'VTU Exam Fee Payment Window Open — Last Date Nov 5', date: 'Oct 18, 2025', dept: 'All Students' },
  { title: 'Annual Sports Meet 2025 — Registration Open', date: 'Oct 15, 2025', dept: 'All Students' },
];

const syllabi = [
  { name: 'B.E. CSE Scheme 2022 Syllabus', size: '3.8 MB', version: 'VTU 2022 Scheme' },
  { name: 'B.E. ECE Scheme 2022 Syllabus', size: '3.5 MB', version: 'VTU 2022 Scheme' },
  { name: 'B.E. ME Scheme 2022 Syllabus', size: '3.2 MB', version: 'VTU 2022 Scheme' },
  { name: 'B.E. Civil Scheme 2022 Syllabus', size: '3.1 MB', version: 'VTU 2022 Scheme' },
  { name: 'B.E. ISE Scheme 2022 Syllabus', size: '3.4 MB', version: 'VTU 2022 Scheme' },
  { name: 'MBA Syllabus 2023-24', size: '2.8 MB', version: 'AICTE 2023' },
];

const brochures = [
  { name: 'JIT Institutional Brochure 2025-26', desc: 'Complete guide to all programs, facilities, and campus life', size: '8.5 MB' },
  { name: 'B.E. Programs Brochure', desc: 'Detailed information about all B.E. departments at JIT', size: '5.2 MB' },
  { name: 'MBA Program Brochure', desc: 'Information about JIT\'s MBA program, faculty, and placements', size: '3.8 MB' },
  { name: 'Research & Innovation Brochure', desc: 'JIT\'s research centres, publications, and innovation activities', size: '4.1 MB' },
];

const prospectus = [
  { name: 'JIT Prospectus 2025-26', desc: 'Official admissions prospectus with fee structure, eligibility, and process', size: '12.3 MB' },
  { name: 'JIT Annual Report 2024-25', desc: 'Year in review — achievements, placements, events, and milestones', size: '18.7 MB' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const tabIcons: Record<string, React.ElementType> = { Forms: FileText, Circulars: Bell, Syllabi: BookOpen, Brochures: Newspaper, Prospectus: BookMarked };

export default function DownloadsPage() {
  const [activeTab, setActiveTab] = useState('Forms');

  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Downloads
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Downloads
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Download official JIT forms, circulars, syllabi, brochures, and the institutional prospectus.
          </motion.p>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          {/* Tab Bar */}
          <motion.div className="flex flex-wrap gap-2 mb-12" {...fadeUp}>
            {tabs.map((tab) => {
              const Icon = tabIcons[tab];
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`font-mono text-xs tracking-widest uppercase px-6 py-3 transition-all inline-flex items-center gap-2 ${
                    activeTab === tab
                      ? 'bg-primary-gold text-primary-black'
                      : 'bg-white border border-gray-200 text-muted-gray hover:border-primary-gold'
                  }`}
                >
                  <Icon size={14} />{tab}
                </button>
              );
            })}
          </motion.div>

          {/* Forms */}
          {activeTab === 'Forms' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="grid md:grid-cols-2 gap-5">
                {forms.map((f, i) => (
                  <motion.div key={f.name} className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-5 group" {...fadeUp} transition={{ delay: i * 0.05 }}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-black group-hover:bg-dark-charcoal transition-colors flex items-center justify-center flex-shrink-0">
                        <FileText size={18} className="text-primary-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-body font-semibold text-primary-black text-sm mb-1">{f.name}</h3>
                        <p className="font-body text-xs text-muted-gray mb-3">{f.desc}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs text-muted-gray">PDF • {f.size} • Updated {f.updated}</span>
                          <button className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-4 py-1.5 hover:bg-primary-black hover:text-primary-gold transition-colors inline-flex items-center gap-1">
                            <Download size={10} /> Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Circulars */}
          {activeTab === 'Circulars' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              {circulars.map((c, i) => (
                <motion.div key={c.title} className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-5 flex items-center justify-between gap-6" {...fadeUp} transition={{ delay: i * 0.08 }}>
                  <div className="flex items-start gap-4">
                    <Bell size={18} className="text-primary-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-body font-semibold text-primary-black text-sm">{c.title}</h3>
                      <p className="font-mono text-xs text-muted-gray mt-1">{c.date} • {c.dept}</p>
                    </div>
                  </div>
                  <button className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-4 py-2 hover:bg-primary-black hover:text-primary-gold transition-colors inline-flex items-center gap-1 flex-shrink-0">
                    <Download size={10} /> PDF
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Syllabi */}
          {activeTab === 'Syllabi' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 gap-5">
              {syllabi.map((s, i) => (
                <motion.div key={s.name} className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-5 group" {...fadeUp} transition={{ delay: i * 0.08 }}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary-black flex items-center justify-center flex-shrink-0">
                      <BookOpen size={18} className="text-primary-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-body font-semibold text-primary-black text-sm">{s.name}</h3>
                      <p className="font-mono text-xs text-muted-gray mt-0.5">{s.version} • {s.size}</p>
                    </div>
                    <button className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-4 py-2 hover:bg-primary-black hover:text-primary-gold transition-colors inline-flex items-center gap-1">
                      <Download size={10} /> PDF
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Brochures */}
          {activeTab === 'Brochures' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 gap-5">
              {brochures.map((b, i) => (
                <motion.div key={b.name} className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6 group" {...fadeUp} transition={{ delay: i * 0.08 }}>
                  <Newspaper size={24} className="text-primary-gold mb-4" />
                  <h3 className="font-body font-semibold text-primary-black text-sm mb-2">{b.name}</h3>
                  <p className="font-body text-xs text-muted-gray mb-4">{b.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-gray">PDF • {b.size}</span>
                    <button className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-4 py-2 hover:bg-primary-black hover:text-primary-gold transition-colors inline-flex items-center gap-1">
                      <Download size={10} /> Download
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Prospectus */}
          {activeTab === 'Prospectus' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 gap-6">
              {prospectus.map((p, i) => (
                <motion.div key={p.name} className="bg-primary-black border border-border-gray hover:border-primary-gold transition-colors p-8 group" {...fadeUp} transition={{ delay: i * 0.1 }}>
                  <BookMarked size={32} className="text-primary-gold mb-4" />
                  <h3 className="font-display text-xl tracking-widest uppercase text-white mb-3">{p.name}</h3>
                  <p className="font-body text-sm text-gray-400 mb-6">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-gray">PDF • {p.size}</span>
                    <button className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-white transition-colors inline-flex items-center gap-2">
                      <Download size={12} /> Download
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
