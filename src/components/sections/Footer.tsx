import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 md:py-16 overflow-hidden section-divider">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-card/30 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-tight">
              OmnisX<span className="text-primary">.ai</span>
            </div>
            <p className="text-body-sm text-muted-foreground/70 max-w-xs text-center md:text-left">
              Defining the infrastructure for autonomous intelligence.
            </p>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <a 
              href="#technology" 
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Technology
            </a>
            <a 
              href="#vision" 
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Vision
            </a>
            <a 
              href="#partners" 
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Partners
            </a>
            <a 
              href="#contact" 
              className="text-body-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
          
          {/* Legal */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-4 text-caption text-muted-foreground/50">
              <a href="#privacy" className="hover:text-muted-foreground transition-colors">
                Privacy
              </a>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <a href="#terms" className="hover:text-muted-foreground transition-colors">
                Terms
              </a>
            </div>
            <p className="text-caption text-muted-foreground/40">
              © {currentYear} OmnisX. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;