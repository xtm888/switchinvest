import { Translation } from './types';

export const en: Translation = {
  valuation: {
    address: "Address",
    addressPlaceholder: "Start typing your address…",
    addressRequired: "Address is required",
    postalCode: "Postal code",
    postalCodeInvalid: "Invalid postal code",
    step: "Step {{step}} of {{total}}",
    type: "Property type",
    typePlaceholder: "Choose...",
    typeOptions: {
      apartment: "Apartment",
      house: "House",
      studio: "Studio",
      land: "Land",
      other: "Other"
    },
    size: "Surface (m²)",
    sizePlaceholder: "Enter the surface area",
    bedrooms: "Bedrooms",
    bedroomsPlaceholder: "Choose...",
    condition: "Condition",
    conditionPlaceholder: "Choose...",
    conditionOptions: {
      new: "New",
      renovated: "Renovated",
      needsRenovation: "Needs Renovation",
      old: "Old"
    },
    features: "Features",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "Your email",
    phone: "Phone",
    phonePlaceholder: "Your phone number",
    submit: "Submit",
    back: "Back",
    next: "Next",
    loading: "Loading...",
    thankYou: "Thank you! Your estimate is {{estimate}} €",
    newEvaluation: "New evaluation",
    error: "An error occurred, please try again.",
    thankContact: "You will be contacted shortly. Thank you!",
    cta: "Evaluate Now"
  },
  common: {
    home: "Home",
  },
  navigation: {
    services: "Services",
    portfolio: "Portfolio",
    technologies: "Technologies",
    about: "About",
    clientPortal: "Evaluate My Property", // Updated to maintain backward compatibility
    contactUs: "Evaluate My Property",
  },
  hero: {
    title: "Turn Your Property into Possibilities",
    tagline: "Sell Fast, Skip the Stress, and Fund Your Dreams!",
    subtitle: "At Switch Invest, we believe your home should be a gateway to new opportunities, not a burden. Whether you’ve inherited a property, own a house that needs costly repairs, or simply want to cash out quickly to pursue your passions, we offer a hassle-free solution. We buy your property AS-IS, handle all renovations, and put cash in your hands faster than traditional methods. No agents, no delays, no hidden fees – just a straightforward way to unlock your home’s value and start living life on your terms.",
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
        quote: "Their discreet financial insight unlocked returns I didn’t know were possible."
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
    subtitle: "Turnkey solutions to unlock your property’s potential",
    learnMore: "Learn More",
    real_estate: {
      title: "Quick Purchase",
      description: "Get a transparent offer within 24–48 hours and close in as little as 7 days—no agents, no hidden fees.",
      features: [
        "Offer in 24–48 hours",
        "Choose your closing date (7–30 days)",
        "As-is purchase—no staging or inspections",
        "No hidden fees"
      ]
    },
    investment: {
      title: "Strategic Real Estate Investment",
      description: "Leverage our local expertise and market data to identify high-yield opportunities and optimize your portfolio.",
      features: [
        "In-depth market analysis",
        "Risk-adjusted investment strategies",
        "Portfolio performance optimization",
        "Long-term growth focus"
      ]
    },
    development: {
      title: "Turnkey Renovations",
      description: "We manage all renovations from start to finish—maximizing property value and minimizing stress.",
      features: [
        "Complete project management",
        "Quality-focused execution",
        "Cost-effective upgrades",
        "Seamless coordination"
      ]
    },
    management: {
      title: "Comprehensive Asset Management",
      description: "End-to-end stewardship ensuring compliance, transparency, and sustained returns on your investments.",
      features: [
        "Transparent financial reporting",
        "Proactive maintenance coordination",
        "Tenant relations & leasing support",
        "Regulatory compliance"
      ]
    }
  },
  process: {
    title: "How It Works",
    steps: [
      { title: "Step 1: Tell Us About Your Property", description: "Fill out our quick online form or call us with your property details—address, type, size, and condition." },
      { title: "Step 2: Get Your Fast Offer", description: "Receive a transparent offer within 24–48 hours based on real market data—no hidden fees." },
      { title: "Step 3: Choose Your Closing Date", description: "Pick a closing date that works for you (7–30 days). We handle all legal paperwork and notary fees." },
      { title: "Step 4: We Handle the Rest", description: "We purchase your property as-is, manage renovations, and put cash in your hands—no agents, no surprises." }
    ]
  },
  why_choose_us: {
    title: "Why Switch Invest?",
    items: [
      { title: "Sustainable Development", description: "Implementing green building practices and technologies to minimize environmental impact and maximize long-term value." },
      { title: "Digital Twin Technology", description: "Creating virtual replicas of properties for advanced simulation, monitoring, and operational planning." },
      { title: "AI-Driven Tenant Experience", description: "Leveraging artificial intelligence to personalize tenant services, predict needs, and optimize building usage." }
    ]
  },
  audience: {
    title: "Who Can Benefit",
    items: [
      { title: "Retirees", description: "Looking to downsize and unlock funds for your retirement?" },
      { title: "Heirs", description: "Inherited a property you don't want to manage? Quickly cash out." },
      { title: "Fixer-Upper Owners", description: "Got a house that needs repairs? We purchase as-is so you don’t pay for costly renovations." },
      { title: "Life Transitions", description: "Use your property’s value to start a business, fund education, or relocate." }
    ]
  },
  concerns: {
    title: "Addressing Common Concerns",
    items: [
      { myth: "Quick-sale companies lowball sellers.", reality: "Our offers reflect true market value minus renovation costs we cover." },
      { myth: "Selling to a company is complicated.", reality: "We handle all paperwork and appointments—you sign only once." }
    ]
  },
  cta: {
    title: "Ready to Unlock Your Home’s Value? Get Your No-Obligation Offer Now!",
    tagline: "Fast. Fair. Hassle-Free.",
    subtitle: "Receive a clear offer and close on your own timeline—no agents, no repairs, no hidden fees.",
    primaryButton: "Submit Your Address in 2 Minutes →",
    secondaryText: "Questions? Call us at +32 2 123 45 67 or email info@switchinvest.be",
    consultation: "Schedule Your Consultation",
    explore: "Explore Our Services"
  },
  testimonials: [
    { client: "Marie, 68 (Retired Teacher)", quote: "After my husband passed, our house felt empty. Switch Invest gave me a fair offer in 24 hours. Two weeks later, I was on a train to Italy. Best decision ever!" },
    { client: "Luc & Anouk (Young Family)", quote: "We inherited a crumbling house from my uncle. Switch Invest took it AS-IS, and now we’re using the cash for our daughter’s education fund." },
    { client: "Ahmed (Entrepreneur)", quote: "Sold my apartment in Brussels to fund my startup. No regrets – the process was seamless!" }
  ],
  renovation_transparency: {
    title: "What Happens to Your Property After the Sale?",
    renovationScope: [
      "Structural repairs (roofing, plumbing, electrical).",
      "Modernization (kitchens, bathrooms, flooring).",
      "Eco-friendly upgrades (insulation, solar panels)."
    ],
    communityImpact: "We revitalize neighborhoods by transforming neglected properties into safe, modern homes for new families."
  },
  faqs: [
    { question: "Do you charge any fees?", answer: "No. Our offer is all-inclusive – no commissions, closing costs, or hidden charges." },
    { question: "What if my home has damage or mold?", answer: "We buy properties in any condition. You won’t pay for repairs." },
    { question: "Can I sell part of my property?", answer: "Yes! We also buy land, partial ownership, or co-inherited properties." },
    { question: "How do I know your offer is fair?", answer: "We provide a detailed breakdown of our valuation. Compare it with local market reports!" }
  ],
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
    description: "Since 2010, SwitchInvest has empowered Belgian property owners to unlock their home’s value quickly and effortlessly. We buy as-is with transparent offers in 24–48 hours, manage turnkey renovations, and provide strategic asset stewardship—ensuring compliance, seamless execution, and maximum returns for our clients.",
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
