import { MetadataRoute } from 'next';

// Define all pages that should be in the sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://switchinvest.be';
  const currentDate = new Date();

  // High priority pages (homepage and main services)
  const highPriorityPages = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { route: '/portfolio', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/blog', priority: 0.9, changeFrequency: 'weekly' as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));

  // Service pages
  const servicePages = [
    '/services/real-estate',
    '/services/investment',
    '/services/development',
    '/services/management',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Information pages
  const infoPages = [
    '/about',
    '/technologies',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Legal pages
  const legalPages = [
    '/privacy-policy',
    '/terms',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  // Combine all pages
  const allPages = [
    ...highPriorityPages,
    ...servicePages,
    ...infoPages,
    ...legalPages,
  ];

  return allPages;
}
