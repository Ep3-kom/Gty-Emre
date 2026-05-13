export type Norm = {
  slug: string;
  code: string;
  title: string;
  shortTitle: string;
  category: 'kwaliteit' | 'milieu' | 'informatiebeveiliging' | 'zorg' | 'arbo';
  audience: string;
  doorlooptijd: string;
  auditFrequentie: string;
  sectorFocus: string;
  oneliner: string;
};

export const normen: Norm[] = [
  {
    slug: 'iso-9001',
    code: 'ISO 9001',
    title: 'ISO 9001 Certificering',
    shortTitle: 'Kwaliteitsmanagement',
    category: 'kwaliteit',
    audience: 'Organisaties die kwaliteit willen bewijzen én borgen',
    doorlooptijd: '4–6 maanden',
    auditFrequentie: 'Jaarlijkse surveillance · 3-jaars hercertificering',
    sectorFocus: 'Sector-onafhankelijk',
    oneliner: 'De norm die aantoont dat kwaliteit geen toeval is.',
  },
  {
    slug: 'iso-14001',
    code: 'ISO 14001',
    title: 'ISO 14001 Certificering',
    shortTitle: 'Milieumanagement',
    category: 'milieu',
    audience: 'Organisaties met meetbare milieu-impact',
    doorlooptijd: '5–7 maanden',
    auditFrequentie: 'Jaarlijkse surveillance · 3-jaars hercertificering',
    sectorFocus: 'Productie, techniek, facilitair, bouw',
    oneliner: 'Aantoonbaar verantwoord omgaan met uw milieu-impact.',
  },
  {
    slug: 'iso-27001',
    code: 'ISO 27001',
    title: 'ISO 27001 Certificering',
    shortTitle: 'Informatiebeveiliging',
    category: 'informatiebeveiliging',
    audience: 'Organisaties die werken met vertrouwelijke data',
    doorlooptijd: '6–9 maanden',
    auditFrequentie: 'Jaarlijkse surveillance · 3-jaars hercertificering',
    sectorFocus: 'IT, financieel, zorg, overheid',
    oneliner: 'Informatiebeveiliging die standhoudt.',
  },
  {
    slug: 'hkz',
    code: 'HKZ',
    title: 'HKZ Certificering',
    shortTitle: 'Kwaliteit in zorg en welzijn',
    category: 'zorg',
    audience: 'Zorginstellingen en welzijnsorganisaties',
    doorlooptijd: '6–9 maanden',
    auditFrequentie: 'Jaarlijkse surveillance · 3-jaars hercertificering',
    sectorFocus: 'Jeugdzorg, thuiszorg, gehandicaptenzorg, ggz',
    oneliner: 'De kwaliteitsnorm voor organisaties in zorg en welzijn.',
  },
  {
    slug: 'nen-7510',
    code: 'NEN 7510',
    title: 'NEN 7510 Certificering',
    shortTitle: 'Informatiebeveiliging in de zorg',
    category: 'informatiebeveiliging',
    audience: 'Zorgaanbieders én verwerkers van gezondheidsinformatie',
    doorlooptijd: '6–9 maanden',
    auditFrequentie: 'Jaarlijkse surveillance · 3-jaars hercertificering',
    sectorFocus: 'Zorg, IT-leveranciers in de zorg, EPD/ECD-software, hosting',
    oneliner: 'Informatiebeveiliging voor de zorg.',
  },
  {
    slug: 'certificatieschema-arbodiensten',
    code: 'Certificatieschema Arbodiensten',
    title: 'Certificatieschema Arbodiensten',
    shortTitle: 'Wettelijk schema voor arbodiensten',
    category: 'arbo',
    audience: 'Interne en externe arbodiensten in Nederland',
    doorlooptijd: '4–6 maanden (indicatief)',
    auditFrequentie: 'Jaarlijkse surveillance · 3-jaars hercertificering',
    sectorFocus: 'Arbodienstverlening, bedrijfsgeneeskunde',
    oneliner: 'Het wettelijk verplichte certificaat voor arbodiensten.',
  },
];

export const normBySlug = (slug: string) => normen.find((n) => n.slug === slug);
