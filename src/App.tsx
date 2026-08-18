import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IdentitySection } from './components/IdentitySection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { ProposalsSection } from './components/ProposalsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { StaticBlog } from './components/StaticBlog';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('home');

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Hero setActivePage={setActivePage} />;
      case 'identities':
        return <IdentitySection />;
      case 'journey':
        return <JourneyTimeline />;
      case 'proposals':
        return <ProposalsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'blog':
        return <StaticBlog />;
      case 'contact':
        return <ContactSection />;
      default:
        return <Hero setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#2C2824] text-[#23201D] font-body relative selection:bg-[#FEF08A] selection:text-[#23201D] flex flex-col justify-between overflow-x-hidden">
      
      {/* Sticky Bookmark Navigation Header */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Physical Notebook Open Page Container */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 my-8 sm:my-12">
        <div className="notebook-page-container relative min-h-[80vh] p-4 sm:p-8">
          
          {/* Left Binder Rings */}
          <div className="spiral-binder hidden md:flex">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="binder-ring"></div>
            ))}
          </div>

          {/* 3D Page Turn Animated Content */}
          <div key={activePage} className="page-turn-animation">
            {renderActivePage()}
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
