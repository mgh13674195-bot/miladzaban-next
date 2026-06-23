import { LessonNotes } from '@/types/lessonNotes'
import LessonNotesTabs from './LessonNotesTabs'

export default function LessonNotesSection({ notes }: { notes: LessonNotes }) {
  return (
    <div className="card p-6">
      <div className="mb-5">
        <h2 className="font-black text-lg">
          درسنامه درس {notes.lessonId} — <span className="de">{notes.topic}</span>
        </h2>
        <p className="text-sm text-ink-soft mt-1">{notes.titleFa}</p>
      </div>
      <LessonNotesTabs notes={notes} />
    </div>
  )
}
