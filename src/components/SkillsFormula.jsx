import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Wrench, 
  Palette, 
  Sparkles, 
  Atom, 
  Terminal, 
  Layers, 
  Boxes, 
  Activity, 
  Binary, 
  GitBranch, 
  Eye, 
  CheckCircle2,
  FileCode,
  Flame
} from 'lucide-react';

export default function SkillsFormula() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('ALL');

  // Exact 4 categories and skills requested by the user, framed authentically as learning areas
  const skillCategories = [
    {
      id: 'languages',
      category: 'PROGRAMMING LANGUAGES',
      code: 'CAT-01',
      icon: Code2,
      accent: 'border-lab-green text-lab-green',
      glow: 'shadow-[0_0_20px_rgba(128,204,40,0.15)]',
      description: 'Core syntax and algorithmic reagents utilized in academic coursework and development.',
      skills: [
        {
          symbol: 'Py',
          name: 'Python',
          atomicNumber: '01',
          compoundCode: 'PY-3.12',
          learningStatus: 'ACTIVE EXPLORATION',
          statusColor: 'text-lab-toxic',
          focus: 'Primary language for AI/ML modeling, data structures, algorithms, and script automation at Newton School of Technology.',
          topics: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'Scientific Computing', 'File I/O & Automation']
        },
        {
          symbol: 'Js',
          name: 'JavaScript',
          atomicNumber: '02',
          compoundCode: 'JS-ES24',
          learningStatus: 'FOUNDATIONAL LEARNING',
          statusColor: 'text-lab-sand',
          focus: 'Client-side interactivity, asynchronous programming, Canvas API, Web Audio API, and DOM manipulation for dynamic web apps.',
          topics: ['ES6+ Syntax', 'Promises & Async/Await', 'Event Loop Mechanics', 'DOM & Canvas Operations']
        },
        {
          symbol: 'Ht',
          name: 'HTML',
          atomicNumber: '03',
          compoundCode: 'HT-5.0',
          learningStatus: 'FOUNDATIONAL LEARNING',
          statusColor: 'text-lab-green',
          focus: 'Semantic page structuring, accessible document outlines, audio/canvas embedding, and modern web standards.',
          topics: ['Semantic Elements', 'Canvas 2D/3D Mounts', 'Accessibility (a11y) Basics', 'Audio/Video Embedding']
        },
        {
          symbol: 'Cs',
          name: 'CSS',
          atomicNumber: '04',
          compoundCode: 'CS-3.0',
          learningStatus: 'ACTIVE EXPLORATION',
          statusColor: 'text-lab-toxic',
          focus: 'Responsive design systems, TailwindCSS utility architecture, hardware-accelerated animations, and dark cinematic aesthetics.',
          topics: ['TailwindCSS Systems', 'CSS Grid & Flexbox', 'Keyframe Animations', 'Hardware Acceleration']
        }
      ]
    },
    {
      id: 'aiml',
      category: 'AI & MACHINE LEARNING',
      code: 'CAT-02',
      icon: Cpu,
      accent: 'border-lab-toxic text-lab-toxic',
      glow: 'shadow-[0_0_20px_rgba(181,232,83,0.18)]',
      description: 'Theoretical foundations and applied neural pipelines studied as an AI/ML engineering major at NST.',
      skills: [
        {
          symbol: 'Ai',
          name: 'Artificial Intelligence',
          atomicNumber: '05',
          compoundCode: 'AI-SYS',
          learningStatus: 'ACADEMIC COURSEWORK',
          statusColor: 'text-lab-toxic',
          focus: 'Core concepts of intelligent systems, heuristic search algorithms, decision trees, and agentic reasoning architectures.',
          topics: ['Heuristic Search & Optimization', 'State Space Exploration', 'Agentic Workflows', 'Decision Logic']
        },
        {
          symbol: 'Ml',
          name: 'Machine Learning',
          atomicNumber: '06',
          compoundCode: 'ML-MATH',
          learningStatus: 'ACTIVE EXPLORATION',
          statusColor: 'text-lab-green',
          focus: 'Supervised and unsupervised learning techniques, linear regression, classification models, loss functions, and data preprocessing.',
          topics: ['Linear & Logistic Regression', 'Classification & Clustering', 'Loss Function Gradient Descent', 'Model Evaluation Metrics']
        },
        {
          symbol: 'Nn',
          name: 'Neural Networks',
          atomicNumber: '07',
          compoundCode: 'NN-TENS',
          learningStatus: 'ACADEMIC COURSEWORK',
          statusColor: 'text-lab-toxic',
          focus: 'Multi-layer perceptrons, backpropagation mechanics, activation functions (ReLU, Sigmoid), and convolutional layers.',
          topics: ['Perceptrons & Multi-Layer Nets', 'Backpropagation Gradients', 'Activation Functions', 'Feature Map Convolutions']
        },
        {
          symbol: 'Pt',
          name: 'PyTorch',
          atomicNumber: '08',
          compoundCode: 'PT-CUDA',
          learningStatus: 'ACTIVE EXPLORATION',
          statusColor: 'text-lab-sand',
          focus: 'Building and training modular neural network architectures, tensor manipulations, autograd mechanics, and dataset loaders.',
          topics: ['nn.Module Pipelines', 'Tensor Math & Autograd', 'DataLoader & Datasets', 'Loss Optimization Loops']
        }
      ]
    },
    {
      id: 'devtools',
      category: 'DEVELOPMENT TOOLS',
      code: 'CAT-03',
      icon: Wrench,
      accent: 'border-lab-sand text-lab-sand',
      glow: 'shadow-[0_0_20px_rgba(197,167,122,0.15)]',
      description: 'Industry-standard workflows and 3D graphics libraries powering our engineering stack.',
      skills: [
        {
          symbol: 'Gt',
          name: 'Git',
          atomicNumber: '09',
          compoundCode: 'GT-VCS',
          learningStatus: 'PRACTICAL APPLICATION',
          statusColor: 'text-lab-green',
          focus: 'Distributed version control, branch management, merge conflict resolution, commit hygiene, and staging workflows.',
          topics: ['Branching Strategies', 'Commit Hygiene', 'Merge Conflict Handling', 'Staging & History Log']
        },
        {
          symbol: 'Gh',
          name: 'GitHub',
          atomicNumber: '10',
          compoundCode: 'GH-HUB',
          learningStatus: 'PRACTICAL APPLICATION',
          statusColor: 'text-lab-sand',
          focus: 'Repository hosting, collaborative team pull requests, open-source documentation, and basic CI/CD actions.',
          topics: ['Pull Request Reviews', 'Issues & Milestones', 'Repository Documentation', 'GitHub Actions Intro']
        },
        {
          symbol: 'Vs',
          name: 'VS Code',
          atomicNumber: '11',
          compoundCode: 'VS-IDE',
          learningStatus: 'PRACTICAL APPLICATION',
          statusColor: 'text-lab-muted',
          focus: 'Primary development environment, multi-language debugging, extension ecosystems, terminal integration, and formatting.',
          topics: ['Integrated Debugging', 'Language Server Protocols', 'Terminal Workflows', 'Keybinding Ergonomics']
        },
        {
          symbol: 'Th',
          name: 'Three.js',
          atomicNumber: '12',
          compoundCode: 'TH-3JS',
          learningStatus: 'ACTIVE EXPLORATION',
          statusColor: 'text-lab-toxic',
          focus: 'Constructing interactive 3D WebGL scenes, cameras, lighting setups, geometries (Lathe, Buffer), and particle simulations.',
          topics: ['Scene, Camera & Render Loops', 'Parametric Geometries', 'MeshPhysicalMaterial Glass', 'Particle Systems']
        },
        {
          symbol: 'Gl',
          name: 'WebGL',
          atomicNumber: '13',
          compoundCode: 'GL-SHDR',
          learningStatus: 'ACTIVE EXPLORATION',
          statusColor: 'text-lab-green',
          focus: 'Hardware-accelerated browser rasterization, understanding the graphics pipeline, vertex and fragment shader fundamentals.',
          topics: ['Graphics Pipeline Stages', 'Vertex & Fragment Shaders', 'Buffer Attributes', 'GPU Texture Mapping']
        }
      ]
    },
    {
      id: 'creative',
      category: 'VISUAL DESIGN & CREATIVE DEVELOPMENT',
      code: 'CAT-04',
      icon: Palette,
      accent: 'border-lab-green text-lab-green',
      glow: 'shadow-[0_0_20px_rgba(128,204,40,0.18)]',
      description: 'Bridging technical computing with cinematic visual identity, spatial ergonomics, and digital storytelling.',
      skills: [
        {
          symbol: '3D',
          name: '3D Web Experiences',
          atomicNumber: '14',
          compoundCode: '3D-EXP',
          learningStatus: 'ACTIVE EXPLORATION',
          statusColor: 'text-lab-toxic',
          focus: 'Designing spatial web layouts that elevate portfolios into interactive cinematic environments with real-time feedback.',
          topics: ['Spatial Composition', 'Interactive Parallax', 'Depth-Linked Scrolling', 'Atmospheric Lighting']
        },
        {
          symbol: 'Ui',
          name: 'Interactive UI',
          atomicNumber: '15',
          compoundCode: 'UI-INT',
          learningStatus: 'ACTIVE EXPLORATION',
          statusColor: 'text-lab-green',
          focus: 'Crafting responsive user interfaces with immediate tactile feedback, custom cursors, micro-interactions, and dark mode ergonomics.',
          topics: ['Tactile Feedback States', 'Custom Reticle Cursors', 'Micro-Transitions', 'Accessible Dark Theme']
        },
        {
          symbol: 'Cr',
          name: 'Creative Web Development',
          atomicNumber: '16',
          compoundCode: 'CR-DEV',
          learningStatus: 'ACTIVE EXPLORATION',
          statusColor: 'text-lab-sand',
          focus: 'Synthesizing soundscapes (Web Audio API), procedural graphics, and storytelling into memorable digital experiences.',
          topics: ['Awwwards-grade Aesthetics', 'Web Audio API Synthesizers', 'Cinematic Loaders', 'Narrative Web Design']
        }
      ]
    }
  ];

  // Flat list for searching/filtering
  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(skill => ({ ...skill, categoryTitle: cat.category, categoryCode: cat.code }))
  );

  const displayedCategories = activeCategoryFilter === 'ALL'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategoryFilter);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header Strip */}
      <div className="mb-14 border-b border-lab-border/70 pb-6 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2 font-mono text-xs text-lab-toxic">
            <span className="w-8 h-[1px] bg-lab-toxic" />
            <span>CHEMICAL MATRIX // SECTION 04</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-cinematic uppercase tracking-tight text-white leading-none">
            THE FORMULA <span className="text-lab-green glow-text">// TECHNICAL ARSENAL</span>
          </h2>
          <p className="text-sm font-mono text-lab-sand mt-3 max-w-2xl">
            AUTHENTIC LEARNING PROTOCOLS &bull; PROGRAMMING LANGUAGES, AI/ML, TOOLS &amp; CREATIVE 3D WEB
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <button
            onClick={() => setActiveCategoryFilter('ALL')}
            className={`px-3 py-1.5 rounded-sm border transition-all cursor-pointer ${
              activeCategoryFilter === 'ALL'
                ? 'bg-lab-green text-lab-black border-lab-green font-bold shadow-glow-sm'
                : 'bg-lab-card border-lab-border text-lab-muted hover:text-white hover:border-lab-border-active'
            }`}
          >
            ALL ARSENAL
          </button>
          <button
            onClick={() => setActiveCategoryFilter('languages')}
            className={`px-3 py-1.5 rounded-sm border transition-all cursor-pointer ${
              activeCategoryFilter === 'languages'
                ? 'bg-lab-green text-lab-black border-lab-green font-bold shadow-glow-sm'
                : 'bg-lab-card border-lab-border text-lab-muted hover:text-white hover:border-lab-border-active'
            }`}
          >
            LANGUAGES
          </button>
          <button
            onClick={() => setActiveCategoryFilter('aiml')}
            className={`px-3 py-1.5 rounded-sm border transition-all cursor-pointer ${
              activeCategoryFilter === 'aiml'
                ? 'bg-lab-green text-lab-black border-lab-green font-bold shadow-glow-sm'
                : 'bg-lab-card border-lab-border text-lab-muted hover:text-white hover:border-lab-border-active'
            }`}
          >
            AI &amp; ML
          </button>
          <button
            onClick={() => setActiveCategoryFilter('devtools')}
            className={`px-3 py-1.5 rounded-sm border transition-all cursor-pointer ${
              activeCategoryFilter === 'devtools'
                ? 'bg-lab-green text-lab-black border-lab-green font-bold shadow-glow-sm'
                : 'bg-lab-card border-lab-border text-lab-muted hover:text-white hover:border-lab-border-active'
            }`}
          >
            TOOLS
          </button>
          <button
            onClick={() => setActiveCategoryFilter('creative')}
            className={`px-3 py-1.5 rounded-sm border transition-all cursor-pointer ${
              activeCategoryFilter === 'creative'
                ? 'bg-lab-green text-lab-black border-lab-green font-bold shadow-glow-sm'
                : 'bg-lab-card border-lab-border text-lab-muted hover:text-white hover:border-lab-border-active'
            }`}
          >
            CREATIVE 3D
          </button>
        </div>
      </div>

      {/* Futuristic Chemical Matrix Control Panels */}
      <div className="space-y-10">
        {displayedCategories.map((group) => {
          const GroupIcon = group.icon;
          return (
            <div
              key={group.id}
              className={`bg-lab-card/85 border border-lab-border rounded-sm p-6 sm:p-8 backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:border-lab-border-active ${group.glow}`}
            >
              {/* Category Header Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-lab-border/60 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 bg-lab-charcoal border ${group.accent} rounded-sm shadow-sm`}>
                    <GroupIcon size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-lab-sand font-bold tracking-widest uppercase">
                        [{group.code}]
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-cinematic uppercase tracking-wider text-white">
                        {group.category}
                      </h3>
                    </div>
                    <p className="text-xs font-mono text-lab-muted mt-0.5">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-lab-muted">
                  <span className="text-lab-toxic font-bold">{group.skills.length}</span> REAGENTS ACTIVE
                </div>
              </div>

              {/* Chemical Formula Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.skills.map((skill) => {
                  const isSelected = selectedSkill?.symbol === skill.symbol;
                  return (
                    <div
                      key={skill.symbol}
                      onClick={() => setSelectedSkill(skill)}
                      className={`group p-4 bg-lab-charcoal/70 border rounded-sm transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                        isSelected
                          ? 'border-lab-toxic bg-lab-charcoal shadow-glow-sm scale-[1.02]'
                          : 'border-lab-border hover:border-lab-green hover:bg-lab-charcoal'
                      }`}
                    >
                      {/* Top Bar: Atomic Code & Learning Status */}
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-mono mb-3">
                          <span className="text-lab-sand font-bold">
                            #{skill.atomicNumber} &bull; {skill.compoundCode}
                          </span>
                          <span className={`text-[9px] font-bold tracking-wider uppercase ${skill.statusColor}`}>
                            {skill.learningStatus}
                          </span>
                        </div>

                        {/* Middle: Element Monogram & Name */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-14 bg-lab-black border border-lab-green/80 group-hover:border-lab-toxic rounded-sm flex flex-col items-center justify-center transition-colors shadow-sm">
                            <span className="text-xl font-cinematic font-bold text-lab-green group-hover:text-lab-toxic leading-none">
                              {skill.symbol}
                            </span>
                          </div>
                          <div>
                            <h4 className="text-lg font-cinematic uppercase tracking-wider text-white group-hover:text-lab-green transition-colors leading-none">
                              {skill.name}
                            </h4>
                            <span className="text-[10px] font-mono text-lab-muted">
                              Core Component
                            </span>
                          </div>
                        </div>

                        {/* Focus description snippet */}
                        <p className="text-xs font-sans text-gray-300 leading-relaxed font-light line-clamp-2 mb-3">
                          {skill.focus}
                        </p>
                      </div>

                      {/* Click to Inspect Prompt */}
                      <div className="pt-2 border-t border-lab-border/40 flex items-center justify-between text-[10px] font-mono text-lab-sand group-hover:text-lab-toxic transition-colors">
                        <span>INSPECT FORMULA</span>
                        <span>&rarr;</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Spectrometric Formula Inspector (Interactive Detail Drawer) */}
      <div className="mt-10 bg-lab-card border border-lab-green rounded-sm p-6 sm:p-8 shadow-glow-sm relative">
        {selectedSkill ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Big Element Monogram Tile */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="w-36 h-44 bg-lab-charcoal border-2 border-lab-green rounded-sm p-4 flex flex-col justify-between shadow-glow-green text-center">
                <div className="flex justify-between items-center text-xs font-mono text-lab-muted">
                  <span className="font-bold text-lab-sand">#{selectedSkill.atomicNumber}</span>
                  <span className="text-[9px] text-lab-toxic font-bold uppercase">{selectedSkill.compoundCode}</span>
                </div>
                <div className="my-auto">
                  <span className="text-6xl font-cinematic uppercase text-lab-green font-bold block leading-none">
                    {selectedSkill.symbol}
                  </span>
                  <span className="text-xs font-mono uppercase text-white font-bold tracking-wider block mt-1">
                    {selectedSkill.name}
                  </span>
                </div>
                <div className="text-[9px] font-mono text-lab-muted border-t border-lab-border/40 pt-1">
                  STATUS: <span className="text-lab-sand">{selectedSkill.learningStatus}</span>
                </div>
              </div>
            </div>

            {/* Right Diagnostic Breakdown */}
            <div className="lg:col-span-9 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-lab-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <Atom size={20} className="text-lab-toxic animate-spin" />
                  <h3 className="text-2xl sm:text-3xl font-cinematic uppercase text-white tracking-wide">
                    FORMULA ANALYSIS: {selectedSkill.name} [{selectedSkill.symbol}]
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded text-xs font-mono bg-lab-charcoal border border-lab-border text-lab-toxic font-bold">
                  {selectedSkill.learningStatus}
                </span>
              </div>

              {/* Factual Focus Description */}
              <p className="text-sm font-sans text-gray-200 leading-relaxed font-light">
                {selectedSkill.focus}
              </p>

              {/* Key Concept Modules Studied */}
              <div>
                <h4 className="text-xs font-mono text-lab-sand uppercase font-bold tracking-wider mb-2 flex items-center gap-1.5">
                  <Terminal size={14} className="text-lab-green" />
                  <span>// KEY CONCEPT REAGENTS &bull; NST CURRICULUM &amp; LAB EXPLORATION:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-mono px-3 py-1 bg-lab-charcoal border border-lab-border text-lab-toxic rounded-sm"
                    >
                      +{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning Area Note */}
              <div className="pt-2 text-[11px] font-mono text-lab-muted flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lab-green" />
                <span>Documented as an active learning &amp; engineering foundation &bull; Mayank Sharma @ NST</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-lab-muted">
            <div className="flex items-center gap-3">
              <Atom size={20} className="text-lab-green animate-spin" />
              <span>CLICK ANY REAGENT ELEMENT ABOVE TO INSPECT ITS MOLECULAR CURRICULUM PROFILE &bull; 99.1% CHEMICAL INTEGRITY</span>
            </div>
            <span className="text-lab-toxic font-bold tracking-wider">[CONTROL PANEL READY]</span>
          </div>
        )}
      </div>
    </section>
  );
}
