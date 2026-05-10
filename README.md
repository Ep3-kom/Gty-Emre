# GTY website

Astro 5 + Tailwind 3 — vendor-neutrale build voor [gty.nl](https://gty.nl).

## Stack

- **Astro 5** (static + hybrid endpoints)
- **Tailwind CSS 3** (custom design tokens — geen default colors)
- **Resend** voor formuliermail
- **Plausible** (cookieloos) voor analytics
- Lokale fonts via `@fontsource(-variable)` — Newsreader, Inter, IBM Plex Mono

## Vereisten

- Node 18.18+ of 20+
- pnpm 9+ (zie `packageManager` in `package.json`)

## Lokaal draaien

```bash
pnpm install
cp .env.example .env
pnpm dev
```

De site draait op `http://localhost:4321`. Zonder `RESEND_API_KEY` werken
contactformulier en nulmeting-formulier in dev-mode: submissies worden gelogd
in de terminal in plaats van gemaild.

## Build

```bash
pnpm build      # bouwt naar ./dist
pnpm preview    # preview van de productie-build
```

## Environment variables

Zie `.env.example`.

| Variabele | Verplicht in productie | Doel |
|---|---|---|
| `RESEND_API_KEY` | ✓ | Versturen van formuliermails naar `info@gty.nl` |
| `CONTACT_TO_EMAIL` | optioneel | Override van het ontvangstadres (default `info@gty.nl`) |
| `PUBLIC_PLAUSIBLE_DOMAIN` | optioneel | Domein voor Plausible-script. Leeg = analytics uit. |

## Deploy (vendor-neutraal)

De build is `output: 'static'` met server-rendered API routes voor de
formulieren (`/api/contact/`, `/api/nulmeting/`). Voor productie heeft u dus
een hosting nodig die Astro server endpoints ondersteunt.

Voeg vóór deploy een Astro adapter toe die past bij uw host:

```bash
# voorbeelden — kies één
pnpm astro add node       # zelf-gehoste Node-server
pnpm astro add netlify    # Netlify
pnpm astro add vercel     # Vercel
```

Bij een puur statische host (zonder server-functies):
- Vervang de `<form action="/api/...">` calls door een externe service
  (Formspree, Resend Webhook, eigen API), of
- Verwijder de API routes en lever de form-data via `mailto:`-fallback.

Documenteer redirects van de huidige WordPress-URLs op de doelhost — zie
[`redirects.md`](./redirects.md). De mapping is grotendeels 1-op-1.

## Belangrijke bestanden

- `src/data/site-data.ts` — bedrijfsgegevens (NAW, telefoon, e-mail)
- `src/data/normen.ts` — gestructureerde data over de 5 normen
- `src/i18n/nl.ts` — UI-strings (centraal voor latere i18n-uitbreiding)
- `src/lib/seo.ts` — meta + JSON-LD generators
- `src/lib/form-handler.ts` — Resend-wrapper, gedeeld door API routes
- `tailwind.config.mjs` — design tokens met WCAG AA contrast-comments

## Openstaande klant-input

Zie [`TODO.md`](./TODO.md) voor de volledige intake-checklist.

## Architectuur

```
src/
├── components/
│   ├── layout/      Header, Footer, MobileNav
│   ├── sections/    Page-secties (Hero, Probleem, Plan, …)
│   └── ui/          Button, Eyebrow, Form, Accordion, …
├── content/         Markdown collections (legal, inzichten, cases)
├── data/            Site- en domein-data
├── i18n/            UI-strings
├── layouts/         Base + NormPaginaTemplate
├── lib/             Helpers (seo, form-handler)
├── pages/           Routes (incl. /api/* server endpoints)
└── styles/          global.css
```
