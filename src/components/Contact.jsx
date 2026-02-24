import { useState } from 'react'
import { useInView } from '../hooks'
import { SendIcon, MailIcon, MapPinIcon, GithubIcon, LinkedinIcon, FacebookIcon } from './Icons'

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

  const socials = [
    { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
  ]

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-surface dark:bg-surface">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center">
          <span className="text-accent font-mono text-sm tracking-wider uppercase">Contact</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-content tracking-tight text-balance">
            Get In Touch
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-accent/40 rounded-full" aria-hidden="true" />
          <p className="mt-6 text-content-secondary max-w-md mx-auto leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-5 gap-12">
          {/* Info column */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <a
              href="mailto:hello@pritom.dev"
              className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-accent/30 bg-surface-secondary/50 dark:bg-surface-secondary/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="p-2.5 rounded-lg bg-accent-muted text-accent group-hover:bg-accent group-hover:text-white transition-all">
                <MailIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-content-tertiary">Email</div>
                <div className="text-sm text-content font-medium">hello@pritom.dev</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface-secondary/50 dark:bg-surface-secondary/50 backdrop-blur-sm">
              <div className="p-2.5 rounded-lg bg-accent-muted text-accent">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-content-tertiary">Location</div>
                <div className="text-sm text-content font-medium">Dhaka, Bangladesh</div>
              </div>
            </div>

            {/* Social icons with hover glow */}
            <div className="flex items-center gap-3 mt-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl text-content-tertiary hover:text-accent transition-all duration-300"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 rounded-xl bg-accent/0 group-hover:bg-accent-muted group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300" aria-hidden="true" />
                  <social.icon className="w-5 h-5 relative z-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-content-secondary mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-surface-secondary dark:bg-surface-secondary border border-border text-content text-sm placeholder:text-content-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-content-secondary mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface-secondary dark:bg-surface-secondary border border-border text-content text-sm placeholder:text-content-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-content-secondary mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-surface-secondary dark:bg-surface-secondary border border-border text-content text-sm placeholder:text-content-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className={`flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  submitted
                    ? 'bg-emerald-500 text-white cursor-default shadow-lg shadow-emerald-500/20'
                    : 'bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5'
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
