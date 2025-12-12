import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-10 md:py-12 overflow-hidden section-divider">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-card/20 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo & Brand */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="font-orbitron text-lg md:text-xl font-semibold text-foreground tracking-tight">
                OmnisX<span className="text-primary">.ai</span>
              </div>
              <p className="text-sm text-muted-foreground/70 max-w-xs text-center md:text-left">
                Defining the infrastructure for autonomous intelligence.
              </p>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a 
                href="#technology" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Technology
              </a>
              <a 
                href="#vision" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Vision
              </a>
              <a 
                href="#partners" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Partners
              </a>
              <a 
                href="#contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
            
            {/* Legal */}
            <div className="flex flex-col items-center md:items-end gap-1">
              <div className="flex items-center gap-3 text-xs text-muted-foreground/50">
                <a href="#privacy" className="hover:text-muted-foreground transition-colors">
                  Privacy
                </a>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <a href="#terms" className="hover:text-muted-foreground transition-colors">
                  Terms
                </a>
              </div>
              <p className="text-xs text-muted-foreground/40">
                © {currentYear} OmnisX. All rights reserved.
              </p>
            </div>
          </div>
        </ScrollReveal>
        
        {/* Bottom accent line */}
        <div className="mt-8 pt-6 border-t border-border/20">
          <div className="flex justify-center">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;