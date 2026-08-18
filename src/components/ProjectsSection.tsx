import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, Github, Check } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-12 px-4 sm:px-6 min-h-[70vh]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="real-tape inline-block px-4 py-1.5 bg-[#D1FAE5] border border-[#23201D] text-[#23201D] text-xs font-body font-black tracking-widest uppercase shadow-sm mb-3">
            📌 CODE & CRAFT • PYTHON, HTML, CSS
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-widest text-[#23201D]">
            程式作品與專案
          </h2>
          <p className="mt-3 text-[#23201D]/80 font-body font-bold max-w-2xl mx-auto text-base">
            記錄運用 Python 腳本、HTML5 與 CSS3 所進行的自主學習作品。
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className={`sticky-note p-8 flex flex-col justify-between group rounded-sm border-2 border-[#23201D] ${
                idx % 2 === 0 ? 'bg-[#D1FAE5] -rotate-1' : 'bg-[#FEF08A] rotate-1'
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4 border-b-2 border-[#23201D]/20 pb-3">
                  <span className="font-heading text-xl font-black text-[#23201D] tracking-widest">
                    PROJECT {project.roman}
                  </span>
                  
                  <div className="px-3 py-1 bg-white border-2 border-[#23201D] text-[#23201D] text-xs font-body font-black uppercase">
                    {project.categoryLabel}
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-black text-[#23201D] mb-1">
                  {project.title}
                </h3>
                
                <span className="block text-xs font-body text-[#23201D]/80 font-black tracking-wider uppercase mb-4">
                  {project.subtitle}
                </span>

                <p className="text-[#23201D] font-body text-sm font-bold leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 border-t-2 border-[#23201D]/20 pt-4 mb-6">
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#23201D] font-black font-body">
                      <Check className="w-3.5 h-3.5 text-[#23201D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action Links */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-white border border-[#23201D] text-[#23201D] text-[11px] font-body font-black"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 border-t-2 border-[#23201D]/20 pt-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-body font-black text-[#23201D] tracking-wider uppercase hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#23201D]" /> 預覽網站
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-body font-black text-[#23201D]/70 tracking-wider uppercase hover:text-[#23201D]"
                    >
                      <Github className="w-3.5 h-3.5" /> 程式碼
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
