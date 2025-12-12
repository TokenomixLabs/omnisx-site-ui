import React from "react";
import { PremiumButton } from "@/components/ui/premium-button";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed w-full z-50 glass-morphism">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/bb7e3b6e-d831-4a9a-998c-c74c5ddcb00b.png" 
            alt="OmnisX.ai Logo" 
            className="h-8 md:h-10 lg:h-11"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <PremiumButton variant="ghost" className="text-muted-foreground">
            Technology
          </PremiumButton>
          <PremiumButton variant="ghost" className="text-muted-foreground">
            Vision
          </PremiumButton>
          <PremiumButton variant="ghost" className="text-muted-foreground">
            Partners
          </PremiumButton>
          <div className="w-px h-6 bg-border mx-2" />
          <PremiumButton variant="primary" size="default">
            Request Access
          </PremiumButton>
        </div>
        
        {/* Mobile Menu Button */}
        <PremiumButton 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </PremiumButton>
      </div>
    </nav>
  );
};

export default Navigation;