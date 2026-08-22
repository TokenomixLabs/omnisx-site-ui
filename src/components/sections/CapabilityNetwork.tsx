import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, Lede } from "@/components/body/primitives";

const properties = [
  {
    id: "asset",
    title: "Capabilities are assets",
    body: "A capability built once is versioned, described and owned — not buried inside a single agent's implementation.",
    span: "lg:col-span-3",
  },
  {
    id: "shared",
    title: "Shared across the network",
    body: "What one agent gains can be made available to others, so intelligence compounds instead of being rebuilt.",
    span: "lg:col-span-3",
  },
  {
    id: "provenance",
    title: "Provenance is recorded",
    body: "Where a capability came from, what it claims, what proved it and under what authority it runs stays attached to it.",
    span: "lg:col-span-2",
  },
  {
    id: "repair",
    title: "Repairable and replaceable",
    body: "Underperforming capabilities can be revised or revised or withdrawn without rebuilding the agents that hold them.",
    span: "lg:col-span-2",
  },
  {
    id: "compounding",
    title: "Compounding by design",
    body: "Each mission leaves the network measurably more capable than it found it.",
    span: "lg:col-span-2",
  },
];

const CapabilityNetwork = () => (
  <Section id="network" tone="deep" className="py-20 md:py-28">
    <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[760px] max-w-[130vw] -translate-x-1/2 rounded-full bg-primary/[0.045] blur-[110px]" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <ScrollReveal>
            <Eyebrow>Living capability network</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <SectionTitle className="mt-5">
              Intelligence built once,
              <br />
              <span className="text-gradient">available everywhere after.</span>
            </SectionTitle>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.14}>
          <Lede className="max-w-md md:text-right">
            The value of the system is not any single agent. It is the accumulated capability that
            every agent can draw on.
          </Lede>
        </ScrollReveal>
      </div>

      <div className="mt-12 grid gap-4 md:mt-16 lg:grid-cols-6">
        {properties.map((p, i) => (
          <ScrollReveal key={p.id} delay={i * 0.05} className={p.span}>
            <div className="group relative h-full overflow-hidden rounded-xl border border-white/[0.06] bg-card/50 p-6 transition-all duration-500 hover:border-primary/25 md:p-8">
              <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="font-mono text-[0.625rem] tracking-[0.2em] text-muted-foreground/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-orbitron text-base font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <span className="mt-6 block h-px w-10 bg-primary/40 transition-all duration-500 group-hover:w-20" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </Section>
);

export default CapabilityNetwork;
