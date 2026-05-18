'use client'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2 } from 'lucide-react'

const projects = [
  {
    name: 'Agentic-Knowledge-To-Action',
    description:
      'AI Gateway and registry layer that unifies MCP, A2A, REST, and gRPC services into a single orchestration platform. Enables modular, scalable AI capability deployment across enterprise systems.',
    language: 'Python',
    tags: ['MCP', 'A2A', 'REST', 'gRPC', 'AI Gateway'],
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/asit-piri/Agentic-Knowledge-To-Action',
  },
  {
    name: 'Sales-Marketing-A2A-Orchestrator',
    description:
      'Multi-agent orchestration system for autonomous sales and marketing automation using Agent-to-Agent (A2A) communication protocols with shared contextual memory.',
    language: 'Python',
    tags: ['A2A', 'Multi-Agent', 'Sales AI', 'Automation'],
    gradient: 'from-blue-700 to-blue-500',
    github: 'https://github.com/asit-piri/Sales-Marketing-A2A-Orchestrator',
  },
  {
    name: 'Guardrail-AI-Template',
    description:
      'Enterprise guardrail framework for LLMs using a 6-layer defense architecture. Features PII redaction, prompt injection defense, YAML hot-reloading, and automated policy governance.',
    language: 'Python',
    tags: ['LLM Safety', 'Guardrails', 'Governance', 'Enterprise AI'],
    gradient: 'from-red-500 to-orange-500',
    github: 'https://github.com/asit-piri/Guradrail-AI-Template',
  },
  {
    name: 'ResolveAI',
    description:
      'AI-powered resolution platform leveraging large language models for intelligent conflict detection, analysis, and automated resolution workflows across enterprise use cases.',
    language: 'Python',
    tags: ['GenAI', 'NLP', 'LLM', 'Resolution AI'],
    gradient: 'from-emerald-500 to-teal-500',
    github: 'https://github.com/asit-piri/ResolveAI',
  },
  {
    name: 'AWS-Deployment-Automation-V2',
    description:
      'End-to-end deployment automation using AWS services with Terraform and GitHub Actions. Zero-downtime delivery with integrated security scanning and fail-safe rollback mechanisms.',
    language: 'Shell',
    tags: ['AWS', 'Terraform', 'CI/CD', 'DevOps'],
    gradient: 'from-amber-500 to-yellow-500',
    github: 'https://github.com/asit-piri/Asit-AWS-Deployment-Automation-EndToEnd-V2.0',
  },
  {
    name: 'Cursor-Rule-Template',
    description:
      'Comprehensive rule templates for the Cursor IDE enabling consistent AI-assisted development with enforced best practices, project-specific conventions, and coding standards.',
    language: 'Markdown',
    tags: ['Cursor IDE', 'Dev Tools', 'AI Coding', 'Templates'],
    gradient: 'from-sky-500 to-blue-400',
    github: 'https://github.com/asit-piri/Cursor-Rule-Template',
  },
]

const langColors = {
  Python: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  Shell: 'bg-green-500/15 text-green-300 border-green-500/25',
  Markdown: 'bg-slate-500/15 text-slate-300 border-slate-500/25',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/30 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-blue-700/10 top-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium text-xs uppercase tracking-widest mb-3">Open Source</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-title">
            Featured Projects
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
            Production-grade AI systems and enterprise frameworks — from{' '}
            <a
              href="https://github.com/asit-piri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 font-medium"
            >
              68+ GitHub repositories <ExternalLink size={12} />
            </a>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="project-card glass rounded-2xl p-5 border border-slate-800/50 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center opacity-90 shadow-lg`}
                >
                  <Code2 size={17} className="text-white" />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-white transition-colors p-1"
                >
                  <Github size={17} />
                </a>
              </div>

              <h3 className="font-display font-bold text-white text-sm sm:text-base mb-2 leading-snug">
                {project.name}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-slate-800/60 text-slate-400 rounded-full border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
                <span
                  className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                    langColors[project.language] || langColors.Markdown
                  }`}
                >
                  {project.language}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent flex items-center gap-1 hover:opacity-75 transition-opacity`}
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
          className="text-center mt-10"
        >
          <a
            href="https://github.com/asit-piri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-slate-800/80 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-700 transition-all duration-200 text-sm"
          >
            <Github size={17} />
            View All 68+ Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
