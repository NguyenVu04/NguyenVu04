import { useState } from 'react'
import { FiMapPin, FiExternalLink } from 'react-icons/fi'
import { SiYoutube } from 'react-icons/si'

const VIDEO_ID = 'oZLZFDScInA'

const TECH_TAGS = [
  'Java', 'Spring Boot', 'Python', 'PyTorch', 'Kafka',
  'Redis', 'Kubernetes', 'Docker', 'Keycloak', 'Envoy',
]

function LiteYouTube({ videoId }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full rounded-md"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Demo video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div
      className="relative w-full cursor-pointer rounded-md overflow-hidden bg-gh-surface"
      style={{ paddingBottom: '56.25%' }}
      onClick={() => setPlaying(true)}
    >
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt="Video thumbnail"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors">
        <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full shadow-lg">
          <SiYoutube size={28} className="text-white" />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 pb-20">
      <p className="font-mono text-gh-muted text-sm mb-6">// projects</p>

      <div className="border border-gh-blue rounded-lg p-6 mb-4">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <FiMapPin size={16} className="text-gh-blue" />
            <span className="text-gh-blue font-medium">TrackNest</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-mono bg-gh-bluebg text-gh-blue border border-gh-blue/30 rounded-full">
              Featured
            </span>
            <a
              href="https://github.com/NguyenVu04/track-nest"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 px-2.5 py-0.5 text-xs border border-gh-border2 text-gh-muted rounded-full hover:text-gh-text hover:border-gh-muted transition-colors"
            >
              <FiExternalLink size={11} />
              Source
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-gh-muted text-sm leading-relaxed mb-4">
          Real-time event-driven microservices platform for emergency response and location
          tracking at scale. AI-powered anomaly detection service (PyTorch + FastAPI) over live
          Kafka streams. Deployed on Kubernetes with Envoy gateway and Keycloak IAM.
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {TECH_TAGS.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs bg-gh-surface text-gh-muted rounded-full border border-gh-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Demo video */}
        <div className="border-t border-gh-border pt-4">
          <p className="font-mono text-gh-amber text-xs mb-3">// demo video</p>
          <LiteYouTube videoId={VIDEO_ID} />
        </div>
      </div>

      {/* Placeholder */}
      <div className="border border-dashed border-gh-border2 rounded-lg p-8 text-center text-gh-hint text-sm">
        + More projects coming soon
      </div>
    </section>
  )
}
