import { DialogueNote } from '@/types/lessonNotes'
import Accordion from './Accordion'

export default function DialogueCard({ dialogue }: { dialogue: DialogueNote }) {
  return (
    <Accordion title={dialogue.titleFa} subtitle={`${dialogue.lines.length} جمله`}>
      <div className="space-y-3 pt-3">
        {dialogue.lines.map((line, i) => (
          <div key={i} className={`flex gap-2.5 items-end ${line.speaker === 'B' ? 'flex-row-reverse' : ''}`}>
            <div className="w-8 h-8 rounded-full bg-ink text-white text-xs font-black grid place-items-center flex-shrink-0">
              {line.speaker}
            </div>
            <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl shadow-sm ${
              line.speaker === 'B'
                ? 'bg-primary-light border border-primary/15 rounded-bl-sm'
                : 'bg-cream border border-line rounded-br-sm'
            }`}>
              <p className="de font-bold text-sm text-ink">{line.de}</p>
              <p className="text-xs text-ink-soft mt-1">{line.fa}</p>
            </div>
          </div>
        ))}
      </div>
    </Accordion>
  )
}
