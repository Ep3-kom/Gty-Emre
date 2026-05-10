# URL-mapping: WordPress → nieuwe Astro-build

Vendor-neutrale lijst. Implementeer op de doelhost (Apache `.htaccess`,
Nginx `return 301`, Cloudflare Page Rules, Netlify `_redirects`, Vercel
`vercel.json`, etc.). Alle redirects zijn permanent (HTTP 301).

## 1-op-1 mapping (slugs identiek)

De hoofdstructuur is bewust gelijk gehouden. Geen redirect nodig — de
nieuwe site serveert dezelfde URLs:

| URL | Nieuwe handler |
|---|---|
| `/` | `src/pages/index.astro` |
| `/certificering/` | `src/pages/certificering/index.astro` |
| `/certificering/iso-9001/` | `src/pages/certificering/iso-9001.astro` |
| `/certificering/iso-14001/` | `src/pages/certificering/iso-14001.astro` |
| `/certificering/iso-27001/` | `src/pages/certificering/iso-27001.astro` |
| `/certificering/hkz/` | `src/pages/certificering/hkz.astro` |
| `/certificering/nen-7510/` | `src/pages/certificering/nen-7510.astro` |
| `/partnerprogramma/` | `src/pages/partnerprogramma.astro` |
| `/interne-audits/` | `src/pages/interne-audits.astro` |
| `/nulmeting/` | `src/pages/nulmeting.astro` |
| `/rie/` | `src/pages/rie.astro` |
| `/academy/` | `src/pages/academy.astro` |
| `/over-ons/` | `src/pages/over-ons.astro` |
| `/werkwijze/` | `src/pages/werkwijze.astro` |
| `/contact/` | `src/pages/contact.astro` |
| `/privacyverklaring/` | `src/pages/privacyverklaring.astro` |

## 301 redirects (verschillen ten opzichte van WordPress)

| Van (oude WP-URL) | Naar (nieuw) | Reden |
|---|---|---|
| `/algemene-voorwaarden/` | `/algemene-voorwaarden/` | Bestond op oude site mogelijk niet als losse pagina; nu wel — geen redirect nodig zolang slug klopt. Bevestigen na content-import. |
| `/wp-content/uploads/*` | uitfaseren | WordPress-asset-paden. Vervang met de nieuwe `/images/*`-paden. Indien externe sites linken naar oude bestanden: 1-op-1 mappen waar mogelijk, of op 410 zetten als bestand verdwenen is. |
| `/wp-admin/`, `/wp-login.php` | 410 Gone of redirect naar `/` | Verwijdert WordPress-aanvallen-vector. |
| `/feed/`, `/comments/feed/` | 410 Gone | Geen WP feeds meer. |
| `/?p=*` (oude querystring-permalinks) | naar bijbehorende slug | Indien nog gebruikt — controleren via Search Console. |

## Trailing slashes

De Astro-config zet `trailingSlash: 'always'`. Zorg dat de host
ook automatisch redirect van `/pagina` → `/pagina/` (HTTP 301), zodat
geen 404's ontstaan op interne of externe links zonder slash.

## Sitemap & SEO

- Astro genereert automatisch `sitemap-index.xml` en `sitemap-0.xml` op build
- `robots.txt` in `/public/robots.txt` verwijst naar de sitemap
- Submit de nieuwe sitemap in Search Console na go-live
- Bewaar de oude WP-sitemap minimaal 30 dagen actief om indexatie-overgang
  te ondersteunen (of regel een redirect van `/sitemap.xml` → `/sitemap-index.xml`)

## Voorbeeldsyntax per host

**Netlify (`_redirects` bestand in `public/`):**
```
/wp-admin/*      /                        301
/wp-login.php    /                        301
/feed/*          /                        410
/sitemap.xml     /sitemap-index.xml       301
```

**Nginx (in server-block):**
```
location /wp-admin/ { return 301 /; }
location = /wp-login.php { return 301 /; }
location = /sitemap.xml { return 301 /sitemap-index.xml; }
```

**Apache (`.htaccess`):**
```
RewriteEngine On
RewriteRule ^wp-admin/?(.*)$ / [R=301,L]
RewriteRule ^wp-login\.php$ / [R=301,L]
RewriteRule ^sitemap\.xml$ /sitemap-index.xml [R=301,L]
```
