# Plan: uppdatera GitHub-backupen med nuvarande Golfoteket.se + fixar

## Mål
Uppdatera backup-sidan på GitHub Pages (`/opt/data/workspace/simgolf`, live: `https://aggelito.github.io/simgolf/`) så den innehåller allt viktigt från nuvarande `golfoteket.se` och samtidigt får de prioriterade UX-, SEO- och prestandafixarna.

## Viktiga krav från Lukas/aghost
- Backupen ska ha allt som `golfoteket.se` har: copy, fakta, sektioner, bilder/assets och kampanjinfo.
- Missa inte att nuvarande site har vissa infosaker som bild/grafik i stället för HTML; backupen ska antingen bära över bilden eller, ännu bättre, återskapa informationen som riktig HTML så Google, AI-sök och accessibility kan läsa den.
- Sweetspot-widgeten är tillfälligt inaktiverad tills öppning. Det ska inte behandlas som produktionsfel i backupen, men sidan ska visa tydligt boknings-/öppningsläge och inte ladda trasig iframe initialt.

## Bekräftade fakta från live-sidan
- Namn: Golfoteket
- Positionering: Simulatorgolf på Södermalm
- Adress: Åsögatan 87, 118 29 Stockholm
- Närhet: Medborgarplatsen
- 6 Trackman iO-simulatorer
- Öppet 06–23 varje dag
- Klubbor och bollar ingår, Ping G440 enligt live-copy
- Friskvård godkänd
- Priser live: Mån–Fre 06:00–14:00 299 kr/tim; Mån–Fre 14:00–23:00 399 kr/tim; Lör–Sön hela dagen 399 kr/tim
- Golfoteket öppnar 17 augusti
- Kampanjbild kommunicerar 99 kr/tim; måste göras läsbar som HTML om den används visuellt
- Bokning via Sweetspot, men live-widget kan vara inaktiv före öppning
- Kontakt: info@golfoteket.se
- Socialt: Instagram/Facebook/TikTok finns på live-sidan

## UX-fixar att implementera
1. Hero ska snabbt säga: vad, var, när, prisnivå, hur boka/intresse.
2. Visa bokningsstatus tydligt: “Bokningen öppnar snart / öppnar 1 augusti” om vi behåller det från nuvarande dialog.
3. Ingen initial trasig Sweetspot iframe. Använd placeholder + knapp till Sweetspot/booking status. Iframe kan laddas först efter klick eller inte alls tills aktiv.
4. Lyft pris och praktisk info tidigt.
5. Behåll/återskapa öppningskampanjen som HTML-text, inte bara bild.
6. Fixa sektioner för: om, lediga tider/bokning, hitta hit, tekniken, hur funkar det, priser, medlemskap, företag/event, kontakt.

## SEO-fixar att implementera
1. Lägg korrekt title/meta/canonical för GitHub Pages backupen.
2. Lägg JSON-LD: LocalBusiness + SportsActivityLocation + WebSite + FAQPage + ReserveAction/booking intent.
3. Behåll/uppdatera befintliga SEO-sidor och sitemap så fakta matchar nya live-fakta/priser.
4. Lägg citable fact-section med stad, område, adress, antal simulatorer, tech, öppettider, priser och bokningsläge.
5. Säkerställ att kampanjinfo som finns i bild också finns som indexerbar HTML.

## Prestandafixar att implementera
1. Ladda ner/optimera live-bilder till lokala assets i `public/images/`.
2. Skapa WebP-versioner och rimliga storlekar med Python/Pillow om tillgängligt, annars använd befintliga men med width/height/lazy/aspect-ratio.
3. Hero/LCP-bild: fetchpriority high, dimensioner, srcset om möjligt.
4. Lazy-load bilder under folden.
5. Google Maps: använd länk/placeholder i stället för iframe initialt.
6. Sweetspot: ingen tung iframe initialt.
7. Minimera JS; Astro/statisk HTML först.

## Implementation workflow
1. Inspektera repo och nuvarande filer.
2. Hämta live HTML/JS/assets från `golfoteket.se` för exakt copy och asset-URL:er.
3. Skriva/uppdatera startsidan och ev. gemensamma data.
4. Uppdatera SEO-sidor/sitemap/robots/schema så fakta matchar.
5. Köra Codex CLI om praktiskt för kodändringen; annars manuellt med tydlig verifiering.
6. Kör Astro check/build med Node 22.
7. Commit/push.
8. Vänta in GitHub Actions och verifiera live HTML/CSS/assets/schema/booking status.

## Definition of done
- `astro check` grönt.
- `astro build` grönt.
- Live GitHub Pages returnerar 200.
- Live HTML innehåller: Golfoteket, Åsögatan 87, 6 Trackman iO, 06–23, 299 kr/tim, 399 kr/tim, 17 augusti, 99 kr/tim, application/ld+json.
- Sidan laddar lokala optimerade bilder och inte direkt Sweetspot/Google Maps iframe.
- Sitemap innehåller startsida + SEO-sidor.
