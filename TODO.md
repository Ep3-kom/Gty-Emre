# TODO — Intake-checklist klant

Punten waarop GTY input moet aanleveren voordat de site live kan. Geordend op urgentie.

## A. Voor go-live noodzakelijk

### A1. Juridische teksten
- [ ] **Privacyverklaring** — definitieve, juridisch gecontroleerde Nederlandse tekst.
  - Locatie: `src/pages/privacyverklaring.astro`
  - Huidige status: structuur staat, content is een redelijk default die juridische review vereist. Banner zichtbaar in dev tot tekst is bevestigd.
- [ ] **Algemene voorwaarden** — volledig juridisch document.
  - Locatie: `src/pages/algemene-voorwaarden.astro`
  - Huidige status: alleen placeholder met expliciete melding "tekst nog te leveren".
- [ ] **Cookiebeleid** — bevestigen dat de huidige tekst correct is, of aanpassen.
  - Locatie: `src/pages/cookiebeleid.astro`
- [ ] **Disclaimer** — bevestigen dat de huidige tekst correct is, of aanpassen.
  - Locatie: `src/pages/disclaimer.astro`

### A2. Bedrijfsgegevens
- [ ] **KvK-nummer** — `src/data/site-data.ts` → `business.kvk`
- [ ] **BTW-nummer** — `src/data/site-data.ts` → `business.vat`
- [ ] **Openingstijden contactlijn** — als gewenst toevoegen aan `src/data/site-data.ts` → `business.hours` (en in `Footer.astro` of `contact.astro` weergeven)
- [ ] **Conflict in vestiging** — Footer/site-data noemen "Capelle aan den IJssel"; in oude over-ons stond ook "Amsterdam". Bevestigen: één van beide of beide.

### A3. Form-infrastructuur
- [ ] **Resend account + API key** voor productie. Variabele: `RESEND_API_KEY`.
- [ ] **Domein-verificatie bij Resend** voor verzending vanaf `noreply@gty.nl` (of alternatief afzenderadres).
- [ ] **Hosting kiezen + Astro adapter installeren** (`pnpm astro add node|netlify|vercel`) — zonder adapter werken `/api/contact/` en `/api/nulmeting/` niet in productie.
- [ ] **Plausible domein-configuratie** als analytics gewenst. Variabele: `PUBLIC_PLAUSIBLE_DOMAIN`.

### A4. Domein, hosting & redirects
- [ ] **Hosting-keuze bevestigen** (regelt klant — niet door Elevate)
- [ ] **Redirects implementeren** op doelhost — zie `redirects.md`
- [ ] **DNS-cutover plannen** — staging eerst, dan live

## B. Wenselijk vóór live, maar niet blokkerend

### B1. Klantbewijs
- [ ] **Klantnamen + toestemming voor logo's** — `src/pages/index.astro` heeft `klanten`-array klaar; `src/components/ui/KlantLogoStrip.astro` rendert pas zodra de array gevuld is.
- [ ] **Testimonials met naam, functie, organisatie** — `TestimonialBlock.astro` bestaat; nog niet gerenderd. Beslissen op welke pagina's.
- [ ] **Cases / klantverhalen (anoniem of met naam)** — content collection `src/content/cases/` staat klaar.

### B2. Content-uitbreidingen
- [ ] **GTY-betekenis** — in `src/pages/over-ons.astro` staat een TODO comment. Beslissen of de naam-uitleg vermeld wordt en in welke vorm.
- [ ] **Specifieke jaartallen / aantallen** — bewust nu niet ingevuld. Pas wijzigen in `src/data/site-data.ts` zodra GTY cijfers wil delen.
- [ ] **Eerste inzichten / blogposts** — content collection `src/content/inzichten/` staat klaar; pagina toont nu "Binnenkort".

### B3. Visuele content
- [ ] **OG-image per pagina** — nu wordt `/og-default.png` gebruikt (bestand zelf nog te leveren). Idealiter eigen image per hoofdpagina.
- [ ] **Favicon-variant** — `public/favicon.svg` is een eenvoudige placeholder. Wens: eigen icon-bestand.
- [ ] **Foto-/illustratiematerialen** voor Over GTY, Werkwijze (optioneel; site werkt ook zonder).

### B4. Afspraakplanner
- [ ] **Cal.com / Calendly account-URL** — `src/components/ui/CalendarSlot.astro` heeft TODO-comment. Vervang het placeholder-blok met de embed zodra beschikbaar.

## C. Functioneel-technisch (voor ontwikkelaar)

- [ ] **Astro adapter installeren** voor productie-deploy van API routes (zie A3).
- [ ] **Sitemap-validatie** na deploy via `https://www.gty.nl/sitemap-index.xml`.
- [ ] **Schema.org rich-results testen** via Google's Rich Results Test op homepage en norm-pagina's.
- [ ] **Lighthouse CI** opzetten als gewenst (target: 95+ op alle metrics).

---

**Locaties van TODO-markers in code:**

| Bestand | Reden |
|---|---|
| `src/data/site-data.ts` | KvK, BTW, openingstijden, trajectsCompleted, sectorsServed |
| `src/pages/over-ons.astro` | TODO: GTY-betekenis |
| `src/components/ui/CalendarSlot.astro` | TODO: Cal.com URL |
| `src/pages/index.astro` | TODO: klantnamen/toestemming voor `KlantLogoStrip` |
| `src/components/ui/LegalBanner.astro` | rendert dev-banner op alle juridische pagina's tot tekst bevestigd |
