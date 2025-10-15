import React from "react";
import type { Metadata } from "next"
import Script from "next/script"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { StickyCTA } from "@/components/sticky-cta"
import { LanguageProvider } from "@/contexts/language-context"
import { Playfair_Display } from 'next/font/google';
import ClientLayoutWrapper from '@/components/client-layout-wrapper';
import "./globals.css"

// Configure Playfair Display font
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair', // CSS variable for Tailwind
});

export const metadata: Metadata = {
  metadataBase: new URL('https://switchinvest.be'),
  title: {
    default: "SwitchInvest | Premium Real Estate Investment & Management Services in Belgium",
    template: "%s | SwitchInvest",
  },
  description: "SwitchInvest offers premium real estate investment and property management services across Belgium. Specializing in residential, commercial, and mixed-use properties with a focus on excellence and discretion.",
  keywords: ["real estate", "property investment", "Belgium", "Brussels", "Antwerp", "property management", "commercial real estate", "residential properties", "luxury real estate"],
  authors: [{ name: "SwitchInvest" }],
  creator: "SwitchInvest",
  publisher: "SwitchInvest",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [
      { url: '/favicon.ico' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://switchinvest.be/',
    title: 'SwitchInvest | Premium Real Estate Investment in Belgium',
    description: 'SwitchInvest specializes in high-quality real estate investment opportunities across Belgium.',
    siteName: 'SwitchInvest',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SwitchInvest - Premium Real Estate Investment in Belgium'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SwitchInvest | Premium Real Estate Investment in Belgium',
    description: 'SwitchInvest specializes in high-quality real estate investment opportunities across Belgium.',
    images: ['/images/twitter-image.jpg']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-white flex flex-col min-h-screen">
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BP7KNJXL5G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BP7KNJXL5G');
          `}
        </Script>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-gold focus:text-neutral-dark focus:rounded-lg focus:font-semibold"
        >
          Aller au contenu principal
        </a>
        <ClientLayoutWrapper>
          <LanguageProvider>
            {/* Google Tag Manager (noscript) */}
            <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
            {/* End Google Tag Manager (noscript) */}
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
              <CustomCursor />
              <Navigation />
              <main id="main-content" className="pt-24 flex-grow">
                {children}
              </main>
              <Footer />
              <StickyCTA />
              <CookieConsent />
            </ThemeProvider>
          </LanguageProvider>
        </ClientLayoutWrapper>
      </body>
    </html>
  )
}
