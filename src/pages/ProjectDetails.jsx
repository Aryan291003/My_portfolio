import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Project not found </h2>
        <Link
          to="/projects"
          className="text-yellow-400 hover:underline text-lg"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Link
        to="/projects"
        className="text-yellow-400 hover:underline text-lg mb-6 inline-block"
      >
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-400 mb-8">{project.longDescription || project.description}</p>

      <div className="mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl w-full max-h-[500px] object-cover"
        />
      </div>

      {project.extraImages && project.extraImages.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {project.extraImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Extra ${i}`}
              className="rounded-lg object-cover"
            />
          ))}
        </div>
      )}

      {project.tags && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-sm bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {project.video && (
  <video
    className="w-full rounded-lg shadow-md mt-4"
    controls
    autoPlay
    muted
    loop
  >
    <source src={project.video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
)}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md font-semibold"
        >
          View gitHub Project
        </a>
      )}
    </div>
  );
}
