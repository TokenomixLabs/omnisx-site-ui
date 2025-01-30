import { Button } from "@/components/ui/button";

const Navigation = () => (
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
);

export default Navigation;