import { MoveRight } from 'lucide-react'
import { ProgressCircle } from './progress-circle'

type DeckCardProps = {
  tag: string
  title: string
  description: string
  progress: number
  totalCards: number
  completedCards: number
  cta: string
}

export function DeckCard(props: DeckCardProps) {
  const { tag, title, description, cta, progress, completedCards, totalCards } =
    props

  return (
    <div className="relative flex flex-none flex-wrap xl:flex-col w-full mx-10 py-6 px-5 rounded-lg border border-mirage-100 shadow-lg">
      <span className="font-bold text-sm text-mirage-600 leading-heading pb-2">
        {tag.toUpperCase()}
      </span>
      <div className="space-y-2">
        <h2 className="font-bold leading-heading">{title}</h2>
        <p className="text-smoke-800 leading-base text-sm">{description}</p>

        <div className="flex items-center justify-between pt-2">
          <a
            href={cta}
            className="py-3 px-5 flex items-center gap-2 font-bold text-sm bg-marine-500 rounded-md text-mirage-50"
          >
            Accessar deck
            <MoveRight className="w-5 h-5" />
          </a>
          <div className="flex items-center gap-2">
            <div className="2-6 h-6">
              <ProgressCircle progress={progress} />
            </div>
            <span className="text-smoke-600 text-sm leading-base">
              {completedCards}/{totalCards}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
