import React, { useState } from 'react';
import { Menu, X, Sparkles, Code2, Shield, User, FileText, Send, BookOpen, Bookmark } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: '封面首頁', icon: Sparkles, bg: 'bg-[#FEF08A]' },
    { id: 'identities', label: '核心身份', icon: User, bg: 'bg-[#E0F2FE]' },
    { id: 'journey', label: '個人歷程', icon: Shield, bg: 'bg-[#FFEDD5]' },
    { id: 'proposals', label: '兒少提案與回覆', icon: FileText, bg: 'bg-[#FCE7F3]' },
    { id: 'projects', label: '程式作品', icon: Code2, bg: 'bg-[#D1FAE5]' },
    { id: 'blog', label: '專題文章', icon: BookOpen, bg: 'bg-[#FEF08A]' },
    { id: 'contact', label: '聯絡資訊', icon: Send, bg: 'bg-[#E0F2FE]' },
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#2C2824] text-[#FAF7F0] py-3 border-b border-[#4A463F] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Emblem - Notebook Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 group cursor-pointer text-left focus:outline-none"
        >
          <div className="w-8 h-8 bg-[#FEF08A] text-[#23201D] font-heading font-black text-base shadow-sm rounded-sm flex items-center justify-center border border-[#23201D]">
            <Bookmark className="w-4 h-4 text-[#23201D] fill-[#23201D]" />
          </div>

          <div className="flex flex-col">
            <span className="font-heading text-lg font-black tracking-widest text-[#FAF7F0] group-hover:text-[#FEF08A] transition-colors">
              TOFU NOTEBOOK
            </span>
            <span className="text-[10px] text-[#A8A298] tracking-widest uppercase -mt-1 font-body font-bold">
              {PROFILE_INFO.domain}
            </span>
          </div>
        </button>

        {/* Desktop Sticky Bookmark Index Tabs */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-body text-xs font-black tracking-wider uppercase px-3.5 py-2 transition-all duration-200 border border-[#23201D] ${item.bg} text-[#23201D] ${
                  isActive
                    ? 'shadow-md ring-2 ring-white font-black -translate-y-1 scale-105'
                    : 'opacity-85 hover:opacity-100 hover:-translate-y-0.5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[#A8A298] text-[#FAF7F0] hover:bg-[#FEF08A] hover:text-[#23201D] transition-colors rounded-sm"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2C2824] border-b border-[#4A463F] px-6 py-4 space-y-2 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-body text-xs font-black tracking-widest uppercase py-2.5 px-4 rounded-sm transition-colors border border-[#23201D] ${item.bg} text-[#23201D] ${
                  activePage === item.id ? 'ring-2 ring-white font-black' : 'opacity-90'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
