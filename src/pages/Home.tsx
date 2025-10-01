'use client';
import React from "react";
import projects from "../data/projects";

const Home: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-950 text-white overflow-hidden">
    
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    
      <div className="flex flex-col items-center justify-center h-screen text-center bg-black/50 backdrop-blur-sm">
        <h1 className="text-6xl font-extrabold mb-4">Aryan</h1>
        <p className="text-xl max-w-2xl">
          This is a short description about me and my portfolio. (You can edit this!)
        </p>
      </div>

      <section className="bg-black py-16 px-8">
        <h2 className="text-3xl font-semibold mb-8">Featured Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-black py-16 px-8">
        <h2 className="text-3xl font-semibold mb-8">Skills To Explorer </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
