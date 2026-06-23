import { GrammarTopic } from '@/types/lessonNotes'
import Accordion from './Accordion'

export default function GrammarAccordion({ topics }: { topics: GrammarTopic[] }) {
  return (
    <div className="space-y-3">
      {topics.map((topic) => (
        <Accordion key={topic.id} title={topic.titleFa} subtitle={topic.titleDe}>
          <div className="space-y-4 pt-3">
            {topic.explanationFa && (
              <p className="text-sm text-ink-soft leading-relaxed">{topic.explanationFa}</p>
            )}

            {topic.table && (
              <div className="rounded-xl overflow-hidden border border-line">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-cream">
                      {topic.table.headers.map((h, i) => (
                        <th key={i} className="px-3 py-2 text-xs font-bold text-ink-soft text-center">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {topic.table.rows.map((row, ri) => (
                      <tr key={ri} className="border-t border-line">
                        {row.map((cell, ci) => (
                          <td key={ci} className="de px-3 py-2 text-center text-ink">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {topic.examples && (
              <div className="space-y-2">
                {topic.examples.map((ex, i) => (
                  <div key={i} className="bg-cream rounded-xl p-3">
                    <p className="de font-bold text-sm text-ink">{ex.de}</p>
                    <p className="text-xs text-ink-soft mt-1">{ex.fa}</p>
                  </div>
                ))}
              </div>
            )}

            {topic.note && (
              <div className="flex gap-2 bg-primary-light border border-primary/20 rounded-xl p-3 text-sm text-primary-dark leading-relaxed">
                <span className="flex-shrink-0">💡</span>
                <span>{topic.note}</span>
              </div>
            )}
          </div>
        </Accordion>
      ))}
    </div>
  )
}
