"use client"

import { ServiceCard } from "@/components/service-card"
import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const { t } = useTranslation()

  const serviceKeys = [
    { key: "real_estate", icon: "🏠" },
    { key: "investment", icon: "💰" },
    { key: "development", icon: "🏗️" },
    { key: "management", icon: "📊" },
  ]

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-permafrost text-center mb-12 font-serif tracking-tight">
            {t("services.title")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceKeys.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="col-span-1"
              >
                <ServiceCard serviceKey={service.key} icon={service.icon} t={t} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
