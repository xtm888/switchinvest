"use client"

import { useTranslation } from "@/hooks/use-translation"
import ServiceHero from "@/components/services/ServiceHero"
import ProcessTimeline from "@/components/services/ProcessTimeline"
import PricingCards, { PricingPlan } from "@/components/services/PricingCards"
import CaseStudiesSection, { CaseStudy } from "@/components/services/CaseStudyCard"
import FAQAccordion, { FAQItem } from "@/components/services/FAQAccordion"
import { ClipboardCheck, Wrench, FileText, Bell, Shield, Clock, Euro, Star, TrendingUp } from "lucide-react"

export default function ManagementPage() {
  const { t } = useTranslation()

  // Process Steps
  const processSteps = t("services.management.process.steps").map((step: any, index: number) => ({
    number: `0${index + 1}`,
    title: step.title,
    description: step.description,
    icon: [ClipboardCheck, Wrench, FileText, Bell, TrendingUp][index],
    duration: step.duration || ""
  }))

  // Pricing Plans
  const pricingPlans: PricingPlan[] = t("services.management.pricing.plans").map((plan: any) => ({
    name: plan.name,
    price: plan.price,
    currency: "€",
    period: plan.period,
    description: plan.description,
    features: plan.features,
    cta: plan.cta,
    ctaLink: "/contact",
    highlighted: plan.popular,
    badge: plan.popular ? t("services.management.pricing.plans.1.badge") || "Populaire" : undefined
  }))

  // Case Studies
  const caseStudiesData = t("services.management.caseStudies.items")
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
      icon: [TrendingUp, Euro, Star, Clock][idx % 4]
    })) || [],
    testimonial: study.testimonial ? {
      quote: study.testimonial,
      author: study.name.split(" - ")[0],
      role: t("common.client") || "Investisseur"
    } : undefined
  }))

  // FAQs
  const faqsData = t("services.management.faqs.items")
  const faqs: FAQItem[] = faqsData.map((faq: any) => ({
    question: faq.question,
    answer: faq.answer,
    category: faq.category || "Général"
  }))

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <ServiceHero
        title={t("services.management.hero.title")}
        subtitle={t("services.management.hero.subtitle")}
        description={t("services.management.hero.description")}
        benefits={t("services.management.hero.benefits")}
        ctaText={t("services.management.hero.cta")}
        ctaLink="/contact"
        gradientFrom="from-green-900"
        gradientTo="to-green-700"
        icon={Shield}
      />

      {/* Process Timeline */}
      <ProcessTimeline
        steps={processSteps}
        title={t("services.management.process.title")}
        subtitle={t("services.management.process.subtitle")}
      />

      {/* Pricing Section */}
      <PricingCards
        plans={pricingPlans}
        title={t("services.management.pricing.title")}
        subtitle={t("services.management.pricing.subtitle")}
        showToggle={false}
      />

      {/* Case Studies */}
      <CaseStudiesSection
        caseStudies={caseStudies}
        title={t("services.management.caseStudies.title")}
        subtitle={t("services.management.caseStudies.subtitle")}
      />

      {/* FAQ Section */}
      <FAQAccordion
        faqs={faqs}
        title={t("services.management.faqs.title")}
        subtitle={t("services.management.faqs.subtitle")}
        showSearch={true}
      />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
            {t("cta.title") || "Prêt à Simplifier Votre Vie ?"}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {t("cta.subtitle") || "Obtenez un devis personnalisé et découvrez comment nous pouvons gérer votre propriété"}
          </p>
          <button className="bg-brand-gold hover:bg-yellow-500 text-neutral-dark font-bold px-8 py-4 rounded-lg transition-colors shadow-xl">
            {t("cta.primaryButton") || "Devis Gratuit"}
          </button>
          <p className="text-sm text-white/70 mt-6">
            {t("cta.secondaryText") || "✓ Sans engagement • ✓ Visite gratuite • ✓ Réponse en 24h"}
          </p>
        </div>
      </section>
    </main>
  )
}
