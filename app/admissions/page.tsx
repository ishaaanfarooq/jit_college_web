'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { ChevronRight, CheckCircle, FileText, Users, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';

const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(10, 'Enter a valid phone number').max(15),
  program: z.string().min(1, 'Please select a program'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
type InquiryForm = z.infer<typeof inquirySchema>;

const programs = [
  { name: 'B.E. Computer Science & Engineering', duration: '4 years', intake: 120, fee: '₹70,000 – ₹2,00,000 / year' },
  { name: 'B.E. Electronics & Communication Engineering', duration: '4 years', intake: 60, fee: '₹70,000 – ₹1,80,000 / year' },
  { name: 'B.E. Electrical & Electronics Engineering', duration: '4 years', intake: 60, fee: '₹70,000 – ₹1,80,000 / year' },
  { name: 'B.E. Mechanical Engineering', duration: '4 years', intake: 60, fee: '₹70,000 – ₹1,80,000 / year' },
  { name: 'B.E. Civil Engineering', duration: '4 years', intake: 60, fee: '₹70,000 – ₹1,80,000 / year' },
  { name: 'B.E. Information Science & Engineering', duration: '4 years', intake: 60, fee: '₹70,000 – ₹1,80,000 / year' },
  { name: 'B.E. CSE (Data Science)', duration: '4 years', intake: 60, fee: '₹70,000 – ₹2,00,000 / year' },
  { name: 'B.E. CSE (AI & ML)', duration: '4 years', intake: 60, fee: '₹70,000 – ₹2,00,000 / year' },
  { name: 'M.Tech Computer Science & Engineering', duration: '2 years', intake: 18, fee: '₹80,000 – ₹1,20,000 / year' },
  { name: 'M.Tech Digital Electronics & Communication', duration: '2 years', intake: 18, fee: '₹80,000 – ₹1,20,000 / year' },
  { name: 'MBA (Master of Business Administration)', duration: '2 years', intake: 60, fee: '₹1,00,000 – ₹1,50,000 / year' },
];

const steps = [
  { icon: FileText, title: 'Check Eligibility', desc: 'Ensure you meet the academic eligibility criteria for your chosen programme (10+2 with PCM for B.E., relevant graduation for M.Tech/MBA).' },
  { icon: CheckCircle, title: 'Apply via KEA / COMEDK', desc: 'Register on the Karnataka Examinations Authority (KEA) portal for KCET counselling, or the COMEDK portal for COMEDK-UGET. Management quota seats available directly.' },
  { icon: FileText, title: 'Document Verification', desc: 'Submit original documents: 10th & 12th marks cards, KCET/COMEDK rank card, migration certificate, transfer certificate, category certificates if applicable.' },
  { icon: CheckCircle, title: 'Fee Payment', desc: 'Pay the first-year tuition fee and other charges as per the fee structure. Online and demand draft options available.' },
  { icon: Users, title: 'Seat Confirmation', desc: 'Receive your admission confirmation letter and report to the college on the specified date. Collect your ID card and join orientation.' },
];

const faqs = [
  { question: 'What is the eligibility for B.E. admission at JIT?', answer: 'Candidates must have passed 10+2 (PUC/HSC) with Physics, Chemistry, and Mathematics as compulsory subjects with a minimum of 45% aggregate (40% for SC/ST/OBC categories as per Karnataka Government norms). A valid KCET, COMEDK, or JEE Main score is required.' },
  { question: 'Does JIT accept KCET and COMEDK scores?', answer: 'Yes, JIT accepts both KCET (Karnataka CET administered by KEA) and COMEDK (Consortium of Medical, Engineering and Dental Colleges) scores. We also have management quota seats for direct admissions.' },
  { question: 'What documents are required for admission?', answer: '10th standard marks card, 12th standard marks card, KCET/COMEDK rank card, school transfer certificate, migration certificate, 8 passport photographs, category certificate (for SC/ST/OBC), Aadhar card, and income certificate (for scholarships).' },
  { question: 'Is hostel accommodation available at JIT?', answer: 'Yes, JIT has separate hostel facilities for boys and girls on campus. The hostel provides furnished rooms, mess facility, 24/7 hot water, Wi-Fi, and round-the-clock security. Annual hostel fees are approximately ₹80,000–₹1,00,000 inclusive of mess charges.' },
  { question: 'What scholarships are available for JIT students?', answer: 'Students can avail Karnataka Government scholarships for SC/ST/OBC categories, fee reimbursement schemes, merit-based management scholarships for top KCET rankers, and sports quota benefits. Our financial aid office will guide you through the application process.' },
  { question: 'Is lateral entry admission available at JIT?', answer: 'Yes, lateral entry to the second year of B.E. is available for diploma holders (3-year diploma in the relevant field with minimum 45% marks). Admission is through the DCET (Diploma CET) conducted by KEA.' },
  { question: 'What is the fee structure for management quota seats?', answer: 'Management quota fees range from ₹1,50,000 to ₹2,00,000 per year depending on the programme. This is in addition to the university fees. Contact our admissions office for the detailed fee breakup and payment schedule.' },
  { question: 'When does the new academic year begin?', answer: 'The new academic year at JIT typically begins in August/September following VTU guidelines. Orientation for freshers is usually held in the first week of August. Please check the academic calendar on our website or contact the admissions office for current year dates.' },
];

export default function AdmissionsPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (data: InquiryForm) => {
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Your inquiry has been submitted! Our admissions team will contact you within 24 hours.');
    reset();
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end pb-16 px-6 pt-20">
        <Image src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1400&h=700&fit=crop" alt="JIT Admissions" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-2">
            <Link href="/" className="hover:text-white">Home</Link> <ChevronRight className="inline" size={12} /> Admissions
          </p>
          <motion.h1 className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Admissions 2026
          </motion.h1>
          <p className="text-gray-300 mt-2 max-w-xl">Begin your journey at one of Bengaluru&apos;s top engineering colleges</p>
          <Link href="#inquiry">
            <motion.span className="mt-5 inline-flex items-center gap-2 bg-primary-gold px-8 py-3 font-display text-sm tracking-widest uppercase cursor-none" whileHover={{ scale: 1.02 }}>
              Apply Now <ChevronRight size={16} />
            </motion.span>
          </Link>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Programs Offered" label="Academic Programmes" className="mb-12" />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary-black text-white">
                  <th className="px-5 py-4 text-left font-display tracking-widest text-xs uppercase">Programme</th>
                  <th className="px-5 py-4 text-center font-display tracking-widest text-xs uppercase">Duration</th>
                  <th className="px-5 py-4 text-center font-display tracking-widest text-xs uppercase">Intake</th>
                  <th className="px-5 py-4 text-left font-display tracking-widest text-xs uppercase">Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p, i) => (
                  <motion.tr
                    key={i}
                    className={`border-b border-gray-100 hover:bg-warm-white transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <td className="px-5 py-4 font-body text-sm text-primary-black">{p.name}</td>
                    <td className="px-5 py-4 text-center font-mono text-xs text-muted-gray">{p.duration}</td>
                    <td className="px-5 py-4 text-center font-mono text-sm font-bold text-primary-gold">{p.intake}</td>
                    <td className="px-5 py-4 font-body text-sm text-muted-gray">{p.fee}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-gray text-xs mt-4">* Fees shown are approximate ranges for KCET and Management quota. Contact admissions office for exact, current fee structure.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Admission Process" label="Step by Step" className="mb-12" />
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-gold flex items-center justify-center">
                    <span className="font-display text-lg text-primary-black">{i + 1}</span>
                  </div>
                  {i < steps.length - 1 && <div className="w-0.5 h-full bg-primary-gold/30 mt-2 flex-1 min-h-[32px]" />}
                </div>
                <div className="bg-white border border-gray-200 p-6 flex-1 hover:border-primary-gold transition-colors">
                  <step.icon className="text-primary-gold mb-2" size={22} />
                  <h3 className="font-display text-xl tracking-wider uppercase text-primary-black mb-2">{step.title}</h3>
                  <p className="text-muted-gray text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Eligibility Criteria" className="mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'B.E. (Undergraduate)', items: ['10+2 / 2nd PUC with Physics, Chemistry & Mathematics', 'Minimum 45% aggregate (40% for SC/ST/OBC)', 'Valid KCET / COMEDK / JEE Main score', 'Diploma holders eligible via DCET (Lateral Entry)'] },
              { title: 'M.Tech (Postgraduate)', items: ['B.E./B.Tech in relevant discipline', 'Minimum 50% aggregate marks', 'Valid GATE score (preferred, not mandatory)', 'PGCET score also accepted'] },
              { title: 'MBA', items: ['Any recognised bachelor\'s degree', 'Minimum 50% aggregate marks', 'Valid KMAT / PGCET / CAT / CMAT / MAT score', 'Work experience preferred but not mandatory'] },
            ].map((cat, i) => (
              <motion.div
                key={i}
                className="bg-warm-white border border-gray-200 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-display text-xl tracking-wider uppercase text-primary-black mb-4 pb-2 border-b-2 border-primary-gold">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-gray">
                      <CheckCircle className="text-primary-gold flex-shrink-0 mt-0.5" size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Important Dates — 2026" theme="dark" className="mb-12" />
          <div className="space-y-3">
            {[
              { event: 'KCET Application Opens', date: 'January 15, 2026' },
              { event: 'KCET Examination', date: 'April 20–21, 2026' },
              { event: 'COMEDK UGET', date: 'May 10, 2026' },
              { event: 'KCET Results Announcement', date: 'June 5, 2026' },
              { event: 'KEA Counselling Round 1', date: 'June 20 – July 10, 2026' },
              { event: 'JIT Management Quota Opens', date: 'June 1, 2026' },
              { event: 'Last Date for Management Admissions', date: 'August 15, 2026' },
              { event: 'Commencement of Classes', date: 'August 25, 2026' },
              { event: 'Freshers Orientation Day', date: 'September 1, 2026' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-between border border-border-gray px-6 py-4 hover:border-primary-gold transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary-gold" size={16} />
                  <span className="text-white font-body text-sm">{item.event}</span>
                </div>
                <span className="font-mono text-primary-gold text-xs tracking-widest">{item.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Frequently Asked Questions" className="mb-12" />
          <Accordion items={faqs} />
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="Get in Touch" label="Inquiry" align="left" className="mb-8" />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input {...register('name')} placeholder="Your Full Name *" className="w-full border border-gray-200 px-4 py-3 text-sm font-body focus:border-primary-gold focus:outline-none transition-colors" />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input {...register('email')} placeholder="Email Address *" className="w-full border border-gray-200 px-4 py-3 text-sm font-body focus:border-primary-gold focus:outline-none transition-colors" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <input {...register('phone')} placeholder="Phone Number *" className="w-full border border-gray-200 px-4 py-3 text-sm font-body focus:border-primary-gold focus:outline-none transition-colors" />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>
              <div>
                <select {...register('program')} className="w-full border border-gray-200 px-4 py-3 text-sm font-body focus:border-primary-gold focus:outline-none transition-colors bg-white">
                  <option value="">Select Programme of Interest *</option>
                  {programs.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
                {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program.message}</p>}
              </div>
              <div>
                <textarea {...register('message')} placeholder="Your Message / Query *" rows={4} className="w-full border border-gray-200 px-4 py-3 text-sm font-body focus:border-primary-gold focus:outline-none transition-colors resize-none" />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-primary-gold text-primary-black font-display tracking-widest uppercase py-4 text-sm hover:bg-accent-gold transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                {isSubmitting ? <span className="spinner" /> : 'Submit Inquiry'}
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <h3 className="font-display text-2xl tracking-wider uppercase text-primary-black">Admissions Office</h3>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Address', value: 'Jyothy Institute of Technology, Tataguni, Off Kanakapura Road, Bengaluru - 560082, Karnataka' },
                { icon: Phone, label: 'Phone', value: '+91-80-28437091 / +91-80-28437092' },
                { icon: Mail, label: 'Admissions Email', value: 'admissions@jyothyit.ac.in' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary-gold flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-primary-black" />
                  </div>
                  <div>
                    <p className="font-display text-xs tracking-widest uppercase text-muted-gray">{item.label}</p>
                    <p className="text-primary-black text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-warm-white border border-gray-200 p-6">
              <h4 className="font-display text-lg tracking-wider uppercase text-primary-black mb-2">Office Hours</h4>
              <p className="text-muted-gray text-sm">Monday – Friday: 9:00 AM – 5:00 PM</p>
              <p className="text-muted-gray text-sm">Saturday: 9:00 AM – 1:00 PM</p>
              <p className="text-muted-gray text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
