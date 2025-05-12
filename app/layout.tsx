import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS globally

export const metadata: Metadata = {
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Comprehensive error handling for ResizeObserver
              window.addEventListener('error', function(e) {
                if (e.message === 'ResizeObserver loop limit exceeded' || 
                    e.message === 'ResizeObserver loop completed with undelivered notifications.') {
                  e.stopImmediatePropagation();
                }
              });
              
              // Suppress specific console errors
              const originalConsoleError = console.error;
              console.error = function() {
                if (arguments[0] && 
                    typeof arguments[0] === 'string' && 
                    (arguments[0].includes('ResizeObserver') || 
                     arguments[0].includes('Warning: ReactDOM.render'))) {
                  return;
                }
                originalConsoleError.apply(console, arguments);
              };
            `
          }}
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} bg-white flex flex-col min-h-screen`}>
        <LanguageProvider>
          {/* Forcing light theme to fix contrast issues */}
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <CustomCursor />
            <Navigation />
            <main className="pt-24 flex-grow">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
