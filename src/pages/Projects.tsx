import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0F171E] text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1 text-white">Projects</h1>
        <p className="text-sm text-gray-400 mb-8 sm:mb-10">
          A collection of things I've built
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {projects.map((p) => (
            <Link key={p.id} to={`/projects/${p.id}`}>
              <article className="group relative rounded-lg overflow-hidden bg-[#1A242D] border border-white/5 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10 hover:shadow-2xl hover:shadow-black/60">
                {/* Poster */}
                <div className="aspect-[2/3] w-full overflow-hidden bg-white/5">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Hover overlay — like Prime's "more info" card on browse grids */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F171E] via-[#0F171E]/85 to-[#0F171E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                  <h3 className="font-semibold text-sm sm:text-base text-white mb-1 line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-300 mb-2 line-clamp-2 sm:line-clamp-3">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-2">
                    {p.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-xs text-orange-400 bg-orange-500/20 px-1.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 bg-orange-500 text-[#0F171E] text-xs font-bold px-2.5 py-1 rounded">
                      ▶ Details
                    </span>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded transition-colors"
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Title strip always visible below poster, like a Prime tile caption */}
                <div className="p-2 sm:p-3 group-hover:opacity-0 transition-opacity duration-200">
                  <h3 className="font-medium text-xs sm:text-sm text-white truncate">
                    {p.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}