"use client"

import { motion } from "framer-motion"
import { Calendar, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

/**
 * Company Timeline Component
 * Vertical timeline showing company milestones and achievements
 */

export interface TimelineEvent {
  year: string
  title: string
  description: string
  icon?: LucideIcon
  highlight?: boolean
}

interface CompanyTimelineProps {
  events: TimelineEvent[]
  title?: string
  subtitle?: string
}

export default function CompanyTimeline({
  events,
  title = "Notre Histoire",
  subtitle = "Plus d'une décennie d'excellence dans l'immobilier"
}: CompanyTimelineProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-beige/30 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-teal px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold">Timeline</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal mb-4 font-serif">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-teal via-brand-gold to-brand-teal" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {events.map((event, index) => {
                const Icon = event.icon || TrendingUp
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-[calc(50%-4rem)] ${isEven ? "md:pr-8" : "md:pl-8"} pl-20 md:pl-0`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 ${
                          event.highlight
                            ? "border-brand-gold shadow-brand-gold/20"
                            : "border-brand-beige/30 hover:border-brand-gold/50"
                        }`}
                      >
                        {/* Year Badge */}
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-2xl font-bold font-serif ${
                            event.highlight ? "text-brand-gold" : "text-brand-teal"
                          }`}>
                            {event.year}
                          </span>
                          {event.highlight && (
                            <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-semibold rounded-full">
                              Milestone
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-brand-teal mb-2 font-serif">
                          {event.title}
                        </h3>
                        <p className="text-neutral-dark/80 leading-relaxed">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Center Icon */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                          event.highlight
                            ? "bg-gradient-to-br from-brand-gold to-yellow-500"
                            : "bg-gradient-to-br from-brand-teal to-brand-teal/80"
                        }`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Future Outlook Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-brand-teal to-brand-teal/90 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            {/* Floating Background Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">L'Avenir</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
                Et Ce N'est Que le Début
              </h3>
              <p className="text-brand-beige/90 max-w-2xl mx-auto leading-relaxed">
                Nous continuons d'innover et d'élargir nos services pour mieux servir nos clients.
                Notre vision : devenir le partenaire de référence pour tous vos besoins immobiliers en Belgique.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
