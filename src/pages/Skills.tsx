import React from "react";
import skills from "../data/skills";

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#0F171E] text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1 text-white">Skills</h1>
        <p className="text-sm text-gray-400 mb-8 sm:mb-10">
          Browse by category
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {skills.map((s) => (
            <article
              key={s.id}
              className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105 hover:z-10 hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Backdrop image */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Genre-tile gradient overlay, like Prime's genre grid */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-orange-500/70 group-hover:via-black/50 transition-colors duration-300" />

              {/* Border accent */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-orange-400/60 rounded-lg transition-colors duration-300" />

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center p-3">
                <h3 className="text-sm sm:text-lg font-bold text-white uppercase tracking-wide text-center drop-shadow-lg">
                  {s.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}