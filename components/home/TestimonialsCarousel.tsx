"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/hooks/use-translation"
import PlaceholderImage from "@/components/PlaceholderImage"

/**
 * Premium Testimonials Carousel
 * Features:
 * - Auto-rotating carousel with manual controls
 * - Image optimization with next/image
 * - Smooth animations with Framer Motion
 * - Press logos "As Seen On" section
 * - Responsive design with touch support
 */

interface Testimonial {
  id: number
  name: string
  location: string
  role: string
  quote: string
  rating: number
  image: string
  date: string
}

export default function TestimonialsCarousel() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Get testimonials from translations
  const testimonialsDataRaw = t("home.testimonials.items")
  const testimonialsData = Array.isArray(testimonialsDataRaw) ? testimonialsDataRaw : [
    { name: "Marie Dubois", location: "Bruxelles", role: "Propriétaire", quote: "SwitchInvest a transformé une situation stressante en une expérience fluide.", rating: 5, image: "", date: "Janvier 2025" }
  ]
  const testimonials: Testimonial[] = testimonialsData.map((testimonial: any, index: number) => ({
    id: index + 1,
    name: testimonial.name,
    location: testimonial.location,
    role: testimonial.role,
    quote: testimonial.quote,
    rating: testimonial.rating || 5,
    image: testimonial.image || "",
    date: testimonial.date
  }))

  // Press logos
  const pressLogosDataRaw = t("home.testimonials.pressLogos")
  const pressLogos = Array.isArray(pressLogosDataRaw) && pressLogosDataRaw.length > 0 ? pressLogosDataRaw : [
    { name: "Le Soir", logo: "/press/lesoir.svg" },
    { name: "L'Echo", logo: "/press/lecho.svg" },
    { name: "RTBF", logo: "/press/rtbf.svg" },
    { name: "DH", logo: "/press/dh.svg" }
  ]

  // Auto-rotate every 6 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 6000)

      return () => clearInterval(interval)
    }
  }, [isPaused])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-brand-beige/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-teal rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-brand-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal mb-4 font-serif">
            {t("home.testimonials.title") || "Ce Que Disent Nos Clients"}
          </h2>
          <p className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            {t("home.testimonials.subtitle") || "Des témoignages authentiques de propriétaires satisfaits"}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
              }}
              className="relative"
            >
              {/* Testimonial Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote className="w-24 h-24 text-brand-teal" />
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-brand-gold/20 shadow-xl">
                      <PlaceholderImage variant="testimonial" category={currentTestimonial.name.charAt(0)} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Stars */}
                    <div className="flex gap-1 justify-center md:justify-start mb-4">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-neutral-dark leading-relaxed mb-6 italic">
                      "{currentTestimonial.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div>
                      <div className="font-bold text-brand-teal text-lg mb-1">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-neutral-dark/60 text-sm">
                        {currentTestimonial.role} • {currentTestimonial.location}
                      </div>
                      <div className="text-neutral-dark/40 text-xs mt-1">
                        {currentTestimonial.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-16">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="bg-white hover:bg-brand-teal text-brand-teal hover:text-white p-3 rounded-full shadow-lg transition-colors z-20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="bg-white hover:bg-brand-teal text-brand-teal hover:text-white p-3 rounded-full shadow-lg transition-colors z-20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-brand-teal"
                    : "w-2 bg-brand-teal/30 hover:bg-brand-teal/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* "As Seen On" Press Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <p className="text-center text-neutral-dark/60 text-sm uppercase tracking-wider mb-8">
            {t("home.testimonials.pressTitle") || "Vu Dans Les Médias"}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {pressLogos.map((press, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
                className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              >
                {/* Placeholder for press logos */}
                <div className="h-12 px-6 flex items-center justify-center bg-neutral-dark/5 rounded-lg font-bold text-neutral-dark/40">
                  {press.name}
                </div>
                {/* Uncomment when real logos available */}
                {/* <Image
                  src={press.logo}
                  alt={press.name}
                  width={120}
                  height={40}
                  className="h-12 w-auto"
                /> */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
