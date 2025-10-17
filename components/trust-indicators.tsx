"use client"

import { useRef } from "react"
import { m, LazyMotion, domAnimation, useInView } from "framer-motion"
import Image from "next/image"
import { useTranslation } from "@/hooks/use-translation"

// Companies from our portfolio
const partners = [
  { name: "Étoile Residences", logo: "/placeholder.svg?height=40&width=120", location: "Brussels" },
  { name: "Portside Business Centre", logo: "/placeholder.svg?height=40&width=120", location: "Antwerp" },
  { name: "North Sea Gateway Logistics", logo: "/placeholder.svg?height=40&width=120", location: "Ghent" },
  { name: "The Sablon Quarters", logo: "/placeholder.svg?height=40&width=120", location: "Brussels" },
  { name: "European Real Estate Association", logo: "/placeholder.svg?height=40&width=120", location: "Brussels" },
]

export function TrustIndicators() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useTranslation()

  return (
    <div ref={ref} className="py-10 border-t border-brand-gold/30">
      <div className="text-center mb-6">
        <p className="text-sm text-brand-beige/70 font-serif tracking-wider uppercase">Featured Properties & Partners</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mx-auto max-w-4xl">
        {partners.map((partner, index) => (
          <m.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            className="transition-all duration-300 flex items-center"
          >
            <div className="text-sm md:text-base text-brand-beige/90 font-serif text-center">
              <span className="font-medium">{partner.name}</span>
              {partner.location && <span className="text-xs text-brand-beige/70 ml-2">• {partner.location}</span>}
            </div>
          </m.div>
        ))}
      </div>
    </div>
  )
}
