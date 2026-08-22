import React from "react";
import { ScrollReveal, Accumulate } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, StateChip } from "@/components/body/primitives";

const contractTerms = [
  { k: "Scope", v: "Exactly what the agent will do — and what it will not." },
  { k: "Inputs", v: "The information and access required for the work to begin." },
  { k: "Deliverable", v: "The result that constitutes completion." },
  { k: "Standard", v: "The quality bar the result is measured against." },
  { k: "Authority", v: "Actions permitted without a human decision." },
  { k: "Escalation", v: "Conditions that must be handed back to a person." },
];

const AgentServices = () => (
  <Section id="services" tier="exhibit">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-14">
        <div>
          <ScrollReveal>
            <Eyebrow>Exhibit · Agent services</Eyebrow>
            <SectionTitle variant="exhibit" className="mt-3">
              Agents don't publish endpoints. They offer services.
            </SectionTitle>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A service is a commitment in business terms: what the work is, what it requires, what
              it returns, and where authority stops. Other agents can discover it, judge the fit and
              engage it — without a human wiring the two together first.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground/70">
              Because authority is part of the contract, delegation never quietly widens what an
              agent may do.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1}>
          <div className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-card/60">
            <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] px-5 py-3">
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.22em] text-primary/80">
                Service contract
              </p>
              <StateChip tone="active">Illustrative</StateChip>
            </div>

            <Accumulate step={0.05}>
              {contractTerms.map((t) => (
                <div
                  key={t.k}
                  className="grid grid-cols-[92px_minmax(0,1fr)] gap-4 border-b border-white/[0.05] px-5 py-3 last:border-b-0 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-6"
                >
                  <span className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-muted-foreground/70">
                    {t.k}
                  </span>
                  <span className="text-[0.8125rem] leading-relaxed text-foreground/85">{t.v}</span>
                </div>
              ))}
            </Accumulate>

            <div className="border-t border-white/[0.06] px-5 py-3">
              <p className="font-mono text-[0.5625rem] leading-relaxed text-muted-foreground/60">
                Every engagement is attributable: which agent asked, under what mission, and what
                was returned.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </Section>
);

export default AgentServices;
