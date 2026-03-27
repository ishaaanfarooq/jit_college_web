'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Target, Eye, Heart, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const milestones = [
  { year: '2007', event: 'JIT Established', desc: 'Founded by Jyothy Charitable Trust under the leadership of visionary educationalists committed to technical education.' },
  { year: '2008', event: 'First Batch Enrolled', desc: 'First batch of B.E. students across CSE, ECE, ME, and Civil Engineering departments.' },
  { year: '2010', event: 'AICTE Approval Secured', desc: 'Received full approval from All India Council for Technical Education, cementing our academic credentials.' },
  { year: '2012', event: 'New Departments Added', desc: 'Information Science & Engineering and MBA program launched to meet growing industry demands.' },
  { year: '2015', event: 'First NAAC Accreditation', desc: 'Successfully accredited by NAAC, recognizing our excellence in academic quality and infrastructure.' },
  { year: '2018', event: '2000+ Alumni Milestone', desc: 'Our growing alumni network crosses 2000 professionals placed across India and globally.' },
  { year: '2020', event: 'New Labs & Research Centres', desc: 'AI/ML Research Centre, IoT Lab, and Advanced Computing Lab established with ₹5 crore investment.' },
  { year: '2023', event: 'NAAC Reaccreditation', desc: 'NAAC accreditation renewed with high grade, validating our sustained commitment to excellence.' },
  { year: '2024', event: '6000+ Alumni Network', desc: 'JIT alumni working at top companies across 30+ countries, contributing to the global tech ecosystem.' },
];

const leadership = [
  { name: 'Dr. H.N. Suresh', role: 'Principal', desc: 'Ph.D from IISc Bengaluru, 25+ years in academia and research. Passionate about student-centric education.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Prof. Kavitha Rao', role: 'Dean — Academics', desc: 'M.Tech from NITK, expert in curriculum development and quality assurance in higher education.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
  { name: 'Dr. Anand Kumar', role: 'Dean — Research & Development', desc: 'PhD in Computer Science, 40+ research publications, active collaborator with ISRO and DRDO.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face' },
  { name: 'Mrs. Lakshmi Sharma', role: 'Head — Training & Placements', desc: 'MBA from IIM Ahmedabad, 15 years industry experience at Infosys and Wipro before joining JIT.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face' },
];

const facilities = [
  { name: 'Central Library', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=250&fit=crop' },
  { name: 'Computer Labs', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop' },
  { name: 'Auditorium', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop' },
  { name: 'Sports Grounds', img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=250&fit=crop' },
  { name: 'Cafeteria', img: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=250&fit=crop' },
  { name: 'Boys Hostel', img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=250&fit=crop' },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16 px-6 pt-20">
        <Image src="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=1400&h=700&fit=crop" alt="JIT Campus" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> <ChevronRight className="inline" size={12} /> About
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          >
            About JIT
          </motion.h1>
          <p className="text-gray-300 mt-2 max-w-xl">Building excellence in engineering education since 2007</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative h-96 overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&h=500&fit=crop" alt="JIT Main Building" fill className="object-cover" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="font-mono text-xs tracking-widest text-primary-gold uppercase">— Our Story —</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-widest uppercase text-primary-black mt-3 mb-6">
              A Legacy of Excellence
            </h2>
            <div className="space-y-4 text-muted-gray leading-relaxed">
              <p>Jyothy Institute of Technology was established in 2007 by the <strong className="text-primary-black">Jyothy Charitable Trust</strong> with a singular vision — to provide world-class technical education that bridges the gap between academic learning and industry requirements.</p>
              <p>Situated in the serene surroundings of Tataguni, off Kanakapura Road in Bengaluru, our 15-acre campus offers an ideal environment for learning, research, and holistic development. Affiliated to <strong className="text-primary-black">Visvesvaraya Technological University (VTU)</strong> and approved by <strong className="text-primary-black">AICTE</strong>, JIT has consistently delivered engineers and managers who make a difference.</p>
              <p>Over the past 17 years, we have grown from a small institution to a thriving academic community with 6000+ alumni, 300+ dedicated faculty and staff, and state-of-the-art infrastructure that rivals the best engineering colleges in Karnataka.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Our Journey" label="Milestones" className="mb-16" />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-gold/30" />
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className={`relative flex ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start gap-8 mb-12`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className={`w-1/2 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <span className="font-display text-4xl text-primary-gold">{m.year}</span>
                  <h3 className="font-display text-lg tracking-wider uppercase text-primary-black mt-1">{m.event}</h3>
                  <p className="text-muted-gray text-sm mt-1">{m.desc}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-gold rounded-full border-4 border-white shadow-gold top-2" />
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Vision, Mission & Values" theme="dark" className="mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: 'Our Vision',
                content: 'To be a premier institution of technical excellence, nurturing innovative thinkers, ethical professionals, and responsible citizens who contribute meaningfully to society and drive technological advancement.'
              },
              {
                icon: Target,
                title: 'Our Mission',
                content: 'To deliver quality technical education through experienced faculty, modern infrastructure, and industry-aligned curriculum. To foster research, innovation, and entrepreneurship while developing well-rounded graduates ready for global challenges.'
              },
              {
                icon: Heart,
                title: 'Our Values',
                content: 'Integrity in all academic and administrative activities. Excellence as the standard for every endeavour. Inclusivity ensuring equal opportunity for all. Innovation and continuous improvement. Service to community and nation.'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="border border-border-gray p-8 hover:border-primary-gold transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <item.icon className="text-primary-gold mb-4" size={36} />
                <h3 className="font-display text-2xl tracking-wider uppercase text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Leadership" label="Management" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <motion.div
                key={i}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary-gold/20 group-hover:border-primary-gold transition-colors duration-300">
                  <Image src={person.img} alt={person.name} fill className="object-cover" />
                </div>
                <h3 className="font-display text-lg tracking-wider uppercase text-primary-black">{person.name}</h3>
                <p className="text-primary-gold font-mono text-xs tracking-widest uppercase mt-1">{person.role}</p>
                <p className="text-muted-gray text-xs mt-2 leading-relaxed">{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Affiliations & Accreditations" className="mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'VTU', desc: 'Visvesvaraya Technological University — Affiliated university for all B.E. and M.Tech programmes', icon: BookOpen },
              { name: 'AICTE', desc: 'All India Council for Technical Education — Statutory regulatory body approval', icon: Award },
              { name: 'NAAC', desc: 'National Assessment and Accreditation Council — Quality accreditation body', icon: Award },
              { name: 'UGC', desc: 'University Grants Commission — Recognised under UGC Act for MBA programme', icon: Users },
            ].map((aff, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-200 p-6 text-center hover:border-primary-gold transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <aff.icon className="text-primary-gold mx-auto mb-3" size={32} />
                <h3 className="font-display text-2xl tracking-widest text-primary-black uppercase">{aff.name}</h3>
                <p className="text-muted-gray text-xs mt-2 leading-relaxed">{aff.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Campus Infrastructure" className="mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {facilities.map((f, i) => (
              <motion.div
                key={i}
                className="relative h-48 overflow-hidden group cursor-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Image src={f.img} alt={f.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary-black/0 group-hover:bg-primary-black/50 transition-all duration-300 flex items-center justify-center">
                  <p className="font-display text-white text-lg tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">{f.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
