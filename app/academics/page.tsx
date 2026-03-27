'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, BookOpen, Users, FlaskConical, Award, Beaker, Code } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const departments = [
  {
    name: 'Computer Science & Engineering',
    short: 'CSE',
    hod: 'Dr. Suresh Kumar',
    intake: 240,
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=350&fit=crop',
    description: 'The Department of CSE is the largest department at JIT, offering specialisations in AI/ML, Data Science, and core software engineering. Industry-aligned curriculum with active placements in top tech companies.',
    highlights: ['NVIDIA DLI Partner Institution', 'AWS Academy Cloud Practitioner Training', 'Active IEEE Student Chapter', '90%+ placement rate'],
    labs: ['Advanced Computing Lab (50 systems)', 'AI & Machine Learning Lab', 'Networking & Cyber Security Lab', 'Software Testing Lab'],
    research: ['Natural Language Processing', 'Computer Vision', 'Cloud Computing', 'Blockchain Applications'],
    faculty: 28,
    phds: 8,
  },
  {
    name: 'Electronics & Communication Engineering',
    short: 'ECE',
    hod: 'Dr. Priya Nair',
    intake: 60,
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=350&fit=crop',
    description: 'ECE department focuses on VLSI design, embedded systems, signal processing and IoT. Our students work on cutting-edge projects in communication and semiconductor technology.',
    highlights: ['VLSI Design Centre with industry-grade tools', 'Collaboration with Qualcomm & Texas Instruments', 'Embedded Systems Certification Programme', 'IEEE Member Chapter'],
    labs: ['VLSI & Embedded Systems Lab', 'Microprocessors & Microcontrollers Lab', 'Signal Processing Lab', 'Communication Engineering Lab'],
    research: ['5G Communication Systems', 'IoT & Smart Devices', 'VLSI Physical Design', 'Image Processing'],
    faculty: 14,
    phds: 5,
  },
  {
    name: 'Electrical & Electronics Engineering',
    short: 'EEE',
    hod: 'Prof. Rajesh Menon',
    intake: 60,
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=350&fit=crop',
    description: 'EEE covers power systems, control systems, renewable energy, and smart grid technologies. Our graduates work in power utilities, manufacturing, and energy sectors.',
    highlights: ['Smart Grid Research Laboratory', 'Solar Power Plant on campus (10kW)', 'KPTCL & BESCOM Industry Links', 'GATE coaching facility'],
    labs: ['Electrical Machines Lab', 'Power Electronics Lab', 'Control Systems Lab', 'Renewable Energy Lab'],
    research: ['Renewable Energy Integration', 'Smart Grid Technologies', 'Electric Vehicle Charging', 'Power Quality'],
    faculty: 12,
    phds: 4,
  },
  {
    name: 'Mechanical Engineering',
    short: 'ME',
    hod: 'Dr. Anil Verma',
    intake: 60,
    img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&h=350&fit=crop',
    description: 'Mechanical Engineering at JIT encompasses design, manufacturing, thermal engineering, and robotics. With state-of-the-art workshops and CAD facilities, we produce industry-ready engineers.',
    highlights: ['CNC Workshop with latest machines', 'CATIA & ANSYS licensed software', 'Robotics & Automation Lab', 'SAE Collegiate participation'],
    labs: ['CNC Manufacturing Lab', 'Fluid Mechanics & Hydraulics Lab', 'Heat Transfer & Thermodynamics Lab', 'CAD/CAM Centre'],
    research: ['Additive Manufacturing', 'Composite Materials', 'CFD Analysis', 'Robotics & Automation'],
    faculty: 15,
    phds: 4,
  },
  {
    name: 'Civil Engineering',
    short: 'CE',
    hod: 'Dr. Meera Krishnan',
    intake: 60,
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=350&fit=crop',
    description: 'Civil Engineering department trains students in structural design, construction technology, environmental engineering, and geotechnical engineering with a focus on sustainable infrastructure.',
    highlights: ['AutoCAD & STAAD.Pro training', 'L&T Construction industry tie-up', 'Environmental Monitoring Cell', 'Structural Testing Lab'],
    labs: ['Structural Engineering Lab', 'Soil Mechanics & Foundation Lab', 'Survey & GIS Lab', 'Environmental Engineering Lab'],
    research: ['Sustainable Construction Materials', 'Green Building Technology', 'Earthquake Resistant Structures', 'Water Resource Management'],
    faculty: 12,
    phds: 3,
  },
  {
    name: 'Information Science & Engineering',
    short: 'ISE',
    hod: 'Prof. Deepa Srinivasan',
    intake: 60,
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=350&fit=crop',
    description: 'ISE focuses on information systems, database management, networking, and cloud technologies. Students graduate with strong skills in full-stack development, cloud, and enterprise IT.',
    highlights: ['Microsoft Azure Lab Infrastructure', 'Oracle Academy Member Institution', 'Google Developer Student Club', 'Industry Hackathons & Projects'],
    labs: ['Database Management Lab', 'Operating Systems Lab', 'Cloud Computing Lab', 'Web Technologies Lab'],
    research: ['Big Data Analytics', 'Cybersecurity', 'DevOps & Cloud', 'Database Optimisation'],
    faculty: 12,
    phds: 3,
  },
  {
    name: 'Master of Business Administration',
    short: 'MBA',
    hod: 'Dr. Kavitha Sharma',
    intake: 60,
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=350&fit=crop',
    description: 'JIT\'s MBA programme is designed for future business leaders. With a focus on real-world case studies, industry immersion, and leadership development, we prepare students for dynamic business environments.',
    highlights: ['Industry Mentorship Programme', 'Bloomberg Terminal Access', 'Annual B-School Competitions', 'Internship with Top FMCG & IT Companies'],
    labs: ['Case Study Room', 'Bloomberg Finance Lab', 'Business Analytics Lab', 'Simulation & ERP Lab'],
    research: ['Digital Marketing Analytics', 'Supply Chain Optimisation', 'ESG & Sustainability', 'FinTech & Digital Banking'],
    faculty: 14,
    phds: 7,
  },
];

export default function AcademicsPage() {
  const [selected, setSelected] = useState<typeof departments[0] | null>(null);

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end pb-16 px-6 pt-20">
        <Image src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1400&h=700&fit=crop" alt="Academics" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-2">
            <Link href="/" className="hover:text-white">Home</Link> <ChevronRight className="inline" size={12} /> Academics
          </p>
          <motion.h1 className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Academics & Departments
          </motion.h1>
          <p className="text-gray-300 mt-2 max-w-2xl">VTU Affiliated | AICTE Approved | 7 Departments | 480+ Faculty & Staff</p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Departments" label="Academic Programmes" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.short}
                className="border border-gray-100 overflow-hidden cursor-none group hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setSelected(dept)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={dept.img} alt={dept.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 bg-primary-gold px-3 py-1">
                    <span className="font-display text-xs tracking-widest text-primary-black uppercase">{dept.short}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg tracking-wider uppercase text-primary-black">{dept.name}</h3>
                  <p className="text-muted-gray text-xs mt-1">HOD: {dept.hod} &nbsp;|&nbsp; Intake: {dept.intake}</p>
                  <p className="text-muted-gray text-sm mt-2 line-clamp-2">{dept.description}</p>
                  <button className="mt-3 inline-flex items-center gap-1 text-primary-gold font-display text-xs tracking-widest uppercase hover:gap-2 transition-all">
                    View Details <ChevronRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-black/80"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-56">
                <Image src={selected.img} alt={selected.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-primary-black/60" />
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center justify-center hover:bg-primary-gold transition-colors cursor-none">
                  <X size={16} />
                </button>
                <div className="absolute bottom-4 left-6">
                  <h2 className="font-display text-3xl tracking-widest uppercase text-white">{selected.name}</h2>
                  <p className="text-primary-gold font-mono text-xs tracking-widest mt-1">HOD: {selected.hod} | {selected.faculty} Faculty | {selected.phds} PhDs | Intake: {selected.intake}</p>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-muted-gray leading-relaxed">{selected.description}</p>
                <div>
                  <h4 className="font-display text-sm tracking-widest uppercase text-primary-black mb-2 flex items-center gap-2"><Award size={14} className="text-primary-gold" /> Key Highlights</h4>
                  <ul className="space-y-1">{selected.highlights.map((h, i) => <li key={i} className="text-sm text-muted-gray flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-gold rounded-full flex-shrink-0" />{h}</li>)}</ul>
                </div>
                <div>
                  <h4 className="font-display text-sm tracking-widest uppercase text-primary-black mb-2 flex items-center gap-2"><Code size={14} className="text-primary-gold" /> Laboratories</h4>
                  <div className="grid grid-cols-2 gap-2">{selected.labs.map((l, i) => <div key={i} className="text-xs text-muted-gray bg-warm-white px-3 py-2">{l}</div>)}</div>
                </div>
                <div>
                  <h4 className="font-display text-sm tracking-widest uppercase text-primary-black mb-2 flex items-center gap-2"><Beaker size={14} className="text-primary-gold" /> Research Areas</h4>
                  <div className="flex flex-wrap gap-2">{selected.research.map((r, i) => <span key={i} className="text-xs border border-primary-gold text-primary-gold px-3 py-1 font-mono">{r}</span>)}</div>
                </div>
                <div className="flex gap-3">
                  <Link href="/admissions" className="flex-1 bg-primary-gold text-primary-black font-display tracking-widest uppercase text-xs py-3 text-center hover:bg-accent-gold transition-colors">Apply Now</Link>
                  <button onClick={() => setSelected(null)} className="flex-1 border border-primary-black text-primary-black font-display tracking-widest uppercase text-xs py-3 hover:bg-primary-black hover:text-white transition-colors cursor-none">Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Academic Calendar */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Academic Calendar 2025–26" className="mb-10" />
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { period: 'Odd Semester', dates: 'August 2025 – January 2026', exams: 'December 2025 – January 2026' },
              { period: 'Even Semester', dates: 'February 2026 – July 2026', exams: 'May 2026 – June 2026' },
            ].map((sem, i) => (
              <motion.div key={i} className="bg-white border border-gray-200 p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <h3 className="font-display text-xl tracking-wider uppercase text-primary-black mb-3">{sem.period}</h3>
                <p className="text-sm text-muted-gray"><span className="font-semibold text-primary-black">Classes:</span> {sem.dates}</p>
                <p className="text-sm text-muted-gray mt-1"><span className="font-semibold text-primary-black">Examinations:</span> {sem.exams}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Library */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="font-mono text-xs tracking-widest text-primary-gold uppercase">— Learning Resources —</span>
            <h2 className="font-display text-4xl tracking-widest uppercase text-white mt-2 mb-6">Central Library</h2>
            <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
              <p>Our central library is a hub of knowledge with over <strong className="text-white">40,000+ volumes</strong> of books, journals, and reference materials covering all engineering disciplines and management.</p>
              <p>Students have access to <strong className="text-white">NPTEL & N-List digital resources</strong>, over 100 national and international journals, IEEE Xplore, DELNET consortium, and Elsevier ScienceDirect.</p>
              <p>The library is equipped with a digital reading zone, group study rooms, silent reading halls, and a 24/7 e-library access portal for remote access to resources.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[{ val: '40,000+', label: 'Books' }, { val: '100+', label: 'Journals' }, { val: '24/7', label: 'E-Access' }].map(s => (
                <div key={s.label} className="text-center border border-border-gray p-4">
                  <p className="font-display text-3xl text-primary-gold">{s.val}</p>
                  <p className="text-gray-400 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative h-80">
              <Image src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=700&h=400&fit=crop" alt="JIT Library" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
