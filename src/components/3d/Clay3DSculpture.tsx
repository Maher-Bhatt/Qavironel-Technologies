import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Clay3DSculptureProps {
  className?: string;
  size?: number;
}

/**
 * Clay3DSculpture
 * An ultra-luxurious, museum-grade 3D sculptural art piece modeled directly
 * after Clay.global's iconic tactile aesthetic:
 * 
 * - Seamless matte-white porcelain ceramic form with soft ambient occlusion
 * - Dual jewel pearls: royal violet & signature radiant studio orange
 * - Soft, multi-point studio lighting with ACES Filmic tonemapping
 * - Serene floating breathing physics with subtle weighted mouse parallax
 * - 60 FPS performance budget with automatic off-screen pause
 */
export const Clay3DSculpture: React.FC<Clay3DSculptureProps> = ({ 
  className = '',
  size
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = size || container.clientWidth || 500;
    let height = size || container.clientHeight || 500;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0.1, 6.4);
    camera.lookAt(0, 0, 0);

    // 2. High-Precision Antialiased WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    container.appendChild(renderer.domElement);

    // Master Anchor Group
    const masterGroup = new THREE.Group();
    // Signature Clay sculpture presentation tilt
    masterGroup.rotation.x = 0.32;
    masterGroup.rotation.y = -0.52;
    masterGroup.rotation.z = 0.18;
    scene.add(masterGroup);

    const sculptureGroup = new THREE.Group();
    masterGroup.add(sculptureGroup);

    // ─────────────────────────────────────────────────────────────
    // 3. TACTILE PORCELAIN / CLAY CERAMIC BOWL GEOMETRY
    // ─────────────────────────────────────────────────────────────
    const points: THREE.Vector2[] = [];
    
    // Outer smooth curve from pole to rim
    for (let i = 0; i <= 32; i++) {
      const t = (i / 32) * Math.PI * 0.54;
      const x = Math.sin(t) * 2.15;
      const y = (1 - Math.cos(t)) * 2.15;
      points.push(new THREE.Vector2(x, y));
    }
    
    // Rounded tactile lip
    points.push(new THREE.Vector2(Math.sin(Math.PI * 0.54) * 2.05, (1 - Math.cos(Math.PI * 0.54)) * 2.05 + 0.08));
    points.push(new THREE.Vector2(Math.sin(Math.PI * 0.54) * 1.95, (1 - Math.cos(Math.PI * 0.54)) * 1.95 + 0.12));
    
    // Inner smooth concave curve
    for (let i = 32; i >= 0; i--) {
      const t = (i / 32) * Math.PI * 0.54;
      const x = Math.sin(t) * 1.88;
      const y = (1 - Math.cos(t)) * 1.88 + 0.26;
      points.push(new THREE.Vector2(x, y));
    }

    const dishGeo = new THREE.LatheGeometry(points, 84);
    dishGeo.computeVertexNormals();
    dishGeo.center();

    // Matte Porcelain Material (Pure, tactile, high-sheen ceramic)
    const porcelainMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#FCFCFD'),
      roughness: 0.28,
      metalness: 0.0,
      clearcoat: 0.45,
      clearcoatRoughness: 0.22,
      reflectivity: 0.55,
      sheen: 0.4,
      sheenColor: new THREE.Color('#FFFFFF'),
      transmission: 0.0,
      ior: 1.52,
    });

    const dishMesh = new THREE.Mesh(dishGeo, porcelainMat);
    sculptureGroup.add(dishMesh);

    // ─────────────────────────────────────────────────────────────
    // 4. EMBEDDED DUAL JEWEL PEARLS (CLAY AESTHETIC)
    // ─────────────────────────────────────────────────────────────
    // Royal Violet Pearl (Top interior rim)
    const violetGeo = new THREE.SphereGeometry(0.19, 48, 48);
    const violetMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#9333EA'),
      emissive: new THREE.Color('#7E22CE'),
      emissiveIntensity: 0.35,
      roughness: 0.1,
      metalness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transmission: 0.15,
      ior: 1.6
    });
    const violetPearl = new THREE.Mesh(violetGeo, violetMat);
    // Nestled inside the upper concave rim
    violetPearl.position.set(0.68, 1.28, 0.98);
    sculptureGroup.add(violetPearl);

    // Signature Radiant Orange Pearl (Bottom interior wall)
    const orangeGeo = new THREE.SphereGeometry(0.18, 48, 48);
    const orangeMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#E0561B'),
      emissive: new THREE.Color('#C2410C'),
      emissiveIntensity: 0.4,
      roughness: 0.1,
      metalness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transmission: 0.15,
      ior: 1.6
    });
    const orangePearl = new THREE.Mesh(orangeGeo, orangeMat);
    // Nestled inside the lower concave wall
    orangePearl.position.set(-0.72, -0.65, 1.15);
    sculptureGroup.add(orangePearl);

    // ─────────────────────────────────────────────────────────────
    // 5. THREE-POINT STUDIO LIGHTING RIG
    // ─────────────────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.1);
    scene.add(ambientLight);

    // Soft Key Light from top-left
    const keyLight = new THREE.DirectionalLight(0xfff7ed, 3.4);
    keyLight.position.set(-4.5, 7.5, 6.0);
    scene.add(keyLight);

    // Cool Soft Fill Light
    const fillLight = new THREE.DirectionalLight(0xf0fdf4, 1.6);
    fillLight.position.set(5.5, -2.5, 4.5);
    scene.add(fillLight);

    // Rim Highlight
    const rimLight = new THREE.DirectionalLight(0xffffff, 2.0);
    rimLight.position.set(1.5, 6.0, -5.5);
    scene.add(rimLight);

    // Subtle pearl accent point lights for jewel specular gleam
    const violetGleam = new THREE.PointLight('#C084FC', 3.0, 4.0);
    violetGleam.position.set(0.9, 1.5, 1.3);
    scene.add(violetGleam);

    const orangeGleam = new THREE.PointLight('#FB923C', 3.2, 4.0);
    orangeGleam.position.set(-0.9, -0.4, 1.4);
    scene.add(orangeGleam);

    // ─────────────────────────────────────────────────────────────
    // 6. WEIGHTED MOUSE INTERACTION (SMOOTH PARALLAX)
    // ─────────────────────────────────────────────────────────────
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      // Restrained, subtle physical tilt (never jerky or disorienting)
      targetRotY = mouseX * 0.22;
      targetRotX = mouseY * 0.18;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // ─────────────────────────────────────────────────────────────
    // 7. SMOOTH 60 FPS ANIMATION LOOP (Pauses offscreen)
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
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const t = clock.getElapsedTime();

      // Smooth spring interpolation for mouse parallax
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      masterGroup.rotation.x = 0.32 + currentRotX;
      masterGroup.rotation.y = -0.52 + currentRotY;

      // Serene, continuous breathing motion
      sculptureGroup.position.y = Math.sin(t * 0.75) * 0.07;
      sculptureGroup.rotation.z = Math.sin(t * 0.5) * 0.03;

      // Subtle pulse on jewel pearls
      violetMat.emissiveIntensity = 0.3 + Math.sin(t * 1.5) * 0.1;
      orangeMat.emissiveIntensity = 0.35 + Math.cos(t * 1.5) * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    // Handle container resize
    const handleResize = () => {
      if (!container) return;
      const w = size || container.clientWidth;
      const h = size || container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      dishGeo.dispose();
      porcelainMat.dispose();
      violetGeo.dispose();
      violetMat.dispose();
      orangeGeo.dispose();
      orangeMat.dispose();
      renderer.dispose();
    };
  }, [size]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Soft Ambient Clay Diffuse Glow */}
      <div 
        className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-[#E0561B]/5 via-purple-500/5 to-transparent blur-[80px] pointer-events-none"
        aria-hidden="true"
      />
      {/* 3D Canvas Mount Point */}
      <div 
        ref={mountRef} 
        className="w-full aspect-square max-w-[520px] max-h-[520px] relative z-10 cursor-grab active:cursor-grabbing"
        title="Interactive 3D Porcelain Sculpture"
        role="img"
        aria-label="Clay porcelain architectural 3D sculpture with radiant orange and violet pearls"
      />
    </div>
  );
};

