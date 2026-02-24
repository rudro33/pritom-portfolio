import { GithubIcon, LinkedinIcon, FacebookIcon } from './Icons'

const footerLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
]

export default function Footer() {
  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border py-12 px-6 bg-surface-secondary dark:bg-surface-secondary" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleClick('hero') }}
            className="text-lg font-bold text-content tracking-tight hover:text-accent transition-colors"
          >
            {'<PM />'}
          </a>

          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6 flex-wrap justify-center" role="list">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); handleClick(link.id) }}
                    className="text-sm text-content-tertiary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-lg text-content-tertiary hover:text-accent transition-all duration-300"
                aria-label={social.label}
              >
                <div className="absolute inset-0 rounded-lg bg-accent/0 group-hover:bg-accent-muted group-hover:shadow-md group-hover:shadow-accent/10 transition-all duration-300" aria-hidden="true" />
                <social.icon className="w-4 h-4 relative z-10" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-content-tertiary">
            Designed and built by Pritom Majumder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
