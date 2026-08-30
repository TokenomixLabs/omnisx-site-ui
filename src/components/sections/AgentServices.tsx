import React from "react";
import { ScrollReveal, useInView } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, StateChip } from "@/components/body/primitives";
import { cn } from "@/lib/utils";

type Term = {
  k: string;
  v: string;
  /** Terms that terminate at the authority boundary instead of crossing it. */
  capped?: boolean;
};

const contractTerms: Term[] = [
  { k: "Scope", v: "Exactly what the agent will do — and what it will not." },
  { k: "Inputs", v: "The information and access required for the work to begin." },
  { k: "Deliverable", v: "The result that constitutes completion." },
  { k: "Standard", v: "The quality bar the result is measured against." },
  { k: "Authority", v: "Actions permitted without a human decision.", capped: true },
  { k: "Escalation", v: "Conditions that must be handed back to a person.", capped: true },
];

/** A persistent agent on one side of the engagement. */
const AgentGlyph = ({
  role,
  side,
}: {
  role: "Requesting agent" | "Offering agent";
  side: "left" | "right";
}) => (
  <div className="flex flex-col items-center gap-3">
    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-card/80 2xl:h-20 2xl:w-20">
      <span
        className={cn(
          "absolute -inset-3 rounded-full blur-2xl",
          side === "left" ? "bg-primary/[0.10]" : "bg-secondary/[0.10]"
        )}
        aria-hidden="true"
      />
      <span className="absolute inset-2 rounded-full border border-white/[0.07]" aria-hidden="true" />
      <span
        className={cn(
          "relative font-mono text-[0.625rem] uppercase tracking-[0.16em]",
          side === "left" ? "text-primary" : "text-secondary"
        )}
      >
        {side === "left" ? "asks" : "offers"}
      </span>
    </div>
    <p className="max-w-[7rem] text-center font-mono text-[0.6875rem] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground/80 2xl:text-xs">
      {role}
    </p>
  </div>
);

/**
 * The contract itself is the wire: every term runs from the requesting spine
 * to the offering spine. AUTHORITY and ESCALATION terminate at a capped
 * boundary before reaching the offering side.
 */
const ContractWires = () => {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0,
    rootMargin: "300px 0px 300px 0px",
  });

  return (
    <div ref={ref} className="relative w-full px-0 sm:px-7 2xl:px-9">
      {/* spines: vertical bus at each contract edge, stubs reach out to the glyph centres */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50 sm:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-secondary/45 via-secondary/25 to-secondary/45 sm:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 hidden h-px w-7 bg-primary/50 sm:block 2xl:w-9"
        style={{ left: "-1.75rem" }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 hidden h-px w-7 bg-secondary/45 sm:block 2xl:w-9"
        style={{ right: "-1.75rem" }}
      />


      <div className="space-y-4 2xl:space-y-5">
        {contractTerms.map((t, i) => (
          <div key={t.k}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-foreground/70 2xl:text-xs">
                {t.k}
              </span>
              {t.capped && (
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-secondary/80 2xl:text-[0.6875rem]">
                  stops at the boundary
                </span>
              )}
            </div>

            {/* the wire — spans spine to spine, so the contract literally connects the two agents */}
            <div className="relative mt-2 h-px w-full bg-white/[0.07] sm:-mx-7 sm:w-[calc(100%+3.5rem)] 2xl:-mx-9 2xl:w-[calc(100%+4.5rem)]">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-y-0 left-0 rounded-full transition-[width] duration-[900ms] ease-out motion-reduce:transition-none",
                  t.capped
                    ? "bg-gradient-to-r from-primary/70 to-secondary"
                    : "bg-gradient-to-r from-primary/70 to-secondary/60"
                )}
                style={{
                  width: inView ? (t.capped ? "68%" : "100%") : "0%",
                  transitionDelay: `${i * 0.1}s`,
                }}
              />
              {t.capped && (
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-secondary shadow-[0_0_10px_hsl(var(--secondary)/0.8)] transition-opacity duration-500 motion-reduce:transition-none"
                  style={{
                    left: "68%",
                    opacity: inView ? 1 : 0,
                    transitionDelay: `${i * 0.1 + 0.55}s`,
                  }}
                />
              )}
              {t.capped && (
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 right-0 w-[32%] border-t border-dashed border-secondary/25"
                />
              )}
            </div>

            <p className="mt-2 text-sm leading-relaxed text-foreground/80 2xl:text-[0.9375rem]">
              {t.v}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const AgentServices = () => (
  <Section id="services" tier="exhibit">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14 2xl:gap-20">
        <div className="flex flex-col justify-center gap-8 lg:gap-10 2xl:justify-between 2xl:gap-12">
          <ScrollReveal>
            <Eyebrow>Exhibit · Agent services</Eyebrow>
            <SectionTitle variant="exhibit" className="mt-3">
              Agents don't publish endpoints. They offer services.
            </SectionTitle>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground 2xl:text-base">
              A service is a commitment in business terms: what the work is, what it requires, what
              it returns, and where authority stops. Other agents can discover it, judge the fit and
              engage it — without a human wiring the two together first.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground/80 2xl:text-base">
              Because authority is part of the contract, delegation never quietly widens what an
              agent may do.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div className="mt-8 border-t border-white/[0.06] pt-5 lg:mt-10">
              <div className="flex flex-wrap gap-2">
                <StateChip tone="active">Discoverable</StateChip>
                <StateChip tone="gate">Authority capped</StateChip>
              </div>
              <p className="mt-4 font-mono text-[0.6875rem] leading-relaxed text-muted-foreground/70 2xl:text-xs">
                Every engagement is attributable: which agent asked, under what mission, and what
                was returned.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1} className="h-full">
          <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-card/60 p-5 md:p-7 2xl:p-9">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.04]" />

            <div className="relative flex items-center justify-between gap-4">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-primary/80 2xl:text-xs">
                Service contract · engagement
              </p>
              <StateChip tone="active">Illustrative</StateChip>
            </div>

            {/* Handshake: two persistent agents, the contract terms are the wire between them */}
            <div className="relative mt-7 grid items-center gap-6 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-0">
              <div className="hidden sm:block">
                <AgentGlyph role="Requesting agent" side="left" />
              </div>

              <div className="flex items-center justify-between gap-4 sm:hidden">
                <AgentGlyph role="Requesting agent" side="left" />
                <AgentGlyph role="Offering agent" side="right" />
              </div>

              <ContractWires />

              <div className="hidden sm:block">
                <AgentGlyph role="Offering agent" side="right" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </Section>
);

export default AgentServices;

