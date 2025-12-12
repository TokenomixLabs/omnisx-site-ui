import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

// Custom geometric icons for frontier tech aesthetic
export const CoreIcon = ({ className = "", size = 48 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Central hexagon core */}
    <path
      d="M24 6L38.7 15V33L24 42L9.3 33V15L24 6Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Inner structure */}
    <path
      d="M24 12L33.6 17.5V28.5L24 34L14.4 28.5V17.5L24 12Z"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.6"
      fill="none"
    />
    {/* Central node */}
    <circle cx="24" cy="24" r="3" fill="currentColor" />
    {/* Connection lines */}
    <line x1="24" y1="21" x2="24" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <line x1="24" y1="27" x2="24" y2="34" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <line x1="21.4" y1="22.5" x2="14.4" y2="18.5" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <line x1="26.6" y1="25.5" x2="33.6" y2="29.5" stroke="currentColor" strokeWidth="1" opacity="0.4" />
  </svg>
);

export const AgentIcon = ({ className = "", size = 48 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Primary circuit paths */}
    <path
      d="M8 24H16M32 24H40"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M24 8V16M24 32V40"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    {/* Diagonal paths */}
    <path
      d="M12.5 12.5L17.5 17.5M30.5 30.5L35.5 35.5"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.6"
    />
    <path
      d="M35.5 12.5L30.5 17.5M17.5 30.5L12.5 35.5"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.6"
    />
    {/* Central processing unit */}
    <rect x="16" y="16" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="20" y="20" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
    {/* Corner nodes */}
    <circle cx="8" cy="24" r="2" fill="currentColor" opacity="0.8" />
    <circle cx="40" cy="24" r="2" fill="currentColor" opacity="0.8" />
    <circle cx="24" cy="8" r="2" fill="currentColor" opacity="0.8" />
    <circle cx="24" cy="40" r="2" fill="currentColor" opacity="0.8" />
  </svg>
);

export const MeshIcon = ({ className = "", size = 48 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Network nodes */}
    <circle cx="24" cy="12" r="3" fill="currentColor" />
    <circle cx="12" cy="28" r="3" fill="currentColor" />
    <circle cx="36" cy="28" r="3" fill="currentColor" />
    <circle cx="24" cy="38" r="2.5" fill="currentColor" opacity="0.7" />
    <circle cx="8" cy="16" r="2" fill="currentColor" opacity="0.5" />
    <circle cx="40" cy="16" r="2" fill="currentColor" opacity="0.5" />
    
    {/* Primary connections */}
    <path d="M24 15L12 25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M24 15L36 25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 31L24 38" stroke="currentColor" strokeWidth="1.5" />
    <path d="M36 31L24 38" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15 28H33" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    
    {/* Secondary connections */}
    <path d="M10 16L12 25" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <path d="M38 16L36 25" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <path d="M24 12L8 16" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <path d="M24 12L40 16" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

export const QuantumIcon = ({ className = "", size = 48 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Orbital rings */}
    <ellipse cx="24" cy="24" rx="18" ry="8" stroke="currentColor" strokeWidth="1" opacity="0.4" fill="none" />
    <ellipse cx="24" cy="24" rx="18" ry="8" stroke="currentColor" strokeWidth="1" opacity="0.4" fill="none" transform="rotate(60 24 24)" />
    <ellipse cx="24" cy="24" rx="18" ry="8" stroke="currentColor" strokeWidth="1" opacity="0.4" fill="none" transform="rotate(120 24 24)" />
    
    {/* Central core */}
    <circle cx="24" cy="24" r="4" fill="currentColor" />
    
    {/* Orbital particles */}
    <circle cx="42" cy="24" r="2" fill="currentColor" opacity="0.8" />
    <circle cx="15" cy="8.5" r="2" fill="currentColor" opacity="0.8" />
    <circle cx="15" cy="39.5" r="2" fill="currentColor" opacity="0.8" />
  </svg>
);

export const NeuralIcon = ({ className = "", size = 48 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Neural layers */}
    {/* Layer 1 */}
    <circle cx="8" cy="14" r="3" fill="currentColor" opacity="0.6" />
    <circle cx="8" cy="24" r="3" fill="currentColor" opacity="0.6" />
    <circle cx="8" cy="34" r="3" fill="currentColor" opacity="0.6" />
    
    {/* Layer 2 */}
    <circle cx="24" cy="10" r="3" fill="currentColor" opacity="0.8" />
    <circle cx="24" cy="24" r="4" fill="currentColor" />
    <circle cx="24" cy="38" r="3" fill="currentColor" opacity="0.8" />
    
    {/* Layer 3 */}
    <circle cx="40" cy="18" r="3" fill="currentColor" opacity="0.7" />
    <circle cx="40" cy="30" r="3" fill="currentColor" opacity="0.7" />
    
    {/* Connections */}
    <path d="M11 14L21 10M11 14L21 24M11 14L21 38" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <path d="M11 24L21 10M11 24L21 24M11 24L21 38" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <path d="M11 34L21 10M11 34L21 24M11 34L21 38" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <path d="M27 10L37 18M27 10L37 30" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <path d="M27 24L37 18M27 24L37 30" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <path d="M27 38L37 18M27 38L37 30" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

export const EvolutionIcon = ({ className = "", size = 48 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Ascending arrow structure */}
    <path
      d="M24 40V12"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M16 20L24 8L32 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="none"
    />
    
    {/* Progress markers */}
    <rect x="18" y="32" width="12" height="2" rx="1" fill="currentColor" opacity="0.4" />
    <rect x="16" y="26" width="16" height="2" rx="1" fill="currentColor" opacity="0.6" />
    <rect x="14" y="20" width="20" height="2" rx="1" fill="currentColor" opacity="0.8" />
    
    {/* Signal waves */}
    <path d="M8 36C12 33 16 36 20 33" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <path d="M28 36C32 33 36 36 40 33" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);