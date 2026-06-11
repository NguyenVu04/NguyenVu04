import { FiGithub, FiLinkedin, FiMapPin, FiMail, FiPhone, FiFileText } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 pt-24 pb-20">
      <p className="font-mono text-gh-green text-xs tracking-[0.2em] uppercase mb-4">
        Software Engineer
      </p>

      <h1 className="text-5xl sm:text-6xl font-medium text-gh-text mb-4 leading-tight">
        Nguyen Duy Vu
      </h1>

      <p className="text-lg text-gh-muted mb-6">
        Backend &amp; AI/ML Engineer ·{' '}
        <span className="text-gh-blue">Full-stack &amp; DevOps</span>
      </p>

      <p className="text-gh-muted max-w-2xl leading-relaxed mb-8">
        Software Engineer with a strong foundation in distributed backend systems and applied ML.
        Experienced with Java microservices, Python AI pipelines, and cloud-native deployments on
        Kubernetes.
      </p>

      <div className="flex flex-wrap gap-3 mb-10">
        <a
          href="#"
          className="flex items-center gap-2 px-4 py-2 bg-gh-blue text-black text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
        >
          <FiFileText size={14} />
          Resume
        </a>
        <a
          href="https://github.com/NguyenVu04"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-gh-border2 text-gh-muted text-sm rounded-md hover:text-gh-text hover:border-gh-muted transition-colors"
        >
          <FiGithub size={14} />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/nguyenvu04"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-gh-border2 text-gh-muted text-sm rounded-md hover:text-gh-text hover:border-gh-muted transition-colors"
        >
          <FiLinkedin size={14} />
          LinkedIn
        </a>
      </div>

      <div className="flex flex-wrap gap-5 text-sm text-gh-hint">
        <span className="flex items-center gap-1.5">
          <FiMapPin size={13} />
          Ho Chi Minh City, VN
        </span>
        <span className="flex items-center gap-1.5">
          <FiMail size={13} />
          nguyenvu04.work@gmail.com
        </span>
        <span className="flex items-center gap-1.5">
          <FiPhone size={13} />
          (+84) 33 658 7672
        </span>
      </div>
    </section>
  )
}
