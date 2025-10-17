"use client"

import { m, LazyMotion, domAnimation } from "framer-motion"
import { LucideIcon, TrendingUp, Clock, Euro, ArrowRight } from "lucide-react"
import Link from "next/link"

/**
 * Case Study Card Component
 * Showcase client success stories with metrics
 */

export interface CaseStudy {
  title: string
  client: string
  category: string
  challenge: string
  solution: string
  results: string
  metrics: {
    label: string
    value: string
    icon: LucideIcon
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  link?: string
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  index?: number
}

export function CaseStudyCard({ caseStudy, index = 0 }: CaseStudyCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <m.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="h-full bg-white rounded-2xl border border-brand-beige/30 shadow-lg hover:shadow-2xl transition-shadow overflow-hidden group"
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-brand-teal to-brand-teal/90 p-6 text-white relative overflow-hidden">
          <m.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-10 -top-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl"
          />

          <div className="relative z-10">
            <div className="inline-block bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full text-xs font-semibold mb-3">
              {caseStudy.category}
            </div>
            <h3 className="text-2xl font-bold mb-2 font-serif">
              {caseStudy.title}
            </h3>
            <p className="text-white/80 text-sm">
              Client: {caseStudy.client}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Challenge */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-brand-teal mb-2 uppercase tracking-wide">
              Défi
            </h4>
            <p className="text-neutral-dark/80 text-sm leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-brand-teal mb-2 uppercase tracking-wide">
              Solution
            </h4>
            <p className="text-neutral-dark/80 text-sm leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>

          {/* Results */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-brand-teal mb-2 uppercase tracking-wide">
              Résultats
            </h4>
            <p className="text-neutral-dark/80 text-sm leading-relaxed mb-4">
              {caseStudy.results}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3">
              {caseStudy.metrics.map((metric, idx) => (
                <m.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                  className="bg-brand-gold/10 rounded-lg p-3 text-center"
                >
                  <metric.icon className="w-5 h-5 text-brand-teal mx-auto mb-1" />
                  <div className="text-lg font-bold text-brand-teal">
                    {metric.value}
                  </div>
                  <div className="text-xs text-neutral-dark/60">
                    {metric.label}
                  </div>
                </m.div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <div className="bg-brand-beige/30 rounded-lg p-4 mb-6 border-l-4 border-brand-gold">
              <p className="text-neutral-dark/80 italic text-sm mb-2">
                "{caseStudy.testimonial.quote}"
              </p>
              <div className="text-xs text-neutral-dark/60">
                <span className="font-semibold">{caseStudy.testimonial.author}</span>
                {caseStudy.testimonial.role && (
                  <>, {caseStudy.testimonial.role}</>
                )}
              </div>
            </div>
          )}

          {/* Read More Link */}
          {caseStudy.link && (
            <Link href={caseStudy.link}>
              <m.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-brand-teal font-semibold text-sm group-hover:text-brand-gold transition-colors"
              >
                <span>Lire l'étude complète</span>
                <ArrowRight className="w-4 h-4" />
              </m.div>
            </Link>
          )}
        </div>
      </m.div>
    </m.div>
  )
}

/**
 * Case Studies Section Component
 * Grid of case study cards
 */

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
  title?: string
  subtitle?: string
}

export default function CaseStudiesSection({
  caseStudies,
  title = "Études de Cas",
  subtitle = "Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs"
}: CaseStudiesSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-teal px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">Succès Clients</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal mb-4 font-serif">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </m.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
