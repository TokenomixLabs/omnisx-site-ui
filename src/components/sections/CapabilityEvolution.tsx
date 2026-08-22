import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, Lede, StateChip, DirectionNote } from "@/components/body/primitives";
import { cn } from "@/lib/utils";

type Step = {
  id: string;
  index: string;
  title: string;
  body: string;
  tone?: "default" | "gate";
};

const steps: Step[] = [
  {
    id: "encounter",
    index: "01",
    title: "Encounter a limit",
    body: "During real work an agent reaches something its current capabilities cannot do — or cannot do well enough.",
  },
  {
    id: "recognise",
    index: "02",
    title: "Recognise the gap",
    body: "The shortfall is identified as a specific missing capability rather than a generic failure, and described in terms of the outcome it blocks.",
  },
  {
    id: "propose",
    index: "03",
    title: "Propose the capability",
    body: "A precise proposal is formed: what the capability must do, the inputs it needs, the results it must return and how success will be measured.",
  },
  {
    id: "gate-build",
    index: "04",
    title: "Human approval to build",
    body: "Nothing is constructed on the agent's own authority. A person reviews the proposal and decides whether it should exist at all.",
    tone: "gate",
  },
  {
    id: "build",
    index: "05",
    title: "Build in isolation",
    body: "The capability is constructed separately from live operations, versioned, with its origin and intent recorded.",
  },
  {
    id: "test",
    index: "06",
    title: "Test against generated checks",
    body: "Checks derived from the original proposal are run in isolation. Failures stay contained; nothing touches production work.",
  },
  {
    id: "gate-deploy",
    index: "07",
    title: "Human approval to deploy",
    body: "Proof of correctness earns a second review. Only an explicit human decision promotes the capability into service.",
    tone: "gate",
  },
  {
    id: "absorb",
    index: "08",
    title: "Permanent absorption",
    body: "Once approved, the capability becomes part of the agent — and available to the wider network. The limit that produced it does not have to be hit again.",
  },
];

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
            When an OmnisX agent meets a limit, that limit becomes a candidate for permanent
            capability — proposed, approved, built, proven, approved again, then absorbed.
          </Lede>
        </ScrollReveal>
      </div>

      {/* Vertical sequence */}
      <div className="relative mx-auto mt-14 max-w-3xl md:mt-20">
        {/* spine */}
        <div className="absolute bottom-0 left-[15px] top-2 w-px bg-gradient-to-b from-primary/40 via-border to-secondary/40 md:left-1/2 md:-translate-x-1/2" />

        <ol className="space-y-8 md:space-y-10">
          {steps.map((s, i) => {
            const isGate = s.tone === "gate";
            const alignRight = i % 2 === 1;
            return (
              <li key={s.id} className="relative">
                <ScrollReveal delay={0.04}>
                  <div
                    className={cn(
                      "relative pl-12 md:w-[calc(50%-2.5rem)] md:pl-0",
                      alignRight ? "md:ml-auto md:pl-0" : "md:mr-auto md:text-right"
                    )}
                  >
                    {/* node */}
                    <span
                      className={cn(
                        "absolute left-[9px] top-2 h-[13px] w-[13px] rounded-full border-2 md:left-auto md:top-3",
                        alignRight ? "md:-left-[46px]" : "md:-right-[46px]",
                        isGate
                          ? "border-secondary bg-background shadow-[0_0_16px_hsl(var(--secondary)/0.55)]"
                          : "border-primary/70 bg-background shadow-[0_0_14px_hsl(var(--primary)/0.45)]"
                      )}
                    />
                    <div
                      className={cn(
                        "rounded-xl border p-5 transition-colors duration-300 md:p-6",
                        isGate
                          ? "border-secondary/25 bg-secondary/[0.04]"
                          : "border-white/[0.06] bg-card/50"
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center gap-3",
                          !alignRight && "md:justify-end"
                        )}
                      >
                        <span className="font-mono text-[0.625rem] tracking-[0.2em] text-muted-foreground/60">
                          {s.index}
                        </span>
                        {isGate && <StateChip tone="gate">Human gate</StateChip>}
                      </div>
                      <h3 className="mt-3 font-orbitron text-base font-semibold text-foreground md:text-lg">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            );
          })}
        </ol>
      </div>

      <ScrollReveal delay={0.1}>
        <div className="mx-auto mt-14 max-w-2xl rounded-xl border border-white/[0.06] bg-card/40 p-6 text-center md:p-8">
          <p className="font-orbitron text-base text-foreground md:text-lg">
            Evolution is a governed process, not an autonomous one.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Two explicit human decisions bracket every capability an agent gains. Self-improvement
            without approval is not a feature we want.
          </p>
          <div className="mt-6">
            <DirectionNote>
              Described as designed system behaviour. Nothing here implies unsupervised
              self-modification.
            </DirectionNote>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </Section>
);

export default CapabilityEvolution;
