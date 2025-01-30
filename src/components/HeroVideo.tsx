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

    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
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
    <div className="fixed inset-0 w-full h-full">
      <div 
        className="absolute inset-0 w-full h-full bg-black"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <div className="absolute inset-0">
          <iframe
            src="https://player.vimeo.com/video/1052026972?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none'
            }}
            allow="autoplay; fullscreen"
            frameBorder="0"
          />
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute}
        className="fixed z-50 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center bottom-8 right-8"
      >
        {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default HeroVideo;