import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Terminal, 
  Beaker, 
  Eye, 
  X, 
  Layers, 
  Sparkles, 
  Activity, 
  ArrowUpRight,
  ShieldAlert,
  Code2,
  SlidersHorizontal
} from 'lucide-react';

export default function ProjectsExperiments() {
  const [selectedExperiment, setSelectedExperiment] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  // Authentic projects with clearly labelled placeholders for user customization
  const experiments = [
    {
      id: 'EXP-01',
      title: 'MAYANK® 3D LAB PORTFOLIO',
      subtitle: 'Cinematic Breaking Bad-Inspired 3D Portfolio Experience',
      description: 'An interactive 3D digital laboratory environment built from scratch. Features parametric borosilicate glass physics, real-time chemical fluid meniscus rendering, volumetric smoke billboard dispersion, synthetic Web Audio atmospheric soundscapes, and responsive dark aesthetics.',
      status: 'LIVE PRODUCTION',
      statusType: 'live',
      purity: '99.1%',
      category: '3D & CREATIVE',
      tags: ['Three.js', 'React', 'WebGL', 'TailwindCSS', 'Web Audio API', 'Vite'],
      github: 'https://github.com/mayanksharma',
      githubPlaceholder: false,
      demo: '#',
      demoPlaceholder: false,
      demoNote: 'Currently Active in this Viewport',
      highlights: [
        'Custom LatheGeometry borosilicate flask with physical transmission glass shaders',
        'Multi-frequency Web Audio API ambient drone and procedural chemical bubble synthesizer',
        'Responsive 3D orbital camera and mouse parallax mechanics',
        'Zero bloated dependencies — high performance 60fps rendering'
      ],
      specNote: 'Flagship personal creative web development experiment combining Three.js 3D with the cinematic Breaking Bad aesthetic.'
    },
    {
      id: 'EXP-02',
      title: 'NEURAL SYNTHESIS LAB & ML WORKFLOWS',
      subtitle: 'Deep Learning & Neural Network Explorations at NST',
      description: 'Academic laboratory exploration in Artificial Intelligence and Machine Learning developed during the B.Tech CSE coursework at Newton School of Technology. Focuses on neural network layer activation analysis, gradient descent optimization, and data pipelines.',
      status: 'ACTIVE RESEARCH',
      statusType: 'research',
      purity: '98.5%',
      category: 'AI & ML',
      tags: ['Python', 'PyTorch', 'scikit-learn', 'NumPy', 'Pandas'],
      github: '#',
      githubPlaceholder: true,
      githubPlaceholderText: '[PLACEHOLDER: Add your GitHub Repository URL]',
      demo: '#',
      demoPlaceholder: true,
      demoPlaceholderText: '[PLACEHOLDER: Add your Notebook or Demo Link]',
      demoNote: 'Prototype Notebook / Lab Environment',
      highlights: [
        'Evaluation of feedforward and convolutional neural architectures',
        'Data preprocessing, feature normalization, and loss curve monitoring',
        'Implementation of regression and classification models in PyTorch and scikit-learn',
        'Exploration of loss landscapes and hyperparameter tuning'
      ],
      specNote: 'Core laboratory experiment in AI & Machine Learning. Connect your repository URL here.'
    },
    {
      id: 'EXP-03',
      title: 'NST CAMPUS UTILITY & WORKFLOWS',
      subtitle: 'Student Schedule & Academic Resource System',
      description: 'An exploratory software engineering utility designed for the Newton School of Technology campus ecosystem. Designed to assist students in timetable management, conflict detection across academic tracks, and contextual schedule queries.',
      status: 'PROTOTYPE SPEC',
      statusType: 'prototype',
      purity: '96.8%',
      category: 'SYSTEMS',
      tags: ['Python', 'React', 'REST APIs', 'FastAPI', 'TailwindCSS'],
      github: '#',
      githubPlaceholder: true,
      githubPlaceholderText: '[PLACEHOLDER: Add your GitHub Repository URL]',
      demo: '#',
      demoPlaceholder: true,
      demoPlaceholderText: '[PLACEHOLDER: Add your Live Project URL]',
      demoNote: 'Prototype Specification Phase',
      highlights: [
        'Modular REST API endpoints for academic schedule querying',
        'Conflict resolution logic for overlapping lecture slots',
        'Minimalist dark mode user interface designed for student productivity',
        'Role-based permissions and session handling structure'
      ],
      specNote: 'Practical software engineering project built to address daily student scheduling at NST.'
    },
    {
      id: 'EXP-04',
      title: 'COMPUTER VISION & SPATIAL INTERACTION',
      subtitle: 'Real-Time Landmark Detection & Gesture Viewport Controller',
      description: 'An experimental computer vision pipeline investigating touchless spatial hand tracking to manipulate 3D camera viewports. Evaluates coordinate smoothing and low-latency interaction models.',
      status: 'EXPERIMENTAL',
      statusType: 'experimental',
      purity: '95.2%',
      category: 'AI & ML',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'Canvas API', 'JavaScript'],
      github: '#',
      githubPlaceholder: true,
      githubPlaceholderText: '[PLACEHOLDER: Add your GitHub Repository URL]',
      demo: '#',
      demoPlaceholder: true,
      demoPlaceholderText: '[PLACEHOLDER: Add your Demo URL or Video]',
      demoNote: 'Research Experiment',
      highlights: [
        'Sub-30ms landmark tracking for 21 discrete hand joints',
        'Algorithmic coordinate dampening to filter out sensor noise and hand tremors',
        'Spatial vector normalization for multi-axis rotation and pinch scaling',
        'Exploratory bridge to client-side WebGL canvas manipulation'
      ],
      specNote: 'Experimental project testing the fusion of computer vision models with interactive 3D web environments.'
    }
  ];

  const categories = ['ALL', '3D & CREATIVE', 'AI & ML', 'SYSTEMS'];

  const filteredExperiments = activeFilter === 'ALL'
    ? experiments
    : experiments.filter(exp => exp.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Heading Strip */}
      <div className="mb-14 border-b border-lab-border/70 pb-6 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2 font-mono text-xs text-lab-toxic">
            <span className="w-8 h-[1px] bg-lab-toxic" />
            <span>LABORATORY EXPERIMENT LOG // SECTION 03</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-cinematic uppercase tracking-tight text-white leading-none">
            EXPERIMENTS <span className="text-lab-green glow-text">// SELECTED BUILDS</span>
          </h2>
          <p className="text-sm font-mono text-lab-sand mt-3 max-w-2xl">
            AUTHENTIC SPECIMEN LOGS &bull; 3D WEB DEVELOPMENT, ARTIFICIAL INTELLIGENCE &amp; SOFTWARE SYSTEMS
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-lab-muted mr-1">
            <SlidersHorizontal size={14} className="text-lab-toxic" />
            <span className="hidden sm:inline">FILTER:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-sm border transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-lab-green text-lab-black border-lab-green font-bold shadow-glow-sm'
                  : 'bg-lab-card/80 border-lab-border text-lab-muted hover:text-white hover:border-lab-border-active'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Experiment Cards Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {filteredExperiments.map((exp) => (
          <div
            key={exp.id}
            className="group relative bg-lab-card/90 border border-lab-border hover:border-lab-green/80 rounded-sm p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:shadow-glow-sm flex flex-col justify-between overflow-hidden"
          >
            {/* Subtle Neon Green Edge Accent Line on Hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lab-toxic to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div>
              {/* Card Header: Experiment ID, Category & Purity Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-lab-border/50 pb-4 mb-5 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-lab-black border border-lab-border text-lab-sand font-bold rounded text-[11px] tracking-wider">
                    {exp.id}
                  </span>
                  <span className="px-2 py-0.5 bg-lab-charcoal border border-lab-border text-lab-muted text-[10px] tracking-widest uppercase rounded">
                    {exp.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    exp.statusType === 'live' 
                      ? 'bg-lab-toxic shadow-[0_0_8px_#B5E853] animate-pulse'
                      : exp.statusType === 'research'
                      ? 'bg-lab-green'
                      : 'bg-lab-sand'
                  }`} />
                  <span className="text-white font-semibold tracking-wider text-[11px]">
                    {exp.status}
                  </span>
                  <span className="text-lab-muted text-[10px]">
                    [{exp.purity}]
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-cinematic uppercase tracking-wide text-white group-hover:text-lab-green transition-colors mb-1.5 leading-tight">
                {exp.title}
              </h3>
              <p className="text-xs font-mono text-lab-sand mb-4">
                // {exp.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm font-sans text-gray-300 leading-relaxed mb-6 font-light">
                {exp.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 bg-lab-charcoal/90 border border-lab-border text-gray-300 rounded-sm group-hover:border-lab-border-active transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions Toolbar: Inspect, Live Demo & GitHub */}
            <div className="pt-5 border-t border-lab-border/60 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              {/* Inspect Details Button */}
              <button
                onClick={() => setSelectedExperiment(exp)}
                className="px-4 py-2.5 bg-lab-charcoal hover:bg-lab-green text-white hover:text-lab-black border border-lab-border hover:border-lab-green transition-all duration-200 flex items-center gap-2 rounded-sm cursor-pointer active:scale-95"
              >
                <Eye size={15} />
                <span>INSPECT SPECIMEN</span>
              </button>

              {/* Secondary Action Links */}
              <div className="flex items-center gap-2.5">
                {/* GitHub Action */}
                {exp.githubPlaceholder ? (
                  <button
                    onClick={() => setSelectedExperiment(exp)}
                    className="px-3 py-2 bg-lab-black hover:bg-lab-charcoal border border-lab-border hover:border-lab-sand text-lab-muted hover:text-white rounded-sm transition-all flex items-center gap-1.5 text-[11px] cursor-pointer"
                    title={exp.githubPlaceholderText}
                  >
                    <Github size={15} />
                    <span className="hidden sm:inline">REPO [EDIT]</span>
                  </button>
                ) : (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 bg-lab-black hover:bg-lab-charcoal border border-lab-border hover:border-lab-green text-gray-300 hover:text-white rounded-sm transition-all flex items-center gap-1.5 text-[11px]"
                    title="View GitHub Repository"
                  >
                    <Github size={15} />
                    <span className="hidden sm:inline">GITHUB</span>
                  </a>
                )}

                {/* Live Demo Action */}
                {exp.demoPlaceholder ? (
                  <button
                    onClick={() => setSelectedExperiment(exp)}
                    className="px-3.5 py-2 bg-lab-charcoal/80 border border-lab-border hover:border-lab-toxic text-lab-sand hover:text-white rounded-sm transition-all flex items-center gap-1.5 text-[11px] cursor-pointer"
                    title={exp.demoPlaceholderText}
                  >
                    <ExternalLink size={15} />
                    <span>DEMO [EDIT]</span>
                  </button>
                ) : (
                  <a
                    href={exp.demo}
                    className="px-3.5 py-2 bg-lab-green/10 border border-lab-green hover:bg-lab-green hover:text-lab-black text-lab-toxic rounded-sm transition-all flex items-center gap-1.5 text-[11px] font-bold shadow-glow-sm"
                    title={exp.demoNote}
                  >
                    <ExternalLink size={15} />
                    <span>LIVE DEMO</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Specimen Inspection Modal Dialog */}
      {selectedExperiment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-lab-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-lab-card border border-lab-green max-w-3xl w-full max-h-[92vh] overflow-y-auto rounded shadow-glow-green p-6 sm:p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedExperiment(null)}
              className="absolute top-6 right-6 p-2 rounded bg-lab-charcoal border border-lab-border text-lab-muted hover:text-white transition-colors cursor-pointer"
              aria-label="Close Inspection Modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="border-b border-lab-border/70 pb-4 mb-6">
              <div className="flex items-center gap-2.5 text-xs font-mono text-lab-toxic mb-1">
                <span>// DETAILED LABORATORY LOG &bull; {selectedExperiment.id}</span>
                <span>&bull;</span>
                <span className="text-lab-sand">{selectedExperiment.category}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-cinematic uppercase text-white tracking-wide">
                {selectedExperiment.title}
              </h3>
              <p className="text-xs font-mono text-lab-muted">
                {selectedExperiment.subtitle}
              </p>
            </div>

            {/* Status Telemetry Banner */}
            <div className="p-3.5 bg-lab-charcoal/80 border border-lab-border rounded mb-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-lab-green animate-pulse" />
                <span className="text-white">STATUS: <strong className="text-lab-toxic">{selectedExperiment.status}</strong></span>
              </div>
              <div className="text-lab-sand">
                CHEMICAL PURITY: <span className="text-white font-bold">{selectedExperiment.purity}</span>
              </div>
            </div>

            {/* Extended Description */}
            <div className="mb-6 space-y-2">
              <h4 className="text-xs font-mono uppercase text-lab-sand font-bold tracking-wider">
                [PROJECT SPECIFICATION OVERVIEW]
              </h4>
              <p className="text-sm font-sans text-gray-200 leading-relaxed font-light">
                {selectedExperiment.description}
              </p>
              <p className="text-xs font-mono text-lab-muted italic">
                {selectedExperiment.specNote}
              </p>
            </div>

            {/* Key Technical Highlights */}
            <div className="mb-6 space-y-3">
              <h4 className="text-xs font-mono uppercase text-lab-toxic font-bold tracking-wider">
                [TECHNICAL HIGHLIGHTS &amp; ARCHITECTURE]
              </h4>
              <ul className="space-y-2.5 text-xs font-mono text-gray-300">
                {selectedExperiment.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-lab-green font-bold">&gt;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Applied */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-lab-sand font-bold tracking-wider mb-2">
                [TECHNOLOGY STACK &amp; REAGENTS]
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedExperiment.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 bg-lab-charcoal border border-lab-border text-lab-toxic rounded"
                  >
                    +{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Placeholder / Link Management Panel */}
            <div className="p-4 bg-lab-black border border-lab-border rounded mb-6 text-xs font-mono space-y-2">
              <div className="text-lab-sand font-bold flex items-center gap-1.5">
                <Code2 size={14} className="text-lab-green" />
                <span>LINK CONFIGURATION &amp; PLACEHOLDER DIRECTIVE:</span>
              </div>
              {selectedExperiment.githubPlaceholder ? (
                <div className="text-lab-muted">
                  <span className="text-white">GitHub:</span> {selectedExperiment.githubPlaceholderText}
                </div>
              ) : (
                <div className="text-lab-muted">
                  <span className="text-white">GitHub:</span> <a href={selectedExperiment.github} target="_blank" rel="noreferrer" className="text-lab-toxic underline">{selectedExperiment.github}</a>
                </div>
              )}
              {selectedExperiment.demoPlaceholder ? (
                <div className="text-lab-muted">
                  <span className="text-white">Live Demo:</span> {selectedExperiment.demoPlaceholderText}
                </div>
              ) : (
                <div className="text-lab-muted">
                  <span className="text-white">Live Demo:</span> <span className="text-lab-green">{selectedExperiment.demoNote}</span>
                </div>
              )}
            </div>

            {/* Modal Actions Footer */}
            <div className="pt-4 border-t border-lab-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <span className="text-lab-muted">MAYANK® LAB ARCHIVE // SPECIMEN VERIFIED</span>
              <button
                onClick={() => setSelectedExperiment(null)}
                className="px-6 py-2.5 bg-lab-green hover:bg-lab-toxic text-lab-black font-cinematic text-lg uppercase tracking-wider transition-colors cursor-pointer"
              >
                CLOSE INSPECTOR
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
