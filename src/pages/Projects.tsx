import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-gray-200">
      <h1 className="text-3xl font-bold mb-10 text-white">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <article
            key={p.id}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group"
          >
            <Link to={`/projects/${p.id}`}>
              <div className="h-48 bg-white/5 flex items-center justify-center overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-xl mb-2 text-white">{p.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                  {p.tags.map((tag, i) => (
                    <span key={i} className="text-blue-400 bg-blue-600/20 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {p.link && (
                  <div className="mt-4">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 font-semibold hover:underline"
                    >
                      View Live 
                    </a>
                  </div>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
