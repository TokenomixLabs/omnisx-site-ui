import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, Lede, Hairline } from "@/components/body/primitives";

const guarantees = [
  {
    k: "Creation ≠ permission",
    v: "An agent may author and prove a capability without thereby earning the right to run it against live systems.",
  },
  {
    k: "Authority is granted",
    v: "Execution rights come from lifecycle and permission rules — policy-governed, delegated, or explicitly approved by a person, scaled to consequence.",
  },
  {
    k: "Isolation before trust",
    v: "Untested work is exercised away from live operations and promoted only on evidence.",
  },
  {
    k: "Provenance travels",
    v: "What produced a capability, what it claims, and what proved it stay attached to the version.",
  },
  {
    k: "Attributable action",
    v: "Who acted, under which mission, with what authority, and what resulted — recorded.",
  },
  {
    k: "Reversibility",
    v: "Capability versions can be withdrawn or rolled back without rebuilding the agent that holds them.",
  },
];

const routes = [
  {
    consequence: "Low consequence",
    path: "Policy-governed",
    note: "Promotion proceeds automatically inside pre-set rules.",
    tone: "policy" as const,
  },
  {
    consequence: "Material consequence",
    path: "Delegated authority",
    note: "A named owner holds standing authority for this class of work.",
    tone: "delegated" as const,
  },
  {
    consequence: "High consequence",
    path: "Explicit human approval",
    note: "A person decides before the capability may act on live systems.",
    tone: "human" as const,
  },
];

const routeTone = {
  policy: "border-primary/25 text-primary/80",
  delegated: "border-secondary/30 text-secondary/80",
  human: "border-white/[0.14] text-foreground/80",
};

/** Two planes: what exists, and what is permitted to run. */
const AuthorityTopology = () => (
  <div className="mt-12 rounded-2xl border border-white/[0.06] bg-card/40 p-5 backdrop-blur-sm md:p-8 2xl:p-10">
    <div className="grid gap-4 md:grid-cols-2 md:gap-6 2xl:gap-10">
      <div className="rounded-lg border border-white/[0.06] bg-background/50 p-5 2xl:p-7">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground/80 2xl:text-xs">
          Capability plane
        </p>
        <p className="mt-3 text-sm text-foreground/85 2xl:text-base">The capability exists and is proven.</p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 2xl:mt-5" aria-hidden="true">
          {["authored", "tested", "versioned", "provenance recorded"].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground 2xl:text-xs">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-primary/20 bg-primary/[0.04] p-5 2xl:p-7">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-primary/80 2xl:text-xs">
          Authority plane
        </p>
        <p className="mt-3 text-sm text-foreground/85 2xl:text-base">
          The right to execute is scoped separately — and can be withdrawn.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 2xl:mt-5" aria-hidden="true">
          {["scope", "consequence class", "owner", "revocation"].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary/70" />
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground 2xl:text-xs">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="my-5 flex items-center gap-3 2xl:my-7">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <span className="whitespace-nowrap font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-primary/80 2xl:text-xs">
        creation is not permission
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>

    <ul className="grid gap-3 md:grid-cols-3 2xl:gap-6">
      {routes.map((r) => (
        <li
          key={r.path}
          className={`rounded-lg border bg-background/40 p-4 transition-colors duration-300 2xl:p-6 ${routeTone[r.tone]}`}
        >
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] 2xl:text-xs">{r.consequence}</p>
          <p className="mt-2 text-sm font-medium text-foreground 2xl:text-base">{r.path}</p>
          <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted-foreground 2xl:text-sm">{r.note}</p>
        </li>
      ))}
    </ul>

    <p className="mt-4 font-mono text-[0.6875rem] leading-relaxed text-muted-foreground/75 2xl:text-xs">
      The route is chosen by consequence, not by habit — human judgement is reserved for where it
      actually matters.
    </p>
  </div>
);

const GovernedAutonomy = () => (
  <Section id="governance" tier="argument">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="grid gap-8 xl:grid-cols-12 xl:items-end xl:gap-12">
        <div className="max-w-3xl xl:col-span-7 xl:max-w-none">
          <ScrollReveal>
            <Eyebrow tone="muted">Governed autonomy</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <SectionTitle className="mt-5 max-w-[40rem] xl:max-w-none">
              Autonomy is only useful if it is accountable.
            </SectionTitle>
          </ScrollReveal>
        </div>
        <div className="xl:col-span-5">
          <ScrollReveal delay={0.16}>
            <Lede className="max-w-3xl">
              Self-extending agents are the point — and unbounded authority is the liability. OmnisX
              separates the two: agents extend themselves freely inside isolation, and every step
              toward live execution passes through governance. It is not a settings page; it is where
              the architecture starts.
            </Lede>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal delay={0.2}>
        <AuthorityTopology />
      </ScrollReveal>

      <ScrollReveal delay={0.22}>
        <Hairline className="mt-12" />
      </ScrollReveal>

      <dl className="mt-2 [&>*:last-child>div]:border-b-0 xl:grid xl:grid-cols-2 xl:gap-x-14 xl:[&>*:nth-last-child(-n+2)>div]:border-b-0">
        {guarantees.map((g, i) => (
          <ScrollReveal key={g.k} delay={i * 0.05}>
            <div className="grid grid-cols-1 gap-1 border-b border-white/[0.05] py-5 transition-colors duration-300 hover:bg-white/[0.015] sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-8 [@media(min-width:1800px)]:grid-cols-[260px_minmax(0,1fr)]">
              <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-primary/85 2xl:text-xs [@media(min-width:1800px)]:text-[0.8125rem]">
                {g.k}
              </dt>
              <dd className="text-sm leading-relaxed text-foreground/80 2xl:text-base">{g.v}</dd>
            </div>
          </ScrollReveal>
        ))}
      </dl>

      <ScrollReveal delay={0.1}>
        <Hairline className="mt-0" />
      </ScrollReveal>
    </div>
  </Section>
);

export default GovernedAutonomy;
