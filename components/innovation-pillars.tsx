"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Blocks, BarChart3, Crown } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function InnovationPillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useTranslation()

  const pillars = [
    {
      key: "technologies.items.0",
      icon: <Blocks className="h-8 w-8" />,
    },
    {
      key: "technologies.items.1",
      icon: <BarChart3 className="h-8 w-8" />,
    },
    {
      key: "technologies.items.2",
      icon: <Crown className="h-8 w-8" />,
    },
  ]

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-beige mb-4 font-serif">{t("innovation.title")}</h2>
          <p className="text-brand-beige/80 max-w-3xl mx-auto">{t("innovation.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-brand-beige/10 p-5 rounded-full inline-block mb-6">
                <div className="text-brand-gold">{pillar.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-brand-beige mb-3 font-serif">{t(`innovation.${pillar.key}.title`)}</h3>
              <p className="text-brand-beige/70">{t(`innovation.${pillar.key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
