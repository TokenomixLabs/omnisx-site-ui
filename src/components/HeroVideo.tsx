import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect } from "react";

declare const Vimeo: any;

const HeroVideo = () => {
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
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <iframe
          src="https://player.vimeo.com/video/1052026972?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          allow="autoplay; fullscreen"
          frameBorder="0"
        />
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-50 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center"
      >
        {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default HeroVideo;