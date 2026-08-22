import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, Lede } from "@/components/body/primitives";

type Member = {
  id: string;
  role: string;
  agent: string;
  carries: string;
  hands: string;
};

const members: Member[] = [
  {
    id: "A-114",
    role: "Mission lead",
    agent: "Persistent agent",
    carries: "mission history",
    hands: "briefs the team",
  },
  {
    id: "A-207",
    role: "Research",
    agent: "Persistent agent",
    carries: "source memory",
    hands: "hands off findings",
  },
  {
    id: "A-318",
    role: "Analysis",
    agent: "Persistent agent",
    carries: "prior models",
    hands: "hands off judgement",
  },
  {
    id: "A-402",
    role: "Delivery",
    agent: "Persistent agent",
    carries: "client relationships",
    hands: "returns the result",
  },
];

/** Workforce formation: separate persistent beings converging on one mission, then returning to their own state. */
const WorkforceFormation = () => (
  <div className="relative">
    {/* Mission band */}
    <div className="relative rounded-xl border border-primary/25 bg-primary/[0.04] px-5 py-4">
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/[0.08] blur-3xl" />
      <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-primary/80">
        Mission
      </p>
      <p className="mt-2 text-sm text-foreground/90">
        One outcome, formed from several persistent agents
      </p>
    </div>

    {/* Convergence lines */}
    <div className="relative h-10" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
        {[12.5, 37.5, 62.5, 87.5].map((x, i) => (
          <line
            key={x}
            x1="50"
            y1="0"
            x2={x}
            y2="100"
            stroke="hsl(var(--primary) / 0.3)"
            strokeWidth="0.4"
            strokeDasharray="3 3"
            className="motion-safe:animate-[dashDrift_9s_linear_infinite]"
            style={{ animationDelay: `${i * 0.5}s` }}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
    </div>

    {/* Members — identity preserved */}
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {members.map((m) => (
        <li
          key={m.id}
          className="group rounded-lg border border-white/[0.06] bg-background/50 p-4 transition-colors duration-300 hover:border-primary/25"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-primary/75">
              {m.id}
            </span>
            <span className="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-muted-foreground/50">
              {m.agent}
            </span>
          </div>
          <p className="mt-2 text-sm font-medium text-foreground">{m.role}</p>
          <p className="mt-1 font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-secondary/70">
            keeps {m.carries}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{m.hands}</p>
        </li>
      ))}
    </ul>

    <div className="mt-5 flex items-center gap-3">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      <span className="whitespace-nowrap font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-muted-foreground/60">
        the workforce dissolves · the beings persist
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  </div>
);

const Workforces = () => (
  <Section id="workforces" tone="raised" className="py-20 md:py-28">
    <div className="container relative z-10 mx-auto px-4">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <ScrollReveal>
          <div className="rounded-2xl border border-white/[0.06] bg-background/40 p-6 md:p-8">
            <WorkforceFormation />
          </div>
        </ScrollReveal>

        <div className="lg:order-first">
          <ScrollReveal>
            <Eyebrow tone="secondary">Workforces</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <SectionTitle className="mt-5">
              Single agents solve tasks.
              <br />
              <span className="text-gradient">Coordinated workforces run operations.</span>
            </SectionTitle>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <Lede className="mt-6">
              Real work rarely fits one specialist. OmnisX forms teams of persistent agents around a
              mission, each with a defined role, each accountable for its part.
            </Lede>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <ul className="mt-8 space-y-5">
              {[
                {
                  t: "Roles, not runners",
                  d: "Every member holds a named responsibility within the mission rather than an anonymous slot in a queue.",
                },
                {
                  t: "Delegation with boundaries",
                  d: "Agents engage each other's declared services — inside the authority each was granted, never beyond it.",
                },
                {
                  t: "Identity survives the team",
                  d: "Members can be replaced, upgraded or added, and each one leaves with the memory, reputation and relationships the mission gave it.",
                },
              ].map((item) => (
                <li key={item.t} className="border-l border-secondary/25 pl-5">
                  <p className="text-sm font-medium text-foreground">{item.t}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </Section>
);

export default Workforces;
