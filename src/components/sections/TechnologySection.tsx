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
    <section className="relative py-section-lg overflow-hidden section-divider">
      <AmbientBackground variant="grid" intensity="subtle" />
      <SectionGlow />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="font-mono text-caption text-primary/80 tracking-widest uppercase mb-4">
            Infrastructure
          </p>
          <h2 className="font-display text-display-md md:text-display-lg text-foreground mb-6">
            Our <span className="text-gradient">Technology</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Three foundational pillars engineered to define the next era of autonomous intelligence.
          </p>
        </div>
        
        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <PremiumCard 
              key={tech.title}
              variant="default"
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PremiumCardContent>
                <PremiumCardIcon>
                  <tech.icon 
                    size={48} 
                    className={tech.accentColor === "secondary" ? "text-secondary group-hover:text-secondary-glow" : ""} 
                  />
                </PremiumCardIcon>
                <PremiumCardTitle>{tech.title}</PremiumCardTitle>
                <PremiumCardDescription>{tech.description}</PremiumCardDescription>
              </PremiumCardContent>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;