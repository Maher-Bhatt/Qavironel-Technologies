import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Bot, Eye, Database, Shield, Cpu, Mic, Zap, CheckCircle2 } from 'lucide-react';
import { playClickSound } from '../../utils/soundEffects';

interface Hero3DArchitectureStackProps {
  className?: string;
}

export const Hero3DArchitectureStack: React.FC<Hero3DArchitectureStackProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeEngine, setActiveEngine] = useState<number>(0);

  const activeEngineRef = useRef<number>(0);
  activeEngineRef.current = activeEngine;

  const aiEngines = [
    {
      id: 0,
      label: 'ALL CONNECTED',
      name: 'Unified Multimodal AI Swarm',
      type: 'Autonomous Core',
      spec: '6-Engine Orchestration · Realtime Conduits',
      status: 'REALTIME STREAMING',
      metric: 'SUB-180MS LATENCY',
      icon: Zap
    },
    {
      id: 1,
      label: '01 · LLM',
      name: 'Groq LLaMA 3.3 70B & DeepSeek',
      type: 'Text & Logic',
      spec: 'High-Velocity Tokens · Guarded Output Schemas',
      status: 'PIPELINE ACTIVE',
      metric: '248 TOKENS/SEC',
      icon: Bot
    },
    {
      id: 2,
      label: '02 · VISION',
      name: 'K.A.L.K.I. Scout Vision & OCR',
      type: 'Spatial Perception',
      spec: 'Sub-second Desktop & Multimodal Extraction',
      status: 'SCANNING ACTIVE',
      metric: '60 FPS TELEMETRY',
      icon: Eye
    },
    {
      id: 3,
      label: '03 · MEMORY',
      name: 'ChromaDB Local Vector Vault',
      type: 'Contextual RAG',
      spec: 'High-Dimensional Embeddings & Fast Cosine Index',
      status: 'HARDWARE BOUND',
      metric: '1536-D VECTORS',
      icon: Database
    },
    {
      id: 4,
      label: '04 · AIR-GAP',
      name: 'Offline Ollama & DPAPI Vault',
      type: 'Zero-Cloud Security',
      spec: 'Hardware-Encrypted Daemon · 100% Private',
      status: 'AIR-GAPPED 100%',
      metric: 'ZERO CLOUD LEAKS',
      icon: Shield
    },
    {
      id: 5,
      label: '05 · AGENTS',
      name: 'Autonomous Tool-Calling Agents',
      type: 'Multi-Agent Swarm',
      spec: 'Sandboxed Shell Tools · Code Compilers',
      status: 'GUARDED AGENTS',
      metric: 'DYNAMIC ROUTING',
      icon: Cpu
    },
    {
      id: 6,
      label: '06 · VOICE',
      name: 'VOSK Offline Voice & Whisper',
      type: 'Acoustic Intelligence',
      spec: 'Local Wake-Word Listener · Sub-150ms STT',
      status: 'VAD ACTIVE',
      metric: '< 150MS STT',
      icon: Mic
    }
  ];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene, Camera, High-Precision WebGL Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0.2, 7.6);
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

    // Master Group anchored firmly in place
    const masterGroup = new THREE.Group();
    masterGroup.rotation.x = 0.24; // Fixed, elegant isometric view
    scene.add(masterGroup);

    // ─────────────────────────────────────────────────────────────
    // 02. UNIFIED LUXURY MATERIAL SYSTEM (Glass + Copper + Titanium)
    // ─────────────────────────────────────────────────────────────
    const frostedGlassMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#FFFFFF'),
      transmission: 0.94,
      roughness: 0.12,
      metalness: 0.05,
      ior: 1.52,
      thickness: 1.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.92
    });

    const copperEmissiveMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#E0561B'),
      emissive: new THREE.Color('#E0561B'),
      emissiveIntensity: 1.3,
      metalness: 0.85,
      roughness: 0.18
    });

    const titaniumMetalMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#27272A'),
      metalness: 0.92,
      roughness: 0.22
    });

    const copperWireMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#E0561B'),
      transparent: true,
      opacity: 0.75
    });

    // ─────────────────────────────────────────────────────────────
    // 03. CENTRAL OPTICAL NEURAL CORE
    // ─────────────────────────────────────────────────────────────
    const coreGroup = new THREE.Group();
    masterGroup.add(coreGroup);

    // Inner Glowing Copper Singularity
    const heartGeo = new THREE.SphereGeometry(0.48, 32, 32);
    const heartMesh = new THREE.Mesh(heartGeo, copperEmissiveMat);
    coreGroup.add(heartMesh);

    // Outer Faceted Optical Crystalline Cage (Icosahedron)
    const crystalGeo = new THREE.IcosahedronGeometry(0.92, 1);
    const crystalMesh = new THREE.Mesh(crystalGeo, frostedGlassMat);
    coreGroup.add(crystalMesh);

    // Crystalline Copper Wireframe Lines
    const crystalWire = new THREE.LineSegments(new THREE.EdgesGeometry(crystalGeo), copperWireMat);
    coreGroup.add(crystalWire);

    // Concentric Gyroscopic Titanium & Copper Rings
    const ring1Geo = new THREE.TorusGeometry(1.24, 0.014, 16, 90);
    const ring1 = new THREE.Mesh(ring1Geo, copperEmissiveMat);
    ring1.rotation.x = Math.PI / 2.6;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(1.38, 0.012, 16, 90);
    const ring2 = new THREE.Mesh(ring2Geo, titaniumMetalMat);
    ring2.rotation.y = Math.PI / 3.4;
    coreGroup.add(ring2);

    // ─────────────────────────────────────────────────────────────
    // 04. 6 BALANCED SATELLITE AI ENGINES (Cohesive Glass & Copper)
    // ─────────────────────────────────────────────────────────────
    const nodeDefinitions = [
      { id: 1, angle: 0, height: 0.35, dist: 1.85 },
      { id: 2, angle: Math.PI / 3, height: 0.65, dist: 1.95 },
      { id: 3, angle: (2 * Math.PI) / 3, height: -0.45, dist: 1.8 },
      { id: 4, angle: Math.PI, height: -0.65, dist: 1.9 },
      { id: 5, angle: (4 * Math.PI) / 3, height: 0.55, dist: 1.85 },
      { id: 6, angle: (5 * Math.PI) / 3, height: -0.35, dist: 1.95 },
    ];

    interface SatelliteInstance {
      id: number;
      group: THREE.Group;
      basePos: THREE.Vector3;
      mesh: THREE.Mesh;
      pulses: { mesh: THREE.Mesh; progress: number; speed: number }[];
    }

    const satellites: SatelliteInstance[] = [];
    const pulseGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const pulseMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#FFFFFF') });

    nodeDefinitions.forEach((def) => {
      const x = Math.cos(def.angle) * def.dist;
      const z = Math.sin(def.angle) * def.dist;
      const y = def.height;
      const pos = new THREE.Vector3(x, y, z);

      const sGroup = new THREE.Group();
      sGroup.position.copy(pos);
      masterGroup.add(sGroup);

      // Outer Frosted Glass Geometry
      const sGeo = new THREE.OctahedronGeometry(0.24);
      const sMesh = new THREE.Mesh(sGeo, frostedGlassMat.clone());
      sGroup.add(sMesh);

      // Inner Glowing Copper Core
      const innerCore = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), copperEmissiveMat);
      sGroup.add(innerCore);

      // Copper Wire Edge
      const sWire = new THREE.LineSegments(new THREE.EdgesGeometry(sGeo), copperWireMat);
      sGroup.add(sWire);

      // Laser Conduit Connecting to Center (0, 0, 0)
      const conduitLineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        pos
      ]);
      const conduitLine = new THREE.Line(
        conduitLineGeo, 
        new THREE.LineBasicMaterial({ color: new THREE.Color('#E0561B'), transparent: true, opacity: 0.45 })
      );
      masterGroup.add(conduitLine);

      // Data pulses traveling along conduit
      const nodePulses: { mesh: THREE.Mesh; progress: number; speed: number }[] = [];
      for (let p = 0; p < 2; p++) {
        const pMesh = new THREE.Mesh(pulseGeo, pulseMat);
        masterGroup.add(pMesh);
        nodePulses.push({
          mesh: pMesh,
          progress: p * 0.5,
          speed: 0.009 + Math.random() * 0.003
        });
      }

      satellites.push({
        id: def.id,
        group: sGroup,
        basePos: pos.clone(),
        mesh: sMesh,
        pulses: nodePulses
      });
    });

    // ─────────────────────────────────────────────────────────────
    // 05. AMBIENT SPATIAL DUST / LUMINANCE EMBERS (60 particles)
    // ─────────────────────────────────────────────────────────────
    const emberCount = 60;
    const emberGeo = new THREE.BufferGeometry();
    const emberPositions = new Float32Array(emberCount * 3);
    for (let i = 0; i < emberCount * 3; i += 3) {
      emberPositions[i] = (Math.random() - 0.5) * 5.5;
      emberPositions[i + 1] = (Math.random() - 0.5) * 4.5;
      emberPositions[i + 2] = (Math.random() - 0.5) * 5.0;
    }
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));
    const emberMat = new THREE.PointsMaterial({
      color: new THREE.Color('#E0561B'),
      size: 0.035,
      transparent: true,
      opacity: 0.5
    });
    const embers = new THREE.Points(emberGeo, emberMat);
    masterGroup.add(embers);

    // ─────────────────────────────────────────────────────────────
    // 06. STUDIO LIGHTING RIG
    // ─────────────────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const copperKeyLight = new THREE.PointLight('#E0561B', 22, 14);
    copperKeyLight.position.set(4, 4, 4);
    scene.add(copperKeyLight);

    const studioRimLight = new THREE.DirectionalLight('#FFFFFF', 1.8);
    studioRimLight.position.set(-4, 5, 3);
    scene.add(studioRimLight);

    // ─────────────────────────────────────────────────────────────
    // 07. STABILIZED 60 FPS ORBIT LOOP (NO ERRATIC MOUSE TILT)
    // ─────────────────────────────────────────────────────────────
    let animationFrameId: number;
    const startTime = performance.now() * 0.001;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = performance.now() * 0.001 - startTime;

      // Silky, authoritative continuous self-rotation (permanently anchored)
      masterGroup.rotation.y = t * 0.22;

      // Internal crystal counter-rotation
      crystalMesh.rotation.y = t * 0.35;
      crystalMesh.rotation.z = Math.sin(t * 0.4) * 0.12;
      crystalWire.rotation.y = t * 0.35;
      crystalWire.rotation.z = Math.sin(t * 0.4) * 0.12;

      // Gyroscopic rings rotation
      ring1.rotation.z = t * 0.45;
      ring2.rotation.x = -t * 0.35;

      // Pulsating central singularity
      const pulseScale = 1 + Math.sin(t * 3.2) * 0.06;
      heartMesh.scale.set(pulseScale, pulseScale, pulseScale);

      // Embers slow rotation
      embers.rotation.y = -t * 0.05;

      // Satellite animation & selected highlight
      const selected = activeEngineRef.current;
      satellites.forEach((sat) => {
        // Floating organic breath
        const bob = Math.sin(t * 2 + sat.id) * 0.05;
        sat.group.position.y = sat.basePos.y + bob;

        // Self-spin of satellite
        sat.mesh.rotation.x = t * 0.7 + sat.id;
        sat.mesh.rotation.y = t * 0.8 + sat.id;

        const isSelected = selected === sat.id;
        const isAll = selected === 0;

        const targetScale = isSelected ? 1.4 : isAll ? 1.0 : 0.75;
        sat.group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

        // Pulses along conduit
        sat.pulses.forEach((p) => {
          p.progress += p.speed * (isSelected ? 2.2 : 1.0);
          if (p.progress > 1) p.progress = 0;

          const pPos = new THREE.Vector3().lerpVectors(
            new THREE.Vector3(0, 0, 0),
            sat.group.position,
            p.progress
          );
          p.mesh.position.copy(pPos);
        });
      });

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
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleSelect = (idx: number) => {
    setActiveEngine(idx);
    try {
      playClickSound();
    } catch {
      // ignore
    }
  };

  const currentInfo = aiEngines[activeEngine];
  const IconComponent = currentInfo.icon;

  return (
    <div className={`relative flex flex-col items-center justify-between ${className}`}>
      {/* 3D WebGL Canvas Viewport (Rock-solid centered stability) */}
      <div 
        ref={mountRef} 
        className="w-full h-[320px] sm:h-[370px] lg:h-[390px] relative pointer-events-none"
        title="Qavironel Unified AI Intelligence Core · Stabilized 60 FPS Orbit"
      />

      {/* Top Floating Badge */}
      <div className="absolute top-2 left-2 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E5E7EB] shadow-xs text-[0.65rem] font-mono pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E0561B] animate-pulse" />
        <span className="font-bold text-[#0A0A0A]">MULTIPLE AI ECOSYSTEM</span>
        <span className="text-[#A1A1AA]">·</span>
        <span className="text-[#71717A]">6 CONCURRENT ENGINES</span>
      </div>

      {/* Bottom Interactive AI Engine Switcher & Telemetry Card */}
      <div className="w-full max-w-full px-2 pt-2 space-y-2 z-10">
        {/* Dynamic Telemetry Status Card for Selected Engine */}
        <div className="p-3 rounded-xl bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-[#E0561B]/10 border border-[#E0561B]/20 text-[#E0561B] flex items-center justify-center shrink-0">
              <IconComponent className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[#0A0A0A] truncate text-xs">{currentInfo.name}</span>
                <span className="text-[0.65rem] font-mono px-1.5 py-0.2 bg-[#F4F4F5] text-[#52525B] rounded border border-[#E5E7EB] hidden sm:inline">
                  {currentInfo.type}
                </span>
              </div>
              <p className="text-[0.68rem] text-[#71717A] truncate font-mono mt-0.5">{currentInfo.spec}</p>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[0.68rem] font-mono font-bold text-emerald-600 block">{currentInfo.status}</span>
            <span className="text-[0.65rem] font-mono text-[#E0561B] font-semibold">{currentInfo.metric}</span>
          </div>
        </div>

        {/* Interactive Selector Chips for all Multiple AI Engines */}
        <div className="flex flex-wrap items-center justify-center gap-1 p-1.5 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]">
          {aiEngines.map((engine) => {
            const isActive = activeEngine === engine.id;
            return (
              <button
                key={engine.id}
                type="button"
                onClick={() => handleSelect(engine.id)}
                className={`px-2.5 py-1 rounded-lg text-[0.65rem] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#E0561B] text-white font-bold shadow-xs'
                    : 'bg-white text-[#52525B] hover:text-[#0A0A0A] border border-[#E5E7EB] hover:border-[#E0561B]/40'
                }`}
              >
                {engine.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero3DArchitectureStack;
