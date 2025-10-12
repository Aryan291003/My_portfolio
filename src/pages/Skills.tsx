import React from "react";
import skills from "../data/skills";

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-gray-200">
      <h1 className="text-3xl font-bold mb-10 text-white">Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((s) => (
          <article
            key={s.id}
            className="bg-[#1a1a1a] rounded-xl p-4 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="h-48 bg-white/5 rounded-md mb-4 overflow-hidden flex items-center justify-center">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-center">{s.title}</h3>
          </article>
        ))}
      </div>
    </div>
  );
}
