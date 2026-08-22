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
  <div className="mt-12 rounded-2xl border border-white/[0.06] bg-card/40 p-5 backdrop-blur-sm md:p-8">
    <div className="grid gap-4 md:grid-cols-2 md:gap-6">
      <div className="rounded-lg border border-white/[0.06] bg-background/50 p-5">
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground/70">
          Capability plane
        </p>
        <p className="mt-3 text-sm text-foreground/85">The capability exists and is proven.</p>
        <div className="mt-4 space-y-1.5" aria-hidden="true">
          {["authored", "tested", "versioned", "provenance recorded"].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary/60" />
              <span className="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-muted-foreground/60">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-primary/20 bg-primary/[0.04] p-5">
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-primary/80">
          Authority plane
        </p>
        <p className="mt-3 text-sm text-foreground/85">
          The right to execute is scoped separately — and can be withdrawn.
        </p>
        <div className="mt-4 space-y-1.5" aria-hidden="true">
          {["scope", "consequence class", "owner", "revocation"].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-secondary/70" />
              <span className="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-muted-foreground/60">
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="my-5 flex items-center gap-3">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <span className="whitespace-nowrap font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-primary/70">
        creation is not permission
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>

    <ul className="grid gap-3 md:grid-cols-3">
      {routes.map((r) => (
        <li
          key={r.path}
          className={`rounded-lg border bg-background/40 p-4 transition-colors duration-300 ${routeTone[r.tone]}`}
        >
          <p className="font-mono text-[0.5625rem] uppercase tracking-[0.16em]">{r.consequence}</p>
          <p className="mt-2 text-sm font-medium text-foreground">{r.path}</p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{r.note}</p>
        </li>
      ))}
    </ul>

    <p className="mt-4 font-mono text-[0.625rem] leading-relaxed text-muted-foreground/50">
      The route is chosen by consequence, not by habit — human judgement is reserved for where it
      actually matters.
    </p>
  </div>
);

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
            Self-extending agents are the point — and unbounded authority is the liability. OmnisX
            separates the two: agents extend themselves freely inside isolation, and every step
            toward live execution passes through governance. It is not a settings page; it is where
            the architecture starts.
          </Lede>
        </ScrollReveal>


        <ScrollReveal delay={0.2}>
          <AuthorityTopology />
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
