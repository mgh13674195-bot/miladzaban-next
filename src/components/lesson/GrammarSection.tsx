import { GrammarBlock } from '@/types'

interface Props { blocks: GrammarBlock[] }

export default function GrammarSection({ blocks }: Props) {
  return (
    <div className="card">
      <div className="flex items-center gap-3 p-5 border-b border-line">
        <div className="w-8 h-8 rounded-lg bg-blue-50 grid place-items-center text-lg">📐</div>
        <h2 className="font-black text-sm">خلاصه گرامر درس</h2>
      </div>
      <div className="p-5 space-y-6">
        {blocks.map((block, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 bg-primary rounded-full flex-shrink-0" />
              <h3 className="text-sm font-black">{block.title}</h3>
            </div>

            {/* Phrases */}
            {block.phrases && (
              <div className="space-y-2 mb-3">
                {block.phrases.map((p, j) => (
                  <div key={j} className="flex flex-col sm:flex-row rounded-xl overflow-hidden border border-line">
                    <div className="flex-1 bg-blue-50 border-b sm:border-b-0 sm:border-l border-blue-200 px-4 py-2.5 text-blue-800 font-bold text-sm" style={{ direction: 'ltr', textAlign: 'left' }}>{p.de}</div>
                    <div className="flex-1 bg-white px-4 py-2.5 text-sm text-ink-soft">{p.fa}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Note */}
            {block.note && (
              <div className="flex gap-2 bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-800 leading-relaxed">
                <span className="flex-shrink-0">💡</span>
                <span>{block.note}</span>
              </div>
            )}

            {/* du/Sie */}
            {block.duSie && (
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-center">
                  <h4 className="text-2xl font-black text-blue-700 mb-1.5">du</h4>
                  <p className="text-xs text-ink-soft leading-relaxed">دوستانه، غیررسمی<br />با دوست، همسن</p>
                </div>
                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4 text-center">
                  <h4 className="text-2xl font-black text-purple-700 mb-1.5">Sie</h4>
                  <p className="text-xs text-ink-soft leading-relaxed">رسمی، محترمانه<br />با معلم، کارمند اداره</p>
                </div>
              </div>
            )}

            {/* Aus rules */}
            {block.ausRules && (
              <div className="space-y-2">
                {block.ausRules.map((r, j) => (
                  <div key={j} className="flex flex-col sm:flex-row rounded-xl overflow-hidden border border-line">
                    <div className="flex-1 bg-blue-50 border-b sm:border-b-0 sm:border-l border-blue-200 px-4 py-2.5 text-blue-800 font-bold text-sm" style={{ direction: 'ltr', textAlign: 'left' }}>{r.de}</div>
                    <div className="flex-1 bg-white px-4 py-2.5 text-sm text-ink-soft">{r.fa}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Conjugation table */}
            {block.table && (
              <div className="rounded-xl overflow-hidden border border-line">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {block.table.headers.map((h, j) => (
                        <th
                          key={j}
                          className={`py-2.5 px-4 font-bold text-xs text-center ${j === block.table!.headers.length - 1 ? 'text-left' : ''}`}
                          style={{ background: 'linear-gradient(135deg,#1E3A8A,#2563EB)', color: '#fff' }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.table.rows.map((row, ri) => (
                      <tr key={ri} className="hover:bg-blue-50 transition-colors border-t border-line">
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className={`py-2.5 px-4 text-center ${ci === row.length - 1 ? 'text-left text-ink-soft text-xs' : 'text-blue-700 font-bold'}`}
                            style={ci < row.length - 1 ? { direction: 'ltr' } : {}}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
