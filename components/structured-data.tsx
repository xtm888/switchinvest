'use client';

import { useEffect } from 'react';

// Base Organization schema for SwitchInvest
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': 'https://switchinvest.be/#organization',
  name: 'SwitchInvest',
  url: 'https://switchinvest.be',
  logo: {
    '@type': 'ImageObject',
    url: 'https://switchinvest.be/logo.png',
    width: 180,
    height: 60
  },
  description: 'Premium real estate investment and property management services across Belgium',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avenue Louise 123',
    addressLocality: 'Brussels',
    postalCode: '1050',
    addressCountry: 'BE'
  },
  telephone: '+32 2 123 45 67',
  email: 'info@switchinvest.be',
  sameAs: [
    'https://www.linkedin.com/company/switchinvest',
    'https://twitter.com/switchinvest',
    'https://www.facebook.com/switchinvest'
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    opens: '09:00',
    closes: '18:00'
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Brussels'
    },
    {
      '@type': 'City',
      name: 'Antwerp'
    },
    {
      '@type': 'City',
      name: 'Ghent'
    }
  ],
  priceRange: '€€€',
  currenciesAccepted: 'EUR'
};

// Define different types of schemas for different pages
export const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://switchinvest.be/#webpage',
  url: 'https://switchinvest.be',
  name: 'SwitchInvest | Premium Real Estate Investment & Management Services in Belgium',
  description: 'SwitchInvest offers premium real estate investment and property management services across Belgium.',
  isPartOf: {
    '@id': 'https://switchinvest.be/#website'
  },
  about: {
    '@id': 'https://switchinvest.be/#organization'
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://switchinvest.be/og-image.jpg',
    width: 1200,
    height: 630
  }
};

export const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://switchinvest.be/portfolio/#webpage',
  url: 'https://switchinvest.be/portfolio',
  name: 'Our Portfolio | SwitchInvest',
  description: 'Explore our portfolio of premium properties across Belgium, including residential, commercial and mixed-use developments.',
  isPartOf: {
    '@id': 'https://switchinvest.be/#website'
  },
  about: {
    '@id': 'https://switchinvest.be/#organization'
  }
};

export const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://switchinvest.be/about/#webpage',
  url: 'https://switchinvest.be/about',
  name: 'About Us | SwitchInvest',
  description: 'Learn about SwitchInvest, our team, values and commitment to excellence in real estate investment and management.',
  isPartOf: {
    '@id': 'https://switchinvest.be/#website'
  },
  about: {
    '@id': 'https://switchinvest.be/#organization'
  }
};

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://switchinvest.be/services/#webpage',
  url: 'https://switchinvest.be/services',
  name: 'Our Services | SwitchInvest',
  description: 'Comprehensive real estate services including property management, investment strategy, development and administration.',
  isPartOf: {
    '@id': 'https://switchinvest.be/#website'
  },
  about: {
    '@id': 'https://switchinvest.be/#organization'
  }
};

export const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://switchinvest.be/contact/#webpage',
  url: 'https://switchinvest.be/contact',
  name: 'Contact Us | SwitchInvest',
  description: 'Get in touch with SwitchInvest for premium real estate investment and management services in Belgium.',
  isPartOf: {
    '@id': 'https://switchinvest.be/#website'
  },
  about: {
    '@id': 'https://switchinvest.be/#organization'
  }
};

// Property schema generator function
export const generatePropertySchema = (property: {
  title: string;
  description: string;
  type: string;
  location: string;
  status: string;
  images?: string[];
}) => {
  const propertyType = 
    property.type === 'Residential' ? 'Apartment' : 
    property.type === 'Commercial' ? 'CommercialProperty' : 
    'RealEstateListing';

  return {
    '@context': 'https://schema.org',
    '@type': propertyType,
    name: property.title,
    description: property.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.location,
      addressCountry: 'BE'
    },
    image: property.images || ['https://switchinvest.be/property-placeholder.jpg'],
    offers: {
      '@type': 'Offer',
      availability: property.status === 'Completed' ? 'InStock' : 'PreOrder'
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Professional Management',
        value: true
      }
    ]
  };
};

// Website schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://switchinvest.be/#website',
  url: 'https://switchinvest.be',
  name: 'SwitchInvest',
  description: 'Premium real estate investment and property management services in Belgium',
  publisher: {
    '@id': 'https://switchinvest.be/#organization'
  },
  inLanguage: ['en', 'nl', 'fr', 'de'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://switchinvest.be/portfolio?search={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
};

interface StructuredDataProps {
  type: 'home' | 'about' | 'portfolio' | 'services' | 'contact' | 'property';
  property?: any;
}

export default function StructuredData({ type, property }: StructuredDataProps) {
  useEffect(() => {
    // Add the base organization and website schema to every page
    const organizationScriptTag = document.createElement('script');
    organizationScriptTag.setAttribute('type', 'application/ld+json');
    organizationScriptTag.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(organizationScriptTag);

    const websiteScriptTag = document.createElement('script');
    websiteScriptTag.setAttribute('type', 'application/ld+json');
    websiteScriptTag.textContent = JSON.stringify(websiteSchema);
    document.head.appendChild(websiteScriptTag);

    // Add the page-specific schema
    let pageSchema;
    switch (type) {
      case 'home':
        pageSchema = homePageSchema;
        break;
      case 'about':
        pageSchema = aboutSchema;
        break;
      case 'portfolio':
        pageSchema = portfolioSchema;
        break;
      case 'services':
        pageSchema = servicesSchema;
        break;
      case 'contact':
        pageSchema = contactSchema;
        break;
      case 'property':
        if (property) {
          pageSchema = generatePropertySchema(property);
        }
        break;
      default:
        pageSchema = null;
    }

    if (pageSchema) {
      const pageScriptTag = document.createElement('script');
      pageScriptTag.setAttribute('type', 'application/ld+json');
      pageScriptTag.textContent = JSON.stringify(pageSchema);
      document.head.appendChild(pageScriptTag);
    }

    // Cleanup on component unmount
    return () => {
      document.head.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
        document.head.removeChild(script);
      });
    };
  }, [type, property]);

  return null;
}
