"use client"

import { useRef } from "react"
import { m, LazyMotion, domAnimation, useInView } from "framer-motion"
import { useTranslation } from "@/hooks/use-translation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useTranslation()

  // Get FAQ items from translations
  const faqItems = t("faqs") as Array<{ question: string; answer: string }>

  return (
    <LazyMotion features={domAnimation} strict>
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-4 text-center font-serif">
            {t("home.faq.title") || "Questions Fréquemment Posées"}
          </h2>
          <p className="text-neutral-dark/70 text-center mb-12 max-w-2xl mx-auto">
            {t("home.faq.subtitle") || "Vous avez des questions sur la vente rapide de votre maison ou nos services ? Trouvez les réponses ici."}
          </p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems && faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-brand-beige/30 rounded-lg px-6 bg-brand-beige/10"
              >
                <AccordionTrigger className="text-left font-serif text-lg text-brand-teal hover:text-brand-teal/80 hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-dark/80 pb-6 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional CTA */}
          <div className="mt-12 text-center">
            <p className="text-neutral-dark/70 mb-4">
              {t("home.faq.stillHaveQuestions") || "Vous ne trouvez pas la réponse à votre question ?"}
            </p>
            <a
              href="/contact"
              className="inline-block bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-serif px-8 py-3 rounded-lg transition-colors"
            >
              {t("home.faq.contactButton") || "Contactez-nous"}
            </a>
          </div>
        </m.div>
      </div>
    </section>
    </LazyMotion>
  )
}
