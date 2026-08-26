import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, Lede, StateChip } from "@/components/body/primitives";

const persistentLayer = [
  { label: "Identity", note: "who it is" },
  { label: "Mission", note: "what it is for" },
  { label: "Memory", note: "what it has learned" },
  { label: "Permissions", note: "what it may do" },
  { label: "History", note: "what it has done" },
];

const cognitionLayer = ["reasoning model", "tool set", "capability version", "runtime"];

const PersistentBeings = () => (
  <Section id="persistence" tone="raised" tier="argument">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="max-w-2xl xl:max-w-none">
        <ScrollReveal>
          <Eyebrow>Persistent beings</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <SectionTitle className="mt-5 max-w-[42rem] xl:max-w-none">
            A run ends. <span className="text-gradient">A being continues.</span>
          </SectionTitle>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <Lede className="mt-6 max-w-3xl">
            Conventional automation is amnesiac by design: it triggers, produces a result and
            forgets. Nothing about the tenth execution is wiser than the first.
          </Lede>
        </ScrollReveal>
      </div>

      {/* Contrast */}
      <div className="mt-12 grid items-stretch gap-6 md:mt-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-8 2xl:gap-12">
        <ScrollReveal className="h-full">
          <div className="flex h-full flex-col rounded-xl border border-white/[0.08] bg-background/40 p-6 md:p-7">

            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground/80 2xl:text-xs">
              Conventional automation
            </p>
            <h3 className="mt-3 font-grotesk text-lg font-semibold text-muted-foreground 2xl:text-xl">Run → result → gone</h3>
            <ol className="mt-6 flex flex-1 flex-col justify-around gap-5 py-2">
              {["trigger", "execute", "return output", "discard state"].map((step, i) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="font-mono text-[0.6875rem] text-muted-foreground/90 2xl:text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-border/80" />
                  <span className="w-32 text-right text-sm text-foreground/90 2xl:text-[0.9375rem]">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-white/[0.07] pt-4 text-sm leading-relaxed text-muted-foreground 2xl:text-base">
              Every improvement has to be made by a human editing the workflow.
            </p>
          </div>
        </ScrollReveal>


        <ScrollReveal delay={0.1} className="h-full">
          <div className="relative h-full overflow-hidden rounded-xl border border-primary/20 bg-card/60 p-6 md:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/[0.07] blur-3xl" />
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-primary/80">
              The OmnisX model
            </p>
            <h3 className="mt-4 font-grotesk text-lg font-semibold text-foreground">
              Exist → work → remember → become more capable
            </h3>

            {/* Persistent layer above replaceable cognition */}
            <div className="mt-8 rounded-lg border border-primary/20 bg-primary/[0.04] p-4">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-primary/70">
                Persists
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {persistentLayer.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-baseline justify-between gap-3 rounded-md border border-white/[0.05] bg-background/40 px-3 py-2"
                  >
                    <span className="text-sm text-foreground/90">{p.label}</span>
                    <span className="font-mono text-[0.625rem] text-muted-foreground/60">
                      {p.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground/50">
                interchangeable below
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <div className="rounded-lg border border-white/[0.05] bg-background/30 p-4">
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground/60">
                Replaceable
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cognitionLayer.map((c) => (
                  <StateChip key={c}>{c}</StateChip>
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-foreground/75">
              Cognition can be swapped, upgraded or rolled back. The being that holds the mission,
              the memory, the authority and the record does not have to be rebuilt to benefit.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </Section>
);

export default PersistentBeings;
