import React from "react";
import { ScrollReveal, Accumulate } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow, SectionTitle, DirectionNote, PanelTitle, StateChip } from "@/components/body/primitives";

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

const byId = (id: string) => loop.find((s) => s.id === id)!;

/** Wide-canvas systems view of the same five steps — nodes, a branch, and a return path. */
const CommissioningMap = () => (
  <div className="relative h-full rounded-2xl border border-white/[0.06] bg-card/40 p-6 backdrop-blur-sm 2xl:p-8">
    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-dots opacity-[0.35]" />

    <div className="relative flex items-center justify-between gap-4">
      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground/80 2xl:text-xs">
        Commissioning path
      </span>
      <StateChip tone="active">Live network</StateChip>
    </div>

    {/* 01 — need */}
    <div className="relative mt-6 rounded-xl border border-primary/25 bg-primary/[0.05] px-5 py-4">
      <span className="font-mono text-[0.625rem] tracking-[0.22em] text-primary/80">01</span>
      <PanelTitle className="mt-1 text-[0.9375rem]">{byId("need").title}</PanelTitle>
    </div>

    <div className="relative mx-auto h-6 w-px bg-gradient-to-b from-primary/60 to-border" aria-hidden="true" />

    {/* 02 — search */}
    <div className="relative rounded-xl border border-white/[0.08] bg-background/50 px-5 py-4">
      <span className="font-mono text-[0.625rem] tracking-[0.22em] text-muted-foreground/70">02</span>
      <PanelTitle className="mt-1 text-[0.9375rem]">{byId("search").title}</PanelTitle>
      <div className="mt-3 flex flex-wrap gap-2" aria-hidden="true">
        {["need", "inputs", "required standard"].map((t) => (
          <StateChip key={t}>{t}</StateChip>
        ))}
      </div>
    </div>

    {/* branch */}
    <div className="relative mt-0" aria-hidden="true">
      <div className="mx-auto h-5 w-px bg-border" />
      <div className="mx-[16%] h-px bg-border" />
      <div className="flex justify-between px-[16%]">
        <span className="h-5 w-px bg-border" />
        <span className="h-5 w-px bg-border" />
      </div>
    </div>

    <div className="relative grid grid-cols-2 gap-4">
      <div className="rounded-xl border border-white/[0.08] bg-background/50 px-5 py-4">
        <span className="font-mono text-[0.625rem] tracking-[0.22em] text-muted-foreground/70">03</span>
        <PanelTitle className="mt-1 text-[0.875rem] leading-snug">{byId("engage").title}</PanelTitle>
        <p className="mt-2 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted-foreground/75">
          match found
        </p>
      </div>
      <div className="rounded-xl border border-secondary/30 bg-secondary/[0.06] px-5 py-4">
        <span className="font-mono text-[0.625rem] tracking-[0.22em] text-secondary/80">04</span>
        <PanelTitle className="mt-1 text-[0.875rem] leading-snug">{byId("commission").title}</PanelTitle>
        <p className="mt-2 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-secondary/70">
          built &amp; proven in isolation
        </p>
      </div>
    </div>

    {/* merge */}
    <div className="relative" aria-hidden="true">
      <div className="flex justify-between px-[16%]">
        <span className="h-5 w-px bg-border" />
        <span className="h-5 w-px bg-border" />
      </div>
      <div className="mx-[16%] h-px bg-border" />
      <div className="mx-auto h-5 w-px bg-gradient-to-b from-border to-primary/60" />
    </div>

    {/* 05 — grows */}
    <div className="relative rounded-xl border border-primary/25 bg-primary/[0.05] px-5 py-4">
      <span className="font-mono text-[0.625rem] tracking-[0.22em] text-primary/80">05</span>
      <PanelTitle className="mt-1 text-[0.9375rem]">{byId("grow").title}</PanelTitle>
    </div>

    {/* return path */}
    <div className="relative mt-5 flex items-center gap-3 rounded-lg border border-dashed border-primary/25 bg-primary/[0.03] px-4 py-3">
      <span className="font-mono text-base leading-none text-primary" aria-hidden="true">
        ↺
      </span>
      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary/80">
        new capacity returns to the network
      </span>
    </div>
  </div>
);

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

      <div className="mt-8 grid gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-stretch xl:gap-16">
        <div className="relative flex max-w-3xl flex-col justify-between">

          <span
            className="pointer-events-none absolute bottom-3 left-[4px] top-3 w-px bg-gradient-to-b from-primary/50 via-border to-secondary/40"
            aria-hidden="true"
          />
          <Accumulate step={0.07} className="xl:flex xl:flex-1 xl:flex-col xl:justify-between">
            {loop.map((s, i) => (
              <div key={s.id} className="relative pb-6 pl-7 text-left last:pb-0">
                <span
                  className="absolute left-0 top-[7px] h-[9px] w-[9px] rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.7)]"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-mono text-[0.625rem] tracking-[0.22em] text-primary/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <PanelTitle className="text-base leading-snug 2xl:text-lg">{s.title}</PanelTitle>
                </div>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-foreground 2xl:text-base">
                  {s.body}
                </p>
              </div>
            ))}
          </Accumulate>

          <ScrollReveal delay={0.16}>
            <div className="mt-6 flex items-center gap-3 xl:hidden">
              <span className="h-px flex-1 bg-gradient-to-r from-primary/30 to-secondary/30" />
              <span className="whitespace-nowrap font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
                new capacity returns to the network
              </span>
            </div>
            <div className="mt-5">
              <DirectionNote>
                Commissioning follows the same authority boundary as every other capability created
                in the system.
              </DirectionNote>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.12} className="hidden xl:block">
          <CommissioningMap />
        </ScrollReveal>
      </div>
    </div>
  </Section>
);

export default HiringLoop;
