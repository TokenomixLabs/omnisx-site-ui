# OmnisX — Full-Page Visual Release Audit (read-only)

Method: rendered the live page at 1700 / 1440 / 1280 / 1024 / 768 / 390, scrolled top-to-bottom to trigger all reveals, captured tiled screenshots, measured every section's top offset and height, checked horizontal overflow and console output. No code was changed.

**OVERALL VERDICT: AMBER — not GREEN.** 0 blockers, 5 material findings, 5 minor, 1 unverified (hero video on production domain). The crescendo still lands and nothing is broken, but four spacing/ordering defects make specific bands read as empty or out of sequence.

Counts: BLOCKER 0 · MATERIAL 5 · MINOR 5 · CLEAR 7

---

## MATERIAL

**M1 — Hero → body handoff has a dead band (all widths, worst at 390)**
The hero is a fixed 16:9 frame; below it sits the descent gradient plus the top padding of Category Statement. At 1440 that is roughly 190px of pure black between the video edge and the first eyebrow; at 390 the video is only ~220px tall and is followed by ~120px of nothing before "AGENT SUPERINTELLIGENCE". Why it matters: the first scroll gesture after the hero returns no content, which reads as a loading gap rather than a cinematic beat.
Smallest safe fix concept: reduce Category Statement's top padding only (hero component untouched) and let the existing descent line carry the transition.

**M2 — Workforces renders the diagram before its own headline below 1024**
The text column carries `lg:order-first`, so at 768 and 390 the mission/agent panel appears first and the headline "Single agents solve tasks…" arrives after it. Why it matters: on mobile the section opens with an unexplained diagram — the one place the page loses narrative order.
Smallest safe fix concept: make the text column first by default and let the visual follow (`order-first` on the copy at all widths, or drop the reversal entirely).

**M3 — Intent → Intelligence accumulation rails read as a failed load (≥1280)**
Inside the Stage 01 panel the nine accumulation rows render as near-black hairlines with labels at very low opacity; only the top row has colour. On a large display the panel looks like content that failed to paint.
Smallest safe fix concept: raise the rail and label opacity floor a step so inactive rows are legibly present, keeping the active row dominant.

**M4 — Oversized negative space framing the showpiece**
Between Persistent Beings and the Capability Evolution headline there is the breath band plus `py-44` showpiece padding — about 700px of empty canvas at 1440 before the first word. The same stack repeats on exit: ~380px of void plus a second breath band before Agent Services. Why it matters: the pause is meant to build tension but currently overshoots into two dead screens on a 1440 laptop.
Smallest safe fix concept: shorten the breath bands, or trim the showpiece's top/bottom padding — not both surfaces at once.

**M5 — Persistent Beings left column stretches to a hollow card (≥1024)**
The "Conventional automation" card uses `h-full`, so it matches the taller OmnisX card and ends with roughly 250px of empty interior below its last line at 1440. Why it matters: an intentionally empty panel next to a dense one reads as missing content, not as contrast.
Smallest safe fix concept: drop `h-full` on that column (align to top) or add the one closing line the panel is missing.

---

## MINOR

- **Exhibit tier silhouette repeats.** Agent Services, Commissioning and Capability Network all open eyebrow → compact title → panel/grid at nearly identical heights (490 / 526 / 446px at 1440). Fix concept: vary one of the three (e.g. give Commissioning a full-width rail) rather than restyling the tier.
- **Capability Network strip clips without affordance on mobile.** Card 02 is cut by the viewport edge with no gradient or scroll hint. Fix concept: add a right-edge fade or a small "scroll" cue.
- **Visual anchor inconsistency at 1440.** Governed Autonomy is left-aligned in a ~770px column with a wide empty right margin, while the two sections around it are centred. Fix concept: centre the Governed Autonomy header block to match its neighbours.
- **Access section closing anchor is soft.** The final card states the intake channel "is being connected" with no address; the page ends on an absence. Fix concept: publish one real contact address when available — copy only.
- **Console noise.** Repeated `Function components cannot be given refs` warnings from the dev tagger. Dev-only, absent in production builds; no action.

---

## CLEAR

- No horizontal overflow at any of the six widths.
- No clipped or truncated typography found at any width, including the Orbitron display lines at 390.
- Section order and anchor ids are intact and match the nav (`pipeline`, `evolution`, `governance`, `access`).
- Capability Evolution still reads as the centrepiece: two labelled planes, the authority seam, and the return path are all legible at every width including 390.
- Mobile completeness: every section present at 390, all copy readable, no cut content, page height 15,233px.
- Doctrine consistent throughout — persistent beings, self-extension, "creation is not permission", isolated proof preceding authority.
- Footer, nav and mobile menu render correctly at all widths.

---

## UNVERIFIED

**Hero video playback on the production domain.** In this sandbox the Vimeo embed returns a connection-verification interstitial, so the hero renders as a text error panel at every width. This is an environment/network artefact, not evidence of a site defect — but it means the hero cannot be visually cleared here. Requires a smoke check on omnisx.ai after deploy before any GREEN verdict.

---

No code changes were made. Approving this plan does not authorise edits — the fix concepts above are scoped for a separate, explicit fix pass.
