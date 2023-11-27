'use client'

import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { ProgressBar } from '../../components/progress-bar'
import { useState } from 'react'

export default function Card({
  searchParams,
}: {
  searchParams: { deck: string }
}) {
  const [isRevealed, setIsRevealed] = useState(false)
  console.log(searchParams.deck)

  return (
    <div className="bg-gradient-to-t from-marine-600 to-marine-500 pt-8 gap-8 flex flex-col h-screen">
      <div className="flex flex-row px-8 w-full items-center gap-2">
        <Link href="/">
          <ChevronLeft className="w-8 h-8 text-mirage-50" />
        </Link>

        <span className="text-lg leading-heading font-bold text-mirage-50">
          Lorem ipsum dolor
        </span>
      </div>

      <main className="flex flex-col items-center flex-1 justify-center px-10">
        <div className="flex flex-col gap-4 w-11/12 max-w-xl pb-8">
          <ProgressBar progress={75} />
        </div>
        <div className="flex flex-col w-full max-w-3xl h-1/2 bg-marine-50 rounded-md shadow-lg z-50 items-center justify-center p-8">
          {!isRevealed ? (
            <p className="text-md font-semibold leading-heading text-mirage-950 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              auctor diam a eros aliquet
            </p>
          ) : (
            <p className="text-md font-semibold leading-heading text-mirage-950 text-center">
              RESPOSTA RESPOSTA RESPOSTA RESPOSTA RESPOSTA
            </p>
          )}
        </div>
        <div className="flex flex-col w-11/12 max-w-2xl h-6 bg-marine-50/75 rounded-b-md -mt-2" />

        {!isRevealed ? (
          <button
            className="flex flex-row bg-marine-50 py-4 px-16 items-center justify-center rounded-md mt-12"
            onClick={() => {
              setIsRevealed(true)
            }}
          >
            <span className="text-md font-bold text-marine-500">
              REVELAR RESPOSTA
            </span>
          </button>
        ) : (
          <div className="flex flex-row py-4 items-center justify-around rounded-md mt-12 w-full lg:max-w-xl flex-wrap gap-y-4">
            <button
              className="bg-difficulty-easy text-mirage-50 font-bold px-4 py-2 rounded-md"
              onClick={() => {
                setIsRevealed(false)
              }}
            >
              Fácil
            </button>
            <button
              className="bg-difficulty-good text-mirage-50 font-bold px-4 py-2 rounded-md"
              onClick={() => {
                setIsRevealed(false)
              }}
            >
              Médio
            </button>
            <button
              className="bg-difficulty-hard text-mirage-50 font-bold px-4 py-2 rounded-md"
              onClick={() => {
                setIsRevealed(false)
              }}
            >
              Difícil
            </button>
            <button
              className="bg-difficulty-again text-mirage-50 font-bold px-4 py-2 rounded-md"
              onClick={() => {
                setIsRevealed(false)
              }}
            >
              Muito Difícil
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
