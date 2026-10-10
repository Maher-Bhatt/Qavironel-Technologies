import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Hero3DArchitectureStackProps {
  className?: string;
}

export const Hero3DArchitectureStack: React.FC<Hero3DArchitectureStackProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeTier, setActiveTier] = useState<number>(0); // 0: All, 1: UI, 2: AI, 3: Core

  // Ref to pass activeTier into animation loop
  const activeTierRef = useRef<number>(0);
  activeTierRef.current = activeTier;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 7.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Master Rotation Group (Isometric tilt)
    const masterGroup = new THREE.Group();
    masterGroup.rotation.x = 0.35;
    masterGroup.rotation.y = -0.45;
    scene.add(masterGroup);

    // ─────────────────────────────────────────────────────────────
    // TIER 1 (TOP): SPATIAL UI & DIGITAL PRODUCT PLANE (Y = +1.4)
    // ─────────────────────────────────────────────────────────────
    const uiGroup = new THREE.Group();
    uiGroup.position.y = 1.4;
    masterGroup.add(uiGroup);

    // Frosted Glass Base Slab
    const slabGeo = new THREE.BoxGeometry(3.2, 0.08, 2.2);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#FFFFFF'),
      roughness: 0.12,
      metalness: 0.05,
      transmission: 0.88,
      ior: 1.5,
      thickness: 1.4,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.95
    });
    const uiSlab = new THREE.Mesh(slabGeo, glassMat);
    uiGroup.add(uiSlab);

    // UI Wireframe Elements on Top Slab
    const wireframeMat = new THREE.LineBasicMaterial({ color: new THREE.Color('#E0561B'), transparent: true, opacity: 0.65 });
    const uiBoxGeo = new THREE.BoxGeometry(1.2, 0.02, 0.8);
    const uiBoxEdges = new THREE.EdgesGeometry(uiBoxGeo);
    const uiWidget1 = new THREE.LineSegments(uiBoxEdges, wireframeMat);
    uiWidget1.position.set(-0.7, 0.06, -0.4);
    uiGroup.add(uiWidget1);

    const uiWidget2 = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1.2, 0.02, 0.6)), wireframeMat);
    uiWidget2.position.set(-0.7, 0.06, 0.5);
    uiGroup.add(uiWidget2);

    const uiWidget3 = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1.1, 0.02, 1.5)), wireframeMat);
    uiWidget3.position.set(0.75, 0.06, 0.05);
    uiGroup.add(uiWidget3);

    // ─────────────────────────────────────────────────────────────
    // TIER 2 (MIDDLE): APPLIED AI & NEURAL INFERENCE ENGINE (Y = 0.0)
    // ─────────────────────────────────────────────────────────────
    const aiGroup = new THREE.Group();
    aiGroup.position.y = 0.0;
    masterGroup.add(aiGroup);

    // Neural Lattice Slab (Tinted Translucent Obsidian)
    const neuralSlabMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#18181B'),
      roughness: 0.25,
      metalness: 0.3,
      transmission: 0.65,
      ior: 1.45,
      transparent: true,
      opacity: 0.88
    });
    const neuralSlab = new THREE.Mesh(slabGeo, neuralSlabMat);
    aiGroup.add(neuralSlab);

    // Neural Nodes & Synapses
    const nodeCount = 14;
    const nodeGeo = new THREE.SphereGeometry(0.07, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#E0561B'),
      emissive: new THREE.Color('#E0561B'),
      emissiveIntensity: 0.8,
      metalness: 0.8,
      roughness: 0.2
    });

    const nodePositions: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      const nx = (Math.random() - 0.5) * 2.6;
      const ny = 0.15 + Math.random() * 0.25;
      const nz = (Math.random() - 0.5) * 1.6;
      nodeMesh.position.set(nx, ny, nz);
      aiGroup.add(nodeMesh);
      nodePositions.push(new THREE.Vector3(nx, ny, nz));
    }

    // Connect nodes with synaptic lines
    const lineMat = new THREE.LineBasicMaterial({ color: new THREE.Color('#E0561B'), transparent: true, opacity: 0.4 });
    const lineGeo = new THREE.BufferGeometry();
    const linePoints: number[] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < 1.3) {
          linePoints.push(nodePositions[i].x, nodePositions[i].y, nodePositions[i].z);
          linePoints.push(nodePositions[j].x, nodePositions[j].y, nodePositions[j].z);
        }
      }
    }
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));
    const synapses = new THREE.LineSegments(lineGeo, lineMat);
    aiGroup.add(synapses);

    // Orbiting Vector Inference Rings
    const ringGeo = new THREE.TorusGeometry(1.6, 0.015, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({ color: new THREE.Color('#E0561B'), metalness: 0.9, roughness: 0.1 });
    const aiRing1 = new THREE.Mesh(ringGeo, ringMat);
    aiRing1.rotation.x = Math.PI / 2;
    aiGroup.add(aiRing1);

    // ─────────────────────────────────────────────────────────────
    // TIER 3 (BOTTOM): CLOUD INFRASTRUCTURE & SECURITY BEDROCK (Y = -1.4)
    // ─────────────────────────────────────────────────────────────
    const infraGroup = new THREE.Group();
    infraGroup.position.y = -1.4;
    masterGroup.add(infraGroup);

    // Solid Brushed Titanium Base Chassis
    const infraMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#0A0A0A'),
      metalness: 0.85,
      roughness: 0.2
    });
    const infraSlab = new THREE.Mesh(slabGeo, infraMat);
    infraGroup.add(infraSlab);

    // Server Matrix Grid on Bottom Slab
    const gridHelper = new THREE.GridHelper(2.6, 10, 0xE0561B, 0x3F3F46);
    gridHelper.position.y = 0.05;
    infraGroup.add(gridHelper);

    // ─────────────────────────────────────────────────────────────
    // CONNECTIVE DATA CONDUITS (LINKING ALL 3 TIERS TOGETHER)
    // ─────────────────────────────────────────────────────────────
    const conduitPositions = [
      [-1.3, -0.9],
      [1.3, -0.9],
      [-1.3, 0.9],
      [1.3, 0.9],
      [0.0, 0.0] // Center master pipeline
    ];

    const conduitGeo = new THREE.CylinderGeometry(0.025, 0.025, 3.2, 16);
    const conduitMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#E0561B'),
      emissive: new THREE.Color('#E0561B'),
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2
    });

    conduitPositions.forEach(([cx, cz]) => {
      const conduit = new THREE.Mesh(conduitGeo, conduitMat);
      conduit.position.set(cx, 0, cz);
      masterGroup.add(conduit);
    });

    // Flowing Energy Pulses along conduits
    const pulseGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const pulseMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#FFFFFF') });
    const pulses: { mesh: THREE.Mesh; x: number; z: number; speed: number; progress: number }[] = [];

    conduitPositions.forEach(([cx, cz], idx) => {
      const pMesh = new THREE.Mesh(pulseGeo, pulseMat);
      masterGroup.add(pMesh);
      pulses.push({
        mesh: pMesh,
        x: cx,
        z: cz,
        speed: 0.008 + idx * 0.003,
        progress: idx * 0.2
      });
    });

    // ─────────────────────────────────────────────────────────────
    // LIGHTING RIG
    // ─────────────────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const copperKeyLight = new THREE.PointLight('#E0561B', 22, 15);
    copperKeyLight.position.set(4, 4, 4);
    scene.add(copperKeyLight);

    const coolFillLight = new THREE.PointLight('#38BDF8', 8, 12);
    coolFillLight.position.set(-4, -2, 3);
    scene.add(coolFillLight);

    const overheadLight = new THREE.DirectionalLight(0xffffff, 1.8);
    overheadLight.position.set(0, 6, 4);
    scene.add(overheadLight);

    // ─────────────────────────────────────────────────────────────
    // INTERACTION & ANIMATION LOOP
    // ─────────────────────────────────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = -0.45;
    let targetRotX = 0.35;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      mouseX = nx * 1.5;
      mouseY = ny * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const startTime = performance.now() * 0.001;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = performance.now() * 0.001 - startTime;

      // Smooth camera perspective interpolation
      targetRotY += (-0.45 + mouseX * 0.6 - targetRotY) * 0.06;
      targetRotX += (0.35 + mouseY * 0.5 - targetRotX) * 0.06;

      masterGroup.rotation.y = targetRotY + Math.sin(t * 0.4) * 0.05;
      masterGroup.rotation.x = targetRotX + Math.cos(t * 0.3) * 0.03;

      // Rotate AI neural ring
      aiRing1.rotation.z = t * 0.25;

      // Pulse Energy flow along conduits
      pulses.forEach((pulse) => {
        pulse.progress += pulse.speed;
        if (pulse.progress > 1) pulse.progress = 0;
        // Y maps from -1.4 (Infra) to +1.4 (UI)
        const py = -1.4 + pulse.progress * 2.8;
        pulse.mesh.position.set(pulse.x, py, pulse.z);
      });

      // Active Tier Highlighting
      const tier = activeTierRef.current;
      uiGroup.position.y = 1.4 + (tier === 1 ? Math.sin(t * 3) * 0.08 + 0.15 : 0);
      aiGroup.position.y = 0.0 + (tier === 2 ? Math.sin(t * 3) * 0.08 : 0);
      infraGroup.position.y = -1.4 - (tier === 3 ? Math.sin(t * 3) * 0.08 + 0.15 : 0);

      // Dynamically move key copper light with cursor
      copperKeyLight.position.x = 4 + mouseX * 3;
      copperKeyLight.position.y = 4 - mouseY * 3;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      slabGeo.dispose();
      glassMat.dispose();
      neuralSlabMat.dispose();
      infraMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      conduitGeo.dispose();
      conduitMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center ${className}`}>
      {/* 3D WebGL Canvas */}
      <div
        ref={mountRef}
        className="w-full h-full min-h-[380px] sm:min-h-[440px] cursor-grab active:cursor-grabbing select-none"
        aria-label="3D Connected Product Architecture Engine: Spatial UI, Neural AI, and Cloud Infrastructure"
      />

      {/* Interactive Connected Architecture Tier Selector */}
      <div className="absolute bottom-2 inset-x-2 sm:inset-x-auto flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full glass-card border border-white/80 shadow-md backdrop-blur-md">
        <button
          type="button"
          onClick={() => setActiveTier(0)}
          className={`px-3 py-1 rounded-full text-[0.68rem] font-mono font-semibold transition-all ${
            activeTier === 0
              ? 'bg-[#E0561B] text-white shadow-xs'
              : 'text-[#52525B] hover:text-[#0A0A0A] hover:bg-white/60'
          }`}
        >
          ALL CONNECTED
        </button>
        <button
          type="button"
          onClick={() => setActiveTier(1)}
          className={`px-3 py-1 rounded-full text-[0.68rem] font-mono font-semibold transition-all ${
            activeTier === 1
              ? 'bg-[#0A0A0A] text-white shadow-xs'
              : 'text-[#52525B] hover:text-[#0A0A0A] hover:bg-white/60'
          }`}
        >
          01 · SPATIAL UI
        </button>
        <button
          type="button"
          onClick={() => setActiveTier(2)}
          className={`px-3 py-1 rounded-full text-[0.68rem] font-mono font-semibold transition-all ${
            activeTier === 2
              ? 'bg-[#0A0A0A] text-white shadow-xs'
              : 'text-[#52525B] hover:text-[#0A0A0A] hover:bg-white/60'
          }`}
        >
          02 · NEURAL AI
        </button>
        <button
          type="button"
          onClick={() => setActiveTier(3)}
          className={`px-3 py-1 rounded-full text-[0.68rem] font-mono font-semibold transition-all ${
            activeTier === 3
              ? 'bg-[#0A0A0A] text-white shadow-xs'
              : 'text-[#52525B] hover:text-[#0A0A0A] hover:bg-white/60'
          }`}
        >
          03 · CORE CLOUD
        </button>
      </div>
    </div>
  );
};
export default Hero3DArchitectureStack;
