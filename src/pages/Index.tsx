import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Network, Cpu, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-orbitron text-2xl font-bold text-neon-blue">OmnisX<span className="text-white">.ai</span></div>
          <div className="flex gap-6">
            <Button variant="ghost" className="text-white hover:text-neon-blue">Technology</Button>
            <Button variant="ghost" className="text-white hover:text-neon-blue">Vision</Button>
            <Button variant="ghost" className="text-white hover:text-neon-blue">Partners</Button>
            <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90">
              Request Access
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 animate-float">
            The Intelligence Layer for
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent block mt-2">
              Autonomous Agents
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Defining the era of Agent Superintelligence
          </p>
          <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90">
            Request Early Access <ArrowRight className="ml-2" />
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
            <Card className="bg-card border border-white/10 backdrop-blur">
              <CardContent className="p-6">
                <Brain className="w-12 h-12 text-neon-blue mb-4" />
                <h3 className="font-orbitron text-xl font-bold mb-3">Meta-Learning AI</h3>
                <p className="text-gray-300">Advanced AI systems that evolve and adapt through continuous learning.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-white/10 backdrop-blur">
              <CardContent className="p-6">
                <Cpu className="w-12 h-12 text-neon-purple mb-4" />
                <h3 className="font-orbitron text-xl font-bold mb-3">Autonomous Decision Making</h3>
                <p className="text-gray-300">Intelligent agents that make complex decisions independently.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border border-white/10 backdrop-blur">
              <CardContent className="p-6">
                <Network className="w-12 h-12 text-neon-blue mb-4" />
                <h3 className="font-orbitron text-xl font-bold mb-3">Decentralized Intelligence</h3>
                <p className="text-gray-300">Distributed AI networks that collaborate and evolve together.</p>
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
            <Card className="bg-card border border-white/10 backdrop-blur hover:border-neon-blue transition-colors">
              <CardContent className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-3">OmnisX Core</h3>
                <p className="text-gray-300 mb-4">The foundational intelligence layer powering next-generation AI systems.</p>
                <ExternalLink className="text-neon-blue" />
              </CardContent>
            </Card>
            <Card className="bg-card border border-white/10 backdrop-blur hover:border-neon-purple transition-colors">
              <CardContent className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-3">OmnisX Agents</h3>
                <p className="text-gray-300 mb-4">Autonomous AI workforce designed for complex problem-solving.</p>
                <ExternalLink className="text-neon-purple" />
              </CardContent>
            </Card>
            <Card className="bg-card border border-white/10 backdrop-blur hover:border-neon-blue transition-colors">
              <CardContent className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-3">Hypermesh</h3>
                <p className="text-gray-300 mb-4">Neural coordination network enabling seamless agent collaboration.</p>
                <ExternalLink className="text-neon-blue" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-orbitron text-4xl font-bold mb-6">
            Join the AI Revolution
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the future. Partner with OmnisX to shape the next era of artificial intelligence.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90">
            Partner With Us <ArrowRight className="ml-2" />
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