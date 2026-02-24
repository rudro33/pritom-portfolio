import { useInView } from '../hooks'
import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon } from './Icons'

export default function Hero() {
  const [ref, isInView] = useInView()

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[128px] animate-pulse-glow pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

      <div className={`relative max-w-3xl text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm text-content-secondary">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          Available for work
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-content tracking-tight leading-tight text-balance">
          Hi, I{"'"}m{' '}
          <span className="text-accent">Pritom</span>
          <br />
          <span className="text-content-secondary font-light text-3xl sm:text-4xl md:text-5xl mt-2 block">
            Full Stack Developer
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-content-secondary max-w-xl mx-auto leading-relaxed text-pretty">
          I craft thoughtful digital experiences at the intersection of design and engineering, building applications that are performant, accessible, and delightful to use.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-8 py-3.5 rounded-xl bg-accent text-surface font-semibold text-sm hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-8 py-3.5 rounded-xl glass text-content font-medium text-sm hover:bg-surface-elevated transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {[
            { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
            { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: TwitterIcon, href: 'https://x.com', label: 'X / Twitter' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-content-tertiary hover:text-accent hover:bg-accent-muted transition-all duration-200"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="flex flex-col items-center gap-2 text-content-tertiary hover:text-accent transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
            <ArrowDownIcon className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
