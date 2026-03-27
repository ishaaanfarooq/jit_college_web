'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Monitor, BookOpen, ExternalLink, Users, Video, Award } from 'lucide-react';

const platforms = [
  {
    name: 'NPTEL',
    tagline: '1000+ Courses from IITs & IISc',
    desc: 'Access the full NPTEL library of video lectures and certifications through JIT\'s institutional subscription. Earn NPTEL certificates counted as activity points.',
    link: 'https://nptel.ac.in',
    courses: 1000,
    icon: BookOpen,
  },
  {
    name: 'Coursera',
    tagline: 'JIT Institutional Partnership',
    desc: 'JIT students get access to Coursera courses from top global universities at no cost through our institutional partnership. Earn globally recognized certificates.',
    link: 'https://coursera.org',
    courses: 500,
    icon: Monitor,
  },
  {
    name: 'MIT OpenCourseWare',
    tagline: 'Free MIT Course Materials',
    desc: 'Freely browse MIT\'s complete course materials — lecture notes, assignments, and exams. No login required. Ideal for supplementary learning in core subjects.',
    link: 'https://ocw.mit.edu',
    courses: 2500,
    icon: BookOpen,
  },
  {
    name: 'VTU e-Learning',
    tagline: 'Official VTU Digital Portal',
    desc: 'Access VTU\'s official e-learning portal for video lectures aligned to the current VTU syllabus, created by VTU faculty across all branches.',
    link: 'https://elearning.vtu.ac.in',
    courses: 300,
    icon: Video,
  },
  {
    name: 'JIT Moodle LMS',
    tagline: 'Internal Learning Management System',
    desc: 'JIT\'s own Moodle-powered LMS where faculty upload course materials, assignments, quizzes, and lecture recordings. Use your portal credentials to log in.',
    link: 'https://lms.jyothyit.ac.in',
    courses: 200,
    icon: Monitor,
  },
];

const recommendedCourses = [
  { dept: 'CSE', course: 'Machine Learning', platform: 'NPTEL', instructor: 'Prof. Balaram Ravindran, IIT Madras' },
  { dept: 'CSE', course: 'Deep Learning Specialization', platform: 'Coursera', instructor: 'Andrew Ng, deeplearning.ai' },
  { dept: 'ECE', course: 'VLSI CAD: Logic to Layout', platform: 'Coursera', instructor: 'UIUC Faculty' },
  { dept: 'ECE', course: 'Embedded Systems Design', platform: 'NPTEL', instructor: 'Prof. Santanu Chattopadhyay, IIT Kharagpur' },
  { dept: 'ME', course: 'Engineering Mechanics (Statics)', platform: 'MIT OCW', instructor: 'MIT Faculty' },
  { dept: 'Civil', course: 'Structural Engineering', platform: 'NPTEL', instructor: 'Prof. Devdas Menon, IIT Madras' },
  { dept: 'ISE', course: 'Cloud Computing', platform: 'Coursera', instructor: 'IBM Skills Network' },
  { dept: 'MBA', course: 'Financial Markets', platform: 'Coursera', instructor: 'Prof. Robert Shiller, Yale' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function ELearningPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            E-Learning Platform
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            E-Learning<br />Platform
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Learn beyond the classroom. JIT provides access to 500+ courses across NPTEL, Coursera, MIT OCW, and our internal LMS.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-primary-gold">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '500+', label: 'Courses Available' },
            { value: '3,000+', label: 'Enrolled Students' },
            { value: '50+', label: 'Faculty Content Creators' },
          ].map((s, i) => (
            <motion.div key={s.label} {...fadeUp} transition={{ delay: i * 0.1 }}>
              <p className="font-display text-4xl md:text-5xl tracking-widest text-primary-black">{s.value}</p>
              <p className="font-mono text-xs tracking-widest uppercase text-primary-black/70 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Platforms We Support</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Available Platforms
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6 group"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <p.icon size={24} className="text-primary-gold" />
                  <div>
                    <h3 className="font-display text-lg tracking-widest uppercase text-primary-black">{p.name}</h3>
                    <p className="font-mono text-xs text-primary-gold tracking-widest">{p.tagline}</p>
                  </div>
                </div>
                <p className="font-body text-sm text-muted-gray leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-gray">{p.courses.toLocaleString()}+ Courses</span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-primary-gold hover:text-primary-black transition-colors inline-flex items-center gap-1"
                  >
                    Visit <ExternalLink size={10} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Instructions */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Login Info</p>
            <h2 className="font-display text-3xl tracking-widest uppercase text-white mb-6">How to Access</h2>
            <div className="space-y-4">
              {[
                { step: '01', text: 'Use your institutional email: USN@jyothyit.ac.in' },
                { step: '02', text: 'For NPTEL: Register with your institutional email at nptel.ac.in and access the course library' },
                { step: '03', text: 'For Coursera: Use the JIT institutional login link provided by the IT department' },
                { step: '04', text: 'For JIT Moodle: Login at lms.jyothyit.ac.in using your student portal credentials' },
                { step: '05', text: 'For MIT OCW: No login needed — browse freely at ocw.mit.edu' },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3 border-b border-border-gray pb-4">
                  <span className="font-display text-xl text-primary-gold w-8 flex-shrink-0">{s.step}</span>
                  <p className="font-body text-sm text-gray-300">{s.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Recognition</p>
            <h2 className="font-display text-3xl tracking-widest uppercase text-white mb-6">Certification Policy</h2>
            <div className="space-y-4">
              <div className="border border-border-gray p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={16} className="text-primary-gold" />
                  <p className="font-mono text-xs text-primary-gold tracking-widest uppercase">NPTEL Certificates</p>
                </div>
                <p className="font-body text-sm text-gray-400">Scored 60%+ NPTEL certificates are eligible for up to 5 activity points per course, with a maximum of 20 points per semester.</p>
              </div>
              <div className="border border-border-gray p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={16} className="text-primary-gold" />
                  <p className="font-mono text-xs text-primary-gold tracking-widest uppercase">Coursera Certificates</p>
                </div>
                <p className="font-body text-sm text-gray-400">Professional certificates and specializations from Coursera are recognized for activity credits and placement portfolio enhancement.</p>
              </div>
              <div className="border border-border-gray p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={16} className="text-primary-gold" />
                  <p className="font-mono text-xs text-primary-gold tracking-widest uppercase">Virtual Classroom</p>
                </div>
                <p className="font-body text-sm text-gray-400">JIT conducts virtual classes on MS Teams — Tuesdays and Thursdays, 5–6 PM for supplementary online sessions.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recommended Courses */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Curated Picks</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Recommended by Department
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {recommendedCourses.map((c, i) => (
              <motion.div
                key={`${c.dept}-${c.course}`}
                className="flex items-center gap-4 bg-white border border-gray-200 hover:border-primary-gold transition-colors p-4"
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
              >
                <span className="font-mono text-xs text-primary-gold bg-primary-black px-2 py-1 flex-shrink-0">{c.dept}</span>
                <div className="flex-1">
                  <p className="font-body font-semibold text-primary-black text-sm">{c.course}</p>
                  <p className="font-body text-xs text-muted-gray">{c.instructor}</p>
                </div>
                <span className="font-mono text-xs text-muted-gray flex-shrink-0">{c.platform}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
