// src/components/VideoComponent.jsx
import React from "react";
import "./VideoComponent.css"; // Import custom CSS for animation

const VideoComponent = ({
  sources,
  poster,
  autoplay = false,
  loop = false,
  controls = true,
  title,
  caption,
}) => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-orange-400 to-peach-500 p-2 sm:p-5 rounded-lg shadow-lg">
      <video
        className="max-w-full h-auto rounded-lg video-fade-in hover:scale-105 transition-transform duration-300"
        poster={poster}
        autoPlay={autoplay}
        loop={loop}
        controls={controls}
        title={title}
      >
        {Array.isArray(sources) ? (
          sources.map((source, index) => (
            <source key={index} src={source.src} type={source.type} />
          ))
        ) : (
          <source src={sources} />
        )}
        Your browser does not support the video tag.
      </video>
      {caption && <p className="mt-2 text-white text-center">{caption}</p>}
    </div>
  );
};

export default VideoComponent;
