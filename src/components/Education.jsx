import { useInView } from '../hooks'

const educationData = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Your University Name',
    period: '2022 -- Present',
    description: 'Focusing on algorithms, data structures, web development, and software engineering principles. Active member of the university coding club.',
    side: 'left',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Your College Name',
    period: '2019 -- 2021',
    description: 'Science group with a focus on mathematics and physics. Achieved excellent results and developed a strong analytical foundation.',
    side: 'right',
  },
]

export default function Education() {
  const [ref, isInView] = useInView()

  return (
    <section id="education" className="py-24 md:py-32 px-6 bg-surface dark:bg-surface">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center">
          <span className="text-accent font-mono text-sm tracking-wider uppercase">Education</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-content tracking-tight text-balance">
            Academic Background
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-accent/40 rounded-full" aria-hidden="true" />
        </div>

        <div className="mt-16 relative">
          {/* Animated center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border hidden md:block" aria-hidden="true">
            <div
              className={`absolute top-0 left-0 w-full bg-gradient-to-b from-accent to-accent/20 transition-all duration-1000 ease-out ${
                isInView ? 'h-full' : 'h-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            />
          </div>

          {/* Top dot */}
          <div className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/40 hidden md:block transition-all duration-500 ${isInView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} style={{ transitionDelay: '200ms' }} aria-hidden="true" />

          {/* Bottom dot */}
          <div className={`absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/40 hidden md:block transition-all duration-500 ${isInView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} style={{ transitionDelay: '800ms' }} aria-hidden="true" />

          <div className="flex flex-col gap-12 md:gap-0">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className={`relative md:w-1/2 ${
                  edu.side === 'left'
                    ? 'md:pr-12 md:self-start md:text-right'
                    : 'md:pl-12 md:self-end md:text-left'
                }`}
              >
                {/* Connector dot on center line */}
                <div
                  className={`absolute top-8 hidden md:block w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/40 transition-all duration-500 ${
                    isInView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  } ${
                    edu.side === 'left'
                      ? 'right-0 translate-x-[calc(50%+1.5rem)]'
                      : 'left-0 -translate-x-[calc(50%+1.5rem)]'
                  }`}
                  style={{ transitionDelay: `${400 + idx * 300}ms` }}
                  aria-hidden="true"
                />

                {/* Card with window-open animation */}
                <div
                  className={`p-6 rounded-2xl border border-border bg-surface-secondary/60 dark:bg-surface-secondary/60 backdrop-blur-sm hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 origin-top ${
                    isInView
                      ? 'opacity-100 scale-y-100'
                      : 'opacity-0 scale-y-0'
                  }`}
                  style={{ transitionDelay: `${400 + idx * 300}ms` }}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono text-accent bg-accent-muted mb-3">
                    {edu.period}
                  </span>
                  <h3 className="text-lg font-semibold text-content">{edu.degree}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{edu.institution}</p>
                  <p className="mt-3 text-sm text-content-secondary leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
