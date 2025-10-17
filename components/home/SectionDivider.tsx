"use client"

import { m, LazyMotion, domAnimation } from "framer-motion"

/**
 * Premium Section Dividers
 * Glassmorphic and gradient separators between sections
 * Usage: <SectionDivider variant="wave" />
 */

interface SectionDividerProps {
  variant?: "wave" | "gradient" | "dots" | "glass" | "zigzag"
  className?: string
}

export default function SectionDivider({
  variant = "wave",
  className = ""
}: SectionDividerProps) {

  if (variant === "wave") {
    return (
      <div className={`relative h-24 ${className}`}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="url(#wave-gradient)"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#0f766e" />
              <stop offset="50%" stopColor="#daa520" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }

  if (variant === "gradient") {
    return (
      <LazyMotion features={domAnimation} strict>
      <div className={`relative h-1 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />
        <m.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
        />
      </div>
      </LazyMotion>
    )
  }

  if (variant === "dots") {
    return (
      <LazyMotion features={domAnimation} strict>
      <div className={`relative flex items-center justify-center gap-2 py-8 ${className}`}>
        {[...Array(5)].map((_, i) => (
          <m.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className={`w-2 h-2 rounded-full ${
              i === 2 ? "bg-brand-gold" : "bg-brand-teal"
            }`}
          />
        ))}
      </div>
      </LazyMotion>
    )
  }

  if (variant === "glass") {
    return (
      <div className={`relative h-32 flex items-center justify-center ${className}`}>
        <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-3">
            <div className="w-3 h-3 bg-brand-gold rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    )
  }

  if (variant === "zigzag") {
    return (
      <div className={`relative h-12 ${className}`}>
        <svg
          viewBox="0 0 1440 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 10L60 0L120 10L180 0L240 10L300 0L360 10L420 0L480 10L540 0L600 10L660 0L720 10L780 0L840 10L900 0L960 10L1020 0L1080 10L1140 0L1200 10L1260 0L1320 10L1380 0L1440 10V20H0V10Z"
            fill="currentColor"
            className="text-brand-teal/20"
          />
        </svg>
      </div>
    )
  }

  return null
}

/**
 * Usage Examples:
 *
 * <SectionDivider variant="wave" />
 * <SectionDivider variant="gradient" className="my-8" />
 * <SectionDivider variant="dots" />
 * <SectionDivider variant="glass" />
 * <SectionDivider variant="zigzag" />
 */
