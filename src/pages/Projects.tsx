import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.id}
            className="bg-[#070809] rounded-lg p-4 shadow hover:scale-105 transition-transform duration-300"
          >
            
            <Link to={`/projects/${p.id}`}>
              <div className="h-44 bg-white/5 rounded-md mb-3 flex items-center justify-center overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{p.description}</p>
            </Link>

            
            <div className="mt-3 flex items-center justify-between">
              <div className="text-xs text-gray-500">{p.tags.join(" • ")}</div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 font-semibold hover:underline"
                >
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
