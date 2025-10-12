import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => {
  const loc = useLocation();
  const active = loc.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-sm font-semibold transition ${
        active
          ? 'bg-blue-500 text-black'
          : 'text-gray-200 hover:bg-white/10 hover:text-blue-600'
      }`}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  if (location.pathname === '/') return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f12]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-bold text-blue-500 text-lg">AMAZING PORTFOLIO</span>
        </div>

       
        <nav className="hidden md:flex items-center gap-3">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a
            href="/resume.pdf"
            className="ml-3 px-3 py-2 rounded-md text-sm font-semibold bg-white/10 hover:bg-white/20 text-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>

       
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-200 hover:text-yellow-400 focus:outline-none"
        >
          ☰
        </button>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-[#111]/95 px-4 pb-4 flex flex-col gap-2 text-gray-200">
          <NavLink to="/home" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/skills" onClick={() => setMenuOpen(false)}>Skills</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <a
            href="/resume.pdf"
            className="mt-2 px-3 py-2 rounded-md text-sm font-semibold bg-white/10 hover:bg-white/20 text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
