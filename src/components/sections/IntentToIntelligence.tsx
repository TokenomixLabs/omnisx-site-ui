import React, { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, Lede, DirectionNote } from "@/components/body/primitives";
import { cn } from "@/lib/utils";

type Stage = {
  key: string;
  index: string;
  title: string;
  summary: string;
  detail: string;
  /** What the evolving object has gained by the end of this stage. */
  gains: string;
  /** How the object identifies itself at this stage. */
  form: string;
};

const stages: Stage[] = [
  {
    key: "intent",
    index: "01",
    title: "Human intent",
    summary: "A requirement stated in ordinary language.",
    detail:
      "Work starts the way people actually describe it — an outcome, a constraint, a deadline — not a flowchart of nodes someone has to draw first.",
  },
  {
    key: "clarify",
    index: "02",
    title: "Clarify",
    summary: "Ambiguity is resolved before anything is built.",
    detail:
      "Missing inputs, authority boundaries, success conditions and edge cases are surfaced as questions instead of being silently assumed.",
  },
  {
    key: "specify",
    index: "03",
    title: "Specify",
    summary: "Intent becomes a formal agent specification.",
    detail:
      "Mission, scope, expected inputs and results, required knowledge and the limits of independent action are written down precisely enough to build and evaluate against.",
  },
  {
    key: "match",
    index: "04",
    title: "Match or architect",
    summary: "Reuse existing intelligence, or design new intelligence.",
    detail:
      "If an agent already exists that can carry the mission, it is proposed. If not, a new one is architected for it — rather than duplicating near-identical automation forever.",
  },
  {
    key: "plan",
    index: "05",
    title: "Plan capabilities",
    summary: "Capabilities, cognition and tools are planned.",
    detail:
      "The specification determines what the agent must be able to do, what reasoning it needs, what tools and data access it requires, and what is missing today.",
  },
  {
    key: "build",
    index: "06",
    title: "Build",
    summary: "The agent and any missing capabilities are constructed.",
    detail:
      "Construction produces a versioned agent and versioned capabilities with recorded provenance — not an opaque bundle that no one can inspect later.",
  },
  {
    key: "prove",
    index: "07",
    title: "Prove",
    summary: "Isolated testing before anything is trusted.",
    detail:
      "New work is exercised in isolation against generated checks. Passing proof is what earns promotion; nothing is promoted because it merely exists.",
  },
  {
    key: "deploy",
    index: "08",
    title: "Deploy",
    summary: "Permissions granted, the being goes into service.",
    detail:
      "Deployment attaches explicit authority. What an agent may do on its own — and where a human decision is required — is set here, not improvised at runtime.",
  },
  {
    key: "operate",
    index: "09",
    title: "Operate & evolve",
    summary: "Work, memory, monitoring, repair, improvement.",
    detail:
      "Operation is the beginning of the agent's life, not the end of the project. Experience accumulates, performance is observed, and capabilities can be repaired or replaced under governance.",
  },
];

const IntentToIntelligence = () => {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <Section id="pipeline" className="py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-[0.025]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl">
          <ScrollReveal>
            <Eyebrow tone="secondary">From intent to intelligence</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <SectionTitle className="mt-5">
              Describe the intelligence you need.
              <br />
              <span className="text-muted-foreground">The system works out the rest.</span>
            </SectionTitle>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <Lede className="mt-6">
              A requirement enters as language. It leaves as a proven, permissioned, operating agent
              — with every step in between recorded.
            </Lede>
          </ScrollReveal>
        </div>

        {/* Stage rail */}
        <ScrollReveal delay={0.12}>
          <div className="mt-12 md:mt-16">
            <div
              className="-mx-4 overflow-x-auto px-4 pb-3 md:mx-0 md:overflow-visible md:px-0 md:pb-0"
              role="tablist"
              aria-label="Agent creation stages"
            >
              <div className="flex min-w-max gap-2 md:grid md:min-w-0 md:grid-cols-9 md:gap-1.5">
                {stages.map((s, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={s.key}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="stage-detail"
                      id={`stage-tab-${s.key}`}
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className={cn(
                        "group relative min-h-[64px] w-[132px] rounded-lg border px-3 py-3 text-left transition-all duration-300 md:w-auto",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        isActive
                          ? "border-primary/40 bg-primary/[0.06] shadow-[0_0_30px_-14px_hsl(var(--primary)/0.8)]"
                          : "border-white/[0.06] bg-card/40 hover:border-white/[0.14]"
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-[0.625rem] tracking-[0.18em]",
                          isActive ? "text-primary" : "text-muted-foreground/60"
                        )}
                      >
                        {s.index}
                      </span>
                      <span
                        className={cn(
                          "mt-1 block text-xs font-medium leading-snug transition-colors",
                          isActive ? "text-foreground" : "text-muted-foreground"
                        )}
                      >
                        {s.title}
                      </span>
                      <span
                        className={cn(
                          "absolute inset-x-3 bottom-0 h-px transition-all duration-500",
                          isActive ? "bg-primary/70" : "bg-transparent"
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Flow line */}
            <div className="relative mt-3 hidden h-px w-full bg-border/40 md:block">
              <div
                className="absolute -top-[1px] h-[3px] rounded-full bg-gradient-to-r from-primary/0 via-primary to-secondary/60 transition-all duration-500 ease-out"
                style={{ width: `${((active + 1) / stages.length) * 100}%` }}
              />
            </div>

            {/* Detail panel */}
            <div
              id="stage-detail"
              role="tabpanel"
              aria-labelledby={`stage-tab-${stage.key}`}
              className="mt-6 rounded-xl border border-white/[0.06] bg-card/50 p-6 backdrop-blur-sm md:mt-8 md:p-10"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
                <div className="md:w-1/3">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-primary/80">
                    Stage {stage.index}
                  </p>
                  <h3 className="mt-3 font-orbitron text-xl font-semibold text-foreground">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{stage.summary}</p>
                </div>
                <p className="text-base leading-relaxed text-foreground/80 md:w-2/3">
                  {stage.detail}
                </p>
              </div>
            </div>

            <div className="mt-5">
              <DirectionNote>
                Shown as the OmnisX system architecture and product direction. Availability of
                individual stages varies by build.
              </DirectionNote>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default IntentToIntelligence;
