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
    subtle: "opacity-[0.02]",
    medium: "opacity-[0.04]",
    strong: "opacity-[0.06]",
  };

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.01] to-transparent" />
      
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
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.02] blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-secondary/[0.015] blur-[80px]" />
    </div>
  );
};

export const SectionGlow = ({ className }: { className?: string }) => (
  <div className={cn("absolute inset-0 pointer-events-none", className)}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/[0.03] blur-[80px]" />
  </div>
);

export const DataFlowLines = ({ className }: { className?: string }) => (
  <div className={cn("absolute inset-0 pointer-events-none overflow-hidden opacity-10", className)}>
    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-data-flow" style={{ animationDuration: "25s" }} />
    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-data-flow" style={{ animationDuration: "30s", animationDelay: "-10s" }} />
    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-data-flow" style={{ animationDuration: "35s", animationDelay: "-20s" }} />
  </div>
);

export default AmbientBackground;