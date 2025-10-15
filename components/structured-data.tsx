'use client';

import { useEffect } from 'react';

// Base Organization schema for SwitchInvest with Reviews
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
  currenciesAccepted: 'EUR',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1'
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Marie, 68 (Retraitée)'
      },
      datePublished: '2024-09-15',
      reviewBody: 'Après le décès de mon mari, notre maison me paraissait vide. Switch Invest m\'a fait une offre juste en 24 heures. Deux semaines plus tard, j\'étais en route pour l\'Italie. Meilleure décision de ma vie !',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1'
      }
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Luc & Anouk (Jeune Famille)'
      },
      datePublished: '2024-10-22',
      reviewBody: 'Nous avons hérité d\'une maison en ruine de mon oncle. Switch Invest l\'a achetée en l\'état, et maintenant nous utilisons l\'argent pour le fonds d\'études de notre fille.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1'
      }
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Ahmed (Entrepreneur)'
      },
      datePublished: '2024-11-08',
      reviewBody: 'J\'ai vendu mon appartement à Bruxelles pour financer ma startup. Aucun regret – le processus a été sans accroc !',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1'
      }
    }
  ]
};

// FAQ Schema
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Facturez-vous des frais ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non. Notre offre est tout compris – pas de commissions, frais de clôture ou charges cachées.'
      }
    },
    {
      '@type': 'Question',
      name: 'Que se passe-t-il si ma maison a des dégâts ou de la moisissure ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous achetons des biens en l\'état. Vous ne payez pas pour les réparations.'
      }
    },
    {
      '@type': 'Question',
      name: 'Puis-je vendre une partie de mon bien ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui ! Nous achetons aussi des terrains, copropriétés ou biens co-hérités.'
      }
    },
    {
      '@type': 'Question',
      name: 'Comment savoir si votre offre est équitable ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous fournissons un détail de notre évaluation. Comparez-le aux rapports de marché locaux !'
      }
    },
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour recevoir une offre ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vous recevrez une offre transparente sous 24 à 48 heures après avoir soumis les détails de votre propriété.'
      }
    },
    {
      '@type': 'Question',
      name: 'Puis-je choisir ma date de clôture ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui ! Vous pouvez choisir une date de clôture dès 7 jours ou jusqu\'à 30 jours selon votre convenance.'
      }
    },
    {
      '@type': 'Question',
      name: 'Dans quelles régions opérez-vous ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous opérons dans toute la Belgique, notamment à Bruxelles, Anvers, Gand, Liège et dans toutes les régions environnantes.'
      }
    }
  ]
};

// Local Business Schema (enhanced)
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://switchinvest.be/#localbusiness',
  name: 'SwitchInvest',
  image: 'https://switchinvest.be/images/logo.png',
  url: 'https://switchinvest.be',
  telephone: '+32 2 123 45 67',
  email: 'info@switchinvest.be',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avenue Louise 123',
    addressLocality: 'Brussels',
    postalCode: '1050',
    addressCountry: 'BE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.8503,
    longitude: 4.3517
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  ],
  priceRange: '€€€',
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
    },
    {
      '@type': 'City',
      name: 'Liège'
    }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Real Estate Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Achat Rapide de Maison',
          description: 'Offre sous 24-48 heures, clôture en 7 jours'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Investissement Immobilier Stratégique',
          description: 'Analyse de marché et optimisation de portefeuille'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Rénovations Clés en Main',
          description: 'Gestion complète de projet de rénovation'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gestion Complète des Actifs',
          description: 'Gérance globale avec reporting financier transparent'
        }
      }
    ]
  }
};

// Define different types of schemas for different pages
export const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://switchinvest.be/#webpage',
  url: 'https://switchinvest.be',
  name: 'SwitchInvest | Vente Rapide Maison & Investissement Immobilier Belgique',
  description: 'Vendez votre maison en 7 jours – offre sous 24-48h. Achat rapide, investissement immobilier stratégique, rénovations clés en main et gestion complète en Belgique.',
  isPartOf: {
    '@id': 'https://switchinvest.be/#website'
  },
  about: {
    '@id': 'https://switchinvest.be/#organization'
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://switchinvest.be/images/og-image.jpg',
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

    // Add LocalBusiness schema to every page
    const localBusinessScriptTag = document.createElement('script');
    localBusinessScriptTag.setAttribute('type', 'application/ld+json');
    localBusinessScriptTag.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(localBusinessScriptTag);

    // Add FAQ schema to home page
    if (type === 'home') {
      const faqScriptTag = document.createElement('script');
      faqScriptTag.setAttribute('type', 'application/ld+json');
      faqScriptTag.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(faqScriptTag);
    }

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
