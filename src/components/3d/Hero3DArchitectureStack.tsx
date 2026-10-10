import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DArchitectureStackProps {
  className?: string;
}

/**
 * Hero3DArchitectureStack
 * A singular, tranquil, high-craft 3D digital sculpture matching Qavironel's 
 * signature luxury studio palette: frosted optical glass, radiant copper (#E0561B), 
 * and brushed titanium.
 * 
 * Anchored in place with a calm, continuous 60 FPS orbit.
 * Zero clutter, zero text labels, zero chips — pure architectural craftsmanship.
 */
export const Hero3DArchitectureStack: React.FC<Hero3DArchitectureStackProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene, Camera, High-Precision WebGL Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0.3, 7.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Master Group anchored firmly in place (fixed isometric angle)
    const masterGroup = new THREE.Group();
    masterGroup.rotation.x = 0.22;
    scene.add(masterGroup);

    // ─────────────────────────────────────────────────────────────
    // UNIFIED LUXURY MATERIAL SYSTEM (Glass + Radiant Copper + Titanium)
    // ─────────────────────────────────────────────────────────────
    const frostedGlassMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#FFFFFF'),
      transmission: 0.95,
      roughness: 0.1,
      metalness: 0.04,
      ior: 1.54,
      thickness: 1.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transparent: true,
      opacity: 0.92
    });

    const copperCoreMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#E0561B'),
      emissive: new THREE.Color('#E0561B'),
      emissiveIntensity: 1.4,
      metalness: 0.85,
      roughness: 0.15
    });

    const copperWireMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#E0561B'),
      transparent: true,
      opacity: 0.65
    });

    const titaniumRingMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#27272A'),
      metalness: 0.92,
      roughness: 0.2
    });

    const copperRingMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#E0561B'),
      emissive: new THREE.Color('#E0561B'),
      emissiveIntensity: 0.35,
      metalness: 0.9,
      roughness: 0.18
    });

    // ─────────────────────────────────────────────────────────────
    // SINGULAR ARCHITECTURAL SCULPTURE
    // ─────────────────────────────────────────────────────────────
    const sculptureGroup = new THREE.Group();
    masterGroup.add(sculptureGroup);

    // 1. Inner Radiant Copper Core (The Soul)
    const innerCoreGeo = new THREE.SphereGeometry(0.58, 36, 36);
    const innerCore = new THREE.Mesh(innerCoreGeo, copperCoreMat);
    sculptureGroup.add(innerCore);

    // 2. Optical Frosted Glass Rhombic Polyhedron
    const crystalGeo = new THREE.IcosahedronGeometry(1.22, 1);
    const crystalMesh = new THREE.Mesh(crystalGeo, frostedGlassMat);
    sculptureGroup.add(crystalMesh);

    // 3. Delicate Copper Chamfer Edges
    const crystalWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(crystalGeo), 
      copperWireMat
    );
    sculptureGroup.add(crystalWire);

    // 4. Concentric Gyroscopic Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(1.68, 0.022, 20, 100);
    const ring1 = new THREE.Mesh(ring1Geo, copperRingMat);
    ring1.rotation.x = Math.PI / 2.8;
    sculptureGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(1.88, 0.018, 20, 100);
    const ring2 = new THREE.Mesh(ring2Geo, titaniumRingMat);
    ring2.rotation.y = Math.PI / 3.2;
    sculptureGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(2.05, 0.012, 16, 90);
    const ring3 = new THREE.Mesh(ring3Geo, copperWireMat as any);
    ring3.rotation.z = Math.PI / 4;
    sculptureGroup.add(ring3);

    // 5. Ambient Suspended Luminous Copper Embers (36 micro-particles)
    const emberCount = 36;
    const emberGeo = new THREE.BufferGeometry();
    const emberPositions = new Float32Array(emberCount * 3);
    for (let i = 0; i < emberCount * 3; i += 3) {
      emberPositions[i] = (Math.random() - 0.5) * 4.6;
      emberPositions[i + 1] = (Math.random() - 0.5) * 4.2;
      emberPositions[i + 2] = (Math.random() - 0.5) * 4.4;
    }
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));
    const emberMat = new THREE.PointsMaterial({
      color: new THREE.Color('#E0561B'),
      size: 0.045,
      transparent: true,
      opacity: 0.55
    });
    const embers = new THREE.Points(emberGeo, emberMat);
    sculptureGroup.add(embers);

    // ─────────────────────────────────────────────────────────────
    // STUDIO LIGHTING RIG
    // ─────────────────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const copperKeyLight = new THREE.PointLight('#E0561B', 25, 14);
    copperKeyLight.position.set(4, 4, 4);
    scene.add(copperKeyLight);

    const rimLight = new THREE.DirectionalLight('#FFFFFF', 1.8);
    rimLight.position.set(-4, 5, 3);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight('#FFFFFF', 8, 10);
    fillLight.position.set(0, -3, 2);
    scene.add(fillLight);

    // ─────────────────────────────────────────────────────────────
    // SMOOTH 60 FPS ANIMATION LOOP (Pauses offscreen)
    // ─────────────────────────────────────────────────────────────
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const t = clock.getElapsedTime();

      // Calm, continuous, synchronized orbit
      sculptureGroup.rotation.y += delta * 0.28;
      
      // Independent gentle counter-rotation of gyroscopic rings
      ring1.rotation.z += delta * 0.35;
      ring2.rotation.x += delta * 0.22;
      ring3.rotation.y += delta * 0.18;

      // Soft breathing emissive pulse on the core
      const pulse = 1.2 + Math.sin(t * 1.8) * 0.25;
      copperCoreMat.emissiveIntensity = pulse;

      // Subtle float oscillation
      sculptureGroup.position.y = Math.sin(t * 0.8) * 0.08;

      // Gentle drift of embers
      embers.rotation.y -= delta * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // ─────────────────────────────────────────────────────────────
    // RESIZE LISTENER
    // ─────────────────────────────────────────────────────────────
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
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      crystalGeo.dispose();
      innerCoreGeo.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      ring3Geo.dispose();
      emberGeo.dispose();
      frostedGlassMat.dispose();
      copperCoreMat.dispose();
      titaniumRingMat.dispose();
      copperRingMat.dispose();
    };
  }, []);

  return (
    <div 
      className={`relative w-full flex items-center justify-center ${className}`}
    >
      {/* Pure, Uncluttered 3D WebGL Canvas */}
      <div 
        ref={mountRef} 
        className="w-full h-[360px] sm:h-[420px] lg:h-[460px] relative pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};

export default Hero3DArchitectureStack;
