# OmnisX — Post-Correction Independent Art-Direction Audit

Read-only re-proof of current main. Prior verdicts ignored. Rendered settled states at 2560 / 2048 / 1920 / 1800 / 1700 / 1440 / 1280 / 1024 / 768 / 390, full scroll-through, plus per-section element captures at 2048 / 1440 / 390.

## Mechanical baseline (passes, but not approval)

- `scrollWidth === clientWidth` at all ten widths. No horizontal displacement, no clipped first glyphs, no overflow. Left-edge bug is genuinely fixed.
- Container caps confirmed: 1400px to 1799, 1680px at 1800+, 1860px at 2200+.
- Only console output is the pre-existing React `forwardRef` warning chain (App / TooltipProvider / Toaster / ToastProvider). Non-visual, but still present after a prior pass claimed it fixed.
- No half-settled reveal states observed after normal scroll; nothing renders as "unloaded".

## Defect board

### D1 — Category Statement headline widow · 2560 / 2048 / 1920
Defect: headline resolves to four lines with "intelligence." alone on line 4 at 2048 and 2560. Measured 4 lines, 48px, on a 2048 canvas.
Severity: MATERIAL.
Why perceived as weak: the first thing below the hero is a stranded single word under a 3-line stack — reads as an unbalanced text box rather than a set headline.
Repair: give the Category headline an explicit wide max-width step (approx. 22–26ch at 1800+) so it resolves to 3 balanced lines; `text-balance` alone is not winning against the current column width.
Present at: 2048 yes, 1920 yes, 1700 no (3 lines), mobile no.

### D2 — Argument-tier type stops scaling above 1700 · 2560 / 2048 / 1920 / 1800
Defect: Tier-B headlines are pinned at 48px (clamp ceiling 3rem) and Tier-C at 34.4px regardless of canvas. At 2560 a 48px headline sits inside a 1680px column inside a 2560px field.
Severity: MATERIAL.
Why: type reads undersized and the page feels like a 1400px layout enlarged, not composed for the viewport.
Repair: raise the clamp ceilings for `argument` (to ~3.6rem) and `exhibit` (to ~2.6rem) — vw term already exists, only the cap is wrong. No layout restructuring needed.
Present at: 2048 yes, 1920 yes, 1700 marginal, mobile no.

### D3 — Agent Services right panel is the page's thinnest moment · 2048 / 1920
Defect: the section is a 6-row label/value table beside a short text column; below the left column sits roughly 200px of empty field, and the whole section is only 522px tall against neighbours of 1000–2300px.
Severity: MATERIAL.
Why: after two dense systems sections this reads as a spec table someone pasted in, not an exhibit. The empty lower-left is not cinematic — it is unfilled.
Repair concept (warranted): turn the service contract into an **engagement handshake** graphic. Two persistent-agent glyphs, left = requesting agent, right = offering agent; the contract rows become the wire between them, and the `AUTHORITY` and `ESCALATION` rows terminate in a visibly capped edge showing delegation stopping. Scroll-linked one-shot: the wire draws left-to-right once on entry and stays lit; the authority cap never opens. Communicates "engagement without a human wiring the two together, authority bounded by contract". No looping motion.
Present at: 2048 yes, 1920 yes, 1700 partly, mobile no (stacks acceptably).

### D4 — Capability Evolution showpiece under-scales on ultra-wide · 2560 / 2048
Defect: the showpiece stage stays ~1020px wide inside 2048 (and 2560), leaving ~500px black on each side, while it is the tallest section on the page at 2308px. Headline at 62.4px is the largest type on the page but still small for the canvas.
Severity: MATERIAL.
Why: the declared climax is the narrowest composed block at wide widths — the crescendo flattens exactly where it should peak.
Repair: allow the two-plane stage to grow to ~1320px at 1800+ and ~1450px at 2200+, and lift the display clamp ceiling. Keep the centred axis and the authority seam symmetry — the side voids around a centred showpiece are legitimate, but not at this ratio.
Present at: 2560 yes, 2048 yes, 1920 marginal, 1700 no, mobile no.

### D5 — Category Statement right panel has an internal dead band · 2048 / 1440
Defect: inside the "BEING" panel there is a large empty gap between the pulse glyph and the mission rail, and a further ~150px empty field below the doctrine chips before the section ends.
Severity: MINOR.
Why: the panel reads as a diagram waiting for a second element.
Repair: tighten panel internal padding and pull the mission rail up; optionally extend the rail to five ticks so it spans the panel width.
Present at: 2048 yes, 1920 yes, 1700 yes, 1440 yes, mobile no.

### D6 — Persistent Beings comparison is visually unequal · 2048
Defect: the conventional-automation card ends at 655px while the OmnisX card runs to 895px, and the left card's four rows are faint hairlines with right-aligned labels that read as placeholder.
Severity: MINOR.
Why: the comparison is the argument; a visibly starved left side looks like missing content rather than intentional contrast.
Repair: keep the asymmetry of weight but equalise card height (align both to the taller box) and raise the left rows' contrast one step so they read as a deliberate "amnesiac" state, not a loading skeleton.
Present at: 2048 yes, 1920 yes, 1700 yes, mobile no (stacked).

### D7 — Governed Autonomy guarantees grid bottoms out unevenly · 2048
Defect: the six-item guarantee grid ends with a wide empty band under the last left cell, and the label column microcopy (11px mono, muted) is faint at this canvas size.
Severity: MINOR.
Why: the section's closing authority statement fades out rather than landing.
Repair: bump guarantee label size one step at 1800+ and close the trailing band.
Present at: 2048 yes, 1920 yes, 1700 marginal, mobile no.

### D8 — Capability Evolution mobile headline break · 390
Defect: "Deployed with / a baseline." breaks after "with", stranding a two-word line.
Severity: MINOR.
Why: the showpiece opens on a broken phrase.
Repair: allow the display clamp to drop slightly at <420px so line one holds "Deployed with a".
Present at: mobile only.

### D9 — Capability Evolution mobile artefact bar is illegible · 390
Defect: the "ONE ARTEFACT · FORMING" stage labels (01–06) render at sub-10px and near-invisible contrast under the bars.
Severity: MINOR.
Why: looks like a rendering failure.
Repair: drop to three visible stage bars on mobile with readable labels, or remove the numeric labels and keep the bars.
Present at: mobile only.

### D10 — React forwardRef warning chain · all widths
Defect: repeated "Function components cannot be given refs" warnings at load.
Severity: MINOR (non-visual).
Repair: wrap the offending button/anchor component in `React.forwardRef`.
Present at: all widths.

### CLEAR — verified good
- Commissioning right-side map: genuinely composes. The branch at 03/04, the purple commissioned path and the return rail read as one system, not filler. CLEAR at 2048/1920/1700.
- Capability Network: now reads as a network — core object with lineage bars, four wired property nodes, compounding loop closing underneath. CLEAR at 2048/1920/1700; mobile snap-strip with peeking card is a correct affordance.
- Intent → Intelligence: nine-stage rail plus accumulating artefact object is the strongest wide composition on the page; rail chips legible at 2048. CLEAR.
- Workforces mobile order (copy before diagram) is correct at 390. CLEAR.
- Final Access section: the large black field around the centred CTA is intentional and cinematic. Keep empty.
- Header: no partial sticky states, no overlap defects at any width.

## Counts

- Headline widows/orphans: 2 (D1 wide, D8 mobile).
- Under-composed / dead-space sections: 4 (Agent Services, Capability Evolution ultra-wide, Category panel, Governed Autonomy tail).
- Sections genuinely meriting a new motion/system graphic: 1 (Agent Services — engagement handshake, D3).

## FINAL ART-DIRECTION VERDICT

**NOT READY** — 4 MATERIAL defects. All four are wide-desktop composition failures (D1, D2, D3, D4); nothing is broken mechanically, but the page does not yet read as deliberately composed at 1920 and above, and the declared climax is the narrowest block on the canvas.

## If you want the fixes

A follow-up pass would be scoped to: clamp ceilings and headline max-widths (D1, D2, D8), showpiece stage width (D4), the Agent Services handshake graphic (D3), and the four minors. Hero, header, logo, doctrine and all visible copy stay frozen.
