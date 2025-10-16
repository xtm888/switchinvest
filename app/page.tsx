"use client"

/**
 * PREMIUM HOMEPAGE FOR SWITCHINVEST
 *
 * This is a complete redesign of the homepage with all premium features:
 * - Animated hero with video background
 * - Animated statistics with counters
 * - Premium testimonials carousel
 * - Trust & security badges
 * - Featured blog cards
 * - Full mobile responsiveness
 * - Accessibility optimized
 * - Performance optimized
 *
 * INSTALLATION STEPS:
 * 1. Ensure all component files are created in /components/home/
 * 2. Add custom animations to globals.css (already done)
 * 3. Replace /app/page.tsx with this file or create new route
 * 4. Add video file to /public/videos/hero-bg.mp4
 * 5. Add testimonial images to /public/testimonials/
 * 6. Run `npm run dev` to see the premium homepage
 *
 * CUSTOMIZATION:
 * - Update video URL in AnimatedHero component
 * - Update testimonial data in TestimonialsCarousel
 * - Update stats in AnimatedStats component
 * - Add press logos in TestimonialsCarousel
 */

import { useTranslation } from "@/hooks/use-translation"
import dynamic from "next/dynamic"
import AnimatedHero from "@/components/home/AnimatedHero"
import AnimatedStats from "@/components/home/AnimatedStats"
import StructuredData from '@/components/structured-data'

// Lazy load heavy components to reduce initial bundle
const EnhancedMapSection = dynamic(
  () => import("@/components/home/EnhancedMapSection"),
  {
    ssr: false,
    loading: () => <div className="h-[500px] bg-gray-100 animate-pulse" />
  }
)

const TestimonialsCarousel = dynamic(
  () => import("@/components/home/TestimonialsCarousel"),
  {
    loading: () => <div className="h-[400px] bg-gray-100 animate-pulse" />
  }
)

const TrustBadges = dynamic(
  () => import("@/components/home/TrustBadges"),
  {
    loading: () => <div className="h-[300px] bg-gray-100 animate-pulse" />
  }
)

const FeaturedBlogCard = dynamic(
  () => import("@/components/home/FeaturedBlogCard"),
  {
    loading: () => <div className="h-[400px] bg-gray-100 animate-pulse" />
  }
)

// Import existing components that are still good
import {
  LazyServiceModules,
  LazyInnovationPillars,
  LazyCallToAction,
  LazyFAQ,
} from '@/components/lazy-components'

export default function PremiumHomePage() {
  const { t } = useTranslation()

  return (
    <main className="overflow-x-hidden">
      {/* SEO Structured Data */}
      <StructuredData type="home" />

      {/* 1. HERO SECTION - Full-width animated hero with video background */}
      <AnimatedHero />

      {/* 2. ANIMATED STATISTICS - Count-up animation with premium cards */}
      <AnimatedStats />

      {/* 3. SERVICE MODULES - Keep existing component (already good) */}
      <section id="services" className="py-16 md:py-24 bg-brand-beige">
        <LazyServiceModules />
      </section>

      {/* 4. TRUST & SECURITY BADGES - GDPR, AES-256, certifications */}
      <TrustBadges />

      {/* 5. ENHANCED MAP SECTION - Premium map with animated stats overlay */}
      <EnhancedMapSection />

      {/* 6. TESTIMONIALS CAROUSEL - Premium auto-rotating carousel */}
      <TestimonialsCarousel />

      {/* 7. INNOVATION PILLARS - Keep existing component */}
      <section id="technologies" className="py-16 md:py-24 bg-brand-teal text-white">
        <LazyInnovationPillars />
      </section>

      {/* 8. FEATURED BLOG CARDS - Latest resources with hover effects */}
      <FeaturedBlogCard />

      {/* 9. FAQ SECTION - Keep existing component */}
      <section className="py-16 md:py-24 bg-white">
        <LazyFAQ />
      </section>

      {/* 10. FINAL CTA - Keep existing component */}
      <section className="py-24 bg-brand-beige">
        <LazyCallToAction />
      </section>
    </main>
  )
}
