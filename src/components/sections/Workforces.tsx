import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, Lede } from "@/components/body/primitives";

const roles = [
  { id: "lead", label: "Mission lead", x: 50, y: 12 },
  { id: "research", label: "Research", x: 14, y: 44 },
  { id: "analysis", label: "Analysis", x: 50, y: 50 },
  { id: "outreach", label: "Outreach", x: 86, y: 44 },
  { id: "review", label: "Review", x: 28, y: 84 },
  { id: "delivery", label: "Delivery", x: 72, y: 84 },
];

const links: Array<[string, string]> = [
  ["lead", "research"],
  ["lead", "analysis"],
  ["lead", "outreach"],
  ["research", "analysis"],
  ["analysis", "review"],
  ["outreach", "delivery"],
  ["review", "delivery"],
];

const byId = Object.fromEntries(roles.map((r) => [r.id, r]));

const WorkforceGraph = () => (
  <div className="relative aspect-[4/3] w-full">
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {links.map(([a, b], i) => (
        <line
          key={`${a}-${b}`}
          x1={byId[a].x}
          y1={byId[a].y}
          x2={byId[b].x}
          y2={byId[b].y}
          stroke="hsl(var(--primary) / 0.28)"
          strokeWidth="0.25"
          strokeDasharray="2 2"
          className="motion-safe:animate-[dashDrift_9s_linear_infinite]"
          style={{ animationDelay: `${i * 0.6}s` }}
        />
      ))}
    </svg>

    {roles.map((r, i) => (
      <div
        key={r.id}
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${r.x}%`, top: `${r.y}%` }}
      >
        <div className="relative flex flex-col items-center">
          <span
            className="absolute -inset-3 rounded-full bg-primary/[0.12] blur-lg motion-safe:animate-pulse-subtle"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
          <span className="relative h-3 w-3 rotate-45 border border-primary/70 bg-background" />
          <span className="mt-2 whitespace-nowrap font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-muted-foreground sm:text-[0.625rem]">
            {r.label}
          </span>
        </div>
      </div>
    ))}
  </div>
);

const Workforces = () => (
  <Section id="workforces" tone="raised" className="py-20 md:py-28">
    <div className="container relative z-10 mx-auto px-4">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <ScrollReveal>
          <div className="rounded-2xl border border-white/[0.06] bg-background/40 p-6 md:p-10">
            <WorkforceGraph />
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
                  t: "Coordination that survives change",
                  d: "Members can be replaced, upgraded or added while the workforce keeps its shared context and history.",
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
