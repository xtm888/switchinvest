import { Translation } from './types';

export const en: Translation = {
  valuation: {
    title: "Evaluate my property",
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
    trustBadge: "Trusted by 500+ Property Owners",
    ctaPrimary: "Get Your Free Valuation",
    ctaSecondary: "Explore Our Services",
    featuresTitle: "Why Choose SwitchInvest?",
    featuresSubtitle: "Fast, transparent, and hassle-free property solutions",
    features: {
      fastOffers: {
        title: "24-48 Hour Offers",
        description: "Get a transparent offer within 2 days"
      },
      noFees: {
        title: "No Hidden Fees",
        description: "Clear pricing with zero surprises"
      },
      asIs: {
        title: "As-Is Purchase",
        description: "We buy your property in any condition"
      },
      quickClosing: {
        title: "Quick Closing",
        description: "Close in as little as 7 days"
      }
    },
    mapTitle: "Our Presence Across Belgium",
    mapSubtitle: "Serving property owners in all regions with local expertise",
    hero: {
      badge: "500+ Satisfied Property Owners in Belgium",
      title: "Transform Your Property",
      titleHighlight: "into Possibilities",
      subtitle: "Fast sale, transparent evaluation in 24-48h.",
      features: "Zero commission • No repairs required",
      ctaPrimary: "Free Evaluation Now",
      ctaSecondary: "See How It Works",
      trustIndicators: [
        "24-48h Guaranteed Offer",
        "No Commission",
        "As-Is Purchase"
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
          quote: "Quick response and excellent service!",
          author: "Marie D."
        },
        antwerp: {
          region: "Antwerp",
          quote: "Professional team, fair price received.",
          author: "Johan V."
        },
        liege: {
          region: "Liège",
          quote: "Sold my property in record time!",
          author: "Sophie L."
        },
        ghent: {
          region: "Ghent",
          quote: "Trustworthy and transparent process.",
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
          label: "Satisfied Owners",
          description: "Chose SwitchInvest to sell quickly"
        },
        {
          value: 24,
          suffix: "h",
          label: "Evaluation Time",
          description: "Transparent offer in less than 48 hours"
        },
        {
          value: 98,
          suffix: "%",
          label: "Satisfaction Rate",
          description: "Of our clients recommend our services"
        },
        {
          value: 0,
          suffix: "€",
          label: "Hidden Fees",
          description: "Total transparency, no surprises"
        }
      ],
      ctaText: "Join hundreds of satisfied property owners",
      ctaButton: "Start Now"
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Authentic testimonials from satisfied property owners",
      pressTitle: "As Seen In The Media",
      items: [
        {
          name: "Marie Dubois",
          location: "Brussels",
          role: "Owner",
          quote: "SwitchInvest transformed a stressful situation into a smooth experience. In 48 hours, I had a clear and transparent offer. No commission, no surprises - exactly what they promise.",
          rating: 5,
          image: "/testimonials/marie.jpg",
          date: "January 2025"
        },
        {
          name: "Jean-Pierre Laurent",
          location: "Liège",
          role: "Investor",
          quote: "Exemplary professionalism. The SwitchInvest team handled every detail with care. My property was sold in 10 days, well above my expectations. I highly recommend their services.",
          rating: 5,
          image: "/testimonials/jean.jpg",
          date: "December 2024"
        },
        {
          name: "Sophie Martin",
          location: "Antwerp",
          role: "Heir",
          quote: "Following a complex inheritance, SwitchInvest provided me with a quick and fair solution. Their expertise in the Belgian market is impressive. Real peace of mind.",
          rating: 5,
          image: "/testimonials/sophie.jpg",
          date: "November 2024"
        },
        {
          name: "Marc Delarue",
          location: "Ghent",
          role: "Entrepreneur",
          quote: "As an entrepreneur, time is money. SwitchInvest understood that. Ultra-fast process, clear communication, results delivered. That's premium service.",
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
    subtitle: "Turnkey solutions to unlock your property's potential",
    learnMore: "Learn More",
    real_estate: {
      title: "Quick Purchase",
      description: "Get a transparent offer within 24–48 hours and close in as little as 7 days—no agents, no hidden fees.",
      features: [
        "Offer in 24–48 hours",
        "Choose your closing date (7–30 days)",
        "As-is purchase—no staging or inspections",
        "No hidden fees"
      ],
      hero: {
        title: "Quick Purchase Solutions",
        subtitle: "Fast, Fair, Hassle-Free Property Sales",
        description: "Get a transparent offer within 24–48 hours and close in as little as 7 days. We buy your property as-is, handle all paperwork, and put cash in your hands—no agents, no hidden fees.",
        cta: "Get Your Free Offer",
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
            testimonial: "Switch Invest made a difficult time so much easier. The process was transparent and stress-free."
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
            testimonial: "We never had to visit Belgium. Everything was handled professionally and quickly."
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
            testimonial: "The quick sale allowed me to seize an incredible business opportunity. Highly recommended!"
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
            question: "How quickly can you make an offer?",
            answer: "We typically provide a transparent, no-obligation offer within 24-48 hours after receiving your property details. In urgent situations, we can expedite this to same-day offers."
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
    investment: {
      title: "Strategic Real Estate Investment",
      description: "Leverage our local expertise and market data to identify high-yield opportunities and optimize your portfolio.",
      features: [
        "In-depth market analysis",
        "Risk-adjusted investment strategies",
        "Portfolio performance optimization",
        "Long-term growth focus"
      ],
      hero: {
        title: "Strategic Real Estate Investment",
        subtitle: "Data-Driven Investment Strategies for Maximum Returns",
        description: "Leverage our deep market expertise, advanced analytics, and local insights to identify high-yield opportunities and build a resilient real estate portfolio in Belgium's most promising markets.",
        cta: "Explore Investment Opportunities",
        benefits: [
          "Expert market analysis & insights",
          "Risk-adjusted investment strategies",
          "Portfolio diversification guidance",
          "Access to off-market deals",
          "Institutional-grade due diligence",
          "Long-term wealth building focus"
        ]
      },
      process: {
        title: "Our Investment Process",
        subtitle: "A systematic approach to identifying and executing profitable investments",
        steps: [
          {
            title: "Discovery & Goals",
            description: "We start by understanding your investment objectives, risk tolerance, timeline, and target returns to create a personalized strategy."
          },
          {
            title: "Market Analysis",
            description: "Our team analyzes macro trends, neighborhood dynamics, demographic shifts, and infrastructure developments to identify emerging opportunities."
          },
          {
            title: "Deal Sourcing",
            description: "We leverage our extensive network to source exclusive off-market deals and evaluate on-market opportunities with institutional-grade due diligence."
          },
          {
            title: "Investment Execution",
            description: "From financing coordination to legal structuring and closing, we manage every detail to ensure smooth acquisition and optimal terms."
          },
          {
            title: "Asset Management",
            description: "Post-acquisition, we provide ongoing portfolio monitoring, performance optimization, and strategic guidance to maximize your returns."
          }
        ]
      },
      pricing: {
        title: "Investment Advisory Packages",
        subtitle: "Flexible engagement models tailored to your investment journey",
        toggle: {
          monthly: "Monthly",
          yearly: "Yearly",
          savePercent: "Save 20%"
        },
        plans: [
          {
            name: "Explorer",
            description: "Perfect for first-time real estate investors",
            price: "€499",
            period: "/month",
            yearlyPrice: "€4,790",
            features: [
              "Monthly market reports",
              "Quarterly investment webinars",
              "Access to deal pipeline",
              "Basic financial modeling tools",
              "Email support",
              "Community forum access"
            ],
            cta: "Start Exploring",
            popular: false
          },
          {
            name: "Professional",
            description: "Comprehensive advisory for active investors",
            price: "€1,499",
            period: "/month",
            yearlyPrice: "€14,390",
            features: [
              "Everything in Explorer",
              "Dedicated investment advisor",
              "Custom market research",
              "Advanced financial modeling",
              "Deal-by-deal underwriting support",
              "Priority deal access",
              "Quarterly strategy sessions",
              "Tax optimization guidance"
            ],
            cta: "Go Professional",
            popular: true
          },
          {
            name: "Institutional",
            description: "White-glove service for serious investors",
            price: "Custom",
            period: "pricing",
            yearlyPrice: "Contact Us",
            features: [
              "Everything in Professional",
              "Full portfolio management",
              "Bespoke acquisition strategies",
              "Co-investment opportunities",
              "Asset-level performance tracking",
              "Exit strategy planning",
              "Direct access to leadership team",
              "Annual performance review"
            ],
            cta: "Contact Us",
            popular: false
          }
        ],
        trustBadges: [
          "RICS Certified Advisors",
          "€50M+ Deployed",
          "15+ Years Experience",
          "98% Client Satisfaction"
        ]
      },
      caseStudies: {
        title: "Investment Success Stories",
        subtitle: "Real results from clients who partnered with us",
        items: [
          {
            name: "Private Investor Portfolio",
            location: "Brussels & Antwerp",
            category: "Multi-Family Residential",
            challenge: "High-net-worth individual seeking to diversify wealth into Belgian real estate with minimal time commitment.",
            solution: "We identified three undervalued multi-family properties in emerging neighborhoods, managed renovations, and secured long-term tenants.",
            results: [
              {
                label: "Portfolio Value",
                value: "€2.4M"
              },
              {
                label: "Net ROI",
                value: "+18% annually"
              },
              {
                label: "Cash-on-Cash",
                value: "12.5%"
              }
            ],
            testimonial: "Switch Invest's market knowledge and execution capabilities are exceptional. They've made real estate investing effortless."
          },
          {
            name: "Family Office Fund",
            location: "Ghent",
            category: "Commercial Office",
            challenge: "Family office wanted exposure to commercial real estate but lacked local market expertise and operational capabilities.",
            solution: "We sourced and underwrote a Class B office building with repositioning potential, executed a value-add renovation, and re-tenanted at market rents.",
            results: [
              {
                label: "Acquisition",
                value: "€3.8M"
              },
              {
                label: "Current Value",
                value: "€5.1M"
              },
              {
                label: "IRR",
                value: "22%"
              }
            ],
            testimonial: "Their institutional approach combined with local insights delivered returns beyond our expectations."
          }
        ]
      },
      faqs: {
        title: "Investment FAQs",
        subtitle: "Common questions about investing with SwitchInvest",
        searchPlaceholder: "Search questions...",
        stillHaveQuestions: "Need more information?",
        contactUs: "Schedule a consultation with our investment team",
        items: [
          {
            question: "What is the minimum investment amount?",
            answer: "Our minimum investment threshold varies by opportunity type. For direct property investments, we typically work with investors committing €250,000 or more. For co-investment opportunities, minimums can be lower."
          },
          {
            question: "What types of properties do you focus on?",
            answer: "We invest across residential (multi-family, apartments), commercial (office, retail), and mixed-use properties. Our focus is on value-add opportunities in Belgium's major urban markets."
          },
          {
            question: "How do you identify investment opportunities?",
            answer: "We use a combination of proprietary market analytics, extensive broker relationships, off-market deal sourcing, and on-the-ground local expertise to identify opportunities before they become widely known."
          },
          {
            question: "What returns can I expect?",
            answer: "Target returns vary by asset class and strategy. Historically, our value-add investments have delivered 15-25% IRR, while stabilized income properties yield 8-12% annually. Past performance does not guarantee future results."
          },
          {
            question: "How hands-on do I need to be?",
            answer: "As little or as much as you prefer. Many clients choose our full-service management approach where we handle everything from acquisition to asset management. Others prefer a more collaborative approach."
          },
          {
            question: "What fees do you charge?",
            answer: "Our fee structure depends on the engagement model. Advisory fees range from 1-2% of invested capital annually, with potential performance fees on successful exits. We provide full transparency on all costs."
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
    management: {
      title: "Comprehensive Asset Management",
      description: "End-to-end stewardship ensuring compliance, transparency, and sustained returns on your investments.",
      features: [
        "Transparent financial reporting",
        "Proactive maintenance coordination",
        "Tenant relations & leasing support",
        "Regulatory compliance"
      ],
      hero: {
        title: "Comprehensive Asset Management",
        subtitle: "Professional Property Management for Maximum Returns",
        description: "Protect and grow your real estate investments with our full-service property management. We handle everything from tenant placement to maintenance, financial reporting, and regulatory compliance—so you can enjoy passive income with peace of mind.",
        cta: "Get Management Proposal",
        benefits: [
          "Professional tenant screening",
          "24/7 maintenance coordination",
          "Transparent financial reporting",
          "Regulatory & legal compliance",
          "Rent collection & accounting",
          "Property inspections & care"
        ]
      },
      process: {
        title: "Our Management Process",
        subtitle: "Comprehensive oversight from tenant placement to financial optimization",
        steps: [
          {
            title: "Property Onboarding",
            description: "We conduct a thorough property assessment, set competitive rental rates, and create a customized management plan aligned with your goals."
          },
          {
            title: "Tenant Placement",
            description: "Our team markets your property, screens applicants rigorously, and places qualified tenants with comprehensive lease agreements."
          },
          {
            title: "Ongoing Operations",
            description: "We handle rent collection, maintenance requests, property inspections, and vendor coordination with 24/7 tenant support."
          },
          {
            title: "Financial Reporting",
            description: "Receive detailed monthly statements, track income and expenses, and access real-time financial data through our owner portal."
          },
          {
            title: "Strategic Optimization",
            description: "We continuously monitor market conditions, recommend value-add improvements, and optimize operations for maximum returns."
          }
        ]
      },
      pricing: {
        title: "Property Management Packages",
        subtitle: "Flexible plans designed for different investor needs",
        toggle: {
          monthly: "Per Month",
          yearly: "Yearly Contract",
          savePercent: "Save 10%"
        },
        plans: [
          {
            name: "Essential",
            description: "Core management services for hands-on owners",
            price: "6%",
            period: "of monthly rent",
            yearlyPrice: "5.4% with annual contract",
            features: [
              "Tenant screening & placement",
              "Rent collection & disbursement",
              "Basic maintenance coordination",
              "Monthly financial statements",
              "Email support (business hours)",
              "Annual property inspection"
            ],
            cta: "Get Started",
            popular: false
          },
          {
            name: "Professional",
            description: "Full-service management for busy investors",
            price: "8%",
            period: "of monthly rent",
            yearlyPrice: "7.2% with annual contract",
            features: [
              "Everything in Essential",
              "24/7 emergency maintenance",
              "Quarterly property inspections",
              "Lease renewal management",
              "Vendor network & coordination",
              "Online owner portal access",
              "Detailed annual reporting",
              "Phone & email support"
            ],
            cta: "Most Popular",
            popular: true
          },
          {
            name: "Premium",
            description: "White-glove service for luxury properties",
            price: "10%",
            period: "of monthly rent",
            yearlyPrice: "9% with annual contract",
            features: [
              "Everything in Professional",
              "Dedicated property manager",
              "Monthly property inspections",
              "Preventive maintenance programs",
              "Capital improvement planning",
              "Tax document preparation",
              "Priority vendor response",
              "Concierge tenant services"
            ],
            cta: "Contact Us",
            popular: false
          }
        ],
        trustBadges: [
          "FEDERA Certified",
          "Fully Insured",
          "1,000+ Units Managed",
          "99% Rent Collection Rate"
        ]
      },
      caseStudies: {
        title: "Management Success Stories",
        subtitle: "How we've helped property owners maximize returns",
        items: [
          {
            name: "Multi-Family Portfolio",
            location: "Brussels",
            category: "Residential Management",
            challenge: "Owner managing 12-unit building remotely with high vacancy, frequent turnover, and maintenance issues impacting profitability.",
            solution: "Implemented professional tenant screening, proactive maintenance programs, and competitive pricing strategy to stabilize occupancy and reduce costs.",
            results: [
              {
                label: "Occupancy Rate",
                value: "95% → 100%"
              },
              {
                label: "Maintenance Costs",
                value: "-30%"
              },
              {
                label: "NOI Increase",
                value: "+25%"
              }
            ],
            testimonial: "They transformed my underperforming asset into a stable income producer. Couldn't be happier."
          },
          {
            name: "Commercial Office Building",
            location: "Antwerp",
            category: "Commercial Management",
            challenge: "Class A office building with 40% vacancy, aging systems, and lack of professional management reducing asset value.",
            solution: "Comprehensive repositioning including targeted capital improvements, professional leasing, and enhanced tenant services.",
            results: [
              {
                label: "Vacancy",
                value: "40% → 8%"
              },
              {
                label: "Rent/m²",
                value: "+15%"
              },
              {
                label: "Asset Value",
                value: "+€1.2M"
              }
            ],
            testimonial: "Their commercial expertise and tenant relationships brought our building back to life."
          }
        ]
      },
      faqs: {
        title: "Management FAQs",
        subtitle: "Everything you need to know about our property management services",
        searchPlaceholder: "Search questions...",
        stillHaveQuestions: "Still have questions?",
        contactUs: "Speak with a property management specialist",
        items: [
          {
            question: "What types of properties do you manage?",
            answer: "We manage residential (single-family, multi-family, apartments), commercial (office, retail), and mixed-use properties throughout Belgium. Our team has expertise across all asset classes."
          },
          {
            question: "How do you screen tenants?",
            answer: "Our comprehensive screening includes credit checks, employment verification, rental history review, reference checks, and income verification. We only approve tenants who meet our strict criteria."
          },
          {
            question: "How quickly do you respond to maintenance issues?",
            answer: "Emergency maintenance requests receive immediate response (24/7). Routine maintenance is typically addressed within 24-48 hours. We have a network of vetted contractors ready to respond."
          },
          {
            question: "When do I receive my rental income?",
            answer: "We disburse owner proceeds by the 10th of each month via direct deposit. You'll receive a detailed statement showing all income, expenses, and your net distribution."
          },
          {
            question: "What are your management fees?",
            answer: "Our fees range from 6-10% of monthly rent depending on the service tier and property type. There are no hidden fees—all costs are transparent and detailed in our management agreement."
          },
          {
            question: "Can I terminate the management agreement?",
            answer: "Yes, our agreements typically have 30-60 day termination clauses. We believe in earning your business every month through exceptional service."
          },
          {
            question: "Do you handle evictions?",
            answer: "Yes, when necessary, we manage the entire eviction process including legal filings, court representation, and property recovery in compliance with Belgian law."
          },
          {
            question: "How do I access financial reports?",
            answer: "All clients receive monthly financial statements via email and have 24/7 access to our online owner portal where you can view real-time financial data, maintenance records, and property documents."
          }
        ]
      }
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
    heroSubtitle: "Excellence in Belgian Real Estate Since 2010",
    description: "Since 2010, SwitchInvest has empowered Belgian property owners to unlock their home's value quickly and effortlessly. We buy as-is with transparent offers in 24–48 hours, manage turnkey renovations, and provide strategic asset stewardship—ensuring compliance, seamless execution, and maximum returns for our clients.",
    storyTitle: "Our Story",
    mission: "To provide discerning clients with impeccable, full-service property management that optimizes performance and reinforces trust.",
    missionTitle: "Mission",
    vision: "To set the benchmark in premium real estate management, renowned for our unwavering integrity, strategic insight, and discreet excellence.",
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
      experience: "Years Experience",
      properties: "Properties Managed",
      assets: "Assets Under Management",
      satisfaction: "Client Satisfaction"
    },
    ctaTitle: "Ready to Work With Us?",
    ctaSubtitle: "Let's discuss how we can help you unlock the value of your property",
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
    title: "Get in Touch With Us",
    subtitle: "We're here to answer your questions about real estate investment opportunities in Belgium.",
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
