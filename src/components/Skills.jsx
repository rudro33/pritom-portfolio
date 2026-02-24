import { useInView } from '../hooks'

const skills = [
  {
    name: 'React',
    color: '#61DAFB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'HTML5',
    color: '#E34F26',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    color: '#1572B6',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Tailwind CSS',
    color: '#06B6D4',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Git',
    color: '#F05032',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Node.js',
    color: '#339933',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Python',
    color: '#3776AB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'VS Code',
    color: '#007ACC',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
]

export default function Skills() {
  const [ref, isInView] = useInView()

  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-surface-secondary dark:bg-surface-secondary">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center">
          <span className="text-accent font-mono text-sm tracking-wider uppercase">Skills</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-content tracking-tight text-balance">
            Technologies I Work With
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-accent/40 rounded-full" aria-hidden="true" />
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className={`group relative flex flex-col items-center gap-4 p-6 rounded-2xl border border-border bg-surface/50 dark:bg-surface/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-xl cursor-default ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: `${idx * 80}ms`,
              }}
            >
              {/* Hover glow background */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `0 0 40px ${skill.color}15, inset 0 0 40px ${skill.color}08` }}
                aria-hidden="true"
              />

              <div className="relative w-14 h-14 flex items-center justify-center">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  crossOrigin="anonymous"
                />
              </div>

              <span className="relative text-sm font-medium text-content-secondary group-hover:text-content transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
