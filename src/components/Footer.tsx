import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-800 pt-8 pb-12 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm gap-3 text-center md:text-left">
        <div className="text-blue-400">© 2025 Aryan Rattan</div>
        <div className="text-blue-400">
          Built using <span className="text-blue-400">React</span>,{" "}
          <span className="text-blue-400">Vite</span>,{" "}
          <span className="text-blue-400">TailwindCSS</span>
          <span className="text-blue-400">TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
