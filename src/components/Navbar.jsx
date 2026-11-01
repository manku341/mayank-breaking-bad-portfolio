import React, { useState, useEffect } from 'react';
import { labAudio } from './AudioController';
import { Volume2, VolumeX, Menu, X, ShieldAlert } from 'lucide-react';

export default function Navbar({ activeSection = 'hero' }) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const playing = labAudio.toggle();
    setIsAudioPlaying(playing);
  };

  const navLinks = [
    { id: 'hero', label: 'THE LAB', num: '01' },
    { id: 'about', label: 'DOSSIER', num: '02' },
    { id: 'projects', label: 'EXPERIMENTS', num: '03' },
    { id: 'skills', label: 'THE FORMULA', num: '04' },
    { id: 'creative', label: 'CREATIVE LAB', num: '05' },
    { id: 'contact', label: 'TRANSMIT', num: '06' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-lab-black/90 backdrop-blur-md border-b border-lab-border py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Periodic Brand Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 group cursor-pointer text-left"
        >
          <div className="flex items-center gap-1">
            {/* [Ma] Element */}
            <div className="w-8 h-9 bg-lab-charcoal border border-lab-green group-hover:border-lab-toxic rounded-sm flex flex-col justify-between p-1 transition-all shadow-glow-sm">
              <span className="text-[7px] font-mono text-lab-muted leading-none">24</span>
              <span className="text-sm font-cinematic text-lab-green group-hover:text-lab-toxic leading-none font-bold">Ma</span>
              <span className="text-[5px] font-mono text-lab-sand uppercase leading-none">Mayank</span>
            </div>
            {/* [Sh] Element */}
            <div className="w-8 h-9 bg-lab-charcoal border border-lab-toxic group-hover:border-lab-sand rounded-sm flex flex-col justify-between p-1 transition-all shadow-glow-sm">
              <span className="text-[7px] font-mono text-lab-muted leading-none">52</span>
              <span className="text-sm font-cinematic text-lab-toxic group-hover:text-lab-sand leading-none font-bold">Sh</span>
              <span className="text-[5px] font-mono text-lab-sand uppercase leading-none">Sharma</span>
            </div>
          </div>

          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-mono font-bold tracking-widest text-white group-hover:text-lab-green transition-colors">
              MAYANK<span className="text-lab-toxic">®</span>
            </span>
            <span className="text-[9px] font-mono tracking-wider text-lab-muted">
              NST // AI &amp; ML LAB
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-xs font-mono tracking-widest uppercase transition-all duration-200 flex items-center gap-1.5 py-1 px-2 rounded-sm cursor-pointer ${
                  isActive
                    ? 'text-lab-toxic border-b-2 border-lab-toxic font-bold'
                    : 'text-lab-muted hover:text-white hover:border-b-2 hover:border-lab-green/50'
                }`}
              >
                <span className="text-[10px] text-lab-green/70">{link.num}.</span>
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Action Bar: Purity Badge + Audio Toggle */}
        <div className="flex items-center gap-3">
          {/* Purity Indicator */}
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded bg-lab-charcoal/80 border border-lab-border text-[10px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-lab-green animate-pulse" />
            <span className="text-lab-muted">PURITY:</span>
            <span className="text-lab-toxic font-bold">99.1%</span>
          </div>

          {/* Synthetic Lab Soundscape Toggle */}
          <button
            onClick={toggleAudio}
            className={`flex items-center gap-2 px-3 py-1.5 rounded border text-xs font-mono transition-all duration-300 cursor-pointer ${
              isAudioPlaying
                ? 'bg-lab-green/10 border-lab-green text-lab-toxic shadow-glow-sm'
                : 'bg-lab-charcoal border-lab-border text-lab-muted hover:text-white hover:border-lab-muted'
            }`}
            title="Toggle Atmospheric Chemical Soundscape"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 size={14} className="text-lab-toxic animate-bounce" />
                <span className="hidden sm:inline">LAB SOUND [ACTIVE]</span>
                {/* Audio Equalizer Bars */}
                <div className="flex items-end gap-0.5 h-3 ml-1">
                  <div className="w-0.5 bg-lab-toxic h-full animate-[pulse_0.4s_infinite]" />
                  <div className="w-0.5 bg-lab-green h-2 animate-[pulse_0.6s_infinite]" />
                  <div className="w-0.5 bg-lab-toxic h-3 animate-[pulse_0.5s_infinite]" />
                </div>
              </>
            ) : (
              <>
                <VolumeX size={14} />
                <span className="hidden sm:inline">LAB SOUND [OFF]</span>
              </>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded bg-lab-charcoal border border-lab-border text-lab-muted hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-lab-black/95 border-b border-lab-border px-4 py-6 mt-2 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-3 border-b border-lab-border/40 text-xs font-mono text-lab-toxic">
              <ShieldAlert size={14} />
              <span>CLASSIFIED NAVIGATION LOG</span>
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded text-left text-sm font-mono tracking-wider transition-colors ${
                    isActive
                      ? 'bg-lab-charcoal text-lab-toxic font-bold border-l-2 border-lab-toxic'
                      : 'text-lab-muted hover:text-white hover:bg-lab-charcoal/50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-lab-toxic animate-pulse" />}
                    <span>{link.label}</span>
                  </span>
                  <span className="text-xs text-lab-green/70">{link.num}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

