'use client'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2 } from 'lucide-react'

const projects = [
  {
    name: 'AutoFounder-AI',
    description:
      'Autonomous multi-agent platform automating the full software lifecycle from idea validation to market launch. Features A2A agent system (Validator, Architect, Coder, Marketer) with a self-healing MVP engine generating production-grade Next.js/FastAPI stacks on AWS.',
    language: 'Python',
    tags: ['Multi-Agent', 'A2A', 'LLMOps', 'SaaS', 'AWS'],
    accent: '#0071e3',
    iconBg: '#ebf3ff',
    github: 'https://github.com/asit-piri/AutoFounder-AI',
  },
  {
    name: 'Knovera',
    description:
      'Enterprise-grade RAG platform powered by Gemini and Pinecone with policy-driven API governance and automated PII redaction. Built for scalable, compliant enterprise knowledge management.',
    language: 'Python',
    tags: ['RAG', 'Gemini', 'Pinecone', 'Enterprise AI', 'PII'],
    accent: '#7b61ff',
    iconBg: '#f0eeff',
    github: 'https://github.com/asit-piri/Knovera',
  },
  {
    name: 'mllm-calibrator',
    description:
      'Multimodal LLM calibration framework for measuring and improving confidence alignment across vision-language models. Provides systematic evaluation of calibration error with post-hoc correction strategies.',
    language: 'Python',
    tags: ['Multimodal', 'LLM', 'Calibration', 'VLM', 'Evaluation'],
    accent: '#7b61ff',
    iconBg: '#f0eeff',
    github: 'https://github.com/asit-piri/mllm-calibrator',
  },
  {
    name: 'GPT-MoE-FROM-SCRATCH',
    description:
      'Ground-up implementation of a GPT architecture with Mixture-of-Experts (MoE) routing, built entirely in PyTorch. Covers sparse gating, expert load balancing, and transformer internals without external libraries.',
    language: 'Python',
    tags: ['GPT', 'MoE', 'PyTorch', 'Transformers', 'From Scratch'],
    accent: '#0071e3',
    iconBg: '#ebf3ff',
    github: 'https://github.com/asit-piri/GPT-MoE-FROM-SCRATCH',
  },
  {
    name: 'LLM-FineTuning',
    description:
      'End-to-end LLM fine-tuning pipelines covering SFT, LoRA, QLoRA, and RLHF techniques. Includes dataset preparation, training configs, and evaluation harnesses for adapting foundation models to domain-specific tasks.',
    language: 'Python',
    tags: ['LoRA', 'QLoRA', 'RLHF', 'SFT', 'Fine-Tuning'],
    accent: '#ff9f0a',
    iconBg: '#fff8eb',
    github: 'https://github.com/asit-piri/LLM-FineTuning',
  },
  {
    name: 'AWS-Deployment-Automation-V2',
    description:
      'End-to-end deployment automation using AWS services with Terraform and GitHub Actions. Zero-downtime delivery with integrated security scanning and fail-safe rollback mechanisms.',
    language: 'Shell',
    tags: ['AWS', 'Terraform', 'CI/CD', 'DevOps'],
    accent: '#ff9f0a',
    iconBg: '#fff8eb',
    github: 'https://github.com/asit-piri/Asit-AWS-Deployment-Automation-EndToEnd-V2.0',
  },
]

const langBadge = {
  Python: { bg: '#ebf3ff', color: '#0071e3' },
  Shell: { bg: '#f0faf4', color: '#34c759' },
  Markdown: { bg: '#f5f5f7', color: '#636366' },
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-white relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-[#0071e3]/[0.04] top-0 right-0" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#0071e3] font-semibold text-[12px] uppercase tracking-widest mb-3">Open Source</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight section-title">
            Featured Projects
          </h2>
          <p className="text-[#6e6e73] mt-6 max-w-xl mx-auto text-[15px]">
            Production-grade AI systems and enterprise frameworks — from{' '}
            <a
              href="https://github.com/asit-piri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0071e3] hover:underline inline-flex items-center gap-1 font-medium"
            >
              100+ GitHub repositories <ExternalLink size={12} />
            </a>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="project-card bg-white rounded-2xl p-5 border border-black/[0.06] shadow-apple flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: project.iconBg }}
                >
                  <Code2 size={16} style={{ color: project.accent }} />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d1d1d6] hover:text-[#1d1d1f] transition-colors p-1"
                  aria-label="View on GitHub"
                >
                  <Github size={16} />
                </a>
              </div>

              <h3 className="font-bold text-[#1d1d1f] text-[14px] sm:text-[15px] mb-2 leading-snug tracking-tight">
                {project.name}
              </h3>
              <p className="text-[#6e6e73] text-[13px] leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 bg-[#f5f5f7] text-[#636366] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-black/[0.06]">
                <span
                  className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: langBadge[project.language]?.bg || '#f5f5f7',
                    color: langBadge[project.language]?.color || '#636366',
                  }}
                >
                  {project.language}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] font-semibold flex items-center gap-1 hover:opacity-70 transition-opacity"
                  style={{ color: project.accent }}
                >
                  View on GitHub <ExternalLink size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/asit-piri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5f5f7] text-[#1d1d1f] font-semibold rounded-full hover:bg-[#e8e8ed] transition-colors border border-black/[0.06] text-[14px]"
          >
            <Github size={15} />
            View All 100+ Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
