import React, { useState, useEffect } from 'react';

export default function CinematicLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING LABORATORY ENVIRONMENT...');
  const [isReady, setIsReady] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const steps = [
      { at: 15, text: 'CALIBRATING REACTION VESSEL...' },
      { at: 38, text: 'PREPARING CHEMICAL EMULSION (#80CC28)...' },
      { at: 62, text: 'STABILIZING VOLUMETRIC GREEN SMOKE...' },
      { at: 85, text: 'LOADING ARTIFICIAL INTELLIGENCE MODELS...' },
      { at: 99, text: 'PURITY ATTAINED: 99.1% — ALL SYSTEMS ACTIVE.' },
    ];

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 99) {
          clearInterval(timer);
          setIsReady(true);
          return 99;
        }
        const next = prev + Math.floor(Math.random() * 6) + 3;
        const currentCap = Math.min(next, 99);
        const match = steps.find(s => currentCap >= s.at);
        if (match) setStatusText(match.text);
        return currentCap;
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  const handleEnter = () => {
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-lab-black text-lab-muted transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Subtle Lab Grid & Vignette */}
      <div className="absolute inset-0 lab-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-lab-black/60 to-lab-black pointer-events-none" />

      {/* Main Chemical Container */}
      <div className="relative z-10 max-w-lg w-full px-6 flex flex-col items-center text-center">
        {/* Periodic Table Brand Tiles */}
        <div className="flex items-center gap-3 mb-8">
          {/* [Ma] Element */}
          <div className="w-20 h-24 bg-lab-charcoal border-2 border-lab-green rounded-sm flex flex-col justify-between p-2 shadow-glow-sm relative">
            <span className="text-[10px] font-mono text-lab-muted text-left font-bold">24</span>
            <span className="text-3xl font-cinematic text-lab-green tracking-wider font-bold">Ma</span>
            <div className="flex justify-between items-end">
              <span className="text-[8px] font-mono uppercase text-lab-sand">Mayank</span>
              <span className="text-[8px] font-mono text-lab-muted">54.93</span>
            </div>
          </div>

          {/* [Sh] Element */}
          <div className="w-20 h-24 bg-lab-charcoal border-2 border-lab-toxic rounded-sm flex flex-col justify-between p-2 shadow-glow-sm relative">
            <span className="text-[10px] font-mono text-lab-muted text-left font-bold">52</span>
            <span className="text-3xl font-cinematic text-lab-toxic tracking-wider font-bold">Sh</span>
            <div className="flex justify-between items-end">
              <span className="text-[8px] font-mono uppercase text-lab-sand">Sharma</span>
              <span className="text-[8px] font-mono text-lab-muted">127.6</span>
            </div>
          </div>
        </div>

        {/* Brand Tagline */}
        <h2 className="text-xs uppercase tracking-[0.35em] text-lab-sand font-mono mb-2">
          MAYANK® &bull; CLASSIFIED 3D LABORATORY
        </h2>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-cinematic tracking-wider text-white mb-6">
          PREPARING THE COMPOUND
        </h1>

        {/* Purity Progress Bar */}
        <div className="w-full bg-lab-charcoal/80 border border-lab-border rounded-full h-3 p-0.5 mb-3 relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-lab-green via-lab-toxic to-lab-sand rounded-full transition-all duration-150 relative shadow-glow-sm"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Purity Percentage & Status */}
        <div className="w-full flex justify-between items-center text-xs font-mono mb-6">
          <span className="text-lab-green animate-pulse">
            &gt; {statusText}
          </span>
          <span className="text-lab-toxic font-bold tracking-widest">
            {progress}.1% PURITY
          </span>
        </div>

        {/* Enter The Lab Action */}
        <div className="h-14 flex items-center justify-center">
          {isReady ? (
            <button
              onClick={handleEnter}
              className="px-8 py-3 bg-lab-green hover:bg-lab-toxic text-lab-black font-cinematic text-xl tracking-widest uppercase transition-all duration-300 shadow-glow-green transform hover:scale-105 active:scale-95 flex items-center gap-3 cursor-pointer"
            >
              <span>ENTER THE LAB</span>
              <span className="text-xs font-mono">&rarr;</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 text-xs font-mono text-lab-muted">
              <span className="inline-block w-2 h-2 rounded-full bg-lab-green animate-ping" />
              <span>SYNTHESIZING MOLECULAR MATRIX...</span>
            </div>
          )}
        </div>

        {/* Caution Banner */}
        <div className="mt-8 pt-4 border-t border-lab-border/40 text-[10px] font-mono text-lab-muted/70 tracking-widest flex items-center gap-2">
          <span className="text-lab-amber font-bold">[CAUTION]</span>
          <span>HAZARDOUS CREATIVITY &bull; EXPERIMENTAL 3D ENGINE</span>
        </div>
      </div>
    </div>
  );
}

