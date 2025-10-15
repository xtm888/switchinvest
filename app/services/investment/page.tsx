"use client"

import { useTranslation } from "@/hooks/use-translation"
import ServiceHero from "@/components/services/ServiceHero"
import ProcessTimeline from "@/components/services/ProcessTimeline"
import PricingCards, { PricingPlan } from "@/components/services/PricingCards"
import CaseStudiesSection, { CaseStudy } from "@/components/services/CaseStudyCard"
import FAQAccordion, { FAQItem } from "@/components/services/FAQAccordion"
import { Search, LineChart, Target, FileCheck, TrendingUp, Clock, Euro, Star, PieChart } from "lucide-react"

export default function InvestmentPage() {
  const { t } = useTranslation()

  // Process Steps
  const processSteps = t("services.investment.process.steps").map((step: any, index: number) => ({
    number: `0${index + 1}`,
    title: step.title,
    description: step.description,
    icon: [Search, Target, FileCheck, TrendingUp, LineChart, TrendingUp][index],
    duration: ""
  }))

  // Pricing Plans
  const pricingPlans: PricingPlan[] = t("services.investment.pricing.plans").map((plan: any) => ({
    name: plan.name,
    price: plan.price,
    currency: "€",
    period: plan.period,
    description: plan.description,
    features: plan.features,
    cta: plan.cta,
    ctaLink: "/contact",
    highlighted: plan.popular,
    badge: plan.popular ? "Recommandé" : undefined
  }))

  // Case Studies
  const caseStudiesData = t("services.investment.caseStudies.items")
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
      icon: [TrendingUp, Euro, Star, Clock, PieChart][idx % 5]
    })) || [],
    testimonial: study.testimonial ? {
      quote: study.testimonial,
      author: study.name.split(" - ")[0],
      role: t("common.client") || "Client"
    } : undefined
  }))

  // FAQs
  const faqsData = t("services.investment.faqs.items")
  const faqs: FAQItem[] = faqsData.map((faq: any) => ({
    question: faq.question,
    answer: faq.answer,
    category: faq.category || "Général"
  }))

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <ServiceHero
        title={t("services.investment.hero.title")}
        subtitle={t("services.investment.hero.subtitle")}
        description={t("services.investment.hero.description")}
        benefits={t("services.investment.hero.benefits")}
        ctaText={t("services.investment.hero.cta")}
        ctaLink="/contact"
        gradientFrom="from-blue-900"
        gradientTo="to-blue-700"
        icon={TrendingUp}
      />

      {/* Process Timeline */}
      <ProcessTimeline
        steps={processSteps}
        title={t("services.investment.process.title")}
        subtitle={t("services.investment.process.subtitle")}
      />

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-brand-beige/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-4 font-serif">
              {t("services.investment.stats.title") || "Nos Résultats en Chiffres"}
            </h2>
            <p className="text-lg text-neutral-dark/70">
              {t("services.investment.stats.subtitle") || "Plus de 10 ans d'expérience au service de nos investisseurs"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-brand-gold/20">
              <div className="text-4xl font-bold text-brand-teal mb-2">€150M+</div>
              <div className="text-neutral-dark/70">{t("services.investment.stats.assetsManaged") || "Actifs Sous Gestion"}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-brand-gold/20">
              <div className="text-4xl font-bold text-brand-teal mb-2">18%</div>
              <div className="text-neutral-dark/70">{t("services.investment.stats.avgReturn") || "Rendement Moyen Annuel"}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-brand-gold/20">
              <div className="text-4xl font-bold text-brand-teal mb-2">200+</div>
              <div className="text-neutral-dark/70">{t("services.investment.stats.dealsCompleted") || "Deals Complétés"}</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-brand-gold/20">
              <div className="text-4xl font-bold text-brand-teal mb-2">12+</div>
              <div className="text-neutral-dark/70">{t("services.investment.stats.yearsTrackRecord") || "Années d'Expérience"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingCards
        plans={pricingPlans}
        title={t("services.investment.pricing.title")}
        subtitle={t("services.investment.pricing.subtitle")}
        showToggle={false}
      />

      {/* Case Studies */}
      <CaseStudiesSection
        caseStudies={caseStudies}
        title={t("services.investment.caseStudies.title")}
        subtitle={t("services.investment.caseStudies.subtitle")}
      />

      {/* FAQ Section */}
      <FAQAccordion
        faqs={faqs}
        title={t("services.investment.faqs.title")}
        subtitle={t("services.investment.faqs.subtitle")}
        showSearch={true}
      />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
            {t("cta.title") || "Prêt à Construire Votre Patrimoine ?"}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            {t("cta.subtitle") || "Réservez une consultation gratuite avec un de nos experts"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-gold hover:bg-yellow-500 text-neutral-dark font-bold px-8 py-4 rounded-lg transition-colors shadow-xl">
              {t("cta.consultation") || "Consultation Gratuite"}
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-colors">
              {t("cta.explore") || "Explorer nos Services"}
            </button>
          </div>
          <p className="text-sm text-white/70 mt-6">
            {t("cta.secondaryText") || "✓ Sans engagement • ✓ Analyse personnalisée • ✓ Confidentialité garantie"}
          </p>
        </div>
      </section>
    </main>
  )
}
