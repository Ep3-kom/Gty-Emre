# STATUS.md — GTY.nl projectstatus
Gegenereerd op 2026-05-11. Lees dit vóór je iets beslist of uitvoert.

---

## 1. Fasen — wat is klaar en wat niet

| Fase | Status | Toelichting |
|---|---|---|
| Project-setup (Astro 5, Tailwind, routing) | ✅ KLAAR | Volledig ingericht, design tokens met WCAG-verificatie |
| Data-laag (`site-data.ts`, `normen.ts`) | ⚠️ GEDEELTELIJK | KvK, BTW, hours, cijfers staan op `null` — wacht op klant |
| Component library (sections + ui) | ✅ KLAAR | 11 section-componenten, volledige ui-set |
| Pagina-structuur (alle routes) | ✅ KLAAR | Alle 23 pagina's / routes bestaan en zijn gebouwd |
| Copy / content | ✅ GROTENDEELS KLAAR | Meeste pagina's hebben definitieve tekst; juridische pagina's zijn placeholders |
| Scrape-materiaal (context/scraped/) | ✅ KLAAR | 17 bestanden met brontekst en toon-analyse van bestaande WP-site |
| Beeldplan | ✅ GEPLAND, ❌ NIET UITGEVOERD | BEELDPLAN.md is volledig — geen enkel beeld is geleverd of geplaatst |
| Juridische teksten | ❌ WACHT OP KLANT | AV = placeholder; privacyverklaring = review nodig; cookie + disclaimer = bevestiging nodig |
| Form-infrastructuur (Resend) | ❌ WACHT OP KLANT | API-routes zijn gebouwd; Resend-account en API key ontbreken |
| Hosting & Astro-adapter | ❌ NIET GEDAAN | Hosting-keuze open; zonder adapter werken `/api/contact/` en `/api/nulmeting/` niet in productie |
| Klantbewijs (logo's, testimonials, cases) | ❌ WACHT OP KLANT | Componenten klaar, content ontbreekt; klantnamen/toestemming vereist |
| Deploy & redirects | ❌ NIET GEDAAN | Redirects gedocumenteerd in `redirects.md`, nog niet geïmplementeerd op doelhost |

---

## 2. Pagina's — overzicht en staat

| Pagina | Route | Staat |
|---|---|---|
| Homepage | `/` | ✅ Volledig — 8 secties, alle copy aanwezig; héro-beeld ontbreekt |
| Certificering overzicht | `/certificering/` | ✅ Structuur klaar |
| ISO 9001 | `/certificering/iso-9001/` | ✅ Via `NormPaginaTemplate`; norm-hero-beeld ontbreekt |
| ISO 14001 | `/certificering/iso-14001/` | ✅ Idem |
| ISO 27001 | `/certificering/iso-27001/` | ✅ Idem |
| HKZ | `/certificering/hkz/` | ✅ Idem |
| NEN 7510 | `/certificering/nen-7510/` | ✅ Idem |
| Partnerprogramma | `/partnerprogramma/` | ✅ Volledig |
| Interne audits | `/interne-audits/` | ✅ Volledig |
| RI&E | `/rie/` | ✅ Volledig |
| Nulmeting | `/nulmeting/` | ✅ Volledig (formulier gebouwd; Resend ontbreekt) |
| Academy | `/academy/` | ✅ Volledig |
| Werkwijze | `/werkwijze/` | ✅ Volledig |
| Over ons | `/over-ons/` | ✅ Volledig — TODO GTY-naam-uitleg nog open |
| Contact | `/contact/` | ✅ Volledig (formulier gebouwd; Resend ontbreekt) |
| Inzichten overzicht | `/inzichten/` | ⚠️ Toont "Binnenkort" — geen artikelen aanwezig |
| Privacyverklaring | `/privacyverklaring/` | ⚠️ Structuur OK, tekst vereist juridische review |
| Algemene voorwaarden | `/algemene-voorwaarden/` | ❌ Placeholder — "tekst nog te leveren" |
| Cookiebeleid | `/cookiebeleid/` | ⚠️ Aanwezig; klant moet bevestigen of tekst correct is |
| Disclaimer | `/disclaimer/` | ⚠️ Aanwezig; klant moet bevestigen |
| 404 | `/404/` | ✅ Aanwezig |
| API: contact | `/api/contact/` | ✅ Gebouwd; werkt alleen met Resend API key |
| API: nulmeting | `/api/nulmeting/` | ✅ Gebouwd; werkt alleen met Resend API key |

---

## 3. TODO-markers in de code

| Bestand | Wat staat er open |
|---|---|
| [src/data/site-data.ts](src/data/site-data.ts) | `kvk: null`, `vat: null`, `hours: null`, `trajectsCompleted: null`, `sectorsServed: null` |
| [src/pages/over-ons.astro](src/pages/over-ons.astro) | Betekenis van "GTY" — beslissen of en hoe uitleggen |
| [src/components/ui/CalendarSlot.astro](src/components/ui/CalendarSlot.astro) | Cal.com / Calendly embed-URL ontbreekt |
| [src/pages/index.astro](src/pages/index.astro) | `KlantLogoStrip` rendert pas zodra `klanten`-array is gevuld (namen + toestemming) |
| [src/components/ui/LegalBanner.astro](src/components/ui/LegalBanner.astro) | Rendert dev-banner op alle juridische pagina's tot tekst bevestigd is |

---

## 4. Design-beslissingen die al zijn genomen

- **Palet:** teal-schaal (#143031–#EEF7F7), ink (#0F1B1F), paper (#FAFAF7), cream (#F1EBDD), accent terracotta (#A53E26). Geen default Tailwind-kleuren.
- **Typografie:** Newsreader Variable (display), Inter Variable (sans), IBM Plex Mono (mono) — lokaal geladen via fontsource.
- **Contrast:** alle gebruikte kleurparen zijn WCAG AA of AAA geverifieerd (gedocumenteerd in `tailwind.config.mjs`).
- **StoryBrand-structuur:** homepage volgt Hero → Probleem → Gids → Plan → Diensten → Stakes → Klanten → CTA.
- **Tagline:** "Zekerheid in certificering. Rust in compliance." — verankerd in data en copy.
- **CTA-paar:** Primair = kennismakingsgesprek, Secundair = kosteloze nulmeting.
- **URL-structuur:** 1-op-1 met WordPress (geen redirects nodig voor hoofd-URL's).
- **trailingSlash: 'always'** in Astro config.
- **Hero-stijl:** fullscreen-overlay met teal-900 gradient, niet de aside-kolom-variant uit BEELDPLAN.md. ⚠️ BEELDPLAN.md beschrijft nog de oude kolom-variant — dit document is deels verouderd.
- **Hero-beeldpad:** Hero.astro verwijst naar `/images/hero-overleg-gang.jpg`; BEELDPLAN.md noemt `hero-overlegtafel-bovenaanzicht.jpg` — namen zijn inconsistent, afstemmen vereist.
- **Geen analytics zonder expliciete config:** Plausible laadt alleen als `PUBLIC_PLAUSIBLE_DOMAIN` is ingesteld.
- **Geen datums of cijfers:** bewust leeg gelaten (trajectsCompleted, sectorsServed) conform brief.
- **Vestigingsstad:** Capelle aan den IJssel (niet Amsterdam). Conflict opgelost in code; klant moet bevestigen.

---

## 5. Wat er nog moet gebeuren (geordend op urgentie)

### Blokkerend voor go-live
1. **Beelden leveren** — geen enkel beeld staat in `public/images/`; Hero.astro breekt zonder `/images/hero-overleg-gang.jpg`
2. **Juridische teksten** — AV definitief aanleveren; privacyverklaring juridisch reviewen; cookie + disclaimer bevestigen
3. **KvK- en BTW-nummer** invullen in `src/data/site-data.ts`
4. **Resend account + API key** — anders werken beide formulieren niet in productie
5. **Hosting kiezen + Astro adapter installeren** — vereist voor `/api/*` routes
6. **Redirects implementeren** op doelhost (zie `redirects.md`)

### Wenselijk vóór live
7. **Klantnamen + logo's** (toestemming vereist) — `KlantLogoStrip` wacht hierop
8. **Testimonials** — component bestaat (`TestimonialBlock.astro`), nog niet ingezet
9. **Cal.com/Calendly URL** invullen in `CalendarSlot.astro`
10. **OG-image** aanmaken (`/images/og-default.jpg`) — nu verwijst meta naar niet-bestaand bestand
11. **Favicon** — placeholder SVG vervangen door definitief icon
12. **GTY-naam-uitleg** — beslissing nemen (over-ons TODO)

### Na live
13. **Inzichten / blogposts** — content collection klaar, pagina toont nu "Binnenkort"
14. **Cases** — content collection klaar, wacht op klant-toestemming
15. **Sitemap valideren** via Search Console na deploy
16. **Schema.org rich results testen** (homepage + norm-pagina's)

---

## 6. Inconsistentie om samen te besluiten

| Punt | Probleem | Beslissing vereist |
|---|---|---|
| Hero-beeldstijl | Hero.astro = fullscreen overlay; BEELDPLAN.md = kolom-naast-tekst | Welke variant is definitief? BEELDPLAN.md updaten of Hero.astro aanpassen? |
| Hero-bestandsnaam | Code: `hero-overleg-gang.jpg`; BEELDPLAN: `hero-overlegtafel-bovenaanzicht.jpg` | Naamgeving afstemmen bij beeldlevering |
| Vestiging | Code/footer: Capelle aan den IJssel; scrape WP-site: ook Amsterdam | Klant bevestigt: één vestiging of twee? |
| GTY-naam | "Getting To Yes" (scrape) — staat nergens op de site | Vermelden op over-ons of bewust weglaten? |
