import React from "react";

interface HeroVideoProps {
  videoSrc: string;
  poster?: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ videoSrc, poster }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video */}
      <video
      className="absolute top-0 left-0 w-full h-full object-contain md:object-cover"
      autoPlay
       loop
       muted
        playsInline
       poster={poster}
        >
  <source src={videoSrc} type="video/mp4" />
  Your browser does not support the video tag.
</video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

      {/* Text */}
      <div className="absolute left-6 bottom-24 md:left-16 md:bottom-36 lg:left-20 lg:bottom-20 text-left max-w-xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-md">
          Aryan
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Hey! I’m Aryan, a software developer passionate about learning,
          experimenting, and creating. Join me on my creative journey and explore
          everything I've built so far — and what's yet to come!
        </p>
      </div>
    </div>
  );
};

export default HeroVideo;
