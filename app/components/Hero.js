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
      <span className="text-blue-400 animate-pulse ml-0.5">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="orb w-[500px] h-[500px] bg-blue-700/20 top-1/4 -left-48" />
      <div className="orb w-[400px] h-[400px] bg-blue-600/12 bottom-1/4 -right-32" />
      <div className="orb w-[300px] h-[300px] bg-cyan-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to Opportunities — Freelance & Full-time
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-3"
            >
              Asit Piri
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 min-h-[2rem] sm:min-h-[2.5rem]"
            >
              <p className="font-display text-xl sm:text-2xl font-semibold">
                <TypeWriter texts={designations} />
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 text-lg leading-relaxed mb-7 max-w-lg"
            >
              25+ years transforming enterprises with AI. I convert cutting-edge research in
              Generative AI, Agentic Systems, Graph-RAG, and Quantum–Classical Hybrid platforms
              into scalable solutions with measurable commercial impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 text-xs font-medium bg-slate-800/70 border border-slate-700/60 text-slate-300 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-blue-700/30"
              >
                Explore My Work <ExternalLink size={15} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/80 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-700 transition-all duration-200"
              >
                Get In Touch <Mail size={15} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-5"
            >
              <a
                href="https://www.linkedin.com/in/asit-piri/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="https://github.com/asit-piri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Github size={18} /> GitHub
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="mailto:asit.piri@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Mail size={18} /> Email
              </a>
            </motion.div>
          </div>

          {/* Right: Profile picture */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 90 }}
              className="relative"
            >
              <div className="profile-ring w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px]">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
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
                className="absolute -bottom-3 -left-6 glass rounded-2xl px-4 py-3 shadow-2xl border border-slate-700/40"
              >
                <p className="text-slate-500 text-xs">Experience</p>
                <p className="font-display text-2xl font-bold gradient-text">25+ Yrs</p>
              </motion.div>

              {/* Floating stat: Projects */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-3 -right-4 glass rounded-2xl px-4 py-3 shadow-2xl border border-slate-700/40"
              >
                <p className="text-slate-500 text-xs">AI Projects</p>
                <p className="font-display text-2xl font-bold gradient-text">68+</p>
              </motion.div>

              {/* Dashed rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/15 scale-110 animate-spin-slow pointer-events-none" />
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
          <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={14} className="text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
