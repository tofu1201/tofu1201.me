import React from 'react';
import { PROFILE_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C2824] text-[#FAF7F0] border-t border-[#4A463F] py-8 px-4 text-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        <div className="w-8 h-8 bg-[#FEF08A] border border-[#23201D] text-[#23201D] font-heading font-black text-sm flex items-center justify-center mb-3 shadow-sm rounded-sm">
          T
        </div>

        <h3 className="font-heading text-xl font-black tracking-widest text-[#FAF7F0] mb-1">
          TOFU NOTEBOOK
        </h3>

        <p className="text-xs font-body text-[#FEF08A] tracking-wider uppercase mb-3 font-bold">
          116會考生 • 新竹縣兒少代表 • 程式設計者
        </p>

        <p className="text-xs font-body text-[#A8A298] tracking-wider uppercase font-bold">
          &copy; {new Date().getFullYear()} TOFU ({PROFILE_INFO.domain}). ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};
