import React from "react";
import { 
  PremiumCard, 
  PremiumCardContent, 
  PremiumCardIcon, 
  PremiumCardTitle, 
  PremiumCardDescription 
} from "@/components/ui/premium-card";
import { CoreIcon, AgentIcon, MeshIcon } from "@/components/icons/TechIcons";
import { AmbientBackground, SectionGlow } from "@/components/backgrounds/AmbientBackground";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const technologies = [
  {
    icon: CoreIcon,
    title: "OmnisX Core",
    description: "The foundational intelligence layer powering next-generation autonomous systems with unprecedented processing capability.",
    accentColor: "primary",
  },
  {
    icon: AgentIcon,
    title: "OmnisX Agents",
    description: "Autonomous AI workforce engineered for complex reasoning, adaptive problem-solving, and seamless human collaboration.",
    accentColor: "secondary",
  },
  {
    icon: MeshIcon,
    title: "Hypermesh",
    description: "Neural coordination network enabling real-time agent collaboration and distributed intelligence at global scale.",
    accentColor: "primary",
  },
];

const TechnologySection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden section-divider" id="technology">
      <AmbientBackground variant="grid" intensity="subtle" />
      <SectionGlow />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 md:mb-14">
          <p className="font-mono text-xs text-primary/80 tracking-widest uppercase mb-3">
            Infrastructure
          </p>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Technology</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Three foundational pillars engineered to define the next era of autonomous intelligence.
          </p>
        </ScrollReveal>
        
        {/* Technology Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <StaggerItem key={tech.title}>
              <PremiumCard variant="default">
                <PremiumCardContent>
                  <PremiumCardIcon>
                    <tech.icon 
                      size={44} 
                      className={tech.accentColor === "secondary" ? "text-secondary group-hover:text-secondary-glow" : ""} 
                    />
                  </PremiumCardIcon>
                  <PremiumCardTitle>{tech.title}</PremiumCardTitle>
                  <PremiumCardDescription>{tech.description}</PremiumCardDescription>
                </PremiumCardContent>
              </PremiumCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TechnologySection;