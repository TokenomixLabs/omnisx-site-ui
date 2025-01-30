import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

declare const Vimeo: any;

const HeroVideo = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState<any>(null);
  const isMobile = useIsMobile();

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
    <div className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-black/40">
        <div className="absolute inset-0">
          <iframe
            src="https://player.vimeo.com/video/1052026972?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="w-full h-full object-cover"
            allow="autoplay; fullscreen"
            frameBorder="0"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1F2C] pointer-events-none" />
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute}
        className="fixed z-50 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center bottom-8 right-8"
      >
        {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
      </Button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;