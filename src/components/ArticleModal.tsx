import React from 'react';
import { BlogPost } from '../types';
import { X, Calendar, Clock, Tag, Share2, BookOpen } from 'lucide-react';

interface ArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  const handleCopyLink = () => {
    const url = `https://tofu1201.me/#blog`;
    navigator.clipboard.writeText(url);
    alert('已複製文章連結：' + url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-art-black/90 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-art-charcoal border-2 border-art-gold art-corner-brackets flex flex-col shadow-art-glow-xl overflow-hidden">
        
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-art-gold/30 bg-art-black">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 border border-art-gold rotate-45 flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5 text-art-gold -rotate-45" />
            </div>
            <span className="font-heading text-xs font-bold tracking-widest text-art-gold uppercase">
              TOFU1201.ME • BLOG READER
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-art-gold/40 text-art-gold hover:bg-art-gold hover:text-art-black transition-all"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Article Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-12 py-8 space-y-6 text-art-champagne font-body">
          
          {/* Category Pill */}
          <div className="inline-block px-3 py-1 bg-art-gold/10 border border-art-gold text-art-gold text-xs font-bold tracking-widest uppercase">
            {article.category}
          </div>

          {/* Article Title */}
          <h1 className="font-heading text-2xl sm:text-4xl font-bold tracking-widest text-art-champagne leading-snug">
            {article.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-art-pewter border-b border-art-gold/20 pb-6">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-art-gold" />
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-art-gold" />
              {article.readTime}
            </span>
            <span className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-art-gold" />
              {article.tags.join(', ')}
            </span>
          </div>

          {/* Article Excerpt Card */}
          <div className="p-4 bg-art-black border-l-4 border-art-gold text-art-gold/90 italic text-sm">
            "{article.excerpt}"
          </div>

          {/* Main Article Content */}
          <div className="prose prose-invert max-w-none text-art-champagne/90 leading-relaxed text-base space-y-4 whitespace-pre-line">
            {article.content}
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-art-gold/30 bg-art-black">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-4 py-2 border border-art-gold/40 text-art-gold text-xs font-bold tracking-widest uppercase hover:border-art-gold hover:bg-art-gold/10 transition-all"
          >
            <Share2 className="w-3.5 h-3.5" />
            分享這篇文章
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 bg-art-gold text-art-black font-body font-bold text-xs tracking-widest uppercase hover:bg-art-gold-light transition-colors"
          >
            返回文章列表
          </button>
        </div>
      </div>
    </div>
  );
};
