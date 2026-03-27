'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, BookOpen, Monitor, Search, FileText, Copy, BookMarked, Clock, Phone, Mail, Users } from 'lucide-react';

const stats = [
  { value: '40,000+', label: 'Book Volumes' },
  { value: '120+', label: 'Journals & Periodicals' },
  { value: '50+', label: 'E-Databases' },
  { value: '9 PM', label: 'Open Until' },
];

const services = [
  { icon: BookOpen, title: 'Book Lending', desc: 'Students may borrow up to 4 books for 14 days. Faculty may borrow up to 10 books for 30 days.' },
  { icon: Search, title: 'Reference Section', desc: 'Encyclopaedias, dictionaries, handbooks, and atlases available for in-library use only.' },
  { icon: Monitor, title: 'Digital Library', desc: 'Dedicated terminals for accessing e-journals, OPAC catalogue, and online databases.' },
  { icon: BookMarked, title: 'NPTEL Access', desc: 'Free access to all NPTEL video lectures and course materials through institutional subscription.' },
  { icon: FileText, title: 'Question Paper Bank', desc: 'Archive of VTU previous year question papers from 2005 onwards, sorted by branch and semester.' },
  { icon: Copy, title: 'Reprography', desc: 'Photocopying and printing services available at nominal cost within library premises.' },
];

const newArrivals = [
  { title: 'Artificial Intelligence: A Modern Approach', author: 'Russell & Norvig', dept: 'CSE' },
  { title: 'VLSI Design Methodology Development', author: 'Lavagno, Martin', dept: 'ECE' },
  { title: 'Mechanics of Materials', author: 'Hibbeler', dept: 'ME' },
  { title: 'Structural Analysis', author: 'Bhavikatti', dept: 'Civil' },
  { title: 'Cloud Computing: Concepts & Technology', author: 'Erl, Mahmood', dept: 'ISE' },
  { title: 'Strategic Management', author: 'Fred David', dept: 'MBA' },
  { title: 'Engineering Mathematics Vol. III', author: 'B.S. Grewal', dept: 'All' },
  { title: 'Deep Learning', author: 'Goodfellow, Bengio', dept: 'CSE' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function LibraryPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Central Library
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Central Library
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A knowledge hub with 40,000+ volumes, digital resources, and a quiet academic environment for JIT scholars.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 bg-primary-gold">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} className="text-center" {...fadeUp} transition={{ delay: i * 0.1 }}>
              <p className="font-display text-4xl md:text-5xl tracking-widest text-primary-black">{s.value}</p>
              <p className="font-mono text-xs tracking-widest uppercase text-primary-black/70 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>What We Offer</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Library Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6 group"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <svc.icon size={28} className="text-primary-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg tracking-widest uppercase text-primary-black mb-3">{svc.title}</h3>
                <p className="font-body text-sm text-muted-gray leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timings */}
      <section className="py-20 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Working Hours</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Library Timings
          </motion.h2>
          <motion.div className="overflow-x-auto" {...fadeUp} transition={{ delay: 0.2 }}>
            <table className="w-full border-collapse font-body">
              <thead>
                <tr className="border-b border-border-gray">
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Day</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Morning</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Closes</th>
                  <th className="text-left py-4 px-6 font-mono text-xs tracking-widest text-primary-gold uppercase">Digital Section</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { day: 'Monday – Friday', morning: '8:00 AM', closes: '9:00 PM', digital: '8:00 AM – 9:00 PM' },
                  { day: 'Saturday', morning: '9:00 AM', closes: '7:00 PM', digital: '9:00 AM – 7:00 PM' },
                  { day: 'Sunday', morning: '10:00 AM', closes: '6:00 PM', digital: 'Closed' },
                  { day: 'Public Holidays', morning: 'Closed', closes: '—', digital: '—' },
                ].map((row, i) => (
                  <tr key={row.day} className={`border-b border-border-gray ${i % 2 === 0 ? 'bg-primary-black/30' : ''}`}>
                    <td className="py-4 px-6 text-white font-semibold">{row.day}</td>
                    <td className="py-4 px-6 text-gray-300">{row.morning}</td>
                    <td className="py-4 px-6 text-gray-300">{row.closes}</td>
                    <td className="py-4 px-6 text-gray-300">{row.digital}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Recently Added</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            New Arrivals — 2025
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {newArrivals.map((book, i) => (
              <motion.div
                key={book.title}
                className="flex items-center gap-4 bg-white border border-gray-200 hover:border-primary-gold transition-colors p-4"
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
              >
                <BookOpen size={20} className="text-primary-gold flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-body font-semibold text-primary-black text-sm">{book.title}</p>
                  <p className="font-body text-xs text-muted-gray mt-0.5">{book.author}</p>
                </div>
                <span className="font-mono text-xs text-primary-gold bg-primary-black px-2 py-1">{book.dept}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules & Membership */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Regulations</p>
            <h2 className="font-display text-3xl tracking-widest uppercase text-white mb-8">Library Rules</h2>
            <ul className="space-y-3">
              {[
                'Maintain absolute silence inside the library',
                'Mobile phones must be switched to silent mode',
                'Bags and personal belongings are not allowed inside',
                'Books must be handled with care; damaged books must be replaced',
                'Borrowing privilege is non-transferable',
                'Overdue books attract a fine of ₹2 per day per book',
                'Food and beverages are strictly prohibited',
                'ID card must be presented at the entrance',
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm text-gray-300">
                  <ChevronRight size={14} className="text-primary-gold flex-shrink-0 mt-0.5" />
                  {rule}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">Membership</p>
            <h2 className="font-display text-3xl tracking-widest uppercase text-white mb-8">Who Can Access</h2>
            <div className="space-y-4">
              {[
                { role: 'UG Students', books: 4, duration: '14 days' },
                { role: 'PG / MBA Students', books: 6, duration: '21 days' },
                { role: 'Faculty & Staff', books: 10, duration: '30 days' },
                { role: 'Research Scholars', books: 8, duration: '30 days' },
              ].map((m) => (
                <div key={m.role} className="border border-border-gray p-4 flex justify-between items-center">
                  <span className="font-body text-white">{m.role}</span>
                  <div className="text-right">
                    <p className="font-mono text-xs text-primary-gold">{m.books} books</p>
                    <p className="font-mono text-xs text-muted-gray">{m.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div {...fadeUp}>
            <h3 className="font-display text-2xl tracking-widest uppercase text-white mb-2">Contact the Librarian</h3>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2 text-gray-300 font-body text-sm"><Users size={14} className="text-primary-gold" /> Mr. Srinivasa Murthy — Chief Librarian</div>
              <div className="flex items-center gap-2 text-gray-300 font-body text-sm"><Phone size={14} className="text-primary-gold" /> +91-80-28437098</div>
              <div className="flex items-center gap-2 text-gray-300 font-body text-sm"><Mail size={14} className="text-primary-gold" /> library@jyothyit.ac.in</div>
              <div className="flex items-center gap-2 text-gray-300 font-body text-sm"><Clock size={14} className="text-primary-gold" /> Mon–Fri: 9 AM – 5 PM</div>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <Link href="/contact" className="bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors inline-block">
              Send a Query
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
