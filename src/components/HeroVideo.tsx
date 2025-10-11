import React from "react";

interface HeroVideoProps {
  videoSrc: string;
  poster?: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ videoSrc, poster }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>

    
      <div className="absolute bottom-20 left-16 md:bottom-64 md:left-32 lg:bottom-10 lg:left-10">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
            Aryan
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
          Hey! I’m Aryan, a junior software developer passionate about learning, experimenting, and creating.
          Join me on my creative journey and explore everything I've built so far… and what's yet to come!
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
