import React from "react";
import { ScrollReveal, Accumulate } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, PanelTitle, StateChip } from "@/components/body/primitives";

const properties = [
  {
    id: "asset",
    title: "Capabilities are assets",
    body: "Built once, versioned, described and owned — not buried inside one agent's implementation.",
  },
  {
    id: "shared",
    title: "Shared across the network",
    body: "What one agent gains can be made available to others, so intelligence compounds instead of being rebuilt.",
  },
  {
    id: "provenance",
    title: "Provenance stays attached",
    body: "Where it came from, what it claims, what proved it and under what authority it runs.",
  },
  {
    id: "repair",
    title: "Repairable and replaceable",
    body: "Underperforming capabilities are revised or withdrawn without rebuilding the agents that hold them.",
  },
  {
    id: "compounding",
    title: "Compounding by design",
    body: "Each mission leaves the network measurably more capable than it found it.",
  },
];

const byId = (id: string) => properties.find((p) => p.id === id)!;
const indexOfId = (id: string) => properties.findIndex((p) => p.id === id) + 1;

const NetworkNode = ({
  id,
  align = "left",
}: {
  id: string;
  align?: "left" | "right";
}) => {
  const p = byId(id);
  return (
    <div className="group relative rounded-xl border border-white/[0.07] bg-card/50 p-5 transition-colors duration-500 hover:border-primary/30 2xl:p-6">
      {/* connector into the core */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 hidden h-px w-8 bg-gradient-to-r from-primary/40 to-transparent lg:block 2xl:w-12 ${
          align === "left" ? "left-full" : "right-full rotate-180"
        }`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary/70 lg:block ${
          align === "left" ? "left-full" : "right-full"
        }`}
      />
      <span className="font-mono text-[0.6875rem] tracking-[0.22em] text-muted-foreground/70">
        {String(indexOfId(id)).padStart(2, "0")}
      </span>
      <PanelTitle className="mt-2 text-base leading-snug 2xl:text-lg">{p.title}</PanelTitle>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground 2xl:text-base">
        {p.body}
      </p>
      <span className="mt-4 block h-px w-8 bg-primary/40 transition-all duration-500 group-hover:w-16" />
    </div>
  );
};

const CapabilityNetwork = () => (
  <Section id="network" tone="deep" tier="exhibit">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container relative z-10 mx-auto px-4">
      <ScrollReveal>
        <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-5">
          <Eyebrow className="shrink-0">Exhibit · Capability network</Eyebrow>
          <SectionTitle variant="exhibit" className="max-w-[46rem] lg:max-w-none">
            Intelligence built once, available everywhere after.
          </SectionTitle>
        </div>
      </ScrollReveal>

      {/* ============ NETWORK SYSTEM (lg+) ============ */}
      <div className="mt-10 hidden lg:block">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)_minmax(0,1fr)] items-center gap-x-10 gap-y-6 2xl:gap-x-16">
          <ScrollReveal>
            <NetworkNode id="asset" align="left" />
          </ScrollReveal>

          {/* shared capability object — the core of the network */}
          <ScrollReveal delay={0.08} className="row-span-2">
            <div className="relative rounded-2xl border border-primary/25 bg-primary/[0.05] p-6 backdrop-blur-sm 2xl:p-8">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-grid opacity-[0.06]" />
              <div className="relative flex items-center justify-between gap-3">
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-primary/80 2xl:text-xs">
                  Shared capability object
                </span>
                <StateChip tone="active">v · versioned</StateChip>
              </div>

              <div className="relative mt-5 space-y-2" aria-hidden="true">
                {["v0.1 built", "v1.0 proven", "v1.1 revised", "superseded"].map((v, i) => (
                  <div key={v} className="flex items-center gap-3">
                    <span
                      className="h-[3px] rounded-full bg-gradient-to-r from-primary/80 to-secondary/50 shadow-[0_0_14px_-2px_hsl(var(--primary)/0.6)]"
                      style={{ width: `${34 + i * 14}%` }}
                    />
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {v}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {["origin", "claim", "proof", "authority"].map((c) => (
                  <StateChip key={c}>{c}</StateChip>
                ))}
              </div>

              <p className="relative mt-5 border-t border-white/[0.06] pt-4 text-[0.9375rem] leading-relaxed text-foreground/80 2xl:text-base">
                The value is not any single agent. It is the accumulated capability every agent can
                draw on.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.04}>
            <NetworkNode id="shared" align="right" />
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <NetworkNode id="provenance" align="left" />
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <NetworkNode id="repair" align="right" />
          </ScrollReveal>
        </div>

        {/* compounding loop closes the system */}
        <ScrollReveal delay={0.2}>
          <div className="relative mt-8 overflow-hidden rounded-xl border border-secondary/25 bg-secondary/[0.05] px-6 py-5">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
              <span className="font-mono text-[0.6875rem] tracking-[0.22em] text-secondary/80">
                {String(indexOfId("compounding")).padStart(2, "0")} ↺
              </span>
              <PanelTitle className="text-base leading-snug 2xl:text-lg">
                {byId("compounding").title}
              </PanelTitle>
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground 2xl:text-base">
                {byId("compounding").body}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ============ MOBILE / TABLET STRIP ============ */}
      <div className="relative lg:hidden">
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[hsl(228_18%_6%)] to-transparent" />
        <Accumulate className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {properties.map((p, i) => (
            <div
              key={p.id}
              className="group relative min-w-[74vw] snap-start rounded-lg border border-white/[0.06] bg-card/50 p-5 transition-colors duration-500 hover:border-primary/25 sm:min-w-[320px]"
            >
              <span className="font-mono text-[0.625rem] tracking-[0.22em] text-muted-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <PanelTitle className="mt-2 text-[0.9375rem] leading-snug">{p.title}</PanelTitle>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <span className="mt-4 block h-px w-8 bg-primary/40 transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </Accumulate>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          The value is not any single agent. It is the accumulated capability every agent can draw
          on.
        </p>
      </div>
    </div>
  </Section>
);

export default CapabilityNetwork;
