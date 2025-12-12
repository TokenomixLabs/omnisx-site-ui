import * as React from "react";
import { cn } from "@/lib/utils";

interface PremiumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "glow";
  hoverEffect?: boolean;
}

const PremiumCard = React.forwardRef<HTMLDivElement, PremiumCardProps>(
  ({ className, variant = "default", hoverEffect = true, children, ...props }, ref) => {
    const baseStyles = cn(
      "relative overflow-hidden rounded-lg transition-all duration-500 ease-out-expo",
      "border border-white/[0.06]",
      // Inner highlight
      "before:absolute before:inset-0 before:rounded-lg before:pointer-events-none",
      "before:bg-gradient-to-b before:from-white/[0.03] before:to-transparent before:opacity-100",
      // Ambient glow layer
      "after:absolute after:inset-0 after:rounded-lg after:pointer-events-none",
      "after:bg-gradient-radial after:from-primary/[0.03] after:to-transparent after:opacity-0 after:transition-opacity after:duration-500"
    );

    const variantStyles = {
      default: cn(
        "bg-gradient-to-b from-card to-card/80",
        "shadow-card"
      ),
      elevated: cn(
        "bg-gradient-to-b from-card-elevated to-card",
        "shadow-lg"
      ),
      glow: cn(
        "bg-gradient-to-b from-card to-card/90",
        "shadow-glow-sm"
      ),
    };

    const hoverStyles = hoverEffect
      ? cn(
          "hover:-translate-y-1 hover:border-white/[0.1]",
          "hover:shadow-card-hover",
          "hover:after:opacity-100",
          "group"
        )
      : "";

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], hoverStyles, className)}
        {...props}
      >
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);
PremiumCard.displayName = "PremiumCard";

const PremiumCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 md:p-8", className)}
    {...props}
  />
));
PremiumCardContent.displayName = "PremiumCardContent";

const PremiumCardIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mb-5 text-primary transition-all duration-500",
      "group-hover:text-primary-glow group-hover:drop-shadow-[0_0_12px_hsl(var(--primary)/0.5)]",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
PremiumCardIcon.displayName = "PremiumCardIcon";

const PremiumCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-display text-heading font-semibold text-foreground mb-3",
      "transition-colors duration-300",
      "group-hover:text-white",
      className
    )}
    {...props}
  />
));
PremiumCardTitle.displayName = "PremiumCardTitle";

const PremiumCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-body text-muted-foreground leading-relaxed",
      "transition-colors duration-300",
      "group-hover:text-muted-foreground/90",
      className
    )}
    {...props}
  />
));
PremiumCardDescription.displayName = "PremiumCardDescription";

export {
  PremiumCard,
  PremiumCardContent,
  PremiumCardIcon,
  PremiumCardTitle,
  PremiumCardDescription,
};