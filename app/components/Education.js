'use client'
import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react'

const education = [
  {
    institution: 'Indian Institute of Science (IISc)',
    degree: 'PG Advanced Certification',
    field: 'Deep Learning & Computational Data Science',
    period: '2023 – 2025',
    Icon: GraduationCap,
    gradient: 'from-blue-500 to-cyan-500',
    border: 'border-blue-500/25',
    bg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    description:
      "Advanced certification from India's premier research institute, covering deep learning architectures, computational data science, and modern AI systems.",
  },
  {
    institution: 'Institute of Product Leadership',
    degree: 'Executive MBA + Executive PGDM',
    field: 'Business Analytics & Strategy',
    period: '2020 – 2023',
    Icon: GraduationCap,
    gradient: 'from-blue-700 to-sky-400',
    border: 'border-blue-700/25',
    bg: 'bg-blue-700/10',
    iconColor: 'text-sky-400',
    description:
      'Comprehensive executive education with focus on product leadership, data-driven strategy, and organizational transformation at the intersection of technology and business.',
  },
  {
    institution: 'Interaction Design Foundation',
    degree: 'UX Design Certification',
    field: 'User Experience & Product Design',
    period: 'Professional Development',
    Icon: Award,
    gradient: 'from-sky-500 to-blue-400',
    border: 'border-sky-500/25',
    bg: 'bg-sky-500/10',
    iconColor: 'text-sky-400',
    description:
      'Human-centered design principles, usability engineering, and intuitive UX for complex AI-driven enterprise products.',
  },
]

const certifications = [
  'Creative & Design Thinking',
  '20 Habits of Executive Leadership',
  'Developing Executive Presence',
  'The Three Pillars of Effective Leadership — Jeff Weiner',
  'Goal Setting: Objectives & Key Results (OKRs)',
  'Creating a Product-Centric Organization',
  'Successful Negotiation: Essential Strategies & Skills',
  'What to Do in the First 90 Days of Your New Job',
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900/30 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-blue-700/10 top-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium text-xs uppercase tracking-widest mb-3">Academic Background</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white section-title">
            Education &amp; Certifications
          </h2>
        </motion.div>

        {/* Education cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {education.map((edu, index) => {
            const Icon = edu.Icon
            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-slate-800/50 hover:border-slate-700/50 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl ${edu.bg} border ${edu.border} flex items-center justify-center mb-5`}>
                  <Icon size={21} className={edu.iconColor} />
                </div>
                <p className="text-slate-500 text-xs mb-1.5">{edu.period}</p>
                <h3 className="font-display font-bold text-white text-lg leading-snug mb-1">
                  {edu.institution}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent mb-1`}>
                  {edu.degree}
                </p>
                <p className="text-slate-400 text-sm mb-4">{edu.field}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{edu.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-7 border border-slate-800/50"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={19} className="text-blue-400" />
            <h3 className="font-display font-bold text-white text-lg">
              Leadership &amp; Professional Development
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-2.5 p-3.5 bg-slate-800/40 rounded-xl border border-slate-700/25"
              >
                <Star size={12} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-xs leading-relaxed">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
