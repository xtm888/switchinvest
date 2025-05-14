import { Translation } from './types';

export const fr: Translation = {
  valuation: {
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
  common: {
    home: "Accueil",
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
      title: "Achat rapide en espèces",
      description: "Obtenez une offre en espèces transparente sous 24–48 heures et concluez en seulement 7 jours—sans agents, sans frais cachés.",
      features: [
        "Offre en espèces sous 24–48 heures",
        "Choisissez votre date de clôture (7–30 jours)",
        "Achat en l’état—pas de mise en scène ni d’inspections",
        "Pas de frais cachés"
      ]
    },
    investment: {
      title: "Investissement immobilier stratégique",
      description: "Exploitez notre expertise locale et nos données de marché pour identifier des opportunités à haut rendement et optimiser votre portefeuille.",
      features: [
        "Analyse de marché approfondie",
        "Stratégies d'investissement ajustées au risque",
        "Optimisation des performances du portefeuille",
        "Croissance à long terme"
      ]
    },
    development: {
      title: "Rénovations clés en main",
      description: "Nous gérons toutes les rénovations de A à Z—maximisant la valeur de votre bien et minimisant votre stress.",
      features: [
        "Gestion complète du projet",
        "Exécution axée sur la qualité",
        "Améliorations rentables",
        "Coordination fluide"
      ]
    },
    management: {
      title: "Gestion complète des actifs",
      description: "Gérance globale assurant conformité, transparence et rendements durables sur vos investissements.",
      features: [
        "Reporting financier transparent",
        "Coordination proactive de la maintenance",
        "Relations locataires & support à la location",
        "Conformité réglementaire"
      ]
    }
  },
  process: {
    title: "Comment ça fonctionne",
    steps: [
      { title: "Étape 1 : Donnez-nous les détails de votre bien", description: "Remplissez notre formulaire en ligne rapide ou appelez-nous avec les détails de votre bien : adresse, type, superficie et état." },
      { title: "Étape 2 : Recevez votre offre rapide en espèces", description: "Recevez sous 24 à 48 heures une offre transparente, basée sur des données réelles du marché et sans déductions cachées." },
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
    title: "Prêt à libérer la valeur de votre maison ? Obtenez votre offre en espèces sans obligation dès maintenant !",
    tagline: "Rapide. Juste. Sans tracas.",
    subtitle: "Recevez une offre en espèces claire et concluez selon votre calendrier — sans agents, sans réparations, sans frais cachés.",
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
    description: "Depuis 2010, SwitchInvest permet aux propriétaires belges de libérer rapidement et sans effort la valeur de leur bien. Nous achetons en l’état avec des offres claires en espèces sous 24–48 heures, gérons des rénovations clés en main et apportons une gestion stratégique des actifs—assurant conformité, exécution fluide et rendements maximaux pour nos clients.",
    mission: "Offrir à notre clientèle d’exception une gestion immobilière intégrale et irréprochable, optimisant les performances et cimentant la confiance.",
    vision: "Devenir la référence incontestée en gestion immobilière premium, reconnue pour notre intégrité inébranlable, notre vision stratégique et notre excellence discrète.",
    values: {
      title: "Nos Valeurs",
      items: [
        "Excellence",
        "Intégrité",
        "Innovation",
        "Discrétion"
      ]
    },
    team: [
      {
        name: "Sophie Van den Berg",
        position: "Directrice Générale",
        expertise: "Leadership stratégique en gestion de biens de prestige et institutionnels.",
        experience: "Plus de 15 ans à piloter des portefeuilles immobiliers haut de gamme en Europe."
      },
      {
        name: "Lucas De Wilde",
        position: "Directeur Financier",
        expertise: "Structuration financière et optimisation de la performance d’actifs de grande valeur.",
        experience: "Plus de 12 ans en finance immobilière, assurant des rendements solides pour une clientèle institutionnelle."
      },
      {
        name: "Emma Willems",
        position: "Responsable Asset Management",
        expertise: "Supervision complète des actifs, de l’acquisition aux projets de valorisation.",
        experience: "Plus de 10 ans de gestion de classes d’actifs variées et de croissance pérenne."
      },
      {
        name: "Antoine Dupont",
        position: "Directeur des Relations Clientèles",
        expertise: "Service client sur mesure, axé sur la confidentialité et des solutions personnalisées.",
        experience: "Plus de 8 ans à nouer des partenariats durables avec des particuliers fortunés et des institutions."
      }
    ]
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
  
  // Page 404
  notFound: {
    title: "Page Non Trouvée",
    message: "La page que vous recherchez n'existe pas ou a été déplacée à un autre endroit.",
    backHome: "Retour à l'Accueil"
  },
  
  // Page Contact
  contact: {
    title: "Contactez-Nous",
    subtitle: "Nous sommes là pour répondre à vos questions sur les opportunités d'investissement immobilier en Belgique.",
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
