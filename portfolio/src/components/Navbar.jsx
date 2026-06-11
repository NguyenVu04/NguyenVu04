export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gh-bg border-b border-gh-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-mono text-gh-blue text-sm font-medium select-none">
          {'< NguyenVu04 />'}
        </span>
        <div className="flex items-center gap-6 text-sm">
          {['about', 'projects', 'experience', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-gh-muted hover:text-gh-text transition-colors"
            >
              {id}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
