import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0F171E] flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center text-gray-200">
          <h2 className="text-3xl font-bold mb-4 text-orange-400">Project Not Found</h2>
          <Link
            to="/projects"
            className="text-orange-400 hover:underline text-lg"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F171E] text-gray-200">
      {/* Hero banner — backdrop image with gradient overlay, like a Prime title page */}
      <div className="relative w-full h-[55vh] sm:h-[65vh] min-h-[380px]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* gradient overlays: bottom fade into bg, left fade for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F171E] via-[#0F171E]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F171E]/80 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 sm:top-6 sm:left-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm sm:text-base text-white/90 hover:text-orange-400 transition-colors bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full"
          >
            ← Back to Projects
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 pb-6 sm:pb-10 max-w-3xl">
          {project.tags && (
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="text-xs uppercase tracking-wide bg-white/10 text-gray-200 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3 drop-shadow-lg">
            {project.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-3 sm:line-clamp-none max-w-2xl">
            {project.longDescription || project.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-5">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-[#0F171E] px-6 py-2.5 rounded-md font-bold transition-colors"
              >
                ▶ View Project
              </a>
            )}
            {project.video && (
              <a
                href="#preview"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-md font-semibold backdrop-blur-sm transition-colors"
              >
                Watch Preview
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Details section */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10 sm:py-14">
        {project.video && (
          <div id="preview" className="mb-10">
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">Preview</h2>
            <video
              className="w-full rounded-lg shadow-lg"
              controls
              autoPlay
              muted
              loop
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <div className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">About this project</h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            {project.longDescription || project.description}
          </p>
        </div>

        {project.tags && (
          <div className="mb-10">
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">Built with</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.extraImages?.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {project.extraImages.map((img, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden bg-[#1A242D] border border-white/10 hover:ring-2 hover:ring-orange-400/50 transition-all cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-[#0F171E] px-5 py-2.5 rounded-md font-bold transition-colors"
          >
            View GitHub Project
          </a>
        )}
      </div>
    </div>
  );
}