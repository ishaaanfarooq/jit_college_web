'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Award, ExternalLink, FileText, ShieldCheck } from 'lucide-react';

const approvedIntake = [
  { branch: 'Computer Science & Engineering', code: 'CSE', intake: 120 },
  { branch: 'Electronics & Communication Engineering', code: 'ECE', intake: 60 },
  { branch: 'Mechanical Engineering', code: 'ME', intake: 60 },
  { branch: 'Civil Engineering', code: 'Civil', intake: 60 },
  { branch: 'Information Science & Engineering', code: 'ISE', intake: 60 },
  { branch: 'Master of Business Administration', code: 'MBA', intake: 60 },
];

const complianceCerts = [
  { name: 'AICTE Approval Letter 2025-26', issued: 'Mar 2025', valid: 'Mar 2026' },
  { name: 'Fire Safety NOC', issued: 'Jan 2025', valid: 'Jan 2027' },
  { name: 'Building Safety Certificate', issued: 'Feb 2024', valid: 'Feb 2027' },
  { name: 'Anti-Ragging Compliance Certificate', issued: 'Aug 2025', valid: 'Jul 2026' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AICTEPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            AICTE Approval
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            AICTE Approval
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Jyothy Institute of Technology is approved by the All India Council for Technical Education (AICTE), New Delhi.
          </motion.p>
        </div>
      </section>

      {/* Approval Details */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Official Approval</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            AICTE Approval Details
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="space-y-4" {...fadeUp} transition={{ delay: 0.15 }}>
              {[
                { label: 'Institution Name', value: 'Jyothy Institute of Technology' },
                { label: 'AICTE Approval Number', value: 'F.No. South-West/1-3289762134/2025/EOA' },
                { label: 'Approval Valid From', value: 'Academic Year 2025–26' },
                { label: 'Approval Valid Until', value: 'Academic Year 2025–26 (Annual Renewal)' },
                { label: 'AICTE Region', value: 'South-West Region, Bengaluru' },
                { label: 'Type of Institution', value: 'Private — Unaided, Non-Minority' },
                { label: 'Year of Establishment', value: '2007' },
                { label: 'Total AICTE Approved Intake', value: '420 students per year (UG + MBA)' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 pb-3">
                  <span className="font-body text-sm text-muted-gray">{item.label}</span>
                  <span className="font-body font-semibold text-primary-black text-sm sm:text-right max-w-[60%]">{item.value}</span>
                </div>
              ))}
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.25 }}>
              <div className="bg-primary-black p-8 border border-border-gray">
                <div className="flex items-center gap-4 mb-6">
                  <Award size={40} className="text-primary-gold" />
                  <div>
                    <p className="font-mono text-xs text-muted-gray tracking-widest uppercase">Regulatory Authority</p>
                    <h3 className="font-display text-xl tracking-widest uppercase text-white">AICTE</h3>
                  </div>
                </div>
                <p className="font-body text-sm text-gray-400 leading-relaxed mb-6">
                  The All India Council for Technical Education (AICTE) is the statutory body and a national-level council for technical education, under the Department of Higher Education, Ministry of Education, Government of India.
                </p>
                <a
                  href="https://www.aicte-india.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-white transition-colors inline-flex items-center gap-2"
                >
                  Visit AICTE Website <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approved Intake */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Sanctioned Seats</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Approved Intake per Branch
          </motion.h2>
          <motion.div className="overflow-x-auto" {...fadeUp} transition={{ delay: 0.2 }}>
            <table className="w-full border-collapse font-body">
              <thead>
                <tr className="border-b border-border-gray">
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Program</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Branch Code</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Sanctioned Intake</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Duration</th>
                </tr>
              </thead>
              <tbody>
                {approvedIntake.map((item, i) => (
                  <tr key={item.branch} className={`border-b border-border-gray ${i % 2 === 0 ? 'bg-primary-black/20' : ''}`}>
                    <td className="py-4 px-6 text-white font-body text-sm">{item.branch}</td>
                    <td className="py-4 px-6 font-mono text-xs text-primary-gold">{item.code}</td>
                    <td className="py-4 px-6 text-white font-semibold font-body">{item.intake} students</td>
                    <td className="py-4 px-6 text-gray-400 font-body text-sm">{item.code === 'MBA' ? '2 years' : '4 years'}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-primary-gold/30">
                  <td className="py-4 px-6 text-primary-gold font-semibold font-body" colSpan={2}>Total Sanctioned Intake</td>
                  <td className="py-4 px-6 text-primary-gold font-display text-xl">420 students</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Legal Compliance</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Compliance Certificates
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            {complianceCerts.map((cert, i) => (
              <motion.div
                key={cert.name}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-5 flex items-center justify-between group"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center gap-4">
                  <ShieldCheck size={20} className="text-primary-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-body font-semibold text-primary-black text-sm">{cert.name}</h3>
                    <p className="font-mono text-xs text-muted-gray">Issued: {cert.issued} | Valid till: {cert.valid}</p>
                  </div>
                </div>
                <button className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-4 py-2 hover:bg-primary-black hover:text-primary-gold transition-colors inline-flex items-center gap-1">
                  <FileText size={10} /> View
                </button>
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-10" {...fadeUp} transition={{ delay: 0.3 }}>
            <p className="font-body text-sm text-muted-gray mb-4">
              AICTE Mandatory Disclosure and annual reports are available on the AICTE National Institutional Ranking Framework portal.
            </p>
            <a
              href="https://www.aicte-india.org/institutions"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-primary-black hover:text-primary-gold transition-colors inline-flex items-center gap-2"
            >
              View AICTE Mandatory Disclosure <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
