import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import { MoveRight } from 'lucide-react'
import { ProgressCircle } from './progress-circle'

type CarouselPropType = {
  slides: {
    id: string
    tag: string
    title: string
    description: string
    progress: number
    totalCards: number
    completedCards: number
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
              { tag, title, description, progress, totalCards, completedCards },
              index,
            ) => (
              <div
                key={index}
                // className="flex flex-col gap-5 py-6 px-5 rounded-lg border border-mirage-100 shadow-lg"
                className="relative flex flex-none flex-wrap lg:flex-nowrap w-full mx-10 py-6 px-5 rounded-lg border border-mirage-100 shadow-lg"
              >
                <span className="font-bold text-sm text-mirage-600 leading-heading pb-2">
                  {tag.toUpperCase()}
                </span>
                <div className="space-y-2">
                  <h2 className="font-bold leading-heading">{title}</h2>
                  <p className="text-smoke-800 leading-base text-sm">
                    {description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <a
                      href="#"
                      className="py-3 px-5 flex items-center gap-2 font-bold text-sm bg-marine-500 rounded-md text-mirage-50"
                    >
                      Accessar coleção
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
