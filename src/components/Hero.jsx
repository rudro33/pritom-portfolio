import { useInView } from '../hooks'
import { ArrowDownIcon, GithubIcon, LinkedinIcon, FacebookIcon } from './Icons'

export default function Hero() {
  const [ref, isInView] = useInView()

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-b from-surface via-surface-secondary to-surface dark:from-surface dark:via-surface-secondary dark:to-surface"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-pulse-glow pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-[100px] animate-pulse-glow pointer-events-none" style={{ animationDelay: '1.5s' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" aria-hidden="true" />

      <div className={`relative flex flex-col items-center text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Profile photo with blue glow */}
        <div className="relative mb-8 animate-float">
          <div className="absolute inset-0 rounded-full bg-accent/30 blur-2xl scale-110" aria-hidden="true" />
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-accent/40 shadow-lg shadow-accent/20">
            <img
              src="/logo.png"
              alt="Pritom Majumder"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.classList.add('bg-gradient-to-br', 'from-accent/20', 'to-surface-elevated', 'flex', 'items-center', 'justify-center')
                const span = document.createElement('span')
                span.textContent = 'PM'
                span.className = 'text-4xl font-bold text-accent'
                e.target.parentElement.appendChild(span)
              }}
            />
          </div>
        </div>

        {/* Name and title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-balance text-content">
          Pritom{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
            Majumder
          </span>
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light text-content-secondary tracking-wide">
          Computer Science Student & Frontend Developer
        </p>

        <p className="mt-5 text-base text-content-tertiary max-w-lg mx-auto leading-relaxed text-pretty">
          Passionate about creating beautiful, responsive, and user-friendly web experiences with clean code and modern technologies.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-8 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-8 py-3.5 rounded-xl font-medium text-sm border border-border text-content hover:border-accent/40 hover:bg-accent-muted transition-all duration-200 bg-surface-secondary/50 backdrop-blur-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="mt-10 flex items-center justify-center gap-4">
          {[
            { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
            { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl text-content-tertiary hover:text-accent transition-all duration-300"
              aria-label={social.label}
            >
              <div className="absolute inset-0 rounded-xl bg-accent/0 group-hover:bg-accent-muted group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300" aria-hidden="true" />
              <social.icon className="w-5 h-5 relative z-10" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#skills"
            onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="flex flex-col items-center gap-2 text-content-tertiary hover:text-accent transition-colors"
            aria-label="Scroll to Skills section"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
            <ArrowDownIcon className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
