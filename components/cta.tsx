"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import Link from "next/link"

export function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { t } = useTranslation()

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-brand-teal mb-4 font-serif">{t("cta.title")}</h2>
          <p className="text-brand-gold italic mb-2 font-serif">{t("cta.tagline")}</p>
          <p className="text-neutral-dark/80 mb-8 max-w-2xl mx-auto">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-serif">
                {t("cta.consultation")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-beige/10 hover:text-brand-teal font-serif">
                {t("cta.explore")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
