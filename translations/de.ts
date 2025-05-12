import { Translation } from './types';

export const de: Translation = {
  valuation: {
    address: "Adresse",
    addressPlaceholder: "Beginnen Sie mit der Eingabe Ihrer Adresse…",
    addressRequired: "Adresse erforderlich",
    postalCode: "Postleitzahl",
    postalCodeInvalid: "Ungültige Postleitzahl",
    step: "Schritt {{step}} von {{total}}",
    type: "Objekttyp",
    typePlaceholder: "Wählen...",
    typeOptions: {
      apartment: "Wohnung",
      house: "Haus",
      studio: "Studio",
      land: "Grundstück",
      other: "Andere"
    },
    size: "Fläche (m²)",
    sizePlaceholder: "Fläche eingeben",
    bedrooms: "Schlafzimmer",
    bedroomsPlaceholder: "Wählen...",
    condition: "Zustand",
    conditionPlaceholder: "Wählen...",
    conditionOptions: {
      new: "Neu",
      renovated: "Renoviert",
      needsRenovation: "Renovierungsbedürftig",
      old: "Alt"
    },
    features: "Ausstattung",
    featuresOptions: {
      garden: "Garten",
      terrace: "Terrasse",
      pool: "Pool",
      parking: "Parkplatz",
      elevator: "Aufzug",
      cellar: "Keller",
      fireplace: "Kamin",
      airConditioning: "Klimaanlage",
      solarPanels: "Solaranlagen",
      alarm: "Alarmanlage",
      intercom: "Gegensprechanlage"
    },
    name: "Name",
    namePlaceholder: "Ihr Name",
    email: "E-Mail",
    emailPlaceholder: "Ihre E-Mail",
    phone: "Telefon",
    phonePlaceholder: "Ihre Telefonnummer",
    submit: "Absenden",
    back: "Zurück",
    next: "Weiter",
    loading: "Laden...",
    thankYou: "Danke! Ihre Schätzung beträgt {{estimate}} €",
    newEvaluation: "Neue Bewertung",
    error: "Ein Fehler ist aufgetreten, bitte versuchen Sie es erneut.",
    thankContact: "Sie werden in Kürze kontaktiert. Vielen Dank!",
    cta: "Jetzt bewerten"
  },

  common: {
    home: "Startseite",
  },
  // 1. Navigation
  navigation: {
    services: "Dienstleistungen",
    portfolio: "Portfolio",
    technologies: "Technologien",
    about: "Über Uns",
    clientPortal: "Bewerten Sie Mein Eigentum", 
    contactUs: "Bewerten Sie Mein Eigentum",
  },

  // 2. Hero-Bereich
  hero: {
    title: "Verwandle Ihre Immobilie in Möglichkeiten",
    tagline: "Schnell verkaufen, Stress überspringen und Ihre Träume finanzieren!",
    subtitle: "Bei SwitchInvest glauben wir, dass Ihr Zuhause Ihnen neue Chancen eröffnen, nicht zur Last fallen sollte. Ob Sie eine Immobilie geerbt haben, ein Haus besitzen, das teure Reparaturen benötigt, oder einfach schnell Kapital freisetzen möchten, um Ihren Leidenschaften nachzugehen – wir bieten Ihnen eine sorgenfreie Lösung. Wir kaufen Ihre Immobilie wie gesehen, übernehmen alle Renovierungen und zahlen Ihnen schneller aus als traditionelle Methoden. Keine Makler, keine Verzögerungen, keine versteckten Gebühren – nur ein klarer Weg, den Wert Ihres Hauses freizusetzen und Ihr Leben nach Ihren Vorstellungen zu gestalten."
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
    subtitle: "Schlüsselfertige Lösungen, um das Potenzial Ihrer Immobilie freizusetzen",
    learnMore: "Mehr erfahren",
    real_estate: {
      title: "Schneller Barankauf",
      description: "Erhalten Sie innerhalb von 24–48 Stunden ein transparentes Barangebot und schließen Sie schon nach 7 Tagen ab—ohne Makler, ohne versteckte Gebühren.",
      features: [
        "Barangebot in 24–48 Stunden",
        "Wählen Sie Ihr Abschlussdatum (7–30 Tage)",
        "Kauf im Ist-Zustand—keine Inszenierung oder Inspektionen",
        "Keine versteckten Gebühren"
      ]
    },
    investment: {
      title: "Strategische Immobilieninvestition",
      description: "Nutzen Sie unsere lokale Expertise und Marktdaten, um renditestarke Chancen zu identifizieren und Ihr Portfolio zu optimieren.",
      features: [
        "Tiefgehende Marktanalyse",
        "Risikoadjustierte Investitionsstrategien",
        "Optimierung der Portfolioleistung",
        "Fokus auf langfristiges Wachstum"
      ]
    },
    development: {
      title: "Schlüsselfertige Renovierungen",
      description: "Wir managen alle Renovierungen von Anfang bis Ende—maximieren den Wert Ihrer Immobilie und minimieren Ihren Stress.",
      features: [
        "Vollständiges Projektmanagement",
        "Qualitätsorientierte Ausführung",
        "Kosteneffektive Modernisierungen",
        "Nahtlose Koordination"
      ]
    },
    management: {
      title: "Umfassendes Asset-Management",
      description: "End-to-End-Betreuung, die Compliance, Transparenz und nachhaltige Renditen Ihrer Investitionen gewährleistet.",
      features: [
        "Transparente Finanzberichterstattung",
        "Proaktive Instandhaltungskoordination",
        "Mieterbeziehungen & Vermietungsunterstützung",
        "Regulatorische Compliance"
      ]
    }
  },

  process: {
    title: "So funktioniert es",
    steps: [
      { title: "Schritt 1: Details zu Ihrer Immobilie", description: "Füllen Sie unser kurzes Online-Formular aus oder rufen Sie uns an – Adresse, Immobilientyp, Größe und Zustand." },
      { title: "Schritt 2: Erhalten Sie Ihr Barangebot", description: "Erhalten Sie innerhalb von 24–48 Stunden ein transparentes All-Cash-Angebot basierend auf echten Marktdaten und ohne versteckte Abzüge." },
      { title: "Schritt 3: Wählen Sie Ihr Abschlussdatum", description: "Wählen Sie ein Abschlussdatum von 7 bis 30 Tagen – ganz nach Ihrem Zeitplan. Wir übernehmen alle rechtlichen Formalitäten und Notarkosten." },
      { title: "Schritt 4: Wir kümmern uns um den Rest", description: "Wir kaufen Ihre Immobilie im Ist-Zustand, kümmern uns um Renovierungen und zahlen aus – keine Makler, keine Überraschungen." }
    ]
  },

  why_choose_us: {
    title: "Warum Switch Invest?",
    items: [
      { title: "Schnelle Abschlüsse", description: "Von Angebot bis Abschluss in nur 7 Tagen – ohne Verzögerungen oder Finanzierungsprobleme." },
      { title: "Ohne Makler", description: "Keine Inszenierung, keine Besichtigungen und null Maklergebühren." },
      { title: "Transparente Angebote", description: "Sehen Sie genau, wie wir Ihr Angebot berechnen – keine versteckten Kosten oder Abzüge." },
      { title: "All-inclusive-Service", description: "Wir kaufen im Ist-Zustand, übernehmen Renovierungen und regeln alles für Sie." },
      { title: "Lokale Expertise", description: "Tiefgehende Kenntnisse des belgischen Marktes, um den Wert Ihrer Immobilie zu maximieren." }
    ]
  },

  audience: {
    title: "Wer profitieren kann",
    items: [
      { title: "Rentner", description: "Möchten Sie verkleinern und Kapital für Ihre Rente freisetzen?" },
      { title: "Erben", description: "Haben Sie eine geerbte Immobilie, die Sie nicht verwalten möchten? Schnell in Bargeld umwandeln." },
      { title: "Renovierungsbedürftige Eigentümer", description: "Haben Sie eine Immobilie, die Reparaturen benötigt? Wir kaufen im Ist-Zustand, damit Sie keine teuren Renovierungen bezahlen." },
      { title: "Lebensveränderungen", description: "Nutzen Sie den Wert Ihrer Immobilie, um ein Unternehmen zu gründen, eine Ausbildung zu finanzieren oder umzuziehen." }
    ]
  },

  concerns: {
    title: "Häufige Bedenken",
    items: [
      { myth: "Schnellkauf-Unternehmen bieten zu niedrige Preise.", reality: "Unsere Angebote spiegeln den tatsächlichen Marktwert minus der Renovierungskosten wider, die wir übernehmen." },
      { myth: "Verkaufen an ein Unternehmen ist kompliziert.", reality: "Wir übernehmen alle Formalitäten und Termine – Sie müssen nur einmal unterschreiben." }
    ]
  },

  testimonials: [
    { client: "Marie, 68 (Rentnerin)", quote: "Nach dem Tod meines Mannes fühlte sich unser Haus leer an. Switch Invest machte mir innerhalb von 24 Stunden ein faires Angebot. Zwei Wochen später war ich auf dem Weg nach Italien. Beste Entscheidung meines Lebens!" },
    { client: "Luc & Anouk (Junges Paar)", quote: "Wir erbten ein verfallenes Haus von meinem Onkel. Switch Invest kaufte es wie gesehen und jetzt verwenden wir das Geld für den Studienfonds unserer Tochter." },
    { client: "Ahmed (Unternehmer)", quote: "Ich verkaufte meine Wohnung in Brüssel, um mein Startup zu finanzieren. Keine Reue – der Prozess war reibungslos!" }
  ],

  renovation_transparency: {
    title: "Was passiert mit Ihrer Immobilie nach dem Verkauf?",
    renovationScope: [
      "Strukturelle Reparaturen (Dach, Sanitär, Elektrik).",
      "Modernisierungen (Küchen, Badezimmer, Böden).",
      "Umweltfreundliche Verbesserungen (Isolierung, Solarpanels)."
    ],
    communityImpact: "Wir revitalisieren Viertel, indem wir vernachlässigte Immobilien in sichere, moderne Wohnungen für neue Familien umwandeln."
  },

  faqs: [
    { question: "Erheben Sie Gebühren?", answer: "Nein. Unser Angebot ist All-inclusive – keine Provisionen, Abschlusskosten oder versteckten Gebühren." },
    { question: "Was passiert, wenn mein Haus Schäden oder Schimmel hat?", answer: "Wir kaufen Immobilien in jedem Zustand. Sie zahlen nicht für Reparaturen." },
    { question: "Kann ich einen Teil meiner Immobilie verkaufen?", answer: "Ja! Wir kaufen auch Land, Miteigentum oder gemeinsam vererbte Immobilien." },
    { question: "Wie weiß ich, dass Ihr Angebot fair ist?", answer: "Wir liefern eine detaillierte Aufschlüsselung unserer Bewertung. Vergleichen Sie sie mit lokalen Marktberichten!" }
  ],

  cta: {
    title: "Bereit, den Wert Ihrer Immobilie freizusetzen? Erhalten Sie jetzt Ihr unverbindliches Barangebot!",
    tagline: "Schnell. Fair. Ohne Stress.",
    subtitle: "Erhalten Sie ein klares All-Cash-Angebot und schließen Sie nach Ihrem Zeitplan ab – ohne Makler, ohne Reparaturen, ohne versteckte Kosten.",
    primaryButton: "Geben Sie Ihre Adresse in 2 Minuten ein →",
    secondaryText: "Fragen? Rufen Sie uns an unter +32 2 123 45 67 oder schreiben Sie an info@switchinvest.be",
    consultation: "Vereinbaren Sie Ihre Beratung",
    explore: "Entdecken Sie unsere Dienstleistungen"
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
      description: "Passen Sie Ihre Such- oder Filterkriterien an, um zu finden, wonach Sie suchen."
    },
    projects: [
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
    description: "Seit 2010 befähigt SwitchInvest belgische Eigentümer, den Wert ihres Hauses schnell und mühelos freizusetzen. Wir kaufen im Ist-Zustand mit transparenten Barangeboten in 24–48 Stunden, managen schlüsselfertige Renovierungen und bieten strategische Asset-Betreuung—mit Compliance, nahtloser Ausführung und maximalen Renditen für unsere Kunden.",
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
