# OmnisX — Live Production Host Verification (read-only findings)

No code was changed.

## Verdict

**LIVE PARITY = GREEN, with one canonical/host-binding conflict to resolve.**
Deploy is current, both hosts resolve, TLS valid, all discovery files serve. The single real defect is that every canonical signal points at `www`, but `www` 301-redirects to the apex — so the declared canonical URL is not the served URL.

## Host and transport

| Item | Result |
| --- | --- |
| DNS `omnisx.ai` | 63.176.8.218 / 35.157.26.135 (Netlify) |
| DNS `www.omnisx.ai` | same two A records |
| `https://www.omnisx.ai/` | 301 → `https://omnisx.ai/` |
| `https://omnisx.ai/` | 200, `server: Netlify` |
| Primary host actually served | **apex `omnisx.ai`** |
| TLS | valid on both hosts (verify result 0), HTTP/2, no mixed-content errors |
| Redirect chain | single hop, no loops |

## Deployed head parity (fetched from live apex)

| Tag | Live value | Matches source |
| --- | --- | --- |
| `<title>` | OmnisX.ai - The Intelligence Layer for Autonomous Agents | YES |
| description | The intelligence layer for persistent, governed, evolving agents. | YES |
| canonical | https://www.omnisx.ai/ | YES (but see conflict) |
| og:url | https://www.omnisx.ai/ | YES (same conflict) |
| og:image | https://www.omnisx.ai/og-image.png | YES |
| twitter:image / card | same image / summary_large_image | YES |
| theme-color | #161537 | YES |
| JSON-LD Organization | present, url + logo on www | YES |
| favicon link | present | YES |

Latest source fix pass **is deployed** — the live head is byte-equivalent to `index.html`.

## Discovery, assets, routing

| Check | Result |
| --- | --- |
| `/robots.txt` | 200, allow-all, `Sitemap: https://www.omnisx.ai/sitemap.xml` |
| `/sitemap.xml` | 200, `application/xml`, single `<loc>https://www.omnisx.ai/</loc>` |
| `/og-image.png` | 200, image/png, 233 KB, **1200x629** |
| `/favicon.ico` | 200 |
| `/nonsense-path-zzz` | 200 HTML, identical 2353-byte shell — SPA fallback works |
| lovable/preview/localhost leakage | none in live HTML |

## The one defect: canonical points at a redirecting host

Canonical, og:url, JSON-LD `url`, og/twitter image host, and the sitemap `<loc>` all declare `https://www.omnisx.ai/`, but that host returns 301 to the apex. Consequences: crawlers follow a redirect for every declared URL, social scrapers fetch images through a redirect, and the sitemap lists a non-200 URL. Not fatal, but it splits the canonical signal.

Two mutually exclusive resolutions — pick one:

- **A. Make www primary (matches current source).** Infrastructure change in Netlify/domain settings: set `www.omnisx.ai` as the primary domain so the apex 301s to www instead. No code change.
- **B. Make apex canonical (matches current hosting).** Code change: rewrite canonical, og:url, og:image, twitter:image, JSON-LD url/logo, robots `Sitemap:` line, and sitemap `<loc>` from `https://www.omnisx.ai/` to `https://omnisx.ai/`. Files: `index.html`, `public/robots.txt`, `public/sitemap.xml`. Nothing in `src/`.

## Hero Vimeo on production — UNVERIFIED

The live page renders the Vimeo iframe at the correct position (1280x720, top of page, mute control present). Inside the iframe the sandbox browser received a Cloudflare interstitial: "We couldn't verify the security of your connection." That is this environment's egress being challenged, not evidence of a broken embed or a missing domain whitelist. Playback on `omnisx.ai` remains **UNVERIFIED** and needs a check from a normal browser on a residential/office network. Console showed no app errors — only Vimeo permissions-policy warnings, which are cosmetic.

## Remaining live items not resolvable from here

1. Decide www-vs-apex (above), then re-scrape LinkedIn/X/Facebook debuggers so cached previews refresh.
2. Confirm hero video playback and mute toggle on the live domain from a real browser.
3. Optional: `og-image.png` is 1200x629, one pixel under the conventional 630. Harmless.
