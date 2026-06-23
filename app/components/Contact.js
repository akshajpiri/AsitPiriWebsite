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
    accent: '#0071e3',
    bg: '#ebf3ff',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/asit-piri',
    href: 'https://www.linkedin.com/in/asit-piri/',
    accent: '#0071e3',
    bg: '#ebf3ff',
  },
  {
    Icon: Github,
    label: 'GitHub',
    value: 'github.com/asit-piri',
    href: 'https://github.com/asit-piri',
    accent: '#1d1d1f',
    bg: '#f5f5f7',
  },
]

const inputClass =
  'w-full bg-[#f5f5f7] border border-black/[0.08] rounded-xl px-4 py-3 text-[#1d1d1f] text-[14px] placeholder-[#aeaeb2] input-focus transition-all duration-200'

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

  return (
    <section id="contact" className="py-28 bg-[#f5f5f7] relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-[#0071e3]/[0.04] bottom-0 right-0" />
      <div className="orb w-[300px] h-[300px] bg-[#5ac8fa]/[0.04] top-0 left-0" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#0071e3] font-semibold text-[12px] uppercase tracking-widest mb-3">Let's Connect</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight section-title">
            Get In Touch
          </h2>
          <p className="text-[#6e6e73] mt-6 max-w-xl mx-auto text-[15px]">
            Looking for an Enterprise AI Strategist, a technical consulting partner, or a senior AI
            leader? I'm open to freelance projects, permanent roles, and any exciting opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Availability card */}
            <div className="bg-white rounded-2xl p-6 border border-[#34c759]/20 shadow-apple mb-4">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#34c759] animate-pulse" />
                <span className="text-[#1d7a38] font-semibold text-[13px]">Available for Opportunities</span>
              </div>
              <p className="text-[#6e6e73] text-[14px] leading-relaxed mb-3">
                Open to{' '}
                <strong className="text-[#1d1d1f] font-semibold">freelance AI consulting</strong>,{' '}
                <strong className="text-[#1d1d1f] font-semibold">enterprise AI architecture projects</strong>,{' '}
                <strong className="text-[#1d1d1f] font-semibold">permanent leadership roles</strong>, and any
                exciting AI opportunity that aligns with my expertise.
              </p>
              <div className="flex items-center gap-2 text-[#aeaeb2] text-[12px]">
                <MapPin size={11} />
                <span>Bengaluru, India · Available remotely worldwide</span>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {contactLinks.map(({ Icon, label, value, href, accent, bg }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-black/[0.06] shadow-apple hover:shadow-apple-md transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: bg }}
                  >
                    <Icon size={15} style={{ color: accent }} />
                  </div>
                  <div>
                    <p className="text-[#aeaeb2] text-[11px] font-medium">{label}</p>
                    <p className="font-semibold text-[13px] text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 border border-black/[0.06] shadow-apple"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-xl bg-[#ebf3ff] flex items-center justify-center">
                  <MessageSquare size={14} className="text-[#0071e3]" />
                </div>
                <h3 className="font-bold text-[#1d1d1f] text-[15px] tracking-tight">Send a Message</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[#6e6e73] text-[12px] font-medium mb-1.5 block">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Jane Smith"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[#6e6e73] text-[12px] font-medium mb-1.5 block">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-[#6e6e73] text-[12px] font-medium mb-1.5 block">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                  placeholder="Freelance Project / Job Opportunity / Collaboration"
                  className={inputClass}
                />
              </div>

              <div className="mb-6">
                <label className="text-[#6e6e73] text-[12px] font-medium mb-1.5 block">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Tell me about your project, role, or collaboration idea..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#0071e3] text-white font-semibold rounded-full hover:bg-[#0077ed] transition-colors duration-200 shadow-apple-blue text-[14px]"
              >
                {sent ? (
                  <>
                    <CheckCircle size={15} /> Email client opened!
                  </>
                ) : (
                  <>
                    <Send size={14} /> Send Message
                  </>
                )}
              </button>
              <p className="text-[#aeaeb2] text-[11px] mt-3 text-center">
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
          className="text-center mt-20 pt-8 border-t border-black/[0.08]"
        >
          <p className="text-[#aeaeb2] text-[13px]">
            © 2026 Asit Piri · Enterprise AI Strategist &amp; Quantum-AI Architect
            <span className="mx-2">·</span>
            <a
              href="https://www.linkedin.com/in/asit-piri/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0071e3] transition-colors"
            >
              LinkedIn
            </a>
            <span className="mx-2">·</span>
            <a
              href="https://github.com/asit-piri"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1d1d1f] transition-colors"
            >
              GitHub
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
