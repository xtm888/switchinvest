"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useTranslation } from "@/hooks/use-translation"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  client: string
  quote: string
  rating?: number
}

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useTranslation()

  // Get testimonials from translations
  const testimonials = t("testimonials") as Testimonial[]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-brand-beige/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-4 font-serif">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-neutral-dark/70 max-w-2xl mx-auto">
              Découvrez comment nous avons aidé nos clients à libérer la valeur de leur propriété et à atteindre leurs objectifs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials && testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-brand-gold/20 hover:border-brand-gold/40 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Quote className="w-10 h-10 text-brand-gold/40" />
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-brand-gold text-brand-gold"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-neutral-dark/80 mb-6 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Client Name */}
                    <div className="border-t border-brand-beige pt-4">
                      <p className="font-serif font-semibold text-brand-teal">
                        {testimonial.client}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 px-6 py-3 rounded-full">
              <Star className="w-5 h-5 fill-brand-gold text-brand-gold" />
              <span className="text-brand-teal font-semibold">
                Note moyenne: 5.0/5
              </span>
              <span className="text-neutral-dark/60">
                • Plus de 100 clients satisfaits
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
