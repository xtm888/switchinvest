"use client"

import { useState } from "react"
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion"
import { Check, Star } from "lucide-react"
import Link from "next/link"

/**
 * Premium Pricing Cards Component
 * Attractive pricing presentation with toggle and animations
 */

export interface PricingPlan {
  name: string
  price: number
  currency: string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
  ctaLink: string
  badge?: string
}

interface PricingCardsProps {
  plans: PricingPlan[]
  title?: string
  subtitle?: string
  showToggle?: boolean
}

export default function PricingCards({
  plans,
  title = "Nos Tarifs",
  subtitle = "Des solutions adaptées à vos besoins et votre budget",
  showToggle = false
}: PricingCardsProps) {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <LazyMotion features={domAnimation} strict>
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-beige/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <m.div
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-10 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-teal px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">Tarification</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal mb-4 font-serif">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* Monthly/Yearly Toggle */}
          {showToggle && (
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mt-8"
            >
              <span className={`text-sm font-semibold ${!isYearly ? 'text-brand-teal' : 'text-neutral-dark/50'}`}>
                Mensuel
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-16 h-8 bg-brand-teal rounded-full p-1 transition-colors"
              >
                <m.div
                  animate={{ x: isYearly ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-6 h-6 bg-white rounded-full shadow-md"
                />
              </button>
              <span className={`text-sm font-semibold ${isYearly ? 'text-brand-teal' : 'text-neutral-dark/50'}`}>
                Annuel
                <span className="ml-2 text-xs bg-brand-gold/20 text-brand-gold px-2 py-1 rounded-full">
                  -15%
                </span>
              </span>
            </m.div>
          )}
        </m.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <m.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-brand-gold text-neutral-dark px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Card */}
              <m.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`relative h-full bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.highlighted
                    ? 'border-2 border-brand-gold'
                    : 'border border-brand-beige/30'
                }`}
              >
                {/* Gradient overlay for highlighted plan */}
                {plan.highlighted && (
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-brand-gold/5 pointer-events-none" />
                )}

                <div className="p-8 relative z-10">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-brand-teal mb-2 font-serif">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-dark/70 mb-6 text-sm leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <AnimatePresence mode="wait">
                      <m.div
                        key={isYearly ? 'yearly' : 'monthly'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-baseline gap-1"
                      >
                        <span className="text-4xl font-bold text-brand-teal">
                          {plan.currency}{isYearly ? Math.round(plan.price * 12 * 0.85) : plan.price}
                        </span>
                        <span className="text-neutral-dark/60">
                          /{isYearly ? 'an' : plan.period}
                        </span>
                      </m.div>
                    </AnimatePresence>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <m.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-brand-teal" strokeWidth={3} />
                        </div>
                        <span className="text-neutral-dark/80 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </m.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href={plan.ctaLink}>
                    <m.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-brand-teal to-brand-teal/90 text-white shadow-lg hover:shadow-xl'
                          : 'bg-white border-2 border-brand-teal text-brand-teal hover:bg-brand-teal/5'
                      }`}
                    >
                      {plan.cta}
                    </m.button>
                  </Link>
                </div>
              </m.div>
            </m.div>
          ))}
        </div>

        {/* Trust Badge */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-neutral-dark/60">
            💳 Paiement sécurisé • 🔄 Garantie satisfait ou remboursé 30 jours • 📞 Support client disponible
          </p>
        </m.div>
      </div>
    </section>
    </LazyMotion>
  )
}
