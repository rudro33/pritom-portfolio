import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons'

const footerLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: TwitterIcon, href: 'https://x.com', label: 'X / Twitter' },
]

export default function Footer() {
  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border py-12 px-6" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleClick('hero') }}
            className="text-lg font-semibold text-content tracking-tight hover:text-accent transition-colors"
          >
            {'<PM />'}
          </a>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6" role="list">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); handleClick(link.id) }}
                    className="text-sm text-content-tertiary hover:text-content transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-content-tertiary hover:text-accent hover:bg-accent-muted transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-content-tertiary">
            Designed and built by Pritom Majumder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
