'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Cpu, Zap, Leaf, CircuitBoard, Building, Globe, FileText, Calendar } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const researchCentres = [
  { icon: Cpu, name: 'AI & Machine Learning Research Centre', dept: 'CSE / ISE', lead: 'Dr. Suresh Kumar', projects: ['Federated Learning for IoT Security', 'NLP-Based Regional Language Processing', 'Predictive Analytics for Smart Cities'], desc: 'Cutting-edge research in artificial intelligence, deep learning, computer vision, and natural language processing with applications in healthcare, agriculture, and smart systems.', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&h=300&fit=crop' },
  { icon: CircuitBoard, name: 'IoT & Embedded Systems Lab', dept: 'ECE', lead: 'Dr. Priya Nair', projects: ['Smart Agriculture Monitoring System', 'Industrial IoT for Predictive Maintenance', 'Wearable Health Monitoring Devices'], desc: 'Research on internet of things, embedded controllers, edge computing, and smart sensor networks for industrial and consumer applications.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop' },
  { icon: Zap, name: 'Renewable Energy Research Centre', dept: 'EEE', lead: 'Prof. Rajesh Menon', projects: ['Solar-Wind Hybrid Microgrid', 'EV Battery Management Systems', 'Smart Grid Energy Optimisation'], desc: 'Focus on sustainable energy generation, smart grid integration, electric vehicle technologies, and power quality improvement for a greener future.', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop' },
  { icon: Globe, name: 'VLSI Design Centre', dept: 'ECE', lead: 'Dr. Anand Kumar', projects: ['Low-Power CMOS Circuit Design', 'FPGA Implementation of DSP Algorithms', 'Neuromorphic Computing Chips'], desc: 'Specialised research in VLSI physical design, semiconductor device modelling, high-speed circuit design, and chip-level verification.', img: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=500&h=300&fit=crop' },
  { icon: Building, name: 'Structural Engineering & Materials Lab', dept: 'Civil', lead: 'Dr. Meera Krishnan', projects: ['Earthquake-Resistant Building Design', 'Self-Compacting Concrete Research', 'Sustainable Construction with Fly Ash'], desc: 'Advanced research on structural behaviour, green building materials, seismic analysis, and sustainable construction practices.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop' },
  { icon: Leaf, name: 'Environmental & Thermal Engineering Lab', dept: 'ME', lead: 'Dr. Anil Verma', projects: ['Biodiesel Combustion Optimisation', 'Air Quality Monitoring in Urban Areas', 'Waste Heat Recovery Systems'], desc: 'Research on thermal systems, alternate fuels, air quality, waste heat recovery, and environmental impact assessment of engineering processes.', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop' },
];

const faculty = [
  { name: 'Dr. H.N. Suresh', dept: 'Principal / CSE', specialisation: 'Distributed Systems, Cloud Computing', publications: 42, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  { name: 'Dr. Suresh Kumar', dept: 'CSE', specialisation: 'Artificial Intelligence, Machine Learning', publications: 35, img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face' },
  { name: 'Dr. Priya Nair', dept: 'ECE', specialisation: 'VLSI, Signal Processing', publications: 28, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
  { name: 'Dr. Meera Krishnan', dept: 'Civil', specialisation: 'Structural Engineering, Green Materials', publications: 22, img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face' },
  { name: 'Dr. Anil Verma', dept: 'ME', specialisation: 'Thermal Engineering, Renewable Energy', publications: 30, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  { name: 'Dr. Kavitha Sharma', dept: 'MBA', specialisation: 'Supply Chain, Digital Marketing', publications: 18, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
];

const collaborations = [
  { org: 'Infosys', type: 'Industry MoU', desc: 'Curriculum alignment, industry projects, and campus recruitment for CSE/ISE students.' },
  { org: 'Texas Instruments', type: 'Technology Partner', desc: 'Access to TI microcontrollers, development kits, and design tools for ECE research.' },
  { org: 'Karnataka State Council for Science & Technology (KSCST)', type: 'Research Funding', desc: 'Sponsored student project grants and research seed funding for undergraduate projects.' },
  { org: 'IISc Bengaluru', type: 'Academic Collaboration', desc: 'Joint workshops, shared faculty expertise, and collaborative research in nanotechnology.' },
  { org: 'ISRO (URSC)', type: 'Research Partnership', desc: 'Student internship opportunities and collaborative research in space systems and remote sensing.' },
  { org: 'National Instruments (NI)', type: 'Lab Setup', desc: 'LabVIEW and NI hardware for signal processing, instrumentation, and measurement labs.' },
];

const conferences = [
  { name: 'International Conference on Emerging Technologies (ICET 2025)', date: 'November 2025', type: 'Hosted', papers: 120 },
  { name: 'Smart India Hackathon 2025', date: 'December 2025', type: 'Participated', papers: 0 },
  { name: 'IEEE International Conference on Electrical Systems', date: 'October 2025', type: 'Participated', papers: 8 },
  { name: 'National Conference on Advanced Computing (NCAC)', date: 'February 2026', type: 'Hosted', papers: 85 },
];

export default function ResearchPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end pb-16 px-6 pt-20">
        <Image src="https://images.unsplash.com/photo-1532094349884-543559b11b4b?w=1400&h=700&fit=crop" alt="Research" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-2">
            <Link href="/" className="hover:text-white">Home</Link> <ChevronRight className="inline" size={12} /> Research
          </p>
          <motion.h1 className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Research & Innovation
          </motion.h1>
          <p className="text-gray-300 mt-2 max-w-2xl">Pushing the boundaries of knowledge — one breakthrough at a time</p>
        </div>
      </section>

      {/* Research Centres */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Research Centres" label="Our Facilities" className="mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchCentres.map((centre, i) => (
              <motion.div key={centre.name} className="border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="relative h-44">
                  <Image src={centre.img} alt={centre.name} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-primary-black px-3 py-1">
                    <span className="font-mono text-xs text-primary-gold tracking-widest">{centre.dept}</span>
                  </div>
                </div>
                <div className="p-5">
                  <centre.icon className="text-primary-gold mb-2" size={22} />
                  <h3 className="font-display text-base tracking-wider uppercase text-primary-black mb-1">{centre.name}</h3>
                  <p className="text-muted-gray text-xs mb-3">Lead: {centre.lead}</p>
                  <p className="text-muted-gray text-sm leading-relaxed mb-3">{centre.desc}</p>
                  <div>
                    <p className="font-display text-xs tracking-widest uppercase text-primary-black mb-1">Ongoing Projects:</p>
                    <ul className="space-y-1">{centre.projects.map((p, j) => <li key={j} className="text-xs text-muted-gray flex items-center gap-1"><span className="w-1 h-1 bg-primary-gold rounded-full flex-shrink-0" />{p}</li>)}</ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Research */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Faculty Research Profiles" label="Our Researchers" className="mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {faculty.map((f, i) => (
              <motion.div key={f.name} className="bg-white border border-gray-200 p-5 flex gap-4 hover:border-primary-gold transition-colors" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Image src={f.img} alt={f.name} width={56} height={56} className="rounded-full object-cover flex-shrink-0" />
                <div>
                  <h3 className="font-display text-sm tracking-wider uppercase text-primary-black">{f.name}</h3>
                  <p className="font-mono text-xs text-primary-gold mt-0.5">{f.dept}</p>
                  <p className="text-muted-gray text-xs mt-1">{f.specialisation}</p>
                  <p className="flex items-center gap-1 mt-2 text-xs text-muted-gray"><FileText size={11} className="text-primary-gold" /> {f.publications} publications</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Research */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Student Research & Innovation" theme="dark" className="mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Final Year Projects', desc: 'Every B.E. student undertakes an industry-relevant final year project in collaboration with a company or research centre. Projects are evaluated by a panel of industry experts.' },
              { title: 'Paper Presentations', desc: 'JIT students regularly present papers at national and international conferences. Students receive financial support for registration and travel to conferences.' },
              { title: 'Innovation Contests', desc: 'Annual participation in Smart India Hackathon, KSCST project grants, and internal innovation competitions with prizes and patent filing support.' },
            ].map((item, i) => (
              <motion.div key={i} className="border border-border-gray p-6 hover:border-primary-gold transition-colors" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <h3 className="font-display text-xl tracking-wider uppercase text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Industry & Academic Collaborations" label="MoUs & Partnerships" className="mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {collaborations.map((c, i) => (
              <motion.div key={c.org} className="border-l-4 border-primary-gold bg-warm-white pl-5 pr-5 py-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <h3 className="font-display text-lg tracking-wider uppercase text-primary-black">{c.org}</h3>
                <p className="font-mono text-xs text-primary-gold mt-0.5">{c.type}</p>
                <p className="text-muted-gray text-sm mt-2">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conferences */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Conferences & Seminars" label="Academic Events" className="mb-10" />
          <div className="space-y-4">
            {conferences.map((conf, i) => (
              <motion.div key={conf.name} className="flex items-center justify-between bg-white border border-gray-200 px-6 py-4 hover:border-primary-gold transition-colors" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="flex items-start gap-3">
                  <Calendar className="text-primary-gold mt-0.5 flex-shrink-0" size={16} />
                  <div>
                    <h3 className="font-display text-sm tracking-wider uppercase text-primary-black">{conf.name}</h3>
                    <p className="text-muted-gray text-xs mt-0.5">{conf.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`font-mono text-xs px-3 py-1 ${conf.type === 'Hosted' ? 'bg-primary-gold text-primary-black' : 'border border-primary-gold text-primary-gold'}`}>{conf.type}</span>
                  {conf.papers > 0 && <span className="text-muted-gray text-xs font-mono">{conf.papers} papers</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
