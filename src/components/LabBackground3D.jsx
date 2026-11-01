import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function LabBackground3D({ scrollProgress = 0, mousePos = { x: 0, y: 0 } }) {
  const mountRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const sceneObjectsRef = useRef({});

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

    let width = currentMount.clientWidth || window.innerWidth;
    let height = currentMount.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060906, 0.038);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.1, 7.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    // 2. Cinematic Lighting Setup
    // Deep atmospheric ambient
    const ambientLight = new THREE.AmbientLight(0x0a140d, 2.2);
    scene.add(ambientLight);

    // Key amber overhead desert / lab ceiling light
    const overheadKeyLight = new THREE.DirectionalLight(0xc5a77a, 2.2);
    overheadKeyLight.position.set(4, 9, 5);
    overheadKeyLight.castShadow = true;
    overheadKeyLight.shadow.mapSize.width = 1024;
    overheadKeyLight.shadow.mapSize.height = 1024;
    scene.add(overheadKeyLight);

    // Sharp toxic lime rim light from back-left (gives glass rim silhouette)
    const rimLightBack = new THREE.DirectionalLight(0xb5e853, 3.2);
    rimLightBack.position.set(-5, 4, -4);
    scene.add(rimLightBack);

    // Subtle emerald side fill
    const sideFillLight = new THREE.DirectionalLight(0x80cc28, 1.6);
    sideFillLight.position.set(6, 2, 2);
    scene.add(sideFillLight);

    // Internal chemical glow light (inside the flask liquid)
    const liquidGlowLight = new THREE.PointLight(0xb5e853, 4.5, 7.5);
    liquidGlowLight.position.set(0, 0.9, 0);
    scene.add(liquidGlowLight);

    // Subtle bottom glow illuminating workbench
    const bottomGlowLight = new THREE.PointLight(0x80cc28, 2.0, 4);
    bottomGlowLight.position.set(0, -0.4, 0);
    scene.add(bottomGlowLight);

    // 3. Laboratory Workbench Surface Plane (anchors the flask in 3D space with shadows)
    const tableGeom = new THREE.PlaneGeometry(32, 24);
    const tableMat = new THREE.MeshStandardMaterial({
      color: 0x0c130e,
      roughness: 0.45,
      metalness: 0.55,
    });
    const tableMesh = new THREE.Mesh(tableGeom, tableMat);
    tableMesh.rotation.x = -Math.PI / 2;
    tableMesh.position.y = -1.55;
    tableMesh.receiveShadow = true;
    scene.add(tableMesh);

    // 4. Lab Flask Construction (Erlenmeyer Flask)
    const flaskGroup = new THREE.Group();
    scene.add(flaskGroup);

    // Flask Glass Outer Shape via LatheGeometry
    const flaskPoints = [];
    flaskPoints.push(new THREE.Vector2(0, -0.05));
    flaskPoints.push(new THREE.Vector2(1.7, -0.05));
    flaskPoints.push(new THREE.Vector2(1.76, 0.15));
    flaskPoints.push(new THREE.Vector2(1.6, 0.5));
    flaskPoints.push(new THREE.Vector2(0.66, 2.3));
    flaskPoints.push(new THREE.Vector2(0.5, 2.8));
    flaskPoints.push(new THREE.Vector2(0.5, 4.2));
    flaskPoints.push(new THREE.Vector2(0.64, 4.35));
    flaskPoints.push(new THREE.Vector2(0.64, 4.48));
    flaskPoints.push(new THREE.Vector2(0.48, 4.48));
    flaskPoints.push(new THREE.Vector2(0.46, 2.8));
    flaskPoints.push(new THREE.Vector2(0.6, 2.3));
    flaskPoints.push(new THREE.Vector2(1.5, 0.5));
    flaskPoints.push(new THREE.Vector2(1.6, 0.1));
    flaskPoints.push(new THREE.Vector2(0, 0.05));

    const flaskGeom = new THREE.LatheGeometry(flaskPoints, 54);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xf0fff4,
      metalness: 0.05,
      roughness: 0.08,
      transmission: 0.94,
      thickness: 0.6,
      transparent: true,
      opacity: 0.72,
      reflectivity: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      side: THREE.DoubleSide
    });
    const flaskMesh = new THREE.Mesh(flaskGeom, glassMat);
    flaskMesh.castShadow = true;
    flaskGroup.add(flaskMesh);

    // Flask Volume Measurement Marks (ring lines on the glass)
    const marksGroup = new THREE.Group();
    for (let i = 0; i < 5; i++) {
      const yPos = 0.65 + i * 0.42;
      const radius = 1.4 - i * 0.2;
      const ringGeom = new THREE.TorusGeometry(radius, 0.007, 8, 40, Math.PI * 0.75);
      const markMat = new THREE.MeshBasicMaterial({ color: 0xc5a77a, transparent: true, opacity: 0.75 });
      const markMesh = new THREE.Mesh(ringGeom, markMat);
      markMesh.rotation.x = Math.PI / 2;
      markMesh.rotation.z = Math.PI * 0.12;
      markMesh.position.y = yPos;
      marksGroup.add(markMesh);
    }
    flaskGroup.add(marksGroup);

    // Glowing Chemical Liquid inside (layered for depth)
    const liquidPoints = [];
    liquidPoints.push(new THREE.Vector2(0, 0.08));
    liquidPoints.push(new THREE.Vector2(1.56, 0.08));
    liquidPoints.push(new THREE.Vector2(1.56, 0.3));
    liquidPoints.push(new THREE.Vector2(1.32, 0.9));
    liquidPoints.push(new THREE.Vector2(1.02, 1.5));
    liquidPoints.push(new THREE.Vector2(0.86, 1.88)); // liquid surface level
    liquidPoints.push(new THREE.Vector2(0, 1.88));

    const liquidGeom = new THREE.LatheGeometry(liquidPoints, 42);
    const liquidMat = new THREE.MeshStandardMaterial({
      color: 0x80cc28,
      emissive: 0x489b14,
      emissiveIntensity: 0.95,
      roughness: 0.15,
      metalness: 0.1,
      transparent: true,
      opacity: 0.88,
      side: THREE.DoubleSide
    });
    const liquidMesh = new THREE.Mesh(liquidGeom, liquidMat);
    flaskGroup.add(liquidMesh);

    // Liquid surface meniscus disk with toxic neon edge
    const meniscusGeom = new THREE.CircleGeometry(0.86, 36);
    const meniscusMat = new THREE.MeshStandardMaterial({
      color: 0xb5e853,
      emissive: 0x76c924,
      emissiveIntensity: 1.1,
      roughness: 0.1,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide
    });
    const meniscusMesh = new THREE.Mesh(meniscusGeom, meniscusMat);
    meniscusMesh.rotation.x = -Math.PI / 2;
    meniscusMesh.position.y = 1.88;
    flaskGroup.add(meniscusMesh);

    // 5. Organic Chemical Bubbles inside liquid
    const bubbleCount = 55;
    const bubbleGeom = new THREE.SphereGeometry(0.042, 12, 12);
    const bubbleMat = new THREE.MeshStandardMaterial({
      color: 0xecffdc,
      emissive: 0xb5e853,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      transparent: true,
      opacity: 0.85
    });

    const bubbles = [];
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = new THREE.Mesh(bubbleGeom, bubbleMat);
      const rad = Math.random() * 0.92;
      const angle = Math.random() * Math.PI * 2;
      bubble.position.set(
        Math.cos(angle) * rad,
        0.18 + Math.random() * 1.68,
        Math.sin(angle) * rad
      );
      const scale = 0.35 + Math.random() * 0.85;
      bubble.scale.setScalar(scale);
      bubble.userData = {
        speed: 0.007 + Math.random() * 0.015,
        wobbleSpeed: 1.8 + Math.random() * 3.5,
        wobbleOffset: Math.random() * Math.PI * 2,
        initialRad: rad,
        angle: angle,
        baseScale: scale
      };
      flaskGroup.add(bubble);
      bubbles.push(bubble);
    }

    // 6. Volumetric Chemical Smoke / Fumes rising from neck
    const smokeTextureCanvas = document.createElement('canvas');
    smokeTextureCanvas.width = 128;
    smokeTextureCanvas.height = 128;
    const sCtx = smokeTextureCanvas.getContext('2d');
    const grad = sCtx.createRadialGradient(64, 64, 4, 64, 64, 60);
    grad.addColorStop(0, 'rgba(181, 232, 83, 0.85)');
    grad.addColorStop(0.25, 'rgba(128, 204, 40, 0.45)');
    grad.addColorStop(0.6, 'rgba(80, 150, 20, 0.15)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = grad;
    sCtx.fillRect(0, 0, 128, 128);

    const smokeTexture = new THREE.CanvasTexture(smokeTextureCanvas);
    const smokeCount = 42;
    const smokeParticles = [];
    const smokeGeom = new THREE.PlaneGeometry(0.75, 0.75);
    const smokeMat = new THREE.MeshBasicMaterial({
      map: smokeTexture,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const smokeGroup = new THREE.Group();
    for (let i = 0; i < smokeCount; i++) {
      const p = new THREE.Mesh(smokeGeom, smokeMat.clone());
      p.position.set(
        (Math.random() - 0.5) * 0.28,
        4.45 + Math.random() * 3.2,
        (Math.random() - 0.5) * 0.28
      );
      p.rotation.z = Math.random() * Math.PI * 2;
      p.scale.setScalar(0.4 + Math.random() * 1.6);
      p.userData = {
        speedY: 0.007 + Math.random() * 0.013,
        rotSpeed: (Math.random() - 0.5) * 0.012,
        driftX: (Math.random() - 0.5) * 0.005,
        fadeSpeed: 0.003 + Math.random() * 0.004
      };
      smokeGroup.add(p);
      smokeParticles.push(p);
    }
    flaskGroup.add(smokeGroup);

    // 7. Luminous Chemical Floating Spores & Desert Dust Motes
    const dustCount = 280;
    const dustGeom = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);
    const dustSizes = new Float32Array(dustCount);

    const toxicLimeColor = new THREE.Color(0xb5e853);
    const chemGreenColor = new THREE.Color(0x80cc28);
    const desertSandColor = new THREE.Color(0xc5a77a);

    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 24;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 14;

      const rand = Math.random();
      const chosenColor = rand > 0.6 ? toxicLimeColor : rand > 0.3 ? chemGreenColor : desertSandColor;
      dustColors[i * 3] = chosenColor.r;
      dustColors[i * 3 + 1] = chosenColor.g;
      dustColors[i * 3 + 2] = chosenColor.b;
      dustSizes[i] = 0.035 + Math.random() * 0.055;
    }

    dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    dustGeom.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));

    const dustMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const dustPointsMesh = new THREE.Points(dustGeom, dustMat);
    scene.add(dustPointsMesh);

    // 8. Background Molecular Lattice
    const moleculeGroup = new THREE.Group();
    const atomCount = 14;
    const atomMeshes = [];
    const atomGeom = new THREE.SphereGeometry(0.12, 16, 16);
    const atomMatGreen = new THREE.MeshStandardMaterial({
      color: 0x80cc28,
      emissive: 0x225508,
      roughness: 0.3
    });
    const atomMatCharcoal = new THREE.MeshStandardMaterial({
      color: 0x27382c,
      roughness: 0.5
    });

    for (let i = 0; i < atomCount; i++) {
      const atom = new THREE.Mesh(atomGeom, (i % 2 === 0) ? atomMatGreen : atomMatCharcoal);
      const angle = (i / atomCount) * Math.PI * 2;
      const radius = 2.4 + Math.sin(i * 1.5) * 0.8;
      atom.position.set(
        Math.cos(angle) * radius,
        Math.sin(i * 2) * 1.2,
        Math.sin(angle) * radius
      );
      moleculeGroup.add(atom);
      atomMeshes.push(atom);
    }

    for (let i = 0; i < atomCount; i++) {
      const nextIdx = (i + 1) % atomCount;
      const p1 = atomMeshes[i].position;
      const p2 = atomMeshes[nextIdx].position;
      const dist = p1.distanceTo(p2);
      const bondGeom = new THREE.CylinderGeometry(0.018, 0.018, dist, 8);
      const bondMat = new THREE.MeshBasicMaterial({ color: 0x1f2b21, transparent: true, opacity: 0.4 });
      const bond = new THREE.Mesh(bondGeom, bondMat);
      bond.position.copy(p1).add(p2).multiplyScalar(0.5);
      bond.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), p2.clone().sub(p1).normalize());
      moleculeGroup.add(bond);
    }

    moleculeGroup.position.set(4.5, 0, -4);
    scene.add(moleculeGroup);

    // 9. Position & Responsive Layout Logic
    // On desktop, flask is positioned proudly on the right side: x = 2.2, y = -1.0
    // On mobile / small screens, flask is subtly placed at x = 0, y = -1.8 so text has full priority
    const getResponsiveConfig = (w) => {
      const isDesktop = w >= 1024;
      const isTablet = w >= 768 && w < 1024;
      return {
        isDesktop,
        heroFlaskX: isDesktop ? 2.2 : isTablet ? 1.4 : 0.0,
        heroFlaskY: isDesktop ? -1.05 : -1.8,
        heroFlaskZ: isDesktop ? 0.2 : -0.8,
        heroFlaskScale: isDesktop ? 1.05 : isTablet ? 0.85 : 0.72,
        cameraZ: isDesktop ? 7.6 : 8.5
      };
    };

    let responsive = getResponsiveConfig(width);
    flaskGroup.position.set(responsive.heroFlaskX, responsive.heroFlaskY, responsive.heroFlaskZ);
    flaskGroup.scale.setScalar(responsive.heroFlaskScale);
    tableMesh.position.x = responsive.heroFlaskX;

    sceneObjectsRef.current = {
      scene,
      camera,
      renderer,
      flaskGroup,
      tableMesh,
      bubbles,
      smokeParticles,
      dustPointsMesh,
      moleculeGroup,
      liquidGlowLight,
      meniscusMesh
    };

    // 10. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();
    let isTabVisible = true;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isTabVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth bubble dynamics (suppressed if reduced motion is preferred)
      if (!prefersReducedMotion) {
        bubbles.forEach(b => {
          b.position.y += b.userData.speed;
          const wobble = Math.sin(elapsedTime * b.userData.wobbleSpeed + b.userData.wobbleOffset) * 0.035;
          const currentRad = b.userData.initialRad * (1 - (b.position.y / 2.3) * 0.45);
          b.position.x = Math.cos(b.userData.angle) * currentRad + wobble;
          b.position.z = Math.sin(b.userData.angle) * currentRad;

          // Subtle scale growth as bubble climbs to surface
          const progress = Math.min(1, b.position.y / 1.86);
          b.scale.setScalar(b.userData.baseScale * (1 + progress * 0.4));

          // Reset bubble when reaching meniscus
          if (b.position.y > 1.86) {
            b.position.y = 0.16;
            b.userData.angle = Math.random() * Math.PI * 2;
          }
        });

        // Smooth chemical smoke billowing
        smokeParticles.forEach(p => {
          p.position.y += p.userData.speedY;
          p.position.x += p.userData.driftX + Math.sin(elapsedTime * 1.8 + p.position.y * 1.2) * 0.0025;
          p.rotation.z += p.userData.rotSpeed;
          p.scale.x += 0.0035;
          p.scale.y += 0.0035;

          // Graceful fade out
          const climbDist = p.position.y - 4.45;
          p.material.opacity = Math.max(0, 0.42 - climbDist * 0.11);

          if (p.position.y > 7.8 || p.material.opacity <= 0.01) {
            p.position.y = 4.45;
            p.position.x = (Math.random() - 0.5) * 0.22;
            p.position.z = (Math.random() - 0.5) * 0.22;
            p.scale.setScalar(0.4 + Math.random() * 0.4);
            p.material.opacity = 0.4;
          }
        });

        // Subtle meniscus liquid wave pulse
        meniscusMesh.position.y = 1.88 + Math.sin(elapsedTime * 2.8) * 0.012;

        // Internal liquid glow pulse
        liquidGlowLight.intensity = 4.2 + Math.sin(elapsedTime * 3.5) * 0.7;

        // Molecule gentle rotation
        moleculeGroup.rotation.y = elapsedTime * 0.12;
        moleculeGroup.rotation.x = Math.sin(elapsedTime * 0.08) * 0.15;

        // Ambient motes drift
        dustPointsMesh.rotation.y = elapsedTime * 0.025;
      }

      // Micro float for the flask
      const floatY = prefersReducedMotion ? 0 : Math.sin(elapsedTime * 1.4) * 0.05;

      // Mouse Parallax Lerping
      const targetRotY = prefersReducedMotion ? 0 : mousePos.x * 0.35;
      const targetRotX = prefersReducedMotion ? 0 : mousePos.y * 0.2;
      flaskGroup.rotation.y += (targetRotY - flaskGroup.rotation.y) * 0.05;
      flaskGroup.rotation.x += (targetRotX - flaskGroup.rotation.x) * 0.05;

      // Scroll choreography interpolated smoothly
      const scrollShiftX = scrollProgress > 0 ? (1 - scrollProgress) * responsive.heroFlaskX : responsive.heroFlaskX;
      const targetFlaskY = responsive.heroFlaskY + floatY - scrollProgress * 1.2;

      flaskGroup.position.x += (scrollShiftX - flaskGroup.position.x) * 0.06;
      flaskGroup.position.y += (targetFlaskY - flaskGroup.position.y) * 0.06;
      tableMesh.position.x = flaskGroup.position.x;

      const targetCamX = prefersReducedMotion ? 0 : (mousePos.x * 0.25);
      const targetCamY = 1.1 - scrollProgress * 1.6 + (prefersReducedMotion ? 0 : mousePos.y * 0.15);
      const targetCamZ = responsive.cameraZ + scrollProgress * 2.2;

      camera.position.x += (targetCamX - camera.position.x) * 0.05;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.position.z += (targetCamZ - camera.position.z) * 0.05;
      camera.lookAt(flaskGroup.position.x * 0.25, 0.5 - scrollProgress * 0.4, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 11. Tab Visibility and Pause Handling
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        clock.start();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 12. Responsive Resize Handler
    const handleResize = () => {
      if (!mountRef.current) return;
      width = mountRef.current.clientWidth || window.innerWidth;
      height = mountRef.current.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      responsive = getResponsiveConfig(width);
      flaskGroup.scale.setScalar(responsive.heroFlaskScale);
      camera.position.z = responsive.cameraZ;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      flaskGeom.dispose();
      liquidGeom.dispose();
      meniscusGeom.dispose();
      glassMat.dispose();
      liquidMat.dispose();
      tableGeom.dispose();
      tableMat.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hasWebGL ? (
        <div ref={mountRef} className="w-full h-full" />
      ) : (
        <div className="w-full h-full bg-lab-black flex items-center justify-center">
          <div className="w-72 h-72 rounded-full border border-lab-green/30 bg-lab-green/5 blur-3xl animate-pulse" />
        </div>
      )}
    </div>
  );
}
