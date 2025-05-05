import { Translation } from './types';

export const nl: Translation = {
  common: {
    home: "Home",
  },
  // 1. Navigatie
  navigation: {
    services: "Diensten",
    portfolio: "Portefeuille",
    technologies: "Technologieën",
    about: "Over ons",
    clientPortal: "Contact",
    contactUs: "Contact",
  },

  // 2. Hero Sectie
  hero: {
    title: "Belgisch Vastgoed Verheffen tot Uitzonderlijke Standaarden",
    tagline: "Ongeëvenaarde Expertise in Premium Vastgoedbeheer",
    subtitle: "Bij SwitchInvest nemen we u elke operationele zorg uit handen – we begeleiden, beschermen en versterken subtiel uw vastgoedambities met oplossingen op maat.",
  },

  // 3. Statistieken Labels
  statistics: {
    propertiesManaged: "Beheerde panden",
    totalSquareMeters: "Totaal vierkante meters",
    yearsExperience: "Jaar ervaring",
    satisfiedClients: "Tevreden klanten",
  },

  // 4. Vertrouwensindicatoren
  trustIndicators: {
    title: "Uitgelichte Eigendommen & Partners",
    testimonials: [
      {
        client: "Marie D.",
        quote: "SwitchInvest transformeerde onze Brusselse portefeuille – elk detail met precisie behandeld."
      },
      {
        client: "Lukas V.",
        quote: "Hun discrete financiële inzicht ontsloot rendementen waarvan ik niet wist dat ze mogelijk waren."
      }
    ],
    awards: [
      "Belgische Vastgoed Excellence Award 2023",
      "Vastgoedbeheer Innovator 2024"
    ],
    certifications: [
      "FEDERA Erkend Vastgoedbeheerder",
      "ISO 9001:2015 Kwaliteitsmanagement"
    ]
  },

  // 5. Diensten
  services: {
    title: "Onze Diensten",
    subtitle: "Uitgebreide Oplossingen voor Uw Vastgoedbehoeften",
    learnMore: "Meer informatie",
    real_estate: {
      title: "Premium Vastgoedbeheer",
      description: "End-to-end administratie van hoogwaardige activa, met onwrikbare aandacht voor detail en naleving.",
      features: [
        "Uitgebreid vastgoedbeheer",
        "Wettelijke naleving & regelgevend toezicht",
        "Financiële optimalisatiestrategieën",
        "Veilige toegang tot klantenportaal"
      ]
    },
    investment: {
      title: "Strategische Vastgoedinvestering",
      description: "Geraffineerde begeleiding om uw kapitaal te laten groeien en te beschermen op de Belgische markten.",
      features: [
        "Diepgaande marktanalyse",
        "Gericht risicobeheer",
        "Optimalisatie van portefeuilleprestaties",
        "Gemaximaliseerd langetermijnrendement"
      ]
    },
    development: {
      title: "Excellentie in Vastgoedontwikkeling",
      description: "Van visie tot oplevering, wij sturen projecten met precisie en waardeverhoging bij elke stap.",
      features: [
        "End-to-end projectmanagement",
        "Bouw- en werfopvolging",
        "Value engineering reviews",
        "Strikte kwaliteitscontrole"
      ]
    },
    management: {
      title: "Professionele Vastgoedadministratie",
      description: "Holistisch beheer van activa dat uw vastgoedbezit behoudt en verbetert.",
      features: [
        "Strategisch vermogensbeheer",
        "Transparante financiële rapportage",
        "Proactieve onderhoudscoördinatie",
        "Huurdersrelaties & verhuurondersteuning"
      ]
    }
  },

  // 6. Portefeuille
  portfolio: {
    title: "Voorbeeldige beheerde activa",
    subtitle: "Een selectie van onze succesvol beheerde en ontwikkelde eigendommen in België",
    explore: "Ontdek ons werk",
    filterTitle: "Filter op vastgoedcategorie",
    searchPlaceholder: "Zoek projecten...",
    showingResults: "Eigendommen weergeven",
    viewDetails: "Details bekijken",
    filters: {
      all: "Alle projecten",
      residential: "Residentieel",
      commercial: "Commercieel",
      mixed: "Gemengd gebruik"
    },
    categories: {
      residential: "Residentieel",
      commercial: "Commercieel",
      mixed: "Gemengd gebruik"
    },
    status: {
      completed: "Voltooid",
      inProgress: "In uitvoering",
      active: "Actief"
    },
    stats: {
      projects: "Eigendommen",
      regions: "Regio's",
      years: "Jaren"
    },
    noResults: {
      title: "Geen projecten gevonden",
      description: "Pas je zoek- of filtercriteria aan om te vinden wat je zoekt.",
      reset: "Filters resetten"
    },
    cta: {
      label: "Investeringsmogelijkheden",
      title: "Geïnteresseerd in investeren met ons?",
      description: "Onze expertise in de Belgische vastgoedmarkt stelt ons in staat om hoogwaardige eigendommen te identificeren en te ontwikkelen. Neem contact met ons op om investeringsmogelijkheden te bespreken.",
      contactButton: "Neem contact op",
      servicesButton: "Onze diensten"
    },
    items: [
      {
        title: "Étoile Residences",
        description: "Transformatie van een onderpresterend historisch pand in een toplocatie tot luxe woonresidences. SwitchInvest navigeerde complexe erfgoedwetgeving en voerde een minutieus renovatieprogramma uit, waarbij uitzonderlijke kwaliteit werd geleverd en veeleisende internationale huurders werden aangetrokken.",
        location: "Brussel",
        type: "Woning",
        size: "6.000 m²",
        achievements: [
          "Binnen 3 maanden na oplevering 100% bezetting behaald.",
          "Huurwaarden naar benchmarkniveau in de buurt getild.",
          "Architectonische onderscheiding ontvangen voor gevoelige restauratie en integratie van moderne voorzieningen."
        ],
        beforeAfter: {
          vacancyRate: "Voor: 75% → Na: 0%",
          appreciation: "Waardestijging activa +40% na herontwikkeling"
        }
      },
      {
        title: "Portside Business Centre",
        description: "Strategische herpositionering van een verouderd commercieel gebouw tot Class A-kantoor in een economisch zwaartepunt. SwitchInvest voerde een complete upgrade uit met focus op geavanceerde duurzaamheid (BREEAM), slimme technologie en hoogwaardige huurdersvoorzieningen.",
        location: "Antwerpen",
        type: "Commercieel (Kantoor)",
        size: "15.500 m²",
        achievements: [
          "BREEAM Excellent-certificering behaald voor duurzaam ontwerp en exploitatie.",
          "Langetermijnhuurovereenkomsten gesloten met twee multinationale hoofdhuurders voorafgaand aan oplevering.",
          "Operationele efficiëntie en digitale connectiviteit van het gebouw aanzienlijk verbeterd."
        ],
        beforeAfter: {
          energyConsumption: "Voor: 245 kWh/m²/jaar → Na: 85 kWh/m²/jaar",
          vacancyRate: "Voor: 60% → Na: 5% (volledig verhuurd bij oplevering)"
        }
      },
      {
        title: "North Sea Gateway Logistics",
        description: "Optimalisatie en gerichte uitbreiding van een strategisch logistiek knooppunt om te voldoen aan moderne e-commerce- en distributiebehoeften. SwitchInvest beheerde infrastructuurverbeteringen en proces-flowherontwerp, waarmee een uiterst efficiënt state-of-the-art centrum is gerealiseerd.",
        location: "Gent (Havengebied)",
        type: "Industrieel (Logistiek)",
        size: "42.000 m²",
        achievements: [
          "Door lay-out en technologische upgrades is de doorvoercapaciteit met meer dan 30% verhoogd.",
          "15-jarige huurovereenkomst afgesloten met een toonaangevende Europese 3PL-organisatie.",
          "Automatiseringsoplossingen geïmplementeerd die de belangrijkste operationele kosten hebben verlaagd."
        ],
        beforeAfter: {
          operationalCost: "Logistieke handlingskosten –18%",
          vacancyRate: "Voor: 20% (onderbenutte secties) → Na: 0% (volledig verhuurd, langetermijn)"
        }
      },
      {
        title: "The Sablon Quarters",
        description: "Zorgvuldige herontwikkeling van een mixed-use pand in een prestigieus historisch gebied, waarbij behoud en moderne behoeften in balans werden gebracht. SwitchInvest selecteerde hoogwaardige retail, exclusieve kantoorruimtes en luxe appartementen, wat de algehele kwaliteit en het rendement van het bezit verhoogde.",
        location: "Brussel",
        type: "Gemengd gebruik (Retail, Kantoor, Woning)",
        size: "9.500 m²",
        achievements: [
          "Premium internationale retailmerken aangetrokken op de begane grond.",
          "Volledige verhuur van kantoor- en woonunits tegen topmarkttarief gerealiseerd.",
          "Aantrekkingskracht van het pand versterkt door zorgvuldig ontwerp en hoogwaardige afwerkingen."
        ],
        beforeAfter: {
          rentalRate: "Gemiddelde huurprijs per m² +25%",
          appreciation: "Totale waardering activa +35%"
        }
      }
    ]
  },

  // 7. Technologieën
  technologies: {
    title: "Geavanceerde technologieën",
    subtitle: "Innovatieve Oplossingen voor Modern Vastgoedbeheer",
    items: [
      {
        section: "Slim Vastgoedbeheer",
        features: [
          "IoT-sensorintegratie (HVAC, verlichting, beveiliging)",
          "Predictieve onderhoudsalgoritmen",
          "Geautomatiseerde energie-efficiëntiecontroles"
        ],
        benefits: [
          "Verlaagde operationele kosten",
          "Verbeterd huurderscomfort",
          "Verbeterde levensduur van activa"
        ]
      },
      {
        section: "Data-analyse & Inzichten",
        features: [
          "AI-gedreven markttrendanalyse",
          "Investeringsprognosemodellen",
          "Portefeuille-optimalisatiealgoritmen"
        ],
        benefits: [
          "Data-ondersteunde besluitvorming",
          "Geminimaliseerd marktrisico",
          "Verbeterde winstgevendheid"
        ]
      },
      {
        section: "Klantenportaal",
        features: [
          "24/7 beveiligde toegang",
          "Documentbeheersuite",
          "Live financiële tracking"
        ],
        benefits: [
          "Volledige transparantie",
          "Moeiteloos gemak",
          "Versterkte controle"
        ]
      }
    ]
  },

  // 8. Innovatie Pijlers
  innovation: {
    title: "Vastgoed Vooruithelpen",
    subtitle: "Onze Toewijding aan Continue Verbetering en Geavanceerde Oplossingen",
    technologies: {
      items: [
        {
          title: "Duurzame Ontwikkeling",
          description: "Implementatie van groene bouwpraktijken en technologieën om milieu-impact te minimaliseren en langetermijnwaarde te verhogen."
        },
        {
          title: "Digital Twin Technologie",
          description: "Creëren van virtuele replica's van panden voor geavanceerde simulatie, monitoring en operationele planning."
        },
        {
          title: "AI-Gedreven Huurderservaring",
          description: "Gebruik van kunstmatige intelligentie om huurdersdiensten te personaliseren, behoeften te voorspellen en gebouwgebruik te optimaliseren."
        }
      ]
    }
  },

  // 9. Over Ons
  about: {
    title: "Over ons",
    description: "Opgericht in 2010 vanuit de ambitie om Belgisch vastgoedbeheer te transformeren door decennialange expertise te combineren met op maat gemaakte innovatie. Wij bieden end-to-end stewardship die de waarde van activa maximaliseert en een naadloze, discrete ervaring garandeert voor veeleisende investeerders.",
    mission: "Onze missie is om veeleisende cliënten te voorzien van onberispelijk, full-service vastgoedbeheer dat prestaties optimaliseert en vertrouwen versterkt.",
    vision: "Onze visie is om de lat te leggen in premium vastgoedbeheer, bekend om onze onwrikbare integriteit, strategisch inzicht en discrete uitmuntendheid.",
    values: {
      title: "Onze waarden",
      items: [
        "Uitmuntendheid",
        "Integriteit",
        "Innovatie",
        "Discretie"
      ]
    },
    team: [
      {
        name: "Sophie Van den Berg",
        position: "Algemeen Directeur",
        expertise: "Strategisch leiderschap in luxe en institutioneel vastgoedbeheer.",
        experience: "15+ jaar het aansturen van premium vastgoedportefeuilles in heel Europa."
      },
      {
        name: "Lucas De Wilde",
        position: "Financieel Directeur",
        expertise: "Financiële structuur en prestatie­optimalisatie voor hoogklassige activa.",
        experience: "12+ jaar in vastgoedfinanciering en het realiseren van robuuste rendementen voor institutionele klanten."
      },
      {
        name: "Emma Willems",
        position: "Hoofd Asset Management",
        expertise: "Omvattend toezicht op activa van acquisitie tot waarde­verhogende kapitaalprojecten.",
        experience: "10+ jaar ervaring met diverse vastgoedklassen en het stimuleren van langetermijngroei."
      },
      {
        name: "Antoine Dupont",
        position: "Directeur Klantrelaties",
        expertise: "Op maat gemaakte cliëntendienst met focus op vertrouwelijkheid en gepersonaliseerde oplossingen.",
        experience: "8+ jaar in het bouwen van duurzame samenwerkingen met vermogende particulieren en institutionele partijen."
      }
    ]
  },

  // 10. Oproep tot Actie
  cta: {
    title: "Klaar om Uw Vastgoedportefeuille te Transformeren?",
    tagline: "Laten We Samen Iets Buitengewoons Creëren",
    subtitle: "Ervaar de toekomst van vastgoedbeheer met onze geavanceerde oplossingen en gepersonaliseerde aanpak.",
    consultation: "Plan een Consultatie",
    explore: "Ontdek Diensten →",
    description: "Neem contact met ons op om te bespreken hoe we u kunnen helpen uw vastgoeddoelen te bereiken.",
    buttonText: "Neem Contact Op"
  },

  // 11. Footer
  footer: {
    description: "Uitgebreid beheer voor veeleisende vastgoedportefeuilles in België.",
    security: {
      gdpr: "AVG-gecertificeerd",
      encryption: "AES-256 Encryptie"
    },
    services: {
      title: "Diensten",
      portfolioAdmin: "Portefeuille Administratie",
      assetEnhancement: "Activa Waardeverhoging",
      proprietaryTech: "Eigen Technologieën",
      compliance: "Compliance Oplossingen"
    },
    company: {
      title: "Bedrijf",
      about: "Over Ons",
      leadership: "Leiderschap",
      careers: "Carrières",
      contact: "Contact"
    },
    legal: {
      title: "Juridisch",
      privacy: "Privacybeleid",
      terms: "Servicevoorwaarden",
      cookies: "Cookiebeleid",
      gdpr: "AVG Naleving"
    },
    copyright: "Alle rechten voorbehouden.",
    belgium: "België"
  },

  // 12. Talen & Regio's
  languages: {
    nl: "Nederlands",
    fr: "Frans",
    de: "Duits",
    en: "Engels",
    regions: {
      flanders: "Vlaanderen",
      wallonia: "Wallonië",
      brussels: "Brussel",
      german: "Duitstalige Gemeenschap",
      "german-speaking community": "Duitstalige Gemeenschap",
      international: "Internationaal"
    },
    mapRegions: {
      'flemish-community': "Vlaamse Gemeenschap",
      'french-community': "Franse Gemeenschap",
      'german-speaking-community': "Duitstalige Gemeenschap",
      'brussels-capital-region': "Brussels Hoofdstedelijk Gewest",
      'belgium': "België"
    }
  },
  
  // 404 Pagina
  notFound: {
    title: "Pagina Niet Gevonden",
    message: "De pagina die u zoekt bestaat niet of is verplaatst naar een andere locatie.",
    backHome: "Terug naar Homepagina"
  },
  
  // Contact Pagina
  contact: {
    title: "Neem Contact Met Ons Op",
    subtitle: "Wij zijn er om uw vragen over vastgoedbeleggingsmogelijkheden in België te beantwoorden.",
    form: {
      title: "Contactformulier",
      name: "Volledige Naam",
      email: "E-mailadres",
      phone: "Telefoonnummer",
      message: "Uw Bericht",
      submit: "Bericht Versturen",
      sending: "Versturen..."
    },
    success: {
      title: "Bericht Succesvol Verzonden!",
      message: "Dank u voor uw bericht. Ons team neemt binnen 24-48 uur contact met u op.",
      newMessage: "Stuur Nog Een Bericht"
    },
    info: {
      phone: "Telefoon",
      email: "E-mail",
      address: "Adres"
    }
  },
  
  // Cookie Toestemming
  cookie: {
    title: "Cookie Toestemming",
    message: "Wij gebruiken cookies om uw browse-ervaring te verbeteren en websiteverkeer te analyseren. Door op \"Accepteren\" te klikken, gaat u akkoord met ons gebruik van cookies zoals beschreven in ons",
    privacyPolicy: "Privacybeleid",
    accept: "Accepteren",
    decline: "Weigeren"
  },
  
  // Privacy en Voorwaarden
  privacy: {
    title: "Privacybeleid"
  },
  terms: {
    title: "Servicevoorwaarden"
  }
};
