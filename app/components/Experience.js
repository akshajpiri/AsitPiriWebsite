'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, ChevronDown } from 'lucide-react'

const experiences = [
  {
    id: 1,
    company: 'AutoFounder AI | Knovera',
    role: 'Principal Data Scientist – Full-Stack AI Builder',
    period: 'Jan 2026 – Present',
    location: 'Bengaluru, India (Remote)',
    type: 'Career Transition & Internship',
    dotColor: 'bg-cyan-400',
    gradient: 'from-cyan-500 to-blue-500',
    typeBadge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    achievements: [
      'Architected and launched AutoFounder AI (0→1) — autonomous multi-agent platform automating the full software lifecycle from idea validation to market launch.',
      'Engineered A2A (Agent-to-Agent) system with Validator, Architect, Coder, and Marketer agents sharing contextual memory for end-to-end business automation.',
      'Built self-healing MVP engine generating production-grade Next.js/FastAPI stacks — compressing development timelines from weeks to minutes.',
      'Deployed scalable multi-tenant SaaS on AWS (EKS, RDS, S3) with SQS-driven dynamic orchestration for high-concurrency agent workflows.',
      'Implemented LLMOps & CI/CD pipelines (RLHF + GitHub Actions) improving code quality 25% with zero-downtime delivery via Prometheus & Grafana.',
      'Architected enterprise-grade RAG platform (Gemini + Pinecone) for Knovera with policy-driven API governance and automated PII redaction.',
    ],
  },
  {
    id: 2,
    company: 'NaviOwl',
    role: 'Principal Data Scientist — Full-Stack Quantum AI Builder',
    period: 'Feb 2026 – Mar 2026',
    location: 'Markham, Ontario, Canada',
    type: null,
    dotColor: 'bg-violet-400',
    gradient: 'from-violet-500 to-purple-500',
    typeBadge: null,
    achievements: [
      'Led end-to-end architecture of an MCP-based enterprise tool orchestration framework enabling modular and scalable AI capability deployment.',
      'Architected A2A multi-agent coordination systems for intelligent reasoning workflows across complex enterprise document ecosystems.',
      'Designed Graph-RAG knowledge pipelines (Neo4j + vector databases + relational systems) improving contextual retrieval accuracy.',
      'Built NaviOwl CareGraph — enterprise-grade intelligent document assistant (React, Next.js, Python, FastAPI, Neo4j, FAISS, Neon) for healthcare analytics and legal CBA.',
      'Established Responsible AI controls: explainability, auditability, and governance readiness for regulated industry adoption.',
    ],
  },
  {
    id: 3,
    company: 'Zero State Inc',
    role: 'Principal Data Scientist — Full-Stack Quantum AI Builder',
    period: 'Jul 2025 – Jan 2026',
    location: 'Phoenix, Arizona, USA',
    type: null,
    dotColor: 'bg-blue-400',
    gradient: 'from-blue-500 to-indigo-500',
    typeBadge: null,
    achievements: [
      'Designed Quantum–AI early cancer detection framework identifying pre-mutational molecular signals before traditional diagnostics.',
      'Architected hybrid quantum–classical models using Hamiltonian representations and VQE/HHL-inspired optimisation validated on real 2–4 qubit quantum hardware.',
      'Modeled mutation hotspots in the p53 gene (V157, R158) using PDB protein structures, atomic mass computations, and charge distribution analysis.',
      'Co-developed Food Vector — quantum-inspired AI platform vectorising protein–compound interactions to rank natural molecules for mutated protein stabilisation.',
      'Automated 3D molecular structure modelling and electronic state vectorisation within a scalable vector search architecture.',
    ],
  },
  {
    id: 4,
    company: 'ESCRIBA',
    role: 'Lead Data Scientist & AI Engineering Lead',
    period: 'Jul 2023 – Dec 2025',
    location: 'Bengaluru, India',
    type: null,
    dotColor: 'bg-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    typeBadge: null,
    achievements: [
      'Built and scaled the enterprise AI function from inception — grew a 10-member global engineering team across Europe and India.',
      'Led benchmarking across AWS Bedrock, Azure ML, GCP Vertex AI, and Hugging Face — achieved 32% latency reduction, 28% cost optimisation, 37% performance gains.',
      'Engineered domain-optimised LLMs pre-trained on 1M+ contract documents (Bedrock + Databricks) achieving 92% Q&A accuracy and 89% summarisation accuracy.',
      'Reduced contract review cycle time by 65% and manual legal workload by 50% through automated AI workflows.',
      'Secured $1.8M in enterprise AI approvals through measurable ROI demonstrations across 10 enterprise AI programs.',
      'Pioneered Graph-RAG architecture (Neo4j + LangChain) improving contextual retrieval accuracy by 38% and reducing redundancy errors by 47%.',
    ],
  },
  {
    id: 5,
    company: 'Hewlett Packard Enterprise (HPE)',
    role: 'Engineering Program Manager / Senior Data Engineer / Data Architect',
    period: 'Dec 2010 – Sep 2020',
    location: 'Bengaluru, India',
    type: null,
    dotColor: 'bg-indigo-400',
    gradient: 'from-indigo-500 to-blue-500',
    typeBadge: null,
    achievements: [
      'Engineering Program Manager – HPE GreenLake (2019–2020): Led hybrid cloud platform across 20+ engineers — delivered 40% CAPEX-to-OPEX shift, 75% faster deployments, 85% downtime reduction, 40% higher IT productivity.',
      'Senior Data Engineer – PADL (2014–2018): Delivered enterprise-scale hybrid cloud and AI analytics platforms; reduced infrastructure over-provisioning by 40%, improved data reliability by 35%.',
      'Enterprise Data Architect – A&DM (2010–2014): Established enterprise data governance framework, metadata management, and compliance policies across HPE Analytics & Data Management.',
    ],
  },
  {
    id: 6,
    company: 'Previous Experience (2000 – 2010)',
    role: 'Various Leadership Roles in Data, Analytics & Software Engineering',
    period: '2000 – 2010',
    location: 'Bengaluru / Noida / Hyderabad, India',
    type: null,
    dotColor: 'bg-slate-400',
    gradient: 'from-slate-400 to-slate-300',
    typeBadge: null,
    achievements: [
      'Capgemini — Senior Consultant V / Data Architect  ·  Bengaluru  ·  Sep 2008 – Dec 2010',
      'HCL Technologies — Data Analytics Lead  ·  Noida  ·  Jul 2007 – Sep 2008',
      'C-DAC Noida — Project Associate (Sr. Software Developer)  ·  Jun 2004 – Jul 2007',
      'SQL Star International — Software Engineer  ·  Sep 2003 – May 2004',
      'ER&DCI — Project Associate (Software Developer)  ·  Jun 2000 – Sep 2003',
    ],
  },
]

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(index < 2)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div className={`absolute left-0 top-7 w-3.5 h-3.5 rounded-full ${exp.dotColor} shadow-lg ring-4 ring-slate-950`} />

      <div className="glass rounded-2xl p-5 sm:p-6 border border-slate-800/50 hover:border-slate-700/50 transition-colors">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-display font-bold text-white text-base sm:text-lg">{exp.company}</h3>
              {exp.type && (
                <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${exp.typeBadge}`}>
                  {exp.type}
                </span>
              )}
            </div>
            <p className={`text-sm font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
              {exp.role}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <Calendar size={11} />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              <MapPin size={11} />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[800px]' : 'max-h-[72px]'}`}>
          <ul className="space-y-2.5">
            {exp.achievements.map((ach, i) => (
              <li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${exp.dotColor} flex-shrink-0 opacity-80`} />
                <span className="leading-relaxed">{ach}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-xs transition-colors"
        >
          <ChevronDown
            size={13}
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
          {expanded ? 'Show less' : 'Show all achievements'}
        </button>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-blue-700/10 bottom-0 left-0" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium text-xs uppercase tracking-widest mb-3">Career Journey</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-title">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1.5 top-0 bottom-0 w-0.5 timeline-line rounded-full" />
          <div className="space-y-7">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
