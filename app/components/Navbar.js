'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-[20px] border-b border-black/[0.08]'
          : 'bg-transparent'
      }`}
      style={{ WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[52px]">

          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-[10px] bg-[#0071e3] flex items-center justify-center text-white font-semibold text-xs tracking-tight shadow-apple-sm group-hover:bg-[#0077ed] transition-colors">
              AP
            </div>
            <span className="font-semibold text-[#1d1d1f] text-[14px] hidden sm:block tracking-tight">
              Asit Piri
            </span>
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200 rounded-lg hover:bg-black/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1.5 text-[#6e6e73] hover:text-[#1d1d1f] transition-colors rounded-lg hover:bg-black/[0.04]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-[20px] border-b border-black/[0.06]">
          <div className="px-5 py-4 space-y-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 text-[14px] text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/[0.04] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

          </div>
        </div>
      )}
    </nav>
  )
}
