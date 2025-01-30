import Navigation from "@/components/Navigation";
import HeroVideo from "@/components/HeroVideo";
import VisionSection from "@/components/VisionSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Satellite, CircuitBoard, Atom, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-[#1A1F2C] text-white overflow-hidden">
      <Navigation />
      <main className="relative">
        <section className="relative h-screen">
          <HeroVideo />
        </section>

        <VisionSection />

        {/* Technology Section */}
        <section className="py-20 relative bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="font-orbitron text-4xl font-bold text-center mb-16">
            Our <span className="text-neon-purple">Technology</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border border-white/10 backdrop-blur hover:border-neon-blue transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-3">OmnisX Core</h3>
                <p className="text-gray-300 mb-4">The foundational intelligence layer powering next-generation AI systems.</p>
                <Satellite className="text-neon-blue animate-pulse" />
              </CardContent>
            </Card>
            <Card className="bg-card border border-white/10 backdrop-blur hover:border-neon-purple transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-3">OmnisX Agents</h3>
                <p className="text-gray-300 mb-4">Autonomous AI workforce designed for complex problem-solving.</p>
                <CircuitBoard className="text-neon-purple animate-pulse" />
              </CardContent>
            </Card>
            <Card className="bg-card border border-white/10 backdrop-blur hover:border-neon-blue transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-3">Hypermesh</h3>
                <p className="text-gray-300 mb-4">Neural coordination network enabling seamless agent collaboration.</p>
                <Atom className="text-neon-blue animate-pulse" />
              </CardContent>
            </Card>
          </div>
        </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-orbitron text-4xl font-bold mb-6">
            Join the First True AI Ecosystem
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the future. Partner with OmnisX to shape the next era of artificial intelligence.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 animate-gradient-flow"
          >
            Join the Revolution <ArrowRight className="ml-2" />
          </Button>
        </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="font-orbitron text-xl">OmnisX.ai</div>
            <div className="text-sm text-gray-400">© 2024 OmnisX. All rights reserved.</div>
          </div>
        </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
