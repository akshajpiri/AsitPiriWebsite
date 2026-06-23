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
    accent: '#0071e3',
    bg: '#ebf3ff',
    description:
      "Advanced certification from India's premier research institute, covering deep learning architectures, computational data science, and modern AI systems.",
  },
  {
    institution: 'Institute of Product Leadership',
    degree: 'Executive MBA + Executive PGDM',
    field: 'Business Analytics & Strategy',
    period: '2020 – 2023',
    Icon: GraduationCap,
    accent: '#5ac8fa',
    bg: '#eaf8ff',
    description:
      'Comprehensive executive education with focus on product leadership, data-driven strategy, and organizational transformation at the intersection of technology and business.',
  },
  {
    institution: 'Interaction Design Foundation',
    degree: 'UX Design Certification',
    field: 'User Experience & Product Design',
    period: 'Professional Development',
    Icon: Award,
    accent: '#7b61ff',
    bg: '#f2f0ff',
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
    <section id="education" className="py-28 bg-white relative overflow-hidden">
      <div className="orb w-[450px] h-[450px] bg-[#5ac8fa]/[0.04] top-0 right-0" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#0071e3] font-semibold text-[12px] uppercase tracking-widest mb-3">Academic Background</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight section-title">
            Education &amp; Certifications
          </h2>
        </motion.div>

        {/* Education cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {education.map((edu, index) => {
            const Icon = edu.Icon
            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-black/[0.06] shadow-apple hover:shadow-apple-md transition-shadow duration-300"
              >
                {/* Top accent bar */}
                <div
                  className="w-full h-0.5 rounded-full mb-5 -mx-0 opacity-60"
                  style={{ background: `linear-gradient(90deg, ${edu.accent}, transparent)` }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: edu.bg }}
                >
                  <Icon size={19} style={{ color: edu.accent }} />
                </div>
                <p className="text-[#aeaeb2] text-[11px] font-medium mb-2">{edu.period}</p>
                <h3 className="font-bold text-[#1d1d1f] text-[16px] leading-snug mb-1.5 tracking-tight">
                  {edu.institution}
                </h3>
                <p className="text-[13px] font-semibold mb-1" style={{ color: edu.accent }}>
                  {edu.degree}
                </p>
                <p className="text-[#6e6e73] text-[13px] mb-4">{edu.field}</p>
                <p className="text-[#86868b] text-[12px] leading-relaxed">{edu.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-7 border border-black/[0.06] shadow-apple"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-[#ebf3ff] flex items-center justify-center">
              <BookOpen size={15} className="text-[#0071e3]" />
            </div>
            <h3 className="font-bold text-[#1d1d1f] text-[15px] tracking-tight">
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
                className="flex items-start gap-2.5 p-3.5 bg-[#f5f5f7] rounded-xl border border-black/[0.04] hover:bg-[#ebf3ff] hover:border-[#0071e3]/10 transition-colors duration-200"
              >
                <Star size={11} className="text-[#0071e3] mt-0.5 flex-shrink-0" />
                <span className="text-[#3a3a3c] text-[12px] leading-relaxed">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
