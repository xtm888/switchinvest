"use client"

import { useRef } from "react"
import { m, LazyMotion, domAnimation, useInView } from "framer-motion"
import { ClipboardCheck, TrendingUp, Cpu } from "lucide-react"
import { ServiceCard } from "./service-card"
import { useTranslation } from "@/hooks/use-translation"

export function ServiceModules() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useTranslation()

  const services = [
    {
      key: "real_estate",
      icon: <ClipboardCheck className="h-6 w-6" />,
    },
    {
      key: "development",
      icon: <Cpu className="h-6 w-6" />,
    },
  ]

  return (
    <LazyMotion features={domAnimation} strict>
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Changed text-brand-blue to text-brand-teal */}
          <h2 className="text-4xl md:text-5xl font-bold text-brand-teal mb-6 font-serif tracking-tight">{t("services.title")}</h2>
          <p className="text-lg md:text-xl text-neutral-dark/80 max-w-3xl mx-auto font-serif tracking-wide">{t("services.subtitle")}</p>
        </m.div>

        {/* Changed grid layout to 2x2 on medium screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <m.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="transition-all hover:scale-[1.02]"
            >
              <ServiceCard
                serviceKey={service.key}
                icon={service.icon}
                t={t}
              />
            </m.div>
          ))}
        </div>
      </div>
    </section>
    </LazyMotion>
  )
}
