import { useState } from 'react'
import { useInView } from '../hooks'
import { SectionHeader } from './About'
import { QuoteIcon, StarIcon } from './Icons'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager at TechCorp',
    content: 'Pritom is an exceptional developer who consistently delivers high-quality work. His attention to detail and ability to translate complex requirements into elegant solutions makes him invaluable to any team.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO at StartupHub',
    content: 'Working with Pritom was a game-changer for our team. He brought deep technical expertise paired with a genuine understanding of user experience. Our product quality improved dramatically.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Design Lead at Digital Wave',
    content: 'Rare to find a developer who truly understands design. Pritom bridges the gap between design and engineering beautifully, always ensuring the final product matches the original vision.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Founder at LaunchPad',
    content: 'Pritom built our entire MVP in record time without cutting corners. His code is clean, well-documented, and scalable. He is my go-to recommendation for anyone needing a skilled developer.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [ref, isInView] = useInView()
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionHeader label="Testimonials" title="What people say" />

        {/* Testimonial cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                activeIdx === idx
                  ? 'glass border-accent/20 shadow-lg shadow-accent/5'
                  : 'glass hover:border-border-hover'
              }`}
            >
              <QuoteIcon className={`w-8 h-8 mb-4 transition-colors ${activeIdx === idx ? 'text-accent' : 'text-content-tertiary'}`} />
              <p className="text-content-secondary leading-relaxed text-sm">
                {'"'}{t.content}{'"'}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-content">{t.name}</div>
                  <div className="text-xs text-content-tertiary mt-0.5">{t.role}</div>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} className="w-3.5 h-3.5 text-amber-400" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
