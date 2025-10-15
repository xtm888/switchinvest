import { Translation } from './types';

export const de: Translation = {
  valuation: {
    title: "Bewerten Sie meine Immobilie",
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
  home: {
    trustBadge: "Vertraut von 500+ Immobilienbesitzern",
    ctaPrimary: "Holen Sie Sich Ihre Kostenlose Bewertung",
    ctaSecondary: "Entdecken Sie Unsere Dienstleistungen",
    featuresTitle: "Warum SwitchInvest Wählen?",
    featuresSubtitle: "Schnelle, transparente und problemlose Immobilienlösungen",
    features: {
      fastOffers: {
        title: "Angebote in 24-48 Stunden",
        description: "Erhalten Sie ein transparentes Angebot innerhalb von 2 Tagen"
      },
      noFees: {
        title: "Keine Versteckten Gebühren",
        description: "Klare Preise ohne Überraschungen"
      },
      asIs: {
        title: "Ankauf im Ist-Zustand",
        description: "Wir kaufen Ihre Immobilie in jedem Zustand"
      },
      quickClosing: {
        title: "Schneller Abschluss",
        description: "Abschluss in nur 7 Tagen"
      }
    },
    mapTitle: "Unsere Präsenz in Ganz Belgien",
    mapSubtitle: "Immobilienbesitzer in allen Regionen mit lokaler Expertise bedienen",
    hero: {
      badge: "500+ Zufriedene Eigentümer in Belgien",
      title: "Verwandeln Sie Ihre Immobilie",
      titleHighlight: "in Möglichkeiten",
      subtitle: "Schneller Verkauf, transparente Bewertung in 24-48h.",
      features: "Null Provision • Keine Reparaturen erforderlich",
      ctaPrimary: "Kostenlose Bewertung Jetzt",
      ctaSecondary: "Sehen Sie Wie Es Funktioniert",
      trustIndicators: [
        "24-48h Garantiertes Angebot",
        "Keine Provision",
        "Ankauf im Ist-Zustand"
      ],
      scrollText: "Entdecken"
    },
    map: {
      badge: "Landesweite Präsenz",
      title: "Unsere Präsenz in Belgien",
      subtitle: "Service in ganz Belgien mit lokaler Expertise verfügbar",
      stats: {
        coverage: "Nationale Abdeckung",
        coverageText: "Alle Provinzen bedient",
        deals: "Verkaufte Immobilien",
        dealsText: "In ganz Belgien",
        response: "Durchschn. Reaktionszeit",
        responseText: "Erstes Angebot geliefert",
        satisfaction: "Kundenzufriedenheit",
        satisfactionText: "5-Sterne-Bewertungen"
      },
      floatingBadge: "Kunden landesweit bedienen seit 2018",
      footerText: "Unser Expertenteam operiert in allen belgischen Provinzen mit lokaler Marktkenntn is. Von Brüssel bis Antwerpen, Lüttich bis Gent - wir sind hier, um Ihnen zu helfen, den Wert Ihrer Immobilie freizusetzen.",
      testimonials: {
        brussels: {
          region: "Brüssel",
          quote: "Schnelle Reaktion und exzellenter Service!",
          author: "Marie D."
        },
        antwerp: {
          region: "Antwerpen",
          quote: "Professionelles Team, fairer Preis erhalten.",
          author: "Johan V."
        },
        liege: {
          region: "Lüttich",
          quote: "Immobilie in Rekordzeit verkauft!",
          author: "Sophie L."
        },
        ghent: {
          region: "Gent",
          quote: "Vertrauenswürdiger und transparenter Prozess.",
          author: "Lucas M."
        }
      }
    },
    stats: {
      title: "Unsere Ergebnisse Sprechen Für Sich",
      subtitle: "Zahlen, die unser Engagement für Exzellenz demonstrieren",
      items: [
        {
          value: 500,
          suffix: "+",
          label: "Zufriedene Eigentümer",
          description: "Haben SwitchInvest für schnellen Verkauf gewählt"
        },
        {
          value: 24,
          suffix: "h",
          label: "Bewertungszeit",
          description: "Transparentes Angebot in weniger als 48 Stunden"
        },
        {
          value: 98,
          suffix: "%",
          label: "Zufriedenheitsrate",
          description: "Unserer Kunden empfehlen unsere Dienstleistungen"
        },
        {
          value: 0,
          suffix: "€",
          label: "Versteckte Kosten",
          description: "Völlige Transparenz, keine Überraschungen"
        }
      ],
      ctaText: "Schließen Sie sich Hunderten zufriedener Eigentümer an",
      ctaButton: "Jetzt Starten"
    },
    testimonials: {
      title: "Was Unsere Kunden Sagen",
      subtitle: "Authentische Erfahrungsberichte zufriedener Eigentümer",
      pressTitle: "Gesehen in den Medien",
      items: [
        {
          name: "Marie Dubois",
          location: "Brüssel",
          role: "Eigentümerin",
          quote: "SwitchInvest verwandelte eine stressige Situation in eine reibungslose Erfahrung. Ihr Team behandelte jedes Detail mit Professionalität und wir erhielten unsere Zahlung in weniger als zwei Wochen.",
          rating: 5,
          image: "/testimonials/marie.jpg",
          date: "Januar 2025"
        },
        {
          name: "Luc Vermeulen",
          location: "Antwerpen",
          role: "Investor",
          quote: "Ihre Expertise im belgischen Markt ist außergewöhnlich. Sie identifizierten Investitionsmöglichkeiten, die ich alleine nie gefunden hätte. Die Renditen übertrafen meine Erwartungen.",
          rating: 5,
          image: "/testimonials/luc.jpg",
          date: "Dezember 2024"
        },
        {
          name: "Sophie Laurent",
          location: "Lüttich",
          role: "Eigentümerin",
          quote: "Ich hatte eine Immobilie geerbt, die große Reparaturen benötigte. SwitchInvest kaufte sie im Ist-Zustand zu einem fairen Preis. Einfacher und schneller Prozess von Anfang bis Ende.",
          rating: 5,
          image: "/testimonials/sophie.jpg",
          date: "November 2024"
        },
        {
          name: "Ahmed Benali",
          location: "Gent",
          role: "Unternehmer",
          quote: "Dank SwitchInvest konnte ich meine Immobilie schnell verkaufen, um mein Geschäft zu finanzieren. Der Service war professionell, transparent und stressfrei. Ich empfehle sie sehr!",
          rating: 5,
          image: "/testimonials/ahmed.jpg",
          date: "Oktober 2024"
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
      title: "Ihr Vertrauen, Unsere Priorität",
      subtitle: "Maximale Sicherheit und völlige Transparenz in jedem Schritt",
      items: [
        {
          title: "DSGVO-Konform",
          description: "Vollständiger Schutz Ihrer persönlichen Daten nach europäischen Standards"
        },
        {
          title: "AES-256 Verschlüsselung",
          description: "Banksicherheit für alle Ihre Transaktionen und Kommunikationen"
        },
        {
          title: "ISO 27001 Zertifiziert",
          description: "Internationale Standards für Informationssicherheitsmanagement"
        },
        {
          title: "IPI Mitglied",
          description: "Akkreditiertes Professionelles Institut der Immobilienmakler"
        },
        {
          title: "100% Transparent",
          description: "Keine versteckten Kosten, klarer und nachvollziehbarer Prozess in jedem Schritt"
        },
        {
          title: "Nationale Präsenz",
          description: "Service in ganz Belgien verfügbar - Flandern, Brüssel, Wallonien"
        }
      ],
      bottomText: "Begleitet von",
      bottomTextSuffix: "Eigentümern in völliger Sicherheit",
      certificationsText: "Zertifizierungen & Partner"
    },
    faq: {
      title: "Häufig Gestellte Fragen",
      subtitle: "Sie haben Fragen zum schnellen Verkauf Ihres Hauses oder unseren Dienstleistungen? Finden Sie hier die Antworten.",
      stillHaveQuestions: "Können Sie die Antwort auf Ihre Frage nicht finden?",
      contactButton: "Kontaktieren Sie uns"
    },
    newsletter: {
      title: "Bleiben Sie Über Unsere Möglichkeiten Informiert",
      subtitle: "Erhalten Sie exklusive Marktanalysen, Investitionsmöglichkeiten und Expertenrat",
      placeholder: "ihre@email.com",
      button: "Abonnieren",
      privacy: "🔒 Ihre Daten sind geschützt. Jederzeit abmelden möglich."
    },
    blog: {
      badge: "Leitfäden & Ressourcen",
      title: "Bleiben Sie Über den Immobilienmarkt Informiert",
      subtitle: "Expertenanalysen, praktische Leitfäden und belgische Markttrends",
      readMore: "Artikel Lesen",
      viewAll: "Alle Artikel Anzeigen",
      pageTitle: "Blog & Immobiliennachrichten",
      pageDescription: "Expertenrat, Marktanalysen und praktische Leitfäden für Ihren Erfolg bei Immobilienprojekten in Belgien",
      readArticle: "Weiterlesen",
      newsletterTitle: "Bleiben Sie Über die Neuesten Immobiliennachrichten Informiert",
      newsletterDescription: "Erhalten Sie unsere Marktanalysen, Expertenrat und Investitionsmöglichkeiten direkt in Ihr Postfach.",
      newsletterButton: "Newsletter Abonnieren",
      categories: {
        all: "Alle"
      }
    }
  },

  common: {
    home: "Startseite",
    close: "Schließen",
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
      title: "Schneller Ankauf",
      description: "Erhalten Sie innerhalb von 24–48 Stunden ein transparentes Angebot und schließen Sie schon nach 7 Tagen ab—ohne Makler, ohne versteckte Gebühren.",
      features: [
        "Angebot in 24–48 Stunden",
        "Wählen Sie Ihr Abschlussdatum (7–30 Tage)",
        "Kauf im Ist-Zustand—keine Inszenierung oder Inspektionen",
        "Keine versteckten Gebühren"
      ],
      hero: {
        title: "Schnelle Ankaufslösungen",
        subtitle: "Schnell, Fair, Stressfrei",
        description: "Erhalten Sie innerhalb von 24–48 Stunden ein transparentes Angebot und schließen Sie in nur 7 Tagen ab. Wir kaufen Ihre Immobilie im Ist-Zustand, übernehmen alle Formalitäten und zahlen bar aus—ohne Makler, ohne versteckte Gebühren.",
        cta: "Holen Sie Sich Ihr Kostenloses Angebot",
        benefits: [
          "Transparente Angebote innerhalb von 24-48 Stunden",
          "Abschluss in nur 7 Tagen",
          "Wir kaufen Immobilien im Ist-Zustand",
          "Keine versteckten Gebühren oder Provisionen",
          "Alle rechtlichen Formalitäten erledigt",
          "Flexible Abschlusstermine"
        ]
      },
      process: {
        title: "So Funktioniert Unser Schneller Ankaufsprozess",
        subtitle: "Vom Erstkontakt bis zum Bargeld in der Hand in 4 einfachen Schritten",
        steps: [
          {
            title: "Immobiliendetails Einreichen",
            description: "Füllen Sie unser kurzes Online-Formular aus oder rufen Sie uns an mit Ihren Immobilieninfos—Adresse, Typ, Größe und aktueller Zustand."
          },
          {
            title: "Ihr Angebot Erhalten",
            description: "Erhalten Sie ein transparentes, unverbindliches Angebot innerhalb von 24–48 Stunden basierend auf aktuellen Marktdaten und unserer Renovierungsbewertung."
          },
          {
            title: "Akzeptieren & Terminieren",
            description: "Wählen Sie Ihren bevorzugten Abschlusstermin zwischen 7–30 Tagen. Wir übernehmen alle rechtlichen Dokumente und Notarkoordination."
          },
          {
            title: "Abschließen & Bezahlt Werden",
            description: "Unterschreiben Sie die Dokumente, übertragen Sie das Eigentum und erhalten Sie Ihre Zahlung. Wir kümmern uns danach um die Immobilie."
          },
          {
            title: "Wir Renovieren",
            description: "Nach dem Abschluss verwalten wir alle Renovierungen und Verbesserungen, um den Wert und die Attraktivität der Immobilie zu maximieren."
          }
        ]
      },
      pricing: {
        title: "Transparente Preise",
        subtitle: "Wählen Sie das Servicepaket, das am besten zu Ihnen passt",
        toggle: {
          monthly: "Monatlich",
          yearly: "Jährlich",
          savePercent: "15% Sparen"
        },
        plans: [
          {
            name: "Schnellverkauf",
            description: "Perfekt für Immobilienbesitzer, die schnell verkaufen müssen",
            price: "Kostenlos",
            period: "Beratung",
            features: [
              "24-48 Stunden Angebotsgarantie",
              "Ankauf im Ist-Zustand (keine Reparaturen erforderlich)",
              "Abschluss in 7-30 Tagen",
              "Alle rechtlichen Gebühren gedeckt",
              "Keine Maklerprovisionen",
              "Flexibler Abschlusstermin",
              "Direkte Banküberweisung"
            ],
            cta: "Holen Sie Sich Ihr Angebot",
            popular: false
          },
          {
            name: "Premium-Service",
            description: "Vollservice-Unterstützung mit maximalem Komfort",
            price: "Kostenlos",
            period: "Beratung",
            features: [
              "Alles vom Schnellverkauf",
              "Immobilien-Staging-Beratung",
              "Professionelle Fotografie",
              "Beschleunigter Abschluss (so schnell wie 7 Tage)",
              "Umzugshilfe-Koordination",
              "Lagerungslösungen-Empfehlungen",
              "Unterstützung nach dem Verkauf"
            ],
            cta: "Jetzt Starten",
            popular: true
          },
          {
            name: "Investitionspartnerschaft",
            description: "Für Eigentümer, die an laufenden Investitionsmöglichkeiten interessiert sind",
            price: "Individuell",
            period: "Partnerschaft",
            features: [
              "Alles vom Premium",
              "Erster Zugang zu Investment-Deals",
              "Portfolio-Diversifizierungsoptionen",
              "Vierteljährliche Markteinblicke",
              "Strategische Beratungsdienste",
              "Steueroptimierungsberatung",
              "Dedizierter Account-Manager"
            ],
            cta: "Kontaktieren Sie Uns",
            popular: false
          }
        ],
        trustBadges: [
          "Lizenzierter Immobilienmakler",
          "BBB A+ Bewertung",
          "10+ Jahre Erfahrung",
          "500+ Gekaufte Immobilien"
        ]
      },
      beforeAfter: {
        title: "Unsere Transformationsergebnisse",
        subtitle: "Sehen Sie, wie wir Immobilien nach dem Kauf transformieren",
        before: "Vor dem Kauf",
        after: "Nach der Renovierung"
      },
      caseStudies: {
        title: "Erfolgsgeschichten",
        subtitle: "Echte Ergebnisse von Immobilienbesitzern, die unseren schnellen Ankaufsservice gewählt haben",
        items: [
          {
            name: "Marie D.",
            location: "Brüssel",
            category: "Altersverkauf",
            challenge: "Nach dem Tod ihres Mannes musste Marie schnell verkleinern, aber ihre Immobilie benötigte erhebliche Reparaturen, die sie sich nicht leisten konnte.",
            solution: "Wir kauften ihre Immobilie innerhalb von 2 Wochen im Ist-Zustand, sodass sie in eine kleinere Wohnung in der Nähe ihrer Tochter umziehen konnte, ohne Renovierungskosten.",
            results: [
              {
                label: "Abschlusszeit",
                value: "14 Tage"
              },
              {
                label: "Vermiedene Reparaturen",
                value: "€45.000"
              },
              {
                label: "Erhaltenes Bargeld",
                value: "€285.000"
              }
            ],
            testimonial: "Switch Invest hat eine schwierige Zeit so viel einfacher gemacht. Der Prozess war transparent und stressfrei."
          },
          {
            name: "Luc & Sophie V.",
            location: "Antwerpen",
            category: "Geerbte Immobilie",
            challenge: "Das Paar erbte eine Immobilie von einem Verwandten, lebte aber im Ausland und konnte Renovierungen oder einen traditionellen Verkauf nicht verwalten.",
            solution: "Wir erledigten alles aus der Ferne—von der Bewertung bis zum Abschluss—und kauften die Immobilie im Ist-Zustand, mit einem fairen Angebot innerhalb von 48 Stunden.",
            results: [
              {
                label: "Angebotszeit",
                value: "48 Stunden"
              },
              {
                label: "Fernprozess",
                value: "100%"
              },
              {
                label: "Erhaltenes Bargeld",
                value: "€195.000"
              }
            ],
            testimonial: "Wir mussten nie nach Belgien reisen. Alles wurde professionell und schnell erledigt."
          },
          {
            name: "Ahmed K.",
            location: "Gent",
            category: "Geschäftsfinanzierung",
            challenge: "Ahmed benötigte schnell Kapital, um eine Geschäftsmöglichkeit zu finanzieren, konnte aber nicht auf einen traditionellen Verkaufsprozess warten.",
            solution: "Wir machten innerhalb von 24 Stunden ein wettbewerbsfähiges Angebot und schlossen in 10 Tagen ab, wodurch er das Kapital erhielt, das er für sein Startup benötigte.",
            results: [
              {
                label: "Angebotsgeschwindigkeit",
                value: "24 Stunden"
              },
              {
                label: "Tage bis Abschluss",
                value: "10 Tage"
              },
              {
                label: "Erhaltenes Bargeld",
                value: "€320.000"
              }
            ],
            testimonial: "Der schnelle Verkauf ermöglichte es mir, eine unglaubliche Geschäftsmöglichkeit zu ergreifen. Sehr zu empfehlen!"
          }
        ]
      },
      faqs: {
        title: "Häufig Gestellte Fragen",
        subtitle: "Alles, was Sie über unseren schnellen Ankaufsservice wissen müssen",
        searchPlaceholder: "Fragen suchen...",
        stillHaveQuestions: "Noch Fragen?",
        contactUs: "Kontaktieren Sie unser Team für personalisierte Antworten",
        items: [
          {
            question: "Wie schnell können Sie ein Angebot machen?",
            answer: "Wir machen in der Regel innerhalb von 24-48 Stunden nach Erhalt Ihrer Immobiliendetails ein transparentes, unverbindliches Angebot. In dringenden Situationen können wir dies auf Angebote am selben Tag beschleunigen."
          },
          {
            question: "Erheben Sie Gebühren oder Provisionen?",
            answer: "Nein. Im Gegensatz zu traditionellen Immobilienverkäufen gibt es keine Maklerprovisionen, Abschlusskosten oder versteckte Gebühren. Das Angebot, das wir präsentieren, ist der Betrag, den Sie erhalten."
          },
          {
            question: "Welche Arten von Immobilien kaufen Sie?",
            answer: "Wir kaufen alle Arten von Wohnimmobilien, einschließlich Wohnungen, Häuser, Studios, Grundstücke und sogar Teileigentum oder gemeinsam geerbte Immobilien in jedem Zustand."
          },
          {
            question: "Was ist, wenn meine Immobilie größere Reparaturen benötigt?",
            answer: "Das ist unsere Spezialität! Wir kaufen Immobilien im Ist-Zustand, unabhängig vom Zustand. Ob es kleine kosmetische Arbeiten oder größere strukturelle Reparaturen benötigt, Sie müssen keinen Cent für Renovierungen ausgeben."
          },
          {
            question: "Wie bestimmen Sie Ihren Angebotspreis?",
            answer: "Unsere Angebote basieren auf aktuellen Marktdaten, Standortanalyse, Immobilienzustandsbewertung und geschätzten Renovierungskosten. Wir liefern eine detaillierte Aufschlüsselung, damit Sie genau sehen können, wie wir zur Zahl gekommen sind."
          },
          {
            question: "Kann ich meinen Abschlusstermin wählen?",
            answer: "Absolut! Wir bieten flexible Abschlusstermine von so schnell wie 7 Tagen bis zu 30 Tagen, je nachdem, was am besten für Ihre Situation funktioniert."
          },
          {
            question: "Was passiert mit der Immobilie, nachdem Sie sie gekauft haben?",
            answer: "Wir investieren in umfassende Renovierungen, einschließlich struktureller Reparaturen, Modernisierung und umweltfreundlicher Upgrades. Unser Ziel ist es, die Immobilie in ein schönes, modernes Zuhause für neue Familien zu verwandeln."
          },
          {
            question: "Gibt es eine Verpflichtung, nachdem ich ein Angebot erhalten habe?",
            answer: "Absolut keine. Unsere Angebote sind völlig unverbindlich. Nehmen Sie sich Zeit zur Prüfung, vergleichen Sie mit anderen Optionen und treffen Sie die Entscheidung, die für Sie am besten ist."
          }
        ]
      }
    },
    investment: {
      title: "Strategische Immobilieninvestition",
      description: "Nutzen Sie unsere lokale Expertise und Marktdaten, um renditestarke Chancen zu identifizieren und Ihr Portfolio zu optimieren.",
      features: [
        "Tiefgehende Marktanalyse",
        "Risikoadjustierte Investitionsstrategien",
        "Optimierung der Portfolioleistung",
        "Fokus auf langfristiges Wachstum"
      ],
      hero: {
        title: "Strategische Immobilieninvestition",
        subtitle: "Datengesteuerte Investitionsstrategien für Maximale Renditen",
        description: "Erschließen Sie außergewöhnliche Investitionsmöglichkeiten auf dem belgischen Immobilienmarkt mit unserer tiefgreifenden lokalen Expertise, rigorosen Marktanalyse und bewährten Strategien. Wir begleiten Sie durch jede Phase—von Akquisition und Wertschöpfung bis zum optimalen Ausstieg—mit vollständiger Transparenz und personalisierter Unterstützung.",
        cta: "Investitionsmöglichkeiten Entdecken",
        benefits: [
          "Exklusiver Zugang zu Off-Market-Deals",
          "Umfassende Due Diligence und Risikoanalyse",
          "Portfolio-Diversifizierung über Sektoren",
          "Aktive Wertschöpfung und Renovierungsstrategien",
          "Transparente Leistungsberichterstattung",
          "Strategische Ausstiegsplanung und -umsetzung"
        ]
      },
      process: {
        title: "Unser Investitionsprozess",
        subtitle: "Von Akquisition bis Ausstieg—ein strukturierter Ansatz für maximale Renditen",
        steps: [
          {
            title: "Entdeckung & Strategie",
            description: "Wir beginnen damit, Ihre Investitionsziele, Risikotoleranz und Zeithorizont zu verstehen. Unser Team entwickelt einen maßgeschneiderten Investitionsansatz, der auf Ihre Ziele abgestimmt ist."
          },
          {
            title: "Marktchancen Identifizieren",
            description: "Nutzung eigener Marktdaten, Off-Market-Netzwerke und vorausschauender Analysen, um Value-Investment-Möglichkeiten in Hochpotenzialgebieten zu identifizieren."
          },
          {
            title: "Due Diligence & Akquisition",
            description: "Umfassende finanzielle, rechtliche und technische Analyse zur Quantifizierung von Risiken. Wir leiten Verhandlungen und Abschluss, um günstige Bedingungen zu gewährleisten."
          },
          {
            title: "Wertschöpfung",
            description: "Implementierung aktiver Strategien—Renovierungen, Neupositionierung, Mietoptimierung—um Leistung zu verbessern und Vermögenswert zu steigern."
          },
          {
            title: "Asset Management & Monitoring",
            description: "Laufende Überwachung mit vierteljährlichen Leistungsupdates, Finanzberichterstattung und proaktivem Management zur Aufrechterhaltung nachhaltiger Renditen."
          },
          {
            title: "Strategischer Ausstieg",
            description: "Timing von Marktchancen und Ausführung von Ausstiegsstrategien zur Gewinnmaximierung—durch Verkauf, Refinanzierung oder Portfolio-Rebalancierung."
          }
        ]
      },
      pricing: {
        title: "Investitionsberatungspakete",
        subtitle: "Wählen Sie das Betreuungsniveau und die Unterstützung, die zu Ihrem Investitionsansatz passen",
        toggle: {
          monthly: "Monatlich",
          yearly: "Jährlich",
          savePercent: "20% Sparen"
        },
        plans: [
          {
            name: "Basis-Beratung",
            description: "Ideal für erfahrene Investoren, die Einblicke und Analysen suchen",
            price: "€2.500",
            period: "/Monat",
            features: [
              "Vierteljährliche Markteinblick-Berichte",
              "Zugang zu Off-Market-Investitionslisten",
              "Jährliche Portfolio-Bewertung",
              "E-Mail-Support (Antwort innerhalb von 48 Stunden)",
              "Einladungen zu exklusiven Investment-Events",
              "Basis-Dashboard für Leistungsverfolgung"
            ],
            cta: "Basis Starten",
            popular: false
          },
          {
            name: "Premium-Partnerschaft",
            description: "Full-Service für aktive Investoren, die Wachstum anstreben",
            price: "€7.500",
            period: "/Monat",
            features: [
              "Alles von Basis",
              "Dedizierter Investitionsberater",
              "Monatliche Strategie-Reviews",
              "Prioritätszugang zu neuen Akquisitionen",
              "Hands-on Akquisitionsunterstützung",
              "Umfassende Due-Diligence-Berichte",
              "Fortgeschrittene Finanzmodellierung",
              "Unbegrenzte Beratungszeit"
            ],
            cta: "Premium-Partner Werden",
            popular: true
          },
          {
            name: "Institutionell",
            description: "Maßgeschneidert für institutionelle Investoren und Family Offices",
            price: "Individuell",
            period: "Kontakt für Preise",
            features: [
              "Alles von Premium",
              "Multi-Asset-Portfolio-Management",
              "Co-Investment-Möglichkeiten",
              "Personalisierte Investitionsstrukturen",
              "Steueroptimierungsplanung",
              "Multi-Jurisdiktions-Unterstützung",
              "White-Label-Berichterstattung",
              "Senior Executive Team Zugang"
            ],
            cta: "Kontaktieren Sie Uns",
            popular: false
          }
        ],
        trustBadges: [
          "€150M+ Verwaltetes Vermögen",
          "12+ Jahre Track Record",
          "200+ Abgeschlossene Deals",
          "18% Durchschnittliche Jährliche Rendite"
        ]
      },
      caseStudies: {
        title: "Investitionserfolge",
        subtitle: "Real-World-Ergebnisse für unsere Investitionspartner erzielt",
        items: [
          {
            name: "Luxus-Wohnportfolio",
            location: "Brüssel & Antwerpen",
            category: "Mehrfamilien-Wohnimmobilien",
            challenge: "Ein internationales Family Office suchte Engagement im belgischen Luxus-Wohnimmobilienmarkt mit stabilem Einkommen und Wertsteigerung.",
            solution: "Wir haben ein diversifiziertes Portfolio von 8 Premium-Wohnungen in Top-Lagen zusammengestellt, mit gezielten Renovierungen durchgeführt, um Mietprämien zu rechtfertigen und hochwertige Mieter anzuziehen.",
            results: [
              {
                label: "Gesamtinvestition",
                value: "€4,8 Mio."
              },
              {
                label: "Jährliche Nettorendite",
                value: "6,2%"
              },
              {
                label: "Wertsteigerung (3 Jahre)",
                value: "+22%"
              }
            ],
            testimonial: "SwitchInvests gründliche lokale Einblicke und aktives Management übertrafen unsere Erwartungen. Das Portfolio liefert durchgängig sowohl Einkommen als auch Wertsteigerung."
          },
          {
            name: "Gewerbliche Büro-Neupositionierung",
            location: "Louise-Viertel, Brüssel",
            category: "Gewerbeimmobilie Büro",
            challenge: "Unterperformantes Klasse-B-Bürogebäude in Prime-Lage mit hoher Leerstandsquote und veralteten Einrichtungen.",
            solution: "Vollständige Renovierung mit modernen Oberflächen, intelligenter Gebäudetechnologie und Nachhaltigkeitszertifizierung (BREEAM) durchgeführt. Als Class-A-Workspace neu positioniert und Tech-Mieter angezogen.",
            results: [
              {
                label: "Akquisitionspreis",
                value: "€6,2 Mio."
              },
              {
                label: "Exit-Wert (4 Jahre)",
                value: "€9,5 Mio."
              },
              {
                label: "IRR",
                value: "18,3%"
              }
            ],
            testimonial: "Das Team identifizierte eine verborgene Chance und führte eine meisterhafte Transformation durch. Der Ausstieg lieferte substanzielle Gewinne innerhalb unseres geplanten Zeitrahmens."
          }
        ]
      },
      faqs: {
        title: "Häufig Gestellte Fragen",
        subtitle: "Alles, was Sie über Investitionen mit SwitchInvest wissen müssen",
        searchPlaceholder: "Fragen suchen...",
        stillHaveQuestions: "Noch Fragen?",
        contactUs: "Kontaktieren Sie unser Investitionsteam für detaillierte Antworten",
        items: [
          {
            question: "Was ist die Mindestinvestitionsgröße?",
            answer: "Für direkte Co-Investments beträgt unser Minimum in der Regel €500.000. Für unsere Beratungsdienste ist keine Mindest-Portfoliogröße erforderlich, aber wir empfehlen €1M+, um Skalenvorteile zu nutzen."
          },
          {
            question: "Auf welche Sektoren konzentrieren Sie sich?",
            answer: "Wir spezialisieren uns auf belgische Wohnimmobilien (Luxus und Mid-Market), gewerbliche Büros, Mixed-Use-Entwicklungen und ausgewählte Logistik-Assets. Unser Fokus liegt auf Kernstandorten mit nachweisbarer Nachfrage und Wertschöpfungspotenzial."
          },
          {
            question: "Wie finden und prüfen Sie Deals?",
            answer: "Wir nutzen umfangreiche lokale Netzwerke, Off-Market-Beziehungen, eigene Datenanalysen und vorausschauende Marktforschung. Jede Chance durchläuft rigorose finanzielle, rechtliche und technische Due Diligence, bevor wir sie Kunden präsentieren."
          },
          {
            question: "Was sind typische Haltedauern und Renditen?",
            answer: "Haltedauern variieren je nach Strategie von 3-7 Jahren. Historisch hat unser Portfolio eine durchschnittliche jährliche Bruttorendite von 18% geliefert, mit Variation nach Asset-Klasse und Marktbedingungen."
          },
          {
            question: "Wie stark muss ich involviert sein?",
            answer: "Das wählen Sie! Einige Kunden bevorzugen einen Hands-off-Ansatz mit vierteljährlichen Updates, während andere aktiv an größeren Entscheidungen teilnehmen. Wir passen uns Ihrem bevorzugten Beteiligungsniveau an."
          },
          {
            question: "Welche Gebühren erheben Sie?",
            answer: "Unsere Beratungsgebühren sind transparent: monatlicher Retainer (siehe Pakete oben) oder erfolgsbasierte Gebühren bei Co-Investments (in der Regel 20% der Gewinne über einer vorab festgelegten Schwelle). Alle Gebühren werden vor jeder Transaktion vollständig offengelegt."
          }
        ]
      }
    },
    development: {
      title: "Schlüsselfertige Renovierungen",
      description: "Wir managen alle Renovierungen von Anfang bis Ende—maximieren den Wert Ihrer Immobilie und minimieren Ihren Stress.",
      features: [
        "Vollständiges Projektmanagement",
        "Qualitätsorientierte Ausführung",
        "Kosteneffektive Modernisierungen",
        "Nahtlose Koordination"
      ],
      hero: {
        title: "Schlüsselfertige Immobilienentwicklung",
        subtitle: "Vom Konzept bis zur Übergabe—Vollständig Verwaltet",
        description: "Wir übernehmen Ihr Renovierungs- oder Entwicklungsprojekt von Anfang bis Ende. Mit unserem erfahrenen Team von Architekten, Ingenieuren und Handwerkern verwandeln wir veraltete Immobilien in moderne, hochwertige Räume—termingerecht und im Budget.",
        cta: "Planen Sie Ihre Renovierung",
        benefits: [
          "Vollständiges Projektmanagement—wir kümmern uns um alles",
          "Interne Architekten und Designer",
          "Termingerechte Lieferung garantiert",
          "Transparente Budgetierung ohne versteckte Kosten",
          "Qualitätshandwerker mit nachgewiesener Erfolgsbilanz",
          "Moderne, energieeffiziente Designs"
        ]
      },
      process: {
        title: "Unser Entwicklungsprozess",
        subtitle: "Ein bewährter Ansatz für erfolgreiche Renovierungen und Entwicklungen",
        steps: [
          {
            title: "Beratung & Konzept",
            description: "Wir bewerten Ihre Immobilie, besprechen Ihre Vision und erstellen ein detailliertes Konzept, das Ihren Zielen und Ihrem Budget entspricht."
          },
          {
            title: "Design & Genehmigungen",
            description: "Unsere Architekten erstellen detaillierte Pläne, und wir kümmern uns um alle Baugenehmigungen und behördlichen Genehmigungen."
          },
          {
            title: "Budgetierung & Zeitplan",
            description: "Wir liefern eine transparente Kostenschätzung und einen realistischen Zeitplan mit klaren Meilensteinen und Zahlungsplänen."
          },
          {
            title: "Bau & Management",
            description: "Unser Team managt alle Bauarbeiten, koordiniert Auftragnehmer und hält Sie mit regelmäßigen Updates auf dem Laufenden."
          },
          {
            title: "Qualitätskontrolle",
            description: "Wir führen strenge Qualitätsprüfungen in jeder Phase durch, um sicherzustellen, dass alle Arbeiten unseren hohen Standards entsprechen."
          },
          {
            title: "Übergabe & Nachbetreuung",
            description: "Nach Abschluss führen wir Sie durch Ihre renovierte Immobilie und bieten fortlaufende Unterstützung und Garantien."
          }
        ]
      },
      pricing: {
        title: "Entwicklungspakete",
        subtitle: "Flexible Lösungen für jedes Immobilienprojekt",
        toggle: {
          monthly: "Kleines Projekt",
          yearly: "Großes Projekt",
          savePercent: ""
        },
        plans: [
          {
            name: "Basisrenovierung",
            description: "Ideal für kosmetische Updates und kleinere Verbesserungen",
            price: "€50.000",
            period: "Startpreis",
            features: [
              "Malerarbeiten & Bodenbeläge",
              "Küchen- und Bad-Updates",
              "Elektrische & Sanitär-Fixes",
              "Kleinere strukturelle Reparaturen",
              "Grundlegendes Projektmanagement",
              "3-monatige Zeitrahmen",
              "1 Jahr Garantie"
            ],
            cta: "Projekt Starten",
            popular: false
          },
          {
            name: "Vollständige Transformation",
            description: "Umfassende Renovierung für maximale Wertsteigerung",
            price: "€150.000",
            period: "Startpreis",
            features: [
              "Alle Funktionen der Basisrenovierung",
              "Strukturelle Änderungen & Erweiterungen",
              "Komplette Küchen- und Bad-Neugestaltung",
              "Maßgeschneiderte Tischlerei",
              "Landschaftsgestaltung & Außenarbeiten",
              "Energieeffizienz-Upgrades",
              "Dedizierter Projektmanager",
              "6-monatige Zeitrahmen",
              "2 Jahre Garantie"
            ],
            cta: "Transformation Planen",
            popular: true
          },
          {
            name: "Grundstücksentwicklung",
            description: "Großangelegte Entwicklungsprojekte vom Grundstück aufwärts",
            price: "Individuell",
            period: "",
            features: [
              "Alle Funktionen der Vollständigen Transformation",
              "Architektonisches Design von Grund auf",
              "Komplette Strukturerstellung",
              "Mehrere Einheiten/Gebäude",
              "Kommerzielle Entwicklung",
              "Investitionsstrukturierung",
              "Behördliche Compliance & Rechtsberatung",
              "Individueller Zeitrahmen",
              "5 Jahre Garantie"
            ],
            cta: "Entwicklung Besprechen",
            popular: false
          }
        ],
        trustBadges: [
          "100+ Projekte Abgeschlossen",
          "Termingerechte Lieferung Garantiert",
          "Qualitätsgarantien"
        ]
      },
      projectTypes: {
        title: "Unsere Entwicklungsspezialitäten",
        subtitle: "Vom Wohnbereich bis zum Gewerbe handhaben wir alle Immobilienarten",
        types: [
          {
            name: "Wohnrenovierungen",
            description: "Häuser, Wohnungen und Villen—wir verwandeln veraltete Wohnräume in moderne Häuser.",
            icon: "home"
          },
          {
            name: "Mehrfamilienhäuser",
            description: "Vollständige Renovierung von Mehrfamilienhäusern zur Maximierung des Mietwerts und der Mieterattraktivität.",
            icon: "building"
          },
          {
            name: "Gewerbeflächen",
            description: "Büros, Einzelhandel und gemischte Nutzung—wir schaffen funktionale, attraktive Geschäftsräume.",
            icon: "briefcase"
          },
          {
            name: "Historische Restaurierung",
            description: "Erfahrung in denkmalgeschützten Gebäuden—Bewahrung des Charakters bei Modernisierung der Funktionalität.",
            icon: "landmark"
          }
        ]
      },
      caseStudies: {
        title: "Entwicklungserfolge",
        subtitle: "Sehen Sie, wie wir Immobilien von gewöhnlich zu außergewöhnlich verwandeln",
        items: [
          {
            name: "Grand-Place Gemischtnutzung",
            location: "Brüssel",
            category: "Gewerbliche Renovierung",
            challenge: "Ein vernachlässigtes historisches Gebäude im Herzen von Brüssel benötigte eine vollständige Transformation bei Einhaltung strenger Denkmalschutzauflagen.",
            solution: "Wir arbeiteten eng mit Denkmalschutzbehörden zusammen, um ein sensibles Renovierungsdesign zu erstellen, das die historische Fassade bewahrte, während moderne Büros und Einzelhandelsflächen im Inneren geschaffen wurden.",
            results: [
              { label: "Renovierungsbudget", value: "€2,2 Mio." },
              { label: "Zeitrahmen", value: "14 Monate" },
              { label: "Wertsteigerung", value: "+65%" },
              { label: "Vermietungsrate", value: "100% bei Fertigstellung" }
            ],
            testimonial: "Switch Invest hat unser komplexes historisches Renovierungsprojekt mit Professionalität und Respekt vor dem Erbe des Gebäudes gemeistert. Das Ergebnis übertraf unsere Erwartungen."
          },
          {
            name: "Moderne Villa Uccle",
            location: "Uccle, Brüssel",
            category: "Luxuswohnrenovierung",
            challenge: "Eine veraltete Villa aus den 1970er Jahren benötigte eine komplette Modernisierung, um auf dem Luxuswohnungsmarkt wettbewerbsfähig zu sein.",
            solution: "Vollständige Neugestaltung mit offenem Grundriss, bodendeckenden Fenstern, Smart-Home-Integration und nachhaltigen Materialien—alles bei Erhalt der Grundstruktur.",
            results: [
              { label: "Renovierungsbudget", value: "€450.000" },
              { label: "Zeitrahmen", value: "8 Monate" },
              { label: "Wertsteigerung", value: "+55%" },
              { label: "Energiebewertung", value: "A+" }
            ],
            testimonial: "Von der ersten Skizze bis zur letzten Berührung zeigte Switch Invest außergewöhnliche Handwerkskunst und Liebe zum Detail. Unsere Villa ist nun ein zeitgenössisches Meisterwerk."
          }
        ]
      },
      faqs: {
        title: "Häufig Gestellte Fragen",
        subtitle: "Antworten auf häufige Fragen zu unseren Entwicklungsdienstleistungen",
        searchPlaceholder: "FAQ durchsuchen...",
        stillHaveQuestions: "Noch Fragen?",
        contactUs: "Kontaktieren Sie unser Entwicklungsteam",
        items: [
          {
            question: "Wie lange dauert ein typisches Renovierungsprojekt?",
            answer: "Die Zeitrahmen variieren je nach Projektumfang. Kleinere Renovierungen (Malerei, Böden, Küchen-Updates) dauern in der Regel 2-4 Monate. Umfassende Transformationen mit strukturellen Änderungen dauern 6-9 Monate. Große Entwicklungen können 12-18+ Monate dauern. Wir liefern einen detaillierten Zeitplan während der Planungsphase und halten Sie mit regelmäßigen Updates auf dem Laufenden."
          },
          {
            question: "Kümmern Sie sich um Baugenehmigungen und Genehmigungen?",
            answer: "Ja, absolut. Wir verwalten den gesamten Genehmigungsprozess, einschließlich Baugenehmigungen, Denkmalschutzgenehmigungen (falls erforderlich), Umweltgutachten und allen anderen behördlichen Anforderungen. Unser Team hat umfangreiche Erfahrung in der Navigation des belgischen Regulierungssystems und pflegt gute Beziehungen zu lokalen Behörden."
          },
          {
            question: "Kann ich während der Renovierung in meiner Immobilie wohnen?",
            answer: "Das hängt vom Umfang des Projekts ab. Für kleinere Renovierungen ist es oft möglich, mit einigen Unannehmlichkeiten in der Immobilie zu bleiben. Bei umfangreichen Renovierungen, die Sanitär-, Elektro- oder Strukturarbeiten umfassen, empfehlen wir normalerweise, alternative Unterkünfte zu finden, um Sicherheit und Effizienz zu gewährleisten. Wir besprechen dies während der Planungsphase."
          },
          {
            question: "Was passiert, wenn Sie während der Renovierung unerwartete Probleme entdecken?",
            answer: "Wir führen gründliche Vorab-Inspektionen durch, um potenzielle Probleme zu identifizieren, aber gelegentlich werden Probleme erst nach Beginn der Arbeiten sichtbar. In solchen Fällen benachrichtigen wir Sie sofort, erklären das Problem, bieten Lösungen an und liefern eine transparente Kostenschätzung. Wir gehen niemals ohne Ihre Genehmigung vor. Unsere Verträge beinhalten Notfallbudgets für unvorhergesehene Umstände."
          },
          {
            question: "Bieten Sie Garantien auf Ihre Arbeit?",
            answer: "Ja, wir stehen hinter unserer Arbeit mit umfassenden Garantien. Basisrenovierungen beinhalten eine 1-Jahres-Garantie, vollständige Transformationen beinhalten 2 Jahre und große Entwicklungen beinhalten 5 Jahre. Diese decken Handwerkskunst und Material ab. Zusätzlich erhalten Sie Herstellergarantien auf alle installierten Geräte und Vorrichtungen. Wir bieten auch Wartungsverträge nach der Fertigstellung an."
          },
          {
            question: "Können Sie umweltfreundliche oder nachhaltige Renovierungen vornehmen?",
            answer: "Auf jeden Fall. Wir sind spezialisiert auf nachhaltige Renovierungen und können energieeffiziente Systeme (Wärmepumpen, Sonnenkollektoren, hochwertige Isolierung), umweltfreundliche Materialien, Regenwassernutzung, LED-Beleuchtung und Smart-Home-Systeme integrieren, um den Energieverbrauch zu optimieren. Viele unserer Projekte erzielen A+ Energiebewertungen. Wir können Sie auch über verfügbare grüne Renovierungssubventionen und Steueranreize beraten."
          }
        ]
      }
    },
    management: {
      title: "Umfassendes Asset-Management",
      description: "End-to-End-Betreuung, die Compliance, Transparenz und nachhaltige Renditen Ihrer Investitionen gewährleistet.",
      features: [
        "Transparente Finanzberichterstattung",
        "Proaktive Instandhaltungskoordination",
        "Mieterbeziehungen & Vermietungsunterstützung",
        "Regulatorische Compliance"
      ],
      hero: {
        title: "Professionelles Immobilien-Asset-Management",
        subtitle: "Maximierung von Renditen bei Minimierung Ihrer Belastung",
        description: "Umfassendes End-to-End-Management für Ihre Immobilieninvestitionen. Wir kümmern uns um Finanzen, Mieterbeziehungen, Instandhaltung, rechtliche Compliance und strategische Planung—damit Sie die Renditen ohne die täglichen Kopfschmerzen genießen können.",
        cta: "Beginnen Sie mit dem Management",
        benefits: [
          "Vollständige Finanzberichterstattung und Budgetierung",
          "Professionelle Mieterakquise und -bindung",
          "24/7 Instandhaltungskoordination",
          "Vollständige rechtliche und regulatorische Compliance",
          "Strategische Vermögensoptimierung",
          "Transparente monatliche Berichte"
        ]
      },
      process: {
        title: "Unser Management-Ansatz",
        subtitle: "Ein strukturiertes System zur Maximierung der Immobilienleistung",
        steps: [
          {
            title: "Immobilienbewertung",
            description: "Wir beginnen mit einer umfassenden Bewertung Ihrer Immobilie, aktuellen Leistung und Zielen, um einen maßgeschneiderten Managementplan zu erstellen."
          },
          {
            title: "Strategische Planung",
            description: "Entwicklung einer langfristigen Strategie zur Wertoptimierung, einschließlich Mietpreisgestaltung, Instandhaltungsprioritäten und Kapitalverbesserungen."
          },
          {
            title: "Mieter-Management",
            description: "Professionelles Screening, Onboarding und laufende Kommunikation mit Mietern, um langfristige, hochwertige Belegungen zu gewährleisten."
          },
          {
            title: "Finanzmanagement",
            description: "Detaillierte Buchhaltung, Budgetierung und Finanzberichterstattung mit vollständiger Transparenz und rechtzeitigen monatlichen Updates."
          },
          {
            title: "Instandhaltung & Reparaturen",
            description: "Proaktive Instandhaltungsplanung, 24/7 Notfallreaktion und qualitätsgeprüfte Auftragnehmer für alle Reparaturen."
          },
          {
            title: "Leistungsoptimierung",
            description: "Laufende Analyse und Umsetzung von Verbesserungen zur Maximierung von NOI, Kapitalrendite und Vermögenswert."
          }
        ]
      },
      pricing: {
        title: "Management-Pakete",
        subtitle: "Flexible Lösungen für jede Portfoliogröße",
        toggle: {
          monthly: "Monatlich",
          yearly: "Jährlich",
          savePercent: "10% Sparen"
        },
        plans: [
          {
            name: "Essential",
            description: "Kern-Management-Services für einzelne Immobilien",
            price: "6%",
            period: "der monatlichen Miete",
            features: [
              "Mieterakquise und -screening",
              "Mietvertragsmanagement",
              "Monatliche Mieteinzug",
              "Grundlegende Instandhaltungskoordination",
              "Vierteljährliche Finanzberichte",
              "E-Mail- und Telefon-Support",
              "Online-Eigentümerportal"
            ],
            cta: "Essential Wählen",
            popular: false
          },
          {
            name: "Premium",
            description: "Vollständiges Service-Management für Investoren",
            price: "8%",
            period: "der monatlichen Miete",
            features: [
              "Alles von Essential",
              "24/7 Notfall-Instandhaltung",
              "Proaktive Immobilieninspektionen",
              "Monatliche Finanzberichte",
              "Mietvertragsverhandlung und -erneuerung",
              "Budgetierung und CapEx-Planung",
              "Dedizierter Property Manager",
              "Prioritätsreaktion"
            ],
            cta: "Premium Wählen",
            popular: true
          },
          {
            name: "Portfolio",
            description: "Umfassendes Management für mehrere Immobilien",
            price: "Individuell",
            period: "Kontakt für Preise",
            features: [
              "Alles von Premium",
              "Multi-Immobilien-Dashboard",
              "Portfolio-Leistungsanalyse",
              "Strategische Asset-Planung",
              "Steueroptimierungsberatung",
              "Investitionsmöglichkeiten-Scouting",
              "Senior-Management-Zugang",
              "Maßgeschneiderte Berichterstattung"
            ],
            cta: "Kontaktieren Sie Uns",
            popular: false
          }
        ],
        trustBadges: [
          "500+ Verwaltete Immobilien",
          "98% Mieterhalte-Rate",
          "Durchschnittliche Leerstandszeit <14 Tage"
        ]
      },
      services: {
        title: "Vollständige Management-Services",
        subtitle: "Alles, was Sie für erfolgreiche Immobilieninvestitionen benötigen",
        items: [
          {
            name: "Mieterverwaltung",
            description: "Professionelles Screening, Onboarding, laufende Kommunikation und Bindungsstrategien.",
            icon: "users"
          },
          {
            name: "Finanzmanagement",
            description: "Detaillierte Buchhaltung, Budgetierung, Berichterstattung und Steueroptimierung.",
            icon: "chart"
          },
          {
            name: "Instandhaltung & Reparaturen",
            description: "Proaktive Wartung, 24/7 Notfallreaktion und qualitätsgeprüfte Auftragnehmer.",
            icon: "tools"
          },
          {
            name: "Rechtliche Compliance",
            description: "Einhaltung aller Mietgesetze, Vorschriften und Sicherheitsstandards.",
            icon: "shield"
          },
          {
            name: "Strategische Beratung",
            description: "Langfristige Planung, Wertoptimierung und Investitionsmöglichkeiten.",
            icon: "compass"
          },
          {
            name: "Technologie-Plattform",
            description: "24/7 Zugang zu Finanzen, Dokumenten und Immobilienleistungsdaten.",
            icon: "laptop"
          }
        ]
      },
      caseStudies: {
        title: "Management-Erfolge",
        subtitle: "Wie wir Immobilienleistung für unsere Kunden transformieren",
        items: [
          {
            name: "Luxus-Wohnportfolio",
            location: "Brüssel",
            category: "Mehrfamilien-Wohnimmobilien",
            challenge: "Ein internationaler Investor besaß ein Portfolio von 12 Premium-Wohnungen mit hoher Fluktuation, inkonsistenter Instandhaltung und unterdurchschnittlichen Renditen.",
            solution: "Wir implementierten standardisierte Screening-Prozesse, proaktive Instandhaltungspläne und Mieter-Bindungsprogramme, während wir die Mietpreise an Marktstandards anpassten.",
            results: [
              { label: "Mieterfluktuationsreduzierung", value: "-60%" },
              { label: "NOI-Steigerung", value: "+28%" },
              { label: "Durchschn. Leerstandszeit", value: "11 Tage" },
              { label: "Mieterzufriedenheit", value: "4,8/5" }
            ],
            testimonial: "SwitchInvest verwandelte unser Portfolio von einem Kopfschmerz in eine reibungslose, profitable Investition. Ihr professioneller Ansatz und ihre Liebe zum Detail sind außergewöhnlich."
          },
          {
            name: "Gewerbliches Bürogebäude",
            location: "Antwerpen",
            category: "Gewerbeimmobilie",
            challenge: "Ein 5.000 m² Bürogebäude hatte mit 40% Leerstand, veralteten Einrichtungen und Mieterbeschwerden zu kämpfen.",
            solution: "Strategische Renovierungen durchgeführt, wettbewerbsfähige Mietpakete strukturiert, aggressiv vermarktet und außergewöhnlichen Mieterservice bereitgestellt.",
            results: [
              { label: "Belegung", value: "95%" },
              { label: "Mietsteigerung", value: "+15%" },
              { label: "Mieterverlängerungsrate", value: "92%" },
              { label: "CapEx ROI", value: "180%" }
            ],
            testimonial: "Die Fähigkeit des Teams, unser unterdurchschnittliches Gebäude in ein voll belegtes, hochwertiges Asset zu verwandeln, war beeindruckend. Sie übertreffen durchgängig die Erwartungen."
          }
        ]
      },
      faqs: {
        title: "Häufig Gestellte Fragen",
        subtitle: "Antworten auf häufige Fragen zu unseren Management-Services",
        searchPlaceholder: "FAQ durchsuchen...",
        stillHaveQuestions: "Noch Fragen?",
        contactUs: "Kontaktieren Sie unser Management-Team",
        items: [
          {
            question: "Was ist in Ihrer Management-Gebühr enthalten?",
            answer: "Unsere Management-Gebühr deckt alle täglichen Betriebsaktivitäten ab: Mieterakquise und -screening, Mieteinzug, Instandhaltungskoordination, Finanzberichterstattung, Mietvertragsmanagement und Eigentümerkommunikation. Zusätzliche Leistungen wie größere Kapitalverbesserungen oder rechtliche Dienstleistungen werden separat abgerechnet, jedoch immer mit Ihrer vorherigen Genehmigung."
          },
          {
            question: "Wie finden und screenen Sie Mieter?",
            answer: "Wir nutzen ein mehrstufiges Screening-Verfahren einschließlich Kreditprüfungen, Einkommensüberprüfung, Vermietersreferenzen und Hintergrundprüfungen. Wir vermarkten Ihre Immobilie über mehrere Kanäle—Online-Portale, unsere Website, Social Media und unser Netzwerk—um qualifizierte Mieter schnell anzuziehen. Unser gründlicher Prozess resultiert in zuverlässigen, langfristigen Mietern."
          },
          {
            question: "Wie handhaben Sie Instandhaltungs-Notfälle?",
            answer: "Wir bieten 24/7 Notfall-Instandhaltungsreaktionen. Mieter haben eine dedizierte Notfall-Hotline, und wir pflegen Beziehungen zu geprüften Auftragnehmern für sofortiges Eingreifen. Bei Nicht-Notfällen koordinieren wir Reparaturen innerhalb von 24-48 Stunden. Sie erhalten Benachrichtigungen über alle Instandhaltungsprobleme und Kosten über unser Eigentümerportal."
          },
          {
            question: "Wie oft erhalte ich Finanzberichte?",
            answer: "Das hängt von Ihrem gewählten Paket ab. Essential-Kunden erhalten vierteljährliche Berichte, Premium-Kunden erhalten monatliche Berichte und Portfolio-Kunden erhalten maßgeschneiderte Berichterstattung nach Ihren Anforderungen. Alle Berichte enthalten Einkommen, Ausgaben, Leistungsmetriken und sind jederzeit über Ihr Online-Portal zugänglich."
          },
          {
            question: "Was passiert, wenn ein Mieter die Miete nicht zahlt?",
            answer: "Wir haben ein strukturiertes Inkassoverfahren, beginnend mit freundlichen Erinnerungen bis hin zu formellen rechtlichen Schritten bei Bedarf. Unser Ziel ist es immer, Probleme konstruktiv zu lösen, aber wir schützen auch Ihre Investition. Wir kümmern uns um alle Kommunikation, Dokumentation und rechtlichen Verfahren nach belgischem Mietrecht."
          },
          {
            question: "Kann ich die Management-Services jederzeit beenden?",
            answer: "Ja, unsere Management-Vereinbarungen können mit einer Kündigungsfrist von 60 Tagen gekündigt werden. Wir glauben daran, unser Management durch außergewöhnliche Leistung zu verdienen, nicht durch Bindungen. Bei Kündigung stellen wir alle Dokumentation, Finanzunterlagen und eine reibungslose Übergabe sicher."
          }
        ]
      }
    }
  },

  process: {
    title: "So funktioniert es",
    steps: [
      { title: "Schritt 1: Details zu Ihrer Immobilie", description: "Füllen Sie unser kurzes Online-Formular aus oder rufen Sie uns an – Adresse, Immobilientyp, Größe und Zustand." },
      { title: "Schritt 2: Erhalten Sie Ihr Angebot", description: "Erhalten Sie innerhalb von 24–48 Stunden ein transparentes Angebot basierend auf echten Marktdaten und ohne versteckte Abzüge." },
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
    title: "Bereit, den Wert Ihrer Immobilie freizusetzen? Erhalten Sie jetzt Ihr unverbindliches Angebot!",
    tagline: "Schnell. Fair. Ohne Stress.",
    subtitle: "Erhalten Sie ein klares Angebot und schließen Sie nach Ihrem Zeitplan ab – ohne Makler, ohne Reparaturen, ohne versteckte Kosten.",
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
    heroSubtitle: "Exzellenz im Belgischen Immobiliengeschäft Seit 2010",
    description: "Seit 2010 befähigt SwitchInvest belgische Eigentümer, den Wert ihres Hauses schnell und mühelos freizusetzen. Wir kaufen im Ist-Zustand mit transparenten Angeboten in 24–48 Stunden, managen schlüsselfertige Renovierungen und bieten strategische Asset-Betreuung—mit Compliance, nahtloser Ausführung und maximalen Renditen für unsere Kunden.",
    storyTitle: "Unsere Geschichte",
    mission: "Unsere Mission ist es, anspruchsvollen Kunden makelloses Full-Service-Immobilienmanagement zu bieten, das Leistung optimiert und Vertrauen schafft.",
    missionTitle: "Mission",
    vision: "Unsere Vision ist es, Maßstab im Premium-Immobilienmanagement zu sein, bekannt für unerschütterliche Integrität, strategische Weitsicht und diskrete Exzellenz.",
    visionTitle: "Vision",
    values: {
      title: "Unsere Werte",
      items: [
        "Exzellenz",
        "Integrität",
        "Innovation",
        "Diskretion"
      ]
    },
    valuesSubtitle: "Die Prinzipien, die alles leiten, was wir tun",
    stats: {
      experience: "Jahre Erfahrung",
      properties: "Verwaltete Immobilien",
      assets: "Verwaltetes Vermögen",
      satisfaction: "Kundenzufriedenheit"
    },
    ctaTitle: "Bereit, Mit Uns Zu Arbeiten?",
    ctaSubtitle: "Lassen Sie uns besprechen, wie wir Ihnen helfen können, den Wert Ihrer Immobilie freizusetzen",
    ctaContactButton: "Kontaktieren Sie Uns Heute",
    ctaServicesButton: "Unsere Dienstleistungen Ansehen",
    team: [
      {
        name: "Sophie Van den Berg",
        position: "Geschäftsführerin",
        expertise: "Strategische Führung im Luxus- und institutionellen Immobilienmanagement.",
        experience: "Über 15 Jahre Leitung von Premium-Immobilienportfolios in Europa.",
        specialty: "Strategische Führung",
        specialties: ["Strategische Planung", "Portfoliowachstum", "Marktexpansion"]
      },
      {
        name: "Lucas De Wilde",
        position: "Finanzdirektor",
        expertise: "Finanzstrukturierung und Performance-Optimierung hochklassiger Vermögenswerte.",
        experience: "Über 12 Jahre in der Immobilienfinanzierung mit robusten Renditen für institutionelle Kunden.",
        specialty: "Finanzstrategie",
        specialties: ["Finanzmodellierung", "Risikomanagement", "Investitionsanalyse"]
      },
      {
        name: "Emma Willems",
        position: "Leiterin Asset Management",
        expertise: "Ganzheitliches Asset-Management von Akquisition bis zu wertsteigernden Kapitalprojekten.",
        experience: "Über 10 Jahre in verschiedenen Asset-Klassen und nachhaltigem Wachstum.",
        specialty: "Asset-Management",
        specialties: ["Immobilienbetrieb", "Wertsteigerung", "Kapitalplanung"]
      },
      {
        name: "Antoine Dupont",
        position: "Direktor Kundenbeziehungen",
        expertise: "Maßgeschneiderter Kundenservice mit Fokus auf Vertraulichkeit und individuellen Lösungen.",
        experience: "Über 8 Jahre Aufbau langfristiger Partnerschaften mit vermögenden Privatkunden und Institutionen.",
        specialty: "Kundenbeziehungen",
        specialties: ["Kundenberatung", "Beziehungsmanagement", "Service Excellence"]
      },
      {
        name: "Isabelle Laurent",
        position: "Leiterin Entwicklung",
        expertise: "Transformation von Immobilien durch innovatives Design und nachhaltige Baupraktiken.",
        experience: "Über 14 Jahre Leitung komplexer Renovierungsprojekte in ganz Belgien.",
        specialty: "Immobilienentwicklung",
        specialties: ["Projektmanagement", "Nachhaltiges Design", "Historische Restaurierung"]
      },
      {
        name: "Thomas Vermeulen",
        position: "Investitionsdirektor",
        expertise: "Identifizierung und Ausführung hochrentabler Investitionsmöglichkeiten in belgischen Immobilien.",
        experience: "Über 11 Jahre in Immobilieninvestitionen und Marktanalyse.",
        specialty: "Investitionsstrategie",
        specialties: ["Deal Sourcing", "Marktanalyse", "Due Diligence"]
      }
    ],
    timeline: {
      title: "Unsere Reise",
      subtitle: "Exzellenz im belgischen Immobiliensektor seit 2010 aufbauen",
      events: [
        {
          year: "2010",
          title: "Unternehmen Gegründet",
          description: "SwitchInvest in Brüssel mit der Vision gegründet, das belgische Immobilienmanagement zu transformieren.",
          icon: "building"
        },
        {
          year: "2013",
          title: "Portfolio-Meilenstein",
          description: "€50M an verwalteten Vermögenswerten erreicht, Glaubwürdigkeit auf dem belgischen Markt etabliert.",
          icon: "chart"
        },
        {
          year: "2016",
          title: "Geografische Expansion",
          description: "Operationen auf Antwerpen und Gent ausgeweitet, zu einem wirklich nationalen Akteur geworden.",
          icon: "map"
        },
        {
          year: "2019",
          title: "Innovationsführer",
          description: "Einführung einer eigenen Technologieplattform für Echtzeit-Portfolioüberwachung und Kundenberichterstattung.",
          icon: "tech"
        },
        {
          year: "2021",
          title: "Nachhaltigkeitsfokus",
          description: "Verpflichtung zu CO2-neutralen Operationen und grünen Bauzertifizierungen in unserem Portfolio.",
          icon: "leaf"
        },
        {
          year: "2023",
          title: "Branchenanerkennung",
          description: "Als 'Immobilienunternehmen des Jahres' von den Belgian Real Estate Excellence Awards ausgezeichnet.",
          icon: "award"
        }
      ],
      futureTitle: "Blick nach Vorn",
      futureDescription: "Wir investieren in KI-gestützte Immobilienanalyse, erweitern unsere nachhaltigen Entwicklungsinitiativen und setzen weiterhin den Standard für Exzellenz im belgischen Immobiliensektor."
    }
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
  portfolioEnhanced: {
    lightbox: {
      close: "Schließen",
      previous: "Zurück",
      next: "Weiter",
      details: "Projektdetails",
      location: "Standort",
      type: "Typ",
      size: "Größe",
      status: "Status",
      investment: "Investition",
      roi: "ROI",
      timeline: "Zeitplan",
      completion: "Fertigstellungsdatum",
      challenge: "Herausforderung",
      solution: "Lösung",
      results: "Ergebnisse",
      features: "Hauptmerkmale",
      gallery: "Galerie"
    }
  },
  loading: {
    default: "Laden...",
    page: "Seite wird geladen...",
    content: "Inhalt wird geladen...",
    projects: "Projekte werden geladen...",
    services: "Dienste werden geladen...",
    team: "Teaminformationen werden geladen...",
    portfolio: "Portfolio wird geladen...",
    pleaseWait: "Bitte warten..."
  },
  errors: {
    general: {
      title: "Etwas ist Schief Gelaufen",
      message: "Wir sind auf einen unerwarteten Fehler gestoßen. Bitte versuchen Sie es erneut.",
      retry: "Erneut Versuchen",
      backHome: "Zurück zur Startseite",
      reportIssue: "Problem Melden"
    },
    boundary: {
      title: "Hoppla! Etwas ist Kaputt Gegangen",
      message: "Es tut uns leid, aber beim Laden dieses Abschnitts ist etwas schief gelaufen. Unser Team wurde benachrichtigt.",
      reset: "Abschnitt Zurücksetzen",
      home: "Zur Startseite",
      support: "Support Kontaktieren"
    },
    network: {
      title: "Verbindungsfehler",
      message: "Verbindung zum Server konnte nicht hergestellt werden. Überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.",
      retry: "Verbindung Erneut Versuchen"
    },
    notAuthorized: {
      title: "Zugriff Verweigert",
      message: "Sie haben keine Berechtigung, auf diese Ressource zuzugreifen.",
      login: "Anmelden",
      home: "Zur Startseite"
    }
  },

  // 404 Seite
  notFound: {
    title: "404 - Seite Nicht Gefunden",
    subtitle: "Im Immobilienlabyrinth Verloren?",
    message: "Die gesuchte Seite existiert nicht oder wurde an einen anderen Ort verschoben.",
    backHome: "Zurück zur Startseite",
    popularPagesTitle: "Beliebte Seiten",
    needHelp: "Benötigen Sie Hilfe?",
    contactTeam: "Kontaktieren Sie unser Team",
    links: {
      home: "Startseite",
      services: "Dienstleistungen",
      portfolio: "Portfolio",
      about: "Über Uns",
      contact: "Kontakt",
      blog: "Blog"
    },
    help: {
      title: "Hilfe Benötigt?",
      description: "Wenn Sie denken, dass dies ein Fehler ist oder Hilfe beim Finden dessen benötigen, wonach Sie suchen:",
      contactSupport: "Kontaktieren Sie Unser Team",
      searchSite: "Unsere Website Durchsuchen",
      viewSitemap: "Sitemap Anzeigen"
    },
    suggestions: [
      "Überprüfen Sie die URL auf Tippfehler",
      "Verwenden Sie das Navigationsmenü oben",
      "Suchen Sie nach dem, was Sie benötigen",
      "Besuchen Sie unsere Startseite"
    ]
  },
  
  // Kontaktseite
  contact: {
    title: "Kontaktieren Sie Uns",
    subtitle: "Wir sind hier, um Ihre Fragen zu Immobilieninvestitionsmöglichkeiten in Belgien zu beantworten.",
    quickContact: "Schnellkontakt",
    whatsapp: "Sofortnachricht",
    clickToCall: "Klicken Sie zum Anrufen",
    clickToEmail: "Klicken Sie, um eine E-Mail zu senden",
    clickToMap: "Klicken Sie, um auf der Karte anzuzeigen",
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
