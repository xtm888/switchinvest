# Performance Optimization Guide
## SwitchInvest Premium Website

This guide provides comprehensive performance optimization strategies and best practices for the SwitchInvest premium website.

---

## 📊 Current Build Analysis

### Bundle Sizes (After Optimization)
```
Route                       Size      First Load JS
/ (Homepage)                701 B     289 kB
/about                      10.3 kB   272 kB
/portfolio                  10.4 kB   275 kB
/contact                    10.6 kB   260 kB
/blog                       6.85 kB   280 kB
/services                   3.11 kB   259 kB
/services/real-estate       6.91 kB   238 kB
/services/investment        6.35 kB   232 kB
/services/management        5.48 kB   231 kB
/services/development       3.83 kB   229 kB

Shared JS                   176 kB (across all pages)
Total Pages                 19 (all passing ✅)
```

### Performance Targets
- **Performance**: 90+ (Lighthouse)
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100
- **FCP**: < 1.8s
- **LCP**: < 2.5s
- **TTI**: < 3.8s
- **CLS**: < 0.1

---

## 🚀 Optimization Strategies Implemented

### 1. Code Splitting & Lazy Loading

#### Component-Level Lazy Loading
```typescript
// Lazy load heavy components
const LazyLeafletMap = dynamic(() => import('@/components/lazy-components'), {
  loading: () => <InlineLoader message="Chargement de la carte..." />,
  ssr: false // Don't render on server for client-only components
})
```

#### Route-Based Code Splitting
- Next.js automatically code-splits by route
- Each page only loads its required JavaScript
- Shared components bundled separately (176 kB shared)

### 2. Image Optimization

#### Next.js Image Component
```typescript
import Image from 'next/image'

<Image
  src="/images/team/member.jpg"
  alt="Team Member"
  width={400}
  height={400}
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
/>
```

#### Image Optimization Checklist
- [ ] Convert images to WebP format
- [ ] Provide multiple image sizes (srcset)
- [ ] Add blur placeholders for smooth loading
- [ ] Use `loading="lazy"` for below-fold images
- [ ] Compress images (target: <100KB per image)
- [ ] Optimize SVGs (remove unnecessary metadata)

#### Recommended Image Sizes
```
Team Photos:        400x400px (square)   < 50KB
Portfolio Images:   1200x900px (4:3)     < 150KB
Hero Images:        1920x1080px (16:9)   < 250KB
Blog Thumbnails:    800x600px            < 80KB
Icons/Logos:        SVG or 200x200px PNG < 20KB
```

### 3. Loading States

#### Implemented Loading Components
- **PageLoader**: Full-page spinner for route transitions
- **InlineLoader**: Loading indicator for async content
- **Skeleton Components**: Placeholder UI for better UX
  - ServiceCardSkeleton
  - ProjectCardSkeleton
  - BlogCardSkeleton
  - TeamMemberSkeleton
  - TimelineEventSkeleton

#### Usage Example
```typescript
// app/portfolio/loading.tsx
export default function PortfolioLoading() {
  return (
    <main>
      <HeroSkeleton />
      <div className="grid grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    </main>
  )
}
```

### 4. Error Handling

#### Error Boundary Component
Catches JavaScript errors and displays fallback UI:
```typescript
<ErrorBoundary fallback={<CustomErrorUI />}>
  <YourComponent />
</ErrorBoundary>
```

#### Custom 404 Page
- Premium design with animated elements
- Helpful navigation to popular pages
- Search functionality suggestion
- Contact support link

### 5. Animation Performance

#### GPU-Accelerated Animations
Use `transform` and `opacity` for smooth 60fps animations:
```css
/* Good - GPU accelerated */
.element {
  transform: translateX(100px);
  opacity: 0.5;
}

/* Avoid - Triggers layout recalculation */
.element {
  left: 100px;
  width: 50%;
}
```

#### Framer Motion Best Practices
```typescript
// Use hardware-accelerated properties
<motion.div
  animate={{ x: 100, y: 50, scale: 1.2, opacity: 1 }}
  transition={{ duration: 0.3 }}
>

// Add will-change for complex animations
<motion.div
  style={{ willChange: 'transform' }}
  whileHover={{ scale: 1.1 }}
>
```

---

## 🔧 Further Optimization Opportunities

### 1. Font Optimization

#### Current Setup
```typescript
// app/layout.tsx
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})
```

#### Recommendations
- ✅ Font display: swap (already implemented)
- [ ] Subset to required characters only
- [ ] Self-host fonts for faster delivery
- [ ] Preload critical fonts

```html
<link
  rel="preload"
  href="/fonts/playfair-display.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

### 2. Critical CSS

Extract and inline critical CSS for above-the-fold content:

```typescript
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true // Requires critters package
  }
}
```

### 3. Prefetching & Preloading

#### Link Prefetching (Already Enabled)
Next.js automatically prefetches links in viewport:
```typescript
<Link href="/services" prefetch={true}>
  Services
</Link>
```

#### Resource Preloading
```html
<!-- Preload critical resources -->
<link rel="preload" href="/api/data" as="fetch" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://analytics.google.com" />
```

### 4. Database & API Optimization

#### Implement Caching
```typescript
// Cache API responses
export const revalidate = 3600 // Revalidate every hour

export async function getBlogPosts() {
  const posts = await fetch('/api/posts', {
    next: { revalidate: 3600 }
  })
  return posts
}
```

#### Use React Suspense
```typescript
import { Suspense } from 'react'

<Suspense fallback={<BlogCardSkeleton />}>
  <BlogPosts />
</Suspense>
```

### 5. Bundle Analysis

#### Analyze Bundle Size
```bash
# Install bundle analyzer
npm install @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // Your config
})

# Run analysis
ANALYZE=true npm run build
```

#### Remove Unused Dependencies
```bash
# Find unused dependencies
npm install -g depcheck
depcheck

# Remove unused packages
npm uninstall <package-name>
```

---

## 📱 Mobile Performance

### Responsive Images
```typescript
<Image
  src="/hero.jpg"
  alt="Hero"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority // For above-fold images
/>
```

### Touch Optimization
- Minimum 44x44px touch targets
- No hover-only interactions
- Fast tap response (<100ms)
- Smooth scroll performance

### Network-Aware Loading
```typescript
// Detect slow connections
if ('connection' in navigator) {
  const connection = (navigator as any).connection
  if (connection.effectiveType === '2g') {
    // Load low-res images
    // Disable autoplay videos
    // Reduce animations
  }
}
```

---

## 🎯 SEO Optimization

### Meta Tags (Already Implemented)
```typescript
export const metadata = {
  title: 'SwitchInvest - Gestion Immobilière Premium',
  description: '...',
  openGraph: {
    title: '...',
    description: '...',
    images: ['/og-image.jpg']
  }
}
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "SwitchInvest",
  "url": "https://switchinvest.be",
  "logo": "https://switchinvest.be/logo.png"
}
```

### Sitemap Generation
```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://switchinvest.be',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add all routes
  ]
}
```

---

## 🔒 Security Best Practices

### Content Security Policy
```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]
```

### Environment Variables
```bash
# .env.local (never commit)
NEXT_PUBLIC_API_URL=https://api.switchinvest.be
DATABASE_URL=postgresql://...
SECRET_KEY=...
```

---

## 📊 Monitoring & Analytics

### Web Vitals Tracking
```typescript
// app/layout.tsx
export function reportWebVitals(metric: any) {
  // Send to analytics
  if (metric.label === 'web-vital') {
    console.log(metric)
    // Analytics.track('web-vital', metric)
  }
}
```

### Error Tracking
```typescript
// Integrate Sentry or similar
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
})
```

### Performance Monitoring
- Google Analytics 4
- Google Search Console
- Vercel Analytics (if deployed on Vercel)
- Custom performance dashboard

---

## ✅ Pre-Deployment Checklist

### Performance
- [ ] Run Lighthouse audit (all pages > 90)
- [ ] Test on slow 3G connection
- [ ] Verify image optimization (WebP)
- [ ] Check bundle size (<300KB per page)
- [ ] Test loading states on slow network
- [ ] Verify lazy loading works correctly

### Functionality
- [ ] Test all forms (contact, newsletter)
- [ ] Verify all internal links work
- [ ] Test service page navigation
- [ ] Check mobile responsiveness
- [ ] Test on iOS Safari, Chrome, Firefox
- [ ] Verify error boundaries catch errors
- [ ] Test 404 page

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG AA
- [ ] All images have alt text
- [ ] Forms have proper labels
- [ ] Focus indicators visible

### SEO
- [ ] Meta tags on all pages
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Open Graph images
- [ ] Structured data implemented
- [ ] Canonical URLs set

### Security
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Environment variables secured
- [ ] API routes protected
- [ ] CORS configured correctly
- [ ] Rate limiting on forms

---

## 🚀 Deployment Optimization

### Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod

# Set environment variables
vercel env add VARIABLE_NAME
```

### CDN Configuration
- Enable automatic CDN (Vercel/Netlify)
- Configure edge caching
- Set cache headers for static assets
- Enable Brotli compression

### Edge Functions
```typescript
// app/api/data/route.ts
export const runtime = 'edge' // Deploy to edge

export async function GET(request: Request) {
  // Runs on edge network
  return new Response(JSON.stringify(data))
}
```

---

## 📈 Continuous Optimization

### Regular Audits
- **Weekly**: Check error logs
- **Bi-weekly**: Run Lighthouse audits
- **Monthly**: Review bundle sizes
- **Quarterly**: Full performance review

### A/B Testing
- Test different hero CTAs
- Experiment with image sizes
- Try different loading animations
- Test form layouts

### User Feedback
- Collect real user metrics (RUM)
- Monitor Core Web Vitals
- Track conversion rates
- Analyze user behavior

---

## 🛠️ Tools & Resources

### Performance Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

### Image Optimization
- [Squoosh](https://squoosh.app/) - Image compressor
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimizer

### Bundle Analysis
- [Next Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

### Accessibility
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/lighthouse)

---

## 📚 Additional Resources

- [Next.js Performance Docs](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web.dev Performance](https://web.dev/performance/)
- [React Performance Optimization](https://react.dev/learn/render-and-commit)
- [Core Web Vitals](https://web.dev/vitals/)

---

**Last Updated**: January 2025
**Version**: 1.0
**Status**: Production Ready ✅
