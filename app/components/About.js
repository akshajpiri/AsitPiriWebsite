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
    accent: '#0071e3',
    bg: '#ebf3ff',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    text: 'Built high-performance AI engineering organizations across India, Europe, and North America.',
    accent: '#5ac8fa',
    bg: '#eaf8ff',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Pioneer',
    text: 'Pioneer in Graph-RAG, Agentic AI, Quantum–Classical Hybrid Systems, and LLMOps governance.',
    accent: '#ff9f0a',
    bg: '#fff8eb',
  },
  {
    icon: Briefcase,
    title: 'Available For',
    text: 'Freelance consulting, enterprise AI projects, and permanent leadership roles in AI strategy.',
    accent: '#34c759',
    bg: '#f0faf4',
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
    <section id="about" className="py-28 relative overflow-hidden bg-white">
      <div className="orb w-[500px] h-[500px] bg-[#0071e3]/[0.04] -top-32 right-0" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#0071e3] font-semibold text-[12px] uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight section-title">
            Transforming Enterprises<br />with AI Intelligence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#1d1d1f] text-[17px] leading-relaxed mb-5">
              I am a{' '}
              <span className="font-semibold">
                Visionary Enterprise AI Strategist and Quantum-AI Architect
              </span>{' '}
              with 25+ years of cross-industry leadership experience transforming large-scale data,
              cloud, and AI ecosystems into revenue-generating, production-grade platforms.
            </p>
            <p className="text-[#6e6e73] text-[15px] leading-relaxed mb-5">
              My expertise spans Generative AI, Agentic AI, Graph-RAG, and Quantum–Classical Hybrid
              Systems — converted from cutting-edge research into scalable enterprise solutions with
              measurable commercial impact.
            </p>
            <p className="text-[#6e6e73] text-[15px] leading-relaxed mb-10">
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
                    className="bg-white rounded-2xl p-4 border border-black/[0.06] shadow-apple hover:shadow-apple-md transition-shadow duration-300"
                  >
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: item.bg }}
                    >
                      <Icon size={15} style={{ color: item.accent }} />
                    </div>
                    <p className="text-[#1d1d1f] font-semibold text-[13px] mb-1">{item.title}</p>
                    <p className="text-[#86868b] text-[12px] leading-relaxed">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Core Competencies + Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-semibold text-[#1d1d1f] text-[15px] mb-5 tracking-tight">Core Competencies</h3>
            <div className="flex flex-wrap gap-2 mb-12">
              {competencies.map((comp, i) => (
                <motion.span
                  key={comp}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="skill-tag px-3.5 py-1.5 text-[13px] font-medium bg-[#ebf3ff] text-[#0071e3] rounded-full border border-[#0071e3]/15"
                >
                  {comp}
                </motion.span>
              ))}
            </div>

            <h3 className="font-semibold text-[#1d1d1f] text-[15px] mb-5 tracking-tight">Notable Impact</h3>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white rounded-2xl p-4 border border-black/[0.06] shadow-apple hover:shadow-apple-md transition-shadow duration-300"
                >
                  <p className="text-3xl font-bold gradient-text tracking-tight">{a.value}</p>
                  <p className="text-[#86868b] text-[12px] mt-1.5 leading-relaxed">{a.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
