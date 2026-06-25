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
    dotColor: '#0071e3',
    roleGradient: 'linear-gradient(90deg, #0071e3, #5ac8fa)',
    typeBg: '#ebf3ff',
    typeColor: '#0071e3',
    typeBorder: '#0071e3',
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
    company: 'ESCRIBA',
    role: 'Lead Data Scientist & AI Engineering Lead',
    period: 'Jul 2023 – Dec 2025',
    location: 'Bengaluru, India',
    type: null,
    dotColor: '#0071e3',
    roleGradient: 'linear-gradient(90deg, #0071e3, #5ac8fa)',
    typeBg: null,
    typeColor: null,
    typeBorder: null,
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
    id: 3,
    company: 'Hewlett Packard Enterprise (HPE)',
    role: 'Engineering Program Manager / Senior Data Engineer / Data Architect',
    period: 'Dec 2010 – Sep 2020',
    location: 'Bengaluru, India',
    type: null,
    dotColor: '#aeaeb2',
    roleGradient: 'linear-gradient(90deg, #636366, #aeaeb2)',
    typeBg: null,
    typeColor: null,
    typeBorder: null,
    achievements: [
      'Engineering Program Manager – HPE GreenLake (2019–2020): Led hybrid cloud platform across 20+ engineers — delivered 40% CAPEX-to-OPEX shift, 75% faster deployments, 85% downtime reduction, 40% higher IT productivity.',
      'Senior Data Engineer – PADL (2014–2018): Delivered enterprise-scale hybrid cloud and AI analytics platforms; reduced infrastructure over-provisioning by 40%, improved data reliability by 35%.',
      'Enterprise Data Architect – A&DM (2010–2014): Established enterprise data governance framework, metadata management, and compliance policies across HPE Analytics & Data Management.',
    ],
  },
  {
    id: 4,
    company: 'Previous Experience (2000 – 2010)',
    role: 'Various Leadership Roles in Data, Analytics & Software Engineering',
    period: '2000 – 2010',
    location: 'Bengaluru / Noida / Hyderabad, India',
    type: null,
    dotColor: '#d1d1d6',
    roleGradient: 'linear-gradient(90deg, #aeaeb2, #d1d1d6)',
    typeBg: null,
    typeColor: null,
    typeBorder: null,
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="relative pl-9"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-7 w-3 h-3 rounded-full ring-4 ring-[#f5f5f7]"
        style={{ background: exp.dotColor }}
      />

      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-black/[0.06] shadow-apple hover:shadow-apple-md transition-shadow duration-300">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-bold text-[#1d1d1f] text-[15px] sm:text-[17px] tracking-tight">{exp.company}</h3>
              {exp.type && (
                <span
                  className="text-[11px] px-2.5 py-0.5 rounded-full border font-medium"
                  style={{
                    background: exp.typeBg,
                    color: exp.typeColor,
                    borderColor: `${exp.typeBorder}30`,
                  }}
                >
                  {exp.type}
                </span>
              )}
            </div>
            <p
              className="text-[13px] font-semibold"
              style={{
                background: exp.roleGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {exp.role}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <div className="flex items-center gap-1.5 text-[#86868b] text-[11px]">
              <Calendar size={10} />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#aeaeb2] text-[11px]">
              <MapPin size={10} />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[800px]' : 'max-h-[72px]'}`}>
          <ul className="space-y-2.5">
            {exp.achievements.map((ach, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[#6e6e73] text-[13px]">
                <span
                  className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: exp.dotColor, opacity: 0.7 }}
                />
                <span className="leading-relaxed">{ach}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1.5 text-[#aeaeb2] hover:text-[#6e6e73] text-[12px] transition-colors"
        >
          <ChevronDown
            size={12}
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
    <section id="experience" className="py-28 bg-[#f5f5f7] relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-[#0071e3]/[0.04] bottom-0 left-0" />
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#0071e3] font-semibold text-[12px] uppercase tracking-widest mb-3">Career Journey</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight section-title">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[5px] top-0 bottom-0 w-px timeline-line" />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
