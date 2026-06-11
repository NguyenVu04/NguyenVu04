const GROUPS = [
  {
    title: 'BACKEND',
    color: 'text-gh-blue',
    items: ['Java / Spring Boot', 'Python / FastAPI', 'Apache Kafka', 'Keycloak / OAuth2'],
  },
  {
    title: 'AI / ML',
    color: 'text-gh-green',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas / NumPy'],
  },
  {
    title: 'DATABASE',
    color: 'text-gh-amber',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'FRONTEND',
    color: 'text-gh-purple',
    items: ['React / Next.js', 'React Native', 'TypeScript'],
  },
  {
    title: 'DEVOPS',
    color: 'text-gh-blue',
    items: ['Docker', 'Kubernetes', 'GitHub Actions'],
  },
  {
    title: 'LANGUAGES',
    color: 'text-gh-amber',
    items: ['Java', 'Python', 'C/C++', 'TypeScript / JS', 'Rust', 'Go'],
  },
]

export default function TechStack() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-20">
      <p className="font-mono text-gh-muted text-sm mb-4">// tech stack</p>

      <div
        className="border border-gh-border"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(148px, 1fr))',
        }}
      >
        {GROUPS.map((group, i) => (
          <div
            key={group.title}
            className="p-4"
            style={{
              borderRight: (i + 1) % 6 !== 0 ? '1px solid #21262d' : 'none',
              borderBottom: i < GROUPS.length - 6 ? '1px solid #21262d' : 'none',
            }}
          >
            <p className={`font-mono text-xs font-semibold tracking-wide mb-3 ${group.color}`}>
              {group.title}
            </p>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-gh-muted text-sm flex items-start gap-1.5">
                  <span className="text-gh-hint mt-px">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
