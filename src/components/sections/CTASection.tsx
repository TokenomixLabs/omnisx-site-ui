import React from "react";
import { ArrowRight } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { AmbientBackground } from "@/components/backgrounds/AmbientBackground";

const CTASection = () => {
  return (
    <section className="relative py-section-lg overflow-hidden">
      <AmbientBackground variant="minimal" intensity="medium" />
      
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-radial from-primary/[0.08] via-primary/[0.02] to-transparent blur-3xl pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="font-mono text-caption text-primary/80 tracking-widest uppercase mb-6 animate-fade-up">
            Early Access
          </p>
          
          {/* Headline */}
          <h2 className="font-display text-display-md md:text-display-lg text-foreground mb-6 animate-fade-up animate-fade-up-delay-1">
            Join The First{" "}
            <span className="text-gradient">AI Agent Ecosystem</span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-body-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up animate-fade-up-delay-2">
            Be part of the future. Partner with OmnisX to shape the next era of autonomous intelligence.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-fade-up-delay-3">
            <PremiumButton size="xl" className="min-w-[200px]">
              Join the Revolution
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </PremiumButton>
            
            <PremiumButton variant="secondary" size="xl" className="min-w-[200px]">
              Request Access
            </PremiumButton>
          </div>
          
          {/* Trust indicator */}
          <p className="mt-8 text-caption text-muted-foreground/60 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <span className="font-mono">Limited Beta</span> · Founding Partners Program
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;