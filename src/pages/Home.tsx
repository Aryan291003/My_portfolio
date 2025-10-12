'use client';
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import skills from "../data/skills";
import upcoming from "../data/upcoming";
import upcomingskills from "../data/upcomingskills";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroVideo from "../components/HeroVideo";

const Home: React.FC = () => {
  const projectRef = useRef<HTMLDivElement>(null!);
  const skillRef = useRef<HTMLDivElement>(null!);
  const uskillRef = useRef<HTMLDivElement>(null!);

  // Scroll buttons
  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (!ref.current) return;
    const scrollAmount = ref.current.clientWidth * 0.8;
    ref.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Swipe handling (touch)
  const addSwipe = (ref: React.RefObject<HTMLDivElement>) => {
    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;

    ref.current?.addEventListener("touchstart", (e) => {
      isDown = true;
      startX = e.touches[0].pageX - ref.current!.offsetLeft;
      scrollLeft = ref.current!.scrollLeft;
    });

    ref.current?.addEventListener("touchend", () => {
      isDown = false;
    });

    ref.current?.addEventListener("touchmove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - ref.current!.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed
      ref.current!.scrollLeft = scrollLeft - walk;
    });
  };

  React.useEffect(() => {
    addSwipe(projectRef);
    addSwipe(skillRef);
    addSwipe(uskillRef);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gray-950 text-white overflow-hidden">
      <HeroVideo videoSrc="/video/intro.mp4" poster="/image/hero-fallback.jpg" />

      {/* Featured Projects */}
      <section className="relative bg-black py-12 px-4 sm:py-16 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">Featured Projects</h2>

        <button
          onClick={() => scroll(projectRef, "left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 p-2 sm:p-3 rounded-full z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll(projectRef, "right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 p-2 sm:p-3 rounded-full z-10"
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={projectRef}
          className="flex space-x-4 sm:space-x-6 overflow-x-hidden scroll-smooth py-2"
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

      {/* Skills */}
      <section className="relative bg-black py-12 px-4 sm:py-16 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">Skills</h2>

        <button
          onClick={() => scroll(skillRef, "left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 p-2 sm:p-3 rounded-full z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll(skillRef, "right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 p-2 sm:p-3 rounded-full z-10"
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={skillRef}
          className="flex space-x-4 sm:space-x-6 overflow-x-hidden scroll-smooth py-2"
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

      {/* Upcoming Projects */}
      <section className="bg-black py-12 px-4 sm:py-16 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">Upcoming Projects</h2>

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

      {/* Upcoming Skills */}
      <section className="relative bg-black py-12 px-4 sm:py-16 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">Upcoming Skills</h2>
        <button
          onClick={() => scroll(uskillRef, "left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 p-2 sm:p-3 rounded-full z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll(uskillRef, "right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 p-2 sm:p-3 rounded-full z-10"
        >
          <ChevronRight size={24} />
        </button>
        <div
          ref={uskillRef}
          className="flex space-x-4 sm:space-x-6 overflow-x-hidden scroll-smooth py-2"
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
