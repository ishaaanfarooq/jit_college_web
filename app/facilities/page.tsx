'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Monitor, Cpu, Wrench, Building2, Wifi, Zap, Coffee, HeartPulse, CreditCard, ShoppingBag, Presentation, Users } from 'lucide-react';

const labs = [
  {
    name: 'Computer Science Lab',
    dept: 'CSE',
    specs: ['50 high-performance workstations', 'Intel Core i7 12th Gen processors', '16 GB RAM, 512 GB NVMe SSD per node', 'Dual monitor setup for each workstation', 'Licensed software: MATLAB, AutoCAD, VS Code, Eclipse', '1 Gbps dedicated internet connection'],
    icon: Monitor,
  },
  {
    name: 'Electronics & VLSI Lab',
    dept: 'ECE',
    specs: ['Xilinx Vivado & ISE design suite', 'Spartan 6 & Artix-7 FPGA boards', 'Oscilloscopes, signal generators, CROs', 'PCB design tools: Altium Designer', 'Embedded dev kits: ARM Cortex-M boards', 'Microwave & antenna measurement setup'],
    icon: Cpu,
  },
  {
    name: 'Mechanical Workshop',
    dept: 'ME',
    specs: ['CNC milling machines (FANUC controller)', 'Conventional lathe and drilling machines', 'Welding bay (arc, MIG, TIG)', '3D FDM printers — Creality & Ultimaker', 'Metrology lab with CMM', 'CAD/CAM software: SolidWorks, CATIA'],
    icon: Wrench,
  },
  {
    name: 'Civil Structures Lab',
    dept: 'Civil',
    specs: ['Universal Testing Machine (600 kN capacity)', 'Concrete cube testing apparatus', 'Soil testing equipment — Triaxial, CBR', 'Total station & theodolite surveying instruments', 'Environmental testing kits', 'AutoCAD Civil 3D workstations'],
    icon: Building2,
  },
  {
    name: 'IoT & Embedded Systems Lab',
    dept: 'ISE / ECE',
    specs: ['Arduino Uno, Mega, Nano development boards', 'Raspberry Pi 4 nodes (cluster setup)', 'LoRa, ZigBee, RFID communication modules', 'Sensor kits: temperature, humidity, motion, gas', 'Node-RED and AWS IoT Core integration', 'Industry 4.0 demonstration model'],
    icon: Wifi,
  },
  {
    name: 'AI & GPU Computing Lab',
    dept: 'CSE / ISE',
    specs: ['NVIDIA RTX 4090 GPU server (4x GPUs)', 'CUDA, cuDNN deep learning frameworks', 'TensorFlow, PyTorch, Keras pre-installed', 'Jupyter Notebook environment for research', 'Kaggle competition workspace', 'Face recognition & NLP project demos'],
    icon: Zap,
  },
];

const otherFacilities = [
  { icon: Presentation, name: 'Seminar Hall', desc: '300-seat auditorium with AV system and AC, used for technical talks, symposia, and cultural events.' },
  { icon: Users, name: 'Conference Rooms', desc: 'Two fully equipped conference rooms with video conferencing for faculty meetings and MoU signings.' },
  { icon: Coffee, name: 'Cafeteria', desc: 'Large cafeteria serving hygienic meals, snacks, and beverages from 7 AM to 8 PM every working day.' },
  { icon: HeartPulse, name: 'Medical Room', desc: 'On-campus medical facility with a nurse on duty, first-aid, and tie-up with a nearby hospital.' },
  { icon: CreditCard, name: 'ATM', desc: 'SBI ATM located at the main building entrance, accessible 24/7 for students and staff.' },
  { icon: ShoppingBag, name: 'Stationery Shop', desc: 'Campus store supplying stationery, lab supplies, JIT merchandise, and printed materials.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function FacilitiesPage() {
  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Labs &amp; Facilities
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Labs &amp; Facilities
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            World-class infrastructure designed to fuel innovation, hands-on learning, and industry-ready engineering.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-body text-lg text-gray-300 max-w-3xl leading-relaxed" {...fadeUp}>
            JIT's laboratories and facilities are designed to bridge the gap between theoretical education and real-world engineering practice. Every lab is equipped to VTU standards and regularly upgraded with industry-grade equipment, ensuring our students graduate with both conceptual depth and practical expertise.
          </motion.p>
        </div>
      </section>

      {/* Labs Grid */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>State-of-the-Art</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-primary-black mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Departmental Laboratories
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labs.map((lab, i) => (
              <motion.div
                key={lab.name}
                className="bg-primary-black border border-border-gray hover:border-primary-gold transition-colors p-6 group"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-gold/10 border border-primary-gold/30 flex items-center justify-center group-hover:bg-primary-gold/20 transition-colors">
                    <lab.icon size={20} className="text-primary-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm tracking-widest uppercase text-white leading-tight">{lab.name}</h3>
                    <span className="font-mono text-xs text-primary-gold">{lab.dept}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {lab.specs.map((spec, j) => (
                    <li key={j} className="flex items-start gap-2 font-body text-xs text-gray-400">
                      <ChevronRight size={10} className="text-primary-gold flex-shrink-0 mt-1" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Facilities */}
      <section className="py-20 px-6 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <motion.p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3" {...fadeUp}>Campus Infrastructure</motion.p>
          <motion.h2 className="font-display text-3xl md:text-4xl tracking-widest uppercase text-white mb-12" {...fadeUp} transition={{ delay: 0.1 }}>
            Other Facilities
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherFacilities.map((f, i) => (
              <motion.div
                key={f.name}
                className="border border-border-gray hover:border-primary-gold transition-colors p-6 group"
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
              >
                <f.icon size={28} className="text-primary-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg tracking-widest uppercase text-white mb-3">{f.name}</h3>
                <p className="font-body text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VTU Badge */}
      <section className="py-20 px-6 bg-primary-gold">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p className="font-mono text-xs tracking-widest text-primary-black/60 uppercase mb-3" {...fadeUp}>Accreditation</motion.p>
          <motion.h2 className="font-display text-3xl md:text-5xl tracking-widest uppercase text-primary-black mb-6" {...fadeUp} transition={{ delay: 0.1 }}>
            VTU Approved Laboratories
          </motion.h2>
          <motion.p className="font-body text-primary-black/80 max-w-2xl mx-auto text-lg leading-relaxed mb-8" {...fadeUp} transition={{ delay: 0.2 }}>
            All laboratories at JIT are approved by Visvesvaraya Technological University (VTU) and comply with AICTE norms. Regular audits ensure equipment is up-to-date and lab manuals align with the current VTU curriculum.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4 justify-center" {...fadeUp} transition={{ delay: 0.3 }}>
            <span className="font-mono text-xs tracking-widest uppercase bg-primary-black text-primary-gold px-6 py-3">VTU Approved</span>
            <span className="font-mono text-xs tracking-widest uppercase bg-primary-black text-primary-gold px-6 py-3">AICTE Compliant</span>
            <span className="font-mono text-xs tracking-widest uppercase bg-primary-black text-primary-gold px-6 py-3">ISO 9001:2015</span>
            <span className="font-mono text-xs tracking-widest uppercase bg-primary-black text-primary-gold px-6 py-3">NAAC Accredited</span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
