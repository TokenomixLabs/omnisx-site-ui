import React from "react";
import { ArrowRight } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Section, Eyebrow } from "@/components/body/primitives";

const FinalStatement = () => (
  <Section id="access" tone="deep" className="py-24 md:py-32">
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[900px] max-w-[130vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-primary/[0.07] via-secondary/[0.03] to-transparent blur-[100px]" />
    <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-[0.03]" />

    <div className="container relative z-10 mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <Eyebrow>Early access</Eyebrow>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-6 font-orbitron text-[clamp(1.85rem,5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-foreground">
            Build the workforce that
            <br />
            <span className="text-gradient">gets better at its job.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            OmnisX is building the intelligence layer for persistent, governed, evolving agents.
            We're working with a small group of partners defining what the first real agent
            workforces look like.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PremiumButton size="lg" className="min-w-[190px]">
              Request Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </PremiumButton>
            <PremiumButton variant="secondary" size="lg" className="min-w-[190px]">
              Partner With Us
            </PremiumButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.32}>
          <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground/50">
            Limited beta · Founding partners program
          </p>
        </ScrollReveal>
      </div>
    </div>
  </Section>
);

export default FinalStatement;
