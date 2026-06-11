import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const LINKS = [
  {
    icon: FiGithub,
    label: 'NguyenVu04',
    href: 'https://github.com/NguyenVu04',
  },
  {
    icon: FiLinkedin,
    label: 'nguyenvu04',
    href: 'https://linkedin.com/in/nguyenvu04',
  },
  {
    icon: FiMail,
    label: 'nguyenvu04.work@gmail.com',
    href: 'mailto:nguyenvu04.work@gmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 pb-24">
      <p className="font-mono text-gh-muted text-sm mb-6">// get in touch</p>

      <div className="flex flex-wrap gap-3">
        {LINKS.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2 border border-gh-border2 rounded-full text-gh-muted text-sm hover:text-gh-text hover:border-gh-blue transition-colors"
          >
            <Icon size={14} />
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}
