import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PremiumCardProps {
  variant?: "default" | "elevated" | "glow";
  hoverEffect?: boolean;
  children: React.ReactNode;
  className?: string;
}

const PremiumCard = ({ 
  className, 
  variant = "default", 
  hoverEffect = true, 
  children 
}: PremiumCardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative overflow-hidden rounded-lg",
        "bg-gradient-to-b from-card to-card/90",
        "border border-white/[0.06]",
        "shadow-[0_1px_0_0_rgba(255,255,255,0.02)_inset,0_8px_24px_-8px_rgba(10,12,20,0.6)]",
        "transition-all duration-300",
        hoverEffect && "hover:border-white/[0.12] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_16px_48px_-12px_rgba(10,12,20,0.7),0_0_30px_-10px_hsl(var(--primary)/0.15)]",
        "group",
        className
      )}
    >
      {/* Subtle top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

const PremiumCardContent = ({ 
  className, 
  children,
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6", className)} {...props}>
    {children}
  </div>
);

const PremiumCardIcon = ({ 
  className, 
  children 
}: { 
  className?: string; 
  children: React.ReactNode; 
}) => (
  <div
    className={cn(
      "mb-4 text-primary transition-all duration-300",
      "group-hover:text-primary group-hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.4)]",
      className
    )}
  >
    {children}
  </div>
);

const PremiumCardTitle = ({ 
  className, 
  children,
  ...props 
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn(
      "font-orbitron text-lg font-semibold text-foreground mb-2",
      "transition-colors duration-300",
      "group-hover:text-white",
      className
    )}
    {...props}
  >
    {children}
  </h3>
);

const PremiumCardDescription = ({ 
  className, 
  children,
  ...props 
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn(
      "text-sm text-muted-foreground leading-relaxed",
      className
    )}
    {...props}
  >
    {children}
  </p>
);

export {
  PremiumCard,
  PremiumCardContent,
  PremiumCardIcon,
  PremiumCardTitle,
  PremiumCardDescription,
};