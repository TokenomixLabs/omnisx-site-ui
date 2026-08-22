import React from "react";
import Navigation from "@/components/Navigation";
import HeroVideo from "@/components/HeroVideo";
import CategoryStatement from "@/components/sections/CategoryStatement";
import IntentToIntelligence from "@/components/sections/IntentToIntelligence";
import PersistentBeings from "@/components/sections/PersistentBeings";
import CapabilityEvolution from "@/components/sections/CapabilityEvolution";
import AgentServices from "@/components/sections/AgentServices";
import Workforces from "@/components/sections/Workforces";
import HiringLoop from "@/components/sections/HiringLoop";
import CapabilityNetwork from "@/components/sections/CapabilityNetwork";
import GovernedAutonomy from "@/components/sections/GovernedAutonomy";
import FinalStatement from "@/components/sections/FinalStatement";
import Footer from "@/components/sections/Footer";
import { BreathBand } from "@/components/body/primitives";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="relative">
        {/* Hero Section - Untouched */}
        <HeroVideo />

        <div className="relative">
          <CategoryStatement />
          <IntentToIntelligence />
          <PersistentBeings />

          {/* Showpiece framing — dark breathing bands isolate the centrepiece */}
          <BreathBand label="The boundary" />
          <CapabilityEvolution />
          <BreathBand />

          <AgentServices />
          <Workforces />
          <HiringLoop />
          <CapabilityNetwork />
          <GovernedAutonomy />
          <FinalStatement />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
