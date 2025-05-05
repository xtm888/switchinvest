import { Translation } from './types';

export const en: Translation = {
  common: {
    home: "Home",
  },
  navigation: {
    services: "Services",
    portfolio: "Portfolio",
    technologies: "Technologies",
    about: "About",
    clientPortal: "Contact Us", // Updated to maintain backward compatibility
    contactUs: "Contact Us",
  },
  hero: {
    title: "Elevating Belgian Real Estate to Exceptional Standards",
    tagline: "Unmatched Expertise in Premium Property Management",
    subtitle: "At SwitchInvest, we relieve you of every operational concern—guiding, safeguarding, and subtly empowering your real estate ambitions with tailored solutions.",
  },
  statistics: {
    propertiesManaged: "Properties Managed",
    totalSquareMeters: "Total Square Meters",
    yearsExperience: "Years of Experience",
    satisfiedClients: "Satisfied Clients",
  },
  trustIndicators: {
    title: "Featured Properties & Partners",
    testimonials: [
      {
        client: "Marie D.",
        quote: "SwitchInvest transformed our Brussels portfolio—every detail handled with precision."
      },
      {
        client: "Lukas V.",
        quote: "Their discreet financial insight unlocked returns I didn't know were possible."
      }
    ],
    awards: [
      "Belgian Real Estate Excellence Award 2023",
      "Property Management Innovator 2024"
    ],
    certifications: [
      "FEDERA Accredited Property Manager",
      "ISO 9001:2015 Quality Management"
    ]
  },
  services: {
    title: "Our Services",
    subtitle: "Comprehensive Solutions for Your Real Estate Needs",
    learnMore: "Learn More",
    real_estate: {
      title: "Premium Property Management",
      description: "End-to-end administration of high-value assets, with unwavering attention to detail and compliance.",
      features: [
        "Comprehensive property management",
        "Legal compliance & regulatory oversight",
        "Financial optimization strategies",
        "Secure client portal access"
      ]
    },
    investment: {
      title: "Strategic Real Estate Investment",
      description: "Sophisticated guidance to grow and protect your capital across Belgian markets.",
      features: [
        "In-depth market analysis",
        "Targeted risk management",
        "Portfolio performance tuning",
        "Maximized long-term returns"
      ]
    },
    development: {
      title: "Property Development Excellence",
      description: "From vision to delivery, we drive projects with precision and value enhancement at every step.",
      features: [
        "End-to-end project management",
        "Construction and site supervision",
        "Value engineering reviews",
        "Rigorous quality control"
      ]
    },
    management: {
      title: "Professional Property Administration",
      description: "Holistic asset stewardship that preserves and enhances your real estate holdings.",
      features: [
        "Strategic asset management",
        "Transparent financial reporting",
        "Proactive maintenance coordination",
        "Tenant relations & leasing support"
      ]
    }
  },
  portfolio: {
    title: "Exemplary Assets Under Management",
    subtitle: "A selection of our successfully managed and developed properties across Belgium",
    explore: "Explore Our Work",
    filterTitle: "Filter by Property Category",
    searchPlaceholder: "Search projects...",
    showingResults: "Showing properties",
    viewDetails: "View Details",
    filters: {
      all: "All Projects",
      residential: "Residential",
      commercial: "Commercial",
      mixed: "Mixed Use"
    },
    categories: {
      residential: "Residential",
      commercial: "Commercial",
      mixed: "Mixed Use"
    },
    status: {
      completed: "Completed",
      inProgress: "In Progress",
      active: "Active"
    },
    stats: {
      projects: "Properties",
      regions: "Regions",
      years: "Years"
    },
    noResults: {
      title: "No projects found",
      description: "Try adjusting your search or filter criteria to find what you're looking for.",
      reset: "Reset filters"
    },
    cta: {
      label: "Investment Opportunities",
      title: "Interested in investing with us?",
      description: "Our expertise in the Belgian real estate market allows us to identify and develop high-potential properties. Contact us to discuss investment opportunities.",
      contactButton: "Contact Us",
      servicesButton: "Our Services"
    },
    items: [
      {
        title: "Étoile Residences",
        description: "Transformation of an underperforming historic asset in a prime district into premier luxury residences. SwitchInvest navigated complex heritage regulations and executed a meticulous refurbishment program, delivering exceptional quality and attracting discerning international occupants.",
        location: "Brussels",
        type: "Residential",
        size: "6,000 m²",
        achievements: [
          "Secured 100% occupancy within 3 months post-completion.",
          "Achieved benchmark rental values for the neighbourhood.",
          "Received architectural commendation for sensitive restoration and integration of modern amenities."
        ],
        beforeAfter: {
          vacancyRate: "Before: 75% → After: 0%",
          appreciation: "Asset Value +40% post-refurbishment"
        }
      },
      {
        title: "Portside Business Centre",
        description: "Strategic repositioning of an aging commercial building into a Class A office destination in a key economic hub. SwitchInvest implemented a comprehensive upgrade focusing on cutting-edge sustainability (BREEAM), smart technology integration, and premium tenant amenities.",
        location: "Antwerp",
        type: "Commercial (Office)",
        size: "15,500 m²",
        achievements: [
          "Attained BREEAM Excellent certification for sustainable design and operation.",
          "Secured long-term leases with two multinational anchor tenants prior to final completion.",
          "Significantly enhanced building operational efficiency and digital connectivity."
        ],
        beforeAfter: {
          energyConsumption: "Before: 245 kWh/m²/year → After: 85 kWh/m²/year",
          vacancyRate: "Before: 60% → After: 5% (fully leased on completion)"
        }
      },
      {
        title: "North Sea Gateway Logistics",
        description: "Optimization and targeted expansion of a strategically vital logistics facility to accommodate modern high-volume e-commerce and distribution requirements. SwitchInvest managed infrastructure enhancements and process flow redesign, creating a highly efficient, state-of-the-art hub.",
        location: "Ghent (Port Area)",
        type: "Industrial (Logistics)",
        size: "42,000 m²",
        achievements: [
          "Increased site throughput capacity by over 30% through layout and technology upgrades.",
          "Negotiated a 15-year lease agreement with a leading European 3PL provider.",
          "Implemented automation solutions reducing key operational costs."
        ],
        beforeAfter: {
          operationalCost: "Logistics Handling Costs –18%",
          vacancyRate: "Before: 20% (underutilised sections) → After: 0% (fully leased, long-term)"
        }
      },
      {
        title: "The Sablon Quarters",
        description: "Meticulous redevelopment of a mixed-use property in a prestigious historical area, balancing preservation with contemporary needs. SwitchInvest curated a blend of high-end retail, exclusive office spaces, and luxury apartments, enhancing the asset's overall profile and yield.",
        location: "Brussels",
        type: "Mixed-Use (Retail, Office, Residential)",
        size: "9,500 m²",
        achievements: [
          "Successfully attracted premium international retail brands to the ground floor.",
          "Achieved full lease-up of office and residential units at top-market rates.",
          "Enhanced the property's appeal through curated design and high-quality finishes."
        ],
        beforeAfter: {
          rentalRate: "Average Rent per m² +25%",
          appreciation: "Overall Asset Valuation +35%"
        }
      }
    ]
  },
  technologies: {
    title: "Advanced Technologies",
    subtitle: "Innovative Solutions for Modern Real Estate Management",
    items: [
      {
        section: "Smart Property Management",
        features: [
          "Digital property dashboards",
          "IoT sensors for environmental control",
          "Automated alerts & smart monitoring"
        ],
        benefits: [
          "Operational efficiency gains",
          "Reduced maintenance costs",
          "Real-time asset health insights"
        ]
      },
      {
        section: "Advanced Analytics",
        features: [
          "AI-driven market trend analysis",
          "Investment forecasting models",
          "Portfolio optimization algorithms"
        ],
        benefits: [
          "Data-backed decision making",
          "Minimized market risk",
          "Enhanced profitability"
        ]
      },
      {
        section: "Client Portal",
        features: [
          "24/7 secure access",
          "Document management suite",
          "Live financial tracking"
        ],
        benefits: [
          "Full transparency",
          "Effortless convenience",
          "Empowered control"
        ]
      }
    ]
  },
  innovation: {
    title: "Advancing Real Estate",
    subtitle: "Our Commitment to Continuous Improvement and Cutting-Edge Solutions",
    technologies: {
      items: [
        {
          key: "technologies.items.0",
          title: "Sustainable Development",
          description: "Implementing green building practices and technologies to minimize environmental impact and enhance long-term value."
        },
        {
          key: "technologies.items.1",
          title: "Digital Twin Technology",
          description: "Creating virtual replicas of properties for advanced simulation, monitoring, and operational planning."
        },
        {
          key: "technologies.items.2",
          title: "AI-Enhanced Tenant Experience",
          description: "Leveraging artificial intelligence to personalize tenant services, predict needs, and optimize building utilization."
        }
      ]
    }
  },
  about: {
    title: "About Us",
    description: "Founded in 2010, SwitchInvest.be was born from a desire to elevate Belgian real estate management by blending decades-long expertise with bespoke innovation. We deliver end-to-end stewardship that maximizes asset value while ensuring a seamless, discreet experience for discerning investors.",
    mission: "To provide discerning clients with impeccable, full-service property management that optimizes performance and reinforces trust.",
    vision: "To set the benchmark in premium real estate management, renowned for our unwavering integrity, strategic insight, and discreet excellence.",
    values: {
      title: "Our Values",
      items: [
        "Excellence",
        "Integrity",
        "Innovation",
        "Discretion"
      ]
    },
    team: [
      {
        name: "Sophie Van den Berg",
        position: "Chief Executive Officer",
        expertise: "Strategic leadership in luxury and institutional property management.",
        experience: "15+ years orchestrating premium real estate portfolios across Europe."
      },
      {
        name: "Lucas De Wilde",
        position: "Chief Financial Officer",
        expertise: "Financial structuring and performance optimization for high-value assets.",
        experience: "12+ years in real estate finance, delivering robust returns for institutional clients."
      },
      {
        name: "Emma Willems",
        position: "Head of Asset Management",
        expertise: "Comprehensive asset oversight from acquisitions to value-enhancing capital projects.",
        experience: "10+ years managing diverse property classes and driving long-term asset growth."
      },
      {
        name: "Antoine Dupont",
        position: "Director of Client Relations",
        expertise: "Bespoke client service with a focus on confidentiality and tailored solutions.",
        experience: "8+ years forging enduring partnerships with high-net-worth individuals and institutions."
      }
    ]
  },
  cta: {
    title: "Ready to Transform Your Real Estate Portfolio?",
    tagline: "Let's Create Something Extraordinary Together",
    subtitle: "Experience the future of property management with our cutting-edge solutions and personalized approach.",
    consultation: "Schedule Consultation",
    explore: "Explore Services →",
    description: "Contact us to discuss how we can help you achieve your real estate goals.",
    buttonText: "Contact Us"
  },
  footer: {
    description: "Comprehensive stewardship for discerning property portfolios in Belgium.",
    security: {
      gdpr: "GDPR-certified",
      encryption: "AES-256 Encryption",
    },
    services: {
      title: "Services",
      portfolioAdmin: "Portfolio Administration",
      assetEnhancement: "Asset Enhancement",
      proprietaryTech: "Proprietary Technologies",
      compliance: "Compliance Solutions",
    },
    company: {
      title: "Company",
      about: "About Us",
      leadership: "Leadership",
      careers: "Careers",
      contact: "Contact",
    },
    legal: {
      title: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      gdpr: "GDPR Compliance",
    },
    copyright: "All rights reserved.",
    belgium: "Belgium",
  },
  languages: {
    nl: "Dutch",
    fr: "French",
    de: "German",
    en: "English",
    regions: {
      flanders: "Flanders",
      wallonia: "Wallonia",
      brussels: "Brussels",
      german: "German-speaking Community",
      "german-speaking community": "German-speaking Community",
      international: "International",
      "flemish-community": "Flemish Community",
      "french-community": "French Community",
      "german-speaking-community": "German-speaking Community",
      "brussels-capital-region": "Brussels-Capital Region",
      "belgium": "Belgium"
    }
  },
  // 404 Page
  notFound: {
    title: "Page Not Found",
    message: "The page you're looking for doesn't exist or has been moved to a different location.",
    backHome: "Back to Homepage"
  },
  // Contact Page
  contact: {
    title: "Get in Touch With Us",
    subtitle: "We're here to answer your questions about real estate investment opportunities in Belgium.",
    form: {
      title: "Contact Form",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Your Message",
      submit: "Send Message",
      sending: "Sending..."
    },
    success: {
      title: "Message Sent Successfully!",
      message: "Thank you for contacting us. Our team will get back to you within 24-48 hours.",
      newMessage: "Send Another Message"
    },
    info: {
      phone: "Phone",
      email: "Email",
      address: "Address"
    }
  },
  // Cookie Consent
  cookie: {
    title: "Cookie Consent",
    message: "We use cookies to enhance your browsing experience and analyze website traffic. By clicking \"Accept\", you consent to our use of cookies as described in our",
    privacyPolicy: "Privacy Policy",
    accept: "Accept",
    decline: "Decline"
  },
  // Privacy and Terms
  privacy: {
    title: "Privacy Policy"
  },
  terms: {
    title: "Terms of Service"
  },
}
