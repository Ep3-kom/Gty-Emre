// Teksten en links van het nieuwe ontwerp. Los van de vormgeving, zodat een CMS dit later kan vullen.

// Adressen volgens de sitemap van Wauw.
export const url = {
  certificering: '/certificering/',
  iso27001: '/certificering/iso-27001/',
  nen7510: '/certificering/nen-7510/',
  iso9001: '/certificering/iso-9001/',
  iso14001: '/certificering/iso-14001/',
  hkz: '/certificering/hkz/',
  arbo: '/certificering/certificatieschema-arbodiensten/',
  zorg: '/informatiebeveiliging/zorg/',
  infobeveiliging: '/informatiebeveiliging/',
  isms: '/informatiebeveiliging/isms/',
  kwaliteit: '/kwaliteitsmanagement/',
  audits: '/interne-audits/',
  auditIso27001: '/interne-audits/iso-27001/',
  auditNen7510: '/interne-audits/nen-7510/',
  auditIso9001: '/interne-audits/iso-9001/',
  partner: '/partnerprogramma/',
  nulmeting: '/nulmeting/',
  rie: '/rie/',
  rieVerplicht: '/inzichten/rie-verplicht/',
  academy: '/academy/',
  bhv: '/academy/bhv/',
  inzichten: '/inzichten/',
  kosten27001: '/inzichten/iso-27001-kosten/',
  kosten9001: '/inzichten/iso-9001-kosten/',
  checklist27001: '/inzichten/iso-27001-checklist/',
  checklist7510: '/inzichten/nen-7510-checklist/',
  checklist9001: '/inzichten/iso-9001-checklist/',
  nen7510Verplicht: '/inzichten/nen-7510-verplicht/',
  vergelijking: '/inzichten/iso-27001-vs-nen-7510/',
  begrippen: '/inzichten/begrippen/',
  over: '/over-ons/',
  werkwijze: '/werkwijze/',
  contact: '/contact/',
  kennismaking: '/contact/?onderwerp=kennismaking',
  vraag: '/contact/?onderwerp=vraag',
  route: '#vind-je-route',
};

type Link = { label: string; href: string };
const l = (label: string, href: string): Link => ({ label, href });
const col = (h: string, items: Link[], hub?: Link) => ({ h, items, hub });

export const menu = [
  { label: 'Certificering', href: url.certificering, cols: [
    col('Kernnormen', [l('ISO 27001', url.iso27001), l('NEN 7510', url.nen7510), l('ISO 9001', url.iso9001), l('Certificatieschema Arbodiensten', url.arbo)], l('Certificering overzicht', url.certificering)),
    col('Overige normen', [l('ISO 14001', url.iso14001), l('HKZ', url.hkz)]),
    col('Per sector', [l('Zorg', url.zorg), l('IT-leveranciers aan de zorg', url.nen7510), l('Arbodiensten', url.arbo)]),
  ] },
  { label: 'Expertise', href: url.infobeveiliging, cols: [
    col('Informatiebeveiliging', [l('ISMS uitgelegd', url.isms), l('Informatiebeveiliging in de zorg', url.zorg)], l('Informatiebeveiliging', url.infobeveiliging)),
    col('Kwaliteit', [l('Kwaliteitsmanagement', url.kwaliteit)]),
  ] },
  { label: 'Diensten', href: url.audits, cols: [
    col('Interne audits', [l('ISO 27001', url.auditIso27001), l('NEN 7510', url.auditNen7510), l('ISO 9001', url.auditIso9001)], l('Interne audits', url.audits)),
    col('Borging', [l('Partnerprogramma', url.partner)]),
    col('Arbo', [l('RI&E', url.rie), l('Wanneer is een RI&E verplicht?', url.rieVerplicht)]),
    col('Academy', [l('BHV incompany', url.bhv)], l('Academy', url.academy)),
  ] },
  { label: 'Inzichten', href: url.inzichten, cols: [
    col('Informatiebeveiliging', [l('Wat is een ISMS?', url.isms), l('Wat kost ISO 27001?', url.kosten27001), l('ISO 27001 checklist', url.checklist27001), l('Is NEN 7510 verplicht?', url.nen7510Verplicht), l('NEN 7510 checklist', url.checklist7510), l('ISO 27001 of NEN 7510?', url.vergelijking)]),
    col('Kwaliteit', [l('Wat kost ISO 9001?', url.kosten9001), l('ISO 9001 checklist', url.checklist9001)]),
    col('Arbo', [l('Wanneer is een RI&E verplicht?', url.rieVerplicht)]),
    col('Naslag', [l('Begrippenlijst', url.begrippen)], l('Alle inzichten', url.inzichten)),
  ] },
  { label: 'Over GTY', href: url.over, cols: [
    col('Over GTY', [l('Werkwijze', url.werkwijze), l('Contact', url.contact)], l('Over GTY', url.over)),
  ] },
];

export const footer = [
  { h: 'Certificering', items: [l('ISO 27001', url.iso27001), l('NEN 7510', url.nen7510), l('ISO 9001', url.iso9001), l('Certificatieschema Arbodiensten', url.arbo), l('ISO 14001', url.iso14001), l('HKZ', url.hkz)] },
  { h: 'Expertise', items: [l('Informatiebeveiliging', url.infobeveiliging), l('ISMS', url.isms), l('Informatiebeveiliging in de zorg', url.zorg), l('Kwaliteitsmanagement', url.kwaliteit)] },
  { h: 'Audits & borging', items: [l('Interne audits', url.audits), l('Partnerprogramma', url.partner), l('Nulmeting', url.nulmeting)] },
  { h: 'Overige diensten', items: [l('RI&E', url.rie), l('Academy', url.academy), l('BHV incompany', url.bhv)] },
  { h: 'Kennis', items: [l('Inzichten', url.inzichten), l('ISO 27001 kosten', url.kosten27001), l('Is NEN 7510 verplicht?', url.nen7510Verplicht), l('Wanneer is een RI&E verplicht?', url.rieVerplicht)] },
  { h: 'Over GTY', items: [l('Werkwijze', url.werkwijze), l('Over GTY', url.over)] },
  { h: 'Contact', items: [l('Contact', url.contact), l('Plan kennismaking', url.kennismaking)] },
];

const meta = '3 jaar geldig · jaarlijkse audit';
export const normen = [
  { kind: 'ISO', code: '27001', title: 'Informatiebeveiliging', text: 'Aantoonbaar voor klanten en aanbestedingen.', meta, href: url.iso27001 },
  { kind: 'NEN', code: '7510', title: 'Zorg en zorg-IT', text: 'Voor zorg, zorg-IT en arbodiensten.', meta, href: url.nen7510 },
  { kind: 'ISO', code: '9001', title: 'Kwaliteitsmanagement', text: 'Kwaliteit en processen aantoonbaar beheersen.', meta, href: url.iso9001 },
];
export const overigeNormen = [
  { kind: 'ISO', code: '14001', text: 'Milieumanagement', href: url.iso14001 },
  { kind: 'Zorg en welzijn', code: 'HKZ', text: 'Kwaliteitsnorm voor de zorg', href: url.hkz },
  { kind: 'Certificatieschema', code: 'Arbodiensten', text: 'Voor arbodiensten', href: url.arbo },
];

export const normenCertificering = [
  { kind: 'Informatiebeveiliging', code: '27001', title: 'ISO 27001', text: 'Een opdrachtgever vraagt om aantoonbare informatiebeveiliging.', meta, href: url.iso27001 },
  { kind: 'Zorg, zorg-IT en arbodiensten', code: '7510', title: 'NEN 7510', text: 'Je werkt met gezondheidsinformatie, in de zorg, zorg-IT of als arbodienst.', meta, href: url.nen7510 },
  { kind: 'Kwaliteit', code: '9001', title: 'ISO 9001', text: 'Klanten of aanbestedingen vragen om aantoonbare kwaliteitsborging.', meta, href: url.iso9001 },
];
export const overigeCertificering = [
  { kind: 'Arbodiensten', code: 'Arbodiensten', text: 'Certificatieschema, waar passend met ISO 9001 of NEN 7510', href: url.arbo },
  { kind: 'Milieu', code: 'ISO 14001', text: 'Milieuprestaties aantoonbaar verbeteren', href: url.iso14001 },
  { kind: 'Zorg en welzijn', code: 'HKZ', text: 'Kwaliteit in zorg of welzijn aantonen', href: url.hkz },
];

export const klanten: [bestand: string, naam: string, hoogte: number][] = [
  ['ae-security', 'AE Security Group', 48], ['certicor', 'Certicor', 31], ['lely', 'Ir. Lely Lyceum', 88], ['shadow-security', 'Shadow Security', 44],
  ['linden', 'Linden Tree Care', 75], ['dap', 'dAP, De Arbo Pioniers', 49], ['smile-place', 'Smile Place Tandartsen', 49], ['emirs', 'Emirs Foundation', 45],
];

export const stappen = [
  { tag: 'Nulmeting', title: 'In kaart brengen', text: 'Nulmeting: waar sta je en wat is nodig? Je krijgt een feitelijk vertrekpunt met prioriteiten en een planning.', chips: ['Nulmeting', 'Advies en planning'] },
  { tag: 'Op orde brengen', title: 'Inrichten en invoeren', text: 'Systeem inrichten, invoeren en klaarzetten voor de audit.', chips: ['Inrichten', 'Invoeren', 'Interne audit'], link: l('Certificering', url.certificering) },
  { tag: 'Partnerprogramma', title: 'Beoordeling en borging', text: 'Externe audit, daarna borging via het Partnerprogramma.', key: 'Certificaat. Op naar YES!', chips: ['Surveillance jaar 1', 'Surveillance jaar 2'], link: l('Over het Partnerprogramma', url.partner) },
];

export const vragen = [
  { q: 'Wat doet GTY?', a: 'GTY begeleidt organisaties naar ISO 27001, NEN 7510, ISO 9001, ISO 14001, HKZ en het Certificatieschema Arbodiensten. Van nulmeting tot certificaat en de borging daarna, plus interne audits, RI&E’s en trainingen.' },
  { q: 'Is GTY een certificerende instelling?', a: 'Nee. GTY begeleidt en voert interne audits uit. De externe audit en het certificaat komen van een onafhankelijke, geaccrediteerde certificerende instelling.' },
  { q: 'Voor welke sectoren werkt GTY?', a: 'Onder meer zorg en welzijn, IT, beveiliging en arbodiensten. In heel Nederland, op locatie.' },
  { q: 'Wat is het verschil tussen een kennismaking en een nulmeting?', a: 'Een kennismaking is een vrijblijvend gesprek over je situatie. Een nulmeting is een feitelijke meting van waar je staat ten opzichte van een norm.' },
  { q: 'Wat gebeurt er na het certificaat?', a: 'Via het Partnerprogramma blijft GTY betrokken. Periodieke interne audits, normupdates, trainingen en een vaste contactpersoon.' },
];

export const aanbod = [
  { chip: 'Nulmeting', title: 'Vind je route naar YES', btn: 'zh-btn--primary', cta: 'Vind je route', href: url.route, micro: 'Twee of drie vragen · je route naar YES', rows: [
    ['Voor wie', 'Je wilt weten welke norm of dienst past, en hoe ver je ervan af staat.'],
    ['Wat', 'Twee of drie vragen en direct je route. Daarna plan je de nulmeting langs die norm.'],
    ['Je krijgt', 'Je route, en na de nulmeting een feitelijk vertrekpunt met prioriteiten.'],
    ['Kosten / duur', 'Een dagdeel op locatie'],
  ] },
  { chip: 'Kennismaking', title: 'Kennismakingsgesprek', btn: 'zh-btn--dark', cta: 'Plan een kennismakingsgesprek', href: url.kennismaking, micro: 'Kosteloos en vrijblijvend', rows: [
    ['Voor wie', 'Je wilt je situatie bespreken en weten wat realistisch is.'],
    ['Wat', 'Vrijblijvend gesprek met Emre Ozdemir. We zeggen het ook als wij niet de juiste keuze zijn.'],
    ['Je krijgt', 'Een eerlijke inschatting en de logische eerste stap.'],
    ['Kosten / duur', 'Kosteloos · 30 minuten, online of op locatie'],
  ] },
];
