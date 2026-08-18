import React from 'react';
import { Shield, Code2, GraduationCap, CheckCircle2 } from 'lucide-react';
import { IDENTITIES } from '../data/portfolioData';

export const IdentitySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <Shield className="w-5 h-5 text-[#23201D]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#23201D]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#23201D]" />;
      default:
        return <Shield className="w-5 h-5 text-[#23201D]" />;
    }
  };

  const getBgColor = (idx: number) => {
    switch (idx) {
      case 0: return 'bg-[#FCE7F3] -rotate-1';
      case 1: return 'bg-[#D1FAE5] rotate-1';
      case 2: return 'bg-[#FEF08A] -rotate-1';
      default: return 'bg-white';
    }
  };

  return (
    <section id="identities" className="py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="real-tape inline-block px-4 py-1.5 bg-[#FEF08A] border border-[#23201D] text-[#23201D] text-xs font-body font-black tracking-widest uppercase shadow-sm mb-3">
            📌 NOTEBOOK PAGE • PILLARS
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-widest text-[#23201D]">
            核心身份與使命
          </h2>
          <p className="mt-3 text-[#23201D]/80 font-body font-bold max-w-2xl mx-auto text-base">
            在國中會考、公共議題發聲與程式開發之間，建立清晰的自主學習軌跡。
          </p>
        </div>

        {/* 3 Pillars Sticky Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {IDENTITIES.map((identity, idx) => (
            <div
              key={identity.roman}
              className={`sticky-note p-8 flex flex-col justify-between group rounded-sm border-2 border-[#23201D] ${getBgColor(idx)}`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6 border-b-2 border-[#23201D]/20 pb-3">
                  <span className="font-heading text-xl font-black text-[#23201D] tracking-widest">
                    NOTE {identity.roman}
                  </span>
                  
                  <div className="w-10 h-10 bg-white border-2 border-[#23201D] rounded-full flex items-center justify-center shadow-sm">
                    {getIcon(identity.icon)}
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-black text-[#23201D] mb-1">
                  {identity.title}
                </h3>
                
                <span className="inline-block text-xs font-body tracking-wider text-[#23201D]/80 font-black uppercase mb-4">
                  {identity.subtitle}
                </span>

                <p className="text-[#23201D] font-body text-sm font-bold leading-relaxed mb-6">
                  {identity.description}
                </p>

                {/* Bullets */}
                <div className="space-y-3 border-t-2 border-[#23201D]/20 pt-4">
                  {identity.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-[#23201D] font-black font-body">
                      <CheckCircle2 className="w-4 h-4 text-[#23201D] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t-2 border-[#23201D]/20 text-right">
                <span className="text-xs font-body tracking-widest text-[#23201D]/80 uppercase font-black">
                  TOFU NOTEBOOK • 115
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
