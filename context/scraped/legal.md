# Privacyverklaring & Algemene Voorwaarden

## Privacyverklaring (huidige site)
WebFetch retourneerde slechts fragmenten — de huidige live tekst lijkt grotendeels generieke WordPress placeholder ("Charity"-template, Engelstalig). 

**Conclusie:** Geen bruikbare bron. We kunnen NIET de bestaande tekst hergebruiken. 

**Plan:** placeholder-pagina met juridisch correcte structuur (Nederlands), maar tekst markeren als TODO klant. Velden die we wel kunnen invullen op basis van wat we weten:
- Verwerkingsverantwoordelijke: GTY, 's-Gravenweg 44, 2901 LA Capelle aan den IJssel
- Contact: Info@gty.nl, +31 6 36552241
- Doel verwerking: contactformulier, nulmeting-aanvraag

## Algemene Voorwaarden
Niet vindbaar via scrape. **TODO klant** — moet definitief aangeleverd worden, juridisch document.

## Aanpak in build
- /privacyverklaring/ — markdown content collection met `status: draft` flag, render een nette structuur met TODO-banner zichtbaar in dev, niet in productie
- /algemene-voorwaarden/ — idem
- /cookiebeleid/ en /disclaimer/ staan in footer maar zijn nu kapotte links — ofwel weggooien ofwel placeholder
