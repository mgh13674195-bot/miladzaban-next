'use client'
import { useState } from 'react'
import { LessonNotes } from '@/types/lessonNotes'
import VocabularyAccordion from './VocabularyAccordion'
import GrammarAccordion from './GrammarAccordion'
import DialogueCard from './DialogueCard'
import SampleStoryCard from './SampleStoryCard'

type TabId = 'summary' | 'sentences' | 'grammar' | 'vocabulary' | 'redemittel' | 'dialogues' | 'story' | 'closing'

const TABS: { id: TabId; label: string }[] = [
  { id: 'summary', label: 'خلاصه درس' },
  { id: 'sentences', label: 'جمله‌های مهم' },
  { id: 'grammar', label: 'گرامر' },
  { id: 'vocabulary', label: 'واژگان' },
  { id: 'redemittel', label: 'Redemittel' },
  { id: 'dialogues', label: 'مکالمه‌ها' },
  { id: 'story', label: 'متن نمونه' },
  { id: 'closing', label: 'جمع‌بندی' },
]

/** Shared layout for a titled group of German/Persian phrase pairs (used by key sentences + Redemittel). */
function PhraseGroup({ titleFa, pairs }: { titleFa: string; pairs: { de: string; fa: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-black text-ink-soft mb-2">{titleFa}</h3>
      <div className="space-y-2">
        {pairs.map((p, i) => (
          <div key={i} className="bg-cream rounded-xl p-3">
            <p className="de font-bold text-sm text-ink">{p.de}</p>
            <p className="text-xs text-ink-soft mt-1">{p.fa}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function LessonNotesTabs({ notes }: { notes: LessonNotes }) {
  const [active, setActive] = useState<TabId>('summary')

  return (
    <div>
      {/* Tab bar — scrollable on mobile */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 mb-5 -mx-1 px-1">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              active === tab.id
                ? 'bg-ink text-white shadow-sm'
                : 'bg-cream text-ink-soft hover:text-ink border border-line'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active panel only — others not mounted */}
      <div className="space-y-5">
        {active === 'summary' && (
          <div>
            <p className="text-sm text-ink-soft leading-relaxed mb-4">{notes.summary.introFa}</p>
            <h3 className="text-sm font-black text-ink-soft mb-2">هدف‌های این درس</h3>
            <ul className="space-y-1.5">
              {notes.summary.goals.map((g, i) => (
                <li key={i} className="flex gap-2 text-sm text-ink-soft leading-relaxed">
                  <span className="text-primary font-bold flex-shrink-0">{i + 1}.</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        )}

        {active === 'sentences' && (
          <div className="space-y-5">
            {notes.keySentences.map((group, i) => (
              <PhraseGroup key={i} titleFa={group.titleFa} pairs={group.sentences} />
            ))}
          </div>
        )}

        {active === 'grammar' && <GrammarAccordion topics={notes.grammar} />}

        {active === 'vocabulary' && <VocabularyAccordion categories={notes.vocabulary} />}

        {active === 'redemittel' && (
          <div className="space-y-5">
            {notes.redemittel.map((group, i) => (
              <PhraseGroup key={i} titleFa={group.titleFa} pairs={group.phrases} />
            ))}
          </div>
        )}

        {active === 'dialogues' && (
          <div className="space-y-3">
            {notes.dialogues.map((d) => (
              <DialogueCard key={d.id} dialogue={d} />
            ))}
          </div>
        )}

        {active === 'story' && <SampleStoryCard story={notes.sampleStory} />}

        {active === 'closing' && (
          <div>
            <p className="text-sm text-ink-soft leading-relaxed mb-4">{notes.summaryClosingFa}</p>
            <h3 className="text-sm font-black text-ink-soft mb-2">مهم‌ترین موضوعات درس</h3>
            <div className="flex flex-wrap gap-2">
              {notes.summaryTopics.map((t, i) => (
                <span key={i} className="badge badge-gray text-xs">{t}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
