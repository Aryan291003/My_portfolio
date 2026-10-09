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
          ? 'bg-orange-500 text-[#0F171E]'
          : 'text-gray-200 hover:bg-white/10 hover:text-orange-400'
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F171E]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative inline-block">
            <span className="font-semibold text-white text-lg tracking-tight">
              AMAZING PORTFOLIO
            </span>
            <svg
              className="absolute left-0 -bottom-1 w-full"
              height="6"
              viewBox="0 0 100 6"
              preserveAspectRatio="none"
            >
              <path
                d="M2,2 Q50,10 98,2"
                stroke="#FF9900"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

       
        <nav className="hidden md:flex items-center gap-3">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/design">Design</NavLink>
          
          <a
            href="/resume.pdf"
            className="ml-3 px-3 py-2 rounded-md text-sm font-semibold bg-white/10 hover:bg-white/20 text-gray-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>

       
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-200 hover:text-orange-400 focus:outline-none"
        >
          ☰
        </button>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-[#0F171E]/98 border-t border-white/10 px-4 pb-4 flex flex-col gap-2 text-gray-200">
          <NavLink to="/home" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/skills" onClick={() => setMenuOpen(false)}>Skills</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <a
            href="/resume.pdf"
            className="mt-2 px-3 py-2 rounded-md text-sm font-semibold bg-white/10 hover:bg-white/20 text-center transition-colors"
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