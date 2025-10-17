"use client"

import { m, LazyMotion, domAnimation } from "framer-motion"
import { LucideIcon, ChevronRight } from "lucide-react"
import Link from "next/link"

/**
 * Premium Service Hero Component
 * Dynamic hero section with service-specific styling
 */

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  benefits: string[]
  ctaText: string
  ctaLink: string
  gradientFrom: string
  gradientTo: string
  icon?: LucideIcon
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  benefits,
  ctaText,
  ctaLink,
  gradientFrom,
  gradientTo,
  icon: Icon
}: ServiceHeroProps) {
  return (
    <LazyMotion features={domAnimation} strict>
    <section className={`relative bg-gradient-to-br ${gradientFrom} ${gradientTo} py-20 md:py-32 text-white overflow-hidden`}>
      {/* Floating Background Elements */}
      <m.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl"
      />
      <m.div
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"
      />
      <m.div
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-1/4 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-white/80 mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">{title}</span>
          </m.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div>
              {/* Subtitle Badge */}
              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
              >
                {Icon && <Icon className="w-5 h-5 text-brand-gold" />}
                <span className="text-sm font-semibold text-white">{subtitle}</span>
              </m.div>

              {/* Title */}
              <m.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-brand-beige to-white bg-clip-text text-transparent animate-gradient-shift">
                  {title}
                </span>
              </m.h1>

              {/* Description */}
              <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-white/90 leading-relaxed mb-8"
              >
                {description}
              </m.p>

              {/* CTA Button */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href={ctaLink}>
                  <m.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(218, 165, 32, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="relative bg-brand-gold hover:bg-yellow-500 text-neutral-dark font-bold px-8 py-4 rounded-lg transition-all shadow-xl overflow-hidden group"
                  >
                    {/* Shimmer effect */}
                    <m.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative flex items-center gap-2">
                      {ctaText}
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </m.button>
                </Link>
              </m.div>
            </div>

            {/* Right Column: Benefits */}
            <m.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 font-serif">
                Avantages Clés
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <m.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-4 h-4 text-neutral-dark"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white/90 leading-relaxed">{benefit}</span>
                  </m.li>
                ))}
              </ul>
            </m.div>
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
    </LazyMotion>
  )
}
