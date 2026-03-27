'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Phone, Mail, Clock, Car, Train, Bus, ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const contactSchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone required'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message too short'),
  privacy: z.boolean().refine(v => v === true, 'You must agree to the privacy policy'),
});
type ContactForm = z.infer<typeof contactSchema>;

const deptContacts = [
  { dept: 'Principal\'s Office', name: 'Dr. H.N. Suresh', email: 'principal@jyothyit.ac.in', phone: '+91-80-28437091 Ext. 101' },
  { dept: 'Admissions Office', name: 'Admissions Team', email: 'admissions@jyothyit.ac.in', phone: '+91-80-28437092' },
  { dept: 'Training & Placements', name: 'Mrs. Lakshmi Sharma', email: 'placements@jyothyit.ac.in', phone: '+91-80-28437091 Ext. 201' },
  { dept: 'Computer Science & Engineering', name: 'Dr. Suresh Kumar, HOD', email: 'cse@jyothyit.ac.in', phone: 'Ext. 301' },
  { dept: 'Electronics & Communication', name: 'Dr. Priya Nair, HOD', email: 'ece@jyothyit.ac.in', phone: 'Ext. 302' },
  { dept: 'Mechanical Engineering', name: 'Dr. Anil Verma, HOD', email: 'me@jyothyit.ac.in', phone: 'Ext. 303' },
  { dept: 'Civil Engineering', name: 'Dr. Meera Krishnan, HOD', email: 'civil@jyothyit.ac.in', phone: 'Ext. 304' },
  { dept: 'MBA Department', name: 'Dr. Kavitha Sharma, HOD', email: 'mba@jyothyit.ac.in', phone: 'Ext. 305' },
  { dept: 'Examination Cell', name: 'Exam Controller', email: 'exam@jyothyit.ac.in', phone: 'Ext. 401' },
  { dept: 'Hostel Office', name: 'Hostel Warden', email: 'hostel@jyothyit.ac.in', phone: 'Ext. 501' },
];

const directions = [
  { icon: Car, from: 'From Kempegowda International Airport', distance: '55 km', time: '~90 minutes', route: 'NH-44 → Outer Ring Road → Kanakapura Road → Tataguni. Cab/taxi recommended.' },
  { icon: Train, from: 'From Bengaluru City Railway Station', distance: '22 km', time: '~45 minutes', route: 'Take Kanakapura Road (SH-17) straight. JIT is before Tataguni on the left side.' },
  { icon: Bus, from: 'From Majestic Bus Stand', distance: '20 km', time: '~40 minutes', route: 'BMTC buses on Kanakapura Road route. Alight at Tataguni bus stop.' },
  { icon: Train, from: 'Nearest Metro Station', distance: '15 km', time: '~35 minutes', route: 'Silk Institute Metro (Green Line, Phase 2). Auto/cab from metro to JIT campus.' },
];

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { privacy: false }
  });

  const onSubmit = async (data: ContactForm) => {
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Your message has been sent! We will get back to you within 2 business days.');
    reset();
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end pb-16 px-6 pt-20">
        <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1400&h=600&fit=crop" alt="Contact JIT" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-2">
            <Link href="/" className="hover:text-white">Home</Link> <ChevronRight className="inline" size={12} /> Contact
          </p>
          <motion.h1 className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Get in Touch
          </motion.h1>
          <p className="text-gray-300 mt-2">We&apos;re here to help — reach out to us anytime</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, title: 'Visit Us', lines: ['Jyothy Institute of Technology', 'Tataguni, Off Kanakapura Road', 'Bengaluru - 560082, Karnataka, India'], action: { label: 'Get Directions →', href: 'https://maps.google.com/?q=Jyothy+Institute+of+Technology+Bengaluru' } },
            { icon: Phone, title: 'Call Us', lines: ['+91-80-28437091', '+91-80-28437092', 'Mon–Fri: 9AM – 5PM'], action: { label: 'Call Now', href: 'tel:+918028437091' } },
            { icon: Mail, title: 'Email Us', lines: ['principal@jyothyit.ac.in', 'admissions@jyothyit.ac.in', 'placements@jyothyit.ac.in'], action: { label: 'Send Email', href: 'mailto:principal@jyothyit.ac.in' } },
          ].map((card, i) => (
            <motion.div key={card.title} className="border border-gray-200 p-8 hover:border-primary-gold hover:shadow-gold transition-all" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="w-12 h-12 bg-primary-gold flex items-center justify-center mb-4">
                <card.icon size={20} className="text-primary-black" />
              </div>
              <h3 className="font-display text-xl tracking-wider uppercase text-primary-black mb-3">{card.title}</h3>
              {card.lines.map((line, j) => <p key={j} className="text-muted-gray text-sm">{line}</p>)}
              <a href={card.action.href} target="_blank" rel="noreferrer" className="inline-block mt-4 font-display text-xs tracking-widest text-primary-gold uppercase hover:text-primary-black transition-colors cursor-none">
                {card.action.label}
              </a>
            </motion.div>
          ))}
        </div>
        {/* Office Hours */}
        <div className="max-w-7xl mx-auto mt-6 bg-primary-black p-6 flex items-center gap-4">
          <Clock className="text-primary-gold flex-shrink-0" size={22} />
          <p className="text-gray-300 text-sm"><strong className="text-white">Office Hours:</strong> Monday to Friday — 9:00 AM to 5:00 PM &nbsp;|&nbsp; Saturday — 9:00 AM to 1:00 PM &nbsp;|&nbsp; Sunday — Closed</p>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 bg-gray-100 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.789!2d77.5225!3d12.8411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b0f0f0f0f0f%3A0x0!2sJyothy%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(40%)' }}
          allowFullScreen
          loading="lazy"
          title="JIT Location Map"
        />
        <div className="absolute top-4 left-4 bg-primary-black px-4 py-2">
          <p className="font-display text-xs tracking-widest text-primary-gold uppercase">Tataguni, Kanakapura Road, Bengaluru</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeading title="Send Us a Message" align="left" className="mb-8" />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input {...register('name')} placeholder="Full Name *" className="w-full border border-gray-200 px-4 py-3 text-sm bg-white focus:border-primary-gold focus:outline-none" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <input {...register('email')} placeholder="Email Address *" className="w-full border border-gray-200 px-4 py-3 text-sm bg-white focus:border-primary-gold focus:outline-none" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input {...register('phone')} placeholder="Phone Number *" className="w-full border border-gray-200 px-4 py-3 text-sm bg-white focus:border-primary-gold focus:outline-none" />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <select {...register('subject')} className="w-full border border-gray-200 px-4 py-3 text-sm bg-white focus:border-primary-gold focus:outline-none">
                    <option value="">Select Subject *</option>
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Placements</option>
                    <option>Academics</option>
                    <option>Hostel</option>
                    <option>Complaint</option>
                    <option>Other</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>
              </div>
              <div>
                <textarea {...register('message')} placeholder="Your Message *" rows={5} className="w-full border border-gray-200 px-4 py-3 text-sm bg-white focus:border-primary-gold focus:outline-none resize-none" />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" {...register('privacy')} className="mt-1 accent-primary-gold" />
                <label className="text-muted-gray text-sm">I agree to the <Link href="#" className="text-primary-gold hover:underline">Privacy Policy</Link> and consent to my data being used to respond to my inquiry.</label>
              </div>
              {errors.privacy && <p className="text-red-500 text-xs">{errors.privacy.message}</p>}
              <button type="submit" disabled={isSubmitting} className="w-full bg-primary-gold text-primary-black font-display tracking-widest uppercase py-4 text-sm hover:bg-accent-gold transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                {isSubmitting ? <span className="spinner" /> : 'Send Message'}
              </button>
            </form>
          </motion.div>
          {/* Department Contacts */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeading title="Department Contacts" align="left" className="mb-8" />
            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
              {deptContacts.map((dc, i) => (
                <div key={i} className="bg-white border border-gray-200 px-4 py-3 hover:border-primary-gold transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-display text-sm tracking-wider uppercase text-primary-black">{dc.dept}</p>
                      <p className="text-muted-gray text-xs mt-0.5">{dc.name}</p>
                    </div>
                    <div className="text-right">
                      <a href={`mailto:${dc.email}`} className="text-primary-gold text-xs font-mono hover:underline block">{dc.email}</a>
                      <p className="text-muted-gray text-xs mt-0.5">{dc.phone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Reach */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="How to Reach JIT" theme="dark" label="Directions" className="mb-12" />
          <div className="grid md:grid-cols-2 gap-5">
            {directions.map((dir, i) => (
              <motion.div key={i} className="flex gap-5 border border-border-gray p-6 hover:border-primary-gold transition-colors" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="w-12 h-12 bg-primary-gold flex items-center justify-center flex-shrink-0">
                  <dir.icon size={20} className="text-primary-black" />
                </div>
                <div>
                  <h3 className="font-display text-sm tracking-wider uppercase text-white">{dir.from}</h3>
                  <div className="flex gap-4 mt-1 mb-2">
                    <span className="text-primary-gold font-mono text-xs">{dir.distance}</span>
                    <span className="text-gray-500 font-mono text-xs">{dir.time}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{dir.route}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
