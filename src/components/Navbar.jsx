import { useState, useEffect } from 'react'
import { useActiveSection, useDarkMode } from '../hooks'
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from './Icons'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection()
  const [isDark, toggleDark] = useDarkMode()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleClick = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 dark:bg-surface/80 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-border'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleClick('hero') }}
          className="text-lg font-bold tracking-tight transition-colors text-content hover:text-accent"
        >
          {'<PM />'}
        </a>

        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); handleClick(link.id) }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.id
                      ? 'text-accent bg-accent-muted'
                      : 'text-content-secondary hover:text-content hover:bg-surface-elevated dark:hover:bg-surface-tertiary'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleDark}
            className="ml-3 p-2 rounded-lg text-content-secondary hover:text-accent hover:bg-accent-muted transition-all duration-200"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg text-content-secondary hover:text-accent transition-colors"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
          </button>
          <button
            className="p-2 rounded-lg text-content-secondary hover:text-content transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-surface/95 dark:bg-surface/95 backdrop-blur-xl border-t border-border" role="dialog" aria-label="Mobile navigation">
          <ul className="px-6 py-4 flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); handleClick(link.id) }}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.id
                      ? 'text-accent bg-accent-muted'
                      : 'text-content-secondary hover:text-content hover:bg-surface-elevated dark:hover:bg-surface-tertiary'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
