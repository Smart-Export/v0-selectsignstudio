"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "/plates/automotive-plate.png",
    alt: "Vintage metal plate - Overheated Towing & Repair with retro car design",
  },
  {
    src: "/plates/jack-daniels-plate.png",
    alt: "Jack Daniel's vintage metal plate with classic gentleman design",
  },
  {
    src: "/plates/whiskey-plate.png",
    alt: "Drinking Whiskey vintage metal plate with bottle illustration",
  },
]

export function PlateCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right")
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setDirection("left")
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setDirection("right")
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left")
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full">
      {/* Main image container */}
      <div className="relative aspect-square w-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : index < currentIndex
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-contain p-8"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Navigation arrows */}
        <Button
          onClick={goToPrevious}
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white transition-all duration-300 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-[#3d5a80]" />
        </Button>

        <Button
          onClick={goToNext}
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white transition-all duration-300 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-[#3d5a80]" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-500 ${
              index === currentIndex ? "bg-[#ee6c4d] w-8" : "bg-gray-300 hover:bg-gray-400 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
