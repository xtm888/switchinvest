"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { TrendingUp, Clock, Shield, Home } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

/**
 * Animated Statistics Counter Section
 * Features:
 * - Count-up animation when section enters viewport
 * - Animated icons with hover effects
 * - Responsive grid layout
 * - Premium glassmorphic cards
 */

interface Stat {
  icon: React.ReactNode
  value: number
  suffix: string
  label: string
  color: string
  description: string
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsubscribe
  }, [springValue])

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  )
}

export default function AnimatedStats() {
  const { t } = useTranslation()

  // Get stats data from translations with proper typing
  const statsDataRaw = t("home.stats.items")
  const statsData = Array.isArray(statsDataRaw) ? statsDataRaw : [
    { value: 500, suffix: "+", label: "Propriétaires Satisfaits", description: "Ont choisi SwitchInvest pour vendre rapidement" },
    { value: 24, suffix: "h", label: "Délai d'Évaluation", description: "Offre transparente en moins de 48 heures" },
    { value: 98, suffix: "%", label: "Taux de Satisfaction", description: "De nos clients recommandent nos services" },
    { value: 0, suffix: "€", label: "Frais Cachés", description: "Transparence totale, aucune surprise" }
  ]

  const icons = [Home, Clock, TrendingUp, Shield]
  const colors = [
    "from-blue-500 to-cyan-500",
    "from-brand-gold to-yellow-500",
    "from-green-500 to-emerald-500",
    "from-purple-500 to-pink-500"
  ]

  const stats: Stat[] = statsData.map((stat: any, index: number) => {
    const IconComponent = icons[index % icons.length]
    return {
      icon: <IconComponent className="w-8 h-8" />,
      value: stat.value,
      suffix: stat.suffix,
      label: stat.label,
      color: colors[index % colors.length],
      description: stat.description
    }
  })

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-beige/30 to-white" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
            {t("home.stats.title") || "Nos Résultats Parlent d'Eux-Mêmes"}
          </h2>
          <p className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            {t("home.stats.subtitle") || "Des chiffres qui témoignent de notre engagement envers l'excellence"}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Glassmorphic Card */}
              <div className="relative h-full bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Animated Icon Container */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-6 shadow-lg`}
                >
                  {stat.icon}
                </motion.div>

                {/* Counter */}
                <div className="mb-3">
                  <div className="text-4xl md:text-5xl font-bold text-brand-teal font-serif">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-dark/60 leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-bl-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-dark/70 mb-6">
            {t("home.stats.ctaText") || "Rejoignez des centaines de propriétaires satisfaits"}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-brand-teal to-cyan-600 text-white font-serif px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            {t("home.stats.ctaButton") || "Commencer Maintenant"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
