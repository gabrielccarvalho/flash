'use client'

import Image from 'next/image'
import { Carousel } from '../components/Carousel'

const data = [
  {
    id: '84fdf5bd-39f0-4819-ad07-b16ed757d850',
    tag: 'Javascript',
    title: 'Fundamentos do JavaScript',
    description:
      'Lorem Ipsum is placeholder text commonly used in the design and printing industry. It is used to fill in spaces where content will eventually be placed.',
    totalCards: 16,
    completedCards: 8,
    progress: 50,
  },
  {
    id: '84fdf5bd-39f0-4819-ad07-b16ed757d850',
    tag: 'TypeScript',
    title: 'Fundamentos do TypeScript',
    description:
      'Lorem Ipsum is placeholder text commonly used in the design and printing industry. It is used to fill in spaces where content will eventually be placed.',
    totalCards: 32,
    completedCards: 8,
    progress: 25,
  },
  {
    id: '84fdf5bd-39f0-4819-ad07-b16ed757d850',
    tag: 'React',
    title: 'Fundamentos do React',
    description:
      'Lorem Ipsum is placeholder text commonly used in the design and printing industry. It is used to fill in spaces where content will eventually be placed.',
    totalCards: 8,
    completedCards: 8,
    progress: 100,
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
        <span className="text-lg font-bold leading-heading">Coleções</span>

        {/* <div className="flex flex-col gap-5 py-6 px-5 rounded-lg border border-mirage-100 shadow-lg">
          <span className="font-bold text-sm text-mirage-600 leading-heading">
            JAVASCRIPT
          </span>
          <div className="space-y-2">
            <h2 className="font-bold leading-heading">
              Fundamentos do JavaScript
            </h2>
            <p className="text-smoke-400 leading-base text-sm">
              Lorem Ipsum is placeholder text commonly used in the design and
              printing industry. It is used to fill in spaces where content will
              eventually be placed.
            </p>

            <div className="flex items-center justify-between">
              <a
                href="#"
                className="py-3 px-5 flex items-center gap-2 font-bold text-sm bg-marine-500 rounded-md text-mirage-50"
              >
                Accessar coleção
                <MoveRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-2">
                <div className="2-6 h-6">
                  <ProgressCircle progress={50} />
                </div>
                <span className="text-smoke-600 text-sm leading-base">
                  8/16
                </span>
              </div>
            </div>
          </div>
        </div> */}

        <Carousel slides={data} />
      </main>
    </div>
  )
}
