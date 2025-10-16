import { Translation } from './types';

export const en: Translation = {
  valuation: {
    title: "Get Your Cash Offer - Sell To Us",
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
    featuresOptions: {
      garden: "Garden",
      terrace: "Terrace",
      pool: "Pool",
      parking: "Parking",
      elevator: "Elevator",
      cellar: "Cellar",
      fireplace: "Fireplace",
      airConditioning: "Air Conditioning",
      solarPanels: "Solar Panels",
      alarm: "Alarm",
      intercom: "Intercom"
    },
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
  home: {
    trustBadge: "We've Purchased 500+ Properties Directly",
    ctaPrimary: "Sell Your Property To Us",
    ctaSecondary: "See How We Buy Properties",
    featuresTitle: "Why Sell Directly To SwitchInvest?",
    featuresSubtitle: "We buy properties fast - no agents, no waiting, no hassle",
    features: {
      fastOffers: {
        title: "We Buy in 24-48 Hours",
        description: "Get our cash offer within 2 days - we are the buyer"
      },
      noFees: {
        title: "We Pay You Directly",
        description: "No agent commissions - we purchase directly from you"
      },
      asIs: {
        title: "We Buy AS-IS",
        description: "We purchase your property in any condition"
      },
      quickClosing: {
        title: "Fast Cash Payment",
        description: "Close and get paid in as little as 7 days"
      }
    },
    mapTitle: "Our Presence Across Belgium",
    mapSubtitle: "Serving property owners in all regions with local expertise",
    hero: {
      badge: "500+ Properties Purchased Directly - We Are The Buyer",
      title: "We Buy Your Property",
      titleHighlight: "Cash Offer in 24-48 Hours",
      subtitle: "Sell directly to us - No agents, no waiting for buyers, no hassle.",
      features: "We purchase AS-IS • Zero commission • Cash payment",
      ctaPrimary: "Get Your Cash Offer",
      ctaSecondary: "See How It Works",
      trustIndicators: [
        "24-48h Guaranteed Cash Offer",
        "We Are The Buyer - No Waiting",
        "We Purchase AS-IS"
      ],
      scrollText: "Discover"
    },
    map: {
      badge: "National Presence",
      title: "Our Presence in Belgium",
      subtitle: "Service available throughout Belgium with local expertise",
      stats: {
        coverage: "National Coverage",
        coverageText: "All provinces served",
        deals: "Properties Sold",
        dealsText: "Across Belgium",
        response: "Avg Response Time",
        responseText: "First offer delivered",
        satisfaction: "Client Satisfaction",
        satisfactionText: "5-star reviews"
      },
      floatingBadge: "Serving clients nationwide since 2018",
      footerText: "Our expert team operates across all Belgian provinces with local market knowledge. From Brussels to Antwerp, Liège to Ghent - we're here to help you unlock your property's value.",
      testimonials: {
        brussels: {
          region: "Brussels",
          quote: "They bought my property fast - excellent service!",
          author: "Marie D."
        },
        antwerp: {
          region: "Antwerp",
          quote: "SwitchInvest purchased directly - fair cash offer.",
          author: "Johan V."
        },
        liege: {
          region: "Liège",
          quote: "They bought my property in record time!",
          author: "Sophie L."
        },
        ghent: {
          region: "Ghent",
          quote: "Sold directly to them - trustworthy process.",
          author: "Lucas M."
        }
      }
    },
    stats: {
      title: "Our Results Speak for Themselves",
      subtitle: "Numbers that demonstrate our commitment to excellence",
      items: [
        {
          value: 500,
          suffix: "+",
          label: "Properties We've Purchased",
          description: "Directly from Belgian property owners"
        },
        {
          value: 24,
          suffix: "h",
          label: "Cash Offer Speed",
          description: "Transparent purchase offer in 24-48 hours"
        },
        {
          value: 98,
          suffix: "%",
          label: "Satisfaction Rate",
          description: "Of sellers recommend selling to us"
        },
        {
          value: 0,
          suffix: "€",
          label: "Hidden Fees",
          description: "We pay you directly - no commissions"
        }
      ],
      ctaText: "Join 500+ property owners who sold directly to us",
      ctaButton: "Sell To Us Now"
    },
    testimonials: {
      title: "What Property Owners Say About Selling To Us",
      subtitle: "Real stories from owners who sold their properties directly to SwitchInvest",
      pressTitle: "As Seen In The Media",
      items: [
        {
          name: "Marie Dubois",
          location: "Brussels",
          role: "Property Owner",
          quote: "SwitchInvest bought my property and transformed a stressful situation into a smooth experience. In 48 hours, they gave me a clear cash offer. No commission, no surprises - they purchased it directly from me exactly as promised.",
          rating: 5,
          image: "/testimonials/marie.jpg",
          date: "January 2025"
        },
        {
          name: "Jean-Pierre Laurent",
          location: "Liège",
          role: "Property Owner",
          quote: "Exemplary professionalism. SwitchInvest purchased my property in 10 days - they handled every detail with care. Selling directly to them exceeded my expectations. I highly recommend if you want to sell fast.",
          rating: 5,
          image: "/testimonials/jean.jpg",
          date: "December 2024"
        },
        {
          name: "Sophie Martin",
          location: "Antwerp",
          role: "Heir",
          quote: "Following a complex inheritance, selling directly to SwitchInvest was the perfect solution. They bought the property quickly and fairly. Their expertise in the Belgian market is impressive. Real peace of mind.",
          rating: 5,
          image: "/testimonials/sophie.jpg",
          date: "November 2024"
        },
        {
          name: "Marc Delarue",
          location: "Ghent",
          role: "Property Owner",
          quote: "As an entrepreneur, time is money. SwitchInvest purchased my property with an ultra-fast process. They understood my urgency and bought it directly - clear communication, fast cash. That's premium service.",
          rating: 5,
          image: "/testimonials/marc.jpg",
          date: "October 2024"
        }
      ],
      pressLogos: [
        { name: "Le Soir", logo: "/press/lesoir.svg" },
        { name: "L'Echo", logo: "/press/lecho.svg" },
        { name: "RTBF", logo: "/press/rtbf.svg" },
        { name: "DH", logo: "/press/dh.svg" }
      ]
    },
    trustBadges: {
      title: "Your Trust, Our Priority",
      subtitle: "Maximum security and total transparency at every step",
      items: [
        {
          title: "GDPR Compliant",
          description: "Complete protection of your personal data according to European standards"
        },
        {
          title: "AES-256 Encryption",
          description: "Bank-level security for all your transactions and communications"
        },
        {
          title: "ISO 27001 Certified",
          description: "International standards for information security management"
        },
        {
          title: "IPI Member",
          description: "Certified Professional Institute of Real Estate Agents"
        },
        {
          title: "100% Transparent",
          description: "No hidden fees, clear and traceable process at every step"
        },
        {
          title: "National Presence",
          description: "Service available throughout Belgium - Flanders, Brussels, Wallonia"
        }
      ],
      bottomText: "Joined by",
      bottomTextSuffix: "property owners in complete security",
      certificationsText: "Certifications & Partners"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "You have questions about quickly selling your house or our services? Find the answers here.",
      stillHaveQuestions: "Can't find the answer to your question?",
      contactButton: "Contact Us"
    },
    newsletter: {
      title: "Stay Informed About Our Opportunities",
      subtitle: "Receive exclusive market analysis, investment opportunities and expert advice",
      placeholder: "your@email.com",
      button: "Subscribe",
      privacy: "🔒 Your data is protected. Unsubscribe anytime."
    },
    blog: {
      badge: "Guides & Resources",
      title: "Stay Informed About the Real Estate Market",
      subtitle: "Expert analysis, practical guides and Belgian market trends",
      readMore: "Read Article",
      viewAll: "View All Articles",
      pageTitle: "Blog & Real Estate News",
      pageDescription: "Expert advice, market analysis and practical guides to succeed with your real estate projects in Belgium",
      readArticle: "Read more",
      newsletterTitle: "Stay Informed About the Latest Real Estate News",
      newsletterDescription: "Receive our market analysis, expert advice and investment opportunities directly in your inbox.",
      newsletterButton: "Subscribe to Newsletter",
      categories: {
        all: "All"
      }
    }
  },
  common: {
    home: "Home",
    close: "Close",
  },
  navigation: {
    services: "Services",
    portfolio: "Properties We've Bought",
    technologies: "Technologies",
    about: "About",
    clientPortal: "Sell To Us", // Direct buyer positioning
    contactUs: "Get Cash Offer",
  },
  hero: {
    title: "We Buy Your Property - Fast Cash Offer",
    tagline: "Sell Directly To Us - No Agents, No Waiting For Buyers!",
    subtitle: "SwitchInvest purchases properties directly from Belgian homeowners. We are the buyer - not an agency that lists your property. Get a transparent cash offer in 24-48 hours, close on your timeline, and receive payment directly. Whether you've inherited a property, own a house needing repairs, or want to cash out quickly, we buy AS-IS with zero commissions. No waiting for other buyers, no showings, no hassle.",
  },
  statistics: {
    propertiesManaged: "Properties Purchased",
    totalSquareMeters: "Total Property Value Bought",
    yearsExperience: "Years Buying Properties",
    satisfiedClients: "Properties Owners We've Paid",
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
    title: "How We Buy Properties & Additional Services",
    subtitle: "We purchase properties directly - plus renovation and investment services",
    learnMore: "Learn More",
    real_estate: {
      title: "We Buy Your Property (Primary Service)",
      description: "Sell directly to us - get our cash offer within 24–48 hours and close in 7 days. We are the buyer, not an agent.",
      features: [
        "Offer in 24–48 hours",
        "Choose your closing date (7–30 days)",
        "As-is purchase—no staging or inspections",
        "No hidden fees"
      ],
      hero: {
        title: "We Buy Properties Directly From Owners",
        subtitle: "Sell To Us - Fast Cash, No Agents, No Waiting",
        description: "SwitchInvest purchases properties directly across Belgium. Get our transparent cash offer within 24–48 hours and close in 7 days. We are the buyer - we purchase your property AS-IS, handle all paperwork, and pay you cash directly. No agents, no commissions, no waiting for other buyers.",
        cta: "Get Your Cash Offer Now",
        benefits: [
          "24-48 hour transparent offers",
          "Close in as little as 7 days",
          "We buy properties as-is",
          "No hidden fees or commissions",
          "All legal paperwork handled",
          "Flexible closing dates"
        ]
      },
      process: {
        title: "How Our Quick Purchase Process Works",
        subtitle: "From initial contact to cash in hand in 4 simple steps",
        steps: [
          {
            title: "Submit Property Details",
            description: "Fill out our quick online form or call us with your property information—address, type, size, and current condition."
          },
          {
            title: "Receive Your Offer",
            description: "Get a transparent, no-obligation offer within 24–48 hours based on current market data and our renovation assessment."
          },
          {
            title: "Accept & Schedule",
            description: "Choose your preferred closing date between 7–30 days. We handle all legal documentation and notary coordination."
          },
          {
            title: "Close & Get Paid",
            description: "Sign the documents, transfer ownership, and receive your payment. We take care of the property from there."
          },
          {
            title: "We Renovate",
            description: "After closing, we manage all renovations and improvements to maximize the property's value and appeal."
          }
        ]
      },
      pricing: {
        title: "Transparent Pricing",
        subtitle: "Choose the service package that works best for you",
        toggle: {
          monthly: "Monthly",
          yearly: "Yearly",
          savePercent: "Save 15%"
        },
        plans: [
          {
            name: "Quick Sale",
            description: "Perfect for property owners who need to sell fast",
            price: "Free",
            period: "consultation",
            features: [
              "24-48 hour offer guarantee",
              "As-is purchase (no repairs needed)",
              "Close in 7-30 days",
              "All legal fees covered",
              "No agent commissions",
              "Flexible closing date",
              "Direct bank transfer"
            ],
            cta: "Get Your Offer",
            popular: false
          },
          {
            name: "Premium Service",
            description: "Full-service support with maximum convenience",
            price: "Free",
            period: "consultation",
            features: [
              "Everything in Quick Sale",
              "Property staging consultation",
              "Professional photography",
              "Expedited closing (as fast as 7 days)",
              "Moving assistance coordination",
              "Storage solutions referrals",
              "Post-sale support"
            ],
            cta: "Get Started",
            popular: true
          },
          {
            name: "Investment Partnership",
            description: "For owners interested in ongoing investment opportunities",
            price: "Custom",
            period: "partnership",
            features: [
              "Everything in Premium",
              "First access to investment deals",
              "Portfolio diversification options",
              "Quarterly market insights",
              "Strategic advisory services",
              "Tax optimization guidance",
              "Dedicated account manager"
            ],
            cta: "Contact Us",
            popular: false
          }
        ],
        trustBadges: [
          "Licensed Real Estate Broker",
          "BBB A+ Rating",
          "10+ Years Experience",
          "500+ Properties Purchased"
        ]
      },
      beforeAfter: {
        title: "Our Transformation Results",
        subtitle: "See how we transform properties after purchase",
        before: "Before Purchase",
        after: "After Renovation"
      },
      caseStudies: {
        title: "Success Stories",
        subtitle: "Real results from property owners who chose our quick purchase service",
        items: [
          {
            name: "Marie D.",
            location: "Brussels",
            category: "Retirement Sale",
            challenge: "After her husband passed away, Marie needed to downsize quickly but her property needed significant repairs she couldn't afford.",
            solution: "We purchased her property as-is within 2 weeks, allowing her to move to a smaller apartment near her daughter without any renovation costs.",
            results: [
              {
                label: "Time to Close",
                value: "14 days"
              },
              {
                label: "Repairs Avoided",
                value: "€45,000"
              },
              {
                label: "Cash Received",
                value: "€285,000"
              }
            ],
            testimonial: "Selling my property directly to SwitchInvest made a difficult time so much easier. They purchased it quickly - the process was transparent and stress-free."
          },
          {
            name: "Luc & Sophie V.",
            location: "Antwerp",
            category: "Inherited Property",
            challenge: "The couple inherited a property from a relative but lived abroad and couldn't manage renovations or a traditional sale.",
            solution: "We handled everything remotely—from valuation to closing—and purchased the property as-is, providing a fair offer within 48 hours.",
            results: [
              {
                label: "Offer Time",
                value: "48 hours"
              },
              {
                label: "Remote Process",
                value: "100%"
              },
              {
                label: "Cash Received",
                value: "€195,000"
              }
            ],
            testimonial: "SwitchInvest bought our inherited property remotely. We never had to visit Belgium. They purchased it professionally and quickly."
          },
          {
            name: "Ahmed K.",
            location: "Ghent",
            category: "Business Funding",
            challenge: "Ahmed needed capital quickly to fund a business opportunity but couldn't wait for a traditional sale process.",
            solution: "We provided a competitive offer within 24 hours and closed in 10 days, giving him the capital he needed for his startup.",
            results: [
              {
                label: "Offer Speed",
                value: "24 hours"
              },
              {
                label: "Days to Close",
                value: "10 days"
              },
              {
                label: "Cash Received",
                value: "€320,000"
              }
            ],
            testimonial: "Selling directly to SwitchInvest allowed me to seize an incredible business opportunity. They bought it fast with cash. Highly recommended!"
          }
        ]
      },
      faqs: {
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know about our quick purchase service",
        searchPlaceholder: "Search questions...",
        stillHaveQuestions: "Still have questions?",
        contactUs: "Contact our team for personalized answers",
        items: [
          {
            question: "Are you a real estate agency or agent?",
            answer: "No! We are NOT an agency. SwitchInvest is a property buyer - we purchase properties directly using our own capital. You sell TO us, not THROUGH us. There are no listings, no waiting for other buyers, and no agent commissions. We ARE the buyer."
          },
          {
            question: "How quickly can you make an offer?",
            answer: "We typically provide a transparent, no-obligation cash offer within 24-48 hours after receiving your property details. In urgent situations, we can expedite this to same-day offers."
          },
          {
            question: "Do you charge any fees or commissions?",
            answer: "No. Unlike traditional real estate sales, there are no agent commissions, closing costs, or hidden fees. The offer we present is the amount you'll receive."
          },
          {
            question: "What types of properties do you purchase?",
            answer: "We purchase all types of residential properties including apartments, houses, studios, land, and even partial ownership or co-inherited properties in any condition."
          },
          {
            question: "What if my property needs major repairs?",
            answer: "That's our specialty! We buy properties as-is, regardless of condition. Whether it needs minor cosmetic work or major structural repairs, you won't have to spend a cent on renovations."
          },
          {
            question: "How do you determine your offer price?",
            answer: "Our offers are based on current market data, location analysis, property condition assessment, and estimated renovation costs. We provide a detailed breakdown so you can see exactly how we arrived at the figure."
          },
          {
            question: "Can I choose my closing date?",
            answer: "Absolutely! We offer flexible closing dates from as fast as 7 days to up to 30 days, depending on what works best for your situation."
          },
          {
            question: "What happens to the property after you buy it?",
            answer: "We invest in comprehensive renovations including structural repairs, modernization, and eco-friendly upgrades. Our goal is to transform the property into a beautiful, modern home for new families."
          },
          {
            question: "Is there any obligation after I receive an offer?",
            answer: "None whatsoever. Our offers are completely no-obligation. Take your time to review, compare with other options, and make the decision that's best for you."
          }
        ]
      }
    },
    development: {
      title: "Turnkey Renovations",
      description: "We manage all renovations from start to finish—maximizing property value and minimizing stress.",
      features: [
        "Complete project management",
        "Quality-focused execution",
        "Cost-effective upgrades",
        "Seamless coordination"
      ],
      hero: {
        title: "Turnkey Property Development",
        subtitle: "Complete Renovation Management from Vision to Reality",
        description: "Transform your property with our end-to-end development services. We handle design, permitting, contractor coordination, and quality control—delivering exceptional results on time and on budget.",
        cta: "Start Your Project",
        benefits: [
          "Full project management",
          "Licensed architect network",
          "Trusted contractor partnerships",
          "Quality control & inspections",
          "Transparent budgeting",
          "On-time delivery guarantee"
        ]
      },
      process: {
        title: "Our Development Process",
        subtitle: "Streamlined execution from concept to completion",
        steps: [
          {
            title: "Vision & Planning",
            description: "We assess your property, discuss your goals, and create a comprehensive development plan with detailed scope, timeline, and budget."
          },
          {
            title: "Design & Permits",
            description: "Our architects create beautiful, functional designs while we navigate all permitting, zoning approvals, and regulatory requirements."
          },
          {
            title: "Contractor Selection",
            description: "We leverage our network of vetted, licensed contractors to ensure competitive pricing and quality craftsmanship."
          },
          {
            title: "Construction Management",
            description: "Our project managers oversee daily operations, conduct quality inspections, and keep you updated on progress milestones."
          },
          {
            title: "Final Delivery",
            description: "We conduct final inspections, resolve any punch-list items, and hand over a beautifully transformed property."
          }
        ]
      },
      projectTypes: {
        title: "Project Types We Handle",
        subtitle: "From cosmetic updates to ground-up construction",
        types: [
          {
            title: "Residential Renovations",
            description: "Kitchen and bath remodels, interior updates, exterior improvements, and whole-home transformations.",
            icon: "home"
          },
          {
            title: "Commercial Fit-Outs",
            description: "Office build-outs, retail spaces, restaurant conversions, and mixed-use developments.",
            icon: "building"
          },
          {
            title: "Historic Restorations",
            description: "Sensitive renovations of heritage properties balancing preservation with modern functionality.",
            icon: "landmark"
          },
          {
            title: "Sustainable Upgrades",
            description: "Energy-efficient systems, solar installations, insulation improvements, and green building certifications.",
            icon: "leaf"
          }
        ]
      },
      caseStudies: {
        title: "Development Portfolio",
        subtitle: "Recent projects showcasing our capabilities",
        items: [
          {
            name: "Historic Townhouse Restoration",
            location: "Brussels",
            category: "Residential Renovation",
            challenge: "19th-century townhouse requiring extensive structural work while maintaining historic character and complying with heritage regulations.",
            solution: "Coordinated with heritage commission, reinforced foundation, updated all systems, and restored original architectural details while adding modern amenities.",
            results: [
              {
                label: "Timeline",
                value: "8 months"
              },
              {
                label: "Budget",
                value: "€425,000"
              },
              {
                label: "Value Increase",
                value: "+45%"
              }
            ],
            testimonial: "They respected the home's history while making it perfect for modern living. Exceptional craftsmanship."
          },
          {
            name: "Office Space Conversion",
            location: "Antwerp",
            category: "Commercial Development",
            challenge: "Converting outdated office building into modern, flexible workspace with sustainability certifications.",
            solution: "Complete interior demolition, new HVAC and lighting systems, open floor plan design, and implementation of energy-efficient technologies.",
            results: [
              {
                label: "Size",
                value: "2,400 m²"
              },
              {
                label: "Timeline",
                value: "6 months"
              },
              {
                label: "BREEAM Rating",
                value: "Excellent"
              }
            ],
            testimonial: "Professional execution and constant communication. The space exceeded our expectations."
          }
        ]
      },
      faqs: {
        title: "Development FAQs",
        subtitle: "Common questions about our renovation and development services",
        searchPlaceholder: "Search questions...",
        stillHaveQuestions: "Have specific questions?",
        contactUs: "Speak with our development team",
        items: [
          {
            question: "How much does a typical renovation cost?",
            answer: "Costs vary widely based on scope, size, and finishes. Light cosmetic updates might start around €500-800/m², while comprehensive renovations typically range from €1,200-2,000/m². We provide detailed estimates after initial consultation."
          },
          {
            question: "How long does a renovation project take?",
            answer: "Timeline depends on project scope and complexity. Minor updates might take 4-8 weeks, while major renovations typically require 4-8 months. We provide a detailed timeline during the planning phase."
          },
          {
            question: "Do you handle permits and approvals?",
            answer: "Yes, we manage all permitting, zoning approvals, and regulatory compliance. Our team has extensive experience navigating Belgian and local requirements."
          },
          {
            question: "Can I stay in my home during renovation?",
            answer: "It depends on the scope. For minor projects (like bathroom remodel), it's often possible. For major renovations, we typically recommend temporary relocation for safety and efficiency."
          },
          {
            question: "What if the project goes over budget?",
            answer: "We provide detailed budgets upfront and track costs closely. Any potential overruns are communicated immediately with options presented. Our contracts include clear terms for handling scope changes."
          },
          {
            question: "Do you offer warranties on your work?",
            answer: "Yes, all our work is backed by comprehensive warranties. Structural work carries a 10-year guarantee, and finishes are warranted for 2-5 years depending on the scope."
          }
        ]
      }
    },
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
    title: "Ready To Sell Your Property? We'll Buy It - Cash Offer in 24-48h!",
    tagline: "We Are The Buyer. Direct Purchase. Fast Cash.",
    subtitle: "Sell directly to SwitchInvest—no agents, no waiting for other buyers, no repairs needed, no hidden fees.",
    primaryButton: "Get Your Cash Offer Now →",
    secondaryText: "Questions? Call us at +32 2 123 45 67 or email info@switchinvest.be",
    consultation: "Sell Your Property To Us",
    explore: "See How We Buy Properties"
  },
  testimonials: [
    { client: "Marie, 68 (Retired Teacher)", quote: "After my husband passed, our house felt empty. SwitchInvest bought my property with a fair cash offer in 24 hours. Two weeks later, I was on a train to Italy. Selling directly to them was the best decision ever!" },
    { client: "Luc & Anouk (Young Family)", quote: "We inherited a crumbling house from my uncle. SwitchInvest purchased it AS-IS directly from us, and now we're using the cash for our daughter's education fund." },
    { client: "Ahmed (Entrepreneur)", quote: "SwitchInvest bought my Brussels apartment to help me fund my startup. Selling directly to them - no regrets, the process was seamless!" }
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
    title: "Properties We've Purchased & Renovated",
    subtitle: "Real examples of properties we bought directly from owners and transformed",
    explore: "See Our Past Acquisitions",
    filterTitle: "Filter by Property Type",
    searchPlaceholder: "Search past purchases...",
    showingResults: "Showing properties we've purchased",
    viewDetails: "View Purchase Story",
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
      label: "Want To Sell Your Property?",
      title: "Ready to sell your property directly to us?",
      description: "Just like these property owners, you can sell your property directly to SwitchInvest with a fast cash offer. We buy properties in any condition across Belgium.",
      contactButton: "Get Your Cash Offer",
      servicesButton: "See How We Buy"
    },
    items: [
      {
        title: "Étoile Residences",
        description: "We purchased this underperforming historic property directly from the owner in a prime Brussels district. After acquisition, SwitchInvest navigated complex heritage regulations and executed a meticulous refurbishment program, transforming it into premier luxury residences.",
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
        description: "We purchased this aging commercial building directly from the owner in Antwerp. After acquisition, SwitchInvest implemented a comprehensive upgrade focusing on cutting-edge sustainability (BREEAM), smart technology integration, and premium tenant amenities, repositioning it into a Class A office destination.",
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
        description: "We acquired this strategically vital logistics facility in Ghent's port area directly from the previous owner. After purchase, SwitchInvest managed infrastructure enhancements and process flow redesign to accommodate modern e-commerce needs, creating a highly efficient, state-of-the-art hub.",
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
        description: "We purchased this mixed-use property directly from the owner in Brussels' prestigious Sablon area. Following acquisition, SwitchInvest executed a meticulous redevelopment balancing preservation with contemporary needs, curating a blend of high-end retail, exclusive office spaces, and luxury apartments.",
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
    heroSubtitle: "Belgium's Leading Property Acquisition Company Since 2010",
    description: "Since 2010, SwitchInvest has been purchasing properties directly from Belgian homeowners who need to sell quickly. We are the buyer - not an agency. We purchase properties AS-IS with transparent cash offers in 24–48 hours, then invest our own capital in renovations and development. Over 500 property owners have sold directly to us across Belgium.",
    storyTitle: "Our Story",
    mission: "To provide Belgian property owners with the fastest, most transparent way to sell their properties by purchasing them directly with fair cash offers.",
    missionTitle: "Mission",
    vision: "To become Belgium's most trusted direct property buyer, known for fair offers, fast closings, and helping property owners achieve their financial goals.",
    visionTitle: "Vision",
    values: {
      title: "Our Values",
      items: [
        "Excellence",
        "Integrity",
        "Innovation",
        "Discretion"
      ]
    },
    valuesSubtitle: "The principles that guide everything we do",
    stats: {
      experience: "Years Buying Properties",
      properties: "Properties Purchased",
      assets: "Paid Directly to Sellers",
      satisfaction: "Seller Satisfaction"
    },
    ctaTitle: "Ready to Sell Your Property To Us?",
    ctaSubtitle: "Let's discuss your property and provide you with a fast cash offer",
    ctaContactButton: "Contact Us Today",
    ctaServicesButton: "View Our Services",
    team: [
      {
        name: "Sophie Van den Berg",
        position: "Chief Executive Officer",
        expertise: "Strategic leadership in luxury and institutional property management.",
        experience: "15+ years orchestrating premium real estate portfolios across Europe.",
        specialty: "Strategic Leadership",
        specialties: ["Strategic Planning", "Portfolio Growth", "Market Expansion"]
      },
      {
        name: "Lucas De Wilde",
        position: "Chief Financial Officer",
        expertise: "Financial structuring and performance optimization for high-value assets.",
        experience: "12+ years in real estate finance, delivering robust returns for institutional clients.",
        specialty: "Financial Strategy",
        specialties: ["Financial Modeling", "Risk Management", "Investment Analysis"]
      },
      {
        name: "Emma Willems",
        position: "Head of Asset Management",
        expertise: "Comprehensive asset oversight from acquisitions to value-enhancing capital projects.",
        experience: "10+ years managing diverse property classes and driving long-term asset growth.",
        specialty: "Asset Management",
        specialties: ["Property Operations", "Value Enhancement", "Capital Planning"]
      },
      {
        name: "Antoine Dupont",
        position: "Director of Client Relations",
        expertise: "Bespoke client service with a focus on confidentiality and tailored solutions.",
        experience: "8+ years forging enduring partnerships with high-net-worth individuals and institutions.",
        specialty: "Client Relations",
        specialties: ["Client Advisory", "Relationship Management", "Service Excellence"]
      },
      {
        name: "Isabelle Laurent",
        position: "Head of Development",
        expertise: "Transforming properties through innovative design and sustainable construction practices.",
        experience: "14+ years leading complex renovation projects across Belgium.",
        specialty: "Property Development",
        specialties: ["Project Management", "Sustainable Design", "Historic Restoration"]
      },
      {
        name: "Thomas Vermeulen",
        position: "Investment Director",
        expertise: "Identifying and executing high-return investment opportunities in Belgian real estate.",
        experience: "11+ years in real estate investment and market analysis.",
        specialty: "Investment Strategy",
        specialties: ["Deal Sourcing", "Market Analysis", "Due Diligence"]
      }
    ],
    timeline: {
      title: "Our Journey",
      subtitle: "Building excellence in Belgian real estate since 2010",
      events: [
        {
          year: "2010",
          title: "Company Founded",
          description: "SwitchInvest established in Brussels with a vision to transform Belgian real estate management.",
          icon: "building"
        },
        {
          year: "2013",
          title: "Portfolio Milestone",
          description: "Reached €50M in assets under management, establishing credibility in the Belgian market.",
          icon: "chart"
        },
        {
          year: "2016",
          title: "Geographic Expansion",
          description: "Extended operations to Antwerp and Ghent, becoming a truly national player.",
          icon: "map"
        },
        {
          year: "2019",
          title: "Innovation Leader",
          description: "Launched proprietary technology platform for real-time portfolio monitoring and client reporting.",
          icon: "tech"
        },
        {
          year: "2021",
          title: "Sustainability Focus",
          description: "Committed to carbon-neutral operations and green building certifications across our portfolio.",
          icon: "leaf"
        },
        {
          year: "2023",
          title: "Industry Recognition",
          description: "Named 'Property Management Firm of the Year' by Belgian Real Estate Excellence Awards.",
          icon: "award"
        }
      ],
      futureTitle: "Looking Forward",
      futureDescription: "We're investing in AI-driven property analytics, expanding our sustainable development initiatives, and continuing to set the standard for excellence in Belgian real estate."
    }
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
  // Portfolio Enhancements
  portfolioEnhanced: {
    lightbox: {
      close: "Close",
      previous: "Previous",
      next: "Next",
      details: "Project Details",
      location: "Location",
      type: "Type",
      size: "Size",
      status: "Status",
      investment: "Investment",
      roi: "ROI",
      timeline: "Timeline",
      completion: "Completion Date",
      challenge: "Challenge",
      solution: "Solution",
      results: "Results",
      features: "Key Features",
      gallery: "Gallery"
    }
  },
  // Loading States
  loading: {
    default: "Loading...",
    page: "Loading page...",
    content: "Loading content...",
    projects: "Loading projects...",
    services: "Loading services...",
    team: "Loading team information...",
    portfolio: "Loading portfolio...",
    pleaseWait: "Please wait..."
  },
  // Error Messages
  errors: {
    general: {
      title: "Something Went Wrong",
      message: "We encountered an unexpected error. Please try again.",
      retry: "Try Again",
      backHome: "Back to Homepage",
      reportIssue: "Report This Issue"
    },
    boundary: {
      title: "Oops! Something Broke",
      message: "We're sorry, but something went wrong while loading this section. Our team has been notified.",
      reset: "Reset Section",
      home: "Go to Homepage",
      support: "Contact Support"
    },
    network: {
      title: "Connection Error",
      message: "Unable to connect to the server. Please check your internet connection and try again.",
      retry: "Retry Connection"
    },
    notAuthorized: {
      title: "Access Denied",
      message: "You don't have permission to access this resource.",
      login: "Sign In",
      home: "Go Home"
    }
  },
  // 404 Page Enhanced
  notFound: {
    title: "404 - Page Not Found",
    subtitle: "Lost in the Property Maze?",
    message: "The page you're looking for doesn't exist or has been moved to a different location.",
    backHome: "Back to Homepage",
    popularPagesTitle: "Popular Pages",
    needHelp: "Need help?",
    contactTeam: "Contact our team",
    links: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
      blog: "Blog"
    },
    help: {
      title: "Need Help?",
      description: "If you believe this is an error or need assistance finding what you're looking for:",
      contactSupport: "Contact Our Team",
      searchSite: "Search Our Site",
      viewSitemap: "View Sitemap"
    },
    suggestions: [
      "Check the URL for typos",
      "Use the navigation menu above",
      "Search for what you need",
      "Visit our homepage"
    ]
  },
  // Contact Page
  contact: {
    title: "Sell Your Property To SwitchInvest",
    subtitle: "Get your free cash offer in 24-48 hours. We buy properties directly across Belgium.",
    quickContact: "Quick Contact",
    whatsapp: "Instant message",
    clickToCall: "Click to call",
    clickToEmail: "Click to send an email",
    clickToMap: "Click to view on map",
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
