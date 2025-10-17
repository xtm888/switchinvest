"use client"

import Link from "next/link"
import { m, LazyMotion, domAnimation } from "framer-motion"
import { Home, Search, Mail, FileText } from "lucide-react"
import { usePathname } from "next/navigation"

// Static translations for the not-found page
const translations = {
  fr: {
    title: "Page Introuvable",
    message: "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
    backHome: "Retour à l'accueil",
    popularPagesTitle: "Pages Populaires",
    needHelp: "Besoin d'aide ?",
    contactTeam: "Contactez notre équipe",
    links: { home: "Accueil", services: "Services", blog: "Blog", contact: "Contact" }
  },
  en: {
    title: "Page Not Found",
    message: "Sorry, the page you are looking for does not exist or has been moved.",
    backHome: "Back to Home",
    popularPagesTitle: "Popular Pages",
    needHelp: "Need help?",
    contactTeam: "Contact our team",
    links: { home: "Home", services: "Services", blog: "Blog", contact: "Contact" }
  },
  nl: {
    title: "Pagina Niet Gevonden",
    message: "Sorry, de pagina die u zoekt bestaat niet of is verplaatst.",
    backHome: "Terug naar Home",
    popularPagesTitle: "Populaire Pagina's",
    needHelp: "Hulp nodig?",
    contactTeam: "Neem contact op met ons team",
    links: { home: "Home", services: "Diensten", blog: "Blog", contact: "Contact" }
  },
  de: {
    title: "Seite Nicht Gefunden",
    message: "Entschuldigung, die gesuchte Seite existiert nicht oder wurde verschoben.",
    backHome: "Zurück zur Startseite",
    popularPagesTitle: "Beliebte Seiten",
    needHelp: "Brauchen Sie Hilfe?",
    contactTeam: "Kontaktieren Sie unser Team",
    links: { home: "Startseite", services: "Dienstleistungen", blog: "Blog", contact: "Kontakt" }
  }
}

export default function NotFound() {
  const pathname = usePathname()

  // Detect locale from pathname
  const locale = pathname?.startsWith('/fr') ? 'fr'
    : pathname?.startsWith('/en') ? 'en'
    : pathname?.startsWith('/nl') ? 'nl'
    : pathname?.startsWith('/de') ? 'de'
    : 'fr' // default

  const t = translations[locale]

  const popularPages = [
    { name: t.links.home, href: `/${locale}`, icon: Home },
    { name: t.links.services, href: `/${locale}/services`, icon: Search },
    { name: t.links.blog, href: `/${locale}/blog`, icon: FileText },
    { name: t.links.contact, href: `/${locale}/contact`, icon: Mail }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-beige/30 to-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* 404 Number */}
          <m.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-64 h-64 mx-auto">
              <m.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                className="text-9xl font-bold text-brand-teal/10 font-serif"
              >
                404
              </m.h1>

              {/* Floating Elements */}
              <m.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-16 h-16 bg-brand-gold/20 rounded-full blur-xl"
              />
              <m.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 w-20 h-20 bg-brand-teal/20 rounded-full blur-xl"
              />
            </div>
          </m.div>

          {/* Title */}
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-brand-teal mb-4 font-serif"
          >
            {t.title}
          </m.h2>

          {/* Description */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-neutral-dark/70 mb-8 max-w-2xl mx-auto"
          >
            {t.message}
          </m.p>

          {/* Primary Action */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <Link href={`/${locale}`}>
              <m.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
              >
                <Home className="w-5 h-5" />
                {t.backHome}
              </m.button>
            </Link>
          </m.div>

          {/* Popular Pages Grid */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-lg font-semibold text-neutral-dark mb-6">
              {t.popularPagesTitle}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {popularPages.map((page, index) => (
                <Link key={page.href} href={page.href}>
                  <m.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                    className="bg-white rounded-xl p-6 border border-brand-beige/30 hover:border-brand-gold/50 transition-all group"
                  >
                    <page.icon className="w-8 h-8 text-brand-teal group-hover:text-brand-gold transition-colors mx-auto mb-3" />
                    <p className="text-sm font-semibold text-neutral-dark group-hover:text-brand-gold transition-colors">
                      {page.name}
                    </p>
                  </m.div>
                </Link>
              ))}
            </div>
          </m.div>

          {/* Help Text */}
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-sm text-neutral-dark/60 mt-12"
          >
            {t.needHelp}{" "}
            <Link href={`/${locale}/contact`} className="text-brand-teal hover:text-brand-gold transition-colors font-semibold">
              {t.contactTeam}
            </Link>
          </m.p>
        </m.div>
      </div>
    </div>
  )
}
