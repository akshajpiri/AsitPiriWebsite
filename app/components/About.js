'use client'
import { motion } from 'framer-motion'
import { Target, Globe, Lightbulb, Briefcase } from 'lucide-react'

const competencies = [
  'Enterprise AI Strategy & Transformation',
  'AI Platform Architecture & Multi-Cloud Optimization',
  'Generative AI & Agentic AI Engineering',
  'Multi-Agent Systems & Orchestration Frameworks',
  'LLMOps & Responsible AI Governance',
  'AI Program Portfolio Management',
  'Quantum–AI Hybrid Architecture',
  'Knowledge Graph & Enterprise Data Ecosystems',
  'Global AI Capability Building & Team Leadership',
  'AI Monetization & Platform Commercialization',
  'Graph-RAG & Vector Database Architectures',
  'AI Governance, Risk & Guardrail Strategy',
]

const highlights = [
  {
    icon: Target,
    title: 'Strategic Vision',
    text: 'Converting cutting-edge AI research into revenue-generating, production-grade enterprise platforms.',
    color: 'text-blue-400',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    text: 'Built high-performance AI engineering organizations across India, Europe, and North America.',
    color: 'text-violet-400',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Pioneer',
    text: 'Pioneer in Graph-RAG, Agentic AI, Quantum–Classical Hybrid Systems, and LLMOps governance.',
    color: 'text-cyan-400',
  },
  {
    icon: Briefcase,
    title: 'Available For',
    text: 'Freelance consulting, enterprise AI projects, and permanent leadership roles in AI strategy.',
    color: 'text-emerald-400',
  },
]

const achievements = [
  { value: '40%', label: 'Operational efficiency via multimodal AI' },
  { value: '65%', label: 'Reduction in contract review cycle time' },
  { value: '32%', label: 'LLM latency reduction across multi-cloud' },
  { value: '50%', label: 'Automation expansion via Agentic RAG' },
  { value: '38%', label: 'Retrieval accuracy gain via Graph-RAG + Neo4j' },
  { value: '85%', label: 'Downtime reduction on HPE GreenLake' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-violet-700/10 top-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium text-xs uppercase tracking-widest mb-3">About Me</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-title">
            Transforming Enterprises<br />with AI Intelligence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-5">
              I am a{' '}
              <span className="text-white font-semibold">
                Visionary Enterprise AI Strategist and Quantum-AI Architect
              </span>{' '}
              with 25+ years of cross-industry leadership experience transforming large-scale data,
              cloud, and AI ecosystems into revenue-generating, production-grade platforms.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              My expertise spans Generative AI, Agentic AI, Graph-RAG, and Quantum–Classical Hybrid
              Systems — converted from cutting-edge research into scalable enterprise solutions with
              measurable commercial impact.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              As an architect of multi-cloud AI platforms and AI governance frameworks, I consistently
              deliver 30%+ latency optimization and 28%+ cost efficiency. I have secured $1.8M+ in
              strategic AI program approvals and built engineering organizations across India, Europe,
              and North America.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="glass rounded-xl p-4 border border-slate-800/50"
                  >
                    <Icon size={17} className={`${item.color} mb-2`} />
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Core Competencies + Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-lg font-bold text-white mb-5">Core Competencies</h3>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {competencies.map((comp, i) => (
                <motion.span
                  key={comp}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="skill-tag px-3.5 py-2 text-sm font-medium bg-gradient-to-r from-blue-600/15 to-violet-600/15 border border-blue-500/25 text-blue-300 rounded-full"
                >
                  {comp}
                </motion.span>
              ))}
            </div>

            <h3 className="font-display text-lg font-bold text-white mb-5">Notable Impact</h3>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="glass rounded-xl p-4 border border-slate-800/40"
                >
                  <p className="font-display text-2xl font-bold gradient-text">{a.value}</p>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">{a.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
