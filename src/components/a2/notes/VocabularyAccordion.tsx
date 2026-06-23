import { VocabCategory } from '@/types/lessonNotes'
import Accordion from './Accordion'

const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
function toPersianDigits(n: number) {
  return String(n).replace(/[0-9]/g, (d) => PERSIAN_DIGITS[Number(d)])
}

export default function VocabularyAccordion({ categories }: { categories: VocabCategory[] }) {
  return (
    <div className="space-y-3">
      {categories.map((cat) => (
        <Accordion key={cat.id} title={cat.titleFa} subtitle={`${toPersianDigits(cat.items.length)} واژه`}>
          <div className="divide-y divide-line">
            {cat.items.map((item, i) => (
              <div key={i} className="grid grid-cols-[1fr_1.2fr] gap-2 items-start py-2.5">
                <span className="de font-bold text-sm text-ink">{item.de}</span>
                <span className="text-sm text-ink-soft">{item.fa}</span>
              </div>
            ))}
          </div>
        </Accordion>
      ))}
    </div>
  )
}
