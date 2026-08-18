import React from 'react';
import { PROPOSALS } from '../data/portfolioData';
import { FileText, Building2, Calendar, Tag, ShieldCheck, Clock } from 'lucide-react';

export const ProposalsSection: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 min-h-[70vh]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="real-tape inline-block px-4 py-1.5 bg-[#FCE7F3] border border-[#23201D] text-[#23201D] text-xs font-body font-black tracking-widest uppercase shadow-sm mb-3">
            📌 PUBLIC ADVOCACY • PROPOSALS & RESPONSES
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-widest text-[#23201D]">
            兒少政策提案與縣府回覆
          </h2>
          <p className="mt-3 text-[#23201D]/80 font-body font-bold max-w-2xl mx-auto text-base">
            記錄身為新竹縣兒少代表所提出之正式政策提案內容，與政府各局處研覆辦理情形。
          </p>
        </div>

        {/* Empty State */}
        {PROPOSALS.length === 0 ? (
          <div className="sticky-note bg-[#FEF08A] p-10 text-center max-w-xl mx-auto my-8 space-y-4 border-2 border-[#23201D] -rotate-1">
            <div className="w-12 h-12 bg-white border-2 border-[#23201D] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-[#23201D]" />
            </div>
            <h3 className="font-heading text-2xl font-black text-[#23201D] tracking-wider">
              提案研擬與心聲調研中
            </h3>
            <p className="text-[#23201D] font-body text-sm font-bold leading-relaxed max-w-md mx-auto">
              於 115 年 8 月 10 日正式上任新竹縣兒少代表。目前正在進行在地兒少心聲收集與議題調研，暫無正式提案。未來發布之具體提案內容與縣府局處回覆，將即時於此時間軸更新呈現！
            </p>
            <div className="inline-block px-3 py-1 bg-white border border-[#23201D] text-[#23201D] text-xs font-body font-black uppercase tracking-wider">
              PROPOSALS & GOV RESPONSES • TIMELINE
            </div>
          </div>
        ) : (
          /* Timeline for Proposals */
          <div className="relative border-l-2 border-[#23201D] ml-4 sm:ml-24 pl-6 sm:pl-10 space-y-16">
            {PROPOSALS.map((item) => (
              <div key={item.id} className="relative group">
                
                {/* Pin */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#FCE7F3] border-2 border-[#23201D] rounded-full flex items-center justify-center shadow-md">
                  <FileText className="w-4 h-4 text-[#23201D]" />
                </div>

                {/* Proposal Card */}
                <div className="sticky-note bg-white border-2 border-[#23201D] p-6 sm:p-8 space-y-6">
                  
                  {/* Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#23201D]/15 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-[#FEF08A] border border-[#23201D] text-[#23201D] text-xs font-black font-body tracking-wider uppercase">
                        {item.status}
                      </span>
                      <span className="text-xs font-body text-[#23201D]/80 font-black uppercase">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-body text-[#23201D] font-bold">
                      <Calendar className="w-3.5 h-3.5 text-[#23201D]" />
                      <span>提案日期：{item.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#23201D]">
                    {item.title}
                  </h3>

                  {/* Block 1: 提案內容 */}
                  <div className="bg-[#FEF08A]/60 p-5 border-l-4 border-[#23201D] space-y-2 border-t border-b border-r border-[#23201D]/20">
                    <div className="flex items-center gap-2 text-xs font-black font-body tracking-wider text-[#23201D] uppercase">
                      <FileText className="w-4 h-4 text-[#23201D]" />
                      <span>【 提案內容 】</span>
                    </div>
                    <p className="text-[#23201D] font-body text-sm sm:text-base font-bold leading-relaxed whitespace-pre-line">
                      {item.proposalContent}
                    </p>
                  </div>

                  {/* Block 2: 政府部門回覆 */}
                  {item.departmentResponse ? (
                    <div className="bg-[#23201D] text-white p-5 rounded-sm space-y-3 shadow-sm border border-[#23201D]">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/20 pb-2">
                        <div className="flex items-center gap-2 text-xs font-black font-body tracking-wider text-[#FEF08A] uppercase">
                          <Building2 className="w-4 h-4 text-[#FEF08A]" />
                          <span>【 政府部門回覆單位 】：{item.departmentResponse.department}</span>
                        </div>
                        {item.departmentResponse.responseDate && (
                          <span className="text-[11px] font-body text-gray-300 flex items-center gap-1 font-bold">
                            <Clock className="w-3 h-3 text-[#FEF08A]" />
                            {item.departmentResponse.responseDate}
                          </span>
                        )}
                      </div>

                      <p className="text-white font-body text-sm font-bold leading-relaxed whitespace-pre-line">
                        {item.departmentResponse.content}
                      </p>
                    </div>
                  ) : (
                    <div className="p-4 border-2 border-dashed border-[#23201D]/30 text-[#23201D]/80 text-xs font-body font-bold text-center bg-[#FFEDD5]">
                      ⏳ 縣府局處研覆辦理中
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#FFEDD5] border border-[#23201D] text-[#23201D] text-[11px] font-body font-black"
                      >
                        <Tag className="w-2.5 h-2.5 text-[#23201D]" />
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
