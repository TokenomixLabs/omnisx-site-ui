import React from "react";
import { cn } from "@/lib/utils";

/** Shared editorial primitives for the OmnisX body system. */

export const Section = ({
  id,
  className,
  children,
  tone = "base",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  tone?: "base" | "deep" | "raised";
}) => (
  <section
    id={id}
    className={cn(
      "relative overflow-hidden",
      tone === "deep" && "bg-[hsl(228_18%_6%)]",
      tone === "raised" && "bg-[hsl(228_18%_10%)]",
      className
    )}
  >
    {children}
  </section>
);

export const Eyebrow = ({
  children,
  tone = "primary",
  className,
}: {
  children: React.ReactNode;
  tone?: "primary" | "secondary" | "muted";
  className?: string;
}) => (
  <p
    className={cn(
      "font-mono text-[0.6875rem] uppercase tracking-[0.28em]",
      tone === "primary" && "text-primary/80",
      tone === "secondary" && "text-secondary/80",
      tone === "muted" && "text-muted-foreground/70",
      className
    )}
  >
    {children}
  </p>
);

export const SectionTitle = ({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3";
}) => (
  <Tag
    className={cn(
      "font-orbitron font-bold text-foreground text-[clamp(1.6rem,4vw,2.5rem)] leading-[1.12] tracking-tight",
      className
    )}
  >
    {children}
  </Tag>
);

export const Lede = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={cn("text-base md:text-lg text-muted-foreground leading-relaxed", className)}>
    {children}
  </p>
);

/** Small monospace state chip used across diagrams. */
export const StateChip = ({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "active" | "gate" | "evolved";
  className?: string;
}) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] whitespace-nowrap",
      tone === "neutral" && "border-border/60 bg-muted/30 text-muted-foreground",
      tone === "active" && "border-primary/30 bg-primary/[0.07] text-primary",
      tone === "gate" && "border-secondary/30 bg-secondary/[0.07] text-secondary",
      tone === "evolved" && "border-primary/20 bg-card text-foreground/80",
      className
    )}
  >
    {children}
  </span>
);

/** Thin hairline used to divide narrative beats. */
export const Hairline = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "h-px w-full bg-gradient-to-r from-transparent via-border to-transparent",
      className
    )}
  />
);

/** A "note" for product-direction language — keeps claims honest. */
export const DirectionNote = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[0.6875rem] leading-relaxed text-muted-foreground/60">
    {children}
  </p>
);
