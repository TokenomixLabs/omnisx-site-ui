import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Volume2, VolumeX, Atom, CircuitBoard, Satellite, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

declare const Vimeo: any;

const Index = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState<any>(null);

  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const vimeoPlayer = new Vimeo.Player(iframe);
      setPlayer(vimeoPlayer);
    }
  }, []);

  const toggleMute = async () => {
    if (player) {
      if (isMuted) {
        await player.setVolume(1);
      } else {
        await player.setVolume(0);
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-[#1A1F2C] text-white w-full">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-morphism">
        <div className="container mx-auto px-4 py-2 md:py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/bb7e3b6e-d831-4a9a-998c-c74c5ddcb00b.png" 
              alt="OmnisX.ai Logo" 
              className="h-8 md:h-10 lg:h-12"
            />
          </div>
          <div className="hidden md:flex gap-4 lg:gap-6">
            <Button variant="ghost" className="text-white hover:text-neon-blue">Technology</Button>
            <Button variant="ghost" className="text-white hover:text-neon-blue">Vision</Button>
            <Button variant="ghost" className="text-white hover:text-neon-blue">Partners</Button>
            <Button 
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 animate-gradient-flow"
            >
              Request Access
            </Button>
          </div>
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            className="md:hidden text-white hover:text-neon-blue"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </nav>

      {/* Hero Video Section */}
      <div className="w-full h-screen overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1052026972?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="w-full h-full object-cover"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh'
          }}
          allow="autoplay; fullscreen"
          frameBorder="0"
        ></iframe>
        
        {/* Mute button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-50 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center"
        >
          {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
        </Button>
      </div>

      {/* Vision Section */}
      <section className="relative bg-[#1A1F2C] py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            Why <span className="text-neon-blue">OmnisX</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-card border border-white/10 backdrop-blur hover:border-neon-blue transition-all duration-300">
              <CardContent className="p-6">
                <Atom className="w-10 h-10 md:w-12 md:h-12 text-neon-blue mb-4 animate-glow" />
                <h3 className="font-orbitron text-lg md:text-xl font-bold mb-3">Quantum Intelligence</h3>
                <p className="text-gray-300">Advanced AI systems that harness quantum principles for unprecedented processing power.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-white/10 backdrop-blur hover:border-neon-purple transition-all duration-300">
              <CardContent className="p-6">
                <CircuitBoard className="w-10 h-10 md:w-12 md:h-12 text-neon-purple mb-4 animate-glow" />
                <h3 className="font-orbitron text-lg md:text-xl font-bold mb-3">Neural Architecture</h3>
                <p className="text-gray-300">Breakthrough neural networks that adapt and evolve in real-time.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-white/10 backdrop-blur hover:border-neon-blue transition-all duration-300">
              <CardContent className="p-6">
                <Satellite className="w-10 h-10 md:w-12 md:h-12 text-neon-blue mb-4 animate-glow" />
                <h3 className="font-orbitron text-lg md:text-xl font-bold mb-3">Accelerated Evolution</h3>
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
