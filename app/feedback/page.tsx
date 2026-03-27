'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Star, MessageSquare, Clock } from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: '', category: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) { alert('Please select a rating'); return; }
    setSubmitted(true);
  };

  return (
    <main className="bg-primary-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 pt-32 bg-primary-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-dark-charcoal to-primary-black" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="inline" size={12} />
            Feedback
          </p>
          <motion.h1
            className="font-display text-5xl md:text-7xl tracking-widest uppercase text-white leading-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Share Your<br />Feedback
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Your feedback drives improvement. JIT values insights from students, parents, alumni, and visitors.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 bg-primary-gold">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '4.2 / 5', label: 'Average Rating' },
            { value: '1,200+', label: 'Responses in 2025' },
            { value: '7 Days', label: 'Response Commitment' },
          ].map((s, i) => (
            <motion.div key={s.label} {...fadeUp} transition={{ delay: i * 0.1 }}>
              <p className="font-display text-3xl md:text-4xl tracking-widest text-primary-black">{s.value}</p>
              <p className="font-mono text-xs tracking-widest uppercase text-primary-black/70 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">We're Listening</p>
            <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-8">Feedback Form</h2>

            {submitted ? (
              <div className="bg-primary-black border border-primary-gold p-10 text-center">
                <Star size={40} className="text-primary-gold mx-auto mb-4" fill="#CDB87C" />
                <p className="font-display text-2xl tracking-widest uppercase text-primary-gold mb-3">Thank You!</p>
                <p className="font-body text-gray-300 text-sm leading-relaxed">Your feedback has been recorded. Our team will review it within 7 working days. Your input helps us build a better JIT.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={anonymous}
                    onChange={e => setAnonymous(e.target.checked)}
                    className="w-4 h-4 accent-primary-gold"
                  />
                  <label htmlFor="anonymous" className="font-mono text-xs text-muted-gray tracking-widest uppercase">Submit Anonymously</label>
                </div>

                {!anonymous && (
                  <>
                    <div>
                      <label className="font-mono text-xs tracking-widest text-muted-gray uppercase block mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-white border border-gray-200 text-primary-black px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="font-mono text-xs tracking-widest text-muted-gray uppercase block mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-white border border-gray-200 text-primary-black px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="font-mono text-xs tracking-widest text-muted-gray uppercase block mb-2">Your Role *</label>
                  <select
                    required
                    className="w-full bg-white border border-gray-200 text-primary-black px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors"
                    value={formData.role}
                    onChange={e => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option value="">Select your role</option>
                    <option>Student</option>
                    <option>Parent</option>
                    <option>Alumni</option>
                    <option>Visitor</option>
                    <option>Faculty</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest text-muted-gray uppercase block mb-2">Feedback Category *</label>
                  <select
                    required
                    className="w-full bg-white border border-gray-200 text-primary-black px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors"
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="">Select category</option>
                    <option>Academics</option>
                    <option>Infrastructure</option>
                    <option>Administration</option>
                    <option>Placements</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Star Rating */}
                <div>
                  <label className="font-mono text-xs tracking-widest text-muted-gray uppercase block mb-3">Overall Rating *</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          size={32}
                          className="transition-colors"
                          fill={(hoveredRating || rating) >= star ? '#CDB87C' : 'transparent'}
                          stroke={(hoveredRating || rating) >= star ? '#CDB87C' : '#6B6B6B'}
                        />
                      </button>
                    ))}
                    {rating > 0 && (
                      <span className="font-mono text-xs text-primary-gold self-center ml-2">
                        {['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][rating]}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest text-muted-gray uppercase block mb-2">Your Feedback *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-white border border-gray-200 text-primary-black px-4 py-3 font-body text-sm focus:border-primary-gold focus:outline-none transition-colors resize-none"
                    placeholder="Share your thoughts, suggestions, or concerns..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="w-full bg-primary-gold text-primary-black font-mono text-xs tracking-widest uppercase py-4 hover:bg-primary-black hover:text-primary-gold transition-colors">
                  Submit Feedback
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <p className="font-mono text-xs tracking-widest text-primary-gold uppercase mb-3">About Our Process</p>
            <h2 className="font-display text-2xl tracking-widest uppercase text-primary-black mb-8">How We Use Feedback</h2>
            <div className="space-y-5">
              {[
                { icon: MessageSquare, title: 'All Feedback Reviewed', desc: 'Every submission — anonymous or named — is reviewed by the Quality Assurance Cell and shared with relevant departments.' },
                { icon: Clock, title: 'Response Within 7 Days', desc: 'Named feedback receives a personal response from the relevant department head within 7 working days.' },
                { icon: Star, title: 'Continuous Improvement', desc: 'Feedback data is analysed quarterly and informs strategic decisions, infrastructure upgrades, and academic policy revisions.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 border-b border-gray-100 pb-5">
                  <div className="w-10 h-10 bg-primary-black flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-primary-gold" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-primary-black text-sm mb-1">{item.title}</h3>
                    <p className="font-body text-sm text-muted-gray leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary-black p-6">
              <p className="font-mono text-xs text-primary-gold tracking-widest uppercase mb-3">Feedback Stats — 2025</p>
              <div className="space-y-3">
                {[
                  { label: 'Academics', rating: 4.3 },
                  { label: 'Infrastructure', rating: 4.1 },
                  { label: 'Administration', rating: 3.9 },
                  { label: 'Placements', rating: 4.5 },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between font-mono text-xs text-muted-gray mb-1">
                      <span className="uppercase tracking-widest">{stat.label}</span>
                      <span className="text-primary-gold">{stat.rating}/5</span>
                    </div>
                    <div className="h-1 bg-border-gray rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary-gold rounded-full"
                        style={{ width: `${(stat.rating / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
