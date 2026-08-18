import React from 'react';
import { Shield, Code2, GraduationCap, ChevronRight, FileText, Bookmark } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface HeroProps {
  setActivePage: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActivePage }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6">
      
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center w-full">
        
        {/* Real Tape Sticky Header Badge */}
        <div className="real-tape inline-block px-6 py-2 bg-[#FEF08A] border border-[#23201D] text-[#23201D] text-xs sm:text-sm font-body font-black tracking-widest uppercase mb-8 shadow-sm -rotate-1">
          📌 TOFU'S PERSONAL NOTEBOOK • TOFU1201.ME
        </div>

        {/* Grand Title: TOFU */}
        <h1 className="font-heading text-6xl sm:text-8xl lg:text-9xl font-black tracking-widest text-[#23201D] mb-4 drop-shadow-sm">
          TOFU
        </h1>

        {/* High-Contrast Authentic Sticky Note Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-6">
          
          {/* Sticky Note 1: 116會考生 */}
          <button
            onClick={() => setActivePage('identities')}
            className="sticky-note px-5 py-3 bg-[#E0F2FE] border-2 border-[#23201D] text-[#23201D] font-body text-xs sm:text-sm font-black tracking-wider uppercase shadow-sticky hover:scale-105 transition-all flex items-center gap-2.5 -rotate-1"
          >
            <GraduationCap className="w-5 h-5 text-[#23201D] shrink-0" />
            <span className="font-black text-[#23201D]">116會考生</span>
          </button>

          {/* Sticky Note 2: 新竹縣兒少代表 (115/08/10上任) */}
          <button
            onClick={() => setActivePage('proposals')}
            className="sticky-note px-5 py-3 bg-[#FCE7F3] border-2 border-[#23201D] text-[#23201D] font-body text-xs sm:text-sm font-black tracking-wider uppercase shadow-sticky hover:scale-105 transition-all flex items-center gap-2.5 rotate-1"
          >
            <Shield className="w-5 h-5 text-[#23201D] shrink-0" />
            <span className="font-black text-[#23201D]">新竹縣兒少代表 (115/08/10上任)</span>
          </button>

          {/* Sticky Note 3: 程式設計者 (Python, HTML, CSS) */}
          <button
            onClick={() => setActivePage('projects')}
            className="sticky-note px-5 py-3 bg-[#D1FAE5] border-2 border-[#23201D] text-[#23201D] font-body text-xs sm:text-sm font-black tracking-wider uppercase shadow-sticky hover:scale-105 transition-all flex items-center gap-2.5 -rotate-1"
          >
            <Code2 className="w-5 h-5 text-[#23201D] shrink-0" />
            <span className="font-black text-[#23201D]">程式設計者 (Python, HTML, CSS)</span>
          </button>

        </div>

        {/* Tagline Paper Card */}
        <div className="max-w-2xl bg-white border-2 border-[#23201D] p-6 sm:p-8 my-6 shadow-md rounded-sm text-center relative">
          <p className="text-base sm:text-xl text-[#23201D] font-body font-black leading-relaxed italic">
            「{PROFILE_INFO.tagline}」
          </p>
        </div>

        {/* Navigation Page Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8 w-full max-w-3xl">
          
          <button
            onClick={() => setActivePage('journey')}
            className="sticky-note p-6 text-left flex flex-col justify-between bg-[#FEF08A] border-2 border-[#23201D] -rotate-1 hover:rotate-0 group"
          >
            <div>
              <div className="flex items-center justify-between mb-3 border-b-2 border-[#23201D]/20 pb-2">
                <span className="text-xs font-body font-black tracking-widest uppercase text-[#23201D]">PAGE I</span>
                <Bookmark className="w-4 h-4 text-[#23201D]" />
              </div>
              <h3 className="font-heading text-xl font-black text-[#23201D] mb-1">
                個人歷程
              </h3>
              <p className="text-xs text-[#23201D]/80 font-body font-bold">115/08/10 上任正式紀錄</p>
            </div>
            <div className="mt-6 pt-3 border-t-2 border-[#23201D]/20 flex justify-end">
              <span className="text-xs font-body font-black text-[#23201D] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                翻頁閱讀 <ChevronRight className="w-4 h-4 text-[#23201D]" />
              </span>
            </div>
          </button>

          <button
            onClick={() => setActivePage('proposals')}
            className="sticky-note p-6 text-left flex flex-col justify-between bg-[#FCE7F3] border-2 border-[#23201D] rotate-1 hover:rotate-0 group"
          >
            <div>
              <div className="flex items-center justify-between mb-3 border-b-2 border-[#23201D]/20 pb-2">
                <span className="text-xs font-body font-black tracking-widest uppercase text-[#23201D]">PAGE II</span>
                <FileText className="w-4 h-4 text-[#23201D]" />
              </div>
              <h3 className="font-heading text-xl font-black text-[#23201D] mb-1">
                兒少提案與回覆
              </h3>
              <p className="text-xs text-[#23201D]/80 font-body font-bold">提案內容與縣府處室回覆</p>
            </div>
            <div className="mt-6 pt-3 border-t-2 border-[#23201D]/20 flex justify-end">
              <span className="text-xs font-body font-black text-[#23201D] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                翻頁閱讀 <ChevronRight className="w-4 h-4 text-[#23201D]" />
              </span>
            </div>
          </button>

          <button
            onClick={() => setActivePage('projects')}
            className="sticky-note p-6 text-left flex flex-col justify-between bg-[#D1FAE5] border-2 border-[#23201D] -rotate-1 hover:rotate-0 group"
          >
            <div>
              <div className="flex items-center justify-between mb-3 border-b-2 border-[#23201D]/20 pb-2">
                <span className="text-xs font-body font-black tracking-widest uppercase text-[#23201D]">PAGE III</span>
                <Code2 className="w-4 h-4 text-[#23201D]" />
              </div>
              <h3 className="font-heading text-xl font-black text-[#23201D] mb-1">
                程式作品
              </h3>
              <p className="text-xs text-[#23201D]/80 font-body font-bold">Python, HTML & CSS 作品集</p>
            </div>
            <div className="mt-6 pt-3 border-t-2 border-[#23201D]/20 flex justify-end">
              <span className="text-xs font-body font-black text-[#23201D] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                翻頁閱讀 <ChevronRight className="w-4 h-4 text-[#23201D]" />
              </span>
            </div>
          </button>

        </div>

      </div>
    </section>
  );
};
