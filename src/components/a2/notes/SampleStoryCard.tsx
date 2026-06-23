import { SampleStory } from '@/types/lessonNotes'

export default function SampleStoryCard({ story }: { story: SampleStory }) {
  return (
    <div className="glass-card p-5 sm:p-6">
      <p className="eyebrow mb-3">متن نمونه</p>
      <p className="de text-base sm:text-lg font-bold text-ink leading-relaxed mb-4">{story.de}</p>
      <div className="border-t border-line pt-4">
        <p className="text-sm text-ink-soft leading-relaxed">{story.fa}</p>
      </div>
    </div>
  )
}
