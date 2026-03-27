'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Mail } from 'lucide-react';
import { useState } from 'react';

const departments = ['All', 'CSE', 'ECE', 'ME', 'Civil', 'ISE', 'MBA'];

const allFaculty = [
  { name: 'Dr. Anitha Rao', dept: 'CSE', designation: 'Professor', specialisation: 'Artificial Intelligence & Machine Learning', email: 'anitha.rao@jyothyit.ac.in', initials: 'AR', color: '#1e3a5f' },
  { name: 'Dr. Suresh Kumar', dept: 'CSE', designation: 'Associate Professor', specialisation: 'Data Structures & Algorithms', email: 'suresh.kumar@jyothyit.ac.in', initials: 'SK', color: '#2d4a1e' },
  { name: 'Ms. Priya Nair', dept: 'CSE', designation: 'Assistant Professor', specialisation: 'Web Technologies & Full-Stack Development', email: 'priya.nair@jyothyit.ac.in', initials: 'PN', color: '#5f1e3a' },
  { name: 'Dr. Ramesh B.', dept: 'CSE', designation: 'Professor', specialisation: 'Computer Networks & Cybersecurity', email: 'ramesh.b@jyothyit.ac.in', initials: 'RB', color: '#3a1e5f' },
  { name: 'Dr. Kavitha M.', dept: 'ECE', designation: 'Professor & Head', specialisation: 'VLSI Design & Embedded Systems', email: 'kavitha.m@jyothyit.ac.in', initials: 'KM', color: '#5f3a1e' },
  { name: 'Mr. Arun Sharma', dept: 'ECE', designation: 'Assistant Professor', specialisation: 'Embedded Systems & IoT', email: 'arun.sharma@jyothyit.ac.in', initials: 'AS', color: '#1e5f3a' },
  { name: 'Ms. Deepa S.', dept: 'ECE', designation: 'Assistant Professor', specialisation: 'Digital Signal Processing', email: 'deepa.s@jyothyit.ac.in', initials: 'DS', color: '#5f5f1e' },
  { name: 'Dr. Vikram Singh', dept: 'ME', designation: 'Professor & Head', specialisation: 'Thermodynamics & Heat Transfer', email: 'vikram.singh@jyothyit.ac.in', initials: 'VS', color: '#1e3a5f' },
  { name: 'Mr. Ravi Kumar', dept: 'ME', designation: 'Assistant Professor', specialisation: 'Manufacturing Processes & CNC', email: 'ravi.kumar@jyothyit.ac.in', initials: 'RK', color: '#2d1e5f' },
  { name: 'Mr. Harish T.', dept: 'ME', designation: 'Assistant Professor', specialisation: 'CAD/CAM & Product Design', email: 'harish.t@jyothyit.ac.in', initials: 'HT', color: '#5f1e2d' },
  { name: 'Dr. Shalini D.', dept: 'Civil', designation: 'Professor & Head', specialisation: 'Structural Engineering & Analysis', email: 'shalini.d@jyothyit.ac.in', initials: 'SD', color: '#1e5f5f' },
  { name: 'Mr. Akhil Raj', dept: 'Civil', designation: 'Assistant Professor', specialisation: 'Geotechnical Engineering', email: 'akhil.raj@jyothyit.ac.in', initials: 'AR', color: '#3a5f1e' },
  { name: 'Ms. Kavya R.', dept: 'Civil', designation: 'Assistant Professor', specialisation: 'Environmental Engineering', email: 'kavya.r@jyothyit.ac.in', initials: 'KR', color: '#5f2d1e' },
  { name: 'Dr. Meera G.', dept: 'ISE', designation: 'Professor & Head', specialisation: 'Cloud Computing & Distributed Systems', email: 'meera.g@jyothyit.ac.in', initials: 'MG', color: '#1e3a5f' },
  { name: 'Ms. Deepa S.', dept: 'ISE', designation: 'Assistant Professor', specialisation: 'Database Systems & Big Data', email: 'deepa.ise@jyothyit.ac.in', initials: 'DS', color: '#5f1e5f' },
  { name: 'Mr. Rohan K.', dept: 'ISE', designation: 'Assistant Professor', specialisation: 'Information Security & Cryptography', email: 'rohan.k@jyothyit.ac.in', initials: 'RK', color: '#3a3a1e' },
  { name: 'Dr. Venkat Reddy', dept: 'MBA', designation: 'Professor & Head', specialisation: 'Finance & Investment Banking', email: 'venkat.reddy@jyothyit.ac.in', initials: 'VR', color: '#1e4a3a' },
  { name: 'Ms. Anjali K.', dept: 'MBA', designation: 'Assistant Professor', specialisation: 'Marketing & Consumer Behaviour', email: 'anjali.k@jyothyit.ac.in', initials: 'AK', color: '#4a1e3a' },
  { name: 'Mr. Sanjay M.', dept: 'MBA', designation: 'Assistant Professor', specialisation: 'Human Resource Management', email: 'sanjay.m@jyothyit.ac.in', initials: 'SM', color: '#3a4a1e' },
];

const designationColor: Record<string, string> = {
  'Professor': '#CDB87C',
  'Professor & Head': '#CDB87C',
  'Associate Professor': '#9B8B5A',
  'Assistant Professor': '#6B6B6B',
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function FacultyPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All' ? allFaculty : allFaculty.filter(f => f.dept === activeTab);

  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Faculty Directory
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Faculty Directory
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Meet our distinguished faculty — researchers, engineers, and educators committed to shaping the next generation of innovators.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-primary-gold">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '120+', label: 'Total Faculty' },
            { value: '45+', label: 'PhD Holders' },
            { value: '80%', label: 'with 10+ Yrs Exp' },
            { value: '200+', label: 'Publications' },
          ].map((s, i) => (
            <motion.div key={s.label} {...fadeUp} transition={{ delay: i * 0.1 }}>
              <p className="font-display text-4xl tracking-widest text-primary-black">{s.value}</p>
              <p className="font-mono text-xs tracking-widest uppercase text-primary-black/70 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filter Tabs + Grid */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Our Team</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-8" {...fadeUp} transition={{ delay: 0.1 }}>
            Meet the Faculty
          </motion.h2>

          {/* Tabs */}
          <motion.div className="flex flex-wrap gap-2 mb-12" {...fadeUp} transition={{ delay: 0.15 }}>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveTab(dept)}
                className={`font-mono text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-200 ${
                  activeTab === dept
                    ? 'bg-primary-gold text-primary-black'
                    : 'bg-white border border-gray-200 text-muted-gray hover:border-primary-gold hover:text-primary-black'
                }`}
              >
                {dept}
              </button>
            ))}
          </motion.div>

          {/* Faculty Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((faculty, i) => (
              <motion.div
                key={`${faculty.name}-${faculty.dept}`}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: faculty.color }}
                  >
                    <span className="font-display text-lg text-white tracking-wider">{faculty.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-primary-black text-sm leading-tight">{faculty.name}</h3>
                    <p className="font-mono text-xs tracking-widest mt-0.5" style={{ color: designationColor[faculty.designation] || '#6B6B6B' }}>
                      {faculty.designation}
                    </p>
                    <span className="font-mono text-xs text-muted-gray tracking-widest">{faculty.dept}</span>
                  </div>
                </div>
                <p className="font-body text-xs text-muted-gray leading-relaxed mb-4 border-t border-gray-100 pt-4">{faculty.specialisation}</p>
                <a
                  href={`mailto:${faculty.email}`}
                  className="flex items-center gap-2 font-mono text-xs text-primary-gold hover:text-primary-black transition-colors"
                >
                  <Mail size={12} />
                  {faculty.email}
                </a>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center font-body text-muted-gray py-12">No faculty listed for this department yet.</p>
          )}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 className="font-display text-3xl tracking-widest uppercase text-white mb-4" {...fadeUp}>
            Join Our Faculty
          </motion.h2>
          <motion.p className="font-body text-gray-400 max-w-xl mx-auto mb-8" {...fadeUp} transition={{ delay: 0.1 }}>
            JIT welcomes applications from passionate educators and researchers. View current openings or send your CV to careers@jyothyit.ac.in.
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <Link href="/contact" className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors inline-block">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
