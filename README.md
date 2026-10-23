# GTY website

Astro 5 + Tailwind 3 — vendor-neutrale build voor [gty.nl](https://gty.nl).

## Stack

- **Astro 5** (volledig statisch)
- **Tailwind CSS 3** (custom design tokens — geen default colors)
- **Web3Forms** voor formuliermail (vanuit de browser, geen server nodig)
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

De site draait op `http://localhost:4321`. Zonder `PUBLIC_WEB3FORMS_KEY` geven
contactformulier en nulmeting-formulier een foutmelding bij verzenden.

## Build

```bash
pnpm build      # bouwt naar ./dist
pnpm preview    # preview van de productie-build
```

## Environment variables

Zie `.env.example`.

| Variabele | Verplicht in productie | Doel |
|---|---|---|
| `PUBLIC_WEB3FORMS_KEY` | ✓ | Access key van Web3Forms; zonder key geven de formulieren een foutmelding |
| `PUBLIC_PLAUSIBLE_DOMAIN` | optioneel | Domein voor Plausible-script. Leeg = analytics uit. |

## Deploy (Hetzner + CloudPanel)

De site draait als statische site op de Hetzner-server (`195.201.197.20`),
CloudPanel-site `gty.nl`, map `/home/gty/htdocs/site/`.

Wijziging live zetten:

```bash
git pull                 # laatste versie ophalen
# ... wijzigen, lokaal checken met: pnpm dev
git commit -am "..." && git push
pnpm deploy              # bouwt en uploadt
```

`pnpm deploy` weigert als je map niet exact gelijk is aan GitHub `main`, zodat
er nooit per ongeluk een oude versie live gaat. Uploaden kan alleen met de
SSH-sleutel `~/.ssh/gty_deploy`; voor een nieuwe collega een eigen sleutel
toevoegen in CloudPanel → gty.nl → SSH/FTP → `gty-deploy`.

Documenteer redirects van de huidige WordPress-URLs op de doelhost — zie
[`redirects.md`](./redirects.md). De mapping is grotendeels 1-op-1.

## Belangrijke bestanden

- `src/data/site-data.ts` — bedrijfsgegevens (NAW, telefoon, e-mail)
- `src/data/normen.ts` — gestructureerde data over de 5 normen
- `src/i18n/nl.ts` — UI-strings (centraal voor latere i18n-uitbreiding)
- `src/lib/seo.ts` — meta + JSON-LD generators
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
├── pages/           Routes
└── styles/          global.css
```
