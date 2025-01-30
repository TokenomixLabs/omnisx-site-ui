import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Volume2, VolumeX, Atom, CircuitBoard, Satellite, ArrowRight } from "lucide-react";
import { useState } from "react";

declare const Vimeo: any; // Add type declaration for Vimeo

const Index = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const player = new Vimeo.Player(iframe);
      if (isMuted) {
        player.setVolume(1);
      } else {
        player.setVolume(0);
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#161537] backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/5ea8ea83-505a-41ff-bbcc-c04e49adc761.png" 
              alt="OmnisX.ai Logo" 
              className="h-10 md:h-12"
            />
          </div>
          <div className="hidden md:flex gap-6">
            <Button variant="ghost" className="text-white hover:text-neon-blue">Technology</Button>
            <Button variant="ghost" className="text-white hover:text-neon-blue">Vision</Button>
            <Button variant="ghost" className="text-white hover:text-neon-blue">Partners</Button>
            <Button 
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 animate-gradient-flow"
            >
              Request Access
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src={`https://player.vimeo.com/video/1052026972?background=1&autoplay=1&loop=1&byline=0&title=0${isMuted ? '&muted=1' : ''}`}
            className="absolute w-full h-full object-cover"
            allow="autoplay; fullscreen"
            frameBorder="0"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1F2C]/30 to-[#1A1F2C]"></div>
          
          {/* Mute button positioned on video */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="absolute bottom-8 right-8 z-50 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center"
          >
            {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
          </Button>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="font-orbitron text-4xl font-bold text-center mb-16">
            Why <span className="text-neon-blue">OmnisX</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border border-white/10 backdrop-blur hover:border-neon-blue transition-all duration-300">
              <CardContent className="p-6">
                <Atom className="w-12 h-12 text-neon-blue mb-4 animate-glow" />
                <h3 className="font-orbitron text-xl font-bold mb-3">Quantum Intelligence</h3>
                <p className="text-gray-300">Advanced AI systems that harness quantum principles for unprecedented processing power.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-white/10 backdrop-blur hover:border-neon-purple transition-all duration-300">
              <CardContent className="p-6">
                <CircuitBoard className="w-12 h-12 text-neon-purple mb-4 animate-glow" />
                <h3 className="font-orbitron text-xl font-bold mb-3">Neural Architecture</h3>
                <p className="text-gray-300">Breakthrough neural networks that adapt and evolve in real-time.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-white/10 backdrop-blur hover:border-neon-blue transition-all duration-300">
              <CardContent className="p-6">
                <Satellite className="w-12 h-12 text-neon-blue mb-4 animate-glow" />
                <h3 className="font-orbitron text-xl font-bold mb-3">Accelerated Evolution</h3>
                <p className="text-gray-300">Rapid advancement through self-improving AI systems.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;