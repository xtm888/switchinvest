"use client"

import { useTranslation } from "@/hooks/use-translation"
import ServiceHero from "@/components/services/ServiceHero"
import ProcessTimeline from "@/components/services/ProcessTimeline"
import PricingCards, { PricingPlan } from "@/components/services/PricingCards"
import BeforeAfter from "@/components/services/BeforeAfter"
import CaseStudiesSection, { CaseStudy } from "@/components/services/CaseStudyCard"
import FAQAccordion, { FAQItem } from "@/components/services/FAQAccordion"
import { Search, FileText, Users, Key, Home, TrendingUp, Clock, Euro, Star } from "lucide-react"

export default function RealEstatePage() {
  const { t } = useTranslation()

  // Process Steps
  const processSteps = t("services.real_estate.process.steps").map((step: any, index: number) => ({
    number: `0${index + 1}`,
    title: step.title,
    description: step.description,
    icon: [Search, FileText, Users, TrendingUp, Key][index],
    duration: ""
  }))

  // Pricing Plans
  const pricingPlans: PricingPlan[] = t("services.real_estate.pricing.plans").map((plan: any) => ({
    name: plan.name,
    price: plan.price,
    currency: "€",
    period: plan.period,
    description: plan.description,
    features: plan.features,
    cta: plan.cta,
    ctaLink: "/contact",
    highlighted: plan.popular,
    badge: plan.popular ? t("services.real_estate.pricing.plans.1.badge") || "Plus Populaire" : undefined
  }))

  // Case Studies
  const caseStudiesData = t("services.real_estate.caseStudies.items")
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
      icon: [Euro, Clock, Star][idx % 3]
    })) || [],
    testimonial: study.testimonial ? {
      quote: study.testimonial,
      author: study.name.split(" - ")[0],
      role: t("common.client") || "Client"
    } : undefined
  }))

  // FAQs
  const faqsData = t("services.real_estate.faqs.items")
  const faqs: FAQItem[] = faqsData.map((faq: any) => ({
    question: faq.question,
    answer: faq.answer,
    category: faq.category || "Général"
  }))

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <ServiceHero
        title={t("services.real_estate.hero.title")}
        subtitle={t("services.real_estate.hero.subtitle")}
        description={t("services.real_estate.hero.description")}
        benefits={t("services.real_estate.hero.benefits")}
        ctaText={t("services.real_estate.hero.cta")}
        ctaLink="/contact"
        gradientFrom="from-brand-teal"
        gradientTo="to-brand-teal/90"
        icon={Home}
      />

      {/* Process Timeline */}
      <ProcessTimeline
        steps={processSteps}
        title={t("services.real_estate.process.title")}
        subtitle={t("services.real_estate.process.subtitle")}
      />

      {/* Before/After Section */}
      <section className="py-16 md:py-24 bg-brand-beige/30">
        <div className="container mx-auto px-4 md:px-6">
          <BeforeAfter
            beforeImage="/images/placeholder-before.jpg"
            afterImage="/images/placeholder-after.jpg"
            title={t("services.real_estate.beforeAfter.title")}
            description={t("services.real_estate.beforeAfter.subtitle")}
            beforeLabel={t("services.real_estate.beforeAfter.before")}
            afterLabel={t("services.real_estate.beforeAfter.after")}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <PricingCards
        plans={pricingPlans}
        title={t("services.real_estate.pricing.title")}
        subtitle={t("services.real_estate.pricing.subtitle")}
        showToggle={false}
      />

      {/* Case Studies */}
      <CaseStudiesSection
        caseStudies={caseStudies}
        title={t("services.real_estate.caseStudies.title")}
        subtitle={t("services.real_estate.caseStudies.subtitle")}
      />

      {/* FAQ Section */}
      <FAQAccordion
        faqs={faqs}
        title={t("services.real_estate.faqs.title")}
        subtitle={t("services.real_estate.faqs.subtitle")}
        showSearch={true}
      />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-teal to-brand-teal/90 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
            {t("cta.title") || "Prêt à Vendre Votre Propriété ?"}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {t("cta.subtitle") || "Obtenez une évaluation gratuite et découvrez combien vous pourriez obtenir pour votre bien"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-gold hover:bg-yellow-500 text-neutral-dark font-bold px-8 py-4 rounded-lg transition-colors shadow-xl">
              {t("cta.primaryButton") || "Évaluation Gratuite"}
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-colors">
              {t("cta.secondaryButton") || "Télécharger Notre Guide"}
            </button>
          </div>
          <p className="text-sm text-white/70 mt-6">
            {t("cta.secondaryText") || "✓ Sans engagement • ✓ Réponse en 24h • ✓ 100% Confidentiel"}
          </p>
        </div>
      </section>
    </main>
  )
}
