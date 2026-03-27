'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Mail } from 'lucide-react';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: 'By accessing or using the Jyothy Institute of Technology website (jyothyit.ac.in) and its associated digital platforms, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials on this website are protected by applicable copyright and trademark law. These terms apply to all visitors, users, students, prospective students, and others who access or use the website.',
  },
  {
    title: 'Use of Website',
    content: 'This website is provided for informational, educational, and administrative purposes related to Jyothy Institute of Technology. You agree to use the website only for lawful purposes. You must not use the site in any way that violates applicable local, national, or international laws or regulations; to transmit any unsolicited or unauthorized advertising material; to transmit any harmful, offensive, or disruptive content; or to attempt to gain unauthorized access to any part of the website or its related systems.',
  },
  {
    title: 'Intellectual Property',
    content: 'All content on this website — including text, graphics, logos, images, audio clips, digital downloads, and data compilations — is the property of Jyothy Institute of Technology or its content suppliers and is protected by Indian and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, display, or create derivative works from any content on this site without prior written permission from JIT. Unauthorized use may give rise to a claim for damages and/or be a criminal offence.',
  },
  {
    title: 'Disclaimer',
    content: 'The materials on JIT\'s website are provided on an "as is" basis. JIT makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. JIT does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.',
  },
  {
    title: 'Limitation of Liability',
    content: 'In no event shall Jyothy Institute of Technology, its management, trustees, faculty, staff, or agents be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on JIT\'s website, even if JIT or a JIT authorized representative has been notified orally or in writing of the possibility of such damage. JIT\'s total aggregate liability for any claim arising from the use of this website shall not exceed INR 1,000.',
  },
  {
    title: 'Links and Third-Party Content',
    content: 'JIT has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by JIT of the site. Use of any such linked website is at the user\'s own risk. JIT is not responsible for any third-party content, including advertisements, that may appear on the website.',
  },
  {
    title: 'Modifications',
    content: 'JIT may revise these Terms of Use at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Use. We encourage you to review these terms periodically for any changes.',
  },
  {
    title: 'Governing Law',
    content: 'These terms and conditions are governed by and construed in accordance with the laws of the State of Karnataka, India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka for the resolution of any disputes arising out of or relating to these Terms of Use or your use of this website. The United Nations Convention on Contracts for the International Sale of Goods does not apply to these terms.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function TermsPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Terms of Use
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Terms of Use
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Effective Date: January 1, 2026. Please read these terms carefully before using JIT's website.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 bg-dark-charcoal">
        <div className="max-w-4xl mx-auto">
          <motion.p className="font-body text-gray-300 leading-relaxed" {...fadeUp}>
            These Terms of Use ("Terms") constitute a legally binding agreement between you and Jyothy Institute of Technology ("JIT", "Institution", "we", "our"). Please read these terms carefully before accessing or using our website and digital services.
          </motion.p>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-4xl mx-auto space-y-10">
          {sections.map((section, i) => (
            <motion.div key={section.title} {...fadeUp} transition={{ delay: i * 0.05 }}>
              <h2 className="font-display text-xl md:text-2xl tracking-widest uppercase text-primary-black mb-4 pb-3 border-b border-gray-200">
                {i + 1}. {section.title}
              </h2>
              <p className="font-body text-gray-700 text-sm leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-primary-black">
        <div className="max-w-4xl mx-auto">
          <motion.div className="border border-border-gray p-8" {...fadeUp}>
            <h2 className="font-display text-2xl tracking-widest uppercase text-white mb-4">Legal Contact</h2>
            <p className="font-body text-gray-400 text-sm mb-6">
              For any legal inquiries, licensing requests, or concerns regarding these Terms of Use, please contact the JIT Legal & Compliance Office.
            </p>
            <div className="flex items-center gap-3 font-body text-sm text-gray-300">
              <Mail size={16} className="text-primary-gold" />
              <a href="mailto:legal@jyothyit.ac.in" className="hover:text-primary-gold transition-colors">legal@jyothyit.ac.in</a>
            </div>
            <div className="mt-4 pt-4 border-t border-border-gray">
              <p className="font-mono text-xs text-muted-gray tracking-widest">
                Jyothy Institute of Technology | Tataguni Gate, Kanakapura Road | Bengaluru – 560082, Karnataka, India
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
