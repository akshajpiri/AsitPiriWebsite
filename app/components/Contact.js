'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react'

const contactLinks = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'asit.piri@gmail.com',
    href: 'mailto:asit.piri@gmail.com',
    gradient: 'from-blue-500 to-cyan-500',
    border: 'border-blue-500/25',
    bg: 'bg-blue-500/10',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/asit-piri',
    href: 'https://www.linkedin.com/in/asit-piri/',
    gradient: 'from-blue-600 to-blue-400',
    border: 'border-blue-600/25',
    bg: 'bg-blue-600/10',
  },
  {
    Icon: Github,
    label: 'GitHub',
    value: 'github.com/asit-piri',
    href: 'https://github.com/asit-piri',
    gradient: 'from-slate-300 to-slate-100',
    border: 'border-slate-500/25',
    bg: 'bg-slate-500/10',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    const mailto = `mailto:asit.piri@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(body)}`
    window.open(mailto)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const field = 'w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/60 transition-colors'

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-blue-700/10 bottom-0 right-0" />
      <div className="orb w-[300px] h-[300px] bg-violet-700/10 top-0 left-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium text-xs uppercase tracking-widest mb-3">Let's Connect</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-title">
            Get In Touch
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
            Looking for an Enterprise AI Strategist, a technical consulting partner, or a senior AI
            leader? I'm open to freelance projects, permanent roles, and any exciting opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Availability card */}
            <div className="glass rounded-2xl p-6 border border-emerald-500/20 mb-5">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold text-sm">Available for Opportunities</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Open to{' '}
                <strong className="text-white">freelance AI consulting</strong>,{' '}
                <strong className="text-white">enterprise AI architecture projects</strong>,{' '}
                <strong className="text-white">permanent leadership roles</strong>, and any
                exciting AI opportunity that aligns with my expertise.
              </p>
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <MapPin size={12} />
                <span>Bengaluru, India · Available remotely worldwide</span>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {contactLinks.map(({ Icon, label, value, href, gradient, border, bg }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-slate-800/50 hover:border-slate-700/50 transition-all group"
                >
                  <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={17} className="text-slate-300" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">{label}</p>
                    <p className={`font-semibold text-sm bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 border border-slate-800/50"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare size={17} className="text-blue-400" />
                <h3 className="font-display font-bold text-white">Send a Message</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Jane Smith"
                    className={field}
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="jane@company.com"
                    className={field}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-slate-400 text-xs mb-1.5 block">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                  placeholder="Freelance Project / Job Opportunity / Collaboration"
                  className={field}
                />
              </div>

              <div className="mb-6">
                <label className="text-slate-400 text-xs mb-1.5 block">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Tell me about your project, role, or collaboration idea..."
                  className={`${field} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-violet-500 transition-all duration-200 shadow-lg shadow-blue-600/25 text-sm"
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} /> Email client opened!
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
              <p className="text-slate-600 text-xs mt-3 text-center">
                Opens your email client with the message pre-filled
              </p>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-slate-800/60"
        >
          <p className="text-slate-600 text-sm">
            © 2026 Asit Piri · Enterprise AI Strategist &amp; Quantum-AI Architect
            <span className="mx-2">·</span>
            <a
              href="https://www.linkedin.com/in/asit-piri/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="mx-2">·</span>
            <a
              href="https://github.com/asit-piri"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors"
            >
              GitHub
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
