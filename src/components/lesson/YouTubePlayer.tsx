'use client'
import { useState } from 'react'

interface Props { videoId: string; title: string }

export default function YouTubePlayer({ videoId, title }: Props) {
  const [loaded, setLoaded] = useState(false)

  const handleClick = () => {
    if (videoId === 'PLACEHOLDER') return
    setLoaded(true)
  }

  return (
    <div className="relative rounded-xl overflow-hidden bg-[#1a1a1a]" style={{ paddingTop: '56.25%' }}>
      {!loaded ? (
        <div className="absolute inset-0 cursor-pointer group" onClick={handleClick}>
          <img
            src={videoId !== 'PLACEHOLDER' ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : 'https://placehold.co/640x360/1a1a1a/ffcc00?text=Lektion+1'}
            alt={title}
            className="w-full h-full object-cover group-hover:opacity-85 transition-opacity"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-[#FF0000] rounded-full grid place-items-center shadow-xl group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white ml-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full border-none"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  )
}
