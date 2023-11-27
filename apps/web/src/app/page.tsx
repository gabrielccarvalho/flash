import Image from 'next/image'
import { Carousel } from '../components/carousel'
import { Search } from 'lucide-react'

const data = [
  {
    id: '84fdf5bd-39f0-4819-ad07-b16ed757d850',
    tag: 'Lorem ipsum',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor diam a eros aliquet, id vehicula ante fermentum. Sed at eleifend tellus. Nulla in sagittis ligula. Phasellus elementum dolor ut erat bibendum',
    totalCards: 16,
    completedCards: 8,
    progress: 50,
    cta: '/cards?deck=84fdf5bd-39f0-4819-ad07-b16ed757d850',
  },
  {
    id: '84fdf5bd-39f0-4819-ad07-b16ed757d850',
    tag: 'Lorem ipsum',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor diam a eros aliquet, id vehicula ante fermentum. Sed at eleifend tellus. Nulla in sagittis ligula. Phasellus elementum dolor ut erat bibendum',
    totalCards: 32,
    completedCards: 8,
    progress: 25,
    cta: '/cards?deck=84fdf5bd-39f0-4819-ad07-b16ed757d850',
  },
  {
    id: '84fdf5bd-39f0-4819-ad07-b16ed757d850',
    tag: 'Lorem ipsum',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor diam a eros aliquet, id vehicula ante fermentum. Sed at eleifend tellus. Nulla in sagittis ligula. Phasellus elementum dolor ut erat bibendum',
    totalCards: 8,
    completedCards: 8,
    progress: 100,
    cta: '/cards?deck=84fdf5bd-39f0-4819-ad07-b16ed757d850',
  },
]

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-t from-marine-600 to-marine-500 px-6 py-5 gap-8 flex flex-col">
        <Image
          src="https://github.com/gabrielccarvalho.png"
          alt="user avatar"
          width={64}
          height={64}
          className="rounded-full h-16 w-16 self-end"
        />
        <span className="text-2xl font-bold leading-heading text-mirage-50">
          Dashboard
        </span>
      </div>

      <main className="p-6 flex flex-col gap-4">
        <div className="flex flex-row w-full gap-2 items-center">
          <span className="text-lg font-bold leading-heading">Decks</span>

          {/* SEARCH BAR */}

          {/*
          <div className="flex flex-row flex-1 items-center">
            <i className="absolute px-2">
              <Search className="w-5 h-5 text-mirage-950 z-10" />
            </i>
            <input
              className="flex focus:w-full w-48 pl-8 px-4 py-1 outline-none bg-marine-100 rounded-lg border border-marine-700 text-sm text-mirage-950 transition-all duration-300 ease-in-out"
              placeholder="Pesquise seu deck"
            />
          </div>
          */}
        </div>
        <Carousel slides={data} />
      </main>
    </div>
  )
}
