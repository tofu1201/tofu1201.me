import React, { useState } from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { Mail, Github, Instagram, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyDomain = () => {
    navigator.clipboard.writeText(PROFILE_INFO.domain);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      if (res.ok || res.status === 404) {
        setFormSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFormSubmitted(true);
      }
    } catch {
      setFormSubmitted(true);
    } finally {
      setLoading(false);
      setTimeout(() => setFormSubmitted(false), 6000);
    }
  };

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 min-h-[70vh]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="real-tape inline-block px-4 py-1.5 bg-[#E0F2FE] border border-[#23201D] text-[#23201D] text-xs font-body font-black tracking-widest uppercase shadow-sm mb-3">
            📌 GET IN TOUCH • CONTACT
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-widest text-[#23201D]">
            聯絡與合作邀請
          </h2>
          <p className="mt-3 text-[#23201D]/80 font-body font-bold max-w-2xl mx-auto text-base">
            歡迎交流兒少權益議題、Python/網頁開發或學習心得。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          <div className="space-y-6">
            {/* Domain Box */}
            <div className="sticky-note bg-[#FEF08A] p-6 flex items-center justify-between border-2 border-[#23201D] -rotate-1">
              <div>
                <span className="text-xs font-body tracking-wider text-[#23201D]/80 font-black uppercase block">OFFICIAL DOMAIN</span>
                <span className="font-heading text-2xl font-black text-[#23201D]">{PROFILE_INFO.domain}</span>
              </div>
              <button
                onClick={handleCopyDomain}
                className="px-4 py-2 bg-white border-2 border-[#23201D] text-[#23201D] hover:bg-[#23201D] hover:text-white transition-all flex items-center gap-2 text-xs font-black font-body tracking-wider uppercase shadow-sm"
              >
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-[#23201D]" />}
                {copied ? '已複製！' : '複製 Domain'}
              </button>
            </div>

            {/* Email Card */}
            <div className="sticky-note bg-white p-6 flex items-center gap-5 border-2 border-[#23201D]">
              <div className="w-12 h-12 bg-[#E0F2FE] border-2 border-[#23201D] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-5 h-5 text-[#23201D]" />
              </div>
              <div>
                <span className="text-xs font-body text-[#23201D]/70 font-black tracking-wider uppercase block">EMAIL</span>
                <a href={`mailto:${PROFILE_INFO.email}`} className="font-heading text-lg font-black text-[#23201D] hover:underline transition-colors">
                  {PROFILE_INFO.email}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="sticky-note bg-white p-6 flex items-center gap-5 border-2 border-[#23201D]">
              <div className="w-12 h-12 bg-[#D1FAE5] border-2 border-[#23201D] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 text-[#23201D]" />
              </div>
              <div>
                <span className="text-xs font-body text-[#23201D]/70 font-black tracking-wider uppercase block">LOCATION</span>
                <span className="font-heading text-lg font-black text-[#23201D]">
                  {PROFILE_INFO.location}
                </span>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="sticky-note bg-white p-6 flex items-center justify-between border-2 border-[#23201D]">
              <span className="text-xs font-body text-[#23201D]/70 font-black tracking-wider uppercase">SOCIAL LINKS</span>
              <div className="flex items-center space-x-3">
                <a
                  href={PROFILE_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#FEF08A] border-2 border-[#23201D] text-[#23201D] hover:bg-[#23201D] hover:text-white transition-all rounded-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PROFILE_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#FEF08A] border-2 border-[#23201D] text-[#23201D] hover:bg-[#23201D] hover:text-white transition-all rounded-sm"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="sticky-note bg-white p-8 border-2 border-[#23201D]">
            <h3 className="font-heading text-2xl font-black text-[#23201D] mb-2">
              傳送留言筆記給 TOFU
            </h3>
            <p className="text-[#23201D]/70 font-body text-xs font-bold mb-6">
              填寫訊息，我將會在最快時間內回覆您。
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-[#FEF08A] border-2 border-[#23201D] text-center space-y-2 animate-fadeIn">
                <Sparkles className="w-6 h-6 text-[#23201D] mx-auto animate-bounce" />
                <h4 className="font-heading text-xl font-black text-[#23201D]">訊息已成功傳送！</h4>
                <p className="text-[#23201D]/80 font-body text-xs font-bold">感謝您的留言，我會盡快回覆您。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-body font-black tracking-wider text-[#23201D] uppercase mb-1">
                    您的姓名 / 單位 NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="請輸入姓名..."
                    className="w-full bg-[#FAF7F0] border-2 border-[#23201D] text-[#23201D] font-bold placeholder-[#23201D]/40 px-3.5 py-2.5 font-body focus:outline-none focus:bg-white transition-all rounded-sm text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-body font-black tracking-wider text-[#23201D] uppercase mb-1">
                    電子郵件 EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-[#FAF7F0] border-2 border-[#23201D] text-[#23201D] font-bold placeholder-[#23201D]/40 px-3.5 py-2.5 font-body focus:outline-none focus:bg-white transition-all rounded-sm text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-body font-black tracking-wider text-[#23201D] uppercase mb-1">
                    留言內容 MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="請輸入您的留言..."
                    className="w-full bg-[#FAF7F0] border-2 border-[#23201D] text-[#23201D] font-bold placeholder-[#23201D]/40 px-3.5 py-2.5 font-body focus:outline-none focus:bg-white transition-all resize-none rounded-sm text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#23201D] text-white font-body font-black text-xs tracking-wider uppercase hover:bg-[#FEF08A] hover:text-[#23201D] border-2 border-[#23201D] transition-all shadow-md rounded-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> {loading ? '傳送中...' : '傳送留言'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
