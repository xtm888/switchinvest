"use client"

import { useState } from "react"
import { m, LazyMotion, domAnimation } from "framer-motion"
import Image from "next/image"

/**
 * Before/After Comparison Slider
 * Interactive slider to showcase transformations
 */

interface BeforeAfterProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  title?: string
  description?: string
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  beforeLabel = "Avant",
  afterLabel = "Après",
  title,
  description
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, rect)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.touches[0].clientX, rect)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  return (
    <LazyMotion features={domAnimation} strict>
    <div className="w-full">
      {title && (
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-brand-teal mb-3 font-serif">
            {title}
          </h3>
          {description && (
            <p className="text-neutral-dark/70 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </m.div>
      )}

      <m.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* After Image (Full Width) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            className="object-cover"
            priority
          />
          {/* After Label */}
          <div className="absolute top-4 right-4 bg-brand-teal text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            className="object-cover"
            priority
          />
          {/* Before Label */}
          <div className="absolute top-4 left-4 bg-neutral-dark text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
            {beforeLabel}
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <m.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <svg
              className="w-6 h-6 text-brand-teal"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </m.div>
        </div>

        {/* Percentage Indicator */}
        {isDragging && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-neutral-dark px-3 py-1 rounded-full text-sm font-bold shadow-lg"
          >
            {Math.round(sliderPosition)}%
          </m.div>
        )}
      </m.div>

      {/* Instructions */}
      <m.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-sm text-neutral-dark/60 mt-4"
      >
        👆 Glissez le curseur pour comparer
      </m.p>
    </div>
    </LazyMotion>
  )
}
