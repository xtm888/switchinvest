"use client"

import { m, LazyMotion, domAnimation } from "framer-motion"
import { Shield, Lock, FileCheck, Award, CheckCircle2, Globe } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

/**
 * Trust & Security Badges Section
 * Features:
 * - GDPR, AES-256 encryption, and certification badges
 * - Hover effects and animations
 * - Accessible design with ARIA labels
 * - Premium glassmorphic styling
 */

interface TrustBadge {
  icon: React.ElementType
  title: string
  description: string
  color: string
}

export default function TrustBadges() {
  const { t } = useTranslation()

  // Get badges from translations as array
  const badgesDataRaw = t("home.trustBadges.items")
  const badgesData = Array.isArray(badgesDataRaw) ? badgesDataRaw : []

  // Map icons to the badges
  const icons = [Shield, Lock, FileCheck, Award, CheckCircle2, Globe]
  const colors = [
    "from-green-500 to-emerald-600",
    "from-blue-500 to-cyan-600",
    "from-brand-gold to-yellow-500",
    "from-purple-500 to-pink-500",
    "from-brand-teal to-cyan-700",
    "from-indigo-500 to-blue-600"
  ]

  const trustBadges: TrustBadge[] = badgesData.map((badge: any, index: number) => ({
    icon: icons[index % icons.length],
    title: badge.title || "Trust Badge",
    description: badge.description || "Security and reliability",
    color: colors[index % colors.length]
  }))

  return (
    <LazyMotion features={domAnimation} strict>
    <section className="py-12 border-t border-brand-gold/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-brand-teal mb-2 font-serif">
            {t("home.trustBadges.title") || "Your Trust is Our Priority"}
          </h2>
          <p className="text-neutral-dark/70">
            {t("home.trustBadges.subtitle") || "Industry-leading security and compliance"}
          </p>
        </m.div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustBadges.map((badge, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="relative h-full bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <m.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${badge.color} text-white mb-4 shadow-lg`}
                >
                  <badge.icon className="w-7 h-7" />
                </m.div>

                {/* Content */}
                <h3 className="text-lg font-bold text-brand-teal mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-neutral-dark/70 leading-relaxed">
                  {badge.description}
                </p>

                {/* Hover Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${badge.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl`} />
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
    </LazyMotion>
  )
}
