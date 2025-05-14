import { Translation } from './types';

export const nl: Translation = {
  valuation: {
    address: "Adres",
    addressPlaceholder: "Begin met het typen van uw adres…",
    addressRequired: "Adres is verplicht",
    postalCode: "Postcode",
    postalCodeInvalid: "Ongeldige postcode",
    step: "Stap {{step}} van {{total}}",
    type: "Type eigendom",
    typePlaceholder: "Kies...",
    typeOptions: {
      apartment: "Appartement",
      house: "Huis",
      studio: "Studio",
      land: "Grond",
      other: "Anders"
    },
    size: "Oppervlakte (m²)",
    sizePlaceholder: "Voer de oppervlakte in",
    bedrooms: "Slaapkamers",
    bedroomsPlaceholder: "Kies...",
    condition: "Staat",
    conditionPlaceholder: "Kies...",
    conditionOptions: {
      new: "Nieuw",
      renovated: "Gerenoveerd",
      needsRenovation: "Renovatie nodig",
      old: "Oud"
    },
    features: "Kenmerken",
    featuresOptions: {
      garden: "Tuin",
      terrace: "Terras",
      pool: "Zwembad",
      parking: "Parkeerplaats",
      elevator: "Lift",
      cellar: "Kelder",
      fireplace: "Open haard",
      airConditioning: "Airconditioning",
      solarPanels: "Zonnepanelen",
      alarm: "Alarm",
      intercom: "Intercom"
    },
    name: "Naam",
    namePlaceholder: "Uw naam",
    email: "E-mail",
    emailPlaceholder: "Uw e-mail",
    phone: "Telefoon",
    phonePlaceholder: "Uw telefoonnummer",
    submit: "Verzenden",
    back: "Terug",
    next: "Volgende",
    loading: "Laden...",
    thankYou: "Bedankt! Uw schatting is {{estimate}} €",
    newEvaluation: "Nieuwe schatting",
    error: "Er is een fout opgetreden, probeer het opnieuw.",
    thankContact: "U wordt binnenkort gecontacteerd. Bedankt!",
    cta: "Nu waarderen"
  },
  common: {
    home: "Home",
  },
  // 1. Navigatie
  navigation: {
    services: "Diensten",
    portfolio: "Portefeuille",
    technologies: "Technologieën",
    about: "Over ons",
    clientPortal: "Evalueer Mijn Eigendom",
    contactUs: "Evalueer Mijn Eigendom",
  },

  // 2. Hero Sectie
  hero: {
    title: "Maak van uw woning kansen",
    tagline: "Snel verkopen, zonder stress en uw dromen financieren!",
    subtitle: "Bij Switch Invest geloven we dat uw woning een toegangspoort tot nieuwe kansen moet zijn, geen last. Of u nu een erfpand hebt geërfd, een huis bezit dat dure reparaties nodig heeft, of gewoon snel geld wilt vrijmaken om uw passies te volgen, wij bieden een zorgeloze oplossing. Wij kopen uw woning in de staat waarin deze verkeert, verzorgen alle renovaties en storten het geld sneller dan traditionele methoden op uw rekening. Geen makelaars, geen vertragingen, geen verborgen kosten – alleen een eenvoudige manier om de waarde van uw huis vrij te maken en te beginnen met leven op uw voorwaarden.",
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
  services: {
    title: "Onze Diensten",
    subtitle: "Turnkey-oplossingen om het potentieel van uw woning te ontsluiten",
    learnMore: "Meer informatie",
    real_estate: {
      title: "Snelle contante aankoop",
      description: "Ontvang binnen 24–48 uur een transparant, contant bod en sluit al binnen 7 dagen af—geen makelaars, geen verborgen kosten.",
      features: [
        "Contant bod binnen 24–48 uur",
        "Kies uw sluitingsdatum (7–30 dagen)",
        "Aankoop in huidige staat—geen staging of inspecties",
        "Geen verborgen kosten"
      ]
    },
    investment: {
      title: "Strategische Vastgoedinvestering",
      description: "Benut onze lokale expertise en marktgegevens om rendabele kansen te identificeren en uw portefeuille te optimaliseren.",
      features: [
        "Diepgaande marktanalyse",
        "Risicogecorrigeerde investeringsstrategieën",
        "Optimalisatie van portefeuilleprestaties",
        "Focus op langetermijngroei"
      ]
    },
    development: {
      title: "Sleutelklare renovaties",
      description: "Wij beheren alle renovaties van begin tot eind—maximaliseer de waarde van uw pand en minimaliseer stress.",
      features: [
        "Volledig projectbeheer",
        "Kwaliteitsgerichte uitvoering",
        "Kosteneffectieve upgrades",
        "Naadloze coördinatie"
      ]
    },
    management: {
      title: "Uitgebreid assetmanagement",
      description: "End-to-end beheer dat naleving, transparantie en duurzame rendementen op uw investeringen garandeert.",
      features: [
        "Transparante financiële rapportage",
        "Proactieve onderhoudscoördinatie",
        "Huurderrelaties & verhuurondersteuning",
        "Naleving van regelgeving"
      ]
    }
  },
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
  about: {
    title: "Over ons",
    description: "Sinds 2010 helpt SwitchInvest Belgische huiseigenaren om snel en moeiteloos de waarde van hun woning te ontsluiten. We kopen in de huidige staat met transparante contante biedingen binnen 24–48 uur, verzorgen sleutelklare renovaties en bieden strategisch assetmanagement—met naleving, naadloze uitvoering en maximale rendementen voor onze klanten.",
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
  notFound: {
    title: "Pagina Niet Gevonden",
    message: "De pagina die u zoekt bestaat niet of is verplaatst naar een andere locatie.",
    backHome: "Terug naar Homepagina"
  },
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
  cookie: {
    title: "Cookie Toestemming",
    message: "Wij gebruiken cookies om uw browse-ervaring te verbeteren en websiteverkeer te analyseren. Door op \"Accepteren\" te klikken, gaat u akkoord met ons gebruik van cookies zoals beschreven in ons",
    privacyPolicy: "Privacybeleid",
    accept: "Accepteren",
    decline: "Weigeren"
  },
  privacy: {
    title: "Privacybeleid"
  },
  terms: {
    title: "Servicevoorwaarden"
  },
  process: {
    title: "Hoe het werkt",
    steps: [
      { title: "Stap 1: Geef uw pandgegevens door", description: "Vul ons snelle online formulier in of bel ons met uw pandgegevens—adres, type, grootte en staat." },
      { title: "Stap 2: Ontvang uw snelle contante aanbieding", description: "Ontvang binnen 24–48 uur een transparant bod op basis van echte marktdata, zonder verborgen aftrekposten." },
      { title: "Stap 3: Kies uw sluitingsdatum", description: "Kies een sluitingsdatum (vanaf 7 dagen tot 30 dagen)—wat voor u werkt. Wij regelen alle juridische documenten en notariskosten." },
      { title: "Stap 4: Wij regelen de rest", description: "We kopen uw pand in de staat-as-is, verzorgen de renovaties en zetten het geld op uw rekening—geen makelaars, geen reparaties, geen verborgen kosten." }
    ]
  },
  why_choose_us: {
    title: "Waarom Switch Invest?",
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
  },
  audience: {
    title: "Wie kan profiteren",
    items: [
      { title: "Gepensioneerden", description: "Wilt u downsizen en vermogen vrijmaken voor uw pensioen?" },
      { title: "Erfgenamen", description: "Een geërfd pand dat u niet wilt beheren? Snel contant maken." },
      { title: "Fixer-Upper Eigenaren", description: "Heeft u een huis dat reparaties nodig heeft? Wij kopen as-is zodat u niet betaalt voor dure reparaties." },
      { title: "Levensveranderingen", description: "Gebruik de waarde van uw pand om een bedrijf te starten, studie te financieren of te verhuizen." }
    ]
  },
  concerns: {
    title: "Veelvoorkomende zorgen aanpakken",
    items: [
      { myth: "Snelverkoopbedrijven bieden te lage prijzen.", reality: "Onze aanbiedingen weerspiegelen werkelijke marktwaarde minus renovatiekosten die wij dekken." },
      { myth: "Verkopen aan een bedrijf is ingewikkeld.", reality: "Wij regelen alle documenten en afspraken—u hoeft maar één keer te tekenen." }
    ]
  }
};
