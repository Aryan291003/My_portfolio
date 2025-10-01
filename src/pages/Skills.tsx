import React from 'react'

export default function Skills(){
  const skills = ['React', 'TypeScript', 'Tailwind', 'Three.js', 'Vite']
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Skills</h1>
      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map(s => <span key={s} className="px-3 py-1 bg-white/5 rounded">{s}</span>)}
      </div>
    </div>
  )
}
