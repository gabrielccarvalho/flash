'use client'

import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { ProgressBar } from '../../components/progress-bar'
import { useState } from 'react'
import Image from 'next/image'

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

        <span className="text-lg leading-heading font-bold text-mirage-50 flex-1 text-center">
          Lorem ipsum dolor
        </span>
      </div>

      <main className="flex flex-col items-center flex-1 justify-around px-10">
        <div className="flex flex-col gap-4 w-11/12 max-w-xl pb-8">
          <ProgressBar progress={75} />
        </div>

        <div className="flex flex-col w-full h-1/2 items-center">
          <div className="flex flex-col flex-1 w-full max-w-3xl bg-marine-50 rounded-md shadow-lg z-50 items-center justify-center p-8">
            {!isRevealed ? (
              <div className="flex flex-col items-center justify-around flex-1">
                <p className="text-md font-semibold leading-heading text-mirage-950 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus auctor diam a eros aliquet auctor diam a eros aliquet
                  auctor diam a eros aliquet auctor diam a eros aliquet
                </p>
                <Image
                  src="https://img.freepik.com/free-photo/sunrise-bali-jungle_1385-1644.jpg"
                  alt="card image"
                  width={300}
                  height={0}
                  className="rounded-md"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-around flex-1">
                <p className="text-md font-semibold leading-heading text-mirage-950 text-center">
                  RESPOSTA RESPOSTA RESPOSTA RESPOSTA RESPOSTA
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col w-11/12 max-w-2xl h-6 bg-marine-50/75 rounded-b-md -mt-2" />
        </div>

        {!isRevealed ? (
          <button
            className="flex flex-row bg-marine-50 py-4 px-16 items-center justify-center rounded-md"
            onClick={() => {
              setIsRevealed(true)
            }}
          >
            <span className="text-md font-bold text-marine-500">
              REVELAR RESPOSTA
            </span>
          </button>
        ) : (
          <div className="flex flex-row items-center justify-around rounded-md w-full lg:max-w-xl flex-wrap gap-y-2">
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
