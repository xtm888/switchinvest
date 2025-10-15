import { Translation } from './types';

export const fr: Translation = {
  valuation: {
    title: "Évaluer mon bien",
    address: "Adresse",
    addressPlaceholder: "Commencez à taper votre adresse…",
    addressRequired: "Adresse requise",
    postalCode: "Code postal",
    postalCodeInvalid: "Code postal invalide",
    step: "Étape {{step}} sur {{total}}",
    type: "Type de bien",
    typePlaceholder: "Choisir...",
    typeOptions: {
      apartment: "Appartement",
      house: "Maison",
      studio: "Studio",
      land: "Terrain",
      other: "Autre"
    },
    size: "Surface (m²)",
    sizePlaceholder: "Entrez la surface",
    bedrooms: "Chambres",
    bedroomsPlaceholder: "Choisir...",
    condition: "État",
    conditionPlaceholder: "Choisir...",
    conditionOptions: {
      new: "Neuf",
      renovated: "Rénové",
      needsRenovation: "À rénover",
      old: "Ancien"
    },
    features: "Caractéristiques",
    featuresOptions: {
      garden: "Jardin",
      terrace: "Terrasse",
      pool: "Piscine",
      parking: "Parking",
      elevator: "Ascenseur",
      cellar: "Cave",
      fireplace: "Cheminée",
      airConditioning: "Climatisation",
      solarPanels: "Panneaux solaires",
      alarm: "Alarme",
      intercom: "Interphone"
    },
    name: "Nom",
    namePlaceholder: "Votre nom",
    email: "Email",
    emailPlaceholder: "Votre email",
    phone: "Téléphone",
    phonePlaceholder: "Votre numéro de téléphone",
    submit: "Envoyer",
    back: "Retour",
    next: "Suivant",
    loading: "Chargement...",
    thankYou: "Merci ! Votre estimation est de {{estimate}} €",
    newEvaluation: "Nouvelle évaluation",
    error: "Une erreur s'est produite, veuillez réessayer.",
    thankContact: "Nous vous contacterons bientôt. Merci !",
    cta: "Évaluer maintenant"
  },
  home: {
    trustBadge: "Plus de 500 propriétaires nous font confiance",
    ctaPrimary: "Obtenez Votre Évaluation Gratuite",
    ctaSecondary: "Découvrez Nos Services",
    featuresTitle: "Pourquoi Choisir SwitchInvest ?",
    featuresSubtitle: "Des solutions immobilières rapides, transparentes et sans tracas",
    features: {
      fastOffers: {
        title: "Offres en 24-48 Heures",
        description: "Recevez une offre transparente sous 2 jours"
      },
      noFees: {
        title: "Sans Frais Cachés",
        description: "Prix clairs sans surprises"
      },
      asIs: {
        title: "Achat en l'État",
        description: "Nous achetons votre bien dans n'importe quel état"
      },
      quickClosing: {
        title: "Clôture Rapide",
        description: "Concluez en aussi peu que 7 jours"
      }
    },
    mapTitle: "Notre Présence à Travers la Belgique",
    mapSubtitle: "Au service des propriétaires dans toutes les régions avec une expertise locale",
    hero: {
      badge: "500+ Propriétaires Satisfaits en Belgique",
      title: "Transformez Votre Propriété",
      titleHighlight: "en Possibilités",
      subtitle: "Vente rapide, évaluation transparente en 24-48h.",
      features: "Zéro commission • Aucune réparation requise",
      ctaPrimary: "Évaluation Gratuite Maintenant",
      ctaSecondary: "Voir Comment Ça Marche",
      trustIndicators: [
        "24-48h Offre Garantie",
        "Aucune Commission",
        "Achat en l'État"
      ],
      scrollText: "Découvrir"
    },
    map: {
      badge: "Présence Nationale",
      title: "Notre Présence en Belgique",
      subtitle: "Service disponible dans toute la Belgique avec expertise locale",
      stats: {
        coverage: "Couverture Nationale",
        coverageText: "Toutes les provinces desservies",
        deals: "Propriétés Vendues",
        dealsText: "Dans toute la Belgique",
        response: "Temps de Réponse Moyen",
        responseText: "Première offre livrée",
        satisfaction: "Satisfaction Client",
        satisfactionText: "Avis 5 étoiles"
      },
      floatingBadge: "Au service des clients dans tout le pays depuis 2018",
      footerText: "Notre équipe d'experts opère dans toutes les provinces belges avec une connaissance approfondie du marché local. De Bruxelles à Anvers, de Liège à Gand - nous sommes là pour vous aider à libérer la valeur de votre propriété.",
      testimonials: {
        brussels: {
          region: "Bruxelles",
          quote: "Réponse rapide et excellent service !",
          author: "Marie D."
        },
        antwerp: {
          region: "Anvers",
          quote: "Équipe professionnelle, prix équitable reçu.",
          author: "Johan V."
        },
        liege: {
          region: "Liège",
          quote: "Propriété vendue en un temps record !",
          author: "Sophie L."
        },
        ghent: {
          region: "Gand",
          quote: "Processus digne de confiance et transparent.",
          author: "Lucas M."
        }
      }
    },
    stats: {
      title: "Nos Résultats Parlent d'Eux-Mêmes",
      subtitle: "Des chiffres qui témoignent de notre engagement envers l'excellence",
      items: [
        {
          value: 500,
          suffix: "+",
          label: "Propriétaires Satisfaits",
          description: "Ont choisi SwitchInvest pour vendre rapidement"
        },
        {
          value: 24,
          suffix: "h",
          label: "Délai d'Évaluation",
          description: "Offre transparente en moins de 48 heures"
        },
        {
          value: 98,
          suffix: "%",
          label: "Taux de Satisfaction",
          description: "De nos clients recommandent nos services"
        },
        {
          value: 0,
          suffix: "€",
          label: "Frais Cachés",
          description: "Transparence totale, aucune surprise"
        }
      ],
      ctaText: "Rejoignez des centaines de propriétaires satisfaits",
      ctaButton: "Commencer Maintenant"
    },
    testimonials: {
      title: "Ce Que Disent Nos Clients",
      subtitle: "Des témoignages authentiques de propriétaires satisfaits",
      pressTitle: "Vu Dans Les Médias",
      items: [
        {
          name: "Marie Dubois",
          location: "Bruxelles",
          role: "Propriétaire",
          quote: "SwitchInvest a transformé une situation stressante en une expérience fluide. Leur équipe a géré chaque détail avec professionnalisme et nous avons reçu notre paiement en moins de deux semaines.",
          rating: 5,
          image: "/testimonials/marie.jpg",
          date: "Janvier 2025"
        },
        {
          name: "Luc Vermeulen",
          location: "Anvers",
          role: "Investisseur",
          quote: "Leur expertise du marché belge est exceptionnelle. Ils ont identifié des opportunités d'investissement que je n'aurais jamais trouvées seul. Les rendements ont dépassé mes attentes.",
          rating: 5,
          image: "/testimonials/luc.jpg",
          date: "Décembre 2024"
        },
        {
          name: "Sophie Laurent",
          location: "Liège",
          role: "Propriétaire",
          quote: "J'avais hérité d'une propriété qui nécessitait des réparations majeures. SwitchInvest l'a achetée en l'état à un prix équitable. Processus simple et rapide du début à la fin.",
          rating: 5,
          image: "/testimonials/sophie.jpg",
          date: "Novembre 2024"
        },
        {
          name: "Ahmed Benali",
          location: "Gand",
          role: "Entrepreneur",
          quote: "Grâce à SwitchInvest, j'ai pu vendre rapidement ma propriété pour financer mon entreprise. Le service était professionnel, transparent et sans stress. Je les recommande vivement!",
          rating: 5,
          image: "/testimonials/ahmed.jpg",
          date: "Octobre 2024"
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
      title: "Votre Confiance, Notre Priorité",
      subtitle: "Sécurité maximale et transparence totale à chaque étape",
      items: [
        {
          title: "Conforme GDPR",
          description: "Protection complète de vos données personnelles selon les normes européennes"
        },
        {
          title: "Cryptage AES-256",
          description: "Sécurité bancaire pour toutes vos transactions et communications"
        },
        {
          title: "Certifié ISO 27001",
          description: "Standards internationaux de gestion de la sécurité de l'information"
        },
        {
          title: "Membre IPI",
          description: "Institut Professionnel des agents Immobiliers agréé"
        },
        {
          title: "100% Transparent",
          description: "Aucun frais caché, processus clair et traçable à chaque étape"
        },
        {
          title: "Présence Nationale",
          description: "Service disponible dans toute la Belgique - Flandre, Bruxelles, Wallonie"
        }
      ],
      bottomText: "Rejoint par",
      bottomTextSuffix: "propriétaires en toute sécurité",
      certificationsText: "Certifications & Partenaires"
    },
    faq: {
      title: "Questions Fréquemment Posées",
      subtitle: "Vous avez des questions sur la vente rapide de votre maison ou nos services ? Trouvez les réponses ici.",
      stillHaveQuestions: "Vous ne trouvez pas la réponse à votre question ?",
      contactButton: "Contactez-nous"
    },
    newsletter: {
      title: "Restez Informé de Nos Opportunités",
      subtitle: "Recevez en exclusivité nos analyses de marché, opportunités d'investissement et conseils d'experts",
      placeholder: "votre@email.com",
      button: "S'abonner",
      privacy: "🔒 Vos données sont protégées. Désabonnement possible à tout moment."
    },
    blog: {
      badge: "Guides & Ressources",
      title: "Restez Informé du Marché Immobilier",
      subtitle: "Analyses d'experts, guides pratiques et tendances du marché belge",
      readMore: "Lire l'Article",
      viewAll: "Voir Tous les Articles",
      pageTitle: "Blog & Actualités Immobilières",
      pageDescription: "Conseils d'experts, analyses de marché et guides pratiques pour réussir vos projets immobiliers en Belgique",
      readArticle: "Lire la suite",
      newsletterTitle: "Restez Informé des Dernières Actualités Immobilières",
      newsletterDescription: "Recevez nos analyses de marché, conseils d'experts et opportunités d'investissement directement dans votre boîte mail.",
      newsletterButton: "S'inscrire à la Newsletter",
      categories: {
        all: "Tous"
      }
    }
  },
  common: {
    home: "Accueil",
    close: "Fermer",
  },
  navigation: {
    services: "Services",
    portfolio: "Portefeuille",
    technologies: "Technologies",
    about: "À Propos",
    clientPortal: "Évaluer Mon Bien", // Updated for backward compatibility
    contactUs: "Évaluer Mon Bien",
  },
  hero: {
    title: "Transformez Votre Propriété en Possibilités",
    tagline: "Vendez Rapidement, Évitez le Stress et Financez Vos Rêves !",
    subtitle: "Chez SwitchInvest, nous croyons que votre maison doit être une passerelle vers de nouvelles opportunités, et non un fardeau. Que vous ayez hérité d’un bien, possédiez une maison nécessitant des réparations coûteuses, ou souhaitiez simplement débloquer rapidement des liquidités pour poursuivre vos passions, nous proposons une solution sans tracas. Nous achetons votre propriété en l’état, prenons en charge toutes les rénovations et vous versons l'argent plus rapidement que les méthodes traditionnelles. Pas d’agents, pas de délais, pas de frais cachés – juste un moyen simple de libérer la valeur de votre maison et de commencer à vivre la vie qui vous ressemble."
  },
  statistics: {
    propertiesManaged: "Propriétés gérées",
    totalSquareMeters: "Mètres carrés totaux",
    yearsExperience: "Années d'expérience",
    satisfiedClients: "Clients satisfaits",
  },
  trustIndicators: {
    title: "Propriétés et Partenaires en Vedette",
    testimonials: [
      {
        client: "Marie D.",
        quote: "SwitchInvest a transformé notre portefeuille bruxellois – chaque détail traité avec précision."
      },
      {
        client: "Lukas V.",
        quote: "Leur vision financière discrète a débloqué des rendements que je ne soupçonnais pas possibles."
      }
    ],
    awards: [
      "Prix d'Excellence Immobilier Belge 2023",
      "Innovateur en Gestion Immobilière 2024"
    ],
    certifications: [
      "Gestionnaire Immobilier Agréé FEDERA",
      "Gestion de la Qualité ISO 9001:2015"
    ]
  },
  services: {
    title: "Nos Services",
    subtitle: "Solutions clés en main pour libérer le potentiel de votre propriété",
    learnMore: "En savoir plus",
    real_estate: {
      title: "Achat rapide",
      description: "Obtenez une offre transparente sous 24–48 heures et concluez en seulement 7 jours—sans agents, sans frais cachés.",
      features: [
        "Offre sous 24–48 heures",
        "Choisissez votre date de clôture (7–30 jours)",
        "Achat en l'état—pas de mise en scène ni d'inspections",
        "Pas de frais cachés"
      ],
      hero: {
        title: "Solutions d'Achat Rapide",
        subtitle: "Rapide, Équitable, Sans Tracas",
        description: "Obtenez une offre transparente sous 24–48 heures et concluez en seulement 7 jours. Nous achetons votre propriété en l'état, gérons toutes les formalités et versons les fonds—sans agents, sans frais cachés.",
        cta: "Obtenez Votre Offre Gratuite",
        benefits: [
          "Offres transparentes sous 24-48 heures",
          "Clôture en aussi peu que 7 jours",
          "Nous achetons les biens en l'état",
          "Aucun frais caché ni commission",
          "Toutes les formalités légales gérées",
          "Dates de clôture flexibles"
        ]
      },
      process: {
        title: "Notre Processus d'Achat Rapide",
        subtitle: "Du premier contact aux fonds en main en 4 étapes simples",
        steps: [
          {
            title: "Soumettez les Détails",
            description: "Remplissez notre formulaire en ligne rapide ou appelez-nous avec les informations de votre propriété—adresse, type, superficie et état actuel."
          },
          {
            title: "Recevez Votre Offre",
            description: "Obtenez une offre transparente et sans obligation sous 24–48 heures basée sur les données actuelles du marché et notre évaluation des rénovations."
          },
          {
            title: "Acceptez et Planifiez",
            description: "Choisissez votre date de clôture préférée entre 7 et 30 jours. Nous gérons toute la documentation légale et la coordination avec le notaire."
          },
          {
            title: "Clôturez et Recevez",
            description: "Signez les documents, transférez la propriété et recevez votre paiement. Nous nous occupons de la propriété par la suite."
          },
          {
            title: "Nous Rénovons",
            description: "Après la clôture, nous gérons toutes les rénovations et améliorations pour maximiser la valeur et l'attrait de la propriété."
          }
        ]
      },
      pricing: {
        title: "Tarification Transparente",
        subtitle: "Choisissez le forfait de service qui vous convient",
        toggle: {
          monthly: "Mensuel",
          yearly: "Annuel",
          savePercent: "Économisez 15%"
        },
        plans: [
          {
            name: "Vente Rapide",
            description: "Parfait pour les propriétaires qui doivent vendre rapidement",
            price: "Gratuit",
            period: "consultation",
            features: [
              "Garantie d'offre sous 24-48 heures",
              "Achat en l'état (aucune réparation nécessaire)",
              "Clôture en 7-30 jours",
              "Tous les frais juridiques couverts",
              "Aucune commission d'agent",
              "Date de clôture flexible",
              "Virement bancaire direct"
            ],
            cta: "Obtenez Votre Offre",
            popular: false
          },
          {
            name: "Service Premium",
            description: "Support complet avec un maximum de commodité",
            price: "Gratuit",
            period: "consultation",
            features: [
              "Tout ce qui est dans Vente Rapide",
              "Consultation en mise en scène",
              "Photographie professionnelle",
              "Clôture accélérée (dès 7 jours)",
              "Coordination de déménagement",
              "Références pour solutions de stockage",
              "Support après-vente"
            ],
            cta: "Commencer",
            popular: true
          },
          {
            name: "Partenariat d'Investissement",
            description: "Pour les propriétaires intéressés par des opportunités d'investissement continues",
            price: "Personnalisé",
            period: "partenariat",
            features: [
              "Tout ce qui est dans Premium",
              "Accès prioritaire aux offres d'investissement",
              "Options de diversification de portefeuille",
              "Perspectives de marché trimestrielles",
              "Services de conseil stratégique",
              "Conseils en optimisation fiscale",
              "Gestionnaire de compte dédié"
            ],
            cta: "Nous Contacter",
            popular: false
          }
        ],
        trustBadges: [
          "Courtier Immobilier Agréé",
          "Notation A+ BBB",
          "Plus de 10 Ans d'Expérience",
          "Plus de 500 Propriétés Achetées"
        ]
      },
      beforeAfter: {
        title: "Nos Résultats de Transformation",
        subtitle: "Voyez comment nous transformons les propriétés après l'achat",
        before: "Avant Achat",
        after: "Après Rénovation"
      },
      caseStudies: {
        title: "Histoires de Succès",
        subtitle: "Résultats réels de propriétaires qui ont choisi notre service d'achat rapide",
        items: [
          {
            name: "Marie D.",
            location: "Bruxelles",
            category: "Vente de Retraite",
            challenge: "Après le décès de son mari, Marie devait réduire la taille rapidement mais sa propriété nécessitait des réparations importantes qu'elle ne pouvait pas se permettre.",
            solution: "Nous avons acheté sa propriété en l'état sous 2 semaines, lui permettant de déménager dans un appartement plus petit près de sa fille sans frais de rénovation.",
            results: [
              {
                label: "Délai de Clôture",
                value: "14 jours"
              },
              {
                label: "Réparations Évitées",
                value: "45 000 €"
              },
              {
                label: "Montant Reçu",
                value: "285 000 €"
              }
            ],
            testimonial: "Switch Invest a rendu une période difficile tellement plus facile. Le processus était transparent et sans stress."
          },
          {
            name: "Luc & Sophie V.",
            location: "Anvers",
            category: "Propriété Héritée",
            challenge: "Le couple a hérité d'une propriété d'un parent mais vivait à l'étranger et ne pouvait pas gérer les rénovations ou une vente traditionnelle.",
            solution: "Nous avons tout géré à distance—de l'évaluation à la clôture—et acheté la propriété en l'état, fournissant une offre équitable sous 48 heures.",
            results: [
              {
                label: "Délai d'Offre",
                value: "48 heures"
              },
              {
                label: "Processus à Distance",
                value: "100%"
              },
              {
                label: "Montant Reçu",
                value: "195 000 €"
              }
            ],
            testimonial: "Nous n'avons jamais eu à visiter la Belgique. Tout a été géré professionnellement et rapidement."
          },
          {
            name: "Ahmed K.",
            location: "Gand",
            category: "Financement d'Entreprise",
            challenge: "Ahmed avait besoin de capital rapidement pour financer une opportunité commerciale mais ne pouvait pas attendre un processus de vente traditionnel.",
            solution: "Nous avons fourni une offre compétitive sous 24 heures et conclu en 10 jours, lui donnant le capital nécessaire pour sa startup.",
            results: [
              {
                label: "Rapidité d'Offre",
                value: "24 heures"
              },
              {
                label: "Jours de Clôture",
                value: "10 jours"
              },
              {
                label: "Montant Reçu",
                value: "320 000 €"
              }
            ],
            testimonial: "La vente rapide m'a permis de saisir une incroyable opportunité commerciale. Hautement recommandé!"
          }
        ]
      },
      faqs: {
        title: "Foire Aux Questions",
        subtitle: "Tout ce que vous devez savoir sur notre service d'achat rapide",
        searchPlaceholder: "Rechercher des questions...",
        stillHaveQuestions: "Vous avez encore des questions?",
        contactUs: "Contactez notre équipe pour des réponses personnalisées",
        items: [
          {
            question: "Dans quel délai pouvez-vous faire une offre?",
            answer: "Nous fournissons généralement une offre transparente et sans obligation sous 24-48 heures après réception des détails de votre propriété. En cas d'urgence, nous pouvons accélérer cela pour des offres le jour même."
          },
          {
            question: "Facturez-vous des frais ou des commissions?",
            answer: "Non. Contrairement aux ventes immobilières traditionnelles, il n'y a pas de commissions d'agent, de frais de clôture ou de frais cachés. L'offre que nous présentons est le montant que vous recevrez."
          },
          {
            question: "Quels types de propriétés achetez-vous?",
            answer: "Nous achetons tous les types de propriétés résidentielles, y compris les appartements, maisons, studios, terrains et même la propriété partielle ou les biens co-hérités dans n'importe quel état."
          },
          {
            question: "Que se passe-t-il si ma propriété nécessite des réparations majeures?",
            answer: "C'est notre spécialité! Nous achetons des propriétés en l'état, quel que soit l'état. Qu'il s'agisse de travaux cosmétiques mineurs ou de réparations structurelles majeures, vous n'aurez pas à dépenser un centime en rénovations."
          },
          {
            question: "Comment déterminez-vous le prix de votre offre?",
            answer: "Nos offres sont basées sur les données actuelles du marché, l'analyse de l'emplacement, l'évaluation de l'état de la propriété et les coûts de rénovation estimés. Nous fournissons une ventilation détaillée afin que vous puissiez voir exactement comment nous sommes arrivés au chiffre."
          },
          {
            question: "Puis-je choisir ma date de clôture?",
            answer: "Absolument! Nous offrons des dates de clôture flexibles d'aussi vite que 7 jours jusqu'à 30 jours, selon ce qui fonctionne le mieux pour votre situation."
          },
          {
            question: "Que devient la propriété après votre achat?",
            answer: "Nous investissons dans des rénovations complètes incluant les réparations structurelles, la modernisation et les améliorations éco-responsables. Notre objectif est de transformer la propriété en une belle maison moderne pour de nouvelles familles."
          },
          {
            question: "Y a-t-il une obligation après avoir reçu une offre?",
            answer: "Aucune. Nos offres sont complètement sans obligation. Prenez votre temps pour examiner, comparer avec d'autres options et prendre la décision qui vous convient le mieux."
          }
        ]
      }
    },
    investment: {
      title: "Investissement immobilier stratégique",
      description: "Exploitez notre expertise locale et nos données de marché pour identifier des opportunités à haut rendement et optimiser votre portefeuille.",
      features: [
        "Analyse de marché approfondie",
        "Stratégies d'investissement ajustées au risque",
        "Optimisation des performances du portefeuille",
        "Croissance à long terme"
      ],
      hero: {
        title: "Investissement Immobilier Stratégique",
        subtitle: "Stratégies d'Investissement Basées sur les Données pour des Rendements Maximaux",
        description: "Exploitez notre expertise approfondie du marché, nos analyses avancées et nos connaissances locales pour identifier des opportunités à haut rendement et construire un portefeuille immobilier résilient sur les marchés belges les plus prometteurs.",
        cta: "Explorer les Opportunités d'Investissement",
        benefits: [
          "Analyse et perspectives d'experts du marché",
          "Stratégies d'investissement ajustées au risque",
          "Conseils en diversification de portefeuille",
          "Accès aux offres hors marché",
          "Diligence raisonnable de niveau institutionnel",
          "Focus sur la création de richesse à long terme"
        ]
      },
      process: {
        title: "Notre Processus d'Investissement",
        subtitle: "Une approche systématique pour identifier et exécuter des investissements rentables",
        steps: [
          {
            title: "Découverte et Objectifs",
            description: "Nous commençons par comprendre vos objectifs d'investissement, votre tolérance au risque, votre horizon temporel et vos rendements cibles pour créer une stratégie personnalisée."
          },
          {
            title: "Analyse de Marché",
            description: "Notre équipe analyse les tendances macro, la dynamique des quartiers, les évolutions démographiques et les développements d'infrastructure pour identifier les opportunités émergentes."
          },
          {
            title: "Sourcing d'Opportunités",
            description: "Nous exploitons notre vaste réseau pour sourcer des offres exclusives hors marché et évaluer les opportunités du marché avec une diligence raisonnable de niveau institutionnel."
          },
          {
            title: "Exécution d'Investissement",
            description: "De la coordination du financement à la structuration juridique et à la clôture, nous gérons chaque détail pour assurer une acquisition fluide et des conditions optimales."
          },
          {
            title: "Gestion d'Actifs",
            description: "Après l'acquisition, nous fournissons un suivi continu du portefeuille, une optimisation des performances et des conseils stratégiques pour maximiser vos rendements."
          }
        ]
      },
      pricing: {
        title: "Forfaits de Conseil en Investissement",
        subtitle: "Modèles d'engagement flexibles adaptés à votre parcours d'investissement",
        toggle: {
          monthly: "Mensuel",
          yearly: "Annuel",
          savePercent: "Économisez 20%"
        },
        plans: [
          {
            name: "Explorateur",
            description: "Parfait pour les investisseurs immobiliers débutants",
            price: "499 €",
            period: "/mois",
            yearlyPrice: "4 790 €",
            features: [
              "Rapports de marché mensuels",
              "Webinaires d'investissement trimestriels",
              "Accès au pipeline d'opportunités",
              "Outils de modélisation financière de base",
              "Support par email",
              "Accès au forum communautaire"
            ],
            cta: "Commencer l'Exploration",
            popular: false
          },
          {
            name: "Professionnel",
            description: "Conseil complet pour investisseurs actifs",
            price: "1 499 €",
            period: "/mois",
            yearlyPrice: "14 390 €",
            features: [
              "Tout ce qui est dans Explorateur",
              "Conseiller en investissement dédié",
              "Recherche de marché personnalisée",
              "Modélisation financière avancée",
              "Support de souscription par opportunité",
              "Accès prioritaire aux opportunités",
              "Sessions stratégiques trimestrielles",
              "Conseils en optimisation fiscale"
            ],
            cta: "Devenir Professionnel",
            popular: true
          },
          {
            name: "Institutionnel",
            description: "Service premium pour investisseurs sérieux",
            price: "Sur mesure",
            period: "tarification",
            yearlyPrice: "Nous Contacter",
            features: [
              "Tout ce qui est dans Professionnel",
              "Gestion complète du portefeuille",
              "Stratégies d'acquisition sur mesure",
              "Opportunités de co-investissement",
              "Suivi des performances au niveau des actifs",
              "Planification de stratégie de sortie",
              "Accès direct à l'équipe de direction",
              "Revue annuelle des performances"
            ],
            cta: "Nous Contacter",
            popular: false
          }
        ],
        trustBadges: [
          "Conseillers Certifiés RICS",
          "Plus de 50M€ Déployés",
          "Plus de 15 Ans d'Expérience",
          "98% de Satisfaction Client"
        ]
      },
      caseStudies: {
        title: "Histoires de Succès en Investissement",
        subtitle: "Résultats réels de clients qui se sont associés avec nous",
        items: [
          {
            name: "Portefeuille Investisseur Privé",
            location: "Bruxelles & Anvers",
            category: "Résidentiel Multi-Familial",
            challenge: "Particulier fortuné cherchant à diversifier sa richesse dans l'immobilier belge avec un engagement de temps minimal.",
            solution: "Nous avons identifié trois propriétés multi-familiales sous-évaluées dans des quartiers émergents, géré les rénovations et sécurisé des locataires à long terme.",
            results: [
              {
                label: "Valeur du Portefeuille",
                value: "2,4M €"
              },
              {
                label: "ROI Net",
                value: "+18% annuel"
              },
              {
                label: "Cash-on-Cash",
                value: "12,5%"
              }
            ],
            testimonial: "Les connaissances du marché et les capacités d'exécution de Switch Invest sont exceptionnelles. Ils ont rendu l'investissement immobilier sans effort."
          },
          {
            name: "Fonds Family Office",
            location: "Gand",
            category: "Bureaux Commerciaux",
            challenge: "Family office souhaitant une exposition à l'immobilier commercial mais manquant d'expertise locale du marché et de capacités opérationnelles.",
            solution: "Nous avons sourcé et souscrit un immeuble de bureaux de classe B avec potentiel de repositionnement, exécuté une rénovation à valeur ajoutée et reloué aux loyers du marché.",
            results: [
              {
                label: "Acquisition",
                value: "3,8M €"
              },
              {
                label: "Valeur Actuelle",
                value: "5,1M €"
              },
              {
                label: "TRI",
                value: "22%"
              }
            ],
            testimonial: "Leur approche institutionnelle combinée à des perspectives locales a généré des rendements au-delà de nos attentes."
          }
        ]
      },
      faqs: {
        title: "FAQ Investissement",
        subtitle: "Questions courantes sur l'investissement avec SwitchInvest",
        searchPlaceholder: "Rechercher des questions...",
        stillHaveQuestions: "Besoin de plus d'informations?",
        contactUs: "Planifiez une consultation avec notre équipe d'investissement",
        items: [
          {
            question: "Quel est le montant d'investissement minimum?",
            answer: "Notre seuil d'investissement minimum varie selon le type d'opportunité. Pour les investissements directs dans des propriétés, nous travaillons généralement avec des investisseurs engageant 250 000 € ou plus. Pour les opportunités de co-investissement, les minimums peuvent être inférieurs."
          },
          {
            question: "Sur quels types de propriétés vous concentrez-vous?",
            answer: "Nous investissons dans le résidentiel (multi-familial, appartements), le commercial (bureaux, commerce) et les propriétés à usage mixte. Notre focus est sur les opportunités à valeur ajoutée dans les principaux marchés urbains de Belgique."
          },
          {
            question: "Comment identifiez-vous les opportunités d'investissement?",
            answer: "Nous utilisons une combinaison d'analyses de marché propriétaires, de relations étendues avec les courtiers, de sourcing d'offres hors marché et d'expertise locale sur le terrain pour identifier les opportunités avant qu'elles ne soient largement connues."
          },
          {
            question: "Quels rendements puis-je espérer?",
            answer: "Les rendements cibles varient selon la classe d'actifs et la stratégie. Historiquement, nos investissements à valeur ajoutée ont généré un TRI de 15-25%, tandis que les propriétés de revenus stabilisées rapportent 8-12% annuellement. Les performances passées ne garantissent pas les résultats futurs."
          },
          {
            question: "À quel point dois-je être impliqué?",
            answer: "Aussi peu ou autant que vous le souhaitez. De nombreux clients choisissent notre approche de gestion complète où nous gérons tout, de l'acquisition à la gestion d'actifs. D'autres préfèrent une approche plus collaborative."
          },
          {
            question: "Quels sont vos frais?",
            answer: "Notre structure de frais dépend du modèle d'engagement. Les frais de conseil varient de 1 à 2% du capital investi annuellement, avec des frais de performance potentiels sur les sorties réussies. Nous fournissons une transparence totale sur tous les coûts."
          }
        ]
      }
    },
    development: {
      title: "Rénovations clés en main",
      description: "Nous gérons toutes les rénovations de A à Z—maximisant la valeur de votre bien et minimisant votre stress.",
      features: [
        "Gestion complète du projet",
        "Exécution axée sur la qualité",
        "Améliorations rentables",
        "Coordination fluide"
      ],
      hero: {
        title: "Développement Immobilier Clés en Main",
        subtitle: "Gestion Complète de Rénovation de la Vision à la Réalité",
        description: "Transformez votre propriété avec nos services de développement complets. Nous gérons la conception, les permis, la coordination des entrepreneurs et le contrôle qualité—livrant des résultats exceptionnels dans les délais et le budget.",
        cta: "Démarrer Votre Projet",
        benefits: [
          "Gestion complète du projet",
          "Réseau d'architectes agréés",
          "Partenariats avec entrepreneurs de confiance",
          "Contrôle qualité et inspections",
          "Budgétisation transparente",
          "Garantie de livraison dans les délais"
        ]
      },
      process: {
        title: "Notre Processus de Développement",
        subtitle: "Exécution rationalisée du concept à l'achèvement",
        steps: [
          {
            title: "Vision et Planification",
            description: "Nous évaluons votre propriété, discutons de vos objectifs et créons un plan de développement complet avec une portée, un calendrier et un budget détaillés."
          },
          {
            title: "Conception et Permis",
            description: "Nos architectes créent des conceptions belles et fonctionnelles tandis que nous naviguons dans tous les permis, approbations de zonage et exigences réglementaires."
          },
          {
            title: "Sélection d'Entrepreneurs",
            description: "Nous exploitons notre réseau d'entrepreneurs vérifiés et agréés pour garantir des prix compétitifs et un savoir-faire de qualité."
          },
          {
            title: "Gestion de Construction",
            description: "Nos chefs de projet supervisent les opérations quotidiennes, effectuent des inspections de qualité et vous tiennent informé des jalons de progression."
          },
          {
            title: "Livraison Finale",
            description: "Nous effectuons des inspections finales, résolvons tous les éléments de liste de punch et livrons une propriété magnifiquement transformée."
          }
        ]
      },
      projectTypes: {
        title: "Types de Projets que Nous Gérons",
        subtitle: "Des mises à jour cosmétiques à la construction neuve",
        types: [
          {
            title: "Rénovations Résidentielles",
            description: "Rénovations de cuisines et salles de bains, mises à jour intérieures, améliorations extérieures et transformations complètes de maisons.",
            icon: "home"
          },
          {
            title: "Aménagements Commerciaux",
            description: "Aménagements de bureaux, espaces de vente au détail, conversions de restaurants et développements à usage mixte.",
            icon: "building"
          },
          {
            title: "Restaurations Historiques",
            description: "Rénovations sensibles de propriétés patrimoniales équilibrant préservation et fonctionnalité moderne.",
            icon: "landmark"
          },
          {
            title: "Améliorations Durables",
            description: "Systèmes éco-énergétiques, installations solaires, améliorations d'isolation et certifications de bâtiments verts.",
            icon: "leaf"
          }
        ]
      },
      caseStudies: {
        title: "Portefeuille de Développement",
        subtitle: "Projets récents mettant en valeur nos capacités",
        items: [
          {
            name: "Restauration de Maison de Ville Historique",
            location: "Bruxelles",
            category: "Rénovation Résidentielle",
            challenge: "Maison de ville du 19e siècle nécessitant des travaux structurels importants tout en maintenant le caractère historique et en se conformant aux réglementations patrimoniales.",
            solution: "Coordonné avec la commission du patrimoine, renforcé les fondations, mis à jour tous les systèmes et restauré les détails architecturaux d'origine tout en ajoutant des équipements modernes.",
            results: [
              {
                label: "Délai",
                value: "8 mois"
              },
              {
                label: "Budget",
                value: "425 000 €"
              },
              {
                label: "Augmentation de Valeur",
                value: "+45%"
              }
            ],
            testimonial: "Ils ont respecté l'histoire de la maison tout en la rendant parfaite pour la vie moderne. Savoir-faire exceptionnel."
          },
          {
            name: "Conversion d'Espace de Bureaux",
            location: "Anvers",
            category: "Développement Commercial",
            challenge: "Conversion d'un immeuble de bureaux obsolète en espace de travail moderne et flexible avec certifications de durabilité.",
            solution: "Démolition intérieure complète, nouveaux systèmes CVC et d'éclairage, conception à plan ouvert et mise en œuvre de technologies éco-énergétiques.",
            results: [
              {
                label: "Superficie",
                value: "2 400 m²"
              },
              {
                label: "Délai",
                value: "6 mois"
              },
              {
                label: "Certification BREEAM",
                value: "Excellent"
              }
            ],
            testimonial: "Exécution professionnelle et communication constante. L'espace a dépassé nos attentes."
          }
        ]
      },
      faqs: {
        title: "FAQ Développement",
        subtitle: "Questions courantes sur nos services de rénovation et de développement",
        searchPlaceholder: "Rechercher des questions...",
        stillHaveQuestions: "Vous avez des questions spécifiques?",
        contactUs: "Parlez avec notre équipe de développement",
        items: [
          {
            question: "Combien coûte une rénovation typique?",
            answer: "Les coûts varient considérablement en fonction de la portée, de la taille et des finitions. Les mises à jour cosmétiques légères pourraient commencer autour de 500-800 €/m², tandis que les rénovations complètes varient généralement de 1 200 à 2 000 €/m². Nous fournissons des estimations détaillées après la consultation initiale."
          },
          {
            question: "Combien de temps prend un projet de rénovation?",
            answer: "Le calendrier dépend de la portée et de la complexité du projet. Les mises à jour mineures peuvent prendre 4 à 8 semaines, tandis que les rénovations majeures nécessitent généralement 4 à 8 mois. Nous fournissons un calendrier détaillé pendant la phase de planification."
          },
          {
            question: "Gérez-vous les permis et les approbations?",
            answer: "Oui, nous gérons tous les permis, approbations de zonage et conformité réglementaire. Notre équipe a une vaste expérience dans la navigation des exigences belges et locales."
          },
          {
            question: "Puis-je rester chez moi pendant la rénovation?",
            answer: "Cela dépend de la portée. Pour les projets mineurs (comme une rénovation de salle de bain), c'est souvent possible. Pour les rénovations majeures, nous recommandons généralement une relocalisation temporaire pour la sécurité et l'efficacité."
          },
          {
            question: "Que se passe-t-il si le projet dépasse le budget?",
            answer: "Nous fournissons des budgets détaillés à l'avance et suivons les coûts de près. Tout dépassement potentiel est communiqué immédiatement avec des options présentées. Nos contrats incluent des conditions claires pour gérer les changements de portée."
          },
          {
            question: "Offrez-vous des garanties sur vos travaux?",
            answer: "Oui, tous nos travaux sont soutenus par des garanties complètes. Les travaux structurels comportent une garantie de 10 ans et les finitions sont garanties pour 2 à 5 ans selon la portée."
          }
        ]
      }
    },
    management: {
      title: "Gestion complète des actifs",
      description: "Gérance globale assurant conformité, transparence et rendements durables sur vos investissements.",
      features: [
        "Reporting financier transparent",
        "Coordination proactive de la maintenance",
        "Relations locataires & support à la location",
        "Conformité réglementaire"
      ],
      hero: {
        title: "Gestion Complète des Actifs",
        subtitle: "Gestion Immobilière Professionnelle pour des Rendements Maximaux",
        description: "Protégez et développez vos investissements immobiliers avec notre gestion immobilière complète. Nous gérons tout, de la placement des locataires à la maintenance, au reporting financier et à la conformité réglementaire—pour que vous puissiez profiter de revenus passifs en toute tranquillité.",
        cta: "Obtenir une Proposition de Gestion",
        benefits: [
          "Sélection professionnelle des locataires",
          "Coordination de maintenance 24/7",
          "Reporting financier transparent",
          "Conformité réglementaire et juridique",
          "Collecte de loyers et comptabilité",
          "Inspections et entretien de propriété"
        ]
      },
      process: {
        title: "Notre Processus de Gestion",
        subtitle: "Supervision complète du placement des locataires à l'optimisation financière",
        steps: [
          {
            title: "Intégration de Propriété",
            description: "Nous effectuons une évaluation complète de la propriété, fixons des loyers compétitifs et créons un plan de gestion personnalisé aligné avec vos objectifs."
          },
          {
            title: "Placement de Locataires",
            description: "Notre équipe commercialise votre propriété, sélectionne rigoureusement les candidats et place des locataires qualifiés avec des baux complets."
          },
          {
            title: "Opérations Courantes",
            description: "Nous gérons la collecte des loyers, les demandes de maintenance, les inspections de propriété et la coordination des fournisseurs avec un support locataire 24/7."
          },
          {
            title: "Reporting Financier",
            description: "Recevez des relevés mensuels détaillés, suivez les revenus et dépenses et accédez aux données financières en temps réel via notre portail propriétaire."
          },
          {
            title: "Optimisation Stratégique",
            description: "Nous surveillons en continu les conditions du marché, recommandons des améliorations à valeur ajoutée et optimisons les opérations pour des rendements maximaux."
          }
        ]
      },
      pricing: {
        title: "Forfaits de Gestion Immobilière",
        subtitle: "Plans flexibles conçus pour différents besoins d'investisseurs",
        toggle: {
          monthly: "Par Mois",
          yearly: "Contrat Annuel",
          savePercent: "Économisez 10%"
        },
        plans: [
          {
            name: "Essentiel",
            description: "Services de gestion de base pour propriétaires actifs",
            price: "6%",
            period: "du loyer mensuel",
            yearlyPrice: "5,4% avec contrat annuel",
            features: [
              "Sélection et placement de locataires",
              "Collecte et versement de loyers",
              "Coordination de maintenance de base",
              "Relevés financiers mensuels",
              "Support par email (heures ouvrables)",
              "Inspection annuelle de propriété"
            ],
            cta: "Commencer",
            popular: false
          },
          {
            name: "Professionnel",
            description: "Gestion complète pour investisseurs occupés",
            price: "8%",
            period: "du loyer mensuel",
            yearlyPrice: "7,2% avec contrat annuel",
            features: [
              "Tout ce qui est dans Essentiel",
              "Maintenance d'urgence 24/7",
              "Inspections trimestrielles de propriété",
              "Gestion de renouvellement de bail",
              "Réseau et coordination de fournisseurs",
              "Accès au portail propriétaire en ligne",
              "Reporting annuel détaillé",
              "Support téléphone et email"
            ],
            cta: "Plus Populaire",
            popular: true
          },
          {
            name: "Premium",
            description: "Service haut de gamme pour propriétés de luxe",
            price: "10%",
            period: "du loyer mensuel",
            yearlyPrice: "9% avec contrat annuel",
            features: [
              "Tout ce qui est dans Professionnel",
              "Gestionnaire de propriété dédié",
              "Inspections mensuelles de propriété",
              "Programmes de maintenance préventive",
              "Planification d'améliorations de capital",
              "Préparation de documents fiscaux",
              "Réponse prioritaire des fournisseurs",
              "Services de conciergerie pour locataires"
            ],
            cta: "Nous Contacter",
            popular: false
          }
        ],
        trustBadges: [
          "Certifié FEDERA",
          "Entièrement Assuré",
          "Plus de 1 000 Unités Gérées",
          "99% de Taux de Collecte de Loyers"
        ]
      },
      caseStudies: {
        title: "Histoires de Succès en Gestion",
        subtitle: "Comment nous avons aidé les propriétaires à maximiser les rendements",
        items: [
          {
            name: "Portefeuille Multi-Familial",
            location: "Bruxelles",
            category: "Gestion Résidentielle",
            challenge: "Propriétaire gérant à distance un immeuble de 12 unités avec taux de vacance élevé, rotation fréquente et problèmes de maintenance impactant la rentabilité.",
            solution: "Mise en place de sélection professionnelle de locataires, programmes de maintenance proactive et stratégie de prix compétitive pour stabiliser l'occupation et réduire les coûts.",
            results: [
              {
                label: "Taux d'Occupation",
                value: "95% → 100%"
              },
              {
                label: "Coûts de Maintenance",
                value: "-30%"
              },
              {
                label: "Augmentation NOI",
                value: "+25%"
              }
            ],
            testimonial: "Ils ont transformé mon actif sous-performant en un producteur de revenus stable. Je ne pourrais pas être plus satisfait."
          },
          {
            name: "Immeuble de Bureaux Commercial",
            location: "Anvers",
            category: "Gestion Commerciale",
            challenge: "Immeuble de bureaux de classe A avec 40% de vacance, systèmes vieillissants et manque de gestion professionnelle réduisant la valeur de l'actif.",
            solution: "Repositionnement complet incluant améliorations de capital ciblées, location professionnelle et services locataires améliorés.",
            results: [
              {
                label: "Vacance",
                value: "40% → 8%"
              },
              {
                label: "Loyer/m²",
                value: "+15%"
              },
              {
                label: "Valeur de l'Actif",
                value: "+1,2M €"
              }
            ],
            testimonial: "Leur expertise commerciale et relations avec les locataires ont redonné vie à notre immeuble."
          }
        ]
      },
      faqs: {
        title: "FAQ Gestion",
        subtitle: "Tout ce que vous devez savoir sur nos services de gestion immobilière",
        searchPlaceholder: "Rechercher des questions...",
        stillHaveQuestions: "Vous avez encore des questions?",
        contactUs: "Parlez avec un spécialiste en gestion immobilière",
        items: [
          {
            question: "Quels types de propriétés gérez-vous?",
            answer: "Nous gérons des propriétés résidentielles (unifamiliales, multi-familiales, appartements), commerciales (bureaux, commerce) et à usage mixte dans toute la Belgique. Notre équipe a une expertise dans toutes les classes d'actifs."
          },
          {
            question: "Comment sélectionnez-vous les locataires?",
            answer: "Notre sélection complète inclut vérification de crédit, vérification d'emploi, examen d'historique locatif, vérification de références et vérification de revenus. Nous n'approuvons que les locataires qui répondent à nos critères stricts."
          },
          {
            question: "Dans quel délai répondez-vous aux problèmes de maintenance?",
            answer: "Les demandes de maintenance d'urgence reçoivent une réponse immédiate (24/7). La maintenance de routine est généralement traitée sous 24 à 48 heures. Nous avons un réseau d'entrepreneurs vérifiés prêts à intervenir."
          },
          {
            question: "Quand reçois-je mes revenus locatifs?",
            answer: "Nous versons les produits aux propriétaires avant le 10 de chaque mois par virement direct. Vous recevrez un relevé détaillé montrant tous les revenus, dépenses et votre distribution nette."
          },
          {
            question: "Quels sont vos frais de gestion?",
            answer: "Nos frais varient de 6 à 10% du loyer mensuel selon le niveau de service et le type de propriété. Il n'y a pas de frais cachés—tous les coûts sont transparents et détaillés dans notre accord de gestion."
          },
          {
            question: "Puis-je résilier l'accord de gestion?",
            answer: "Oui, nos accords ont généralement des clauses de résiliation de 30 à 60 jours. Nous croyons qu'il faut mériter votre confiance chaque mois grâce à un service exceptionnel."
          },
          {
            question: "Gérez-vous les expulsions?",
            answer: "Oui, si nécessaire, nous gérons l'ensemble du processus d'expulsion incluant les dépôts juridiques, la représentation en justice et la récupération de propriété en conformité avec la loi belge."
          },
          {
            question: "Comment accéder aux rapports financiers?",
            answer: "Tous les clients reçoivent des relevés financiers mensuels par email et ont un accès 24/7 à notre portail propriétaire en ligne où vous pouvez consulter les données financières en temps réel, les dossiers de maintenance et les documents de propriété."
          }
        ]
      }
    }
  },
  process: {
    title: "Comment ça fonctionne",
    steps: [
      { title: "Étape 1 : Donnez-nous les détails de votre bien", description: "Remplissez notre formulaire en ligne rapide ou appelez-nous avec les détails de votre bien : adresse, type, superficie et état." },
      { title: "Étape 2 : Recevez votre offre rapide", description: "Recevez sous 24 à 48 heures une offre transparente, basée sur des données réelles du marché et sans déductions cachées." },
      { title: "Étape 3 : Choisissez votre date de clôture", description: "Choisissez une date de clôture dès 7 jours ou jusqu’à 30 jours – selon votre convenance. Nous nous occupons de toutes les formalités légales et des frais de notaire." },
      { title: "Étape 4 : Nous gérons tout", description: "Nous achetons votre bien en l’état, gérons les rénovations et versons les fonds – sans agents, sans surprises." }
    ]
  },
  why_choose_us: {
    title: "Pourquoi Switch Invest ?",
    items: [
      { title: "Clôtures rapides", description: "De l’offre à la clôture en seulement 7 jours – sans retards ni obstacles de financement." },
      { title: "Sans agent", description: "Pas de mise en scène, pas de visites et zéro frais d’agent." },
      { title: "Offres transparentes", description: "Comprenez comment nous calculons votre offre – pas de frais cachés ou de déductions." },
      { title: "Service tout inclus", description: "Nous achetons en l’état, gérons les rénovations et nous occupons de tout pour vous." },
      { title: "Expertise locale", description: "Une connaissance approfondie du marché belge pour maximiser la valeur de votre bien." }
    ]
  },
  audience: {
    title: "Qui peut en bénéficier",
    items: [
      { title: "Retraités", description: "Vous souhaitez réduire votre surface et débloquer des fonds pour votre retraite ?" },
      { title: "Ayants droit", description: "Vous avez hérité d’un bien que vous ne souhaitez pas gérer ? Convertissez-le rapidement en liquide." },
      { title: "Propriétaires de bien à rénover", description: "Vous possédez un bien nécessitant des réparations ? Nous achetons en l’état pour que vous ne payiez pas de frais de rénovation coûteux." },
      { title: "Transitions de vie", description: "Utilisez la valeur de votre bien pour lancer une entreprise, financer vos études ou déménager." }
    ]
  },
  concerns: {
    title: "Répondre aux préoccupations courantes",
    items: [
      { myth: "Les sociétés d'achat rapide proposent des prix trop bas.", reality: "Nos offres reflètent la véritable valeur du marché moins les coûts de rénovation que nous couvrons." },
      { myth: "Vendre à une entreprise est compliqué.", reality: "Nous prenons en charge tous les documents et rendez-vous—vous n'avez qu'à signer une seule fois." }
    ]
  },
  cta: {
    title: "Prêt à libérer la valeur de votre maison ? Obtenez votre offre sans obligation dès maintenant !",
    tagline: "Rapide. Juste. Sans tracas.",
    subtitle: "Recevez une offre claire et concluez selon votre calendrier — sans agents, sans réparations, sans frais cachés.",
    primaryButton: "Soumettez votre adresse en 2 minutes →",
    secondaryText: "Des questions ? Appelez-nous au +32 2 123 45 67 ou envoyez un email à info@switchinvest.be",
    consultation: "Planifiez votre consultation",
    explore: "Découvrez nos services"
  },
  testimonials: [
    { client: "Marie, 68 (Retraitée)", quote: "Après le décès de mon mari, notre maison me paraissait vide. Switch Invest m'a fait une offre juste en 24 heures. Deux semaines plus tard, j'étais en route pour l'Italie. Meilleure décision de ma vie !" },
    { client: "Luc & Anouk (Jeune Famille)", quote: "Nous avons hérité d'une maison en ruine de mon oncle. Switch Invest l'a achetée en l'état, et maintenant nous utilisons l'argent pour le fonds d'études de notre fille." },
    { client: "Ahmed (Entrepreneur)", quote: "J'ai vendu mon appartement à Bruxelles pour financer ma startup. Aucun regret – le processus a été sans accroc !" }
  ],
  renovation_transparency: {
    title: "Que devient votre bien après la vente ?",
    renovationScope: [
      "Réparations structurelles (toiture, plomberie, électricité).",
      "Modernisation (cuisines, salles de bains, revêtements de sol).",
      "Améliorations éco-responsables (isolation, panneaux solaires)."
    ],
    communityImpact: "Nous revitalisons les quartiers en transformant des biens négligés en logements modernes et sûrs pour de nouvelles familles."
  },
  faqs: [
    { question: "Facturez-vous des frais ?", answer: "Non. Notre offre est tout compris – pas de commissions, frais de clôture ou charges cachées." },
    { question: "Que se passe-t-il si ma maison a des dégâts ou de la moisissure ?", answer: "Nous achetons des biens en l’état. Vous ne payez pas pour les réparations." },
    { question: "Puis-je vendre une partie de mon bien ?", answer: "Oui ! Nous achetons aussi des terrains, copropriétés ou biens co-hérités." },
    { question: "Comment savoir si votre offre est équitable ?", answer: "Nous fournissons un détail de notre évaluation. Comparez-le aux rapports de marché locaux !" }
  ],
  portfolio: {
    title: "Actifs d'Exception sous Gestion",
    subtitle: "Une sélection de nos propriétés gérées et développées avec succès à travers la Belgique",
    explore: "Découvrez notre travail",
    filterTitle: "Filtrer par catégorie de propriété",
    searchPlaceholder: "Rechercher des projets...",
    showingResults: "Affichage des propriétés",
    viewDetails: "Voir les détails",
    filters: {
      all: "Tous les projets",
      residential: "Résidentiel",
      commercial: "Commercial",
      mixed: "Usage mixte"
    },
    categories: {
      residential: "Résidentiel",
      commercial: "Commercial",
      mixed: "Usage mixte"
    },
    status: {
      completed: "Terminé",
      inProgress: "En cours",
      active: "Actif"
    },
    stats: {
      projects: "Propriétés",
      regions: "Régions",
      years: "Années"
    },
    noResults: {
      title: "Aucun projet trouvé",
      description: "Essayez d'ajuster vos critères de recherche ou de filtre pour trouver ce que vous cherchez.",
      reset: "Réinitialiser les filtres"
    },
    cta: {
      label: "Opportunités d'investissement",
      title: "Intéressé par un investissement avec nous ?",
      description: "Notre expertise du marché immobilier belge nous permet d'identifier et de développer des propriétés à fort potentiel. Contactez-nous pour discuter des opportunités d'investissement.",
      contactButton: "Nous contacter",
      servicesButton: "Nos services"
    },
    items: [
      {
        title: "Étoile Residences",
        description: "Transformation d’un patrimoine historique sous-performant en résidences de luxe dans un quartier prisé. SwitchInvest a navigué à travers des contraintes patrimoniales complexes et mené un programme de rénovation rigoureux, offrant une qualité exceptionnelle et attirant une clientèle internationale exigeante.",
        location: "Bruxelles",
        type: "Résidentiel",
        size: "6 000 m²",
        achievements: [
          "Taux d’occupation de 100 % atteint sous 3 mois après livraison.",
          "Valeurs locatives alignées sur les niveaux de référence du quartier.",
          "Distinction architecturale pour la restauration sensible et l’intégration d’équipements modernes."
        ],
        beforeAfter: {
          vacancyRate: "Avant : 75 % → Après : 0 %",
          appreciation: "Valorisation +40 % post-rénovation"
        }
      },
      {
        title: "Portside Business Centre",
        description: "Repositionnement stratégique d’un immeuble commercial vieillissant en un pôle de bureaux Class A au cœur d’un hub économique. SwitchInvest a orchestré une refonte complète axée sur la durabilité (certification BREEAM), l’intégration de technologies intelligentes et des prestations haut de gamme pour les locataires.",
        location: "Anvers",
        type: "Commercial (Bureaux)",
        size: "15 500 m²",
        achievements: [
          "Certification BREEAM Excellent obtenue pour la conception et l’exploitation durables.",
          "Contrats de location long terme signés avec deux locataires multinationales avant même l’achèvement.",
          "Efficacité opérationnelle et connectivité numérique de l’immeuble nettement améliorées."
        ],
        beforeAfter: {
          energyConsumption: "Avant : 245 kWh/m²/an → Après : 85 kWh/m²/an",
          vacancyRate: "Avant : 60 % → Après : 5 % (pleinement loué à l’achèvement)"
        }
      },
      {
        title: "North Sea Gateway Logistics",
        description: "Optimisation et extension ciblée d’une plate-forme logistique stratégique pour répondre aux exigences modernes du e-commerce et de la distribution. SwitchInvest a supervisé les améliorations d’infrastructure et la refonte des flux, créant un hub ultraperformant et à la pointe de la technologie.",
        location: "Gand (Zone portuaire)",
        type: "Industriel (Logistique)",
        size: "42 000 m²",
        achievements: [
          "Capacité de traitement augmentée de plus de 30 % grâce à des améliorations de la disposition et de la technologie.",
          "Bail de 15 ans conclu avec un prestataire 3PL européen de premier plan.",
          "Mise en place de solutions d'automatisation réduisant significativement les coûts opérationnels."
        ],
        beforeAfter: {
          operationalCost: "Coûts de manutention – 18 %",
          vacancyRate: "Avant : 20 % (sections sous-utilisées) → Après : 0 % (pleinement loué, long terme)"
        }
      },
      {
        title: "The Sablon Quarters",
        description: "Réaménagement minutieux d’un immeuble à usage mixte dans une zone historique prestigieuse, conciliant préservation et modernité. SwitchInvest a orchestré un mélange de commerces haut de gamme, de bureaux exclusifs et d’appartements de luxe, rehaussant la qualité et la rentabilité de l’actif.",
        location: "Bruxelles",
        type: "Mixte (Retail, Bureaux, Résidentiel)",
        size: "9 500 m²",
        achievements: [
          "Attraction de marques de retail internationales premium en rez-de-chaussée.",
          "Location complète des locaux de bureaux et résidentiels aux tarifs du marché.",
          "Valorisation de l’attrait du bien par un design soigné et des finitions haut de gamme."
        ],
        beforeAfter: {
          rentalRate: "Loyer moyen/m² + 25 %",
          appreciation: "Valorisation globale + 35 %"
        }
      }
    ]
  },
  technologies: {
    title: "Technologies Avancées",
    subtitle: "Solutions Innovantes pour la Gestion Immobilière Moderne",
    items: [
      {
        section: "Gestion Immobilière Intelligente",
        features: [
          "Intégration de capteurs IoT (CVC, éclairage, sécurité)",
          "Algorithmes de maintenance prédictive",
          "Contrôles automatisés de l'efficacité énergétique"
        ],
        benefits: [
          "Coûts opérationnels réduits",
          "Confort accru des locataires",
          "Longévité améliorée des actifs"
        ]
      },
      {
        section: "Analyse de Données & Perspectives",
        features: [
          "Analyse des tendances du marché par IA",
          "Modèles de prévision d'investissement",
          "Algorithmes d'optimisation de portefeuille"
        ],
        benefits: [
          "Prise de décision basée sur les données",
          "Risque de marché minimisé",
          "Rentabilité accrue"
        ]
      },
      {
        section: "Portail Client",
        features: [
          "Accès sécurisé 24/7",
          "Suite de gestion documentaire",
          "Suivi financier en direct"
        ],
        benefits: [
          "Transparence totale",
          "Commodité sans effort",
          "Contrôle renforcé"
        ]
      }
    ]
  },
  innovation: {
    title: "Faire Progresser l'Immobilier",
    subtitle: "Notre Engagement envers l'Amélioration Continue et les Solutions de Pointe",
    technologies: {
      items: [
        {
          key: "technologies.items.0",
          title: "Développement Durable",
          description: "Mise en œuvre de pratiques et technologies de construction écologique pour minimiser l'impact environnemental et améliorer la valeur à long terme."
        },
        {
          key: "technologies.items.1",
          title: "Technologie du Jumeau Numérique",
          description: "Création de répliques virtuelles des propriétés pour une simulation, une surveillance et une planification opérationnelle avancées."
        },
        {
          key: "technologies.items.2",
          title: "Expérience Locataire Améliorée par l'IA",
          description: "Utilisation de l'intelligence artificielle pour personnaliser les services aux locataires, prédire les besoins et optimiser l'utilisation des bâtiments."
        }
      ]
    }
  },
  about: {
    title: "À propos de nous",
    heroSubtitle: "Excellence en Immobilier Belge Depuis 2010",
    description: "Depuis 2010, SwitchInvest permet aux propriétaires belges de libérer rapidement et sans effort la valeur de leur bien. Nous achetons en l'état avec des offres claires sous 24–48 heures, gérons des rénovations clés en main et apportons une gestion stratégique des actifs—assurant conformité, exécution fluide et rendements maximaux pour nos clients.",
    storyTitle: "Notre Histoire",
    mission: "Offrir à notre clientèle d'exception une gestion immobilière intégrale et irréprochable, optimisant les performances et cimentant la confiance.",
    missionTitle: "Mission",
    vision: "Devenir la référence incontestée en gestion immobilière premium, reconnue pour notre intégrité inébranlable, notre vision stratégique et notre excellence discrète.",
    visionTitle: "Vision",
    values: {
      title: "Nos Valeurs",
      items: [
        "Excellence",
        "Intégrité",
        "Innovation",
        "Discrétion"
      ]
    },
    valuesSubtitle: "Les principes qui guident tout ce que nous faisons",
    stats: {
      experience: "Années d'Expérience",
      properties: "Propriétés Gérées",
      assets: "Actifs Sous Gestion",
      satisfaction: "Satisfaction Client"
    },
    ctaTitle: "Prêt à Travailler Avec Nous ?",
    ctaSubtitle: "Discutons de la manière dont nous pouvons vous aider à libérer la valeur de votre propriété",
    ctaContactButton: "Contactez-Nous Aujourd'hui",
    ctaServicesButton: "Voir Nos Services",
    team: [
      {
        name: "Sophie Van den Berg",
        position: "Directrice Générale",
        expertise: "Leadership stratégique en gestion de biens de prestige et institutionnels.",
        experience: "Plus de 15 ans à piloter des portefeuilles immobiliers haut de gamme en Europe.",
        specialty: "Leadership Stratégique",
        specialties: ["Planification Stratégique", "Croissance de Portefeuille", "Expansion de Marché"]
      },
      {
        name: "Lucas De Wilde",
        position: "Directeur Financier",
        expertise: "Structuration financière et optimisation de la performance d'actifs de grande valeur.",
        experience: "Plus de 12 ans en finance immobilière, assurant des rendements solides pour une clientèle institutionnelle.",
        specialty: "Stratégie Financière",
        specialties: ["Modélisation Financière", "Gestion des Risques", "Analyse d'Investissement"]
      },
      {
        name: "Emma Willems",
        position: "Responsable Asset Management",
        expertise: "Supervision complète des actifs, de l'acquisition aux projets de valorisation.",
        experience: "Plus de 10 ans de gestion de classes d'actifs variées et de croissance pérenne.",
        specialty: "Gestion d'Actifs",
        specialties: ["Opérations Immobilières", "Valorisation", "Planification de Capital"]
      },
      {
        name: "Antoine Dupont",
        position: "Directeur des Relations Clientèles",
        expertise: "Service client sur mesure, axé sur la confidentialité et des solutions personnalisées.",
        experience: "Plus de 8 ans à nouer des partenariats durables avec des particuliers fortunés et des institutions.",
        specialty: "Relations Clients",
        specialties: ["Conseil Client", "Gestion de Relations", "Excellence de Service"]
      },
      {
        name: "Isabelle Laurent",
        position: "Directrice du Développement",
        expertise: "Transformation de propriétés par la conception innovante et les pratiques de construction durable.",
        experience: "Plus de 14 ans à diriger des projets de rénovation complexes à travers la Belgique.",
        specialty: "Développement Immobilier",
        specialties: ["Gestion de Projet", "Conception Durable", "Restauration Historique"]
      },
      {
        name: "Thomas Vermeulen",
        position: "Directeur des Investissements",
        expertise: "Identification et exécution d'opportunités d'investissement à haut rendement dans l'immobilier belge.",
        experience: "Plus de 11 ans en investissement immobilier et analyse de marché.",
        specialty: "Stratégie d'Investissement",
        specialties: ["Sourcing d'Opportunités", "Analyse de Marché", "Diligence Raisonnable"]
      }
    ],
    timeline: {
      title: "Notre Parcours",
      subtitle: "Construire l'excellence dans l'immobilier belge depuis 2010",
      events: [
        {
          year: "2010",
          title: "Fondation de l'Entreprise",
          description: "SwitchInvest établie à Bruxelles avec une vision de transformer la gestion immobilière belge.",
          icon: "building"
        },
        {
          year: "2013",
          title: "Jalon de Portefeuille",
          description: "Atteint 50M€ d'actifs sous gestion, établissant la crédibilité sur le marché belge.",
          icon: "chart"
        },
        {
          year: "2016",
          title: "Expansion Géographique",
          description: "Extension des opérations à Anvers et Gand, devenant un acteur véritablement national.",
          icon: "map"
        },
        {
          year: "2019",
          title: "Leader de l'Innovation",
          description: "Lancement de la plateforme technologique propriétaire pour le suivi de portefeuille en temps réel et le reporting client.",
          icon: "tech"
        },
        {
          year: "2021",
          title: "Focus sur la Durabilité",
          description: "Engagement envers des opérations neutres en carbone et des certifications de bâtiments verts dans notre portefeuille.",
          icon: "leaf"
        },
        {
          year: "2023",
          title: "Reconnaissance de l'Industrie",
          description: "Nommée 'Entreprise de Gestion Immobilière de l'Année' par les Belgian Real Estate Excellence Awards.",
          icon: "award"
        }
      ],
      futureTitle: "Regard vers l'Avenir",
      futureDescription: "Nous investissons dans l'analytique immobilière pilotée par l'IA, élargissons nos initiatives de développement durable et continuons à établir la norme d'excellence dans l'immobilier belge."
    }
  },
  footer: {
    description: "Gérance complète pour les portefeuilles immobiliers exigeants en Belgique.",
    security: {
      gdpr: "Certifié RGPD",
      encryption: "Cryptage AES-256",
    },
    services: {
      title: "Services",
      portfolioAdmin: "Administration de Portefeuille",
      assetEnhancement: "Valorisation d'Actifs",
      proprietaryTech: "Technologies Propriétaires",
      compliance: "Solutions de Conformité",
    },
    company: {
      title: "Entreprise",
      about: "À Propos de Nous",
      leadership: "Direction",
      careers: "Carrières",
      contact: "Contact",
    },
    legal: {
      title: "Légal",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      cookies: "Politique de Cookies",
      gdpr: "Conformité RGPD",
    },
    copyright: "Tous droits réservés.",
    belgium: "Belgique",
  },
  languages: {
    nl: "Néerlandais",
    fr: "Français",
    de: "Allemand",
    en: "Anglais",
    regions: {
      flanders: "Flandre",
      wallonia: "Wallonie",
      brussels: "Bruxelles",
      german: "Communauté germanophone",
      "german-speaking community": "Communauté germanophone",
      international: "International",
    },
    mapRegions: {
      "flemish-community": "Communauté flamande",
      "french-community": "Communauté française",
      "german-speaking-community": "Communauté germanophone",
      "brussels-capital-region": "Région de Bruxelles-Capitale",
      "belgium": "Belgique"
    }
  },
  
  // Améliorations Portfolio
  portfolioEnhanced: {
    lightbox: {
      close: "Fermer",
      previous: "Précédent",
      next: "Suivant",
      details: "Détails du Projet",
      location: "Emplacement",
      type: "Type",
      size: "Superficie",
      status: "Statut",
      investment: "Investissement",
      roi: "ROI",
      timeline: "Calendrier",
      completion: "Date d'Achèvement",
      challenge: "Défi",
      solution: "Solution",
      results: "Résultats",
      features: "Caractéristiques Clés",
      gallery: "Galerie"
    }
  },
  // États de Chargement
  loading: {
    default: "Chargement...",
    page: "Chargement de la page...",
    content: "Chargement du contenu...",
    projects: "Chargement des projets...",
    services: "Chargement des services...",
    team: "Chargement des informations de l'équipe...",
    portfolio: "Chargement du portefeuille...",
    pleaseWait: "Veuillez patienter..."
  },
  // Messages d'Erreur
  errors: {
    general: {
      title: "Une Erreur s'est Produite",
      message: "Nous avons rencontré une erreur inattendue. Veuillez réessayer.",
      retry: "Réessayer",
      backHome: "Retour à l'Accueil",
      reportIssue: "Signaler ce Problème"
    },
    boundary: {
      title: "Oups ! Quelque Chose s'est Cassé",
      message: "Nous sommes désolés, mais quelque chose s'est mal passé lors du chargement de cette section. Notre équipe a été notifiée.",
      reset: "Réinitialiser la Section",
      home: "Aller à l'Accueil",
      support: "Contacter le Support"
    },
    network: {
      title: "Erreur de Connexion",
      message: "Impossible de se connecter au serveur. Veuillez vérifier votre connexion Internet et réessayer.",
      retry: "Réessayer la Connexion"
    },
    notAuthorized: {
      title: "Accès Refusé",
      message: "Vous n'avez pas la permission d'accéder à cette ressource.",
      login: "Se Connecter",
      home: "Aller à l'Accueil"
    }
  },
  // Page 404 Améliorée
  notFound: {
    title: "404 - Page Non Trouvée",
    subtitle: "Perdu dans le Labyrinthe Immobilier?",
    message: "La page que vous recherchez n'existe pas ou a été déplacée à un autre endroit.",
    backHome: "Retour à l'Accueil",
    popularPagesTitle: "Pages Populaires",
    needHelp: "Besoin d'aide?",
    contactTeam: "Contactez notre équipe",
    links: {
      home: "Accueil",
      services: "Services",
      portfolio: "Portefeuille",
      about: "À Propos",
      contact: "Contact",
      blog: "Blog"
    },
    help: {
      title: "Besoin d'Aide?",
      description: "Si vous pensez qu'il s'agit d'une erreur ou avez besoin d'aide pour trouver ce que vous cherchez:",
      contactSupport: "Contactez Notre Équipe",
      searchSite: "Rechercher sur Notre Site",
      viewSitemap: "Voir le Plan du Site"
    },
    suggestions: [
      "Vérifiez l'URL pour les fautes de frappe",
      "Utilisez le menu de navigation ci-dessus",
      "Recherchez ce dont vous avez besoin",
      "Visitez notre page d'accueil"
    ]
  },
  
  // Page Contact
  contact: {
    title: "Contactez-Nous",
    subtitle: "Nous sommes là pour répondre à vos questions sur les opportunités d'investissement immobilier en Belgique.",
    quickContact: "Contact Rapide",
    whatsapp: "Message instantané",
    clickToCall: "Cliquez pour appeler",
    clickToEmail: "Cliquez pour envoyer un email",
    clickToMap: "Cliquez pour voir sur la carte",
    form: {
      title: "Formulaire de Contact",
      name: "Nom Complet",
      email: "Adresse E-mail",
      phone: "Numéro de Téléphone",
      message: "Votre Message",
      submit: "Envoyer le Message",
      sending: "Envoi en cours..."
    },
    success: {
      title: "Message Envoyé avec Succès !",
      message: "Merci de nous avoir contactés. Notre équipe vous répondra dans les 24 à 48 heures.",
      newMessage: "Envoyer un Autre Message"
    },
    info: {
      phone: "Téléphone",
      email: "E-mail",
      address: "Adresse"
    }
  },
  
  // Consentement aux Cookies
  cookie: {
    title: "Consentement aux Cookies",
    message: "Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser le trafic du site. En cliquant sur \"Accepter\", vous consentez à notre utilisation des cookies telle que décrite dans notre",
    privacyPolicy: "Politique de Confidentialité",
    accept: "Accepter",
    decline: "Refuser"
  },
  
  // Confidentialité et Conditions
  privacy: {
    title: "Politique de Confidentialité"
  },
  terms: {
    title: "Conditions d'Utilisation"
  }
}
