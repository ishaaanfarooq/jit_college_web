'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, BarChart2, Download, ExternalLink, Users, BookOpen, Award } from 'lucide-react';

const metricsData = [
  {
    metric: 'Teaching, Learning & Resources (TLR)',
    score: 52.4,
    maxScore: 100,
    components: [
      { label: 'Student Strength (SS)', score: 18.2 },
      { label: 'Faculty-Student Ratio (FSR)', score: 14.8 },
      { label: 'Combined Metric for Faculty (CFQ)', score: 11.6 },
      { label: 'Financial Resources & Utilisation (FRU)', score: 7.8 },
    ],
  },
  {
    metric: 'Research & Professional Practice (RP)',
    score: 8.6,
    maxScore: 100,
    components: [
      { label: 'Combined Metric for Publications (PU)', score: 4.2 },
      { label: 'Combined Metric for IPR (QP)', score: 1.8 },
      { label: 'Footprint of Projects & Professional Practice (FPPP)', score: 2.6 },
    ],
  },
  {
    metric: 'Graduation Outcomes (GO)',
    score: 46.2,
    maxScore: 100,
    components: [
      { label: 'Metric for University Examinations (GUE)', score: 24.1 },
      { label: 'Metric for PhD Students (GPHD)', score: 0.8 },
      { label: 'Metric for Placement & Higher Studies (GPHE)', score: 21.3 },
    ],
  },
  {
    metric: 'Outreach & Inclusivity (OI)',
    score: 38.5,
    maxScore: 100,
    components: [
      { label: 'Percentage of Students from Other States (Region Diversity)', score: 8.4 },
      { label: 'Percentage of Women Students (WS)', score: 18.2 },
      { label: 'Economically & Socially Challenged Students (ESCS)', score: 11.9 },
    ],
  },
  {
    metric: 'Perception (PR)',
    score: 14.2,
    maxScore: 100,
    components: [
      { label: 'Peer Perception — Academics (PPA)', score: 9.8 },
      { label: 'Public Perception (PPR)', score: 4.4 },
    ],
  },
];

const facultyData = [
  { label: 'Total Sanctioned Faculty', value: '120' },
  { label: 'Total Faculty in Position', value: '114' },
  { label: 'PhD Holders', value: '48 (42%)' },
  { label: 'Publications (5 years)', value: '186' },
  { label: 'Research Grants Received', value: '₹42 Lakhs' },
  { label: 'Patents Filed', value: '12' },
];

const studentData = [
  { label: 'Total Enrollment (2024-25)', value: '2,280' },
  { label: 'Female Students', value: '38%' },
  { label: 'SC/ST Students', value: '22%' },
  { label: 'OBC Students', value: '31%' },
  { label: 'Placement Rate (2024-25)', value: '94%' },
  { label: 'Average Package', value: '₹6.2 LPA' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function NIRFPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            NIRF Rankings
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            NIRF Rankings<br />&amp; Data
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            JIT actively participates in the National Institutional Ranking Framework (NIRF) — transparent, data-driven institutional accountability.
          </motion.p>
        </div>
      </section>

      {/* About NIRF */}
      <section className="py-16 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-body text-gray-300 max-w-3xl leading-relaxed" {...fadeUp}>
            The National Institutional Ranking Framework (NIRF) was approved by the Ministry of Education, Government of India in September 2015. The framework outlines a methodology to rank institutions across India in five broad parameters. JIT participates in NIRF annually as part of its commitment to transparency, accountability, and continuous improvement.
          </motion.p>
        </div>
      </section>

      {/* NIRF Metrics */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Ranking Parameters</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            NIRF Key Metrics
          </motion.h2>
          <div className="space-y-6">
            {metricsData.map((metric, i) => (
              <motion.div
                key={metric.metric}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <BarChart2 size={20} className="text-primary-gold flex-shrink-0" />
                    <h3 className="font-display text-sm tracking-widest uppercase text-primary-black">{metric.metric}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary-gold rounded-full"
                        style={{ width: `${metric.score}%` }}
                      />
                    </div>
                    <span className="font-display text-2xl text-primary-gold">{metric.score}<span className="text-sm text-muted-gray font-body">/{metric.maxScore}</span></span>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-3 mt-4 pt-4 border-t border-gray-100">
                  {metric.components.map((comp) => (
                    <div key={comp.label} className="text-xs">
                      <p className="font-body text-muted-gray mb-1">{comp.label}</p>
                      <p className="font-mono text-primary-gold">{comp.score}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty + Student Data */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={20} className="text-primary-gold" />
              <h2 className="font-display text-2xl tracking-widest uppercase text-white">Faculty Data</h2>
            </div>
            <div className="space-y-3">
              {facultyData.map((d) => (
                <div key={d.label} className="flex justify-between border-b border-border-gray pb-3">
                  <span className="font-body text-sm text-gray-400">{d.label}</span>
                  <span className="font-body font-semibold text-white text-sm">{d.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <div className="flex items-center gap-3 mb-6">
              <Users size={20} className="text-primary-gold" />
              <h2 className="font-display text-2xl tracking-widest uppercase text-white">Student Data</h2>
            </div>
            <div className="space-y-3">
              {studentData.map((d) => (
                <div key={d.label} className="flex justify-between border-b border-border-gray pb-3">
                  <span className="font-body text-sm text-gray-400">{d.label}</span>
                  <span className="font-body font-semibold text-white text-sm">{d.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download + NIRF Portal */}
      <section className="py-16 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-2">
              <Award size={20} className="text-primary-gold" />
              <h3 className="font-display text-2xl tracking-widest uppercase text-primary-black">NIRF Data Report</h3>
            </div>
            <p className="font-body text-muted-gray text-sm max-w-lg">Download JIT's complete NIRF data submission including all parameters, supporting data, and institutional statistics for the current ranking cycle.</p>
          </motion.div>
          <motion.div className="flex flex-col sm:flex-row gap-4" {...fadeUp} transition={{ delay: 0.15 }}>
            <button className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-primary-black hover:text-primary-gold transition-colors inline-flex items-center gap-2">
              <Download size={14} /> Download NIRF Report
            </button>
            <a
              href="https://www.nirfindia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-gold text-primary-gold font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-primary-gold hover:text-primary-black transition-colors inline-flex items-center gap-2"
            >
              NIRF Portal <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
