import { useState } from 'react'
import { useInView } from '../hooks'
import { ExternalLinkIcon, GithubIcon } from './Icons'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product management, cart functionality, and a clean responsive interface.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    accent: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Task Management App',
    description: 'Real-time collaborative task board with drag-and-drop, team workspaces, and activity tracking.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts.',
    tags: ['React', 'REST API', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
    accent: 'from-orange-500/20 to-amber-500/20',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern personal portfolio built with React and Tailwind CSS featuring smooth animations and dark mode.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    liveUrl: '#',
    githubUrl: '#',
    accent: 'from-indigo-500/20 to-blue-500/20',
  },
]

export default function Projects() {
  const [ref, isInView] = useInView()
  const [activeIndex, setActiveIndex] = useState(0)

  const handleCardClick = (idx) => {
    setActiveIndex(idx)
  }

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-surface-secondary dark:bg-surface-secondary">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center">
          <span className="text-accent font-mono text-sm tracking-wider uppercase">Projects</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-content tracking-tight text-balance">
            Selected Work
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-accent/40 rounded-full" aria-hidden="true" />
        </div>

        {/* Stacked cards view */}
        <div className="mt-16 relative flex items-center justify-center" style={{ minHeight: '420px' }}>
          {projects.map((project, idx) => {
            const isActive = idx === activeIndex
            const offset = idx - activeIndex
            const absOffset = Math.abs(offset)

            return (
              <div
                key={project.title}
                onClick={() => handleCardClick(idx)}
                className={`absolute w-full max-w-lg cursor-pointer transition-all duration-500 ease-out ${
                  isActive ? 'z-40' : absOffset === 1 ? 'z-30' : absOffset === 2 ? 'z-20' : 'z-10'
                }`}
                style={{
                  transform: isActive
                    ? 'translateY(0) scale(1)'
                    : `translateY(${offset * 20}px) scale(${1 - absOffset * 0.05})`,
                  opacity: isActive ? 1 : Math.max(0.3, 1 - absOffset * 0.25),
                  filter: isActive ? 'none' : `blur(${absOffset * 1}px)`,
                }}
                role="button"
                tabIndex={0}
                aria-label={`View project: ${project.title}`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick(idx) }}
              >
                <div className={`rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-300 ${
                  isActive
                    ? 'border-accent/30 shadow-2xl shadow-accent/10 bg-surface/80 dark:bg-surface/80'
                    : 'border-border bg-surface-secondary/80 dark:bg-surface-secondary/80'
                }`}>
                  {/* Card header gradient */}
                  <div className={`h-32 bg-gradient-to-br ${project.accent} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-black text-white/10 font-mono">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-content">{project.title}</h3>
                    <p className="mt-2 text-sm text-content-secondary leading-relaxed">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-mono text-accent bg-accent-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {isActive && (
                      <div className="mt-5 flex items-center gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent-hover transition-all shadow-lg shadow-accent/20"
                        >
                          <ExternalLinkIcon className="w-3.5 h-3.5" />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-content text-xs font-semibold hover:border-accent/40 hover:bg-accent-muted transition-all"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          Source Code
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Card indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleCardClick(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'bg-accent w-8 shadow-lg shadow-accent/30'
                  : 'bg-content-tertiary/30 hover:bg-content-tertiary/60'
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
