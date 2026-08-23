# OmnisX — Release Readiness Audit (read-only)

Verified against source + live browser runs at 1700 / 1440 / 1280 / 1024 / 768 / 390, plus a reduced-motion pass at 390. Build log: `build OK`. No code was changed.

Frozen files confirmed unchanged this turn: `src/components/Navigation.tsx`, `src/components/HeroVideo.tsx`, `src/styles/hero.css`. Findings against them are reported, not fixed.

## BLOCKER

1. **Every call-to-action is a dead button.** `FinalStatement.tsx` renders "Request Access" and "Contact the Team" as bare `<PremiumButton>` with no `href`, `onClick`, `mailto:` or form. Navigation's "Request Access" is likewise inert (frozen file). The site's single conversion path does nothing on click.
2. **Primary nav items do nothing.** `Navigation.tsx` renders Technology / Vision / Partners as buttons with no target, and the mobile hamburger (`aria-label="Open menu"`) opens nothing — on 390px there is no navigation at all. Frozen file: needs your approval to touch.

## HIGH

3. **No `<h1>` on the page.** Browser check returns `h1: []` with 10 `<h2>`s. Document outline starts at h2; bad for SEO and screen-reader orientation.
4. **Footer link labels do not match their targets.** "Vision" → `#evolution` (Capability Evolution), "Partners" → `#governance` (Governed Autonomy). "Partners" also implies partners content that does not exist.
5. **Dead legal links.** `#privacy` and `#terms` resolve to nothing — jump-to-top on click; commonly required at launch.
6. **Anchor jumps land under the fixed nav.** No `scroll-margin-top` / `scroll-padding-top` and no `scroll-behavior: smooth` anywhere in `src/index.css`; the fixed glass header covers the first ~64–72px of every anchored section.
7. **React ref warning floods the console.** Dozens of `Function components cannot be given refs … Did you mean to use React.forwardRef()?` errors on every breakpoint — `PremiumButton` is a plain function component receiving refs (asChild/Slot usage). Non-fatal, but a console full of red on a flagship site.

## MEDIUM

8. **Vimeo hero returns HTTP 401 in this environment** for `player.vimeo.com/video/1052026972` on every load (localhost is not in the video's allowed-domains list). Expected to pass on `omnisx.ai`, but **must be re-verified on the published domain**, and there is no poster/fallback frame — if the embed is ever blocked the hero is a black box.
9. **Metadata does not match the deployment.** `index.html` canonical is `https://omnisx.ai` while the current preview/publish target is `omnisx-site-ui.lovable.app`; `og:image` is a relative `/lovable-uploads/…png` (crawlers require an absolute https URL) even though `public/og-image.png` exists. No `og:url`, no `twitter:image`, no `twitter:description`.
10. **No `robots.txt` and no `sitemap.xml`** in `public/`.
11. **Off-canvas decorative glows extend past the viewport edge** at 1440/1280/1024 (`-right-20 -top-20 h-56 w-56 rounded-full …` and the two showpiece blur fields). No horizontal scroll is produced (`scrollWidth === clientWidth` at all six widths), so this is cosmetic containment hygiene only.

## LOW

12. **Page length on mobile**: 15,002px at 390 (12,419 at 768; ~11.1–11.4k desktop). Within the range you accepted after the elevation pass, but there is still no in-page way to skip ahead because the mobile menu is inert (see 2).
13. **`public/` is 868KB**, dominated by `og-image.png` at 233KB — fine, but the OG image is heavier than it needs to be for a 1200×630 preview.
14. Nine stage tiles in Intent→Intelligence are `<button>`s with no `aria-pressed`/`aria-selected` state; they work with keyboard but do not announce selection.

## CLEAN (verified, no action)

- **No page/runtime errors** at any breakpoint (`pageerror: []` everywhere); no 4xx/5xx other than the Vimeo 401 and its Cloudflare challenge companion.
- **No horizontal overflow** at 1700 / 1440 / 1280 / 1024 / 768 / 390.
- **Two-plane Capability Evolution survives mobile** — isolated plane, authority seam and operational plane all render distinctly at 390 with the doctrine line intact.
- **Reduced motion** honoured: 390 renders identically with `prefers-reduced-motion: reduce`, all content at final state, nothing stuck at `opacity: 0`.
- **All images carry alt text** (`imgsNoAlt: 0`). Focus rings present via `focus-visible:ring-2` on the shared button.
- **Doctrine integrity holds.** Copy consistently states creation is not permission, isolated build/proof precedes authority, and authority is scaled to consequence ("policy-governed, delegated, or explicitly approved by a person, scaled to consequence"). No universal human pre-build approval anywhere.
- **No unsupported claims.** No customer names, metrics, integrations, availability dates, or production hiring-marketplace language. Zero mentions of HyperCommand or Societi, and no "execution fabric"/"plumbing" framing.

## RELEASE VERDICT: NOT READY

Not because of design or doctrine — both hold — but because the site cannot be acted on: no working CTA and no working navigation.

## Smallest exact fix set

Blocking (must ship):
1. Give both `FinalStatement` CTAs a real destination — simplest is `mailto:` on an OmnisX address, wrapping each `PremiumButton` with `asChild` around an `<a>`.
2. **Requires unfreezing `Navigation.tsx`**: point Technology/Vision/Partners at real section ids (or drop "Partners"), give "Request Access" the same destination as the CTA, and make the hamburger open a simple anchor sheet. Confirm before I touch it.
3. Add a single `<h1>` — promote the `CategoryStatement` headline.
4. Relabel footer links to their real targets and remove or resolve `#privacy` / `#terms`.
5. Add `scroll-margin-top: 6rem` on `section[id]` plus `scroll-behavior: smooth` in `src/index.css`.

Recommended before publish:
6. Wrap `PremiumButton` in `React.forwardRef` to clear the console warnings.
7. Fix metadata: canonical + `og:url` to the real domain, absolute `og:image`, add `twitter:image`/`twitter:description`.
8. Add `public/robots.txt` and `public/sitemap.xml` (single URL, no fabricated `lastmod`).
9. Re-verify the Vimeo embed on the published domain and add a poster fallback behind the iframe.

Say the word and I will implement items 1, 3, 4, 5 (nothing frozen), and separately items 6–9. Item 2 waits on your go-ahead to edit the frozen nav.
