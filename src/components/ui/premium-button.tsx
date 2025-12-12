import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const premiumButtonVariants = cva(
  cn(
    "relative inline-flex items-center justify-center gap-2",
    "font-orbitron font-medium text-sm",
    "rounded-md transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "overflow-hidden"
  ),
  {
    variants: {
      variant: {
        primary: cn(
          "bg-gradient-to-r from-primary via-primary to-secondary",
          "text-primary-foreground font-semibold",
          "shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)]",
          "hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.6)]",
          "hover:-translate-y-0.5",
          "active:translate-y-0"
        ),
        secondary: cn(
          "bg-card border border-white/[0.1]",
          "text-foreground",
          "hover:border-white/[0.2] hover:bg-card-elevated hover:-translate-y-0.5",
          "active:translate-y-0"
        ),
        ghost: cn(
          "text-muted-foreground",
          "hover:text-foreground hover:bg-white/[0.04]",
          "active:bg-white/[0.06]"
        ),
        outline: cn(
          "border border-white/[0.1] bg-transparent",
          "text-foreground",
          "hover:border-primary/50 hover:bg-primary/[0.05] hover:-translate-y-0.5",
          "active:translate-y-0"
        ),
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-10 px-5 text-sm",
        lg: "h-11 px-6 text-sm",
        xl: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface PremiumButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof premiumButtonVariants> {
  asChild?: boolean;
}

const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(premiumButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
PremiumButton.displayName = "PremiumButton";

export { PremiumButton, premiumButtonVariants };