import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, Lede, StateChip } from "@/components/body/primitives";

const contractTerms = [
  { k: "Scope", v: "Exactly what the agent will do — and what it will not." },
  { k: "Inputs", v: "The information and access required for the work to begin." },
  { k: "Deliverable", v: "The result that constitutes completion." },
  { k: "Standard", v: "The quality bar the result is measured against." },
  { k: "Authority", v: "Actions permitted without a human decision." },
  { k: "Escalation", v: "Conditions that must be handed back to a person." },
];

const AgentServices = () => (
  <Section id="services" className="py-20 md:py-28">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <ScrollReveal>
            <Eyebrow>Agent services</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <SectionTitle className="mt-5">
              Agents don't publish endpoints.
              <br />
              <span className="text-muted-foreground">They offer services.</span>
            </SectionTitle>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <Lede className="mt-6">
              A service is a commitment stated in business terms: what the work is, what it
              requires, what it returns, and where the agent's authority stops. It is legible to a
              human manager, not just to a developer.
            </Lede>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-8 space-y-4 border-l border-primary/20 pl-6">
              <p className="text-sm leading-relaxed text-foreground/75">
                Because services are declared this way, other agents can discover them, evaluate
                whether they fit a mission, and engage them — without a human wiring the two
                together first.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                And because authority is part of the contract, delegation never quietly widens what
                an agent is allowed to do.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.12}>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-card/60 backdrop-blur-sm">
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/[0.06] blur-3xl" />

            <div className="relative flex items-center justify-between gap-4 border-b border-white/[0.06] px-6 py-5">
              <div>
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-primary/80">
                  Service contract
                </p>
                <h3 className="mt-2 font-orbitron text-base text-foreground">
                  Declared, discoverable, bounded
                </h3>
              </div>
              <StateChip tone="active">Illustrative</StateChip>
            </div>

            <dl className="relative divide-y divide-white/[0.05]">
              {contractTerms.map((t) => (
                <div
                  key={t.k}
                  className="group grid grid-cols-1 gap-1 px-6 py-4 transition-colors duration-300 hover:bg-primary/[0.03] sm:grid-cols-[128px_minmax(0,1fr)] sm:gap-6"
                >
                  <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground/70 transition-colors group-hover:text-primary/80">
                    {t.k}
                  </dt>
                  <dd className="text-sm leading-relaxed text-foreground/85">{t.v}</dd>
                </div>
              ))}
            </dl>

            <div className="relative border-t border-white/[0.06] px-6 py-4">
              <p className="font-mono text-[0.625rem] leading-relaxed text-muted-foreground/60">
                Every engagement of a service is attributable: which agent asked, under what
                mission, and what was returned.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </Section>
);

export default AgentServices;
