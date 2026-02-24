import { useState } from 'react'
import { useInView } from '../hooks'
import { SectionHeader } from './About'
import { SendIcon, MailIcon, MapPinIcon, GithubIcon, LinkedinIcon, TwitterIcon } from './Icons'

export default function Contact() {
  const [ref, isInView] = useInView()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-surface-secondary/50">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionHeader label="Contact" title="Let's work together" />

        <div className="mt-16 grid md:grid-cols-5 gap-12">
          {/* Info column */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <p className="text-content-secondary leading-relaxed">
              Got a project in mind or just want to chat? I{"'"}m always open to discussing new opportunities, creative ideas, or ways to bring your vision to life.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@pritom.dev"
                className="flex items-center gap-3 text-content-secondary hover:text-accent transition-colors group"
              >
                <div className="p-2.5 rounded-xl bg-accent-muted text-accent group-hover:bg-accent group-hover:text-surface transition-all">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-content-tertiary">Email</div>
                  <div className="text-sm text-content">hello@pritom.dev</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-content-secondary">
                <div className="p-2.5 rounded-xl bg-accent-muted text-accent">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-content-tertiary">Location</div>
                  <div className="text-sm text-content">Dhaka, Bangladesh</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-4">
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
          </div>

          {/* Form column */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-content-secondary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-surface-tertiary border border-border text-content text-sm placeholder:text-content-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-content-secondary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface-tertiary border border-border text-content text-sm placeholder:text-content-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-content-secondary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-surface-tertiary border border-border text-content text-sm placeholder:text-content-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className={`flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  submitted
                    ? 'bg-emerald-500 text-surface cursor-default'
                    : 'bg-accent text-surface hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/30'
                }`}
              >
                {submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <SendIcon className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
