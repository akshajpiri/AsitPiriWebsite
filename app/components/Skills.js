'use client'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'AI/ML & Generative AI',
    accent: '#0071e3',
    bg: '#ebf3ff',
    skills: [
      'Generative AI', 'Agentic AI', 'Graph-RAG', 'Deep Learning',
      'NLP', 'Transformer Architectures', 'Reinforcement Learning', 'Multi-Agent Systems (A2A)',
    ],
  },
  {
    title: 'LLMOps & Governance',
    accent: '#5ac8fa',
    bg: '#eaf8ff',
    skills: [
      'Model Evaluation & Benchmarking', 'Prompt Engineering', 'Fine-tuning',
      'RAG Pipelines', 'Responsible AI', 'AI Lifecycle Management', 'MCP Frameworks',
    ],
  },
  {
    title: 'Cloud Platforms',
    accent: '#ff9f0a',
    bg: '#fff8eb',
    skills: [
      'AWS Bedrock', 'AWS SageMaker', 'AWS EKS', 'Azure ML',
      'GCP Vertex AI', 'Hugging Face Ecosystem',
    ],
  },
  {
    title: 'Databases & Storage',
    accent: '#34c759',
    bg: '#f0faf4',
    skills: [
      'Neo4j (Graph)', 'FAISS', 'Pinecone', 'Weaviate',
      'PostgreSQL', 'MySQL', 'MongoDB', 'Neon',
    ],
  },
  {
    title: 'Backend & Data Engineering',
    accent: '#7b61ff',
    bg: '#f2f0ff',
    skills: [
      'Python', 'FastAPI', 'REST APIs', 'Microservices',
      'Apache Spark', 'Hadoop', 'ETL/ELT Pipelines', 'Distributed Processing',
    ],
  },
  {
    title: 'Frontend / Full-Stack',
    accent: '#0071e3',
    bg: '#ebf3ff',
    skills: ['React.js', 'Next.js', 'Streamlit', 'Docker', 'REST / GraphQL'],
  },
  {
    title: 'Quantum Computing',
    accent: '#5ac8fa',
    bg: '#eaf8ff',
    skills: [
      'Quantum–Classical Hybrid Models', 'VQE / HHL', 'Qiskit',
      'Hamiltonian Representations', 'Molecular Simulation',
    ],
  },
  {
    title: 'MLOps & DevOps',
    accent: '#636366',
    bg: '#f5f5f7',
    skills: [
      'MLflow', 'Prometheus', 'Grafana', 'Terraform',
      'GitHub Actions', 'CI/CD', 'LangChain', 'Docker',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#f5f5f7] relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-[#0071e3]/[0.04] top-1/2 -left-32 -translate-y-1/2" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#0071e3] font-semibold text-[12px] uppercase tracking-widest mb-3">Technical Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight section-title">
            Skills &amp; Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.06 }}
              className="bg-white rounded-2xl p-5 border border-black/[0.06] shadow-apple hover:shadow-apple-md transition-shadow duration-300"
            >
              {/* Category accent bar */}
              <div
                className="w-8 h-1 rounded-full mb-4"
                style={{ background: cat.accent }}
              />
              <h3
                className="text-[12px] font-semibold mb-4 tracking-tight"
                style={{ color: cat.accent }}
              >
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.04 + i * 0.03 }}
                    className="skill-tag text-[12px] px-2.5 py-1 bg-[#f5f5f7] text-[#3a3a3c] rounded-lg border border-black/[0.05] hover:border-black/[0.1] transition-all"
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
