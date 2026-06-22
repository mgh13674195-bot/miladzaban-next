import { Phrase } from '@/types'

interface Props { phrases: Phrase[] }

export default function PhraseList({ phrases }: Props) {
  return (
    <div className="card">
      <div className="flex items-center gap-3 p-5 border-b border-line">
        <div className="w-8 h-8 rounded-lg bg-red-50 grid place-items-center text-lg">🎯</div>
        <h2 className="font-black text-sm flex-1">جملات هدف درس</h2>
      </div>
      <div className="p-5 space-y-2">
        {phrases.map((p, i) => (
          <div key={i} className="flex flex-col sm:flex-row rounded-xl overflow-hidden border border-line">
            <div className="flex-1 bg-blue-50 border-b sm:border-b-0 sm:border-l border-blue-200 px-4 py-3 text-blue-800 font-bold text-sm" style={{ direction: 'ltr', textAlign: 'left' }}>
              {p.de}
            </div>
            <div className="flex-1 bg-white px-4 py-3 text-sm text-ink-soft">
              {p.fa}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
