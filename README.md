# GTY website

Astro 5 + Tailwind 3 — vendor-neutrale build voor [gty.nl](https://gty.nl).

## Stack

- **Astro 5** (volledig statisch)
- Eigen stylesheet uit het Wauw-ontwerp (`src/styles/wauw.css`)
- **Web3Forms** voor formuliermail (vanuit de browser, geen server nodig)
- **Plausible** (cookieloos) voor analytics
- Lettertypes: Google Sans Flex en Archivo vanaf eigen server (`@fontsource-variable`);
  Otoiwo Grotesk Extended volgt zodra de licentie binnen is

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

## Inhoud aanpassen

| Wat | Waar |
|---|---|
| Tekst van een pagina | `src/content/paginas/<adres>.json` (een lijst blokken) |
| Homepage, menu, footer en adressen | `src/data/home.ts` |
| 'Vind je route' | `src/data/keuzehulp.ts` |
| Juridische teksten | `src/pages/*.astro` |
| Bedrijfsgegevens | `src/data/site-data.ts` |

## Architectuur

```
src/
├── assets/wauw/        Beelden uit het ontwerp
├── components/wauw/    Header, footer, keuzehulp en homepagesecties
│   └── blok/           Herbruikbare secties (Blok.astro kiest op `type`)
├── content/paginas/    Inhoud per pagina
├── layouts/            Wauw (alle pagina's) en Juridisch
├── pages/              Home, juridisch, 404 en [...pad] voor de rest
└── styles/wauw.css     Ontwerpsysteem
```

Test: `node --experimental-strip-types --test src/lib/onderwerp.test.ts`
