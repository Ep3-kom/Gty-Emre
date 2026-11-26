// Vragen en uitkomsten van 'Vind je route', overgenomen uit het Wauw-ontwerp.
import { url } from './home';

type Vraag = { title: string; opts: [string, string][] };
export type Stap = { ow: string; norm?: string; h: string; t: string; label: string; meta: string; conf: string; alt?: boolean };
export type Route = { title: string; text: string; href: string; next: Stap };

export const q1: Vraag = { title: 'Waar staat je organisatie nu?', opts: [['nog', 'We hebben nog geen certificaat'], ['al', 'We zijn al gecertificeerd'], ['arbo', 'Het gaat om arbo, RI&E of training'], ['wn', 'Ik weet het nog niet']] };
export const q2: Record<string, Vraag> = {
  nog: { title: 'Waar gaat het vooral om?', opts: [['ib', 'Informatiebeveiliging aantoonbaar maken'], ['km', 'Kwaliteit en processen beheersen'], ['norm', 'Ik weet al welke norm ik nodig heb'], ['arbodienst', 'We zijn een arbodienst']] },
  al: { title: 'Wat heb je nodig?', opts: [['partner', 'Het systeem doorlopend op orde houden'], ['audit', 'Een interne audit']] },
  arbo: { title: 'Wat moet er geregeld worden?', opts: [['rie', 'Een RI&E'], ['bhv', 'BHV-training op locatie'], ['training', 'Een andere training voor het team']] },
};
export const q3: Record<string, Vraag> = {
  ib: { title: 'Werk je in of voor de zorg?', opts: [['zorg', 'Ja, wij zijn een zorgorganisatie'], ['itzorg', 'We leveren IT of diensten aan de zorg'], ['nee', 'Nee'], ['orient', 'We oriënteren ons nog']] },
};

const nm = (norm = ''): Stap => ({ ow: 'Nulmeting', norm, h: 'Plan een nulmeting' + (norm && ' voor ' + norm), t: `We meten waar je staat ten opzichte van ${norm || 'de norm'} en wat er nodig is. Daarna weet je precies hoe je traject eruitziet.`, label: 'Plan een nulmeting', meta: 'Meting langs de norm · een dagdeel op locatie', conf: 'de nulmeting' });
const ken: Stap = { ow: 'Kennismaking', h: 'Plan een kennismaking', t: 'Vertel ons je situatie. We adviseren welke stap logisch is, ook als dat geen traject bij GTY is.', label: 'Plan een kennismaking', meta: 'Kosteloos en vrijblijvend', conf: 'het gesprek', alt: false };
const svc = (h: string, t: string, label: string, conf: string, ow: string): Stap => ({ ow, h, t, label, meta: 'Binnen één werkdag reactie', conf });
const r = (title: string, text: string, href: string, next: Stap): Route => ({ title, text, href, next });

export const routes: Record<string, Route> = {
  wn: r('Begin met een gesprek', 'Vertel ons je situatie. We adviseren welke stap logisch is, ook als dat geen traject bij GTY is.', url.werkwijze, ken),
  norm: r('Kies je norm', 'Je weet al welke norm je nodig hebt. Met een nulmeting weet je waar je staat en krijg je een realistische planning.', url.certificering, nm()),
  zorg: r('Informatiebeveiliging in de zorg', 'NEN 7510 is de norm voor informatiebeveiliging in de zorg. Heb je ook klanten buiten de zorg, dan combineer je hem met ISO 27001.', url.zorg, nm('NEN 7510')),
  itzorg: r('NEN 7510 voor zorgleveranciers', 'Zorginstellingen vragen hun IT-partijen steeds vaker om NEN 7510. Met ook klanten buiten de zorg is NEN 7510 samen met ISO 27001 logisch.', url.nen7510, nm('NEN 7510')),
  nee: r('ISO 27001', 'Met ISO 27001 maak je informatiebeveiliging aantoonbaar voor klanten en opdrachtgevers. Het certificaat is drie jaar geldig.', url.iso27001, nm('ISO 27001')),
  orient: r('Begin bij het ISMS', 'Begin bij de basis: wat een ISMS is en hoe het werkt. Daarna is de stap naar ISO 27001 of NEN 7510 kleiner.', url.isms, ken),
  km: r('Kwaliteitsmanagement', 'Moeten processen beter lopen, begin dan bij kwaliteitsmanagement. Is certificering het doel, dan is ISO 9001 je route.', url.kwaliteit, nm('ISO 9001')),
  arbodienst: r('Certificatieschema Arbodiensten', 'Arbodiensten werken met het Certificatieschema Arbodiensten. Waar passend combineren we het met ISO 9001 of NEN 7510.', url.arbo, nm('Arbodiensten')),
  partner: r('Partnerprogramma', 'Na het certificaat houdt een vaste partner je systeem het hele jaar op orde, met waar nodig periodieke interne audits.', url.partner, svc('Bespreek het Partnerprogramma', 'We kijken hoe je systeem er nu voor staat en welke vorm van borging past.', 'Bespreek het Partnerprogramma', 'het gesprek', 'Partnerprogramma')),
  audit: r('Interne audits', 'Een onafhankelijke interne audit laat zien hoe je processen er echt voor staan, vóór de certificerende instelling komt.', url.audits, svc('Plan een interne audit', 'Geef je norm en gewenste periode door; we stemmen scope en planning af.', 'Plan een interne audit', 'de audit', 'Interne audit')),
  rie: r('RI&E', 'We stellen je RI&E op, inclusief een plan van aanpak dat je daarna zelf kunt bijhouden.', url.rie, svc('Vraag een RI&E aan', 'We stemmen scope, locaties en toetsing met je af.', 'Vraag een RI&E aan', 'de RI&E', 'RI&E')),
  bhv: r('BHV incompany', 'BHV-training in je eigen pand, afgestemd op de risico’s en de indeling van je werkplek.', url.bhv, svc('Vraag een BHV-training aan', 'Groepsgrootte en locatie; we stemmen datum en inhoud af.', 'Vraag een BHV-training aan', 'de training', 'BHV-training')),
  training: r('Academy', 'Trainingen op locatie voor je eigen team, afgestemd op je sector, in groepen van 8 tot 15.', url.academy, svc('Vraag een training aan', 'Groepsgrootte en onderwerp; we komen op locatie.', 'Vraag een training aan', 'de training', 'Training (Academy)')),
};

export const normOpties = ['ISO 27001', 'NEN 7510', 'ISO 9001', 'ISO 14001', 'HKZ', 'Certificatieschema Arbodiensten', 'Weet ik nog niet'];
export const onderwerpOpties = ['Kennismaking', 'Nulmeting', 'Advies over je situatie', 'Interne audit', 'Prijsindicatie', 'RI&E', 'BHV-training', 'Training (Academy)', 'Partnerprogramma', 'Vraag'];
