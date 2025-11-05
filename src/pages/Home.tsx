'use client';
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import skills from "../data/skills";
import upcoming from "../data/upcoming";
import upcomingskills from "../data/upcomingskills";
import HeroVideo from "../components/HeroVideo";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home: React.FC = () => {
  const projectRef = useRef<HTMLDivElement>(null!);
  const skillRef = useRef<HTMLDivElement>(null!);
  const uskillRef = useRef<HTMLDivElement>(null!);
  const [isMobile, setIsMobile] = useState(false);

 
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const enableDragScroll = (ref: React.RefObject<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const start = (e: MouseEvent | TouchEvent) => {
      isDown = true;
      element.classList.add("cursor-grabbing");
      startX =
        (e instanceof MouseEvent ? e.pageX : e.touches[0].pageX) -
        element.offsetLeft;
      scrollLeft = element.scrollLeft;
    };

    const end = () => {
      isDown = false;
      element.classList.remove("cursor-grabbing");
    };

    const move = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x =
        (e instanceof MouseEvent ? e.pageX : e.touches[0].pageX) -
        element.offsetLeft;
      const walk = (x - startX) * 1.5;
      element.scrollLeft = scrollLeft - walk;
    };

    element.addEventListener("mousedown", start);
    element.addEventListener("mouseleave", end);
    element.addEventListener("mouseup", end);
    element.addEventListener("mousemove", move);
    element.addEventListener("touchstart", start);
    element.addEventListener("touchend", end);
    element.addEventListener("touchmove", move);

    return () => {
      element.removeEventListener("mousedown", start);
      element.removeEventListener("mouseleave", end);
      element.removeEventListener("mouseup", end);
      element.removeEventListener("mousemove", move);
      element.removeEventListener("touchstart", start);
      element.removeEventListener("touchend", end);
      element.removeEventListener("touchmove", move);
    };
  };

  useEffect(() => {
    const cleanups = [
      enableDragScroll(projectRef),
      enableDragScroll(skillRef),
      enableDragScroll(uskillRef),
    ];
    return () => cleanups.forEach((cleanup) => cleanup && cleanup());
  }, []);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (!ref.current) return;
    const scrollAmount = ref.current.clientWidth * 0.9;
    ref.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-950 text-white overflow-hidden">
      <HeroVideo videoSrc="/video/intro.mp4" poster="/image/hero-fallback.jpg" />

      <section className="relative bg-black py-12 px-4 sm:py-16 sm:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Featured Projects</h2>
          {!isMobile && (
            <div className="flex gap-3">
              <button
                onClick={() => scroll(projectRef, "left")}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => scroll(projectRef, "right")}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full"
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </div>

        <div
          ref={projectRef}
          className="flex space-x-4 sm:space-x-6 overflow-x-auto scroll-smooth py-2 cursor-grab select-none hide-scrollbar"
        >
          {projects.slice(0, 6).map((project, index) => (
            <Link key={index} to={`/projects/${project.id}`}>
              <div className="group relative w-[80vw] sm:w-[320px] md:w-[380px] bg-[#1a1a1a] rounded-xl shadow-lg flex-shrink-0 cursor-pointer overflow-hidden hover:scale-105 transition-transform duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[200px] sm:h-[230px] object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
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
            </Link>
          ))}
        </div>
      </section>

     
      <section className="relative bg-black py-12 px-4 sm:py-16 sm:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
          {!isMobile && (
            <div className="flex gap-3">
              <button
                onClick={() => scroll(skillRef, "left")}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => scroll(skillRef, "right")}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full"
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </div>

        <div
          ref={skillRef}
          className="flex space-x-4 sm:space-x-6 overflow-x-auto scroll-smooth py-2 cursor-grab select-none hide-scrollbar"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-[70vw] sm:w-[300px] h-[250px] sm:h-[280px] bg-[#1a1a1a] rounded-xl shadow-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300 group relative"
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="w-full h-[200px] sm:h-[220px] object-cover rounded-t-xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg sm:text-xl font-semibold">{skill.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black py-12 px-4 sm:py-16 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
          Upcoming Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {upcoming.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
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

      
      <section className="relative bg-black py-12 px-4 sm:py-16 sm:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Upcoming Skills</h2>
          {!isMobile && (
            <div className="flex gap-3">
              <button
                onClick={() => scroll(uskillRef, "left")}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => scroll(uskillRef, "right")}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full"
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </div>

        <div
          ref={uskillRef}
          className="flex space-x-4 sm:space-x-6 overflow-x-auto scroll-smooth py-2 cursor-grab select-none scrollbar-hide"
        >
          {upcomingskills.map((skill, index) => (
            <div
              key={index}
              className="w-[70vw] sm:w-[300px] h-[250px] sm:h-[280px] bg-[#1a1a1a] rounded-xl shadow-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300 group relative"
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="w-full h-[200px] sm:h-[220px] object-cover rounded-t-xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg sm:text-xl font-semibold">{skill.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
