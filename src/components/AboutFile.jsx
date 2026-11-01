import React, { useState } from 'react';
import { 
  FileText, 
  Cpu, 
  Compass, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  Award, 
  Clock, 
  Fingerprint, 
  ShieldAlert, 
  Terminal, 
  Sparkles,
  QrCode,
  Milestone,
  ArrowRight
} from 'lucide-react';

export default function AboutFile() {
  const [activeTab, setActiveTab] = useState('dossier');
  const [activeTimelinePhase, setActiveTimelinePhase] = useState(null);

  const tabs = [
    { id: 'dossier', label: 'CLASSIFIED PROFILE', icon: FileText, num: '01' },
    { id: 'timeline', label: 'JOURNEY TIMELINE', icon: Clock, num: '02' },
    { id: 'aiml', label: 'AI & ML PROTOCOL', icon: Cpu, num: '03' },
    { id: 'ssb', label: 'SSB RESILIENCE LOG', icon: Compass, num: '04' },
  ];

  // Authentic Education & Learning Milestones Timeline
  const journeyPhases = [
    {
      phase: 'PHASE 01',
      period: 'GENESIS & CURIOSITY',
      title: 'FOUNDATIONS OF CODE & COMPUTATION',
      tag: 'EARLY EXPLORATION',
      status: 'COMPLETED',
      description: 'First ignition of interest in computing and problem-solving. Learned fundamental computational thinking, algorithmic logic, and started experimenting with Python programming to build small scripts and utilities.',
      reagents: ['Python Fundamentals', 'Algorithmic Logic', 'Data Structures Intro', 'Linux Basics']
    },
    {
      phase: 'PHASE 02',
      period: '2024 — PRESENT',
      title: 'NEWTON SCHOOL OF TECHNOLOGY (NST)',
      tag: 'B.TECH DEGREE',
      status: 'ACTIVE IN PROGRESS',
      description: 'Admitted into the B.Tech Computer Science Engineering program at Newton School of Technology. Immersion into production-first software development, real-world team collaboration, system design, and rigorous engineering practices.',
      reagents: ['B.Tech CSE Core', 'Modern Web Architectures', 'Git & GitHub Collaboration', 'Computer Architecture']
    },
    {
      phase: 'PHASE 03',
      period: 'ACTIVE RESEARCH',
      title: 'AI & MACHINE LEARNING SPECIALIZATION',
      tag: 'ACADEMIC FOCUS',
      status: 'SPECIALIZING',
      description: 'Diving deep into the mathematical foundations and applied frameworks of Artificial Intelligence. Experimenting with PyTorch neural network layers, linear algebra, computer vision algorithms, and predictive modeling for real-world utility.',
      reagents: ['PyTorch', 'scikit-learn', 'Computer Vision (OpenCV)', 'Neural Net Architectures', 'Pandas & NumPy']
    },
    {
      phase: 'PHASE 04',
      period: 'MILESTONE ASSESSMENT',
      title: 'SERVICES SELECTION BOARD (SSB)',
      tag: 'TACTICAL GRIT',
      status: 'CONFERENCE OUT',
      description: 'Underwent the rigorous 5-day psychological, tactical, and leadership assessment of the Services Selection Board. Reached the final Conference Out milestone — a transformative crucible that forged discipline, crisis management, and emotional resilience.',
      reagents: ['Crisis Decision Making', 'Psychological Stamina', 'Group Dynamics Leadership', 'High-Pressure Composure']
    },
    {
      phase: 'PHASE 05',
      period: 'CURRENT EXPERIMENTATION',
      title: 'CREATIVE 3D WEB & EXPERIMENTAL INTERFACES',
      tag: 'LABORATORY PURSUIT',
      status: 'ACTIVE EXPLORATION',
      description: 'Exploring the fusion of creative web development, Three.js 3D graphics, procedural WebGL shaders, and AI. Driven by the philosophy that software should feel cinematic, tangible, and awe-inspiring rather than flat and generic.',
      reagents: ['Three.js', 'WebGL Shaders', 'React Ecosystem', 'Web Audio API', 'Awwwards UI/UX Principles']
    }
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="mb-14 border-b border-lab-border/70 pb-6 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2 font-mono text-xs text-lab-toxic">
            <span className="w-8 h-[1px] bg-lab-toxic" />
            <span>LABORATORY DOSSIER // SECTION 02</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-cinematic uppercase tracking-tight text-white leading-none">
            THE MIND BEHIND <span className="text-lab-green glow-text">THE EXPERIMENT.</span>
          </h2>
          <p className="text-sm font-mono text-lab-sand mt-3 max-w-2xl">
            [RESTRICTED ACCESS &bull; CLASSIFIED PERSONNEL FILE] SUBJECT: MAYANK SHARMA &bull; NST // AI &amp; ML LAB
          </p>
        </div>

        {/* Security Stamp Badge */}
        <div className="hidden sm:flex items-center gap-3 bg-lab-charcoal/80 border border-lab-border px-4 py-2 rounded-sm text-xs font-mono">
          <Fingerprint size={18} className="text-lab-toxic animate-pulse" />
          <div>
            <span className="text-[10px] block text-lab-muted">CLEARANCE PROTOCOL</span>
            <span className="text-white font-bold">LEVEL 4 &bull; AUTHENTICATED</span>
          </div>
        </div>
      </div>

      {/* Main Laboratory Binder Dossier Card */}
      <div className="bg-lab-card border border-lab-border rounded-sm shadow-2xl overflow-hidden relative">
        {/* Top Warning Banner / File Tab */}
        <div className="bg-gradient-to-r from-lab-charcoal via-lab-border/70 to-lab-charcoal px-6 py-3 flex flex-wrap items-center justify-between text-[11px] font-mono border-b border-lab-border">
          <div className="flex items-center gap-3 text-lab-amber font-bold">
            <span className="px-2 py-0.5 bg-lab-amber/20 border border-lab-amber/50 rounded text-[10px] tracking-wider uppercase">
              CLASSIFIED DOSSIER
            </span>
            <span className="text-white">DOSSIER NO: EXP-MS-001</span>
          </div>
          
          <div className="flex items-center gap-4 text-lab-muted text-[10px]">
            <span>SECURITY HASH: 99.1-HOMOGENEOUS</span>
            <span className="text-lab-green font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-lab-green animate-ping" />
              STATUS: ACTIVE IN THE LAB
            </span>
          </div>
        </div>

        {/* Tab Selection Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-lab-border bg-lab-black/70">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-4 text-xs font-mono flex items-center justify-center gap-2.5 transition-all cursor-pointer border-r border-lab-border last:border-r-0 ${
                  isActive
                    ? 'bg-lab-card text-lab-toxic border-b-2 border-b-lab-toxic font-bold shadow-inner'
                    : 'text-lab-muted hover:text-white hover:bg-lab-charcoal/60'
                }`}
              >
                <span className="text-[10px] text-lab-green/70">{tab.num}.</span>
                <Icon size={15} className={isActive ? 'text-lab-toxic' : 'text-lab-muted'} />
                <span className="truncate tracking-wider">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Body Content */}
        <div className="p-6 sm:p-10 lg:p-12">
          {/* TAB 1: CLASSIFIED PROFILE & IDENTITY PANEL */}
          {activeTab === 'dossier' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Identity Spec Panel (Classified Badge Card) */}
              <div className="lg:col-span-5 bg-lab-charcoal/80 border border-lab-border p-6 sm:p-7 rounded-sm space-y-6 relative overflow-hidden">
                {/* Visual Identity Watermark */}
                <div className="absolute -right-6 -bottom-6 text-lab-green/5 select-none pointer-events-none font-cinematic text-9xl">
                  LAB
                </div>

                {/* Identity Header */}
                <div className="flex items-center justify-between border-b border-lab-border/70 pb-4">
                  <div className="flex items-center gap-3">
                    {/* Periodic Monogram */}
                    <div className="flex items-center gap-1">
                      <div className="w-10 h-11 bg-lab-black border border-lab-green rounded-sm flex flex-col justify-between p-1 shadow-glow-sm">
                        <span className="text-[7px] font-mono text-lab-muted leading-none">24</span>
                        <span className="text-base font-cinematic text-lab-green leading-none font-bold">Ma</span>
                        <span className="text-[5px] font-mono text-lab-sand uppercase leading-none">Mayank</span>
                      </div>
                      <div className="w-10 h-11 bg-lab-black border border-lab-toxic rounded-sm flex flex-col justify-between p-1 shadow-glow-sm">
                        <span className="text-[7px] font-mono text-lab-muted leading-none">52</span>
                        <span className="text-base font-cinematic text-lab-toxic leading-none font-bold">Sh</span>
                        <span className="text-[5px] font-mono text-lab-sand uppercase leading-none">Sharma</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-cinematic uppercase tracking-wider text-white">MAYANK SHARMA</h3>
                      <p className="text-[10px] font-mono text-lab-sand">BRAND CALLSIGN: MAYANK®</p>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 text-[9px] font-mono bg-lab-green/20 text-lab-green border border-lab-green/40 rounded uppercase font-bold tracking-wider">
                    AUTHENTIC
                  </span>
                </div>

                {/* Technical Biometric Spec Grid */}
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-lab-border/40">
                    <span className="text-lab-muted">ACADEMIC PROGRAM:</span>
                    <span className="text-white font-medium text-right">B.Tech Computer Science</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-lab-border/40">
                    <span className="text-lab-muted">INSTITUTION:</span>
                    <span className="text-lab-toxic font-semibold text-right">Newton School of Technology</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-lab-border/40">
                    <span className="text-lab-muted">SPECIALIZATION:</span>
                    <span className="text-lab-green font-medium text-right">Artificial Intelligence &amp; ML</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-lab-border/40">
                    <span className="text-lab-muted">TECHNICAL INTERESTS:</span>
                    <span className="text-white text-right">3D Web, AI &amp; Real Systems</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-lab-border/40">
                    <span className="text-lab-muted">SSB RECORD:</span>
                    <span className="text-lab-sand font-medium text-right">Conference Out (Resilience Verified)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-lab-border/40">
                    <span className="text-lab-muted">LOCATION:</span>
                    <span className="text-white text-right">NST Campus, India</span>
                  </div>
                </div>

                {/* Fingerprint + Barcode Graphic Strip */}
                <div className="pt-2 flex items-center justify-between border-t border-lab-border/50 text-lab-muted">
                  <div className="flex items-center gap-2">
                    <Fingerprint size={24} className="text-lab-green/70" />
                    <div className="text-[9px] font-mono leading-tight">
                      <span>BIOMETRIC HASH</span>
                      <span className="block text-white font-mono tracking-widest">NST-2024-MS</span>
                    </div>
                  </div>

                  {/* Aesthetic barcode */}
                  <div className="text-right">
                    <div className="font-mono text-[9px] text-lab-sand tracking-widest font-bold">|||| | ||| ||||| ||</div>
                    <span className="text-[8px] text-lab-muted font-mono">SPECIMEN ID-001</span>
                  </div>
                </div>

                {/* Classified Stamps */}
                <div className="pt-2 flex flex-wrap gap-2 justify-end">
                  <div className="border border-lab-green/70 text-lab-green uppercase font-mono text-[9px] font-bold px-2.5 py-0.5 rounded rotate-[-2deg] tracking-wider bg-lab-green/10">
                    PURITY: 99.1%
                  </div>
                  <div className="border border-lab-toxic/70 text-lab-toxic uppercase font-mono text-[9px] font-bold px-2.5 py-0.5 rounded rotate-[1deg] tracking-wider bg-lab-toxic/10">
                    SSB VETERAN
                  </div>
                </div>
              </div>

              {/* Right Narrative Body: Professional Introduction */}
              <div className="lg:col-span-7 space-y-6 text-sm font-sans leading-relaxed text-gray-300">
                <div className="flex items-center gap-2 text-xs font-mono text-lab-sand">
                  <Terminal size={14} className="text-lab-green" />
                  <span>EXECUTIVE RESEARCHER STATEMENT</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-cinematic text-white tracking-wide uppercase leading-tight">
                  ENGINEERING AT THE INTERSECTION OF CREATIVITY, COMPUTATION &amp; ARTIFICIAL INTELLIGENCE.
                </h3>

                <p className="text-base text-gray-200 leading-relaxed font-light">
                  I am a Computer Science Engineering student at <strong className="text-white font-semibold">Newton School of Technology</strong>, specializing in <span className="text-lab-toxic font-medium">Artificial Intelligence and Machine Learning</span>.
                </p>

                <p>
                  My laboratory work focuses on breaking away from predictable, templated web experiences. By synthesizing <span className="text-lab-green font-medium">creative 3D web development (Three.js &amp; WebGL)</span> with robust machine learning backends, I explore how software can engage users as an interactive, cinematic medium while solving genuine engineering challenges.
                </p>

                <p>
                  My foundational mindset was tested and reinforced through the comprehensive 5-day assessment of the <strong className="text-lab-sand font-medium">Services Selection Board (SSB)</strong>. Emerging as a Conference Out candidate solidified my approach to software engineering: tactical composure under pressure, uncompromising intellectual honesty, and the mental stamina to continuously iterate and refine until the code runs with total precision.
                </p>

                {/* Quick Capability Highlights */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 bg-lab-charcoal/70 border border-lab-border rounded-sm">
                    <span className="text-lab-toxic block font-bold mb-1">// PHILOSOPHY</span>
                    <p className="text-lab-muted text-[11px] leading-relaxed">
                      Build tangible, real-world systems. Theory is only as valuable as the production software it powers.
                    </p>
                  </div>

                  <div className="p-3.5 bg-lab-charcoal/70 border border-lab-border rounded-sm">
                    <span className="text-lab-green block font-bold mb-1">// SPECIALIZATION</span>
                    <p className="text-lab-muted text-[11px] leading-relaxed">
                      AI/ML architectures, PyTorch pipelines, procedural 3D WebGL environments &amp; responsive UI/UX.
                    </p>
                  </div>
                </div>

                {/* Hashtags Strip */}
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-3 py-1 bg-lab-charcoal border border-lab-border text-lab-sand rounded-sm">#NewtonSchoolOfTech</span>
                  <span className="px-3 py-1 bg-lab-charcoal border border-lab-border text-lab-green rounded-sm">#ThreeJS</span>
                  <span className="px-3 py-1 bg-lab-charcoal border border-lab-border text-lab-toxic rounded-sm">#AIMLSpecialist</span>
                  <span className="px-3 py-1 bg-lab-charcoal border border-lab-border text-lab-muted rounded-sm">#ConferenceOut</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: JOURNEY & LEARNING TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="space-y-8">
              {/* Timeline Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-lab-border/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-lab-green/10 border border-lab-green rounded text-lab-green">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-cinematic text-white uppercase tracking-wider">
                      EDUCATION &amp; EXPERIMENTAL TIMELINE
                    </h3>
                    <p className="text-xs font-mono text-lab-sand">
                      CHRONOLOGICAL LOG OF TECHNICAL EVOLUTION &bull; AUTHENTIC STAGES
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-lab-muted">
                  <span>TOTAL LOGGED PHASES: </span>
                  <span className="text-lab-toxic font-bold">05 MILESTONES</span>
                </div>
              </div>

              {/* Vertical Timeline Tree */}
              <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-lab-green before:via-lab-toxic before:to-lab-border">
                {journeyPhases.map((phase, idx) => {
                  const isHovered = activeTimelinePhase === idx;
                  return (
                    <div
                      key={phase.phase}
                      onMouseEnter={() => setActiveTimelinePhase(idx)}
                      onMouseLeave={() => setActiveTimelinePhase(null)}
                      className={`relative p-5 sm:p-6 bg-lab-charcoal/70 border transition-all duration-300 rounded-sm ${
                        isHovered
                          ? 'border-lab-toxic bg-lab-charcoal shadow-glow-sm translate-x-1'
                          : 'border-lab-border hover:border-lab-green/60'
                      }`}
                    >
                      {/* Timeline Node Bead */}
                      <div
                        className={`absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                          isHovered
                            ? 'bg-lab-toxic border-white shadow-[0_0_12px_#B5E853] scale-125'
                            : 'bg-lab-black border-lab-green'
                        }`}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-lab-green" />
                      </div>

                      {/* Phase Badge & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs font-mono">
                        <div className="flex items-center gap-2.5">
                          <span className="px-2 py-0.5 bg-lab-black border border-lab-border text-lab-toxic font-bold rounded text-[10px]">
                            {phase.phase}
                          </span>
                          <span className="text-white font-medium">{phase.period}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-lab-sand text-[10px] uppercase font-bold tracking-wider">
                            [{phase.tag}]
                          </span>
                          <span className="px-2 py-0.5 rounded text-[9px] bg-lab-green/20 text-lab-green border border-lab-green/30 font-bold">
                            {phase.status}
                          </span>
                        </div>
                      </div>

                      {/* Phase Title */}
                      <h4 className="text-xl sm:text-2xl font-cinematic uppercase tracking-wide text-white mb-2">
                        {phase.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm font-sans text-gray-300 leading-relaxed mb-4">
                        {phase.description}
                      </p>

                      {/* Technical Reagents Studied */}
                      <div className="pt-2 border-t border-lab-border/40 flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono text-lab-muted uppercase font-bold">
                          REAGENTS / KEY LEARNINGS:
                        </span>
                        {phase.reagents.map((reagent) => (
                          <span
                            key={reagent}
                            className="text-[11px] font-mono px-2 py-0.5 bg-lab-black border border-lab-border text-lab-toxic rounded-sm"
                          >
                            +{reagent}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: AI & MACHINE LEARNING PROTOCOL */}
          {activeTab === 'aiml' && (
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-lab-border/60 pb-4">
                <div className="p-2.5 bg-lab-toxic/10 border border-lab-toxic rounded text-lab-toxic">
                  <Cpu size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-cinematic text-white uppercase tracking-wider">
                    ARTIFICIAL INTELLIGENCE &amp; MACHINE LEARNING CURRICULUM
                  </h3>
                  <p className="text-xs font-mono text-lab-toxic">
                    NEWTON SCHOOL OF TECHNOLOGY &bull; SPECIALIZED ENGINEERING DOMAIN
                  </p>
                </div>
              </div>

              {/* Domain Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
                <div className="p-5 bg-lab-charcoal/70 border border-lab-border hover:border-lab-green rounded-sm space-y-3 transition-colors">
                  <span className="text-lab-green text-sm font-bold block">// 01. MATHEMATICAL MODELING</span>
                  <p className="text-gray-300 leading-relaxed">
                    Mastering linear algebra, multivariate calculus, probability distributions, loss function surfaces, and convex optimization driving neural convergence.
                  </p>
                  <div className="pt-2 text-[10px] text-lab-sand">
                    TOOLS: Python, NumPy, SciPy, Jupyter
                  </div>
                </div>

                <div className="p-5 bg-lab-charcoal/70 border border-lab-border hover:border-lab-toxic rounded-sm space-y-3 transition-colors">
                  <span className="text-lab-toxic text-sm font-bold block">// 02. DEEP LEARNING &amp; VISION</span>
                  <p className="text-gray-300 leading-relaxed">
                    Convolutional networks (CNNs), feature map extraction, spatial hand/face landmark analysis with OpenCV, and basic transformer mechanisms.
                  </p>
                  <div className="pt-2 text-[10px] text-lab-sand">
                    TOOLS: PyTorch, OpenCV, MediaPipe
                  </div>
                </div>

                <div className="p-5 bg-lab-charcoal/70 border border-lab-border hover:border-lab-sand rounded-sm space-y-3 transition-colors">
                  <span className="text-lab-sand text-sm font-bold block">// 03. WEBGL + AI SYNTHESIS</span>
                  <p className="text-gray-300 leading-relaxed">
                    Bridging Python ML pipelines with real-time 3D interactive WebGL browser frontends to visualize latent topologies and deep representations interactively.
                  </p>
                  <div className="pt-2 text-[10px] text-lab-sand">
                    TOOLS: Three.js, REST APIs, WebSockets
                  </div>
                </div>
              </div>

              {/* Research Methodology Quote Box */}
              <div className="p-5 bg-lab-black border border-lab-border rounded-sm">
                <div className="text-xs font-mono text-lab-green mb-1.5 flex items-center gap-2">
                  <Sparkles size={14} />
                  <span>CORE ENGINEERING APPROACH @ NST</span>
                </div>
                <p className="text-sm font-sans text-gray-300 leading-relaxed">
                  &ldquo;At Newton School of Technology, we treat machine learning not as a collection of black-box libraries, but as an engineering discipline rooted in mathematics, data integrity, and production reliability.&rdquo;
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: SSB RESILIENCE LOG */}
          {activeTab === 'ssb' && (
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-lab-border/60 pb-4">
                <div className="p-2.5 bg-lab-sand/10 border border-lab-sand rounded text-lab-sand">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-cinematic text-white uppercase tracking-wider">
                    THE SSB JOURNEY &bull; CONFERENCE OUT EXPERIENCE
                  </h3>
                  <p className="text-xs font-mono text-lab-sand">
                    SERVICES SELECTION BOARD &bull; 5-DAY COMPREHENSIVE CRUCIBLE
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 bg-lab-charcoal/70 border border-lab-border rounded-sm space-y-5 text-sm text-gray-300 leading-relaxed">
                <p>
                  The Services Selection Board (SSB) evaluation is one of the most comprehensive leadership and personality assessments in the world. Over 5 demanding days, candidates are evaluated across psychological tests, tactical Group Testing Officer (GTO) obstacle tasks, and extensive personal interviews.
                </p>

                <p>
                  Completing the entire battery of tests and reaching the final Conference as a <strong className="text-lab-sand font-mono font-bold">&ldquo;Conference Out&rdquo;</strong> candidate is a permanent badge of resilience and personal growth. It instilled virtues that directly influence my engineering discipline today:
                </p>

                {/* Tactical Lessons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono">
                  <div className="p-4 bg-lab-black border border-lab-border rounded-sm space-y-2">
                    <span className="text-lab-toxic font-bold block text-sm">&gt; PSYCHOLOGICAL GRIT</span>
                    <p className="text-lab-muted leading-relaxed">
                      Facing prolonged scrutiny with composure; separating self-worth from instant validation; analyzing feedback without ego.
                    </p>
                  </div>

                  <div className="p-4 bg-lab-black border border-lab-border rounded-sm space-y-2">
                    <span className="text-lab-green font-bold block text-sm">&gt; HIGH-PRESSURE CLARITY</span>
                    <p className="text-lab-muted leading-relaxed">
                      Maintaining clear decision-making when timelines are short, parameters are ambiguous, and team dynamics are complex.
                    </p>
                  </div>

                  <div className="p-4 bg-lab-black border border-lab-border rounded-sm space-y-2">
                    <span className="text-lab-sand font-bold block text-sm">&gt; INTERNAL STANDARDS</span>
                    <p className="text-lab-muted leading-relaxed">
                      A military-grade code of ethics: never cutting corners, owning mistakes immediately, and building systems that endure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Technical Metadata Strip */}
        <div className="bg-lab-charcoal/50 border-t border-lab-border px-6 py-3 flex flex-wrap items-center justify-between text-[10px] font-mono text-lab-muted">
          <span>CLASSIFICATION: AUTHENTIC BIOGRAPHICAL FILE // NO INVENTED ACHIEVEMENTS</span>
          <span className="text-lab-sand">MAYANK® &bull; NEWTON SCHOOL OF TECHNOLOGY &bull; {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}
