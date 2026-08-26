import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, Lede, StateChip } from "@/components/body/primitives";

const missions = [
  { id: "M-01", label: "Mission 01", gained: "memory" },
  { id: "M-02", label: "Mission 02", gained: "capability" },
  { id: "M-03", label: "Mission 03", gained: "relationships" },
  { id: "M-04", label: "Mission 04", gained: "reputation" },
];

/** A single persistent being accumulating state across missions. */
const PersistenceTrail = () => (
  <div className="relative">
    {/* Being */}
    <div className="relative mx-auto mb-7 w-fit md:mb-8">
      <div className="absolute -inset-6 rounded-full bg-primary/[0.07] blur-2xl motion-safe:animate-pulse-subtle" />
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-card/80 backdrop-blur-sm md:h-24 md:w-24">

        <div className="absolute inset-2 rounded-full border border-primary/15" />
        <div className="absolute inset-5 rounded-full border border-secondary/20" />
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-primary">
          being
        </span>
      </div>
    </div>

    {/* Accumulation rail */}
    <div className="relative">
      <div className="absolute left-0 right-0 top-[13px] hidden h-px bg-gradient-to-r from-primary/40 via-border to-secondary/30 md:block" />
      <ol className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4">
        {missions.map((m, i) => (
          <li key={m.id} className="relative flex items-start gap-3 md:block">
            <div className="relative z-10 mt-1 h-[7px] w-[7px] shrink-0 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.7)] md:mx-auto md:mt-0 md:translate-y-[10px]" />
            <div className="md:mt-6 md:text-center">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground/70">
                {m.label}
              </p>
              <p className="mt-2 text-sm text-foreground/85">
                + {m.gained}
              </p>
              <p className="mt-1 font-mono text-[0.625rem] text-muted-foreground/50">
                state carried forward
              </p>
            </div>
            <span className="sr-only">
              After {m.label} the agent retains {m.gained}.
            </span>
            {/* stacking depth indicator */}
            <div
              className="absolute -bottom-2 left-1/2 hidden h-px -translate-x-1/2 bg-primary/25 md:block"
              style={{ width: `${28 + i * 18}px` }}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

const CategoryStatement = () => (
  <Section id="category" tone="deep" className="pb-20 pt-14 md:pb-28 md:pt-20">
    {/* Hero descent: the video dissolves into the network below it */}
    <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/60 to-transparent" />
    <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-grid bg-grid-fade opacity-[0.05]" />

    <div
      className="pointer-events-none absolute left-1/2 top-0 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/60 to-transparent motion-safe:animate-pulse-subtle"
      aria-hidden="true"
    />
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
    <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] max-w-[130vw] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[110px]" />

    <div className="container relative z-10 mx-auto px-4">

      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-20">
        <div>
          <ScrollReveal>
            <Eyebrow>Agent Superintelligence</Eyebrow>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <SectionTitle as="h1" className="mt-5 lg:max-w-[23ch]">
              Not another agent builder.
              <br />
              <span className="text-gradient">A living system for creating, operating and evolving intelligence.</span>
            </SectionTitle>
          </ScrollReveal>


          <ScrollReveal delay={0.16}>
            <Lede className="mt-6 max-w-xl">
              Most tooling treats an agent as a prompt that runs once and disappears. OmnisX treats
              it as a persistent operational entity — with identity, memory, capabilities,
              permissions and an operating history that keeps compounding.
            </Lede>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-2">
              <StateChip tone="active">Persistent, not disposable</StateChip>
              <StateChip tone="gate">Governed, not unchecked</StateChip>
              <StateChip>Baseline, not ceiling</StateChip>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.12}>
          <div className="rounded-2xl border border-white/[0.06] bg-card/40 p-6 backdrop-blur-sm md:p-10">
            <PersistenceTrail />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </Section>
);

export default CategoryStatement;
