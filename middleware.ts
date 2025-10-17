import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['fr', 'nl', 'en', 'de']
const defaultLocale = 'fr'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.includes('.') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/videos/') ||
    pathname.startsWith('/press/') ||
    pathname.startsWith('/testimonials/') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next()
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Redirect root to default locale with 307 (Temporary Redirect) for better caching
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url), 307)
  }

  // Detect browser language and redirect
  const acceptLanguage = request.headers.get('accept-language')
  let preferredLocale = defaultLocale

  if (acceptLanguage) {
    const lang = acceptLanguage.toLowerCase()
    if (lang.includes('nl')) preferredLocale = 'nl'
    else if (lang.includes('en') && !lang.includes('fr')) preferredLocale = 'en'
    else if (lang.includes('de')) preferredLocale = 'de'
  }

  // Redirect to locale-prefixed URL with 307 for performance
  return NextResponse.redirect(new URL(`/${preferredLocale}${pathname}`, request.url), 307)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, videos, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|videos|press|testimonials).*)',
  ],
}
