import React from "react";
import { ScrollReveal, Accumulate } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, DirectionNote, PanelTitle } from "@/components/body/primitives";

const loop = [
  {
    id: "need",
    title: "A need appears mid-mission",
    body: "An operating agent identifies work it cannot complete alone.",
  },
  {
    id: "search",
    title: "Search the network",
    body: "Declared services are searched against the need, its inputs and its required standard.",
  },
  {
    id: "engage",
    title: "Engage an existing agent",
    body: "Where a match exists it is engaged under its published contract — nothing is duplicated.",
  },
  {
    id: "commission",
    title: "Or commission a new one",
    body: "When nothing fits, the need becomes a specification routed back into the same creation pipeline — built and proven in isolation before any authority is granted.",
  },
  {
    id: "grow",
    title: "The network grows from real demand",
    body: "Commissioned agents stay, so the next mission with the same need starts with an answer in place.",
  },
];

const HiringLoop = () => (
  <Section id="hiring" tier="exhibit">
    <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.3]" />
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container relative z-10 mx-auto px-4">
      <ScrollReveal>
        <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-5">
          <Eyebrow className="shrink-0">Exhibit · Commissioning</Eyebrow>
          <SectionTitle variant="exhibit">
            Agents hire agents — and commission the ones that don't exist yet.
          </SectionTitle>
        </div>
      </ScrollReveal>

      <div className="relative mt-8 max-w-3xl">
        <span
          className="pointer-events-none absolute bottom-3 left-[4px] top-3 w-px bg-gradient-to-b from-primary/50 via-border to-secondary/40"
          aria-hidden="true"
        />
        <Accumulate step={0.07}>
          {loop.map((s, i) => (
            <div key={s.id} className="relative pb-6 pl-7 text-left last:pb-0">
              <span
                className="absolute left-0 top-[7px] h-[9px] w-[9px] rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.7)]"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-mono text-[0.5625rem] tracking-[0.22em] text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <PanelTitle className="text-[0.9375rem] leading-snug">{s.title}</PanelTitle>
              </div>
              <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </Accumulate>

        <ScrollReveal delay={0.16}>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-primary/30 to-secondary/30" />
            <span className="whitespace-nowrap font-mono text-[0.5625rem] uppercase tracking-[0.2em] text-muted-foreground/70">
              new capacity returns to the network
            </span>
          </div>
          <div className="mt-4">
            <DirectionNote>
              Commissioning follows the same authority boundary as every other capability created
              in the system.
            </DirectionNote>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </Section>
);

export default HiringLoop;
