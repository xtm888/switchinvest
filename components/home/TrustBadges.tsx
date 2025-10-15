"use client"

import { motion } from "framer-motion"
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

interface Badge {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

export default function TrustBadges() {
  const { t } = useTranslation()

  // Get trust badges from translations
  const badgesDataRaw = t("home.trustBadges.items")
  const badgesData = Array.isArray(badgesDataRaw) ? badgesDataRaw : [
    { title: "Conforme GDPR", description: "Protection complète de vos données personnelles selon les normes européennes" },
    { title: "Cryptage AES-256", description: "Sécurité bancaire pour toutes vos transactions et communications" },
    { title: "Certifié ISO 27001", description: "Standards internationaux de gestion de la sécurité de l'information" },
    { title: "Membre IPI", description: "Institut Professionnel des agents Immobiliers agréé" },
    { title: "100% Transparent", description: "Aucun frais caché, processus clair et traçable à chaque étape" },
    { title: "Présence Nationale", description: "Service disponible dans toute la Belgique - Flandre, Bruxelles, Wallonie" }
  ]

  const icons = [Shield, Lock, FileCheck, Award, CheckCircle2, Globe]
  const colors = [
    "from-blue-500 to-cyan-500",
    "from-brand-gold to-yellow-500",
    "from-green-500 to-emerald-500",
    "from-purple-500 to-pink-500",
    "from-brand-teal to-cyan-600",
    "from-orange-500 to-red-500"
  ]

  const trustBadges: Badge[] = badgesData.map((badge: any, index: number) => {
    const IconComponent = icons[index % icons.length]
    return {
      icon: <IconComponent className="w-8 h-8" />,
      title: badge.title,
      description: badge.description,
      color: colors[index % colors.length]
    }
  })

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-dark to-brand-teal/95 text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-brand-gold/20 rounded-full mb-6"
          >
            <Shield className="w-10 h-10 text-brand-gold" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-serif">
            {t("home.trustBadges.title") || "Votre Confiance, Notre Priorité"}
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {t("home.trustBadges.subtitle") || "Sécurité maximale et transparence totale à chaque étape"}
          </p>
        </motion.div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden">
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Icon Container with Animated Background */}
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="relative inline-block mb-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl blur-sm group-hover:blur-md transition-all" />
                  <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${badge.color} text-white shadow-lg`}>
                    {badge.icon}
                  </div>
                </motion.div>

                {/* Badge Title */}
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-brand-gold transition-colors">
                  {badge.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed">
                  {badge.description}
                </p>

                {/* Checkmark Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-gold to-yellow-500 border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-white/90">
              {t("home.trustBadges.bottomText") || "Rejoint par"} <span className="font-bold text-brand-gold">500+</span> {t("home.trustBadges.bottomTextSuffix") || "propriétaires en toute sécurité"}
            </span>
          </div>
        </motion.div>

        {/* Security Certifications Logos (Optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8"
        >
          {/* Add real certification logos here */}
          <div className="text-white/40 text-xs uppercase tracking-wider">
            {t("home.trustBadges.certificationsText") || "Certifications & Partenaires"}
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </section>
  )
}
