'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Award, BookOpen, Download, Mail, AlertCircle, FileText } from 'lucide-react';

const govtScholarships = [
  {
    name: 'SC/ST Post-Matric Scholarship',
    authority: 'Government of Karnataka',
    eligibility: 'SC/ST category students with family income < ₹2.5 lakh/year',
    amount: 'Full tuition fee reimbursement',
    deadline: 'Sep 30 each year',
  },
  {
    name: 'OBC Scholarship (GoK)',
    authority: 'Karnataka Backward Classes Dept.',
    eligibility: 'OBC category students with income < ₹1.5 lakh/year',
    amount: 'Up to ₹30,000/year',
    deadline: 'Oct 15 each year',
  },
  {
    name: 'Minority Scholarship',
    authority: 'National Scholarship Portal (NSP)',
    eligibility: 'Muslim/Christian/Sikh/Buddhist/Jain students, income < ₹2 lakh/year',
    amount: 'Up to ₹25,000/year',
    deadline: 'Oct 31 each year',
  },
  {
    name: 'Kannada Medium Students Scholarship',
    authority: 'GoK — Dept. of Kannada & Culture',
    eligibility: 'Students who studied in Kannada medium till SSLC',
    amount: '₹10,000/year',
    deadline: 'Nov 15 each year',
  },
  {
    name: 'Merit Scholarship (GoK)',
    authority: 'Government of Karnataka',
    eligibility: 'Top 10 rank holders of each class in any semester',
    amount: '₹15,000/year',
    deadline: 'Based on semester results',
  },
];

const jitScholarships = [
  {
    name: 'JIT Merit Scholarship',
    criteria: '95%+ aggregate in 10+2 / PUC Board Exams',
    benefit: '50% tuition fee waiver for the entire program duration',
    renewal: 'CGPA 8.5+ must be maintained each year',
  },
  {
    name: 'Sports Excellence Scholarship',
    criteria: 'National / State level representation in recognized sports',
    benefit: '25–50% fee concession based on achievement level',
    renewal: 'Active sports participation required each year',
  },
  {
    name: 'Management Discretionary Grant',
    criteria: 'Economically disadvantaged students with strong academic record',
    benefit: 'Up to ₹40,000/year based on committee assessment',
    renewal: 'Annual application with updated income certificate',
  },
];

const applicationSteps = [
  'Obtain the scholarship application form from JIT scholarship office or download from this page',
  'Fill in personal, academic, and financial details accurately',
  'Collect all required supporting documents (list below)',
  'Submit completed application to the JIT Scholarship Cell (Room 108, Admin Block)',
  'Application is verified and forwarded to the respective authority',
  'Scholarship amount is credited to the student\'s bank account or adjusted in fee',
];

const documents = [
  'Caste certificate (for category-based scholarships)',
  'Income certificate (from competent authority, not older than 6 months)',
  'PUC / Class 12 marksheet (original & attested copy)',
  'Aadhaar card copy',
  'Bank passbook copy (savings account in student\'s name)',
  'JIT admission letter / bonafide certificate',
  'Passport-sized photographs (2 copies)',
  'Previous semester marksheet (for renewal applications)',
];

const deadlines = [
  { scholarship: 'GoK SC/ST Post-Matric', deadline: 'Sep 30, 2025' },
  { scholarship: 'OBC Scholarship', deadline: 'Oct 15, 2025' },
  { scholarship: 'Minority Scholarship', deadline: 'Oct 31, 2025' },
  { scholarship: 'Kannada Medium', deadline: 'Nov 15, 2025' },
  { scholarship: 'JIT Merit Scholarship', deadline: 'At time of admission' },
  { scholarship: 'JIT Sports Scholarship', deadline: 'Jul 31, 2025' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function ScholarshipsPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Scholarships &amp; Financial Aid
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Scholarships &amp;<br />Financial Aid
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            JIT is committed to making quality engineering education accessible to deserving students through government and institutional scholarships.
          </motion.p>
        </div>
      </section>

      {/* Govt Scholarships */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>State & National</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Government Scholarships
          </motion.h2>
          <div className="space-y-4">
            {govtScholarships.map((s, i) => (
              <motion.div
                key={s.name}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Award size={18} className="text-primary-gold flex-shrink-0" />
                      <h3 className="font-display text-lg tracking-widest uppercase text-primary-black">{s.name}</h3>
                    </div>
                    <p className="font-mono text-xs text-muted-gray tracking-widest mb-2">{s.authority}</p>
                    <p className="font-body text-sm text-gray-700">{s.eligibility}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span className="font-display text-lg text-primary-gold">{s.amount}</span>
                    <span className="font-mono text-xs text-muted-gray">Deadline: {s.deadline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JIT Scholarships */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Institutional</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            JIT Scholarships
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {jitScholarships.map((s, i) => (
              <motion.div
                key={s.name}
                className="border border-border-gray hover:border-primary-gold transition-colors p-6"
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <BookOpen size={24} className="text-primary-gold mb-4" />
                <h3 className="font-display text-lg tracking-widest uppercase text-white mb-4">{s.name}</h3>
                <div className="space-y-3 font-body text-sm">
                  <div>
                    <p className="text-muted-gray text-xs tracking-widest uppercase font-mono mb-1">Criteria</p>
                    <p className="text-gray-300">{s.criteria}</p>
                  </div>
                  <div>
                    <p className="text-muted-gray text-xs tracking-widest uppercase font-mono mb-1">Benefit</p>
                    <p className="text-primary-gold font-semibold">{s.benefit}</p>
                  </div>
                  <div>
                    <p className="text-muted-gray text-xs tracking-widest uppercase font-mono mb-1">Renewal</p>
                    <p className="text-gray-400">{s.renewal}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">How to Apply</p>
            <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-8">Application Process</h2>
            <div className="space-y-4">
              {applicationSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-display text-xl text-primary-gold w-7 flex-shrink-0">{i + 1}.</span>
                  <p className="font-body text-sm text-gray-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Checklist</p>
            <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-8">Documents Required</h2>
            <ul className="space-y-3">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 font-body text-sm text-gray-700">
                  <FileText size={14} className="text-primary-gold flex-shrink-0 mt-0.5" />
                  {doc}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>
            <AlertCircle size={14} className="inline mr-1" />
            Don't Miss These
          </motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Important Deadlines
          </motion.h2>
          <motion.div className="overflow-x-auto" {...fadeUp} transition={{ delay: 0.2 }}>
            <table className="w-full border-collapse font-body">
              <thead>
                <tr className="border-b border-border-gray">
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Scholarship</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Application Deadline</th>
                </tr>
              </thead>
              <tbody>
                {deadlines.map((d, i) => (
                  <tr key={i} className={`border-b border-border-gray ${i % 2 === 0 ? 'bg-dark-charcoal/30' : ''}`}>
                    <td className="py-4 px-6 text-white">{d.scholarship}</td>
                    <td className="py-4 px-6 font-mono text-xs text-primary-gold">{d.deadline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <motion.div className="mt-12 flex flex-col sm:flex-row gap-4" {...fadeUp} transition={{ delay: 0.25 }}>
            <button className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors inline-flex items-center gap-2">
              <Download size={14} /> Download Application Form
            </button>
            <div className="flex items-center gap-2 text-gray-400 font-body text-sm">
              <Mail size={16} className="text-primary-gold" />
              scholarships@jyothyit.ac.in
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
