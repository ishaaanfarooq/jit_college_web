'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Music, Code, Camera, Globe, Dumbbell, Users, Heart, Shield } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const clubs = [
  { name: 'Coding Club', icon: Code, desc: 'Weekly coding challenges, competitive programming, hackathons, and open-source contributions.' },
  { name: 'IEEE Student Chapter', icon: Globe, desc: 'Technical seminars, workshops, project competitions, and networking with IEEE members worldwide.' },
  { name: 'Music Club', icon: Music, desc: 'Classical and western music, band performances, annual music fest, recording sessions.' },
  { name: 'Photography Club', icon: Camera, desc: 'Photography walks, photo exhibitions, darkroom workshops, and social media content creation.' },
  { name: 'NSS Unit', icon: Heart, desc: 'Community service, blood donation drives, environmental campaigns, rural outreach programmes.' },
  { name: 'Sports Club', icon: Dumbbell, desc: 'Training and coaching for cricket, football, basketball, volleyball, badminton and athletics.' },
  { name: 'Literary Society', icon: Users, desc: 'Debates, elocution, creative writing, MUN simulations, and annual inter-college competitions.' },
  { name: 'Robotics Club', icon: Globe, desc: 'Robot building workshops, participation in national robotics competitions, autonomous systems projects.' },
];

const events = [
  { name: 'JyothyThon — Annual Tech Fest', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop', desc: 'Three days of hackathons, paper presentations, project exhibitions, coding contests, and tech quizzes. JyothyThon draws 2000+ participants from colleges across Karnataka.' },
  { name: 'Sangama — Cultural Festival', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop', desc: 'Annual cultural extravaganza featuring dance, drama, music, fashion shows, and art installations. A celebration of talent, creativity, and diversity.' },
  { name: 'Sports Day', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop', desc: 'Inter-departmental sports competitions, VTU zone-level tournaments, athletics events, and recognition for sports achievers.' },
  { name: 'National Hackathon Participations', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=300&fit=crop', desc: 'JIT teams regularly participate in Smart India Hackathon, Google Solution Challenge, and industry-sponsored hackathons with impressive results.' },
];

const facilities = [
  { name: 'Cafeteria & Food Court', desc: 'Our multi-cuisine cafeteria serves fresh, hygienic meals throughout the day. Vegetarian and non-vegetarian options, snack kiosks, and a dedicated dining area for 500+ students.', img: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=250&fit=crop' },
  { name: 'Auditorium', desc: '1000-seat fully air-conditioned auditorium with professional sound and lighting systems. Hosts cultural events, convocations, seminars, and industry conclaves.', img: 'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=400&h=250&fit=crop' },
  { name: 'Sports Complex', desc: 'Cricket ground, basketball and volleyball courts, badminton hall, table tennis, chess room, and a fully equipped gymnasium with professional trainers.', img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=250&fit=crop' },
  { name: 'Wi-Fi Campus', desc: '24/7 high-speed Wi-Fi coverage across the entire campus including hostels, classrooms, labs, and outdoor areas. Dedicated bandwidth for academic purposes.', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop' },
  { name: 'Medical Centre', desc: 'On-campus medical facility staffed by a full-time nurse and visiting doctor. First aid, routine check-ups, medical certificates, and emergency response available.', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop' },
  { name: 'Transport Facility', desc: 'Fleet of college buses covering major routes across Bengaluru. Routes through Kanakapura Road, Banashankari, Jayanagar, Koramangala, JP Nagar and more.', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop' },
];

const support = [
  { icon: Heart, title: 'Student Counselling Centre', desc: 'Confidential counselling services for academic stress, personal challenges, and mental wellness. Professional counsellors available Monday to Friday.' },
  { icon: Users, title: 'Mentorship Programme', desc: 'Each student is assigned a faculty mentor for one-on-one guidance on academics, career planning, and personal development throughout their programme.' },
  { icon: Shield, title: 'Anti-Ragging Cell', desc: 'Zero-tolerance policy for ragging. 24/7 helpline available. UGC national helpline 1800-180-5522. ICC committee for women\'s safety and grievance redressal.' },
  { icon: Globe, title: 'Scholarship & Financial Aid', desc: 'Our financial aid office helps students access government scholarships, management scholarships, and merit-based awards. Regular workshops on scholarship applications.' },
];

export default function CampusLifePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16 px-6 pt-20">
        <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&h=700&fit=crop" alt="Campus Life" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-2">
            <Link href="/" className="hover:text-white">Home</Link> <ChevronRight className="inline" size={12} /> Campus Life
          </p>
          <motion.h1 className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Life at JIT
          </motion.h1>
          <p className="text-gray-300 mt-2 max-w-xl">More than academics — discover a vibrant, thriving campus community</p>
        </div>
      </section>

      {/* Clubs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Student Clubs & Societies" label="Get Involved" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clubs.map((club, i) => (
              <motion.div
                key={club.name}
                className="border border-gray-200 p-6 hover:border-primary-gold hover:shadow-gold transition-all duration-300"
                initial={{ opacity: 0, y: 30, rotate: -0.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <club.icon className="text-primary-gold mb-3" size={28} />
                <h3 className="font-display text-lg tracking-wider uppercase text-primary-black mb-2">{club.name}</h3>
                <p className="text-muted-gray text-sm leading-relaxed">{club.desc}</p>
                <button className="mt-4 font-display text-xs tracking-widest text-primary-gold uppercase flex items-center gap-1 hover:gap-2 transition-all cursor-none">
                  Join Us <ChevronRight size={12} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Festivals & Events" label="Campus Calendar" className="mb-12" />
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, i) => (
              <motion.div
                key={event.name}
                className="bg-white overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={event.img} alt={event.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl tracking-wider uppercase text-primary-black mb-2">{event.name}</h3>
                  <p className="text-muted-gray text-sm leading-relaxed">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hostel */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="font-mono text-xs tracking-widest text-primary-gold uppercase">— Accommodation —</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-widest uppercase text-white mt-2 mb-6">Hostel & Accommodation</h2>
            <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
              <p>JIT provides separate, secure hostel facilities for boys and girls with a combined capacity of <strong className="text-white">350+ students</strong>. Both hostels are located within the campus premises.</p>
              <p>All rooms are furnished with beds, study tables, and wardrobes. Select blocks have attached bathrooms. Common facilities include laundry, recreation rooms, and reading areas.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { label: 'Boys Hostel Capacity', value: '200 Beds' },
                { label: 'Girls Hostel Capacity', value: '150 Beds' },
                { label: 'Annual Fee (with Mess)', value: '₹80,000–₹1,00,000' },
                { label: 'Meals per Day', value: '3 + Snacks' },
              ].map(item => (
                <div key={item.label} className="border border-border-gray p-4">
                  <p className="text-primary-gold font-display text-lg">{item.value}</p>
                  <p className="text-gray-400 text-xs mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="space-y-4" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative h-48">
              <Image src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=300&fit=crop" alt="Hostel" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-32">
                <Image src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=200&fit=crop" alt="Hostel Room" fill className="object-cover" />
              </div>
              <div className="relative h-32">
                <Image src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=300&h=200&fit=crop" alt="Hostel Mess" fill className="object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Campus Facilities" label="Infrastructure" className="mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((fac, i) => (
              <motion.div
                key={fac.name}
                className="border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image src={fac.img} alt={fac.name} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg tracking-wider uppercase text-primary-black mb-2">{fac.name}</h3>
                  <p className="text-muted-gray text-sm leading-relaxed">{fac.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Student Support Services" label="We Care" className="mb-12" />
          <div className="grid md:grid-cols-2 gap-6">
            {support.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white border border-gray-200 p-6 flex gap-5 hover:border-primary-gold transition-colors"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary-gold flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-primary-black" />
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-wider uppercase text-primary-black mb-2">{item.title}</h3>
                  <p className="text-muted-gray text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
