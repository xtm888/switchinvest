import { MetadataRoute } from 'next';

// Define all pages that should be in the sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://switchinvest.be';
  
  // Define the main site pages
  const mainPages = [
    '',
    '/about',
    '/portfolio',
    '/technologies',
    '/services',
    '/services/real-estate',
    '/services/investment',
    '/services/development',
    '/services/management',
    '/contact',
    '/privacy-policy',
    '/terms',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add language variations for each page
  const languages = ['en', 'nl', 'fr', 'de'];
  const languagePages = mainPages.flatMap(page => {
    return languages.map(lang => ({
      url: `${page.url}/${lang}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority - 0.1, // Slightly lower priority than main pages
    }));
  });

  return [...mainPages, ...languagePages];
}
