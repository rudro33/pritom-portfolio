import { useInView } from '../hooks'
import { SectionHeader } from './About'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'Redux', level: 80 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Firebase', level: 75 },
    ],
  },
]

export default function Skills() {
  const [ref, isInView] = useInView()

  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-surface-secondary/50">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionHeader label="Skills" title="Technologies I work with" />

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl glass hover:border-border-hover transition-all duration-300"
              style={{ transitionDelay: `${catIdx * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-content mb-6">{category.title}</h3>
              <div className="flex flex-col gap-5">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} animate={isInView} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillBar({ name, level, animate }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-content-secondary">{name}</span>
        <span className="text-xs font-mono text-content-tertiary">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-surface-tertiary overflow-hidden">
        <div
          className="h-full rounded-full bg-accent transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}
