const TAGS = ['Spring Boot', 'PostgreSQL', 'Keycloak', 'OAuth2', 'Kanban']

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 pb-20">
      <p className="font-mono text-gh-muted text-sm mb-6">// experience</p>

      <div className="bg-gh-surface border border-gh-border rounded-lg p-6">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <span className="text-gh-text font-medium">Backend Developer Intern</span>
          <span className="font-mono text-gh-hint text-xs mt-0.5">5/2025 – 8/2025</span>
        </div>
        <p className="text-gh-blue text-sm mb-3">VNPT Ho Chi Minh City</p>
        <p className="text-gh-muted text-sm leading-relaxed mb-4">
          B2B2C e-commerce platform · Spring Boot, PostgreSQL, Spring Security. Keycloak + OAuth2
          for role-based access control. Agile/Kanban workflow. Produced SRS and sequence diagrams.
        </p>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs bg-gh-bg text-gh-muted rounded-full border border-gh-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
