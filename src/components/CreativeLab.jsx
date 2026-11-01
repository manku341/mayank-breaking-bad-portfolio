import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  Boxes, 
  Cpu, 
  Palette, 
  Sparkles, 
  Activity, 
  Layers, 
  Terminal, 
  Compass, 
  Radio, 
  Sliders, 
  Eye, 
  CheckCircle2, 
  Flame, 
  Atom,
  RotateCcw
} from 'lucide-react';

// Lightweight, interactive 3D Molecular Compound Visualizer
function InteractiveMolecule3D({ reagentColor = '#80CC28', wireframe = false, rotationSpeed = 1.0 }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check WebGL availability
    const canvasTest = document.createElement('canvas');
    const gl = canvasTest.getContext('webgl') || canvasTest.getContext('experimental-webgl');
    if (!gl) {
      setHasWebGL(false);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 320;
    const height = currentMount.clientHeight || 300;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 50);
    camera.position.set(0, 0, 4.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    currentMount.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0x1a2e1d, 2.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xb5e853, 2.8);
    keyLight.position.set(3, 4, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xc5a77a, 1.8);
    rimLight.position.set(-4, -2, -2);
    scene.add(rimLight);

    // 3. Central Molecular Compound Group
    const compoundGroup = new THREE.Group();
    scene.add(compoundGroup);

    // Geometry: Icosahedron lattice representing a stable fullerene / synthetic molecule
    const baseGeom = new THREE.IcosahedronGeometry(1.6, 1);
    const atomPositions = baseGeom.attributes.position;
    const atomCount = atomPositions.count;

    // Create glowing atom nodes at unique vertices
    const uniquePoints = [];
    const threshold = 0.08;
    for (let i = 0; i < atomCount; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(atomPositions, i);
      let isDuplicate = false;
      for (const p of uniquePoints) {
        if (p.distanceTo(v) < threshold) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) uniquePoints.push(v);
    }

    const nodeGeom = new THREE.SphereGeometry(0.1, 14, 14);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(reagentColor),
      emissive: new THREE.Color(reagentColor),
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.2,
      wireframe: wireframe
    });

    const atomMeshes = [];
    uniquePoints.forEach(pt => {
      const node = new THREE.Mesh(nodeGeom, nodeMat);
      node.position.copy(pt);
      compoundGroup.add(node);
      atomMeshes.push(node);
    });

    // Wireframe connection bonds
    const wireGeom = new THREE.WireframeGeometry(baseGeom);
    const wireMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(reagentColor),
      transparent: true,
      opacity: 0.45
    });
    const wireMesh = new THREE.LineSegments(wireGeom, wireMat);
    compoundGroup.add(wireMesh);

    // Core central catalyst sphere
    const coreGeom = new THREE.OctahedronGeometry(0.6, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xb5e853,
      emissive: 0x80cc28,
      emissiveIntensity: 1.2,
      wireframe: true
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    compoundGroup.add(coreMesh);

    // Ambient floating orbital ring
    const ringGeom = new THREE.TorusGeometry(2.1, 0.015, 8, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xc5a77a,
      transparent: true,
      opacity: 0.4
    });
    const ringMesh = new THREE.Mesh(ringGeom, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    compoundGroup.add(ringMesh);

    sceneRef.current = {
      compoundGroup,
      nodeMat,
      wireMat,
      coreMesh,
      ringMesh,
      renderer,
      baseGeom,
      nodeGeom,
      coreGeom,
      ringGeom
    };

    // 4. Animation Loop
    let animId;
    let clock = new THREE.Clock();
    let isVisible = true;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Rotation dynamics (suppressed if reduced motion is requested)
      if (!prefersReducedMotion) {
        compoundGroup.rotation.y += delta * 0.45 * rotationSpeed;
        compoundGroup.rotation.x += delta * 0.25 * rotationSpeed;
        ringMesh.rotation.z += delta * 0.3 * rotationSpeed;
        coreMesh.rotation.y -= delta * 0.6 * rotationSpeed;

        // Pulse core scale
        const pulse = 1 + Math.sin(elapsed * 3) * 0.08;
        coreMesh.scale.setScalar(pulse);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Tab visibility handling
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) clock.start();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Resize Handler
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth || 320;
      const h = mountRef.current.clientHeight || 300;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      baseGeom.dispose();
      nodeGeom.dispose();
      coreGeom.dispose();
      ringGeom.dispose();
      nodeMat.dispose();
      wireMat.dispose();
      coreMat.dispose();
      ringMat.dispose();
    };
  }, []);

  // Update dynamic properties
  useEffect(() => {
    if (!sceneRef.current) return;
    const { nodeMat, wireMat } = sceneRef.current;
    if (nodeMat) {
      nodeMat.color.set(reagentColor);
      nodeMat.emissive.set(reagentColor);
      nodeMat.wireframe = wireframe;
    }
    if (wireMat) {
      wireMat.color.set(reagentColor);
    }
  }, [reagentColor, wireframe]);

  if (!hasWebGL) {
    return (
      <div className="w-full h-72 sm:h-80 flex flex-col items-center justify-center p-6 text-center bg-lab-black/90">
        <div className="w-20 h-20 rounded-full border-2 border-lab-toxic flex items-center justify-center mb-3 shadow-glow-sm">
          <Atom size={32} className="text-lab-green animate-pulse" />
        </div>
        <span className="text-xs font-mono text-white font-bold uppercase">3D MOLECULE SIMULATION</span>
        <span className="text-[10px] font-mono text-lab-sand mt-1">LATTICE ACTIVE (CANVAS FALLBACK MODE)</span>
      </div>
    );
  }

  return (
    <div className="w-full h-72 sm:h-80 relative flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      {/* Subtle scanning radar ring */}
      <div className="absolute inset-0 border border-lab-border/40 rounded-sm pointer-events-none" />
      <div className="absolute bottom-3 left-4 text-[10px] font-mono text-lab-sand pointer-events-none flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-lab-toxic animate-ping" />
        <span>3D MOLECULAR MATRIX &bull; INTERACTIVE</span>
      </div>
    </div>
  );
}

export default function CreativeLab() {
  const [activePanelId, setActivePanelId] = useState('3d');
  const [moleculeColor, setMoleculeColor] = useState('#80CC28');
  const [wireframeMode, setWireframeMode] = useState(false);
  const [rotationRate, setRotationRate] = useState(1.0);

  // Exactly three interactive experiment panels as requested
  const experimentPanels = [
    {
      id: '3d',
      title: '3D WEB WORLDS',
      subtitle: 'Three.js, WebGL & Immersive 3D Environments',
      icon: Boxes,
      status: 'ACTIVE EXPERIMENTATION',
      statusColor: 'text-lab-toxic',
      beacon: 'bg-lab-toxic',
      accentColor: '#80CC28',
      summary: 'Exploring spatial browser canvases, custom procedural shaders, realistic borosilicate glass refraction, and physical particle dynamics.',
      details: [
        'Investigating parametric LatheGeometry and BufferGeometry procedural mesh generation in Three.js.',
        'Experimenting with GLSL fragment and vertex shaders for custom glowing energy pulses and volumetric smoke billows.',
        'Designing depth-linked camera choreography that responds naturally to mouse parallax and page scroll velocity.',
        'Optimizing rendering loops to maintain consistent 60fps on both desktop and mobile viewports with zero layout shifts.'
      ],
      tags: ['Three.js', 'WebGL Shaders', 'Particle Dynamics', 'ACESFilmic ToneMapping', 'Math Geometries'],
      specLabel: 'EXP-AREA // 3D GRAPHICS'
    },
    {
      id: 'ai',
      title: 'AI EXPLORATIONS',
      subtitle: 'Artificial Intelligence, Machine Learning & Intelligent Systems',
      icon: Cpu,
      status: 'RESEARCH & PROTOTYPING',
      statusColor: 'text-lab-green',
      beacon: 'bg-lab-green',
      accentColor: '#B5E853',
      summary: 'Exploring machine learning pipelines, deep neural network layers, computer vision gestures, and agentic workflows at Newton School of Technology.',
      details: [
        'Studying neural network weight activations and learning rate curves in PyTorch and scikit-learn.',
        'Experimenting with real-time computer vision heuristics (OpenCV & MediaPipe) for touchless gesture interactions.',
        'Investigating how AI models can interface with client-side WebGL frontends to visualize high-dimensional latent vectors.',
        'Focusing on authentic understanding of algorithms and loss gradients rather than treating models as black boxes.'
      ],
      tags: ['PyTorch', 'scikit-learn', 'Computer Vision (OpenCV)', 'Heuristic Optimization', 'Tensor Pipelines'],
      specLabel: 'EXP-AREA // INTELLIGENCE'
    },
    {
      id: 'ui',
      title: 'INTERACTIVE DESIGN',
      subtitle: 'Motion, Animations, Creative Interfaces & Soundscapes',
      icon: Palette,
      status: 'CONCEPT EXPLORATION',
      statusColor: 'text-lab-sand',
      beacon: 'bg-lab-sand',
      accentColor: '#C5A77A',
      summary: 'Synthesizing kinetic typography, tactile micro-interactions, dark mode ergonomics, and procedural Web Audio API soundscapes.',
      details: [
        'Developing native Web Audio API oscillators to generate real-time atmospheric drones and bubbling sound effects without audio files.',
        'Designing custom cursor reticles with trailing spring physics to enhance visual feedback across interactive surfaces.',
        'Creating modular design systems inspired by cinematic universe aesthetics (dark charcoal, toxic lime, desert sand).',
        'Exploring Awwwards-grade digital storytelling techniques that make web development feel engaging and immersive.'
      ],
      tags: ['Web Audio API', 'Kinetic Typography', 'Micro-Interactions', 'Custom Reticle Cursors', 'Dark Aesthetics'],
      specLabel: 'EXP-AREA // INTERFACES'
    }
  ];

  const currentPanel = experimentPanels.find(p => p.id === activePanelId) || experimentPanels[0];

  return (
    <section id="creative" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header Strip */}
      <div className="mb-14 border-b border-lab-border/70 pb-6 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2 font-mono text-xs text-lab-toxic">
            <span className="w-8 h-[1px] bg-lab-toxic" />
            <span>EXPERIMENTAL WORKBENCH // SECTION 05</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-cinematic uppercase tracking-tight text-white leading-none">
            CREATIVE LAB <span className="text-lab-green glow-text">// BEYOND THE FORMULA</span>
          </h2>
          <p className="text-sm font-mono text-lab-sand mt-3 max-w-2xl">
            ACTIVE EXPLORATION DOMAINS &bull; 3D WORLDS, MACHINE INTELLIGENCE &amp; INTERACTIVE SYSTEM DESIGN
          </p>
        </div>

        {/* Global Diagnostic Tag */}
        <div className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 bg-lab-charcoal border border-lab-border rounded-sm text-xs font-mono">
          <Activity size={14} className="text-lab-toxic animate-pulse" />
          <span className="text-lab-muted">BENCH STATUS:</span>
          <span className="text-white font-bold">ALL CHAMBERS ACTIVE</span>
        </div>
      </div>

      {/* Main Grid: Interactive Experiment Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 3 Interactive Experiment Chamber Selectors (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono text-lab-sand uppercase font-bold tracking-wider mb-2 flex items-center gap-2">
            <Radio size={14} className="text-lab-green" />
            <span>SELECT EXPERIMENTATION CHAMBER:</span>
          </div>

          {experimentPanels.map((panel, idx) => {
            const PanelIcon = panel.icon;
            const isSelected = activePanelId === panel.id;
            return (
              <div
                key={panel.id}
                onClick={() => {
                  setActivePanelId(panel.id);
                  setMoleculeColor(panel.accentColor);
                }}
                className={`group p-5 rounded-sm border transition-all duration-300 cursor-pointer relative overflow-hidden backdrop-blur-md ${
                  isSelected
                    ? 'bg-lab-charcoal border-lab-green shadow-glow-sm scale-[1.01]'
                    : 'bg-lab-card/90 border-lab-border hover:border-lab-border-active hover:bg-lab-charcoal/60'
                }`}
              >
                {/* Active Neon Accent Left Edge */}
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-lab-toxic shadow-[0_0_10px_#B5E853]" />
                )}

                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-sm border ${
                      isSelected ? 'bg-lab-black border-lab-toxic text-lab-toxic' : 'bg-lab-charcoal border-lab-border text-lab-muted'
                    } transition-colors`}>
                      <PanelIcon size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-lab-sand block">0{idx + 1}. {panel.specLabel}</span>
                      <h3 className="text-xl sm:text-2xl font-cinematic uppercase tracking-wider text-white group-hover:text-lab-green transition-colors leading-none">
                        {panel.title}
                      </h3>
                    </div>
                  </div>

                  {/* Experimental Status Indicator */}
                  <div className="flex items-center gap-1.5 text-[9px] font-mono pt-1">
                    <span className={`w-2 h-2 rounded-full ${panel.beacon} ${isSelected ? 'animate-ping' : ''}`} />
                    <span className={`font-bold ${panel.statusColor}`}>[{panel.status}]</span>
                  </div>
                </div>

                <p className="text-xs font-sans text-gray-300 leading-relaxed font-light pl-11 line-clamp-2">
                  {panel.summary}
                </p>

                {/* Tags Strip */}
                <div className="mt-3 pl-11 flex flex-wrap gap-1.5">
                  {panel.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 bg-lab-black border border-lab-border text-lab-muted rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Authentic Exploration Philosophy Card */}
          <div className="p-4 bg-lab-charcoal/50 border border-lab-border/70 rounded-sm text-xs font-mono text-lab-muted space-y-1.5">
            <div className="flex items-center gap-2 text-lab-sand font-bold">
              <Sparkles size={14} className="text-lab-toxic" />
              <span>EXPLORATION DIRECTIVE:</span>
            </div>
            <p className="text-[11px] text-gray-300 leading-relaxed font-light">
              Presented as active areas of technical curiosity and ongoing experimentation at Newton School of Technology. No commercial projects or completed claims are asserted.
            </p>
          </div>
        </div>

        {/* Right Column: Detailed Experiment Chamber + Interactive 3D Visualizer (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Chamber Display Card */}
          <div className="bg-lab-card/90 border border-lab-green/80 rounded-sm p-6 sm:p-8 backdrop-blur-md shadow-glow-sm relative overflow-hidden">
            {/* Top Scanning Line Effect */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lab-toxic to-transparent animate-pulse pointer-events-none" />

            {/* Chamber Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-lab-border/60 pb-4 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-lab-toxic mb-1">
                  <span>// LABORATORY CHAMBER: {currentPanel.specLabel}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-cinematic uppercase tracking-wide text-white">
                  {currentPanel.title}
                </h3>
                <p className="text-xs font-mono text-lab-sand">
                  {currentPanel.subtitle}
                </p>
              </div>

              <div className="px-3 py-1 bg-lab-charcoal border border-lab-border rounded text-xs font-mono flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${currentPanel.beacon} animate-pulse`} />
                <span className="text-white font-bold">{currentPanel.status}</span>
              </div>
            </div>

            {/* Interactive 3D Molecular / Geometric Element */}
            <div className="mb-6 bg-lab-black/80 border border-lab-border rounded-sm overflow-hidden relative">
              <div className="p-3 border-b border-lab-border/40 flex flex-wrap items-center justify-between gap-3 text-xs font-mono bg-lab-charcoal/50">
                <div className="flex items-center gap-2 text-white">
                  <Atom size={16} className="text-lab-toxic animate-spin" />
                  <span>3D LATTICE SIMULATION</span>
                </div>

                {/* 3D Controls */}
                <div className="flex items-center gap-2 text-[11px]">
                  <button
                    onClick={() => setWireframeMode(!wireframeMode)}
                    className={`px-2 py-0.5 border rounded cursor-pointer transition-colors ${
                      wireframeMode ? 'bg-lab-toxic text-lab-black border-lab-toxic font-bold' : 'border-lab-border text-lab-muted hover:text-white'
                    }`}
                  >
                    WIREFRAME
                  </button>

                  <button
                    onClick={() => setRotationRate(r => r === 1.0 ? 2.5 : r === 2.5 ? 0.3 : 1.0)}
                    className="px-2 py-0.5 border border-lab-border text-lab-sand hover:text-white rounded cursor-pointer transition-colors flex items-center gap-1"
                  >
                    <RotateCcw size={12} />
                    <span>SPEED: {rotationRate}x</span>
                  </button>
                </div>
              </div>

              {/* Render 3D Canvas */}
              <InteractiveMolecule3D 
                reagentColor={currentPanel.accentColor} 
                wireframe={wireframeMode} 
                rotationSpeed={rotationRate} 
              />
            </div>

            {/* Exploratory Focus Points */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-mono text-lab-sand uppercase font-bold tracking-wider flex items-center gap-2">
                <Terminal size={14} className="text-lab-green" />
                <span>// CURRENT INVESTIGATIONS &amp; LEARNING INITIATIVES:</span>
              </h4>

              <div className="space-y-2.5">
                {currentPanel.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs font-mono text-gray-300 bg-lab-charcoal/50 p-3 rounded-sm border border-lab-border/40">
                    <span className="text-lab-green font-bold">&gt;</span>
                    <span className="leading-relaxed font-light">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* All Technologies / Concept Reagents */}
            <div>
              <h4 className="text-[10px] font-mono text-lab-muted uppercase font-bold tracking-wider mb-2">
                REAGENTS INVOLVED IN THIS CHAMBER:
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentPanel.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 bg-lab-charcoal border border-lab-border text-lab-toxic rounded-sm"
                  >
                    +{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
