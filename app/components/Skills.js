'use client'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'AI/ML & Generative AI',
    gradient: 'from-blue-500 to-cyan-500',
    border: 'border-blue-500/25',
    bg: 'bg-blue-500/10',
    textColor: 'text-blue-300',
    skills: [
      'Generative AI', 'Agentic AI', 'Graph-RAG', 'Deep Learning',
      'NLP', 'Transformer Architectures', 'Reinforcement Learning', 'Multi-Agent Systems (A2A)',
    ],
  },
  {
    title: 'LLMOps & Governance',
    gradient: 'from-blue-700 to-sky-400',
    border: 'border-blue-700/25',
    bg: 'bg-blue-700/10',
    textColor: 'text-sky-300',
    skills: [
      'Model Evaluation & Benchmarking', 'Prompt Engineering', 'Fine-tuning',
      'RAG Pipelines', 'Responsible AI', 'AI Lifecycle Management', 'MCP Frameworks',
    ],
  },
  {
    title: 'Cloud Platforms',
    gradient: 'from-orange-500 to-amber-500',
    border: 'border-orange-500/25',
    bg: 'bg-orange-500/10',
    textColor: 'text-orange-300',
    skills: [
      'AWS Bedrock', 'AWS SageMaker', 'AWS EKS', 'Azure ML',
      'GCP Vertex AI', 'Hugging Face Ecosystem',
    ],
  },
  {
    title: 'Databases & Storage',
    gradient: 'from-emerald-500 to-teal-500',
    border: 'border-emerald-500/25',
    bg: 'bg-emerald-500/10',
    textColor: 'text-emerald-300',
    skills: [
      'Neo4j (Graph)', 'FAISS', 'Pinecone', 'Weaviate',
      'PostgreSQL', 'MySQL', 'MongoDB', 'Neon',
    ],
  },
  {
    title: 'Backend & Data Engineering',
    gradient: 'from-indigo-500 to-blue-500',
    border: 'border-indigo-500/25',
    bg: 'bg-indigo-500/10',
    textColor: 'text-indigo-300',
    skills: [
      'Python', 'FastAPI', 'REST APIs', 'Microservices',
      'Apache Spark', 'Hadoop', 'ETL/ELT Pipelines', 'Distributed Processing',
    ],
  },
  {
    title: 'Frontend / Full-Stack',
    gradient: 'from-blue-500 to-sky-300',
    border: 'border-blue-500/25',
    bg: 'bg-blue-500/10',
    textColor: 'text-blue-300',
    skills: ['React.js', 'Next.js', 'Streamlit', 'Docker', 'REST / GraphQL'],
  },
  {
    title: 'Quantum Computing',
    gradient: 'from-cyan-500 to-teal-500',
    border: 'border-cyan-500/25',
    bg: 'bg-cyan-500/10',
    textColor: 'text-cyan-300',
    skills: [
      'Quantum–Classical Hybrid Models', 'VQE / HHL', 'Qiskit',
      'Hamiltonian Representations', 'Molecular Simulation',
    ],
  },
  {
    title: 'MLOps & DevOps',
    gradient: 'from-slate-400 to-slate-300',
    border: 'border-slate-500/25',
    bg: 'bg-slate-500/10',
    textColor: 'text-slate-300',
    skills: [
      'MLflow', 'Prometheus', 'Grafana', 'Terraform',
      'GitHub Actions', 'CI/CD', 'LangChain', 'Docker',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="orb w-[350px] h-[350px] bg-blue-700/10 top-1/2 -left-20 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium text-xs uppercase tracking-widest mb-3">Technical Expertise</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-title">
            Skills &amp; Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.06 }}
              className={`glass rounded-2xl p-5 border ${cat.border}`}
            >
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${cat.bg} border ${cat.border} ${cat.textColor} mb-4`}>
                {cat.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.04 + i * 0.03 }}
                    className="skill-tag text-xs px-2.5 py-1.5 bg-slate-800/60 border border-slate-700/40 text-slate-300 rounded-lg"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
