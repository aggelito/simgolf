# Plan: göra Golfoteket-startsidan ljusare och mer Lukas-kompatibel

## Mål
Byt Golfotekets startsida från mörk premium-studio till en ljus, varm och modern premiumkänsla som Lukas föredrar — utan att tappa bokningsdrivet, Sweetspot-CTA:erna eller den nuvarande sidstrukturen.

## Current context / assumptions
- Repo: `/opt/data/workspace/simgolf`
- Site: Astro static site deployad till GitHub Pages på `https://aggelito.github.io/simgolf/`
- Primär ändring bör ligga i `src/styles/global.css`.
- Text, struktur och bokningsflöde ska i princip behållas.
- Bekräftade fakta ska lämnas orörda: 6 Trackman iO, öppet 06–23, från 349 kr/tim, Åsögatan 87, Sweetspot-länk.
- Använd Codex CLI för kodändringen enligt användarens workflow.

## Proposed approach
1. Skapa en light-mode-first palett:
   - varm off-white/cream bakgrund
   - mörk oliv/svart text
   - sand/guld som accent/CTA
   - diskreta kort och borders istället för tunga glow-effekter
2. Behåll hero med bild, men gör overlay ljusare och mer redaktionell/premium.
3. Justera kort, proof-strip, price-band, FAQ och business-band så de fungerar på ljus bakgrund.
4. Behåll sticky mobile booking och primära CTA:er tydliga.
5. Verifiera lokalt med Astro check/build och därefter deploy/live-check.

## Step-by-step
1. Kör Codex CLI i repo med uppdraget att ändra `src/styles/global.css` till light-mode-first design.
2. Granska diffen manuellt efter Codex så den inte ändrat copy/fakta/struktur felaktigt.
3. Kör:
   - `npx -y node@22 ./node_modules/astro/bin/astro.mjs check`
   - `npx -y node@22 ./node_modules/astro/bin/astro.mjs build`
4. Om build passerar: commit och push.
5. Vänta på GitHub Actions-deploy för senaste commit.
6. Verifiera live HTML/CSS:
   - startsidan laddar
   - hero-copy finns kvar
   - Sweetspot-bokningslänken finns kvar
   - CSS innehåller nya light-mode tokens/färger

## Files likely to change
- `src/styles/global.css`

## Tests / validation
- Astro diagnostics: 0 errors/warnings.
- Production build lyckas.
- Live CSS kontrolleras via `curl`/Python efter GitHub Pages deploy.
- Booking URL verifieras i live HTML.

## Risks / tradeoffs
- Light-mode kan minska “premium nattstudio”-känslan om det blir för vitt. Lösning: varm cream + oliv/sand, inte steril SaaS-vit.
- Herobilden kan bli svårläst med ljus overlay. Lösning: behåll mörk textpanel/gradient där texten ligger, men låt resten av sidan vara ljus.
- CTA måste fortsätta sticka ut. Lösning: mörk oliv eller guldknapp med hög kontrast.

## Open questions
- Exakt visuell referens för Lukas light-mode finns inte i den här prompten. Jag väljer därför en premium, varm golfstudio-palett och justerar efter feedback.
