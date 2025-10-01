import React from 'react'

export default function About(){
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4 text-gray-300">I am a frontend developer ... (write your details here).</p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <ul className="mt-4 list-disc list-inside text-gray-300">
          <li>Frontend Developer at Company X</li>
          <li>Built multiple responsive web apps</li>
        </ul>
      </section>
    </div>
  )
}
