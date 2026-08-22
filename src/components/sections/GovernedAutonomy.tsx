import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, Lede, Hairline } from "@/components/body/primitives";

const guarantees = [
  {
    k: "Explicit authority",
    v: "Every agent operates inside permissions it was granted — never permissions it assumed.",
  },
  {
    k: "Approval before change",
    v: "New capabilities require a human decision to build and a second to deploy.",
  },
  {
    k: "Isolation before trust",
    v: "Untested work is exercised away from live operations and promoted only on proof.",
  },
  {
    k: "Attributable action",
    v: "Who acted, under which mission, with what authority, and what resulted — recorded.",
  },
  {
    k: "Reversibility",
    v: "Capability versions can be rolled back without rebuilding the agent that holds them.",
  },
];

const GovernedAutonomy = () => (
  <Section id="governance" className="py-20 md:py-28">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <Eyebrow tone="muted">Governed autonomy</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <SectionTitle className="mt-5">
            Autonomy is only useful if it is accountable.
          </SectionTitle>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <Lede className="mt-6">
            The point of persistent, evolving agents is leverage — and leverage without control is a
            liability. Governance is not a settings page in OmnisX; it is where the architecture
            starts.
          </Lede>
        </ScrollReveal>

        <ScrollReveal delay={0.22}>
          <Hairline className="mt-12" />
        </ScrollReveal>

        <dl className="mt-2">
          {guarantees.map((g, i) => (
            <ScrollReveal key={g.k} delay={i * 0.05}>
              <div className="grid grid-cols-1 gap-1 border-b border-white/[0.05] py-5 transition-colors duration-300 hover:bg-white/[0.015] sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-8">
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-primary/75">
                  {g.k}
                </dt>
                <dd className="text-sm leading-relaxed text-foreground/80">{g.v}</dd>
              </div>
            </ScrollReveal>
          ))}
        </dl>
      </div>
    </div>
  </Section>
);

export default GovernedAutonomy;
