import { Button } from "../components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { AspectRatio } from "../components/ui/aspect-ratio";
import { useIsMobile } from "../hooks/use-mobile";
import ErrorBoundary from "./ErrorBoundary";

const VideoPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="relative w-full overflow-hidden bg-black pt-6 md:pt-12">
      <AspectRatio ratio={16/9}>
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          muted={isMuted}
          className="w-full h-full object-cover"
          src="/omnisx-hero.mp4"
        />
      </AspectRatio>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMuted(!isMuted)}
        className="absolute z-50 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center bottom-8 right-8"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </Button>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

const HeroVideo = () => (
  <ErrorBoundary>
    <VideoPlayer />
  </ErrorBoundary>
);

export default HeroVideo;
