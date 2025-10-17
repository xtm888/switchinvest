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

  const trustBadges: TrustBadge[] = [
    {
      icon: Shield,
      title: t("home.trustBadges.gdpr.title") || "GDPR Compliant",
      description: t("home.trustBadges.gdpr.description") || "Your data is fully protected under EU regulations",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Lock,
      title: t("home.trustBadges.encryption.title") || "AES-256 Encryption",
      description: t("home.trustBadges.encryption.description") || "Bank-level security for all transactions",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: FileCheck,
      title: t("home.trustBadges.certified.title") || "Certified Real Estate",
      description: t("home.trustBadges.certified.description") || "Licensed and insured professionals",
      color: "from-brand-gold to-yellow-500"
    },
    {
      icon: Award,
      title: t("home.trustBadges.quality.title") || "Quality Guaranteed",
      description: t("home.trustBadges.quality.description") || "Transparent process and fair pricing",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: CheckCircle2,
      title: t("home.trustBadges.verified.title") || "Verified Reviews",
      description: t("home.trustBadges.verified.description") || "Real feedback from satisfied clients",
      color: "from-brand-teal to-cyan-700"
    },
    {
      icon: Globe,
      title: t("home.trustBadges.national.title") || "National Coverage",
      description: t("home.trustBadges.national.description") || "Serving all Belgian regions",
      color: "from-indigo-500 to-blue-600"
    }
  ]

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
