import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Shared in-view hook. Fires once and stays true — state is never discarded. */
export const useInView = <T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-50px", ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/**
 * ACCUMULATE — items reveal in sequence and every revealed item stays lit.
 * Nothing that has appeared is ever dimmed again: the motion performs the
 * claim that intelligence accumulates rather than resets.
 */
export const Accumulate = ({
  children,
  className,
  step = 0.09,
}: {
  children: React.ReactNode;
  className?: string;
  step?: number;
}) => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, i) => (
        <div
          data-accumulated={inView ? "true" : "false"}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(14px)",
            transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${i * step}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${i * step}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

/**
 * PROMOTE — a one-time state change as something crosses the authority seam.
 * Dim and unauthorised until observed, then permanently live. Never loops.
 */
export const Promote = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const { ref, inView } = useInView({ threshold: 0.25 });

  return (
    <div
      ref={ref}
      data-promoted={inView ? "true" : "false"}
      className={cn("promote-target", className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerContainerProps) => (
  <Accumulate className={className} step={staggerDelay}>
    {children}
  </Accumulate>
);

export const StaggerItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};
