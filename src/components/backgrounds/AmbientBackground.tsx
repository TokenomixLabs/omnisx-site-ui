import React from "react";
import { cn } from "@/lib/utils";

interface AmbientBackgroundProps {
  variant?: "grid" | "dots" | "minimal";
  intensity?: "subtle" | "medium" | "strong";
  className?: string;
}

export const AmbientBackground = ({
  variant = "grid",
  intensity = "subtle",
  className,
}: AmbientBackgroundProps) => {
  const opacityMap = {
    subtle: "opacity-[0.03]",
    medium: "opacity-[0.05]",
    strong: "opacity-[0.08]",
  };

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      {/* Grid or dots pattern */}
      {variant === "grid" && (
        <div
          className={cn(
            "absolute inset-0 bg-grid bg-grid-fade",
            opacityMap[intensity]
          )}
        />
      )}
      
      {variant === "dots" && (
        <div
          className={cn(
            "absolute inset-0 bg-dots",
            opacityMap[intensity]
          )}
        />
      )}
      
      {/* Ambient glow orbs - very subtle */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px] animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/[0.02] blur-[100px] animate-pulse-subtle" style={{ animationDelay: "2s" }} />
      
      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      
      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export const SectionGlow = ({ className }: { className?: string }) => (
  <div className={cn("absolute inset-0 pointer-events-none", className)}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/[0.04] blur-[100px]" />
  </div>
);

export const DataFlowLines = ({ className }: { className?: string }) => (
  <div className={cn("absolute inset-0 pointer-events-none overflow-hidden opacity-20", className)}>
    {/* Horizontal flowing lines */}
    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-data-flow" style={{ animationDuration: "25s" }} />
    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent animate-data-flow" style={{ animationDuration: "30s", animationDelay: "-10s" }} />
    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-data-flow" style={{ animationDuration: "35s", animationDelay: "-20s" }} />
  </div>
);

export default AmbientBackground;