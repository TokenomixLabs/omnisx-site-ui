import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, Lede, DirectionNote } from "@/components/body/primitives";

const loop = [
  {
    id: "need",
    title: "A need appears mid-mission",
    body: "An operating agent identifies work it cannot complete alone — a capability, a specialisation or a volume beyond its role.",
  },
  {
    id: "search",
    title: "Search the network",
    body: "Declared services across the network are searched for a match against the need, its inputs and its required standard.",
  },
  {
    id: "engage",
    title: "Engage an existing agent",
    body: "When a suitable agent exists, it is engaged under its published contract. The work happens without duplicating intelligence that already exists.",
  },
  {
    id: "commission",
    title: "Or commission a new one",
    body: "When nothing fits, the need becomes a specification for a new agent — routed back into the same creation pipeline — built and proven in isolation before any authority is granted.",
  },
  {
    id: "grow",
    title: "The network grows from real demand",
    body: "Every commissioned agent enters the network permanently, so the next mission with the same need starts with an answer already in place.",
  },
];

const HiringLoop = () => (
  <Section id="hiring" className="py-20 md:py-28">
    <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.35]" />
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <ScrollReveal>
          <Eyebrow>Intelligent hiring</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <SectionTitle className="mt-5">
            Agents hire agents.
            <br />
            <span className="text-muted-foreground">And commission the ones that don't exist yet.</span>
          </SectionTitle>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <Lede className="mt-6">
            The network is not a static catalogue. It expands in response to work that actually
            happened.
          </Lede>
        </ScrollReveal>
      </div>

      <div className="relative mx-auto mt-14 max-w-5xl md:mt-20">
        <ol className="relative">
          <span
            className="pointer-events-none absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-border to-secondary/40 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          {loop.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 0.06}>
              <li
                className={`relative grid grid-cols-[24px_minmax(0,1fr)] gap-4 pb-8 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="md:hidden">
                  <span className="relative z-10 mt-2 block h-[9px] w-[9px] rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary)/0.7)]" />
                </div>
                <div className={i % 2 === 1 ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"}>
                  <span className="font-mono text-[0.625rem] tracking-[0.2em] text-primary/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold leading-snug text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
                <div className="hidden md:block" aria-hidden="true" />
                <span
                  className="pointer-events-none absolute left-1/2 top-3 z-10 hidden h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary)/0.7)] md:block"
                  aria-hidden="true"
                />
              </li>
            </ScrollReveal>
          ))}
        </ol>

        {/* return arc */}
        <ScrollReveal delay={0.2}>
          <div className="relative mt-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30" />
            <span className="whitespace-nowrap font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground/70">
              new capacity returns to the network
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          <div className="mt-6 text-center">
            <DirectionNote>
              Commissioning follows the same authority boundary as every other capability created in the
              system.
            </DirectionNote>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </Section>
);

export default HiringLoop;
