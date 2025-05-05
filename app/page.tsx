"use client"

import { 
  LazyLeafletMap, 
  LazyStatistics, 
  LazyTrustIndicators, 
  LazySection,
  LazyServiceModules,
  LazyInnovationPillars,
  LazyCallToAction 
} from '@/components/lazy-components'
import { useTranslation } from "@/hooks/use-translation"
import StructuredData from '@/components/structured-data';

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className="">
      <StructuredData type="home" />
      {/* Hero Section with gold gradient */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-brand-teal to-brand-teal/90 overflow-hidden">
        {/* Add a gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/20 to-transparent opacity-70"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-beige mb-6 leading-snug font-serif tracking-tight">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold italic mb-8 font-serif tracking-wide">{t("hero.tagline")}</p>
          <p className="text-xl md:text-2xl text-brand-beige/90 max-w-3xl mx-auto mb-12 font-serif tracking-tight">
            {t("hero.subtitle")}
          </p>
          {/* Optional: Add a call to action button here */}
          {/* <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-neutral-dark font-serif px-8 py-3">Learn More</Button> */}
        </div>
      </section>

      {/* New Section for HTML5 Map - Padding controlled */}
      <section className="bg-brand-beige pt-24 pb-96">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-8 text-center font-serif">
            Our Presence Across Belgium
          </h2>
          <LazyLeafletMap />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-brand-teal text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <LazySection>
            <LazyStatistics />
            <LazyTrustIndicators />
          </LazySection>
        </div>
      </section>

      {/* Service Modules Section */}
      <section id="services" className="py-16 md:py-24 bg-brand-beige">
        <LazySection>
          <LazyServiceModules />
        </LazySection>
      </section>

      {/* Innovation Pillars Section */}
      <section id="technologies" className="py-16 md:py-24 bg-brand-teal text-white">
        <LazySection>
          <LazyInnovationPillars />
        </LazySection>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-brand-beige">
        <LazySection>
          <LazyCallToAction />
        </LazySection>
      </section>
    </main>
  )
}
