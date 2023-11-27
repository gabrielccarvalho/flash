'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DeckCard } from './deck-card'

type CarouselPropType = {
  slides: {
    id: string
    tag: string
    title: string
    description: string
    progress: number
    totalCards: number
    completedCards: number
    cta: string
  }[]
}

export const Carousel: React.FC<CarouselPropType> = (props) => {
  const { slides } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  return (
    <div className="overflow-hidden bg-smoke-50">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="flex">
          {slides.map(
            (
              {
                tag,
                title,
                description,
                progress,
                totalCards,
                completedCards,
                cta,
              },
              index,
            ) => (
              <DeckCard
                key={index}
                {...{
                  tag,
                  title,
                  description,
                  cta,
                  progress,
                  totalCards,
                  completedCards,
                }}
              />
            ),
          )}
        </div>
      </div>

      <div className="flex items-center justify-center mt-5 space-x-2">
        {scrollSnaps.map((_, idx) => (
          <button
            className={`w-2 h-2 rounded-full ${
              idx === selectedIndex ? 'bg-marine-600' : 'bg-marine-100'
            }`}
            key={idx}
            onClick={() => scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  )
}
