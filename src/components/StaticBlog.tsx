import React from 'react';
import { BLOG_POSTS } from '../data/portfolioData';
import { Feather } from 'lucide-react';

export const StaticBlog: React.FC = () => {
  return (
    <section id="blog" className="py-12 px-4 sm:px-6 min-h-[70vh]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="real-tape inline-block px-4 py-1.5 bg-[#FEF08A] border border-[#23201D] text-[#23201D] text-xs font-body font-black tracking-widest uppercase shadow-sm mb-3">
            📌 JOURNAL ESSAYS • THOUGHTS
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-widest text-[#23201D]">
            專題文章與隨筆
          </h2>
          <p className="mt-3 text-[#23201D]/80 font-body font-bold max-w-2xl mx-auto text-base">
            記錄關於兒少權益、程式開發與學習心得的思考。
          </p>
        </div>

        {/* Empty State */}
        {BLOG_POSTS.length === 0 && (
          <div className="sticky-note bg-[#FEF08A] p-10 text-center max-w-xl mx-auto my-8 space-y-4 border-2 border-[#23201D] -rotate-1">
            <div className="w-12 h-12 bg-white border-2 border-[#23201D] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Feather className="w-6 h-6 text-[#23201D]" />
            </div>
            <h3 className="font-heading text-2xl font-black text-[#23201D] tracking-wider">
              文章撰寫準備中
            </h3>
            <p className="text-[#23201D] font-body text-sm font-bold leading-relaxed max-w-md mx-auto">
              目前尚未發布公開文章。未來將持續在此分享兒少權益、Python 腳本寫作與 116 會考學習筆記，敬請期待！
            </p>
            <div className="inline-block px-3 py-1 bg-white border border-[#23201D] text-[#23201D] text-xs font-body font-black uppercase tracking-wider">
              TOFU NOTEBOOK • COMING SOON
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
