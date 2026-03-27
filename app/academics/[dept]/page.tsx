'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Users, BookOpen, Trophy, Calendar, FlaskConical, Briefcase, ArrowLeft } from 'lucide-react';
import { getDepartmentBySlug } from '@/lib/departments-data';
import SectionHeading from '@/components/ui/SectionHeading';

export default function DepartmentPage() {
  const params = useParams();
  const dept = getDepartmentBySlug(params.dept as string);

  if (!dept) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="font-display text-4xl text-primary-black uppercase tracking-widest mb-4">Department Not Found</h1>
        <Link href="/academics" className="text-primary-gold font-mono text-sm tracking-widest uppercase hover:underline">
          ← Back to Academics
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16 px-6 pt-20">
        <Image src={dept.img} alt={dept.name} fill className="object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-t ${dept.color} via-primary-black/70 to-primary-black/40`} />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            <Link href="/academics" className="hover:text-white transition-colors">Academics</Link>
            <ChevronRight className="inline" size={12} />
            {dept.shortName}
          </p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-mono text-xs tracking-widest text-primary-gold uppercase">{dept.shortName}</span>
            <h1 className="font-display text-4xl md:text-6xl tracking-widest uppercase text-white mt-1">{dept.name}</h1>
            <p className="text-gray-300 mt-2 font-body italic">{dept.tagline}</p>
            <div className="flex flex-wrap gap-4 mt-4">
              <span className="bg-primary-gold/20 border border-primary-gold px-4 py-1 font-mono text-xs text-primary-gold uppercase tracking-widest">Est. {dept.established}</span>
              <span className="bg-primary-gold/20 border border-primary-gold px-4 py-1 font-mono text-xs text-primary-gold uppercase tracking-widest">{dept.intake}</span>
              <span className="bg-primary-gold/20 border border-primary-gold px-4 py-1 font-mono text-xs text-primary-gold uppercase tracking-widest">{dept.accreditation}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
          <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="font-mono text-xs tracking-widest text-primary-gold uppercase">— About the Department —</span>
            <h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mt-3 mb-5">
              Department Overview
            </h2>
            <p className="text-muted-gray leading-relaxed text-base">{dept.about}</p>
          </motion.div>
          <motion.div className="space-y-4" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {[
              { icon: Users, label: 'Faculty', value: `${dept.faculty.length} Core Faculty` },
              { icon: BookOpen, label: 'Intake', value: dept.intake },
              { icon: Trophy, label: 'Accreditation', value: dept.accreditation },
              { icon: FlaskConical, label: 'Labs', value: `${dept.labs.length} Specialised Labs` },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 border border-gray-200 p-4 hover:border-primary-gold transition-colors">
                <item.icon className="text-primary-gold flex-shrink-0" size={24} />
                <div>
                  <p className="font-mono text-xs text-muted-gray uppercase tracking-widest">{item.label}</p>
                  <p className="font-display text-base tracking-wider uppercase text-primary-black">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Faculty" label="Department Team" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dept.faculty.map((person, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-200 p-6 text-center hover:border-primary-gold transition-colors group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary-gold/20 group-hover:border-primary-gold transition-colors">
                  <Image src={person.img} alt={person.name} fill className="object-cover" />
                </div>
                <h3 className="font-display text-base tracking-wider uppercase text-primary-black">{person.name}</h3>
                <p className="text-primary-gold font-mono text-xs tracking-widest uppercase mt-1">{person.designation}</p>
                <p className="text-muted-gray text-xs mt-1">{person.qualification}</p>
                <p className="text-muted-gray text-xs mt-2 leading-relaxed italic">{person.specialization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Student Achievements" label="Pride of the Department" theme="dark" className="mb-12" />
          <div className="grid md:grid-cols-2 gap-6">
            {dept.achievements.map((item, i) => (
              <motion.div
                key={i}
                className="border border-border-gray p-6 hover:border-primary-gold transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-3xl text-primary-gold flex-shrink-0">{item.year}</span>
                  <div>
                    <h3 className="font-display text-lg tracking-wider uppercase text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Labs & Facilities" label="Infrastructure" className="mb-12" />
          <div className="grid md:grid-cols-2 gap-6">
            {dept.labs.map((lab, i) => (
              <motion.div
                key={i}
                className="border border-gray-200 p-6 hover:border-primary-gold transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <FlaskConical className="text-primary-gold mb-3 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="font-display text-lg tracking-wider uppercase text-primary-black mb-2">{lab.name}</h3>
                <p className="text-muted-gray text-sm leading-relaxed">{lab.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Upcoming Events" label="Department Calendar" className="mb-12" />
          <div className="space-y-4">
            {dept.events.map((event, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-200 hover:border-primary-gold transition-colors p-6 flex items-start gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex-shrink-0 text-center bg-primary-black px-4 py-3 min-w-[80px]">
                  <Calendar className="text-primary-gold mx-auto mb-1" size={18} />
                  <p className="font-mono text-xs text-primary-gold">{event.date}</p>
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-wider uppercase text-primary-black">{event.title}</h3>
                  <p className="text-muted-gray text-sm mt-1 leading-relaxed">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Career Opportunities" label="Where Our Graduates Go" theme="dark" className="mb-12" />
          <div className="flex flex-wrap gap-3 justify-center">
            {dept.careers.map((career, i) => (
              <motion.span
                key={i}
                className="border border-border-gray text-gray-300 font-mono text-xs tracking-widest uppercase px-5 py-3 hover:border-primary-gold hover:text-primary-gold transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Briefcase className="inline mr-2 text-primary-gold" size={12} />
                {career}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-10 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/academics" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-muted-gray hover:text-primary-gold transition-colors">
            <ArrowLeft size={14} /> Back to All Departments
          </Link>
          <Link href="/admissions" className="bg-primary-black text-white font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-primary-gold transition-colors">
            Apply Now →
          </Link>
        </div>
      </section>
    </div>
  );
}
