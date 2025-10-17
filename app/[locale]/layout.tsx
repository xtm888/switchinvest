import { notFound } from 'next/navigation'
import { LanguageProvider } from '@/contexts/language-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StickyCTA } from '@/components/sticky-cta'
import { CookieConsent } from '@/components/cookie-consent'

const locales = ['fr', 'nl', 'en', 'de']

export async function generateStaticParams() {
  // Only generate French pages statically, others will be generated on-demand
  return [{ locale: 'fr' }]
}

export const dynamicParams = true // Allow other locales to be generated on-demand

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  // Validate locale
  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <LanguageProvider key={locale} initialLocale={locale}>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-gold focus:text-neutral-dark focus:rounded-lg focus:font-semibold"
      >
        Aller au contenu principal
      </a>
      <Navigation />
      <main id="main-content" className="pt-24 flex-grow">
        {children}
      </main>
      <Footer />
      <StickyCTA />
      <CookieConsent />
    </LanguageProvider>
  )
}
