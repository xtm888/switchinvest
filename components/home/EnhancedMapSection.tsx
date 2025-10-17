"use client"

import { m, LazyMotion, domAnimation } from "framer-motion"
import { MapPin, TrendingUp, Clock, Award, Users, Quote } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { LazyLeafletMap } from "@/components/lazy-components"

/**
 * Enhanced Map Section with Animated Stats Overlay
 * Features:
 * - Glassmorphism stats cards floating over map
 * - Animated counter effects
 * - Regional statistics by area
 * - Premium visual design matching hero/stats sections
 */

export default function EnhancedMapSection() {
  const { t } = useTranslation()

  // Regional statistics data
  const regionalStats = [
    {
      icon: MapPin,
      label: t("home.map.stats.coverage") || "National Coverage",
      value: "100%",
      subtext: t("home.map.stats.coverageText") || "All provinces served",
      color: "from-brand-teal to-cyan-600"
    },
    {
      icon: TrendingUp,
      label: t("home.map.stats.deals") || "Properties Sold",
      value: "850+",
      subtext: t("home.map.stats.dealsText") || "Across Belgium",
      color: "from-brand-gold to-yellow-500"
    },
    {
      icon: Clock,
      label: t("home.map.stats.response") || "Avg Response Time",
      value: "24h",
      subtext: t("home.map.stats.responseText") || "First offer delivered",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      label: t("home.map.stats.satisfaction") || "Client Satisfaction",
      value: "98%",
      subtext: t("home.map.stats.satisfactionText") || "5-star reviews",
      color: "from-green-500 to-emerald-600"
    }
  ]

  // Regional testimonial snippets
  const regionalTestimonials = [
    {
      region: t("home.map.testimonials.brussels.region") || "Brussels",
      quote: t("home.map.testimonials.brussels.quote") || "Quick response and excellent service!",
      author: t("home.map.testimonials.brussels.author") || "Marie D.",
      position: "top-4 left-4",
      color: "from-brand-teal to-cyan-600"
    },
    {
      region: t("home.map.testimonials.antwerp.region") || "Antwerp",
      quote: t("home.map.testimonials.antwerp.quote") || "Professional team, fair price received.",
      author: t("home.map.testimonials.antwerp.author") || "Johan V.",
      position: "top-4 right-4",
      color: "from-brand-gold to-yellow-500"
    },
    {
      region: t("home.map.testimonials.liege.region") || "Liège",
      quote: t("home.map.testimonials.liege.quote") || "Sold my property in record time!",
      author: t("home.map.testimonials.liege.author") || "Sophie L.",
      position: "bottom-20 left-4",
      color: "from-purple-500 to-pink-500"
    },
    {
      region: t("home.map.testimonials.ghent.region") || "Ghent",
      quote: t("home.map.testimonials.ghent.quote") || "Trustworthy and transparent process.",
      author: t("home.map.testimonials.ghent.author") || "Lucas M.",
      position: "bottom-20 right-4",
      color: "from-green-500 to-emerald-600"
    }
  ]

  return (
    <LazyMotion features={domAnimation} strict>
    <section className="relative bg-gradient-to-b from-brand-beige via-white to-brand-beige pt-24 pb-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-semibold">
              {t("home.map.badge") || "National Presence"}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal mb-4 font-serif">
            {t("home.map.title") || "Notre Présence en Belgique"}
          </h2>
          <p className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            {t("home.map.subtitle") || "Service disponible dans toute la Belgique avec expertise locale"}
          </p>
        </m.div>

        {/* Map Container with Stats Overlay */}
        <div className="relative max-w-7xl mx-auto">
          {/* Animated Stats Grid - Positioned Above Map */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {regionalStats.map((stat, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-white/70 backdrop-blur-2xl rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-white/20 hover:border-brand-gold/60 transition-all duration-300 h-full overflow-hidden">
                  {/* Glassmorphism background layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent rounded-2xl" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-500`} />

                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  {/* Icon */}
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-6 h-6" />
                    </div>

                    {/* Value */}
                    <div className="text-3xl md:text-4xl font-bold text-brand-teal mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-teal group-hover:to-brand-gold transition-all duration-300">
                      {stat.value}
                    </div>

                    {/* Label */}
                    <div className="text-sm font-semibold text-neutral-dark/80 mb-1">
                      {stat.label}
                    </div>

                    {/* Subtext */}
                    <div className="text-xs text-neutral-dark/60">
                      {stat.subtext}
                    </div>
                  </div>

                  {/* Hover effect indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`} />
                </div>
              </m.div>
            ))}
          </div>

          {/* Map Container with Enhanced Styling */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            {/* Decorative border wrapper */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-teal via-brand-gold to-brand-teal opacity-20 blur-2xl rounded-3xl" />

            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-brand-beige/30">
              {/* Map component */}
              <div className="relative z-0">
                <LazyLeafletMap />
              </div>

              {/* Regional Testimonial Snippets - Floating over map */}
              <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block">
                {regionalTestimonials.map((testimonial, index) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className={`absolute ${testimonial.position} max-w-xs pointer-events-auto`}
                  >
                    <div className="group relative bg-white/70 backdrop-blur-2xl rounded-xl p-4 shadow-lg hover:shadow-2xl border border-white/30 hover:border-brand-gold/50 transition-all duration-300 overflow-hidden">
                      {/* Glassmorphism background layers */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent rounded-xl" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500`} />

                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      <div className="relative z-10">
                        {/* Quote icon */}
                        <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${testimonial.color} text-white mb-2 shadow-md`}>
                          <Quote className="w-4 h-4" />
                        </div>

                        {/* Region badge */}
                        <div className="text-xs font-semibold text-brand-teal mb-2">
                          {testimonial.region}
                        </div>

                        {/* Testimonial quote */}
                        <p className="text-sm text-neutral-dark/80 mb-2 italic">
                          "{testimonial.quote}"
                        </p>

                        {/* Author */}
                        <div className="text-xs font-medium text-neutral-dark/60">
                          — {testimonial.author}
                        </div>
                      </div>

                      {/* Hover accent line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${testimonial.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl`} />
                    </div>
                  </m.div>
                ))}
              </div>

              {/* Floating "View Properties" Badge */}
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
              >
                <div className="relative bg-white/80 backdrop-blur-2xl px-6 py-3 rounded-full shadow-xl border border-white/30 hover:border-brand-gold/50 flex items-center gap-3 overflow-hidden group transition-all duration-300">
                  {/* Glassmorphism background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-white/40 rounded-full" />

                  {/* Animated shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />

                  <Users className="w-5 h-5 text-brand-teal relative z-10" />
                  <span className="text-sm font-semibold text-brand-teal relative z-10">
                    {t("home.map.floatingBadge") || "Serving clients nationwide since 2018"}
                  </span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse relative z-10" />
                </div>
              </m.div>
            </div>
          </m.div>

          {/* Regional Highlights - Optional Bottom Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-neutral-dark/60 max-w-3xl mx-auto">
              {t("home.map.footerText") ||
                "Our expert team operates across all Belgian provinces with local market knowledge. From Brussels to Antwerp, Liège to Ghent - we're here to help you unlock your property's value."}
            </p>
          </m.div>
        </div>
      </div>
    </section>
    </LazyMotion>
  )
}
