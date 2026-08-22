import React from "react";
import { ScrollReveal, Accumulate } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, PanelTitle } from "@/components/body/primitives";

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

const CapabilityNetwork = () => (
  <Section id="network" tone="deep" tier="exhibit">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container relative z-10 mx-auto px-4">
      <ScrollReveal>
        <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-5">
            <Eyebrow className="shrink-0">Exhibit · Capability network</Eyebrow>
            <SectionTitle variant="exhibit">
              Intelligence built once, available everywhere after.
            </SectionTitle>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
            The value is not any single agent. It is the accumulated capability every agent can
            draw on.
          </p>
        </div>
      </ScrollReveal>

      {/* Horizontal capability strip — scrolls on mobile, never five tall cards. */}
      <Accumulate className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-5 lg:overflow-visible">
        {properties.map((p, i) => (
          <div
            key={p.id}
            className="group relative min-w-[74vw] snap-start rounded-lg border border-white/[0.06] bg-card/50 p-5 transition-colors duration-500 hover:border-primary/25 sm:min-w-[320px] lg:min-w-0"
          >
            <span className="font-mono text-[0.5625rem] tracking-[0.22em] text-muted-foreground/50">
              {String(i + 1).padStart(2, "0")}
            </span>
            <PanelTitle className="mt-2 text-[0.9375rem] leading-snug">{p.title}</PanelTitle>
            <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">{p.body}</p>
            <span className="mt-4 block h-px w-8 bg-primary/40 transition-all duration-500 group-hover:w-16" />
          </div>
        ))}
      </Accumulate>
    </div>
  </Section>
);

export default CapabilityNetwork;
