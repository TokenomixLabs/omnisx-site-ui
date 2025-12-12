import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const premiumButtonVariants = cva(
  cn(
    "relative inline-flex items-center justify-center gap-2",
    "font-display font-medium text-sm",
    "rounded-md transition-all duration-300 ease-out-expo",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "overflow-hidden"
  ),
  {
    variants: {
      variant: {
        primary: cn(
          // Gradient background
          "bg-gradient-to-r from-primary via-primary to-secondary",
          "text-primary-foreground",
          // Subtle inner highlight
          "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-100",
          // Outer glow effect
          "after:absolute after:-inset-1 after:rounded-lg after:bg-gradient-to-r after:from-primary after:to-secondary after:opacity-0 after:blur-lg after:-z-10 after:transition-opacity after:duration-300",
          // Hover state
          "hover:after:opacity-40 hover:shadow-glow-md hover:-translate-y-0.5",
          // Active state
          "active:translate-y-0 active:after:opacity-20"
        ),
        secondary: cn(
          "bg-card border border-white/[0.08]",
          "text-foreground",
          "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.04] before:to-transparent",
          "hover:border-white/[0.15] hover:bg-card-elevated hover:-translate-y-0.5",
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
        link: cn(
          "text-primary underline-offset-4",
          "hover:underline hover:text-primary-glow"
        ),
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-base",
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
  glowOnHover?: boolean;
}

const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ className, variant, size, asChild = false, glowOnHover = true, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          premiumButtonVariants({ variant, size, className }),
          glowOnHover && variant === "primary" && "btn-glow"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
PremiumButton.displayName = "PremiumButton";

export { PremiumButton, premiumButtonVariants };