"use client"

import { useState } from "react"
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion"
import { ChevronDown, Search } from "lucide-react"

/**
 * FAQ Accordion Component
 * Expandable FAQ section with search
 */

export interface FAQItem {
  question: string
  answer: string
  category?: string
}

interface FAQAccordionProps {
  faqs: FAQItem[]
  title?: string
  subtitle?: string
  showSearch?: boolean
}

export default function FAQAccordion({
  faqs,
  title = "Questions Fréquentes",
  subtitle = "Trouvez rapidement les réponses à vos questions",
  showSearch = true
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-beige/30">
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
            <span className="text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-teal mb-4 font-serif">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </m.div>

        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          {showSearch && (
            <m.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-dark/40" />
                <input
                  type="text"
                  placeholder="Rechercher une question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border-2 border-brand-beige/30 rounded-xl focus:border-brand-teal focus:outline-none transition-colors text-neutral-dark placeholder:text-neutral-dark/40"
                />
              </div>
              {searchQuery && (
                <p className="text-sm text-neutral-dark/60 mt-2">
                  {filteredFAQs.length} résultat{filteredFAQs.length !== 1 ? 's' : ''} trouvé{filteredFAQs.length !== 1 ? 's' : ''}
                </p>
              )}
            </m.div>
          )}

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`bg-white rounded-xl border-2 transition-all overflow-hidden ${
                    openIndex === index
                      ? 'border-brand-teal shadow-lg'
                      : 'border-brand-beige/30 hover:border-brand-teal/30 shadow-md'
                  }`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                  >
                    <span className="text-lg font-semibold text-brand-teal group-hover:text-brand-gold transition-colors">
                      {faq.question}
                    </span>
                    <m.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className={`w-6 h-6 transition-colors ${
                        openIndex === index ? 'text-brand-teal' : 'text-neutral-dark/40'
                      }`} />
                    </m.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 border-t-2 border-brand-gold/20 pt-4">
                          <m.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="text-neutral-dark/80 leading-relaxed"
                          >
                            {faq.answer}
                          </m.p>
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </m.div>
              ))
            ) : (
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white rounded-xl border border-brand-beige/30"
              >
                <p className="text-neutral-dark/60">
                  Aucune question ne correspond à votre recherche.
                </p>
              </m.div>
            )}
          </div>

          {/* Still Have Questions CTA */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center bg-gradient-to-br from-brand-teal to-brand-teal/90 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-3 font-serif">
              Vous avez encore des questions ?
            </h3>
            <p className="text-white/90 mb-6">
              Notre équipe est là pour vous aider. Contactez-nous pour une réponse personnalisée.
            </p>
            <m.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-gold hover:bg-yellow-500 text-neutral-dark font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Contactez-Nous
            </m.button>
          </m.div>
        </div>
      </div>
    </section>
  )
}
