import { useInView } from '../hooks'
import { SectionHeader } from './About'
import { BriefcaseIcon } from './Icons'

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    companyUrl: '#',
    period: '2024 -- Present',
    description: 'Leading the frontend architecture for a SaaS platform serving 50K+ users. Driving performance optimizations that reduced load times by 40% and implementing accessible component systems.',
    tags: ['React', 'TypeScript', 'GraphQL', 'Storybook'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Wave Agency',
    companyUrl: '#',
    period: '2023 -- 2024',
    description: 'Built end-to-end web applications for diverse clients spanning e-commerce, healthcare, and fintech. Delivered 12+ production projects with a focus on scalability and maintainability.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    role: 'Frontend Developer',
    company: 'StartupHub',
    companyUrl: '#',
    period: '2022 -- 2023',
    description: 'Developed responsive, high-performance web interfaces for early-stage startups. Collaborated closely with designers to implement pixel-perfect UI components and smooth interactions.',
    tags: ['React', 'Tailwind CSS', 'Firebase', 'Figma'],
  },
  {
    role: 'Junior Web Developer',
    company: 'Freelance',
    companyUrl: '#',
    period: '2021 -- 2022',
    description: 'Started my professional journey building websites and web applications for local businesses. Gained hands-on experience with modern web technologies and client management.',
    tags: ['JavaScript', 'HTML/CSS', 'WordPress', 'PHP'],
  },
]

export default function Experience() {
  const [ref, isInView] = useInView()

  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-surface-secondary/50">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionHeader label="Experience" title="Where I've worked" />

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 md:pl-20"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/30 ring-4 ring-surface" aria-hidden="true" />

                <div className="p-6 rounded-2xl glass hover:border-border-hover transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-content">{exp.role}</h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-hover transition-colors text-sm font-medium"
                      >
                        {exp.company}
                      </a>
                    </div>
                    <span className="text-xs font-mono text-content-tertiary whitespace-nowrap flex items-center gap-2">
                      <BriefcaseIcon className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-content-secondary leading-relaxed">{exp.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono text-accent bg-accent-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
