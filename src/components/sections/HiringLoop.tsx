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
        <div className="grid gap-4 md:grid-cols-5 md:gap-3">
          {loop.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 0.06}>
              <div className="group relative h-full rounded-xl border border-white/[0.06] bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_50px_-24px_hsl(var(--primary)/0.6)]">
                <span className="font-mono text-[0.625rem] tracking-[0.2em] text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-sm font-semibold leading-snug text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
                {i < loop.length - 1 && (
                  <span className="pointer-events-none absolute -right-[7px] top-1/2 hidden h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-primary/40 bg-background md:block" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

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
