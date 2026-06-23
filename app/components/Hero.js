'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const designations = [
  'Enterprise AI Strategist',
  'Quantum-AI Architect',
  'Principal Data Scientist',
  'Full-Stack AI Builder',
  'AI Engineering Lead',
  'LLMOps Expert',
  'Multi-Agent Systems Architect',
  'AI Governance Leader',
  'Enterprise AI Consultant',
  'Data Architect',
]

const techBadges = [
  'Generative AI', 'Agentic AI', 'Graph-RAG', 'Quantum AI',
  'LLMOps', 'Multi-Cloud', 'A2A Systems', 'Enterprise AI',
]

function TypeWriter({ texts, typingSpeed = 75, deletingSpeed = 40, pauseTime = 1800 }) {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const current = texts[index]
    if (isPaused) {
      const t = setTimeout(() => { setIsPaused(false); setIsTyping(false) }, pauseTime)
      return () => clearTimeout(t)
    }
    if (isTyping) {
      if (displayText.length < current.length) {
        const t = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), typingSpeed)
        return () => clearTimeout(t)
      }
      setIsPaused(true)
    } else {
      if (displayText.length > 0) {
        const t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), deletingSpeed)
        return () => clearTimeout(t)
      }
      setIndex((index + 1) % texts.length)
      setIsTyping(true)
    }
  }, [displayText, index, isTyping, isPaused, texts, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className="gradient-text">
      {displayText}
      <span className="text-[#0071e3] animate-pulse ml-0.5">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 animated-gradient" />

      {/* Soft ambient orbs */}
      <div className="orb w-[600px] h-[600px] bg-[#0071e3]/[0.06] top-1/4 -left-64" />
      <div className="orb w-[500px] h-[500px] bg-[#5ac8fa]/[0.05] bottom-1/4 -right-48" />
      <div className="orb w-[400px] h-[400px] bg-[#34c759]/[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0faf4] border border-[#34c759]/25 text-[#1d7a38] text-[13px] font-medium mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#34c759] animate-pulse" />
              Open to Opportunities — Freelance &amp; Full-time
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1d1d1f] leading-[1.05] tracking-tight mb-4"
            >
              Asit Piri
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-6 min-h-[2rem] sm:min-h-[2.5rem]"
            >
              <p className="text-xl sm:text-2xl font-semibold tracking-tight">
                <TypeWriter texts={designations} />
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#6e6e73] text-[17px] leading-relaxed mb-7 max-w-lg"
            >
              25+ years transforming enterprises with AI. Converting cutting-edge research in
              Generative AI, Agentic Systems, Graph-RAG, and Quantum–Classical Hybrid platforms
              into scalable solutions with measurable commercial impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 text-xs font-medium bg-[#f5f5f7] text-[#1d1d1f] rounded-full border border-black/[0.06]"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0071e3] text-white font-semibold rounded-full hover:bg-[#0077ed] transition-all duration-200 shadow-apple-blue text-[15px]"
              >
                Explore My Work <ExternalLink size={14} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5f5f7] text-[#1d1d1f] font-semibold rounded-full hover:bg-[#e8e8ed] transition-all duration-200 border border-black/[0.06] text-[15px]"
              >
                Get In Touch <Mail size={14} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-5"
            >
              <a
                href="https://www.linkedin.com/in/asit-piri/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#6e6e73] hover:text-[#0071e3] transition-colors text-[13px]"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <span className="text-[#d1d1d6]">·</span>
              <a
                href="https://github.com/asit-piri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#6e6e73] hover:text-[#1d1d1f] transition-colors text-[13px]"
              >
                <Github size={15} /> GitHub
              </a>
              <span className="text-[#d1d1d6]">·</span>
              <a
                href="mailto:asit.piri@gmail.com"
                className="flex items-center gap-1.5 text-[#6e6e73] hover:text-[#0071e3] transition-colors text-[13px]"
              >
                <Mail size={15} /> Email
              </a>
            </motion.div>
          </div>

          {/* Right: Profile picture */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 90 }}
              className="relative"
            >
              <div className="profile-ring w-64 h-64 sm:w-72 sm:h-72 lg:w-[360px] lg:h-[360px]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#f5f5f7]">
                  <Image
                    src="/profile.jpeg"
                    alt="Asit Piri — Enterprise AI Strategist"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Floating stat: Experience */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-apple-lg border border-black/[0.06]"
              >
                <p className="text-[#86868b] text-[11px] font-medium">Experience</p>
                <p className="text-2xl font-bold gradient-text">25+ Yrs</p>
              </motion.div>

              {/* Floating stat: Projects */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-apple-lg border border-black/[0.06]"
              >
                <p className="text-[#86868b] text-[11px] font-medium">AI Projects</p>
                <p className="text-2xl font-bold gradient-text">68+</p>
              </motion.div>

              {/* Dashed rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#0071e3]/12 scale-110 animate-spin-slow pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#aeaeb2] text-[10px] tracking-widest uppercase font-medium">Scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={13} className="text-[#aeaeb2]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
