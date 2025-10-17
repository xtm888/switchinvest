"use client"

import { ServiceCard } from "@/components/service-card"
import { useTranslation } from "@/hooks/use-translation"
import { m, LazyMotion, domAnimation } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import SectionDivider from "@/components/home/SectionDivider"

export default function ServicesPage() {
  const { t } = useTranslation()

  const serviceKeys = [
    { key: "real_estate", icon: "🏠" },
    { key: "development", icon: "🏗️" },
  ]

  return (
    <LazyMotion features={domAnimation} strict>
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-brand-beige/20"
    >
      {/* Hero Section - Modern design matching blog/portfolio */}
      <section className="relative bg-gradient-to-b from-brand-teal to-brand-teal/90 py-20 text-white overflow-hidden">
        {/* Floating Background Elements */}
        <m.div
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-36 h-36 bg-brand-gold/10 rounded-full blur-3xl"
        />
        <m.div
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-44 h-44 bg-white/5 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb navigation */}
          <div className="flex items-center justify-center md:justify-start text-sm mb-6 text-white/90 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              {t("common.home") || "Home"}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">
              {t("services.title")}
            </span>
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              <span className="bg-gradient-to-r from-white via-brand-gold to-white bg-clip-text text-transparent animate-gradient-shift">
                {t("services.title")}
              </span>
            </h1>
            <p className="text-xl text-brand-beige/90 max-w-2xl mx-auto">
              {t("services.subtitle") || "Comprehensive real estate solutions tailored to your needs"}
            </p>
          </m.div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="wave" />

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {serviceKeys.map((service, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="col-span-1"
              >
                <ServiceCard serviceKey={service.key} icon={service.icon} t={t} />
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </m.main>
    </LazyMotion>
  )
}
