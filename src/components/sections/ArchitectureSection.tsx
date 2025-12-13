import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const architectureNodes = [
  { id: "task", label: "TASK / INTENT", sublabel: "Input" },
  { id: "core", label: "OMNISX CORE", sublabel: "Orchestration" },
  { id: "agents", label: "SPECIALIZED AGENTS", sublabel: "Execution" },
  { id: "hypermesh", label: "HYPERMESH", sublabel: "Coordination" },
  { id: "output", label: "OUTPUT", sublabel: "Delivery" },
];

const ArchitectureNode = ({ 
  label, 
  sublabel, 
  isFirst, 
  isLast 
}: { 
  label: string; 
  sublabel: string; 
  isFirst?: boolean; 
  isLast?: boolean;
}) => (
  <div className="group relative flex flex-col items-center">
    {/* Node */}
    <div className="relative px-6 py-4 bg-card/50 border border-border/40 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-card/70 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      <div className="text-xs font-mono text-primary/70 mb-1 tracking-wider">
        {sublabel}
      </div>
      <div className="text-sm font-semibold text-foreground tracking-wide">
        {label}
      </div>
    </div>
  </div>
);

const FlowConnector = () => (
  <div className="relative flex items-center justify-center flex-1 min-w-[40px] max-w-[80px]">
    {/* Base line */}
    <div className="absolute h-px w-full bg-border/30" />
    
    {/* Animated pulse */}
    <div className="absolute h-px w-full overflow-hidden">
      <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-[flow_4s_ease-in-out_infinite]" />
    </div>
    
    {/* Arrow */}
    <div className="absolute right-0 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-border/50" />
  </div>
);

const ArchitectureSection = () => {
  return (
    <section className="relative py-32 bg-background">
      {/* Slightly darker overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Faint grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-display-sm font-display font-bold text-foreground mb-4 tracking-tight">
              SYSTEM ARCHITECTURE
            </h2>
            <p className="text-body-lg text-muted-foreground font-mono tracking-wide">
              A high-level view of OmnisX orchestration
            </p>
          </div>
        </ScrollReveal>
        
        {/* Architecture Diagram - Desktop */}
        <ScrollReveal delay={200}>
          <div className="hidden lg:flex items-center justify-center gap-0 max-w-5xl mx-auto">
            {architectureNodes.map((node, index) => (
              <React.Fragment key={node.id}>
                <ArchitectureNode 
                  label={node.label} 
                  sublabel={node.sublabel}
                  isFirst={index === 0}
                  isLast={index === architectureNodes.length - 1}
                />
                {index < architectureNodes.length - 1 && <FlowConnector />}
              </React.Fragment>
            ))}
          </div>
        </ScrollReveal>
        
        {/* Architecture Diagram - Mobile (Vertical) */}
        <ScrollReveal delay={200}>
          <div className="lg:hidden flex flex-col items-center gap-0 max-w-xs mx-auto">
            {architectureNodes.map((node, index) => (
              <React.Fragment key={node.id}>
                <ArchitectureNode 
                  label={node.label} 
                  sublabel={node.sublabel}
                  isFirst={index === 0}
                  isLast={index === architectureNodes.length - 1}
                />
                {index < architectureNodes.length - 1 && (
                  <div className="relative h-10 flex items-center justify-center">
                    <div className="absolute w-px h-full bg-border/30" />
                    <div className="absolute w-px h-full overflow-hidden">
                      <div className="w-full h-1/3 bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-[flowVertical_4s_ease-in-out_infinite]" />
                    </div>
                    <div className="absolute bottom-0 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-border/50" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ArchitectureSection;
