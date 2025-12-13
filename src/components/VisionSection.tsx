import React from "react";
import { 
  PremiumCard, 
  PremiumCardContent, 
  PremiumCardIcon, 
  PremiumCardTitle, 
  PremiumCardDescription 
} from "@/components/ui/premium-card";
import { QuantumIcon, NeuralIcon, EvolutionIcon } from "@/components/icons/TechIcons";
import { AmbientBackground } from "@/components/backgrounds/AmbientBackground";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const capabilities = [
  {
    icon: QuantumIcon,
    title: "Quantum Intelligence",
    description: "Advanced AI systems that harness quantum-inspired principles for unprecedented processing power and decision-making speed.",
    accentColor: "primary",
  },
  {
    icon: NeuralIcon,
    title: "Neural Architecture",
    description: "Breakthrough neural networks designed to adapt, learn, and evolve in real-time across dynamic environments.",
    accentColor: "secondary",
  },
  {
    icon: EvolutionIcon,
    title: "Accelerated Evolution",
    description: "Self-improving systems that continuously optimize through autonomous learning and iterative enhancement cycles.",
    accentColor: "primary",
  },
];

const VisionSection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden" id="vision">
      <AmbientBackground variant="dots" intensity="subtle" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 md:mb-14">
          <p className="font-mono text-xs text-secondary/80 tracking-widest uppercase mb-3">
            Capabilities
          </p>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unleash{" "}
            <span className="text-gradient">Agent Superintelligence</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built capabilities that transcend conventional AI limitations.
          </p>
        </ScrollReveal>
        
        {/* Capability Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <StaggerItem key={cap.title}>
              <PremiumCard variant="default">
                <PremiumCardContent>
                  <PremiumCardIcon>
                    <cap.icon 
                      size={44} 
                      className={cap.accentColor === "secondary" ? "text-secondary group-hover:text-secondary-glow" : ""} 
                    />
                  </PremiumCardIcon>
                  <PremiumCardTitle>{cap.title}</PremiumCardTitle>
                  <PremiumCardDescription>{cap.description}</PremiumCardDescription>
                </PremiumCardContent>
              </PremiumCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default VisionSection;