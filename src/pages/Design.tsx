import React from "react";
import designs from "../data/design";

export default function Design() {
  return (
    <div className="min-h-screen bg-[#0F171E] text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="relative inline-block mb-2">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            Design Work
          </h1>
          <svg
            className="absolute left-0 -bottom-1 w-16"
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
        <p className="text-sm text-gray-400 mb-10 sm:mb-14">
          UI/UX and product design case studies
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {designs.map((d) => (
            <article
              key={d.id}
              className="group bg-[#1A242D] border border-white/5 rounded-xl overflow-hidden shadow-lg hover:ring-1 hover:ring-orange-400/40 transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden bg-white/5">
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <span className="inline-block text-xs uppercase tracking-wide text-orange-400 bg-orange-500/20 px-2 py-1 rounded mb-3">
                  {d.role}
                </span>

                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {d.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {d.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {d.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {d.caseStudyLink && (
                  <a
                    href={d.caseStudyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    View Case Study →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}