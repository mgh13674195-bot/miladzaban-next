'use client'
import { useState, useRef } from 'react'
import { A2Lesson } from '@/types/a2'

const PLACEHOLDER = 'AUDIO_PLACEHOLDER'

export default function AudioSection({ lesson }: { lesson: A2Lesson }) {
  const hasAudio = lesson.audioUrl && lesson.audioUrl !== PLACEHOLDER
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) { audioRef.current.pause() } else { audioRef.current.play() }
    setPlaying(!playing)
  }

  return (
    <div className="card p-6">
      <h2 className="font-black text-lg mb-4 flex items-center gap-2">
        <span className="text-2xl">🎧</span> فایل صوتی درس
      </h2>

      {hasAudio ? (
        <div className="bg-gradient-to-l from-primary/5 to-gold/10 rounded-2xl p-5 flex items-center gap-4">
          <button
            onClick={toggle}
            className="w-14 h-14 rounded-2xl bg-primary text-white grid place-items-center flex-shrink-0 hover:bg-primary-dark transition shadow-lg shadow-primary/30"
          >
            {playing ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          <div className="flex-1">
            <p className="font-bold text-sm">{lesson.title}</p>
            <p className="text-ink-soft text-xs mt-0.5">مکالمه و تلفظ صحیح · {lesson.duration}</p>
            <div className="h-1.5 bg-line rounded-full mt-3">
              <div className="h-full w-0 bg-primary rounded-full transition-all" />
            </div>
          </div>
          <audio ref={audioRef} src={lesson.audioUrl} onEnded={() => setPlaying(false)} />
        </div>
      ) : (
        <div className="bg-cream rounded-2xl p-6 text-center text-ink-soft">
          <div className="text-4xl mb-3">🔇</div>
          <p className="text-sm">فایل صوتی این درس به‌زودی اضافه می‌شود.</p>
        </div>
      )}
    </div>
  )
}
