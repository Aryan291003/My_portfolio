'use client';
import React from "react";
import projects from "../data/projects";
import skills from "../data/skills";
// import { Link } from "react-router-dom";

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
        <source src="/video/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🏠 Hero Section */}
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
              className="group overflow-hidden rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            >
            
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

             <div className="max-h-0 overflow-hidden transition-all duration-300 px-4 py-2 bg-[#1a1a1a] group-hover:max-h-40">
                              
               <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
               <p className="text-sm text-gray-300 mb-2">{project.description}</p>
               <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                   <span
                  key={i}
                  className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full">
                    {tag}
                  </span>
      ))}
                </div>
                </div>
                </div>
          ))}
        </div>
      </section>

      {/* skill section */}
      <section className="bg-black py-16 px-8">
        <h2 className="text-3xl font-semibold mb-8 scroll-x">Skills</h2>

           <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-2">
    {skills.map((skills, index) => (
      <div
        key={index}
        className="min-w-[250px] bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex-shrink-0 cursor-pointer group"
      >
        <img
          src={skills.image}
          alt={skills.title}
          className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
        />
                </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
