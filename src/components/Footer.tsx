import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#0F171E] border-t border-white/10 pt-8 pb-12 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm gap-3 text-center md:text-left">
        <div className="text-gray-400">© 2025 Aryan Rattan</div>
        <div className="text-gray-400">
          Built using <span className="text-orange-400">React</span>,{" "}
          <span className="text-orange-400">Vite</span>,{" "}
          <span className="text-orange-400">TailwindCSS</span>,{" "}
          <span className="text-orange-400">TypeScript</span>
        </div>
      </div>
    </footer>
  );
}