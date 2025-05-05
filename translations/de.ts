import { Translation } from './types';

export const de: Translation = {
  common: {
    home: "Startseite",
  },
  // 1. Navigation
  navigation: {
    services: "Dienstleistungen",
    portfolio: "Portfolio",
    technologies: "Technologien",
    about: "Über Uns",
    clientPortal: "Kontaktieren Sie uns", // Updated for backward compatibility
    contactUs: "Kontaktieren Sie uns",
  },

  // 2. Hero-Bereich
  hero: {
    title: "Belgische Immobilien auf außergewöhnliche Standards heben",
    tagline: "Unübertroffene Expertise im Premium-Immobilienmanagement",
    subtitle: "Bei SwitchInvest entlasten wir Sie von allen operativen Sorgen – wir leiten, schützen und fördern subtil Ihre Immobilienambitionen mit maßgeschneiderten Lösungen.",
  },

  // 3. Statistik-Bezeichnungen
  statistics: {
    propertiesManaged: "Verwaltete Immobilien",
    totalSquareMeters: "Gesamtquadratmeter",
    yearsExperience: "Jahre Erfahrung",
    satisfiedClients: "Zufriedene Kunden",
  },

  // 4. Vertrauensindikatoren
  trustIndicators: {
    title: "Ausgewählte Immobilien & Partner",
    testimonials: [
      {
        client: "Marie D.",
        quote: "SwitchInvest hat unser Brüsseler Portfolio transformiert – jedes Detail wurde mit Präzision gehandhabt."
      },
      {
        client: "Lukas V.",
        quote: "Ihre diskrete finanzielle Einsicht erschloss Renditen, von denen ich nicht wusste, dass sie möglich waren."
      }
    ],
    awards: [
      "Belgischer Immobilien Excellence Award 2023",
      "Innovator im Immobilienmanagement 2024"
    ],
    certifications: [
      "FEDERA Akkreditierter Immobilienverwalter",
      "ISO 9001:2015 Qualitätsmanagement"
    ]
  },

  // 5. Dienstleistungen
  services: {
    title: "Unsere Dienstleistungen",
    subtitle: "Umfassende Lösungen für Ihre Immobilienbedürfnisse",
    learnMore: "Mehr erfahren",
    real_estate: {
      title: "Premium Immobilienmanagement",
      description: "End-to-End-Verwaltung hochwertiger Vermögenswerte, mit unerschütterlicher Liebe zum Detail und Compliance.",
      features: [
        "Umfassendes Immobilienmanagement",
        "Gesetzliche Compliance & regulatorische Aufsicht",
        "Finanzielle Optimierungsstrategien",
        "Sicherer Zugang zum Kundenportal"
      ]
    },
    investment: {
      title: "Strategische Immobilieninvestition",
      description: "Anspruchsvolle Beratung zum Wachstum und Schutz Ihres Kapitals auf den belgischen Märkten.",
      features: [
        "Tiefgehende Marktanalyse",
        "Gezieltes Risikomanagement",
        "Portfolio-Performance-Optimierung",
        "Maximierte langfristige Renditen"
      ]
    },
    development: {
      title: "Exzellenz in der Immobilienentwicklung",
      description: "Von der Vision bis zur Übergabe treiben wir Projekte mit Präzision und Wertsteigerung bei jedem Schritt voran.",
      features: [
        "End-to-End-Projektmanagement",
        "Bau- und Baustellenüberwachung",
        "Value Engineering Überprüfungen",
        "Strenge Qualitätskontrolle"
      ]
    },
    management: {
      title: "Professionelle Immobilienverwaltung",
      description: "Ganzheitliche Vermögensverwaltung, die Ihren Immobilienbesitz bewahrt und aufwertet.",
      features: [
        "Strategisches Asset Management",
        "Transparente Finanzberichterstattung",
        "Proaktive Instandhaltungskoordination",
        "Mieterbeziehungen & Vermietungsunterstützung"
      ]
    }
  },

  // 6. Portfolio
  portfolio: {
    title: "Vorbildliche Assets unter Verwaltung",
    subtitle: "Eine Auswahl unserer erfolgreich verwalteten und entwickelten Immobilien in ganz Belgien",
    explore: "Entdecken Sie unsere Arbeit",
    filterTitle: "Nach Immobilienkategorie filtern",
    searchPlaceholder: "Projekte suchen...",
    showingResults: "Immobilien anzeigen",
    viewDetails: "Details anzeigen",
    filters: {
      all: "Alle Projekte",
      residential: "Wohnen",
      commercial: "Gewerbe",
      mixed: "Gemischte Nutzung"
    },
    categories: {
      residential: "Wohnen",
      commercial: "Gewerbe",
      mixed: "Gemischte Nutzung"
    },
    status: {
      completed: "Abgeschlossen",
      inProgress: "In Bearbeitung",
      active: "Aktiv"
    },
    stats: {
      projects: "Immobilien",
      regions: "Regionen",
      years: "Jahre"
    },
    noResults: {
      title: "Keine Projekte gefunden",
      description: "Passen Sie Ihre Such- oder Filterkriterien an, um zu finden, wonach Sie suchen.",
      reset: "Filter zurücksetzen"
    },
    cta: {
      label: "Investitionsmöglichkeiten",
      title: "Interesse an einer Investition mit uns?",
      description: "Unsere Expertise auf dem belgischen Immobilienmarkt ermöglicht es uns, Immobilien mit hohem Potenzial zu identifizieren und zu entwickeln. Kontaktieren Sie uns, um Investitionsmöglichkeiten zu besprechen.",
      contactButton: "Kontaktieren Sie uns",
      servicesButton: "Unsere Dienstleistungen"
    },
    items: [
      {
        title: "Étoile Residences",
        description: "Transformation eines unterperformenden historischen Objekts in einer Top-Lage in exklusive Luxusresidenzen. SwitchInvest navigierte durch komplexe Denkmalschutzvorgaben und führte ein sorgfältiges Sanierungsprogramm durch, lieferte erstklassige Qualität und gewann anspruchsvolle internationale Mieter.",
        location: "Brüssel",
        type: "Wohnen",
        size: "6.000 m²",
        achievements: [
          "100 % Belegung innerhalb von 3 Monaten nach Fertigstellung erreicht.",
          "Mietniveau auf Benchmark-Niveau des Viertels gehoben.",
          "Architektonische Auszeichnung für sensible Restaurierung und Integration moderner Annehmlichkeiten erhalten."
        ],
        beforeAfter: {
          vacancyRate: "Vorher: 75 % → Nachher: 0 %",
          appreciation: "Wertsteigerung des Objekts +40 % nach Sanierung"
        }
      },
      {
        title: "Portside Business Centre",
        description: "Strategische Neupositionierung eines alternden Geschäftshauses zu einem Class-A-Bürostandort in einem bedeutenden Wirtschafts­zentrum. SwitchInvest implementierte umfassende Upgrades mit Fokus auf Spitzen-Nachhaltigkeit (BREEAM), intelligente Technologie und erstklassige Mieter-Annehmlichkeiten.",
        location: "Antwerpen",
        type: "Gewerbe (Büro)",
        size: "15.500 m²",
        achievements: [
          "BREEAM-Excellent-Zertifizierung für nachhaltiges Design und Betrieb erhalten.",
          "Langfristige Mietverträge mit zwei multinationalen Hauptmietern bereits vor Fertigstellung abgeschlossen.",
          "Betriebliche Effizienz und digitale Konnektivität des Gebäudes signifikant verbessert."
        ],
        beforeAfter: {
          energyConsumption: "Vorher: 245 kWh/m²/Jahr → Nachher: 85 kWh/m²/Jahr",
          vacancyRate: "Vorher: 60 % → Nachher: 5 % (bei Fertigstellung vollständig vermietet)"
        }
      },
      {
        title: "North Sea Gateway Logistics",
        description: "Optimierung und gezielte Erweiterung einer strategisch wichtigen Logistikanlage zur Bewältigung moderner E-Commerce- und Distributionsanforderungen. SwitchInvest leitete Infrastruktur­verbesserungen und die Neugestaltung der Prozessabläufe, um ein hocheffizientes, hochmodernes Hub zu schaffen.",
        location: "Gent (Hafenbereich)",
        type: "Industrie (Logistik)",
        size: "42.000 m²",
        achievements: [
          "Durch Layout- und Technologie-Updates die Durchsatzkapazität um über 30 % erhöht.",
          "15-jähriger Mietvertrag mit einem führenden europäischen 3PL-Anbieter verhandelt.",
          "Automatisierungslösungen eingeführt, die wesentliche Betriebskosten gesenkt haben."
        ],
        beforeAfter: {
          operationalCost: "Logistikkosten –18 %",
          vacancyRate: "Vorher: 20 % (unterausgelastete Bereiche) → Nachher: 0 % (vollständig vermietet, langfristig)"
        }
      },
      {
        title: "The Sablon Quarters",
        description: "Sorgfältige Umgestaltung einer Mixed-Use-Immobilie in einer prestigeträchtigen historischen Gegend, bei der Denkmalpflege und moderne Anforderungen harmonisch verbunden wurden. SwitchInvest kuratierte Premium-Einzelhandel, exklusive Büroflächen und Luxuswohnungen, was Profil und Rendite des Objekts steigerte.",
        location: "Brüssel",
        type: "Gemischt (Einzelhandel, Büro, Wohnen)",
        size: "9.500 m²",
        achievements: [
          "Gewinnung internationaler Premium-Einzelhandelsmarken im Erdgeschoss.",
          "Vollständige Vermietung der Büro- und Wohneinheiten zu Spitzenmarktpreisen erreicht.",
          "Attraktivität der Immobilie durch exklusives Design und hochwertige Ausstattung gesteigert."
        ],
        beforeAfter: {
          rentalRate: "Durchschnittliche Miete pro m² +25 %",
          appreciation: "Gesamtwertsteigerung +35 %"
        }
      }
    ]
  },

  // 7. Technologien
  technologies: {
    title: "Fortschrittliche Technologien",
    subtitle: "Innovative Lösungen für modernes Immobilienmanagement",
    items: [
      {
        section: "Intelligentes Immobilienmanagement",
        features: [
          "IoT-Sensorintegration (HLK, Beleuchtung, Sicherheit)",
          "Vorausschauende Wartungsalgorithmen",
          "Automatisierte Energieeffizienzkontrollen"
        ],
        benefits: [
          "Reduzierte Betriebskosten",
          "Erhöhter Mieterkomfort",
          "Verbesserte Langlebigkeit der Vermögenswerte"
        ]
      },
      {
        section: "Datenanalyse & Einblicke",
        features: [
          "KI-gestützte Markttrendanalyse",
          "Investitionsprognosemodelle",
          "Portfolio-Optimierungsalgorithmen"
        ],
        benefits: [
          "Datengestützte Entscheidungsfindung",
          "Minimiertes Marktrisiko",
          "Erhöhte Rentabilität"
        ]
      },
      {
        section: "Kundenportal",
        features: [
          "24/7 sicherer Zugriff",
          "Dokumentenmanagement-Suite",
          "Live-Finanzverfolgung"
        ],
        benefits: [
          "Volle Transparenz",
          "Müheloser Komfort",
          "Gestärkte Kontrolle"
        ]
      }
    ]
  },

  // 8. Innovationssäulen
  innovation: {
    title: "Immobilien Voranbringen",
    subtitle: "Unser Engagement für kontinuierliche Verbesserung und Spitzenlösungen",
    technologies: {
      items: [
        {
          title: "Nachhaltige Entwicklung",
          description: "Implementierung von grünen Baupraktiken und Technologien zur Minimierung der Umweltauswirkungen und Steigerung des langfristigen Werts."
        },
        {
          title: "Digital Twin Technologie",
          description: "Erstellung virtueller Repliken von Immobilien für fortschrittliche Simulation, Überwachung und Betriebsplanung."
        },
        {
          title: "KI-gestützte Mieterfahrung",
          description: "Nutzung künstlicher Intelligenz zur Personalisierung von Mieterdienstleistungen, Vorhersage von Bedürfnissen und Optimierung der Gebäudenutzung."
        }
      ]
    }
  },

  // 9. Über Uns
  about: {
    title: "Über uns",
    description: "Gegründet 2010 aus dem Anspruch, das belgische Immobilienmanagement durch langjährige Expertise und maßgeschneiderte Innovation neu zu definieren. Wir bieten ganzheitliche Betreuung, die den Wert Ihrer Assets maximiert und eine reibungslose, diskrete Erfahrung für anspruchsvolle Investoren garantiert.",
    mission: "Unsere Mission ist es, anspruchsvollen Kunden makelloses Full-Service-Immobilienmanagement zu bieten, das Leistung optimiert und Vertrauen schafft.",
    vision: "Unsere Vision ist es, Maßstab im Premium-Immobilienmanagement zu sein, bekannt für unerschütterliche Integrität, strategische Weitsicht und diskrete Exzellenz.",
    values: {
      title: "Unsere Werte",
      items: [
        "Exzellenz",
        "Integrität",
        "Innovation",
        "Diskretion"
      ]
    },
    team: [
      {
        name: "Sophie Van den Berg",
        position: "Geschäftsführerin",
        expertise: "Strategische Führung im Luxus- und institutionellen Immobilienmanagement.",
        experience: "Über 15 Jahre Leitung von Premium-Immobilienportfolios in Europa."
      },
      {
        name: "Lucas De Wilde",
        position: "Finanzdirektor",
        expertise: "Finanzstrukturierung und Performance-Optimierung hochklassiger Vermögenswerte.",
        experience: "Über 12 Jahre in der Immobilienfinanzierung mit robusten Renditen für institutionelle Kunden."
      },
      {
        name: "Emma Willems",
        position: "Leiterin Asset Management",
        expertise: "Ganzheitliches Asset-Management von Akquisition bis zu wertsteigernden Kapitalprojekten.",
        experience: "Über 10 Jahre in verschiedenen Asset-Klassen und nachhaltigem Wachstum."
      },
      {
        name: "Antoine Dupont",
        position: "Direktor Kundenbeziehungen",
        expertise: "Maßgeschneiderter Kundenservice mit Fokus auf Vertraulichkeit und individuellen Lösungen.",
        experience: "Über 8 Jahre Aufbau langfristiger Partnerschaften mit vermögenden Privatkunden und Institutionen."
      }
    ]
  },

  // 10. Handlungsaufforderung
  cta: {
    title: "Bereit, Ihr Immobilienportfolio zu transformieren?",
    tagline: "Lassen Sie uns gemeinsam etwas Außergewöhnliches schaffen",
    subtitle: "Erleben Sie die Zukunft des Immobilienmanagements mit unseren Spitzenlösungen und unserem personalisierten Ansatz.",
    consultation: "Beratungstermin vereinbaren",
    explore: "Dienstleistungen erkunden →",
    description: "Kontaktieren Sie uns, um zu besprechen, wie wir Ihnen helfen können, Ihre Immobilienziele zu erreichen.",
    buttonText: "Kontaktieren Sie uns"
  },

  // 11. Fußzeile
  footer: {
    description: "Umfassende Verwaltung für anspruchsvolle Immobilienportfolios in Belgien.",
    security: {
      gdpr: "DSGVO-zertifiziert",
      encryption: "AES-256 Verschlüsselung"
    },
    services: {
      title: "Dienstleistungen",
      portfolioAdmin: "Portfolio-Verwaltung",
      assetEnhancement: "Vermögenswertsteigerung",
      proprietaryTech: "Eigene Technologien",
      compliance: "Compliance-Lösungen"
    },
    company: {
      title: "Unternehmen",
      about: "Über Uns",
      leadership: "Führung",
      careers: "Karriere",
      contact: "Kontakt"
    },
    legal: {
      title: "Rechtliches",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      cookies: "Cookie-Richtlinie",
      gdpr: "DSGVO-Konformität"
    },
    copyright: "Alle Rechte vorbehalten.",
    belgium: "Belgien"
  },

  // 12. Sprachen & Regionen
  languages: {
    nl: "Niederländisch",
    fr: "Französisch",
    de: "Deutsch",
    en: "Englisch",
    regions: {
      flanders: "Flandern",
      wallonia: "Wallonien",
      brussels: "Brüssel",
      german: "Deutschsprachige Gemeinschaft",
      "german-speaking community": "Deutschsprachige Gemeinschaft",
      international: "International"
    },
    mapRegions: {
      'flemish-community': "Flämische Gemeinschaft",
      'french-community': "Französische Gemeinschaft",
      'german-speaking-community': "Deutschsprachige Gemeinschaft",
      'brussels-capital-region': "Region Brüssel-Hauptstadt",
      'belgium': "Belgien"
    }
  },
  
  // 404 Seite
  notFound: {
    title: "Seite Nicht Gefunden",
    message: "Die gesuchte Seite existiert nicht oder wurde an einen anderen Ort verschoben.",
    backHome: "Zurück zur Startseite"
  },
  
  // Kontaktseite
  contact: {
    title: "Kontaktieren Sie Uns",
    subtitle: "Wir sind hier, um Ihre Fragen zu Immobilieninvestitionsmöglichkeiten in Belgien zu beantworten.",
    form: {
      title: "Kontaktformular",
      name: "Vollständiger Name",
      email: "E-Mail-Adresse",
      phone: "Telefonnummer",
      message: "Ihre Nachricht",
      submit: "Nachricht Senden",
      sending: "Wird gesendet..."
    },
    success: {
      title: "Nachricht Erfolgreich Gesendet!",
      message: "Vielen Dank für Ihre Kontaktaufnahme. Unser Team wird sich innerhalb von 24-48 Stunden bei Ihnen melden.",
      newMessage: "Eine Weitere Nachricht Senden"
    },
    info: {
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse"
    }
  },
  
  // Cookie-Zustimmung
  cookie: {
    title: "Cookie-Zustimmung",
    message: "Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern und den Website-Verkehr zu analysieren. Indem Sie auf \"Akzeptieren\" klicken, stimmen Sie unserer Verwendung von Cookies zu, wie in unserer",
    privacyPolicy: "Datenschutzrichtlinie",
    accept: "Akzeptieren",
    decline: "Ablehnen"
  },
  
  // Datenschutz und Bedingungen
  privacy: {
    title: "Datenschutzrichtlinie"
  },
  terms: {
    title: "Nutzungsbedingungen"
  }
};
