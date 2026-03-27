'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Mail } from 'lucide-react';

const sections = [
  {
    id: 'collect',
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Personal Information',
        text: 'When you use our website, contact us, or apply for admission, we may collect personal information including your name, email address, phone number, postal address, date of birth, educational qualifications, and government identification details.',
      },
      {
        subtitle: 'Usage Data',
        text: 'We automatically collect certain information when you visit jyothyit.ac.in, including your IP address, browser type and version, pages visited, time and date of visit, time spent on pages, and other diagnostic data. This data is used solely for improving user experience.',
      },
      {
        subtitle: 'Cookies',
        text: 'Our website uses cookies to enhance functionality. Cookies are small data files placed on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.',
      },
    ],
  },
  {
    id: 'use',
    title: 'How We Use Your Information',
    content: [
      {
        subtitle: 'Admissions & Academic Administration',
        text: 'Information collected during the admission process is used to process applications, verify eligibility, communicate decisions, and maintain academic records in compliance with VTU and AICTE regulations.',
      },
      {
        subtitle: 'Communication',
        text: 'We use your contact information to send institutional notices, examination alerts, event invitations, newsletters, and important academic communications. You may opt out of promotional communications at any time.',
      },
      {
        subtitle: 'Service Improvement',
        text: 'Usage data and feedback collected through our website and portals helps us improve our digital services, identify technical issues, and enhance the overall user experience.',
      },
    ],
  },
  {
    id: 'security',
    title: 'Data Security',
    content: [
      {
        subtitle: 'Protective Measures',
        text: 'JIT implements appropriate technical and organizational security measures to protect your personal data against accidental loss, unauthorized access, alteration, or disclosure. Our student portal uses 256-bit SSL encryption for all data transmissions.',
      },
      {
        subtitle: 'Data Retention',
        text: 'Academic records are retained permanently as per UGC guidelines. Other personal data is retained only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law.',
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies Policy',
    content: [
      {
        subtitle: 'Types of Cookies We Use',
        text: 'We use essential cookies (required for website functionality), performance cookies (to analyze website usage), and functional cookies (to remember user preferences). We do not use advertising or tracking cookies.',
      },
      {
        subtitle: 'Managing Cookies',
        text: 'You can control cookies through your browser settings. Visit your browser\'s help documentation to understand how to manage cookie preferences. Note that disabling certain cookies may limit your access to some features of our website.',
      },
    ],
  },
  {
    id: 'third-party',
    title: 'Third-Party Links',
    content: [
      {
        subtitle: 'External Websites',
        text: 'Our website may contain links to external sites such as VTU (vtu.ac.in), AICTE, NPTEL, UGC, and other institutional partners. These websites are governed by their own privacy policies. JIT is not responsible for the privacy practices of third-party websites.',
      },
    ],
  },
  {
    id: 'rights',
    title: 'Your Rights',
    content: [
      {
        subtitle: 'Access & Correction',
        text: 'You have the right to access the personal information we hold about you and to request corrections if it is inaccurate. Requests can be made by emailing privacy@jyothyit.ac.in with appropriate identity verification.',
      },
      {
        subtitle: 'Data Deletion',
        text: 'Students and applicants may request deletion of their personal data for non-academic records by submitting a written request. Academic records mandated by VTU/AICTE are exempt from deletion requests.',
      },
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Privacy Policy
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Last updated: January 2026
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 bg-dark-charcoal">
        <div className="max-w-4xl mx-auto">
          <motion.p className="font-body text-gray-300 leading-relaxed" {...fadeUp}>
            Jyothy Institute of Technology ("JIT", "we", "our") is committed to protecting the privacy and security of the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website jyothyit.ac.in or use our digital services. Please read this policy carefully. If you disagree with any part of this policy, please discontinue use of our website.
          </motion.p>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, si) => (
            <motion.div key={section.id} id={section.id} {...fadeUp} transition={{ delay: si * 0.05 }}>
              <h2 className="font-display text-2xl md:text-3xl tracking-widest uppercase text-primary-black mb-6 border-b border-gray-200 pb-4">
                {si + 1}. {section.title}
              </h2>
              <div className="space-y-5">
                {section.content.map((item) => (
                  <div key={item.subtitle}>
                    <h3 className="font-body font-semibold text-primary-black mb-2">{item.subtitle}</h3>
                    <p className="font-body text-gray-700 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-primary-black">
        <div className="max-w-4xl mx-auto">
          <motion.div className="border border-border-gray p-8" {...fadeUp}>
            <h2 className="font-display text-2xl tracking-widest uppercase text-white mb-4">Privacy Contact</h2>
            <p className="font-body text-gray-400 text-sm mb-6">
              For questions, concerns, or requests related to this Privacy Policy or your personal data, please contact our Data Protection Officer.
            </p>
            <div className="flex items-center gap-3 font-body text-sm text-gray-300">
              <Mail size={16} className="text-primary-gold" />
              <a href="mailto:privacy@jyothyit.ac.in" className="hover:text-primary-gold transition-colors">privacy@jyothyit.ac.in</a>
            </div>
            <p className="font-mono text-xs text-muted-gray mt-6 tracking-widest">This policy was last reviewed and updated in January 2026. We reserve the right to update this policy at any time. Changes will be notified via the JIT Student Portal and website homepage.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
