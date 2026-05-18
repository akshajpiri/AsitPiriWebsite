'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function AnimatedCounter({ prefix = '', target, suffix = '', decimals = 0, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((target * eased).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [started, target, duration, decimals])

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  )
}

const stats = [
  {
    prefix: '',
    value: 25,
    suffix: '+',
    decimals: 0,
    label: 'Years of Experience',
    sub: 'Cross-industry AI leadership',
    gradient: 'from-blue-500 to-cyan-400',
    border: 'border-blue-500/20',
    glow: 'shadow-blue-500/10',
  },
  {
    prefix: '',
    value: 40,
    suffix: '%',
    decimals: 0,
    label: 'Operational Efficiency Gain',
    sub: 'Via multimodal AI automation',
    gradient: 'from-blue-600 to-sky-400',
    border: 'border-blue-600/20',
    glow: 'shadow-blue-600/10',
  },
  {
    prefix: '$',
    value: 1.8,
    suffix: 'M+',
    decimals: 1,
    label: 'AI Program Approvals',
    sub: 'In strategic enterprise AI',
    gradient: 'from-emerald-500 to-teal-400',
    border: 'border-emerald-500/20',
    glow: 'shadow-emerald-500/10',
  },
  {
    prefix: '',
    value: 92,
    suffix: '%',
    decimals: 0,
    label: 'LLM Q&A Accuracy',
    sub: 'On 1M+ document corpus',
    gradient: 'from-orange-500 to-amber-400',
    border: 'border-orange-500/20',
    glow: 'shadow-orange-500/10',
  },
]

export default function Stats() {
  return (
    <section className="py-14 bg-slate-900/40 border-y border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass rounded-2xl p-5 sm:p-6 border ${stat.border} shadow-xl ${stat.glow} hover:scale-[1.02] transition-transform duration-300`}
            >
              <p
                className={`font-display text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
              >
                <AnimatedCounter
                  prefix={stat.prefix}
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="text-white font-semibold text-sm mt-1.5">{stat.label}</p>
              <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
