import React from 'react'

export default function Contact(){
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-gray-300">Want to work together? Email me at <a href="mailto:you@example.com" className="text-yellow-400">you@example.com</a></p>

      <form className="mt-6 grid grid-cols-1 gap-4">
        <input className="p-3 bg-white/5 rounded" placeholder="Your name" />
        <input className="p-3 bg-white/5 rounded" placeholder="Your email" />
        <textarea className="p-3 bg-white/5 rounded" placeholder="Message" rows={6} />
        <button className="self-start px-5 py-3 bg-yellow-400 text-black rounded-md font-semibold">Send</button>
      </form>
    </div>
  )
}
