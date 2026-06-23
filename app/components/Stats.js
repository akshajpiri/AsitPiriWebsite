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
    accent: '#0071e3',
    bg: '#ebf3ff',
  },
  {
    prefix: '',
    value: 40,
    suffix: '%',
    decimals: 0,
    label: 'Operational Efficiency Gain',
    sub: 'Via multimodal AI automation',
    accent: '#0071e3',
    bg: '#ebf3ff',
  },
  {
    prefix: '$',
    value: 1.8,
    suffix: 'M+',
    decimals: 1,
    label: 'AI Program Approvals',
    sub: 'In strategic enterprise AI',
    accent: '#34c759',
    bg: '#f0faf4',
  },
  {
    prefix: '',
    value: 92,
    suffix: '%',
    decimals: 0,
    label: 'LLM Q&A Accuracy',
    sub: 'On 1M+ document corpus',
    accent: '#ff9f0a',
    bg: '#fff8eb',
  },
]

export default function Stats() {
  return (
    <section className="py-16 bg-[#f5f5f7] border-y border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-black/[0.06] shadow-apple hover:shadow-apple-md transition-shadow duration-300"
            >
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                style={{ background: stat.bg }}
              >
                <span className="text-xl font-bold" style={{ color: stat.accent }}>
                  {stat.prefix || stat.suffix.charAt(0)}
                </span>
              </div>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: stat.accent }}>
                <AnimatedCounter
                  prefix={stat.prefix}
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="text-[#1d1d1f] font-semibold text-[13px] mt-1.5 leading-snug">{stat.label}</p>
              <p className="text-[#86868b] text-[12px] mt-0.5 leading-relaxed">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
