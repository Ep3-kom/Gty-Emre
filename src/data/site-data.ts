export const siteData = {
  name: 'GTY',
  legalName: 'GTY',
  tagline: 'Zekerheid in certificering. Rust in compliance.',
  description:
    'GTY begeleidt Nederlandse organisaties bij certificering voor ISO 9001, ISO 14001, ISO 27001, HKZ en NEN 7510 — en zorgt dat het certificaat zijn waarde behoudt.',
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
    foundedYear: 2022,
    // TODO: vraag klant — KvK-nummer
    kvk: null,
    // TODO: vraag klant — BTW-nummer
    vat: null,
    // TODO: vraag klant — openingstijden contactlijn
    hours: null,
    // TODO: vraag klant — aantal trajecten / sectoren / aantal medewerkers (bewust niet ingevuld; zie brief)
    trajectsCompleted: null,
    sectorsServed: null,
  },
  services: [
    { slug: 'certificering', label: 'Certificering' },
    { slug: 'partnerprogramma', label: 'Partnerprogramma' },
    { slug: 'interne-audits', label: 'Interne audits' },
    { slug: 'academy', label: 'Academy' },
  ],
  cta: {
    primary: { label: 'Plan een kennismakingsgesprek', href: '/contact/' },
    secondary: { label: 'Start een kosteloze nulmeting', href: '/nulmeting/' },
  },
} as const;

export type SiteData = typeof siteData;
