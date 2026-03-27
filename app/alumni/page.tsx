'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Globe, Users, Calendar, Briefcase, Star, Mail } from 'lucide-react';
import { useState } from 'react';

const notableAlumni = [
  { name: 'Rahul Menon', batch: 'CSE 2018', role: 'Software Engineer', company: 'Google', location: 'Bengaluru', initials: 'RM', color: '#1e3a5f' },
  { name: 'Priya Sharma', batch: 'ECE 2019', role: 'VLSI Design Engineer', company: 'Intel India', location: 'Bengaluru', initials: 'PS', color: '#5f1e3a' },
  { name: 'Kiran Kumar', batch: 'ME 2017', role: 'Senior Design Engineer', company: 'Tata Motors', location: 'Pune', initials: 'KK', color: '#1e5f3a' },
  { name: 'Ananya Reddy', batch: 'MBA 2020', role: 'Product Manager', company: 'Flipkart', location: 'Bengaluru', initials: 'AR', color: '#5f5f1e' },
  { name: 'Sudhir Nair', batch: 'ISE 2019', role: 'Cloud Solutions Architect', company: 'Amazon Web Services', location: 'Hyderabad', initials: 'SN', color: '#3a1e5f' },
  { name: 'Deepika S.', batch: 'Civil 2016', role: 'Project Manager', company: 'L&T Construction', location: 'Mumbai', initials: 'DS', color: '#5f3a1e' },
];

const chapters = [
  { city: 'Bengaluru', members: '2,400+', head: 'Rahul Menon', active: true },
  { city: 'Mumbai', members: '650+', head: 'Kiran Kumar', active: true },
  { city: 'Pune', members: '480+', head: 'Sanjay Kulkarni', active: true },
  { city: 'Hyderabad', members: '520+', head: 'Sudhir Nair', active: true },
  { city: 'USA (Bay Area)', members: '380+', head: 'Arun Krishnan', active: true },
  { city: 'UAE (Dubai)', members: '290+', head: 'Mohammed Rafi', active: true },
];

const benefits = [
  { icon: Briefcase, title: 'Job Board Access', desc: 'Exclusive access to JIT alumni job board with roles from fellow alumni companies' },
  { icon: Users, title: 'Mentorship Program', desc: 'Connect with senior alumni for career guidance, interviews, and growth advice' },
  { icon: Calendar, title: 'Campus Events', desc: 'Priority invitations to JIT events, conclaves, and annual alumni meet' },
  { icon: Star, title: 'Alumni Network', desc: 'Access to a global network of 6,000+ JIT graduates across 15+ countries' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AlumniPage() {
  const [formData, setFormData] = useState({ name: '', batch: '', company: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Alumni Association
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Alumni<br />Association
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            6,000+ JIT graduates across 15+ countries — connected by a shared alma mater and a commitment to giving back.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-primary-gold">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '6,000+', label: 'Alumni Network' },
            { value: '15+', label: 'Countries' },
            { value: '200+', label: 'Companies' },
            { value: '18+', label: 'Batches' },
          ].map((s, i) => (
            <motion.div key={s.label} {...fadeUp} transition={{ delay: i * 0.1 }}>
              <p className="font-display text-4xl md:text-5xl tracking-widest text-primary-black">{s.value}</p>
              <p className="font-mono text-xs tracking-widest uppercase text-primary-black/70 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Our Achievers</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Notable Alumni
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notableAlumni.map((alum, i) => (
              <motion.div
                key={alum.name}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6 group"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: alum.color }}>
                    <span className="font-display text-lg text-white">{alum.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-primary-black">{alum.name}</h3>
                    <p className="font-mono text-xs text-primary-gold tracking-widest">{alum.batch}</p>
                  </div>
                </div>
                <div className="space-y-2 font-body text-sm">
                  <div className="flex items-center gap-2 text-gray-700"><Briefcase size={13} className="text-primary-gold flex-shrink-0" />{alum.role}</div>
                  <div className="flex items-center gap-2 text-gray-700"><Star size={13} className="text-primary-gold flex-shrink-0" />{alum.company}</div>
                  <div className="flex items-center gap-2 text-muted-gray"><Globe size={13} className="text-primary-gold flex-shrink-0" />{alum.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Global Presence</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Alumni Chapters
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapters.map((ch, i) => (
              <motion.div
                key={ch.city}
                className="border border-border-gray hover:border-primary-gold transition-colors p-5 flex items-center justify-between"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Globe size={16} className="text-primary-gold" />
                    <h3 className="font-display text-lg tracking-widest uppercase text-white">{ch.city}</h3>
                  </div>
                  <p className="font-body text-xs text-gray-400">{ch.head}</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-xl text-primary-gold">{ch.members}</p>
                  <p className="font-mono text-xs text-muted-gray">Members</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Upcoming</p>
            <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-8">Alumni Events</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 hover:border-primary-gold transition-colors p-5">
                <div className="flex items-center gap-3 mb-2"><Calendar size={16} className="text-primary-gold" /><p className="font-mono text-xs text-primary-gold tracking-widest uppercase">March 15, 2026</p></div>
                <h3 className="font-body font-semibold text-primary-black mb-1">Annual Alumni Meet 2026</h3>
                <p className="font-body text-sm text-muted-gray">Grand reunion at JIT campus — networking, cultural events, panel discussions, and awards ceremony.</p>
              </div>
              <div className="border border-gray-200 hover:border-primary-gold transition-colors p-5">
                <div className="flex items-center gap-3 mb-2"><Calendar size={16} className="text-primary-gold" /><p className="font-mono text-xs text-primary-gold tracking-widest uppercase">Ongoing — 2025-26</p></div>
                <h3 className="font-body font-semibold text-primary-black mb-1">Alumni Mentorship Program</h3>
                <p className="font-body text-sm text-muted-gray">Connect with final-year students as mentors for career guidance, resume review, and mock interviews.</p>
              </div>
            </div>
          </motion.div>

          {/* Register Form */}
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Join Us</p>
            <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-6">Register as Alumni</h2>
            {submitted ? (
              <div className="border border-primary-gold p-8 text-center">
                <p className="font-display text-xl tracking-widest uppercase text-primary-gold mb-3">Welcome Back, JITian!</p>
                <p className="font-body text-gray-700 text-sm">Your registration is received. Our alumni team will reach out within 5 working days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: 'Full Name', key: 'name', placeholder: 'Your full name' },
                  { label: 'Batch Year & Department', key: 'batch', placeholder: 'e.g., CSE 2018' },
                  { label: 'Current Company & Role', key: 'company', placeholder: 'e.g., Software Engineer at Google' },
                  { label: 'Email Address', key: 'email', placeholder: 'your.email@example.com' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="font-mono text-xs tracking-widest text-muted-gray uppercase block mb-2">{field.label}</label>
                    <input
                      type={field.key === 'email' ? 'email' : 'text'}
                      required
                      className="w-full bg-white border border-gray-200 text-primary-black px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors"
                      placeholder={field.placeholder}
                      value={(formData as Record<string, string>)[field.key]}
                      onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                    />
                  </div>
                ))}
                <button type="submit" className="w-full bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase py-4 hover:bg-primary-black hover:text-primary-gold transition-colors">
                  Register Now
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Member Perks</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Alumni Benefits
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} className="border border-border-gray hover:border-primary-gold transition-colors p-6 group" {...fadeUp} transition={{ delay: i * 0.1 }}>
                <b.icon size={28} className="text-primary-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-sm tracking-widest uppercase text-white mb-3">{b.title}</h3>
                <p className="font-body text-xs text-gray-400 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-10 flex items-center gap-3" {...fadeUp} transition={{ delay: 0.3 }}>
            <Mail size={16} className="text-primary-gold" />
            <span className="font-body text-gray-400 text-sm">alumni@jyothyit.ac.in</span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
