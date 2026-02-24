import { useState } from 'react'
import { useInView } from '../hooks'
import { SectionHeader } from './About'
import { ExternalLinkIcon, GithubIcon } from './Icons'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product management, cart functionality, Stripe payments, and admin dashboard. Built with a focus on performance and conversion optimization.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'fullstack',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'Real-time collaborative task board with drag-and-drop, team workspaces, and activity tracking. Supports real-time sync across multiple users.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    category: 'frontend',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Chat Interface',
    description: 'Modern chat application powered by AI with streaming responses, conversation history, and customizable AI personas. Clean, responsive interface.',
    tags: ['React', 'Node.js', 'OpenAI', 'WebSockets'],
    category: 'fullstack',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and severe weather alerts. Pulls data from multiple meteorological APIs.',
    tags: ['React', 'REST API', 'Chart.js'],
    category: 'frontend',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Blog CMS',
    description: 'Headless content management system with markdown editor, image optimization, SEO tools, and role-based access control for multi-author blogs.',
    tags: ['Node.js', 'PostgreSQL', 'Express'],
    category: 'backend',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Generator',
    description: 'CLI tool that scaffolds customizable portfolio websites from templates. Includes multiple themes, deployment scripts, and CMS integration.',
    tags: ['Node.js', 'CLI', 'Handlebars'],
    category: 'backend',
    liveUrl: '#',
    githubUrl: '#',
  },
]

const filters = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'fullstack', label: 'Full Stack' },
]

export default function Projects() {
  const [ref, isInView] = useInView()
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionHeader label="Projects" title="Selected work" />

        {/* Filters */}
        <div className="mt-12 flex items-center justify-center gap-2 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-accent text-surface'
                  : 'glass text-content-secondary hover:text-content hover:bg-surface-elevated'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article
      className="group rounded-2xl glass hover:border-border-hover transition-all duration-300 overflow-hidden flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Card image area */}
      <div className="h-48 bg-surface-tertiary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
          <div className="text-5xl font-bold text-accent/20 font-mono">{String(index + 1).padStart(2, '0')}</div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-surface/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-accent text-surface hover:bg-accent-hover transition-colors"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLinkIcon className="w-5 h-5" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass text-content hover:bg-surface-elevated transition-colors"
            aria-label={`View source code of ${project.title}`}
          >
            <GithubIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-content group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-content-secondary leading-relaxed flex-1">
          {project.description}
        </p>
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
      </div>
    </article>
  )
}
