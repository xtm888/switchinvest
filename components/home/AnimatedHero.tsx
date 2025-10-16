"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "@/hooks/use-translation"

/**
 * Premium Animated Hero Section
 * Features:
 * - Auto-playing background video with fallback gradient
 * - Animated text entrance with Framer Motion
 * - Dual CTA buttons with micro-interactions
 * - Responsive design with mobile optimizations
 */

export default function AnimatedHero() {
  const { t } = useTranslation()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Delay video loading until after initial render for better LCP
    const timer = setTimeout(() => {
      if (!isMobile) {
        setShouldLoadVideo(true)
      }
    }, 1000)

    return () => {
      window.removeEventListener('resize', checkMobile)
      clearTimeout(timer)
    }
  }, [isMobile])

  useEffect(() => {
    // Ensure video autoplays after it's loaded
    if (videoRef.current && shouldLoadVideo) {
      videoRef.current.play().catch(err => {
        console.log("Video autoplay failed:", err)
      })
    }
  }, [shouldLoadVideo])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video or Animated Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Only load video on desktop and after initial render */}
        {shouldLoadVideo && !isMobile && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/images/hero-poster.jpg"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-20' : 'opacity-0'
            }`}
            onLoadedData={() => setVideoLoaded(true)}
            aria-label="Background video showing premium real estate"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
            <source src="/videos/hero-bg.webm" type="video/webm" />
            <track kind="captions" src="/videos/hero-captions.vtt" srcLang="en" label="English" />
          </video>
        )}

        {/* Animated CSS Gradient Fallback - Always visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-brand-teal/95 to-brand-gold/30 animate-gradient-shift" />

        {/* Premium Overlay Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-2xl">
              <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
              <span className="text-white font-medium text-sm md:text-base">
                {t("home.hero.badge") || "500+ Properties Purchased Directly"}
              </span>
            </div>
          </motion.div>

          {/* Main Headline - Staggered Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-serif"
          >
            {t("home.hero.title") || "Transformez Votre Propriété"}
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold bg-clip-text text-transparent">
                {t("home.hero.titleHighlight") || "en Possibilités"}
              </span>
              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 origin-left"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {t("home.hero.subtitle") || "Vente rapide, évaluation transparente en 24-48h."}
            <br className="hidden md:block" />
            {t("home.hero.features") || "Zéro commission • Aucune réparation requise"}
          </motion.p>

          {/* CTA Buttons with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(218, 165, 32, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-brand-gold to-yellow-500 text-neutral-dark font-serif px-8 py-4 rounded-lg font-semibold shadow-2xl overflow-hidden min-w-[280px]"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <span className="relative flex items-center justify-center gap-2">
                  {t("home.hero.ctaPrimary") || "Évaluation Gratuite Maintenant"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>

            {/* Secondary CTA */}
            <Link href="#how-it-works">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-serif px-8 py-4 rounded-lg font-semibold border-2 border-white/30 hover:border-white/50 transition-all min-w-[280px] flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {t("home.hero.ctaSecondary") || "Voir Comment Ça Marche"}
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Indicators - Animated on Scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm"
          >
            {(Array.isArray(t("home.hero.trustIndicators")) ? t("home.hero.trustIndicators") : [
              "24-48h Offre Garantie",
              "Aucune Commission",
              "Achat en l'État"
            ]).map((indicator: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{indicator}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-wider">{t("home.hero.scrollText") || "Découvrir"}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
