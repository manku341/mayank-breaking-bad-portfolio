import React, { useState, useEffect } from 'react';
import CinematicLoader from './components/CinematicLoader';
import CustomCursor from './components/CustomCursor';
import LabBackground3D from './components/LabBackground3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutFile from './components/AboutFile';
import ProjectsExperiments from './components/ProjectsExperiments';
import SkillsFormula from './components/SkillsFormula';
import CreativeLab from './components/CreativeLab';
import ContactTerminal from './components/ContactTerminal';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('hero');

  // Mouse coordinate normalization (-1 to 1) for 3D parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x: normX, y: normY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll Progress and Active Section Tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? currentScroll / totalHeight : 0;
      setScrollProgress(progress);

      // Edge cases: top and bottom
      if (currentScroll < 120) {
        setActiveSection('hero');
        return;
      }
      if (window.innerHeight + currentScroll >= document.documentElement.scrollHeight - 70) {
        setActiveSection('contact');
        return;
      }

      // Section detection
      const sections = ['hero', 'about', 'projects', 'skills', 'creative', 'contact'];
      for (const sId of sections) {
        const el = document.getElementById(sId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(sId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-lab-black text-lab-muted font-sans selection:bg-lab-green selection:text-lab-black">
      {/* 1. Cinematic Opening Loader Screen */}
      {!loadingComplete && (
        <CinematicLoader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* 2. Custom Chemical Crosshair Cursor */}
      <CustomCursor />

      {/* 3. Three.js Interactive 3D Background with Flask & Fog */}
      <LabBackground3D scrollProgress={scrollProgress} mousePos={mousePos} />

      {/* 4. Atmospheric Overlays: Scanlines & Vignette */}
      <div className="fixed inset-0 scanlines pointer-events-none z-20 opacity-30" />
      <div className="fixed inset-0 vignette-overlay pointer-events-none z-20" />
      <div className="fixed inset-0 grain-overlay pointer-events-none z-20 opacity-40" />

      {/* 5. Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* 6. Main Portfolio Experience Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <AboutFile />
        <ProjectsExperiments />
        <SkillsFormula />
        <CreativeLab />
        <ContactTerminal />
      </main>
    </div>
  );
}

