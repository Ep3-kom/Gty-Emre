// Vertaalt ?onderwerp=… naar de keuzes 'Onderwerp' en 'Welke norm?' in het formulier.
const onderwerpen: Record<string, string> = { situatie: 'Advies over je situatie', rie: 'RI&E', bhv: 'BHV-training', training: 'Training (Academy)', partner: 'Partnerprogramma', vraag: 'Vraag', kennismaking: 'Kennismaking', nulmeting: 'Nulmeting', audit: 'Interne audit', prijs: 'Prijsindicatie' };
const normen: Record<string, string> = { iso27001: 'ISO 27001', nen7510: 'NEN 7510', iso9001: 'ISO 9001', iso14001: 'ISO 14001', hkz: 'HKZ', arbo: 'Certificatieschema Arbodiensten' };

export function voorinvullen(sleutel: string): { onderwerp: string; norm: string } {
  const [soort, normSleutel] = sleutel.split('-');
  const norm = normen[normSleutel] ?? '';
  const basis = onderwerpen[soort] ?? '';
  // Nulmeting heeft een eigen normveld, daarom komt de norm niet achter het onderwerp.
  const onderwerp = basis && norm && soort !== 'nulmeting' ? `${basis} · ${norm}` : basis;
  return { onderwerp, norm };
}
