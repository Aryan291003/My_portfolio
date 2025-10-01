import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const loc = useLocation();
  const active = loc.pathname === to;
  return (
    <Link
      to={to}
      className={`px-3 rounded-md text-sm font-semibold ${
        active ? 'bg-gray-900 text-black' : 'text-gray-200 hover:bg-white/50'
      }`}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#44438b3b] via-transparent to-transparent backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <span className="font-bold text-blue-500 px-2">AMAZING PRIME</span>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <a
            href="/resume.pdf"
            className="ml-3 px-3 py-2 rounded-md text-sm font-semibold bg-white/10 hover:bg-white/20"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
