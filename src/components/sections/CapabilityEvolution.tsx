import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, Lede, StateChip, DirectionNote } from "@/components/body/primitives";
import { cn } from "@/lib/utils";

type Stage = {
  id: string;
  index: string;
  title: string;
  body: string;
};

type Phase = {
  id: string;
  label: string;
  claim: string;
  tone: "isolated" | "boundary" | "operational";
  stages: Stage[];
};

const phases: Phase[] = [
  {
    id: "creation",
    label: "Phase 01 · Isolated creation",
    claim: "An agent can create and prove new capability here — without gaining any new authority.",
    tone: "isolated",
    stages: [
      {
        id: "limit",
        index: "01",
        title: "Limit detected",
        body: "During real work an agent reaches something its current capabilities cannot do, or cannot do well enough.",
      },
      {
        id: "requirement",
        index: "02",
        title: "Requirement formed",
        body: "The shortfall is expressed as a specific requirement: the inputs, the results, and the measure that would count as success.",
      },
      {
        id: "reuse",
        index: "03",
        title: "Search and reuse",
        body: "The network is checked first. An existing proven capability is preferred over authoring another one.",
      },
      {
        id: "author",
        index: "04",
        title: "Author and build",
        body: "When nothing fits, the agent authors the capability itself — inside an isolated environment, with no reach into live systems.",
      },
      {
        id: "tests",
        index: "05",
        title: "Generate checks",
        body: "Checks are derived from the original requirement, so the capability is judged against the outcome it was created for.",
      },
      {
        id: "proof",
        index: "06",
        title: "Isolated proof",
        body: "The capability is exercised until it either demonstrates the required behaviour or fails harmlessly, contained.",
      },
    ],
  },
  {
    id: "boundary",
    label: "Phase 02 · Authority boundary",
    claim: "Creation is not permission. Existing is not the same as being cleared to run.",
    tone: "boundary",
    stages: [
      {
        id: "register",
        index: "07",
        title: "Register version and provenance",
        body: "The proven artefact is versioned and bound to its origin: what limit produced it, what it claims, and what evidence backs the claim.",
      },
      {
        id: "gate",
        index: "08",
        title: "Lifecycle and authority gate",
        body: "Execution authority is granted separately, under lifecycle and permission rules. Low-consequence promotions may be policy-governed or delegated; consequential ones require explicit human approval.",
      },
    ],
  },
  {
    id: "operation",
    label: "Phase 03 · Operational life",
    claim: "Authority granted is authority observed — and revocable.",
    tone: "operational",
    stages: [
      {
        id: "use",
        index: "09",
        title: "Operational use",
        body: "The capability becomes part of the agent and available to the network, within the scope it was authorised for — nothing wider.",
      },
      {
        id: "monitor",
        index: "10",
        title: "Monitored in service",
        body: "Behaviour in live work is measured against the claim the capability was promoted on.",
      },
      {
        id: "repair",
        index: "11",
        title: "Repair, replace, roll back",
        body: "Versions can be revised, superseded or withdrawn without rebuilding the agent that holds them.",
      },
    ],
  },
];

const toneRing: Record<Phase["tone"], string> = {
  isolated: "border-primary/70 shadow-[0_0_14px_hsl(var(--primary)/0.45)]",
  boundary: "border-secondary shadow-[0_0_18px_hsl(var(--secondary)/0.6)]",
  operational: "border-foreground/40 shadow-[0_0_12px_hsl(0_0%_100%/0.14)]",
};

const CapabilityEvolution = () => (
  <Section id="evolution" tone="deep" className="py-20 md:py-32">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.02]" />
    <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[900px] max-w-[130vw] -translate-x-1/2 rounded-full bg-secondary/[0.05] blur-[130px]" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <Eyebrow tone="secondary">Signature capability</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <SectionTitle className="mt-5">
            Agents are deployed with a baseline.
            <br />
            <span className="text-gradient">Not a ceiling.</span>
          </SectionTitle>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <Lede className="mt-6">
            When an OmnisX agent meets a limit, it can author the missing capability, generate its
            own checks and prove it in isolation. What it cannot do is hand itself the right to
            run it against live systems.
          </Lede>
        </ScrollReveal>
        <ScrollReveal delay={0.22}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <StateChip tone="active">Build in isolation</StateChip>
            <StateChip tone="active">Prove it</StateChip>
            <StateChip tone="gate">Then promote it</StateChip>
          </div>
        </ScrollReveal>
      </div>

      {/* Lifecycle rail */}
      <div className="relative mx-auto mt-14 max-w-3xl md:mt-20">
        {phases.map((phase) => (
          <div
            key={phase.id}
            className={cn(
              "relative mt-8 first:mt-0",
              phase.tone === "boundary" && "my-10 md:my-12"
            )}
          >
            {/* phase header */}
            <ScrollReveal>
              <div
                className={cn(
                  "relative flex flex-col gap-2 border-l-2 pl-6 md:pl-8",
                  phase.tone === "isolated" && "border-primary/40",
                  phase.tone === "boundary" && "border-secondary/70",
                  phase.tone === "operational" && "border-foreground/25"
                )}
              >
                <p
                  className={cn(
                    "font-mono text-[0.6875rem] uppercase tracking-[0.24em]",
                    phase.tone === "isolated" && "text-primary/80",
                    phase.tone === "boundary" && "text-secondary",
                    phase.tone === "operational" && "text-foreground/70"
                  )}
                >
                  {phase.label}
                </p>
                <p className="max-w-xl font-orbitron text-sm leading-relaxed text-foreground/90 md:text-base">
                  {phase.claim}
                </p>
              </div>
            </ScrollReveal>

            {/* stages */}
            <ol
              className={cn(
                "relative mt-6 border-l-2 pl-6 md:pl-8",
                phase.tone === "isolated" && "border-primary/15",
                phase.tone === "boundary" && "border-secondary/40",
                phase.tone === "operational" && "border-foreground/10"
              )}
            >
              {phase.stages.map((s) => (
                <li key={s.id} className="relative pb-7 last:pb-0">
                  <ScrollReveal delay={0.04}>
                    <span
                      className={cn(
                        "absolute -left-[calc(1.5rem+7px)] top-[6px] h-[11px] w-[11px] rounded-full border-2 bg-background md:-left-[calc(2rem+7px)]",
                        toneRing[phase.tone]
                      )}
                      aria-hidden="true"
                    />
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-mono text-[0.625rem] tracking-[0.2em] text-muted-foreground/60">
                        {s.index}
                      </span>
                      <h3 className="font-orbitron text-base font-semibold text-foreground">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </ScrollReveal>
                </li>
              ))}
            </ol>

            {/* the boundary itself */}
            {phase.tone === "boundary" && (
              <ScrollReveal delay={0.08}>
                <div className="relative mt-8 overflow-hidden rounded-xl border border-secondary/30 bg-secondary/[0.05] px-6 py-6 text-center">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent" />
                  <p className="font-orbitron text-lg font-bold tracking-tight text-foreground md:text-xl">
                    Creation is not permission.
                  </p>
                  <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    A capability may exist, be versioned and be fully proven before it is authorised
                    for operational use. Crossing this line is a separate decision with its own rules.
                  </p>
                </div>
              </ScrollReveal>
            )}
          </div>
        ))}
      </div>

      <ScrollReveal delay={0.1}>
        <div className="mx-auto mt-14 max-w-2xl rounded-xl border border-white/[0.06] bg-card/40 p-6 text-center md:p-8">
          <p className="font-orbitron text-base text-foreground md:text-lg">
            Self-extension is real. Self-authorisation is not.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
