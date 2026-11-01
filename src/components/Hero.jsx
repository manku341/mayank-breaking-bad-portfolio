import React from 'react';
import { ArrowDownRight, Terminal, Beaker, ShieldCheck, Sparkles, Activity, Compass } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-auto"
    >
      {/* Top Technical Telemetry Strip */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 border-b border-lab-border/70 pb-4 text-[11px] font-mono text-lab-muted">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-lab-toxic font-bold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lab-toxic opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lab-toxic"></span>
            </span>
            LIVE EXPERIMENT: ACTIVE
          </span>
          <span className="text-lab-border font-light">|</span>
          <span className="hidden sm:inline text-lab-sand font-medium">SYSTEM CODE: BB-NST-01</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-lab-muted">
            LOC: <span className="text-white font-semibold">NST CAMPUS // IN</span>
          </span>
          <span className="text-lab-border">|</span>
          <span className="text-lab-muted">
            SPEC: <span className="text-lab-toxic font-semibold">AI &amp; MACHINE LEARNING</span>
          </span>
        </div>
      </div>

      {/* Main Hero Container — Left-weighted on desktop so 3D flask commands the right viewport */}
      <div className="my-auto py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: High-contrast narrative & typography */}
        <div className="lg:col-span-8 flex flex-col items-start relative z-10">
          {/* Ambient Contrast Backdrop for Crystal-Clear Text Legibility */}
          <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-r from-lab-black/95 via-lab-black/80 to-transparent -z-10 rounded-2xl pointer-events-none backdrop-blur-[2px]" />

          {/* Academic & Brand Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-lab-charcoal/95 border border-lab-border text-xs font-mono text-lab-sand mb-6 backdrop-blur-md shadow-glow-sm">
            <span className="w-2 h-2 rounded-full bg-lab-green shadow-[0_0_8px_#80CC28]" />
            <span className="tracking-widest uppercase font-semibold">Newton School of Technology &bull; B.Tech CSE</span>
          </div>

          {/* Main Cinematic Headline */}
          <div className="space-y-1.5 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono tracking-[0.35em] text-lab-toxic uppercase font-bold">
                // EXPERIMENT COMMENCING &bull; MAYANK®
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-cinematic uppercase tracking-tight text-white leading-[0.92] drop-shadow-lg">
              MAYANK IS <span className="text-lab-green glow-text inline-block">IN THE LAB.</span>
            </h1>
          </div>

          {/* Supporting Headline & Authentic Purpose */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 font-sans font-light max-w-2xl leading-relaxed mb-8 drop-shadow-sm">
            <strong className="text-white font-medium">Engineering ideas.</strong> Experimenting with technology.{' '}
            <span className="text-lab-sand font-medium">Building what&apos;s next.</span> Exploring the boundary between{' '}
            <span className="text-lab-toxic font-normal underline decoration-lab-toxic/50 underline-offset-4">Creative 3D Web Experiences</span>,{' '}
            <span className="text-lab-green font-normal underline decoration-lab-green/50 underline-offset-4">Artificial Intelligence</span>, and production systems.
          </p>

          {/* Core Pillars (Authentic & Personal Credentials) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-2xl mb-10 text-xs font-mono">
            {/* Pillar 1: Creative Web */}
            <div className="p-3.5 bg-lab-card/95 border border-lab-border hover:border-lab-green/60 rounded-sm backdrop-blur-md transition-all hover:shadow-glow-sm">
              <div className="flex items-center gap-2 text-lab-green mb-1.5 font-bold">
                <Beaker size={15} />
                <span>CREATIVE 3D WEB</span>
              </div>
              <p className="text-gray-300 text-[11px] leading-relaxed">
                Three.js, WebGL procedural shaders &amp; Awwwards-grade digital interfaces.
              </p>
            </div>

            {/* Pillar 2: AI & ML */}
            <div className="p-3.5 bg-lab-card/95 border border-lab-border hover:border-lab-toxic/60 rounded-sm backdrop-blur-md transition-all hover:shadow-glow-sm">
              <div className="flex items-center gap-2 text-lab-toxic mb-1.5 font-bold">
                <Sparkles size={15} />
                <span>AI / ML PROTOCOLS</span>
              </div>
              <p className="text-gray-300 text-[11px] leading-relaxed">
                Neural architectures, PyTorch pipelines &amp; real-world intelligent software.
              </p>
            </div>

            {/* Pillar 3: SSB Candidate */}
            <div className="p-3.5 bg-lab-card/95 border border-lab-border hover:border-lab-sand/60 rounded-sm backdrop-blur-md transition-all hover:shadow-glow-sm">
              <div className="flex items-center gap-2 text-lab-sand mb-1.5 font-bold">
                <ShieldCheck size={15} />
                <span>SSB CANDIDATE</span>
              </div>
              <p className="text-gray-300 text-[11px] leading-relaxed">
                Conference Out veteran: military composure, mental stamina &amp; high-pressure discipline.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-lab-green hover:bg-lab-toxic text-lab-black font-cinematic text-xl tracking-wider uppercase transition-all duration-300 shadow-glow-green hover:shadow-[0_0_35px_rgba(181,232,83,0.55)] flex items-center gap-3 cursor-pointer group active:scale-95"
            >
              <span>ENTER THE LAB</span>
              <ArrowDownRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </button>

            <button
              onClick={scrollToProjects}
              className="px-7 py-4 bg-lab-charcoal/90 hover:bg-lab-card border border-lab-border hover:border-lab-toxic text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2.5 cursor-pointer backdrop-blur-sm active:scale-95"
            >
              <Terminal size={16} className="text-lab-green" />
              <span>EXPLORE MY EXPERIMENTS</span>
            </button>
          </div>
        </div>

        {/* Right Column: Decorative Telemetry Widget (Frames the 3D Flask on Desktop) */}
        <div className="hidden lg:flex lg:col-span-4 flex-col items-end justify-center pointer-events-none">
          <div className="p-5 bg-lab-card/80 border border-lab-border/70 rounded-sm backdrop-blur-md space-y-3 max-w-xs text-xs font-mono shadow-2xl">
            <div className="flex items-center justify-between border-b border-lab-border/50 pb-2">
              <div className="flex items-center gap-2 text-lab-toxic font-bold">
                <Activity size={14} className="animate-pulse" />
                <span>SPECTROMETER</span>
              </div>
              <span className="text-lab-sand text-[10px]">REAL-TIME</span>
            </div>

            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-lab-muted">VESSEL:</span>
                <span className="text-white font-medium">BOROSILICATE 1000ml</span>
              </div>
              <div className="flex justify-between">
                <span className="text-lab-muted">REAGENT:</span>
                <span className="text-lab-green font-medium">C₁₀H₁₅N (TOXIC LIME)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-lab-muted">PURITY:</span>
                <span className="text-lab-toxic font-bold">99.1% HOMOGENEOUS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-lab-muted">FUMES:</span>
                <span className="text-lab-sand font-medium">VOLUMETRIC ACTIVE</span>
              </div>
            </div>

            <div className="pt-2 border-t border-lab-border/40 text-[9px] text-lab-muted/80 uppercase tracking-widest flex items-center justify-between">
              <span>ORBITAL PARALLAX</span>
              <span className="text-lab-green">[ENGAGED]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Chemical Status Panel */}
      <div className="pt-8 border-t border-lab-border/40 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-lab-muted">
        <div className="flex items-center gap-6">
          <div>
            <span className="text-[10px] block text-lab-muted/70">REACTION VESSEL</span>
            <span className="text-white font-semibold">BOROSILICATE FLASK 1000ml</span>
          </div>
          <div>
            <span className="text-[10px] block text-lab-muted/70">COMPOUND MATRIX</span>
            <span className="text-lab-green font-semibold">C₁₀H₁₅N &bull; SYNTHETIC 3D</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-[10px] block text-lab-muted/70">BATCH STATUS</span>
            <span className="text-lab-toxic font-bold">99.1% HOMOGENEOUS</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="flex items-center gap-2 text-lab-sand hover:text-white transition-colors cursor-pointer text-xs group"
        >
          <span>SCROLL TO PROCEED</span>
          <span className="animate-bounce group-hover:text-lab-toxic">&darr;</span>
        </button>
      </div>
    </section>
  );
}
