"use client"

import { m, LazyMotion, domAnimation } from "framer-motion"
import { LucideIcon } from "lucide-react"

/**
 * Process Timeline Component
 * Visual representation of service delivery process
 */

interface ProcessStep {
  number: string
  title: string
  description: string
  icon: LucideIcon
  duration?: string
}

interface ProcessTimelineProps {
  steps: ProcessStep[]
  title?: string
  subtitle?: string
}

export default function ProcessTimeline({
  steps,
  title = "Notre Processus",
  subtitle = "Une approche structurée pour garantir votre succès"
}: ProcessTimelineProps) {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <m.div
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-10 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-teal px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">Processus</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal mb-4 font-serif">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </m.div>

        {/* Timeline - Desktop: Horizontal, Mobile: Vertical */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting line */}
              <m.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-gold to-brand-teal origin-left"
              />

              {/* Steps */}
              <div className="grid grid-cols-5 gap-4">
                {steps.map((step, index) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative"
                  >
                    {/* Step indicator */}
                    <div className="relative z-10 mb-6">
                      <m.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-32 h-32 mx-auto bg-white border-4 border-brand-teal rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow"
                      >
                        <div className="text-center">
                          <step.icon className="w-10 h-10 text-brand-teal mx-auto mb-1" />
                          <span className="text-2xl font-bold text-brand-gold">
                            {step.number}
                          </span>
                        </div>
                      </m.div>
                    </div>

                    {/* Step content */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-brand-teal mb-2 font-serif">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-dark/70 mb-2 leading-relaxed">
                        {step.description}
                      </p>
                      {step.duration && (
                        <span className="inline-block bg-brand-gold/10 text-brand-teal text-xs font-semibold px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      )}
                    </div>
                  </m.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-12 top-20 bottom-0 w-1 bg-gradient-to-b from-brand-teal to-brand-gold" />
                )}

                {/* Step indicator */}
                <m.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-0 top-0 w-24 h-24 bg-white border-4 border-brand-teal rounded-full flex items-center justify-center shadow-lg"
                >
                  <div className="text-center">
                    <step.icon className="w-8 h-8 text-brand-teal mx-auto mb-1" />
                    <span className="text-xl font-bold text-brand-gold">
                      {step.number}
                    </span>
                  </div>
                </m.div>

                {/* Step content */}
                <div className="bg-white border border-brand-beige/30 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-brand-teal mb-2 font-serif">
                    {step.title}
                  </h3>
                  <p className="text-neutral-dark/70 mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  {step.duration && (
                    <span className="inline-block bg-brand-gold/10 text-brand-teal text-sm font-semibold px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  )}
                </div>
              </m.div>
            ))}
          </div>
        </div>

        {/* CTA Below Timeline */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-dark/70 mb-4">
            Prêt à commencer votre projet ?
          </p>
          <m.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-teal/90 transition-colors"
          >
            Demander une Consultation Gratuite
          </m.button>
        </m.div>
      </div>
    </section>
  )
}
