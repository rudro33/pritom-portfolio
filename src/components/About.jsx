import { useInView } from '../hooks'
import { CodeIcon, MapPinIcon } from './Icons'

export default function About() {
  const [ref, isInView] = useInView()

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionHeader label="About" title="A bit about me" />

        <div className="mt-16 grid md:grid-cols-5 gap-12 items-start">
          {/* Left column - Photo placeholder & quick info */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="aspect-square rounded-2xl bg-surface-secondary border border-border overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <CodeIcon className="w-16 h-16 text-accent/40 mx-auto" />
                  <p className="mt-4 text-content-tertiary text-sm font-mono">developer.jpg</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-content-secondary text-sm">
                <MapPinIcon className="w-4 h-4 text-accent" />
                <span>Based in Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-content-secondary text-sm">
                <CodeIcon className="w-4 h-4 text-accent" />
                <span>3+ years of experience</span>
              </div>
            </div>
          </div>

          {/* Right column - Bio */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <p className="text-lg text-content leading-relaxed">
              I{"'"}m a passionate full-stack developer who loves turning complex problems into elegant, user-centric solutions. My journey in tech started with curiosity about how things work on the web, and that curiosity has only grown stronger over the years.
            </p>
            <p className="text-content-secondary leading-relaxed">
              I specialize in building modern web applications with React and Node.js, with a deep focus on performance, accessibility, and clean architecture. I believe great software is not just about writing code -- it{"'"}s about crafting experiences that make people{"'"}s lives easier.
            </p>
            <p className="text-content-secondary leading-relaxed">
              When I{"'"}m not coding, you{"'"}ll find me exploring new technologies, contributing to open-source projects, or diving into a good book about software design patterns and system architecture.
            </p>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 gap-6">
              {[
                { value: '30+', label: 'Projects Completed' },
                { value: '3+', label: 'Years Experience' },
                { value: '15+', label: 'Happy Clients' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-surface-secondary border border-border">
                  <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-xs text-content-tertiary mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({ label, title }) {
  return (
    <div className="text-center">
      <span className="text-accent font-mono text-sm tracking-wider uppercase">{label}</span>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-content tracking-tight text-balance">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-0.5 bg-accent/40 rounded-full" aria-hidden="true" />
    </div>
  )
}
