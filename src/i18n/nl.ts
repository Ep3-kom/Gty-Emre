export const nl = {
  nav: {
    certificering: 'Certificering',
    certificeringAll: 'Alle certificeringen',
    partnerprogramma: 'Partnerprogramma',
    interneAudits: 'Interne audits',
    interneAuditsAll: 'Over interne audits',
    nulmeting: 'Nulmeting',
    rie: 'RI&E',
    academy: 'Academy',
    werkwijze: 'Werkwijze',
    overOns: 'Over GTY',
    contact: 'Contact',
    home: 'Home',
    primaryCta: 'Plan een gesprek',
  },
  footer: {
    address: 'Adres',
    phone: 'Telefoon',
    email: 'E-mail',
    navigation: 'Navigatie',
    services: 'Diensten',
    legal: 'Juridisch',
    privacy: 'Privacyverklaring',
    terms: 'Algemene voorwaarden',
    cookies: 'Cookiebeleid',
    disclaimer: 'Disclaimer',
    copyright: 'GTY. Alle rechten voorbehouden.',
    builtBy: 'Ontwerp en realisatie door Elevate Webdesign.',
  },
  cookieNotice: {
    text: 'Deze site gebruikt privacy-vriendelijke analytics zonder cookies. Lees onze privacyverklaring voor meer informatie.',
    dismiss: 'Sluiten',
    privacyHref: '/privacyverklaring/',
  },
  forms: {
    required: 'Verplicht',
    submit: 'Verstuur',
    privacy: 'Door dit formulier in te dienen, gaat u akkoord met onze privacyverklaring.',
    successTitle: 'Bedankt voor uw bericht.',
    successBody: 'We nemen binnen één werkdag contact met u op. Wilt u eerder spreken? Bel ons direct.',
    errorTitle: 'Er ging iets mis.',
    errorBody: 'Probeer het later nog eens, of stuur uw bericht direct naar info@gty.nl.',
  },
  common: {
    readMore: 'Lees verder',
    relatedNorms: 'Gerelateerde normen',
    backToOverview: 'Naar het overzicht',
  },
} as const;

export type Translations = typeof nl;
export const t = nl;
