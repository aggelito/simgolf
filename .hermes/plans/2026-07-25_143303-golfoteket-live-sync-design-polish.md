# Golfoteket Live Sync & Design Polish Implementation Plan

> **For Hermes:** Implement this plan in the existing Astro repo, using Codex CLI for the coding pass, then review and verify every acceptance criterion before commit/push.

**Goal:** Turn the GitHub Pages version into a polished, conversion-focused Golfoteket site that includes the confirmed information currently published on golfoteket.se without the live site's rendering gaps or the backup site's internal/technical copy.

**Architecture:** Keep the static Astro/GitHub Pages setup and existing local optimized assets. Rebuild the homepage around a warm light editorial design (cream, dark forest green, restrained gold), reusable data/constants, strong real venue imagery, concise buying-intent sections, and direct Sweetspot links without loading third-party iframes. Bring all SEO landing pages onto the same visual system and current factual dataset.

**Tech Stack:** Astro, TypeScript, CSS, static GitHub Pages, existing local WebP/PNG assets.

---

## Confirmed source-of-truth facts from golfoteket.se (2026-07-25)

- Golfoteket, simulatorgolf på Södermalm, Stockholm.
- Åsögatan 87, 118 29 Stockholm; near Medborgarplatsen.
- Opens 17 August 2026; campaign valid through 1 October.
- Opening campaign: membership 1 kr/first hour 99 kr; 10 h pass 1,995 kr (up to 50%); 5 h pass 1,295 kr (up to 30%).
- 6 Trackman iO simulators, 4K laser projectors/screens, analysis screen and 27-inch control screen.
- Open 06:00–23:00 every day.
- Ping G440 clubs and balls included; limited left-handed, women’s and junior clubs.
- Self-service/unstaffed; door code sent with booking.
- Prices per simulator/hour: Mon–Fri 06–14: 299 kr; Mon–Fri 14–23: 399 kr; Sat–Sun all day: 399 kr.
- Wellness/friskvård approved.
- Memberships: Platinum 2,495 kr / 5 free hours / 20%; Gold 1,250 kr / 3 free hours / 15%; Silver 995 kr / 2 free hours / 10%; all valid one year.
- Personal locker: 1,995 kr/year. Passes available via Sweetspot.
- Company/event uses: AW, kickoff, teambuilding and company events; whole venue or multiple bays by inquiry.
- Contact: info@golfoteket.se; Instagram, TikTok and Facebook links from live site.
- Booking: `https://book.sweetspot.io/clubs/golfoteket/2553/tee-sheet`; membership: `https://book.sweetspot.io/clubs/golfoteket/memberships`; passes: `https://book.sweetspot.io/clubs/golfoteket/passes`.

## Task 1: Centralize and correct content/data

**Files:**
- Create or modify a reusable data module under `src/` if it reduces duplication.
- Modify all `src/pages/*.astro` files that contain stale or incomplete facts.

**Steps:**
1. Define shared URLs, address, opening hours, pricing, memberships, campaign, equipment and social/contact links.
2. Replace outdated dated Sweetspot URL with the stable tee-sheet URL unless a date is intentionally required.
3. Remove internal implementation language from public copy: “backup-sidan”, “AI-sök”, “trasig iframe”, “samla intent”, and placeholder language.
4. Fix exact address everywhere, including JSON-LD.
5. Ensure no unsupported claims are introduced.

## Task 2: Redesign and rewrite the homepage

**Files:**
- Modify `src/pages/index.astro`.
- Modify `src/styles/global.css`.

**Steps:**
1. Preserve warm light mode but move from repetitive generic card grids to a more editorial premium rhythm: strong hero, photo-led split sections, restrained surfaces, clear dividers, compact proof rows and intentional whitespace.
2. Hero must show what/where/when and a direct booking CTA above the fold; keep `Se priser` secondary.
3. Present the opening offer as polished HTML, with the image supporting rather than carrying the offer.
4. Include all live-site sections and facts: overview, booking status/direct link, location, technology, how it works, prices, memberships/passes/locker, company/events, FAQ, contact/socials and final CTA.
5. Add a sticky mobile `Boka simulator` CTA that opens Sweetspot directly.
6. Keep animations subtle and respect `prefers-reduced-motion`.
7. Ensure responsive behavior at desktop, tablet and mobile widths.

## Task 3: Bring SEO pages onto the same system

**Files:**
- Modify `src/pages/simulatorgolf-stockholm.astro`.
- Modify `src/pages/indoor-golf-stockholm.astro`.
- Modify `src/pages/golftraning-vinter.astro`.
- Modify `src/pages/foretagsevent-golf.astro`.
- Modify `src/pages/priser.astro`.
- Modify `src/pages/sa-funkar-det.astro`.
- Modify shared CSS/data as needed.

**Steps:**
1. Remove obsolete dark-mode toggle/scripts and ensure pages render in the same warm light visual language.
2. Use consistent header/footer/navigation and working base-path-safe internal links.
3. Correct address, pricing, opening hours, booking and equipment details.
4. Keep each page focused on its search intent with direct booking links and natural internal links.
5. Ensure no link points to a nonexistent homepage anchor.

## Task 4: SEO/schema/accessibility polish

**Files:**
- Modify homepage and SEO page head/schema blocks.
- Modify `public/sitemap.xml` and `public/robots.txt` only if needed.

**Steps:**
1. Keep page-specific title, description, canonical and OG tags.
2. Use valid `LocalBusiness` + `SportsActivityLocation`, `WebSite`, `FAQPage`, and booking `ReserveAction` schema with the correct postal code `118 29`.
3. Keep offer pricing and campaign dates truthful.
4. Verify heading order, descriptive image alt text, focus visibility, keyboard links and color contrast.
5. Avoid duplicate meta descriptions and invalid/doubled base paths.

## Task 5: Verification and deployment

**Steps:**
1. Run `npm run build`; expected: Astro check reports 0 errors and all routes build.
2. Search source and built HTML to prove all required facts are present and internal/technical copy is gone.
3. Serve `dist` locally and perform browser visual QA at desktop and mobile widths; inspect console for runtime errors.
4. Click/test primary CTA targets and key internal navigation.
5. Review `git diff` for accidental factual changes and generated files.
6. Commit with a concise message and push `main`.
7. Check the matching GitHub Actions run via GitHub API and wait for success.
8. Verify `https://aggelito.github.io/simgolf/` and every SEO route return 200 and contain the new hero copy, correct Sweetspot URL, schema, current prices and membership facts.

## Acceptance criteria

- Warm premium light design feels intentional and less template-like than the current GitHub version.
- Homepage contains every confirmed live-site fact listed above, with no internal “backup/AI/iframe” commentary.
- Primary booking CTA is direct and visible above fold and on mobile.
- No Sweetspot or Google Maps iframe loads initially.
- All 7 Astro routes build and render consistently.
- Built/live HTML contains: `Åsögatan 87`, `118 29`, `6 Trackman iO`, `06–23`, `299 kr`, `399 kr`, `Platinum`, `2 495 kr`, `1 250 kr`, `995 kr`, `1 995 kr`, `17 augusti`, `99 kr`, and `application/ld+json`.
- GitHub Actions succeeds and the deployed GitHub Pages site is manually fetched/visually verified.
