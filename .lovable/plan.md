# OmnisX — Production Readiness Census (read-only findings + smallest safe fix set)

No code was edited. Hero, header, logo, doctrine, visuals and copy untouched.

## Census

| Item | State | Evidence |
| --- | --- | --- |
| `<title>` | READY | index.html:6 — "OmnisX.ai - The Intelligence Layer for Autonomous Agents" (66 chars, slightly over 60) |
| Meta description | WRONG (overclaiming) | index.html:7 — "The world's first AI agent ecosystem powering autonomous intelligence at scale." Conflicts with the no-operational-claims doctrine used across the body copy |
| Canonical | WRONG vs stated target | index.html:18 — `https://omnisx.ai/` (apex), target is `https://www.omnisx.ai/` |
| og:title / og:description | WRONG (overclaiming) | index.html:9-10 — same "world's first…at scale" wording |
| og:url | WRONG vs target | index.html:12 — apex, not www |
| og:type | READY | index.html:13 — `website` |
| og:image | WRONG (asset unsuitable) | index.html:11 points at `/lovable-uploads/5ea8ea83….png`, which is 1920x522 (a wordmark strip, ~3.7:1). Social crawlers crop/letterbox this badly. A correct 1200x629 `public/og-image.png` already exists and is unreferenced |
| twitter:card / title / description / image | card READY (index.html:14); title/description WRONG (overclaiming, :15-16); image WRONG (:17, same 1920x522 asset) | |
| Favicon | READY | `public/favicon.ico` exists (15 KB), but no `<link rel="icon">` in index.html — browsers only pick it up by root convention |
| apple-touch-icon | MISSING | no 180x180 PNG, no `<link rel="apple-touch-icon">` |
| robots.txt | READY (incomplete) | public/robots.txt — allow-all, but no `Sitemap:` line |
| sitemap.xml | WRONG vs target | public/sitemap.xml:4 — `https://omnisx.ai/` apex; no `<lastmod>` |
| Web manifest | MISSING | no `site.webmanifest` / `manifest.json` |
| theme-color | MISSING | not in index.html (brand value `#161537` is established) |
| JSON-LD / schema | MISSING | no `application/ld+json` anywhere |
| lovable.app / preview / localhost hardcodes | READY (none) | only omnisx.ai references in index.html and sitemap.xml |
| Build config | READY | package.json `build: vite build`; netlify.toml publish `dist`, NODE_VERSION 18.19.0 |
| SPA routing fallback | MISSING (deployment-dependent) | App.tsx uses BrowserRouter with a `*` NotFound route, but there is no `public/_redirects` and no `[[redirects]]` in netlify.toml. Any deep link other than `/` 404s on Netlify. Not an issue on Lovable hosting, which handles SPA fallback |
| Vimeo hero embed | UNVERIFIED | index.html:25 loads player.js; HeroVideo.tsx embeds 1052026972. Sandbox returns a connection-verification interstitial — not evidence of breakage. Production concern: Vimeo privacy settings must whitelist the final production domain, or the iframe fails there too |
| Deployed-domain parity (DNS, www vs apex redirect, HTTPS, live head tags) | UNVERIFIED | cannot be inferred from source; requires a live check |

## Code-fixable vs infrastructure

Code-fixable (all in `index.html`, `public/robots.txt`, `public/sitemap.xml`):
canonical/og:url/sitemap host, og+twitter image target, overclaiming copy, favicon/apple-touch links, theme-color, manifest, JSON-LD, robots Sitemap line, `_redirects`.

Infrastructure / domain binding (not code):
1. Decide www vs apex as the one canonical host and configure a 301 from the other.
2. DNS + HTTPS certificate for the chosen host.
3. Vimeo video privacy → domain whitelist for the production domain.
4. Netlify vs Lovable hosting decision (netlify.toml is currently present and unused if publishing via Lovable).

## Smallest safe fix set (on approval)

1. `index.html:11,12,17,18` — repoint canonical, og:url to the chosen canonical host; repoint og:image and twitter:image to `<host>/og-image.png` (the existing 1200x629 asset).
2. `index.html:7,10,16` — replace "The world's first AI agent ecosystem powering autonomous intelligence at scale." with doctrine-safe wording, e.g. "The intelligence layer for persistent, governed, evolving agents." (matches the existing footer line, no new claims).
3. `index.html:9,15` — leave og/twitter titles as-is apart from the description swap.
4. `index.html` head — add `<link rel="icon" href="/favicon.ico" sizes="any">`, `<link rel="apple-touch-icon" href="/apple-touch-icon.png">` (generate a 180x180 from the existing mark), `<meta name="theme-color" content="#161537">`, `<link rel="manifest" href="/site.webmanifest">`.
5. `index.html` head — add one Organization JSON-LD block (name, url, logo). No FAQ/Product schema.
6. `public/robots.txt` — append `Sitemap: <host>/sitemap.xml`.
7. `public/sitemap.xml:4` — update `<loc>` to the canonical host, add `<lastmod>`.
8. New `public/site.webmanifest` (name, short_name, theme/background `#161537`, icons) and new `public/_redirects` containing `/*  /index.html  200` for the Netlify path.

Nothing in `src/` needs to change. Hero, Navigation, and all section components stay frozen.

## Production-domain smoke checks required after deploy

- `https://www.omnisx.ai/` and `https://omnisx.ai/` both resolve, one 301s to the other, valid HTTPS.
- View-source head on the live domain matches the source head (no host injection surprises).
- Hero Vimeo iframe actually plays on the live domain; mute/unmute toggle works.
- Social debugger scrape (LinkedIn/X/Facebook) renders the 1200x629 image, not the wordmark strip.
- `/sitemap.xml` and `/robots.txt` return 200; a deep link like `/anything` returns the SPA, not a host 404.
- Fonts and `player.vimeo.com` load with no mixed-content or CSP errors in console.

## Open question before implementing

Which host is canonical in production — `https://www.omnisx.ai/` or the apex `https://omnisx.ai/`? Every canonical/og:url/sitemap/robots edit above depends on that single answer. Default if unspecified: use `https://www.omnisx.ai/` as stated in the request.
