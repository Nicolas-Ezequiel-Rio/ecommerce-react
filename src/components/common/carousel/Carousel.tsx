'use client'

import { Carousel } from 'flowbite-react'

interface CarouselComponentProps {
  images: string[]
  visibleItems: number
}

export function CarouselComponent({
  images,
  visibleItems
}: CarouselComponentProps) {
  return (
    <div className={`h-56 sm:h-64 xl:h-80 2xl:h-96`}>
      <Carousel>
        {images.slice(0, visibleItems).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel image ${index + 1}`}
            className='w-48 h-48 object-cover '
          />
        ))}
      </Carousel>
    </div>
  )
}
