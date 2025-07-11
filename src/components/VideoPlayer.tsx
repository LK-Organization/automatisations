import React, { useRef, useState } from "react";
import { PlayCircle } from "lucide-react";

interface VideoOverlayProps {
  thumbnail: string;
  videoUrl: string;
  alt?: string;
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({
  thumbnail,
  videoUrl,
  alt = "Video thumbnail",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="pb-20 bg-white">
      <div className="relative w-auto h-[500px] max-w-3xl mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={thumbnail}
          controls={isPlaying}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors"
            aria-label="Play video"
          >
            <PlayCircle className="w-20 h-20 text-white hover:scale-110 transition-transform" />
          </button>
        )}
      </div>
    </section>
  );
};

export default VideoOverlay;
