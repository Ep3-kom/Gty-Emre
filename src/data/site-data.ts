export const siteData = {
  name: 'GTY',
  legalName: 'GTY',
  tagline: 'Zekerheid in certificering. Rust in compliance.',
  description:
    'GTY begeleidt Nederlandse organisaties bij certificering voor ISO 9001, ISO 14001, ISO 27001, HKZ, NEN 7510 en het Certificatieschema Arbodiensten, en zorgt dat het certificaat zijn waarde behoudt.',
  url: 'https://gty.nl',
  contact: {
    address: {
      street: "'s-Gravenweg 44",
      postal: '2901 LA',
      city: 'Capelle aan den IJssel',
      country: 'Nederland',
    },
    phone: '+31 6 36552241',
    phoneHref: 'tel:+31636552241',
    email: 'info@gty.nl',
    emailHref: 'mailto:info@gty.nl',
  },
  business: {
    foundedYear: 2025,
    experienceSinceYear: 2022,
    kvk: '87435950',
    vat: 'NL004413019B37',
    hours: 'Maandag t/m vrijdag · 09:00 – 17:00',
    trajectsCompleted: 3,
    trajectsInProgress: '6–7',
    sectorsServed: ['Zorg', 'IT', 'Arbodiensten', 'Beveiliging'],
  },
  services: [
    { slug: 'certificering', label: 'Certificering' },
    { slug: 'partnerprogramma', label: 'Partnerprogramma' },
    { slug: 'interne-audits', label: 'Interne audits' },
    { slug: 'academy', label: 'Academy' },
  ],
  cta: {
    primary: { label: 'Plan een kennismakingsgesprek', href: '/contact/' },
    secondary: { label: 'Start een kosteloze nulmeting', href: '/nulmeting/#aanvragen' },
  },
} as const;

export type SiteData = typeof siteData;
