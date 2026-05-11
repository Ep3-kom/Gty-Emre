# BEELDPLAN — Unsplash beeldselectie GTY-site

Dit document beschrijft elk beeld dat de site nodig heeft, in volgorde
van pagina. Per beeld: bestandsnaam, afmetingen, plek in de layout,
sfeer, zoektermen, alt-tekst en prioriteit.

Alle beelden komen onder `public/images/` te staan en worden via
`<Image>` of `<img>` met expliciete width/height ingeladen.

---

## Homepage (`/`)

### Homepage — Hero (boven de vouw)
- Bestandsnaam: images/hero-overlegtafel-bovenaanzicht.jpg
- Afmetingen: 1600 x 1100 px (≈ 16:11), 2x = 3200 x 2200
- Gebruik: vervangt of vult de aside in `Hero.astro` (col-span-12
  lg:col-span-4 lg:col-start-9, neemt 4/12 breedte op desktop).
  Beeld zit rechts naast de H1, met een subtiele cream-rand eromheen.
- Sfeer: bovenaanzicht (top-down) van een lichte houten overlegtafel
  met geordende documenten, een opengeslagen mapje met
  procesdiagrammen, een notitieboek, een koffiekop op een zandkleurig
  ondergrond. Twee paar handen zichtbaar tot polshoogte — geen
  gezichten. Daglicht van schuin links, zachte schaduwen. Sfeer:
  rustig, bedachtzaam, gedocumenteerd werk.
- Unsplash zoekterm: "flat lay meeting documents", "top down desk
  notebook", "overhead workspace papers", "office desk overhead light"
- Alt-tekst: Bovenaanzicht van een overlegtafel met gestructureerde
  documenten en aantekeningen.
- Prioriteit: HOOG

### Homepage — Probleem (sectie-illustratie)
- Bestandsnaam: images/probleem-stapel-ordners.jpg
- Afmetingen: 1400 x 900 px (≈ 14:9)
- Gebruik: optionele rechterkolom in `Probleem.astro`, ongeveer
  5/12 breedte op desktop, naast de probleembeschrijving.
- Sfeer: een muur of kast met archiefordners in beige, grijs en
  donkerblauw, recht van voren of in licht perspectief. Geen mensen.
  Lichte stoffigheid, één ordner half uit het rek getrokken — suggereert
  "compliance is een rommelige werkelijkheid". Koel daglicht.
- Unsplash zoekterm: "archive folders shelf", "office binders wall",
  "filing cabinet documents", "ring binders archive"
- Alt-tekst: Archiefkast met ordners — symbool voor de papieren
  realiteit van compliance.
- Prioriteit: MEDIUM

### Homepage — Gids (sectie over GTY als partner)
- Bestandsnaam: images/gids-handgeschreven-aantekeningen.jpg
- Afmetingen: 1400 x 1000 px (≈ 7:5)
- Gebruik: links of rechts naast de Gids-tekst, ongeveer 5/12 breedte
  op desktop.
- Sfeer: close-up van een opengeslagen schriftje met handgeschreven
  Nederlandse aantekeningen, een vulpen of fineliner ernaast, op een
  ondergrond van linnen of warmgrijs papier. Geen toetsenbord, geen
  laptop. Suggereert: aandacht, denken, persoonlijke begeleiding.
- Unsplash zoekterm: "handwritten notes notebook", "fountain pen
  notebook", "open journal close up", "annotated notebook desk"
- Alt-tekst: Handgeschreven aantekeningen in een notitieboek — het
  werk van een betrokken adviseur.
- Prioriteit: MEDIUM

### Homepage — Plan (stappenplan-sectie)
- Bestandsnaam: images/plan-stappenplan-whitespace.jpg
- Afmetingen: 1600 x 700 px (breed banner-formaat)
- Gebruik: smalle banner onder of boven de drie planstappen, full-width
  binnen `container-x`, max 220px hoog op desktop.
- Sfeer: bovenaanzicht van een tafel met een paar geordende A4-vellen
  in lichte rij, voldoende whitespace eromheen, eventueel een liniaal
  of potlood. Strenge orde, veel ruimte, koele daglicht-tonen die
  goed combineren met cream-achtergrond.
- Unsplash zoekterm: "minimalist desk top down", "documents arranged
  flat lay", "ordered papers overhead", "clean desk paperwork"
- Alt-tekst: Geordende documenten als beeld voor een gestructureerd
  stappenplan.
- Prioriteit: LAAG

### Homepage — Diensten (sectie-achtergrond of -illustratie)
- Bestandsnaam: images/diensten-sectoren-collage.jpg
- Afmetingen: 1600 x 900 px (16:9)
- Gebruik: ofwel als achtergrond met overlay onder de Diensten-grid,
  ofwel als één breed beeld boven de grid.
- Sfeer: een industriële of professionele werkomgeving in rust:
  bijvoorbeeld een lege controlekamer of een productiehal vroeg in
  de ochtend, gezien vanaf een loopbrug. Strakke lijnen, koele tonen,
  geen mensen, geen logo's. Suggereert breedte van sectoren waarin
  GTY werkt.
- Unsplash zoekterm: "empty production hall morning", "industrial
  workspace minimal", "control room wide", "factory floor early light"
- Alt-tekst: Een industriële werkomgeving in rust — beeld voor de
  sectoren waarin GTY actief is.
- Prioriteit: MEDIUM

### Homepage — CallToAction (inverse panel)
- Bestandsnaam: images/cta-textuur-donker-teal.jpg
- Afmetingen: 1920 x 600 px (3.2:1 banner)
- Gebruik: subtiele achtergrondtextuur achter de CTA-sectie
  (`variant="inverse"`), met een teal-overlay op 70-80% opacity.
- Sfeer: abstracte donkere textuur — waterspiegeling bij avondlicht,
  geborsteld groen-blauw metaal, of een onderbelichte
  beton-detailopname. Géén herkenbaar object dat aandacht trekt;
  puur drager voor de typografie eroverheen.
- Unsplash zoekterm: "dark teal texture", "deep green water surface",
  "brushed metal dark", "concrete texture muted"
- Alt-tekst: (decoratief — leeg alt of `aria-hidden`)
- Prioriteit: LAAG

---

## Certificering — overzichtspagina (`/certificering/`)

### Certificering — Hero
- Bestandsnaam: images/certificering-hero-norm-documenten.jpg
- Afmetingen: 1600 x 900 px (16:9)
- Gebruik: hero-banner onder de paginatitel, full-width binnen
  container.
- Sfeer: bovenaanzicht van een bureau met meerdere genummerde
  tabbladen of registers (suggererend hoofdstukken van een norm),
  een markeerstift, een leeg notitieblok. Warm daglicht.
- Unsplash zoekterm: "tabbed binder index documents", "standards
  manual desk", "indexed document overhead", "policy documents flat lay"
- Alt-tekst: Een bureau met genummerde normdocumenten — het werk
  van certificering in beeld.
- Prioriteit: HOOG

---

## Norm-detailpagina's (`/certificering/iso-9001`, `iso-14001`,
`iso-27001`, `hkz`, `nen-7510`)

Elke norm-pagina krijgt één hero-beeld dat de SECTOR symboliseert
waarin de norm meestal toegepast wordt. Dit beeld komt rechts naast
de NormPaginaHero, ongeveer 5/12 breedte op desktop.

### ISO 9001 — Hero (kwaliteitsmanagement, breed sector)
- Bestandsnaam: images/norm-iso9001-productie-werkbank.jpg
- Afmetingen: 1200 x 1200 px (1:1)
- Gebruik: rechterkolom NormPaginaHero, vierkant beeld 5/12 breedte.
- Sfeer: detail van een geordende productiewerkbank — gereedschap
  in een schaduwbord, of een eindcontrole-station met een
  meetinstrument. Geen mensen, geen logo's. Toon: gedempt grijs
  met natuurlijke houtaccenten.
- Unsplash zoekterm: "organized workbench tools", "quality control
  station", "manufacturing inspection bench", "shadow board tools"
- Alt-tekst: Geordende productiewerkbank — kwaliteit als zichtbare
  praktijk.
- Prioriteit: HOOG

### ISO 14001 — Hero (milieumanagement)
- Bestandsnaam: images/norm-iso14001-bedrijfsdak-zonnepanelen.jpg
- Afmetingen: 1200 x 1200 px (1:1)
- Gebruik: zoals boven.
- Sfeer: bovenaanzicht (drone of vanaf hoog gebouw) van een
  bedrijfsdak met zonnepanelen, of een zicht op een laad-en-loszone
  met containerscheiding. Geen mensen. Daglicht, gedempte tonen.
- Unsplash zoekterm: "factory roof solar panels aerial",
  "industrial recycling containers", "warehouse roof drone view",
  "sustainable industrial site"
- Alt-tekst: Bedrijfsdak met zonnepanelen — milieumanagement in
  de praktijk.
- Prioriteit: HOOG

### ISO 27001 — Hero (informatiebeveiliging / IT)
- Bestandsnaam: images/norm-iso27001-serverruimte-rij.jpg
- Afmetingen: 1200 x 1200 px (1:1)
- Gebruik: zoals boven.
- Sfeer: een rustige serverruimte vanuit een lage hoek, één
  rackrij in focus, zachte LED-verlichting in koel wit. Géén
  hacker-clichés met groene matrix-tekst. Géén kapotte hangsloten.
  Toon: koel, ordelijk, professioneel.
- Unsplash zoekterm: "server room rack white", "datacenter aisle
  clean", "network rack close up", "server cabinet detail"
- Alt-tekst: Een geordende serverruimte — fundament van
  informatiebeveiliging.
- Prioriteit: HOOG

### HKZ — Hero (zorg)
- Bestandsnaam: images/norm-hkz-zorgomgeving-rust.jpg
- Afmetingen: 1200 x 1200 px (1:1)
- Gebruik: zoals boven.
- Sfeer: een zorgomgeving in rust — bijvoorbeeld een lege gang
  van een woonzorgcentrum met daglicht, of een geordend
  verzorgingsstation (geen patiënten, geen medewerkers). Eventueel
  detail van een handenwasstation of een geordende medicatiekar.
  Warme houttinten met witte muren — laat zorgvuldigheid zien
  zonder kliniek-koudheid.
- Unsplash zoekterm: "care home corridor light", "nursing station
  empty", "healthcare facility interior calm", "elderly care
  environment quiet"
- Alt-tekst: Een rustige zorgomgeving — kwaliteit van zorg als
  dagelijkse praktijk.
- Prioriteit: HOOG

### NEN 7510 — Hero (informatiebeveiliging in de zorg)
- Bestandsnaam: images/norm-nen7510-zorg-werkplek-scherm.jpg
- Afmetingen: 1200 x 1200 px (1:1)
- Gebruik: zoals boven.
- Sfeer: een werkplek in een zorgomgeving — een geordend bureau
  met een afgeschermd patiëntendossier op papier (onleesbaar),
  een stethoscoop terzijde, of een verpleegpost met een
  monitor-detail (geen identificeerbare data zichtbaar). Geen
  gezichten.
- Unsplash zoekterm: "medical workstation desk", "hospital
  administration desk", "nurse station computer", "healthcare desk
  documents"
- Alt-tekst: Werkplek in een zorgomgeving — waar informatie en
  zorg samenkomen.
- Prioriteit: HOOG

---

## Andere dienst-pagina's

### Interne audits (`/interne-audits/`) — Hero
- Bestandsnaam: images/interne-audits-checklist-detail.jpg
- Afmetingen: 1400 x 900 px (≈ 14:9)
- Gebruik: hero-banner onder paginatitel.
- Sfeer: close-up van een afgevinkte checklist of audit-rapport,
  een hand met een pen die markeert (vingers tot pols, geen gezicht).
  Documenten in lichte tinten, fineliner. Suggereert nauwkeurigheid.
- Unsplash zoekterm: "checklist clipboard pen", "audit report
  document", "inspection notes hand", "quality checklist close up"
- Alt-tekst: Detail van een audit-checklist tijdens controle.
- Prioriteit: MEDIUM

### RI&E (`/rie/`) — Hero
- Bestandsnaam: images/rie-werkplaats-veiligheid.jpg
- Afmetingen: 1400 x 900 px (≈ 14:9)
- Gebruik: hero-banner onder paginatitel.
- Sfeer: een werkomgeving met zichtbare veiligheidsmaatregelen —
  een bouwplaats vroeg in de ochtend met materieel netjes opgeruimd,
  of een werkplaats met markeerlijnen op de vloer. Geen acuut
  gevaar in beeld; juist orde en preventie. Geen mensen.
- Unsplash zoekterm: "construction site morning organized",
  "workshop safety markings floor", "workplace safety equipment
  organized", "industrial site clean orderly"
- Alt-tekst: Een werkomgeving waar veiligheid zichtbaar is
  geregeld.
- Prioriteit: MEDIUM

### Nulmeting (`/nulmeting/`) — Hero
- Bestandsnaam: images/nulmeting-leeg-canvas-meten.jpg
- Afmetingen: 1400 x 900 px (≈ 14:9)
- Gebruik: hero-banner naast of boven het nulmeting-formulier.
- Sfeer: bovenaanzicht van een rolmaat naast een leeg vel papier,
  of een waterpas op een ongeschilderde muur — letterlijke
  metafoor voor "meten waar je staat". Veel cream/wit, weinig
  ruis.
- Unsplash zoekterm: "tape measure paper minimal", "spirit level
  wall blank", "measuring tools flat lay", "blank paper measurement"
- Alt-tekst: Meetinstrumenten op een lege ondergrond — beeld voor
  de nulmeting.
- Prioriteit: MEDIUM

### Partnerprogramma (`/partnerprogramma/`) — Hero
- Bestandsnaam: images/partner-langdurig-overleg.jpg
- Afmetingen: 1400 x 900 px (≈ 14:9)
- Gebruik: hero-banner onder paginatitel.
- Sfeer: bovenaanzicht van een vergadertafel met twee koffiekoppen,
  een agenda met meerdere data-markers (suggereert terugkerend
  overleg), een notitieboek halfopen. Houten tafel, daglicht.
  Geen mensen.
- Unsplash zoekterm: "meeting table two coffees overhead",
  "agenda calendar planning desk", "long term planning table",
  "recurring meeting setup"
- Alt-tekst: Een vergadertafel ingericht voor terugkerend overleg
  — beeld voor langdurig partnerschap.
- Prioriteit: MEDIUM

### Academy (`/academy/`) — Hero
- Bestandsnaam: images/academy-werkboek-leeromgeving.jpg
- Afmetingen: 1400 x 900 px (≈ 14:9)
- Gebruik: hero-banner onder paginatitel.
- Sfeer: een tafel in een trainingsruimte gezien van boven of
  schuin, met een werkboek, markeerstiften, een kop koffie en
  een naamkaartje. Geen klaslokaal-shot met handen-omhoog.
  Geen "studenten kijken naar laptop". Toon: gedempt warm.
- Unsplash zoekterm: "workshop workbook table", "training
  materials desk", "course handout overhead", "seminar workbook
  detail"
- Alt-tekst: Werkboek en leermaterialen op een trainingstafel.
- Prioriteit: LAAG

### Werkwijze (`/werkwijze/`) — Hero
- Bestandsnaam: images/werkwijze-procesdiagram-bord.jpg
- Afmetingen: 1400 x 900 px (≈ 14:9)
- Gebruik: hero-banner onder paginatitel.
- Sfeer: detail van een procesdiagram getekend op kraftpapier of
  een whiteboard, in zwarte fineliner of marker, met blokken
  en pijlen. Geen mens die ernaar wijst — alleen het diagram in
  beeld. Subtiele wol- of papier-textuur op de achtergrond.
- Unsplash zoekterm: "process diagram paper drawn", "flowchart
  whiteboard close up", "workflow sketch notebook", "system
  diagram hand drawn"
- Alt-tekst: Een procesdiagram in close-up — onze werkwijze in
  beeld.
- Prioriteit: MEDIUM

### Over ons (`/over-ons/`) — Hero
- Bestandsnaam: images/over-ons-werkomgeving-detail.jpg
- Afmetingen: 1400 x 900 px (≈ 14:9)
- Gebruik: hero-banner onder paginatitel. Géén portret.
- Sfeer: een rustig kantoorhoekje — bureau bij een raam, een plant,
  een opgeruimd notitieboek, daglicht. Suggereert: een mens werkt
  hier, zonder die mens te tonen. Cream- en houttonen overheersen.
- Unsplash zoekterm: "calm office corner window", "desk plant
  morning light", "minimalist workspace home office", "quiet desk
  daylight"
- Alt-tekst: Een rustige werkplek bij daglicht — de plek waar
  GTY werkt.
- Prioriteit: MEDIUM

### Contact (`/contact/`) — Hero
- Bestandsnaam: images/contact-koffie-en-agenda.jpg
- Afmetingen: 1200 x 800 px (3:2)
- Gebruik: rechterkolom naast contactformulier, ongeveer 5/12 breedte.
- Sfeer: bovenaanzicht van een agenda met een open week, een
  koffiekop, een telefoon (scherm uit). Geen handen, geen gezicht.
  Suggereert: er is tijd voor u ingepland.
- Unsplash zoekterm: "open agenda coffee desk", "weekly planner
  overhead", "calendar phone coffee flat lay", "appointment book
  desk"
- Alt-tekst: Een opengeslagen agenda met koffie — kennismaken bij
  GTY.
- Prioriteit: LAAG

### Inzichten (`/inzichten/` — overzicht)
- Bestandsnaam: images/inzichten-leesplek-tijdschrift.jpg
- Afmetingen: 1600 x 700 px (banner)
- Gebruik: smalle hero-banner boven de artikelenlijst.
- Sfeer: bovenaanzicht van een opengeslagen tijdschrift of
  vakliteratuur op een tafel, een markeerstift terzijde, een
  half-leeg theekopje. Toon: rustig, beschouwend.
- Unsplash zoekterm: "open magazine reading desk", "journal
  reading table", "trade publication overhead", "professional
  reading flat lay"
- Alt-tekst: Een leesplek met vakliteratuur — beeld voor GTY
  Inzichten.
- Prioriteit: LAAG

---

## Inzichten-artikelen (per artikel een coverbeeld)

Per `src/content/inzichten/*.md` is één coverbeeld nodig, ratio 16:9,
1400 x 800 px. Onderwerp moet aansluiten bij het artikel (bv. een
artikel over interne audits gebruikt het audit-checklist-beeld
hierboven, of een variant). Bestandsnamen volgen het slug-patroon:
`images/inzicht-[slug].jpg`. Alt-tekst per artikel inhoudelijk te
schrijven bij oplevering.
- Prioriteit: MEDIUM (te bepalen na inhoudelijke artikelinventaris)

---

## Cases (per case een beeld)

Per `src/content/cases/*.md` één beeld dat de sector van de klant
toont (geen klant-specifieke beelden tenzij toestemming). Ratio 4:3,
1200 x 900 px. Bestandsnaam: `images/case-[slug].jpg`. Hergebruik
waar mogelijk de norm-sectorbeelden hierboven.
- Prioriteit: LAAG (afhankelijk van klant-toestemming voor namen)

---

## Open Graph / sociale deelbeelden

### Default OG-beeld
- Bestandsnaam: images/og-default.jpg
- Afmetingen: 1200 x 630 px (Open Graph standaard)
- Gebruik: standaard `og:image` voor alle pagina's zonder eigen
  variant. Wordt verwerkt in `<Base>`-layout meta-tags.
- Sfeer: een gestileerde compositie — bijvoorbeeld het hero-beeld
  (overlegtafel bovenaanzicht) bijgesneden, met ruimte rechts voor
  een ingebrande tekstoverlay (logo + tagline). Eventueel als
  hybride van foto + cream-vlak.
- Unsplash zoekterm: zie Hero — hergebruik van hero-bron is OK.
- Alt-tekst: GTY — Zekerheid in certificering. Rust in compliance.
- Prioriteit: HOOG

---

## Kleurtoon-richtlijn voor beeldselectie

Het GTY-palet bestaat uit gedempte teal (#143031–#2F5D5F), warme
cream (#F1EBDD) en zware ink (#0F1B1F), met een spaarzame
terracotta-accent (#A53E26). Beeldmateriaal moet met dit palet
kunnen samenleven zonder kleurenstrijd.

Kies daarom beelden met **koele tot neutrale ondertonen** (grijs-
groen, blauw-grijs, zacht beige, gebroken wit) en **warme houttinten**
voor menselijkheid — de combinatie van koele ruimte en warm hout
spiegelt het palet. Vermijd verzadigde primaire kleuren als dominante
toon: helder rood, helder geel, fel oranje of cobaltblauw clashen
met teal en breken het rustige karakter.

Werk met **gemiddeld tot laag contrast** en **zachte, gerichte
daglicht-belichting** — geen harde flits, geen donkere studio-shots,
geen overbelichte high-key beelden. Beelden mogen rustig en stil zijn;
de site is niet dynamisch of feestelijk maar bedachtzaam en
zorgvuldig.

Toegestane kleur-dominanten in beeld: warm beige, gebroken wit,
licht hout, gedempt groen-grijs, betongrijs, donker bosgroen,
diep teal. Tolerabele accenten: roest/terracotta, zwart, donkerbruin.
Te vermijden: heldere bedrijfsblauw, neon, helder geel/oranje, magenta,
cyaan, en verzadigd grasgroen.

Sfeer altijd: **rustig, geordend, professioneel zonder afstandelijk
te zijn** — een visuele echo van wat de tagline belooft: zekerheid
en rust.
