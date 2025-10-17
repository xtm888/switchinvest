"use client"

import { useTranslation } from "@/hooks/use-translation"
import ServiceHero from "@/components/services/ServiceHero"
import ProcessTimeline from "@/components/services/ProcessTimeline"
import CaseStudiesSection, { CaseStudy } from "@/components/services/CaseStudyCard"
import FAQAccordion, { FAQItem } from "@/components/services/FAQAccordion"
import { Compass, PenTool, Hammer, Key, Building2, Clock, Euro, Star, TrendingUp } from "lucide-react"

export const dynamic = 'force-dynamic'

export default function DevelopmentPage() {
  const { t } = useTranslation()

  // Process Steps
  const processSteps = t("services.development.process.steps").map((step: any, index: number) => ({
    number: `0${index + 1}`,
    title: step.title,
    description: step.description,
    icon: [Compass, PenTool, Hammer, Key, Building2][index],
    duration: step.duration || ""
  }))

  // Case Studies
  const caseStudiesData = t("services.development.caseStudies.items")
  const caseStudies: CaseStudy[] = caseStudiesData.map((study: any) => ({
    title: study.name,
    client: study.name,
    category: study.category,
    challenge: study.challenge,
    solution: study.solution,
    results: study.results?.map((r: any) => r.label + ": " + r.value).join(", ") || "",
    metrics: study.results?.map((r: any, idx: number) => ({
      label: r.label,
      value: r.value,
      icon: [TrendingUp, Star, Clock, Euro][idx % 4]
    })) || [],
    testimonial: study.testimonial ? {
      quote: study.testimonial,
      author: study.name.split(" - ")[0],
      role: t("common.client") || "Client"
    } : undefined
  }))

  // FAQs
  const faqsData = t("services.development.faqs.items")
  const faqs: FAQItem[] = faqsData.map((faq: any) => ({
    question: faq.question,
    answer: faq.answer,
    category: faq.category || "Général"
  }))

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <ServiceHero
        title={t("services.development.hero.title")}
        subtitle={t("services.development.hero.subtitle")}
        description={t("services.development.hero.description")}
        benefits={t("services.development.hero.benefits")}
        ctaText={t("services.development.hero.cta")}
        ctaLink="/contact"
        gradientFrom="from-orange-900"
        gradientTo="to-orange-700"
        icon={Building2}
      />

      {/* Process Timeline */}
      <ProcessTimeline
        steps={processSteps}
        title={t("services.development.process.title")}
        subtitle={t("services.development.process.subtitle")}
      />

      {/* Project Types Section */}
      <section className="py-16 md:py-24 bg-brand-beige/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-4 font-serif">
              {t("services.development.projectTypes.title") || "Types de Projets que Nous Développons"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold text-brand-teal mb-2">
                {t("services.development.projectTypes.residential.title") || "Résidentiel"}
              </h3>
              <p className="text-neutral-dark/70">
                {t("services.development.projectTypes.residential.description") || "Appartements, maisons, résidences"}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-brand-teal mb-2">
                {t("services.development.projectTypes.commercial.title") || "Commercial"}
              </h3>
              <p className="text-neutral-dark/70">
                {t("services.development.projectTypes.commercial.description") || "Bureaux, commerces, retail"}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-teal mb-2">
                {t("services.development.projectTypes.mixed.title") || "Mixte"}
              </h3>
              <p className="text-neutral-dark/70">
                {t("services.development.projectTypes.mixed.description") || "Projets multi-usages"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudiesSection
        caseStudies={caseStudies}
        title={t("services.development.caseStudies.title")}
        subtitle={t("services.development.caseStudies.subtitle")}
      />

      {/* FAQ Section */}
      <FAQAccordion
        faqs={faqs}
        title={t("services.development.faqs.title")}
        subtitle={t("services.development.faqs.subtitle")}
        showSearch={true}
      />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-900 to-orange-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
            {t("cta.title") || "Un Projet de Développement en Tête ?"}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {t("cta.subtitle") || "Discutons de votre projet et étudions sa faisabilité ensemble"}
          </p>
          <button className="bg-brand-gold hover:bg-yellow-500 text-neutral-dark font-bold px-8 py-4 rounded-lg transition-colors shadow-xl">
            {t("cta.primaryButton") || "Étude de Faisabilité Gratuite"}
          </button>
          <p className="text-sm text-white/70 mt-6">
            {t("cta.secondaryText") || "✓ Étude gratuite • ✓ Rendez-vous sur site • ✓ Business plan inclus"}
          </p>
        </div>
      </section>
    </main>
  )
}
