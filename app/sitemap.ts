import { MetadataRoute } from 'next'

const locales = ['fr', 'nl', 'en', 'de']
const baseUrl = 'https://switchinvest.be'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // Define all routes that should be in sitemap
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services/real-estate', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services/development', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/bruxelles', priority: 0.95, changeFrequency: 'weekly' as const }, // NEW Brussels page
    { path: '/technologies', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Generate URLs for each locale
  locales.forEach((locale) => {
    routes.forEach(({ path, priority, changeFrequency }) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: currentDate,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            fr: `${baseUrl}/fr${path}`,
            nl: `${baseUrl}/nl${path}`,
            en: `${baseUrl}/en${path}`,
            de: `${baseUrl}/de${path}`,
          },
        },
      })
    })
  })

  return sitemapEntries
}
