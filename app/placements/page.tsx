'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, TrendingUp, Users, Award, Briefcase, Mail, Phone } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const recruiters = [
  'Infosys', 'Wipro', 'TCS', 'Cognizant', 'Accenture', 'Capgemini', 'HCL Technologies', 'L&T Infotech',
  'Mphasis', 'IBM', 'Dell', 'Oracle', 'NTT Data', 'CSS Corp', 'Mindtree', 'Hexaware',
  'Cyient', 'Persistent Systems', 'Zensar', 'Sasken', 'Bosch', 'ABB', 'Siemens', 'Tata Elxsi',
  'Infosys', 'Wipro', 'TCS', 'Cognizant', 'Accenture', 'Capgemini', 'HCL Technologies', 'L&T Infotech',
];

const successStories = [
  { name: 'Aditya Kulkarni', batch: '2022', company: 'Infosys', role: 'Senior Software Engineer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face', quote: 'The placement training at JIT was thorough — aptitude, coding, and soft skills were all covered. I felt completely prepared for my interviews.' },
  { name: 'Sneha Prakash', batch: '2023', company: 'Wipro', role: 'Project Lead', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', quote: "JIT's industry connections opened doors I didn't know existed. The T&P cell was incredibly supportive throughout the process." },
  { name: 'Vikram Reddy', batch: '2021', company: 'TCS', role: 'Digital Architect', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', quote: 'The mock interviews and group discussions at JIT gave me the confidence to ace any interview. Forever grateful to my mentors here.' },
  { name: 'Pooja Nambiar', batch: '2023', company: 'Accenture', role: 'Technology Analyst', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face', quote: 'From resume building to offer letters, the T&P cell at JIT held our hands every step of the way. Could not have asked for better support.' },
];

const placementProcess = [
  { step: '01', title: 'Pre-Placement Training', desc: 'Comprehensive 6-month training programme covering aptitude & reasoning, quantitative mathematics, verbal ability, and coding (C, Java, Python, DSA).' },
  { step: '02', title: 'Company Registration', desc: 'Companies register with our T&P cell. JIT invites 300+ companies annually. Resume preparation and company research workshops conducted.' },
  { step: '03', title: 'Written Tests / Online Assessments', desc: 'Proctored online assessments on platforms like AMCAT, eLitmus, CoCubes. Practice sessions held before every major drive.' },
  { step: '04', title: 'Group Discussion', desc: 'GD training sessions covering current affairs, business topics, and technical subjects. Mock GDs with faculty and industry mentors.' },
  { step: '05', title: 'Technical Interview', desc: 'Core subject revision, project discussions, coding rounds. JIT faculty conduct mock technical interviews with detailed feedback.' },
  { step: '06', title: 'HR Interview', desc: 'Behavioural interview preparation, STAR method training, salary negotiation guidance, and professional etiquette workshops.' },
  { step: '07', title: 'Offer & Onboarding', desc: 'Offer letter acceptance, document verification, joining formalities guidance, and post-placement support by the T&P cell.' },
];

const training = [
  'Aptitude & Reasoning (1 year long training)', 'Data Structures & Algorithms Bootcamp', 'Full-Stack Web Development', 'Cloud Computing (AWS/Azure/GCP)', 'Soft Skills & Communication', 'Mock Interviews (15+ rounds)', 'Group Discussion Practice', 'Resume & LinkedIn Optimisation', 'Industry Certifications Support', 'Internship Facilitation'
];

const yearStats = [
  { year: '2022', placed: 310, total: 350, highest: '14 LPA', avg: '4.1 LPA' },
  { year: '2023', placed: 380, total: 420, highest: '16 LPA', avg: '4.3 LPA' },
  { year: '2024', placed: 480, total: 510, highest: '18 LPA', avg: '4.5 LPA' },
];

export default function PlacementsPage() {
  useEffect(() => {
    const counters = document.querySelectorAll('.placement-stat');
    counters.forEach(el => {
      const target = parseInt(el.getAttribute('data-target') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target, duration: 2, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        onUpdate: function () { el.textContent = Math.round(obj.val) + suffix; }
      });
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16 px-6 pt-20">
        <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&h=700&fit=crop" alt="Placements" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-2">
            <Link href="/" className="hover:text-white">Home</Link> <ChevronRight className="inline" size={12} /> Placements
          </p>
          <motion.h1 className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Training & Placements
          </motion.h1>
          <div className="flex flex-wrap gap-6 mt-4">
            {[{ v: '90%+', l: 'Placement Rate' }, { v: '₹18 LPA', l: 'Highest Package' }, { v: '300+', l: 'Recruiting Companies' }].map(s => (
              <div key={s.l} className="bg-primary-gold/20 border border-primary-gold px-5 py-2">
                <span className="font-display text-xl text-primary-gold">{s.v}</span>
                <span className="text-gray-300 text-xs ml-2 font-mono">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Placement Statistics" theme="dark" className="mb-12" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: TrendingUp, val: 480, suffix: '+', label: 'Students Placed (2024)' },
              { icon: Award, val: 18, suffix: ' LPA', label: 'Highest Package' },
              { icon: Briefcase, val: 4, suffix: '.5 LPA', label: 'Average Package' },
              { icon: Users, val: 300, suffix: '+', label: 'Recruiting Companies' },
            ].map((stat, i) => (
              <motion.div key={i} className="text-center border border-border-gray p-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <stat.icon className="text-primary-gold mx-auto mb-3" size={28} />
                <div className="placement-stat font-display text-5xl text-primary-gold" data-target={stat.val} data-suffix={stat.suffix}>0</div>
                <p className="text-gray-400 text-xs mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          {/* Year-wise table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-dark-charcoal">
                  {['Year', 'Students Placed', 'Eligible Students', 'Placement %', 'Highest Package', 'Avg Package'].map(h => (
                    <th key={h} className="px-5 py-3 text-left font-display tracking-widest text-xs uppercase text-primary-gold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {yearStats.map((row, i) => (
                  <motion.tr key={row.year} className="border-b border-border-gray hover:bg-dark-charcoal transition-colors" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <td className="px-5 py-4 font-display text-white text-lg">{row.year}</td>
                    <td className="px-5 py-4 text-primary-gold font-mono">{row.placed}</td>
                    <td className="px-5 py-4 text-gray-300 font-mono">{row.total}</td>
                    <td className="px-5 py-4 text-green-400 font-mono font-bold">{Math.round(row.placed/row.total*100)}%</td>
                    <td className="px-5 py-4 text-primary-gold font-mono">₹{row.highest}</td>
                    <td className="px-5 py-4 text-gray-300 font-mono">₹{row.avg}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recruiters Marquee */}
      <section className="py-20 bg-warm-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <SectionHeading title="Our Recruiters" label="Top Companies" className="mb-8" />
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-6 items-center" style={{ animation: 'marquee-left 30s linear infinite', width: 'max-content' }}>
            {recruiters.map((company, i) => (
              <div key={i} className="flex-shrink-0 bg-white border border-gray-200 px-8 py-4 min-w-[150px] text-center hover:border-primary-gold transition-colors">
                <span className="font-display text-sm tracking-widest text-primary-black uppercase">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Placement Process" label="How It Works" className="mb-12" />
          <div className="space-y-6">
            {placementProcess.map((step, i) => (
              <motion.div key={i} className="flex gap-6 items-start" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary-black flex items-center justify-center">
                    <span className="font-display text-xl text-primary-gold">{step.step}</span>
                  </div>
                </div>
                <div className="bg-warm-white border border-gray-200 p-5 flex-1 hover:border-primary-gold transition-colors">
                  <h3 className="font-display text-lg tracking-wider uppercase text-primary-black mb-2">{step.title}</h3>
                  <p className="text-muted-gray text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programmes */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Training Programmes" theme="dark" className="mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {training.map((item, i) => (
              <motion.div key={i} className="border border-border-gray p-4 text-center hover:border-primary-gold transition-colors" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <p className="text-gray-300 text-xs leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Success Stories" label="Alumni Voices" className="mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((s, i) => (
              <motion.div key={i} className="bg-white border border-gray-200 p-6 hover:border-primary-gold transition-colors hover:shadow-gold" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <p className="text-muted-gray text-sm italic leading-relaxed">&ldquo;{s.quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
                  <Image src={s.img} alt={s.name} width={44} height={44} className="rounded-full object-cover" />
                  <div>
                    <p className="font-display text-sm tracking-wider uppercase text-primary-black">{s.name}</p>
                    <p className="font-mono text-xs text-primary-gold">{s.company} — {s.role}</p>
                    <p className="text-muted-gray text-xs">Batch {s.batch}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Recruiters */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading title="For Recruiters" label="Partner With Us" className="mb-8" />
          <p className="text-muted-gray max-w-2xl mx-auto mb-8">JIT offers a rich talent pool of disciplined, technically proficient engineers and managers ready to contribute from day one. We offer flexible campus recruitment options — online, hybrid, or on-campus drives.</p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[{ icon: Mail, label: 'Email', value: 'placements@jyothyit.ac.in' }, { icon: Phone, label: 'Phone', value: '+91-80-28437091' }, { icon: Users, label: 'Available Batches', value: '480+ graduates annually' }].map((c, i) => (
              <div key={i} className="border border-gray-200 p-5 flex items-center gap-3">
                <c.icon className="text-primary-gold" size={20} />
                <div className="text-left">
                  <p className="font-mono text-xs text-muted-gray">{c.label}</p>
                  <p className="text-primary-black text-sm font-semibold">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/contact">
            <motion.span className="inline-flex items-center gap-2 bg-primary-gold px-10 py-4 font-display text-sm tracking-widest uppercase hover:bg-accent-gold transition-colors cursor-none" whileHover={{ scale: 1.02 }}>
              Contact Placement Cell <ChevronRight size={16} />
            </motion.span>
          </Link>
        </div>
      </section>
    </div>
  );
}
