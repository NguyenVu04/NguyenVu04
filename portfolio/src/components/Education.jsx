import { FiBook } from 'react-icons/fi'

const CERTS = [
  {
    name: 'TOEIC L&R',
    issuer: 'ETS',
    date: '11/2025',
    score: '965 / 990',
    scoreColor: 'text-gh-green',
  },
  {
    name: 'SDWS Training',
    issuer: 'Axon Active',
    date: '10/2025',
    score: null,
  },
]

export default function Education() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-20">
      <p className="font-mono text-gh-muted text-sm mb-6">// education &amp; certifications</p>

      {/* Education card */}
      <div className="bg-gh-surface border border-gh-border rounded-lg p-6 mb-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 p-2 bg-gh-bg border border-gh-border rounded-md">
            <FiBook size={16} className="text-gh-blue" />
          </div>
          <div className="flex-1">
            <p className="text-gh-text font-medium mb-0.5">
              Ho Chi Minh City University of Technology (HCMUT)
            </p>
            <p className="text-gh-muted text-sm mb-3">
              B.Eng. Software Engineering · 10/2022 – 10/2026
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-0.5 text-xs bg-gh-bluebg text-gh-blue border border-gh-blue/30 rounded-full">
                GPA 8.5 / 10
              </span>
              <span className="px-2.5 py-0.5 text-xs bg-gh-greenbg text-gh-green border border-gh-green/30 rounded-full">
                Comprehensively Very Good — 3/2025
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cert grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CERTS.map((cert) => (
          <div
            key={cert.name}
            className="bg-gh-surface border border-gh-border rounded-lg p-4"
          >
            <p className="text-gh-text text-sm font-medium mb-0.5">{cert.name}</p>
            <p className="text-gh-muted text-xs mb-2">
              {cert.issuer} · {cert.date}
            </p>
            {cert.score && (
              <span className={`font-mono text-xs font-semibold ${cert.scoreColor}`}>
                {cert.score}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
