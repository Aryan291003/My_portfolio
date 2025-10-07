'use client';
import React, { useRef } from "react"; 
import projects from "../data/projects";
import skills from "../data/skills";
import upcoming from "../data/upcoming";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home: React.FC = () => {
const projectRef = useRef<HTMLDivElement>(null!);
const skillRef = useRef<HTMLDivElement>(null!);

const scroll = (
  ref: React.RefObject<HTMLDivElement>,
  direction: "left" | "right"
) => {
  ref.current.scrollBy({
    left: direction === "left" ? -400 : 400,
    behavior: "smooth",
  });
};

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

 
      <div className="flex flex-col items-center justify-center h-screen text-center bg-black/50 backdrop-blur-sm">
        <h1 className="text-6xl font-extrabold mb-4">Aryan</h1>
        <p className="text-xl max-w-2xl">
          This is a short description about me and my portfolio
        </p>
      </div>

    
      <section className="relative bg-black py-16 px-8">
        <h2 className="text-3xl font-semibold mb-8">Featured Projects</h2>

       
        <button
          onClick={() => scroll(projectRef, "left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 p-3 rounded-full z-10"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={() => scroll(projectRef, "right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 p-3 rounded-full z-10"
        >
          <ChevronRight size={28} />
        </button>


<div
  ref={projectRef}
  className="flex space-x-6 overflow-x-hidden scroll-smooth py-2"
>
  {projects.slice(0, 6).map((project, index) => (
    <div
      key={index}
      className="group relative w-[400px] bg-[#1a1a1a] rounded-xl shadow-lg flex-shrink-0 cursor-pointer overflow-hidden"
    >
      
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[230px] object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
      />

      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        
      
        <div className="overflow-hidden max-h-0 group-hover:max-h-[200px] transition-all duration-500 ease-in-out">
          <p className="text-sm text-gray-300 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
      </section>

      <section className="relative bg-black py-16 px-8">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>

        <button
          onClick={() => scroll(skillRef, "left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 p-3 rounded-full z-10"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={() => scroll(skillRef, "right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 p-3 rounded-full z-10"
        >
          <ChevronRight size={28} />
        </button>

        
        <div
          ref={skillRef} 
          className="flex space-x-6 overflow-x-hidden scroll-smooth py-2"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-[300px] h-[280px] bg-[#1a1a1a] rounded-xl shadow-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300 group relative"
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="w-full h-[220px] object-cover rounded-t-xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
     
<section className="bg-black py-16 px-8">
  <h2 className="text-3xl font-semibold mb-8"> Upcoming Projects</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {upcoming.map((project, index) => (
      <div
        key={index}
        className="bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags?.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

       
  </div>
  );
};

export default Home;
