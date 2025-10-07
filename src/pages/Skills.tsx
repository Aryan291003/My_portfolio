import React from 'react'
import skills from '../data/skills'

export default function Projects(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Skills</h1>
      

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(p => (
          <article key={p.id} className="bg-[#070809] rounded-lg p-4 shadow">
            <div className="h-44 bg-white/5 rounded-md mb-3 flex items-center justify-center overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
            
          </article>
        ))}
      </div>
    </div>
  )
}
