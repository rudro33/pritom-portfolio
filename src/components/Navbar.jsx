import { useState, useEffect } from 'react'
import { DownloadIcon } from './Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gradient-to-r from-black via-[#050a18] to-[#0a1628] shadow-lg shadow-accent/10 border-b border-accent/10'
          : 'bg-gradient-to-r from-black via-[#050a18] to-[#0a1628]'
      }`}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Left: Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="group relative flex items-center"
          aria-label="Go to top"
        >
          <div className="relative">
            {/* Glow behind logo on hover */}
            <div className="absolute -inset-2 rounded-full bg-accent/0 group-hover:bg-accent/20 blur-xl transition-all duration-500 group-hover:scale-110" />
            <img
              src="/logo.png"
              alt="Pritom Majumder logo"
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-accent/50 transform group-hover:scale-110 transition-all duration-300"
            />
          </div>
        </a>

        {/* Right: CV Button */}
        <a
          href="/Pritom_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300
            bg-accent/10 text-accent border border-accent/30
            hover:bg-accent hover:text-white hover:border-accent hover:shadow-lg hover:shadow-accent/25
            active:scale-95"
        >
          {/* Shine sweep on hover */}
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <DownloadIcon className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0" />
          <span className="relative z-10">CV</span>
        </a>
      </nav>
    </header>
  )
}
