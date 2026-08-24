import React from "react";
import { cn } from "@/lib/utils";

/** Shared editorial primitives for the OmnisX body system.
 *
 *  Section tiers create the page crescendo:
 *  - "showpiece" (Tier A) — Capability Evolution only
 *  - "argument"  (Tier B) — Persistent Beings, Workforces, Governed Autonomy
 *  - "exhibit"   (Tier C) — Agent Services, Capability Network, Commissioning
 */

export type SectionTier = "showpiece" | "argument" | "exhibit" | "plain";

const tierPadding: Record<SectionTier, string> = {
  showpiece: "py-28 md:py-44",
  argument: "py-20 md:py-28",
  exhibit: "py-14 md:py-16",
  plain: "",
};

export const Section = ({
  id,
  className,
  children,
  tone = "base",
  tier = "plain",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  tone?: "base" | "deep" | "raised" | "void";
  tier?: SectionTier;
}) => (
  <section
    id={id}
    className={cn(
      "relative overflow-hidden",
      tone === "deep" && "bg-[hsl(228_18%_6%)]",
      tone === "raised" && "bg-[hsl(228_18%_10%)]",
      tone === "void" && "bg-[hsl(228_22%_4%)]",
      tierPadding[tier],
      className
    )}
  >
    {children}
  </section>
);

/** Dark breathing band used to frame the showpiece. */
export const BreathBand = ({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) => (
  <div
    className={cn(
      "relative h-20 w-full overflow-hidden bg-[hsl(228_22%_4%)] md:h-28",
      className
    )}
    aria-hidden={label ? undefined : "true"}
  >
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    {label && (
      <div className="flex h-full items-center justify-center">
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.32em] text-muted-foreground/40">
          {label}
        </span>
      </div>
    )}
  </div>
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

/**
 * Section headline.
 * - "display"  — Orbitron, showpiece scale. Reserved for Tier A + doctrine.
 * - "argument" — Orbitron, standard section scale.
 * - "exhibit"  — Space Grotesk, compact. Used by Tier C so evidence sections
 *                do not read as three more manifestos.
 */
export const SectionTitle = ({
  children,
  className,
  as: Tag = "h2",
  variant = "argument",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  variant?: "display" | "argument" | "exhibit";
}) => (
  <Tag
    className={cn(
      "text-foreground",
      variant === "display" &&
        "font-orbitron font-bold text-[clamp(2rem,5.4vw,3.4rem)] leading-[1.06] tracking-tight",
      variant === "argument" &&
        "font-orbitron font-bold text-[clamp(1.6rem,4vw,2.5rem)] leading-[1.12] tracking-tight",
      variant === "exhibit" &&
        "font-grotesk font-semibold text-[clamp(1.35rem,2.6vw,1.85rem)] leading-[1.18] tracking-[-0.015em]",
      className
    )}
  >
    {children}
  </Tag>
);

/** Doctrine line — the only other place Orbitron is permitted at scale. */
export const Doctrine = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={cn(
      "font-orbitron font-bold leading-[1.15] tracking-tight text-foreground",
      className
    )}
  >
    {children}
  </p>
);

/** Panel / card / stage title — never Orbitron. */
export const PanelTitle = ({
  children,
  className,
  as: Tag = "h3",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h3" | "h4";
}) => (
  <Tag
    className={cn(
      "font-grotesk font-semibold tracking-[-0.01em] text-foreground",
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
