import React from "react";
import Navigation from "@/components/Navigation";
import HeroVideo from "@/components/HeroVideo";
import VisionSection from "@/components/VisionSection";
import TechnologySection from "@/components/sections/TechnologySection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section - Untouched */}
        <HeroVideo />
        
        {/* Main Content */}
        <div className="relative">
          {/* Vision/Capabilities Section */}
          <VisionSection />
          
          {/* Technology Section */}
          <TechnologySection />
          
          {/* CTA Section */}
          <CTASection />
          
          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;