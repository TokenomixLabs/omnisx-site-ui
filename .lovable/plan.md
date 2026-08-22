# OmnisX — Final Art-Direction Audit (no code changes)

Reviewed the live render at 1440px (12,461px tall) and 390px (16,197px tall), plus current section source. Hero, Navigation and hero.css excluded per freeze. Doctrine unchanged in every recommendation below: persistent beings, self-extension, creation is not permission, isolated build/proof before authority, authority governed by consequence.

## 1. Every section shares one identical rhythm — the page has no crescendo

**Issue.** Nine of ten body sections open the same way: mono eyebrow, two-line Orbitron headline where line two is greyed or gradient-filled, a lede, then a single bordered dark panel. `CategoryStatement`, `IntentToIntelligence`, `PersistentBeings`, `CapabilityEvolution`, `AgentServices`, `Workforces`, `HiringLoop`, `CapabilityNetwork` and `GovernedAutonomy` are visually interchangeable at thumbnail scale. Section padding is also near-uniform (`py-20 md:py-28/32`).

**Why it matters.** A category-defining page needs a shape: setup, escalation, showpiece, resolution. Uniform rhythm reads as a well-built template, and it flattens the one argument that should dominate — the authority boundary.

**Treatment.** Assign each section an explicit tier and enforce it structurally, not just with copy:
- Tier A (showpiece, full-bleed, `py-32 md:py-44`, darkest tone, own ambient field): Capability Evolution only.
- Tier B (argument, standard `py-24`): Persistent Beings, Governed Autonomy, Workforces.
- Tier C (evidence, compressed `py-16`, no eyebrow, no headline gradient): Agent Services, Capability Network, Hiring Loop — these should read as supporting exhibits, not as three more manifestos.
Vary the headline construction too: the "line one white / line two muted-or-gradient" pattern should appear at most three times on the page, reserved for Tier A and the two strongest Tier B beats.

## 2. Capability Evolution is the thesis but renders as a long bulleted list

**Issue.** The section is currently 11 stacked stages of `number + Orbitron title + paragraph` on a left border rail. On desktop it occupies roughly three screens of near-identical text rows; the only visual event is the "Creation is not permission." box. Nothing in the visual language depicts isolation, proof, versioning or promotion — those concepts exist only as prose.

**Why it matters.** This is the differentiator. Right now the reader must read 11 paragraphs to understand something that should be legible in one glance, and the boundary — the single most important idea on the site — competes with ten sibling rows of equal weight.

**Treatment.** Rebuild as a two-plane diagram with a hard horizontal seam:
- Upper plane ("isolated"): a contained, visibly bounded field — dashed containment border, cool primary tint, no connection lines leaving it. Stages 01–06 collapse into six compact nodes inside that field with title-only labels; body copy moves to hover/tap detail or a single shared caption. The artefact object grows visibly across the six nodes (same accumulation device already proven in Intent→Intelligence).
- The seam: a full-width authority gate — a solid secondary-coloured line the artefact cannot cross on its own, with the version/provenance stamp shown as a fixed record (`v0.1 · origin · claim · evidence`) sitting on the isolated side of the line.
- Lower plane ("operational"): stages 09–11 as a live lane, where the same artefact now carries a version badge and a revocable state chip, with an explicit reverse arrow back over the seam labelled roll back / withdraw.
Reduce prose to one sentence per stage maximum; the diagram must carry the argument. Keep the wording of stage 08 exactly as-is (policy-governed or delegated for low consequence; explicit human approval for consequential) so no universal pre-build approval is implied.

## 3. Orbitron is doing work it was never meant to do

**Issue.** Orbitron currently sets section headlines, every sub-heading, every stage title, panel titles, and pull-quotes. In Capability Evolution alone it appears at four sizes, including 11 stage titles at 16px. At body scale its wide letterforms and squared terminals lose legibility and start to read as sci-fi styling rather than authority.

**Why it matters.** A display face used everywhere stops signalling importance, and the effect at small sizes is the opposite of premium — it reads gamey, which undercuts the "serious infrastructure" positioning the copy is arguing for.

**Treatment.** Hard rule: Orbitron only at section-headline scale (≥28px) and for the two or three doctrine statements ("Creation is not permission.", "Self-extension is real. Self-authorisation is not."). Everything below that — stage titles, panel titles, card titles, sub-heads — moves to Space Grotesk at 500/600 with tightened tracking. Codify this in `primitives.tsx` so future sections inherit it rather than opting in.

## 4. Motion never depicts persistence, accumulation or promotion

**Issue.** Scroll behaviour across the body is a single `ScrollReveal` fade-and-rise applied uniformly, plus decorative ambient blur and a dash drift. The one motion idea that is genuinely on-message — the thickening layer stack in Intent→Intelligence — is used once and never returns.

**Why it matters.** The site's central claim is that things accumulate and are never discarded. If motion is generic reveal-on-scroll, the page asserts persistence but performs disposability, and every diagram feels like a static illustration of a claim rather than the system behaving.

**Treatment.** Define three reusable motion primitives and use them as the site's motion vocabulary, all within the existing native-CSS + IntersectionObserver approach and all subtle fade/translate/opacity only:
- Accumulate: previously-revealed rows stay lit and gain a persistent left tick as later rows enter (Intent→Intelligence, Capability Evolution isolated plane, Capability Network).
- Retain: in Workforces, agent nodes that have already appeared keep a faint history trace when the mission core changes — nothing resets between beats.
- Promote: a one-time, slow opacity/tint change as the authority seam enters the viewport — the lower plane lifting from dim to live. Never looping, never bouncing.

## 5. Mobile pays for the desktop diagrams — 16,197px of near-uniform column

**Issue.** At 390px every two-column composition linearises into the same stacked sequence: heading, long lede, blockquote, then a tall panel of label/value rows. The Agent Services contract, the Capability Network five-card grid and the Hiring Loop rail all become the same vertical list, and the mobile page runs 30% longer than desktop with less structure to break it up. Hiring Loop's alternating rail also centres its body copy, which is hard to read on a narrow column.

**Why it matters.** Mobile is where the "inevitable" feeling is won or lost, and right now it is a long scroll of prose with no visual peaks.

**Treatment.**
- Cut lede and blockquote copy by roughly 40% below `md` (short-form variants, not smaller type) so each beat is one screen of reading, not three.
- Give mobile its own version of the two heaviest exhibits: the Agent Services contract becomes a compact two-column key/value table, and Capability Network becomes a single horizontally-scrollable capability strip rather than five stacked cards.
- Left-align all rail copy on mobile and drop the alternating layout in Hiring Loop to a single left rail.
- Add a real full-bleed breath before and after Capability Evolution on mobile (dark seam band, no content) so the showpiece is framed rather than continuous with its neighbours.

## Technical notes

Sections referenced: `src/components/sections/{CapabilityEvolution,IntentToIntelligence,PersistentBeings,AgentServices,Workforces,HiringLoop,CapabilityNetwork,GovernedAutonomy,CategoryStatement}.tsx`, shared `src/components/body/primitives.tsx`, `src/components/animations/ScrollReveal.tsx`, tokens in `src/index.css`. Type-scale and section-tier rules belong in `primitives.tsx`; the three motion primitives belong alongside `ScrollReveal` with existing `prefers-reduced-motion` handling honoured. No hero file is touched by any recommendation above.

Findings only — nothing implemented. Say which of the five you want built and in what order.
