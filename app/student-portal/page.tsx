'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, BarChart2, Star, CreditCard, BookOpen, Library, Home, Clock, Bell, Smartphone, Phone, Mail, HelpCircle } from 'lucide-react';

const features = [
  { icon: BarChart2, title: 'Attendance Tracker', desc: 'View subject-wise attendance in real time. Get alerts when attendance falls below 75%.' },
  { icon: Star, title: 'Grade Viewer', desc: 'Check internal assessment marks, lab scores, and semester results as soon as they are published.' },
  { icon: CreditCard, title: 'Fee Payment', desc: 'Pay tuition, hostel, transport, and exam fees online via UPI, net banking, or card.' },
  { icon: BookOpen, title: 'Course Registration', desc: 'Register for electives each semester, view course details, and confirm your selections online.' },
  { icon: Library, title: 'Library Account', desc: 'View borrowed books, due dates, fines, and search the OPAC catalogue from your portal.' },
  { icon: Home, title: 'Hostel Management', desc: 'Apply for hostel room, view room allocation, raise maintenance requests, and pay hostel fee.' },
  { icon: Clock, title: 'Timetable', desc: 'Access your personalised weekly class timetable and any schedule changes in real time.' },
  { icon: Bell, title: 'Circulars & Notices', desc: 'Receive institutional circulars, event announcements, and urgent notifications directly in the portal.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function StudentPortalPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Student Portal
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Student Portal
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            JIT's integrated student management platform — access your academics, fees, hostel, and more from one place.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-body text-lg text-gray-300 max-w-3xl leading-relaxed" {...fadeUp}>
            The JIT Student Portal is your one-stop digital hub for academic life. From attendance and grades to fee payment and hostel management, everything is accessible 24/7 on web and mobile. Stay connected, stay on top of your academic journey.
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Platform Features</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            What You Can Do
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6 group"
                {...fadeUp}
                transition={{ delay: i * 0.07 }}
              >
                <f.icon size={28} className="text-primary-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-sm tracking-widest uppercase text-primary-black mb-3">{f.title}</h3>
                <p className="font-body text-xs text-muted-gray leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Login Instructions */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Getting Started</p>
            <h2 className="font-display text-3xl tracking-widest uppercase text-white mb-8">How to Login</h2>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Visit the Portal', desc: 'Go to portal.jyothyit.ac.in on any browser.' },
                { step: '02', title: 'Enter Your USN', desc: 'Use your University Seat Number (USN) as your username. Format: 1JT21CS001.' },
                { step: '03', title: 'Use Default Password', desc: 'Default password is your date of birth in DDMMYYYY format. Change it after first login.' },
                { step: '04', title: 'Set New Password', desc: 'Create a strong password of at least 8 characters with numbers and special characters.' },
                { step: '05', title: 'Link Your Email', desc: 'Link your institutional email (USN@jyothyit.ac.in) for notifications and password recovery.' },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-4 border-b border-border-gray pb-5">
                  <span className="font-display text-2xl text-primary-gold w-10 flex-shrink-0">{s.step}</span>
                  <div>
                    <h3 className="font-body font-semibold text-white text-sm mb-1">{s.title}</h3>
                    <p className="font-body text-xs text-gray-400">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="https://portal.jyothyit.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors inline-block"
              >
                Access Student Portal →
              </a>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Mobile App</p>
            <h2 className="font-display text-3xl tracking-widest uppercase text-white mb-6">JIT App</h2>
            <p className="font-body text-gray-400 text-sm leading-relaxed mb-8">
              Download the JIT Student App for instant access to attendance, timetable, results, and notices on your smartphone. Available on both Android and iOS. Log in with the same portal credentials.
            </p>
            <div className="space-y-4">
              <button className="flex items-center gap-4 border border-border-gray hover:border-primary-gold transition-colors p-4 w-full group">
                <Smartphone size={28} className="text-primary-gold" />
                <div className="text-left">
                  <p className="font-mono text-xs text-muted-gray tracking-widest">GET IT ON</p>
                  <p className="font-display text-lg tracking-widest uppercase text-white">Google Play Store</p>
                </div>
              </button>
              <button className="flex items-center gap-4 border border-border-gray hover:border-primary-gold transition-colors p-4 w-full group">
                <Smartphone size={28} className="text-primary-gold" />
                <div className="text-left">
                  <p className="font-mono text-xs text-muted-gray tracking-widest">DOWNLOAD ON THE</p>
                  <p className="font-display text-lg tracking-widest uppercase text-white">Apple App Store</p>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Need Help?</motion.p>
          <motion.h2 className="font-display text-2xl tracking-widest uppercase text-white mb-8" {...fadeUp} transition={{ delay: 0.1 }}>
            Portal Support
          </motion.h2>
          <motion.div className="grid md:grid-cols-3 gap-6" {...fadeUp} transition={{ delay: 0.2 }}>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-primary-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-xs text-muted-gray tracking-widest uppercase">Email Support</p>
                <p className="font-body text-white text-sm">itsupport@jyothyit.ac.in</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-primary-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-xs text-muted-gray tracking-widest uppercase">Helpdesk</p>
                <p className="font-body text-white text-sm">+91-80-28437099</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HelpCircle size={18} className="text-primary-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-xs text-muted-gray tracking-widest uppercase">Office Hours</p>
                <p className="font-body text-white text-sm">Mon–Fri: 9 AM – 5 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
