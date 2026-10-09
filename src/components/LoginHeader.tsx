import React from 'react';

export default function LoginHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F171E] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between">
        <div className="relative inline-block">
          <span className="text-white font-semibold text-lg tracking-tight">
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
    </header>
  );
}