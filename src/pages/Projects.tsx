import React from 'react'
import projects from '../data/projects'

export default function Projects(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-gray-400 mt-2">Add and edit projects in <code>src/data/projects.ts</code></p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <article key={p.id} className="bg-[#070809] rounded-lg p-4 shadow">
            <div className="h-44 bg-white/5 rounded-md mb-3 flex items-center justify-center overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{p.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="text-xs text-gray-500">{p.tags.join(' • ')}</div>
              <a href={p.link} className="text-yellow-400 font-semibold">Live</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
