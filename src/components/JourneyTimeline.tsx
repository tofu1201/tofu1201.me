import React, { useState } from 'react';
import { MILESTONES } from '../data/portfolioData';
import { CategoryFilter, Milestone } from '../types';
import { Shield, Code2, GraduationCap, Calendar, Tag, ChevronRight, X, Bookmark } from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);

  const filteredMilestones = MILESTONES.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'advocacy':
        return <Shield className="w-4 h-4 text-[#23201D]" />;
      case 'dev':
        return <Code2 className="w-4 h-4 text-[#23201D]" />;
      case 'learning':
        return <GraduationCap className="w-4 h-4 text-[#23201D]" />;
      default:
        return <Shield className="w-4 h-4 text-[#23201D]" />;
    }
  };

  return (
    <section id="journey" className="py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="real-tape inline-block px-4 py-1.5 bg-[#FFEDD5] border border-[#23201D] text-[#23201D] text-xs font-body font-black tracking-widest uppercase shadow-sm mb-3">
            📌 NOTEBOOK LOG • CHRONICLE
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-widest text-[#23201D]">
            個人經歷與學習紀錄
          </h2>
          <p className="mt-3 text-[#23201D]/80 font-body font-bold max-w-2xl mx-auto text-base">
            記錄在兒少代表上任、國中會考與程式開發中的關鍵軌跡。
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {[
              { id: 'all', label: '全部歷程' },
              { id: 'advocacy', label: '兒少代表' },
              { id: 'dev', label: '程式開發' },
              { id: 'learning', label: '學習紀錄' },
            ].map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as CategoryFilter)}
                  className={`px-4 py-1.5 text-xs font-body font-black tracking-wider uppercase transition-all border-2 border-[#23201D] ${
                    active
                      ? 'bg-[#23201D] text-[#FAF7F0] shadow-md scale-105'
                      : 'bg-white text-[#23201D] hover:bg-[#FEF08A]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#23201D] ml-4 sm:ml-28 pl-6 sm:pl-10 space-y-12">
          {filteredMilestones.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Date Badge */}
              <div className="hidden sm:flex absolute -left-[120px] top-1 flex-col items-end w-24 text-right">
                <span className="font-heading text-xl font-black text-[#23201D] tracking-wider">
                  {item.year}
                </span>
                <span className="text-xs font-body text-[#23201D]/70 tracking-widest uppercase font-black">
                  {item.month} 月
                </span>
              </div>

              {/* Pin Badge */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#FEF08A] border-2 border-[#23201D] rounded-full flex items-center justify-center shadow-md">
                <Bookmark className="w-4 h-4 text-[#23201D]" />
              </div>

              {/* Card */}
              <div
                onClick={() => setSelectedMilestone(item)}
                className="sticky-note bg-white border-2 border-[#23201D] p-6 sm:p-8 cursor-pointer hover:bg-[#FEF08A]/40"
              >
                <div className="flex sm:hidden items-center gap-2 text-xs font-body text-[#23201D]/70 tracking-widest mb-3 font-bold">
                  <Calendar className="w-3.5 h-3.5 text-[#23201D]" />
                  <span>{item.year}.{item.month}</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 px-3 py-1 bg-[#FEF08A] border border-[#23201D] text-[#23201D] text-xs font-body font-black uppercase">
                    {getCategoryIcon(item.category)}
                    <span>{item.categoryLabel}</span>
                  </div>

                  <span className="text-xs font-body text-[#23201D] font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    查看紀錄 <ChevronRight className="w-4 h-4 text-[#23201D]" />
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-black text-[#23201D] mb-3">
                  {item.title}
                </h3>

                <p className="text-[#23201D] font-body text-sm font-bold leading-relaxed mb-4">
                  {item.summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t-2 border-[#23201D]/15">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#FFEDD5] border border-[#23201D] text-[#23201D] text-[11px] font-body font-black"
                    >
                      <Tag className="w-2.5 h-2.5 text-[#23201D]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMilestone && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#23201D]/80 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-xl bg-white border-2 border-[#23201D] p-6 sm:p-8 shadow-2xl rounded-sm text-[#23201D]">
              <button
                onClick={() => setSelectedMilestone(null)}
                className="absolute top-4 right-4 p-1.5 bg-[#FEF08A] border border-[#23201D] text-[#23201D] hover:bg-[#23201D] hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-body text-[#23201D]/70 uppercase tracking-widest mb-1 font-black">
                JOURNAL ENTRY • {selectedMilestone.year}.{selectedMilestone.month}
              </div>

              <h3 className="font-heading text-2xl font-black text-[#23201D] mb-4">
                {selectedMilestone.title}
              </h3>

              <div className="space-y-3 text-[#23201D] font-body text-sm font-bold leading-relaxed border-t-2 border-b-2 border-[#23201D]/15 py-4 my-4">
                <p className="font-black text-[#23201D]">{selectedMilestone.summary}</p>
                <ul className="space-y-2 pt-2">
                  {selectedMilestone.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#23201D] font-bold">•</span>
                      <span className="text-[#23201D]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedMilestone(null)}
                  className="px-5 py-2 bg-[#23201D] text-white font-body font-black text-xs uppercase hover:bg-[#FEF08A] hover:text-[#23201D] transition-all border border-[#23201D]"
                >
                  關閉視窗
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
