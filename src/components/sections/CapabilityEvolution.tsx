import React from "react";
import { ScrollReveal, Accumulate, Promote } from "@/components/animations/ScrollReveal";
import {
  Section,
  Eyebrow,
  SectionTitle,
  Lede,
  StateChip,
  DirectionNote,
  Doctrine,
  PanelTitle,
} from "@/components/body/primitives";
import { cn } from "@/lib/utils";

type Node = { index: string; title: string; line: string };

/** Upper plane — isolated creation. Nothing here reaches live systems. */
const isolatedNodes: Node[] = [
  { index: "01", title: "Limit", line: "Real work meets something current capability cannot do." },
  { index: "02", title: "Requirement", line: "The shortfall becomes inputs, results and a measure of success." },
  { index: "03", title: "Search & reuse", line: "The network is checked first; proven capability beats a new one." },
  { index: "04", title: "Author & build", line: "When nothing fits, the agent authors it inside an isolated environment." },
  { index: "05", title: "Generate checks", line: "Checks are derived from the requirement that caused the work." },
  { index: "06", title: "Isolated proof", line: "It demonstrates the behaviour — or fails harmlessly, contained." },
];

/** Lower plane — operational life, after governed promotion. */
const operationalNodes: Node[] = [
  { index: "09", title: "Operational use", line: "Available to the agent and the network within the authorised scope — nothing wider." },
  { index: "10", title: "Monitored in service", line: "Live behaviour is measured against the claim it was promoted on." },
  { index: "11", title: "Repair, replace, roll back", line: "Versions are revised, superseded or withdrawn without rebuilding the agent." },
];

const provenance = [
  { k: "Version", v: "immutable revision" },
  { k: "Origin", v: "the requirement that caused it" },
  { k: "Claim", v: "what it asserts it can do" },
  { k: "Evidence", v: "the proof behind the claim" },
];

const NodeCell = ({ n, tone }: { n: Node; tone: "isolated" | "operational" }) => (
  <div
    className={cn(
      "group relative h-full rounded-lg border px-4 py-4 transition-colors duration-500",
      tone === "isolated"
        ? "border-primary/15 bg-primary/[0.03] hover:border-primary/35"
        : "border-foreground/10 bg-white/[0.02] hover:border-primary/25"
    )}
  >
    <span className="font-mono text-[0.5625rem] tracking-[0.22em] text-muted-foreground/50">
      {n.index}
    </span>
    <PanelTitle className="mt-1.5 text-[0.9375rem] leading-snug">{n.title}</PanelTitle>
    <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">{n.line}</p>
  </div>
);

const CapabilityEvolution = () => (
  <Section id="evolution" tone="void" tier="showpiece">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.025]" />
    <div className="pointer-events-none absolute left-1/2 top-[18%] h-[560px] w-[1100px] max-w-[140vw] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[150px]" />
    <div className="pointer-events-none absolute left-1/2 top-[52%] h-[420px] w-[1200px] max-w-[150vw] -translate-x-1/2 rounded-full bg-secondary/[0.06] blur-[150px]" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <Eyebrow tone="secondary">Signature capability</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <SectionTitle variant="display" className="mt-6">
            Deployed with a baseline.
            <br />
            <span className="text-gradient">Never with a ceiling.</span>
          </SectionTitle>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <Lede className="mt-6">
            An OmnisX agent that meets a limit can author the missing capability, generate its own
            checks and prove it — in isolation. What it cannot do is hand itself the right to run it.
          </Lede>
        </ScrollReveal>
      </div>

      {/* ================= TWO-PLANE SYSTEM ================= */}
      <div className="relative mx-auto mt-14 max-w-5xl md:mt-20">
        {/* ---------- UPPER PLANE: ISOLATED CREATION ---------- */}
        <div className="relative rounded-2xl border border-dashed border-primary/30 bg-primary/[0.02] p-5 md:p-8">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-grid opacity-[0.05]" />

          <div className="relative flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-primary/80">
                Plane 01 · Isolated creation
              </p>
              <PanelTitle className="mt-2 text-base md:text-lg">
                New capability is built and proven here — with no reach into live systems.
              </PanelTitle>
            </div>
            <StateChip tone="active">Contained</StateChip>
          </div>

          <Accumulate className="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {isolatedNodes.map((n) => (
              <NodeCell key={n.index} n={n} tone="isolated" />
            ))}
          </Accumulate>

          {/* the single artefact, forming as it advances */}
          <div className="relative mt-7 rounded-xl border border-white/[0.06] bg-background/50 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground/60">
                One artefact · forming
              </span>
              <StateChip tone="neutral">Unauthorised</StateChip>
            </div>
            <Accumulate className="mt-4 grid grid-cols-6 items-end gap-1.5" step={0.12}>
              {isolatedNodes.map((n, i) => (
                <div key={n.index}>
                  <span
                    className="block w-full rounded-full bg-gradient-to-r from-primary/70 to-secondary/50 shadow-[0_0_12px_-2px_hsl(var(--primary)/0.6)]"
                    style={{ height: `${4 + i * 2}px` }}
                  />
                  <span className="mt-2 block text-center font-mono text-[0.5rem] tracking-[0.14em] text-muted-foreground/45">
                    {n.index}
                  </span>
                </div>
              ))}
            </Accumulate>
            <p className="mt-3 font-mono text-[0.625rem] leading-relaxed text-muted-foreground/50">
              Nothing is discarded between stages — the same artefact carries everything it has
              gained forward.
            </p>
          </div>

          {/* version / provenance record */}
          <div className="relative mt-4 rounded-xl border border-primary/20 bg-card/50 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-primary/80">
                Version &amp; provenance record
              </span>
              <StateChip tone="evolved">Proven · not promoted</StateChip>
            </div>
            <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {provenance.map((p) => (
                <div key={p.k} className="flex items-baseline justify-between gap-4 border-b border-white/[0.05] pb-2">
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground/70">
                    {p.k}
                  </dt>
                  <dd className="text-right text-[0.8125rem] text-foreground/80">{p.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="relative mt-4 text-center font-mono text-[0.625rem] uppercase tracking-[0.2em] text-primary/50">
            ↓ no path from this plane reaches live systems ↓
          </p>
        </div>

        {/* ---------- AUTHORITY SEAM ---------- */}
        <div className="relative my-8 md:my-10">
          <div className="relative overflow-hidden rounded-2xl border border-secondary/40 bg-secondary/[0.06] px-5 py-8 text-center md:px-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

            <p className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-secondary">
              Authority seam · lifecycle &amp; permission gate
            </p>
            <Doctrine className="mx-auto mt-4 max-w-2xl text-[clamp(1.4rem,3.4vw,2.25rem)]">
              Creation is not permission.
            </Doctrine>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Execution authority is granted separately. Low-consequence promotions may be
              policy-governed or delegated; consequential ones require explicit human approval. A
              capability may exist, be versioned and be fully proven before it is ever authorised
              to run.
            </p>
          </div>
        </div>

        {/* ---------- LOWER PLANE: OPERATIONAL LIFE ---------- */}
        <Promote>
          <div className="relative rounded-2xl border border-foreground/15 bg-white/[0.015] p-5 md:p-8">
            <div className="relative flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-foreground/70">
                  Plane 02 · Operational life
                </p>
                <PanelTitle className="mt-2 text-base md:text-lg">
                  The same artefact, now running under an authority granted to it.
                </PanelTitle>
              </div>
              <div className="flex flex-wrap gap-2">
                <StateChip tone="evolved">v · scoped</StateChip>
                <StateChip tone="gate">Revocable</StateChip>
              </div>
            </div>

            <div className="relative mt-6 rounded-xl border border-white/[0.06] bg-background/40 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground/60">
                  Capability
                </span>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-secondary/80">
                  Authority · granted separately
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <span className="h-[6px] rounded-full bg-gradient-to-r from-primary/70 to-primary/30" />
                <span className="h-[6px] rounded-full bg-gradient-to-r from-secondary/60 to-secondary/20" />
              </div>
              <p className="mt-3 font-mono text-[0.625rem] leading-relaxed text-muted-foreground/50">
                Two separate records. Withdrawing authority does not delete the capability;
                improving the capability does not widen the authority.
              </p>
            </div>

            <Accumulate className="relative mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
              {operationalNodes.map((n) => (
                <NodeCell key={n.index} n={n} tone="operational" />
              ))}
            </Accumulate>

            {/* reverse / withdraw path */}
            <div className="relative mt-6 flex items-center gap-3 rounded-lg border border-secondary/25 bg-secondary/[0.04] px-4 py-3">
              <span className="font-mono text-base leading-none text-secondary" aria-hidden="true">
                ↑
              </span>
              <p className="font-mono text-[0.625rem] uppercase leading-relaxed tracking-[0.16em] text-secondary/80">
                Roll back · supersede · withdraw authority — back across the seam at any time
              </p>
            </div>
          </div>
        </Promote>
      </div>

      <ScrollReveal delay={0.1}>
        <div className="mx-auto mt-14 max-w-2xl text-center">
          <Doctrine className="text-[clamp(1.1rem,2.2vw,1.5rem)]">
            Self-extension is real. Self-authorisation is not.
          </Doctrine>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The boundary OmnisX enforces is between what an agent can construct and what it is
            permitted to run. Authority is granted by lifecycle and permission rules — scaled to
            consequence — never assumed by the agent that built the capability.
          </p>
          <div className="mt-6">
            <DirectionNote>
              Described as designed system behaviour and product direction. Capability state and
              enforcement detail are not fully public.
            </DirectionNote>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </Section>
);

export default CapabilityEvolution;
