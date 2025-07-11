import React, { useState } from "react";
import { PlayCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="pb-20 bg-white">
      <div className="relative w-auto h-[500px] max-w-3xl mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-lg">
        <img src={thumbnail} alt={alt} className="w-full h-full object-cover" />
        <button
          onClick={() => setIsOpen(true)}
          className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors"
          aria-label="Play video"
        >
          <PlayCircle className="w-20 h-20 text-white hover:scale-110 transition-transform" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-0 sm:p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative w-full h-full max-h-screen sm:h-auto sm:w-[90vw] sm:max-w-3xl sm:aspect-video">
                <iframe
                  className="w-full h-full rounded-none sm:rounded-lg"
                  src={videoUrl}
                  title="Video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 text-white text-xl bg-black/50 rounded-full p-2 hover:bg-black"
                >
                  &#10005;
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VideoOverlay;
