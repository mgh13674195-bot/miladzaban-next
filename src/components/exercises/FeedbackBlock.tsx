interface Props {
  isCorrect: boolean
  correctAnswer?: string
  explanationFa?: string
  translationFa?: string
}

export default function FeedbackBlock({ isCorrect, correctAnswer, explanationFa, translationFa }: Props) {
  return (
    <div
      className={`mt-2 rounded-xl p-3 text-sm border ${
        isCorrect
          ? 'bg-primary-light border-primary/20 text-primary-dark'
          : 'bg-[#fdf3f1] border-[#e8c4bd] text-[#7a3a30]'
      }`}
    >
      <div className="flex items-center gap-1.5 font-bold mb-1">
        {isCorrect ? (
          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
        {isCorrect ? 'درست است!' : 'پاسخ درست:'}
        {!isCorrect && correctAnswer && <span className="de font-bold">{correctAnswer}</span>}
      </div>
      {translationFa && <p className="text-ink-soft mb-1">{translationFa}</p>}
      {explanationFa && <p className="text-ink-soft leading-relaxed">{explanationFa}</p>}
    </div>
  )
}
