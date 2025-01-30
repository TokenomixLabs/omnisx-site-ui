import { Card, CardContent } from "@/components/ui/card";
import { Atom, CircuitBoard, Satellite } from "lucide-react";

const VisionSection = () => (
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
);

export default VisionSection;