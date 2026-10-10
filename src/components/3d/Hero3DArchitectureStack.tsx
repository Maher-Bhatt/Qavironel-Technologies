import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Bot, Eye, Database, Shield, Cpu, Mic, Zap, CheckCircle2 } from 'lucide-react';
import { playClickSound } from '../../utils/soundEffects';

interface Hero3DArchitectureStackProps {
  className?: string;
}

export const Hero3DArchitectureStack: React.FC<Hero3DArchitectureStackProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeEngine, setActiveEngine] = useState<number>(0); // 0: All Connected Swarm, 1: LLM, 2: Vision, 3: Vector, 4: Air-Gap, 5: Agents, 6: Voice

  const activeEngineRef = useRef<number>(0);
  activeEngineRef.current = activeEngine;

  const aiEngines = [
    {
      id: 0,
      shortLabel: 'ALL CONNECTED',
      name: 'Unified Multimodal AI Swarm',
      type: 'Autonomous Core',
      spec: '6-Engine Orchestration · Synchronized Conduits',
      status: 'REALTIME STREAMING',
      throughput: 'SUB-200MS LATENCY',
      icon: Zap
    },
    {
      id: 1,
      shortLabel: '01 · LLM REASONING',
      name: 'Groq LLaMA 3.3 70B & DeepSeek',
      type: 'Text & Logic Inference',
      spec: 'High-Velocity Tokens · Guarded Output Schemas',
      status: 'ACTIVE PIPELINE',
      throughput: '248 TOKENS/SEC',
      icon: Bot
    },
    {
      id: 2,
      shortLabel: '02 · VISION & HUD',
      name: 'K.A.L.K.I. Scout Vision & OCR',
      type: 'Spatial Perception',
      spec: 'Sub-second Desktop & Screen Multimodal Extraction',
      status: 'SCANNING ACTIVE',
      throughput: '60 FPS TELEMETRY',
      icon: Eye
    },
    {
      id: 3,
      shortLabel: '03 · VECTOR VAULT',
      name: 'ChromaDB Local Vector Memory',
      type: 'Contextual RAG Vault',
      spec: 'High-Dimensional Embeddings & Fast Cosine Index',
      status: 'HARDWARE BOUND',
      throughput: '1536-D EMBEDDINGS',
      icon: Database
    },
    {
      id: 4,
      shortLabel: '04 · LOCAL AIR-GAP',
      name: 'Offline Ollama & DPAPI Vault',
      type: 'Zero-Cloud Sovereignty',
      spec: 'Hardware-Encrypted Daemon · Air-Gapped Localhost',
      status: 'ZERO CLOUD LEAKS',
      throughput: 'LOCAL DAEMON',
      icon: Shield
    },
    {
      id: 5,
      shortLabel: '05 · AGENT SWARM',
      name: 'Autonomous Tool-Calling Agents',
      type: 'Multi-Agent Execution',
      spec: 'Sandboxed Shell Tools · Code Compilers & Verification',
      status: 'GUARDED EXECUTION',
      throughput: 'DYNAMIC ROUTING',
      icon: Cpu
    },
    {
      id: 6,
      shortLabel: '06 · VOICE VAD',
      name: 'VOSK Offline Voice & Whisper',
      type: 'Acoustic Intelligence',
      spec: 'Local Wake-Word Listener · Sub-150ms Speech-To-Text',
      status: 'LISTENING ENGINE',
      throughput: '< 150MS STT',
      icon: Mic
    }
  ];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene, Camera, High-Performance Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0.4, 7.2);
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
    // Elegant, stable isometric elevation
    masterGroup.rotation.x = 0.22;
    scene.add(masterGroup);

    // ─────────────────────────────────────────────────────────────
    // 01. CENTRAL MULTIMODAL NEURAL CORE (Unified Intelligence)
    // ─────────────────────────────────────────────────────────────
    const coreGroup = new THREE.Group();
    masterGroup.add(coreGroup);

    // Inner Glowing Pulsating Plasma Heart
    const heartGeo = new THREE.SphereGeometry(0.52, 32, 32);
    const heartMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#E0561B'),
      emissive: new THREE.Color('#E0561B'),
      emissiveIntensity: 1.4,
      roughness: 0.2,
      metalness: 0.8
    });
    const heartMesh = new THREE.Mesh(heartGeo, heartMat);
    coreGroup.add(heartMesh);

    // Outer Translucent Crystalline Diamond Cage (Icosahedron)
    const crystalGeo = new THREE.IcosahedronGeometry(0.88, 1);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#18181B'),
      roughness: 0.12,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.52,
      transparent: true,
      opacity: 0.92
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    coreGroup.add(crystalMesh);

    // Edge wireframe in signature copper
    const crystalWireGeo = new THREE.EdgesGeometry(crystalGeo);
    const crystalWireMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#E0561B'),
      transparent: true,
      opacity: 0.8
    });
    const crystalWire = new THREE.LineSegments(crystalWireGeo, crystalWireMat);
    coreGroup.add(crystalWire);

    // Gyroscopic Ring 1
    const ring1Geo = new THREE.TorusGeometry(1.22, 0.012, 16, 80);
    const ringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#E0561B'), transparent: true, opacity: 0.5 });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat);
    ring1.rotation.x = Math.PI / 2.8;
    coreGroup.add(ring1);

    // Gyroscopic Ring 2
    const ring2Geo = new THREE.TorusGeometry(1.36, 0.012, 16, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#A1A1AA'), transparent: true, opacity: 0.35 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 3.2;
    coreGroup.add(ring2);

    // ─────────────────────────────────────────────────────────────
    // 02. MULTIPLE SATELLITE AI SUBSYSTEMS (6 Distinct Engines)
    // ─────────────────────────────────────────────────────────────
    const nodeDefinitions = [
      { id: 1, pos: new THREE.Vector3(1.85, 0.65, 0.3), color: '#E0561B', name: 'LLM Reasoning', shape: 'dodeca' },
      { id: 2, pos: new THREE.Vector3(-1.75, 0.85, -0.4), color: '#38BDF8', name: 'Vision & HUD', shape: 'octa' },
      { id: 3, pos: new THREE.Vector3(1.45, -1.05, 0.85), color: '#10B981', name: 'Vector Vault', shape: 'cube' },
      { id: 4, pos: new THREE.Vector3(-1.55, -0.95, 0.75), color: '#F59E0B', name: 'Local Air-Gap', shape: 'sphere' },
      { id: 5, pos: new THREE.Vector3(0.1, 1.75, -0.75), color: '#8B5CF6', name: 'Agent Swarm', shape: 'icosa' },
      { id: 6, pos: new THREE.Vector3(-0.35, -1.55, -0.85), color: '#EC4899', name: 'Voice VAD', shape: 'torus' }
    ];

    interface EngineNodeInstance {
      id: number;
      group: THREE.Group;
      coreMesh: THREE.Mesh;
      basePos: THREE.Vector3;
      conduitLine: THREE.Line;
      pulses: { mesh: THREE.Mesh; progress: number; speed: number }[];
    }

    const engineNodes: EngineNodeInstance[] = [];

    // Materials
    const conduitMat = new THREE.LineBasicMaterial({ color: new THREE.Color('#E0561B'), transparent: true, opacity: 0.45 });
    const pulseMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#FFFFFF') });
    const pulseGeo = new THREE.SphereGeometry(0.045, 12, 12);

    nodeDefinitions.forEach((def) => {
      const nodeGroup = new THREE.Group();
      nodeGroup.position.copy(def.pos);
      masterGroup.add(nodeGroup);

      let geo: THREE.BufferGeometry;
      if (def.shape === 'dodeca') {
        geo = new THREE.DodecahedronGeometry(0.22);
      } else if (def.shape === 'octa') {
        geo = new THREE.OctahedronGeometry(0.22);
      } else if (def.shape === 'cube') {
        geo = new THREE.BoxGeometry(0.26, 0.26, 0.26);
      } else if (def.shape === 'sphere') {
        geo = new THREE.SphereGeometry(0.2, 16, 16);
      } else if (def.shape === 'icosa') {
        geo = new THREE.IcosahedronGeometry(0.22);
      } else {
        geo = new THREE.TorusGeometry(0.18, 0.05, 12, 24);
      }

      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(def.color),
        emissive: new THREE.Color(def.color),
        emissiveIntensity: 0.9,
        metalness: 0.7,
        roughness: 0.25
      });
      const coreMesh = new THREE.Mesh(geo, mat);
      nodeGroup.add(coreMesh);

      // Mini wireframe halo around satellite
      const wire = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo),
        new THREE.LineBasicMaterial({ color: new THREE.Color(def.color), transparent: true, opacity: 0.6 })
      );
      nodeGroup.add(wire);

      // Conduits connecting this node to the central core (0, 0, 0)
      const conduitLineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        def.pos
      ]);
      const conduitLine = new THREE.Line(conduitLineGeo, conduitMat.clone());
      masterGroup.add(conduitLine);

      // 2 data pulses traveling along the conduit
      const nodePulses: { mesh: THREE.Mesh; progress: number; speed: number }[] = [];
      for (let p = 0; p < 2; p++) {
        const pMesh = new THREE.Mesh(pulseGeo, pulseMat);
        masterGroup.add(pMesh);
        nodePulses.push({
          mesh: pMesh,
          progress: p * 0.5,
          speed: 0.009 + Math.random() * 0.004
        });
      }

      engineNodes.push({
        id: def.id,
        group: nodeGroup,
        coreMesh,
        basePos: def.pos.clone(),
        conduitLine,
        pulses: nodePulses
      });
    });

    // ─────────────────────────────────────────────────────────────
    // 03. LIGHTING RIG
    // ─────────────────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const copperKeyLight = new THREE.PointLight('#E0561B', 20, 14);
    copperKeyLight.position.set(3.5, 3.5, 3.5);
    scene.add(copperKeyLight);

    const cyanRimLight = new THREE.PointLight('#38BDF8', 9, 12);
    cyanRimLight.position.set(-3.5, -2.5, 2.5);
    scene.add(cyanRimLight);

    const overheadLight = new THREE.DirectionalLight(0xffffff, 1.6);
    overheadLight.position.set(0, 5, 4);
    scene.add(overheadLight);

    // ─────────────────────────────────────────────────────────────
    // 04. SMOOTH & STABILIZED 60 FPS ANIMATION LOOP (NO WILD MOUSE TILT)
    // ─────────────────────────────────────────────────────────────
    // Only a tiny clamped micro-drift when hovering directly inside the canvas container
    let containerHovered = false;
    let localMouseX = 0;
    let localMouseY = 0;

    const handleMouseEnter = () => { containerHovered = true; };
    const handleMouseLeave = () => { 
      containerHovered = false; 
      localMouseX = 0; 
      localMouseY = 0; 
    };
    const handleContainerMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      // Clamped micro-parallax only (max 0.03 rad) - rock-solid stability!
      localMouseX = THREE.MathUtils.clamp(nx * 0.06, -0.04, 0.04);
      localMouseY = THREE.MathUtils.clamp(ny * 0.06, -0.04, 0.04);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mousemove', handleContainerMouseMove);

    let animationFrameId: number;
    const startTime = performance.now() * 0.001;

    let targetRotY = 0;
    let currentDriftX = 0;
    let currentDriftY = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = performance.now() * 0.001 - startTime;

      // 1. Calm, steady, authoritative 60 FPS self-rotation (stays in one place!)
      targetRotY = t * 0.22;

      // Extremely subtle, damped micro-drift only if mouse is inside container
      currentDriftX += (localMouseX - currentDriftX) * 0.04;
      currentDriftY += (localMouseY - currentDriftY) * 0.04;

      masterGroup.rotation.y = targetRotY + currentDriftX;
      masterGroup.rotation.x = 0.22 + currentDriftY;

      // 2. Rotate central core crystal and rings
      crystalMesh.rotation.y = t * 0.35;
      crystalMesh.rotation.z = Math.sin(t * 0.5) * 0.15;
      crystalWire.rotation.y = t * 0.35;
      crystalWire.rotation.z = Math.sin(t * 0.5) * 0.15;

      ring1.rotation.z = t * 0.4;
      ring2.rotation.x = -t * 0.3;

      // Pulse central plasma heart
      const heartScale = 1 + Math.sin(t * 3.5) * 0.06;
      heartMesh.scale.set(heartScale, heartScale, heartScale);

      // 3. Update all 6 Multiple AI Satellite Nodes
      const selected = activeEngineRef.current;

      engineNodes.forEach((node) => {
        // Subtle organic floating bob for each AI node
        const bob = Math.sin(t * 2 + node.id) * 0.06;
        node.group.position.y = node.basePos.y + bob;

        // Slow self-spin of satellite
        node.coreMesh.rotation.x = t * 0.8 + node.id;
        node.coreMesh.rotation.y = t * 0.9 + node.id;

        // Highlight selected node, softly dim others when an engine is selected
        const isSelected = selected === node.id;
        const isAll = selected === 0;

        const targetScale = isSelected ? 1.45 : isAll ? 1.0 : 0.75;
        node.group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

        // Update Pulses along conduits
        node.pulses.forEach((p) => {
          p.progress += p.speed * (isSelected ? 2.0 : 1.0);
          if (p.progress > 1) p.progress = 0;

          // Interpolate between Core (0, 0, 0) and Node Position
          const pulsePos = new THREE.Vector3().lerpVectors(
            new THREE.Vector3(0, 0, 0),
            node.group.position,
            p.progress
          );
          p.mesh.position.copy(pulsePos);
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
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mousemove', handleContainerMouseMove);
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
        className="w-full h-[320px] sm:h-[380px] lg:h-[400px] cursor-grab active:cursor-grabbing relative"
        title="Qavironel Unified AI Intelligence Core · Stabilized 60 FPS Orbit"
      />

      {/* Top Floating Badge */}
      <div className="absolute top-2 left-2 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E5E7EB] shadow-xs text-[0.65rem] font-mono pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E0561B] animate-pulse" />
        <span className="font-bold text-[#0A0A0A]">MULTIPLE AI ECOSYSTEM</span>
        <span className="text-[#A1A1AA]">·</span>
        <span className="text-[#71717A]">6 CONNECTED ENGINES</span>
      </div>

      {/* Bottom Interactive AI Engine Switcher & Telemetry Card */}
      <div className="w-full max-w-full px-2 pt-2 space-y-2 z-10">
        {/* Dynamic Telemetry Status Card for Selected Engine */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-between gap-3 text-xs">
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
            <span className="text-[0.65rem] font-mono text-[#E0561B] font-semibold">{currentInfo.throughput}</span>
          </div>
        </div>

        {/* Interactive Selector Chips for all Multiple AI Engines */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB]">
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
                {engine.shortLabel}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Hero3DArchitectureStack;
