import React from "react";
import { ArrowRight } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { AmbientBackground } from "@/components/backgrounds/AmbientBackground";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const CTASection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <AmbientBackground variant="minimal" intensity="medium" />
      
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-radial from-primary/[0.06] via-primary/[0.02] to-transparent blur-3xl pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-mono text-xs text-primary/80 tracking-widest uppercase mb-4">
              Early Access
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Join The First{" "}
              <span className="text-gradient">AI Agent Ecosystem</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the future. Partner with OmnisX to shape the next era of autonomous intelligence.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PremiumButton size="lg" className="min-w-[180px]">
                Join the Revolution
                <ArrowRight className="w-4 h-4 ml-2" />
              </PremiumButton>
              
              <PremiumButton variant="secondary" size="lg" className="min-w-[180px]">
                Request Access
              </PremiumButton>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <p className="mt-6 text-xs text-muted-foreground/60">
              <span className="font-mono">Limited Beta</span> · Founding Partners Program
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;