import { DialogMessage } from '@/types'

interface Props { messages: DialogMessage[] }

export default function DialogSection({ messages }: Props) {
  return (
    <div className="card">
      <div className="flex items-center gap-3 p-5 border-b border-line">
        <div className="w-8 h-8 rounded-lg bg-green-50 grid place-items-center text-lg">💬</div>
        <h2 className="font-black text-sm">دیالوگ نمونه</h2>
      </div>
      <div className="p-5 space-y-3.5">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2.5 items-end ${msg.speaker === 'B' ? 'flex-row-reverse' : ''}`}>
            <div className="w-10 h-10 rounded-full bg-white border-2 border-line grid place-items-center text-xl flex-shrink-0 text-xl">
              {msg.avatar}
            </div>
            <div className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm shadow-sm ${msg.speaker === 'B' ? 'bg-blue-50 border border-blue-200 rounded-bl-sm' : 'bg-white border border-line rounded-br-sm'}`}>
              <div className="font-bold text-ink mb-1" style={{ direction: 'ltr', textAlign: 'left' }}>{msg.de}</div>
              <div className="text-xs text-ink-soft">{msg.fa}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
