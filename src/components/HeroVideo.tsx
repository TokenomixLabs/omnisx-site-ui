import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

declare const Vimeo: any;

const HeroVideo = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState<any>(null);
  const isMobile = useIsMobile();

  const toggleMute = useCallback(async () => {
    if (player) {
      const newVolume = isMuted ? 1 : 0;
      await player.setVolume(newVolume);
      setIsMuted(!isMuted);
    }
  }, [player, isMuted]);

  useEffect(() => {
    const initializePlayer = async () => {
      const iframe = document.querySelector('iframe');
      if (iframe) {
        const vimeoPlayer = new Vimeo.Player(iframe);
        await vimeoPlayer.setVolume(0);
        setPlayer(vimeoPlayer);
      }
    };

    initializePlayer();

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[100dvh]">
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://player.vimeo.com/video/1052026972?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="w-full h-full"
          allow="autoplay; fullscreen"
          frameBorder="0"
          loading="eager"
          title="Background video"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1F2C]" />
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMute}
        className="absolute z-50 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center bottom-8 right-8"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default HeroVideo;