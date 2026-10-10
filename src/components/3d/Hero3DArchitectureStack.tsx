import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DArchitectureStackProps {
  className?: string;
}

export const Hero3DArchitectureStack: React.FC<Hero3DArchitectureStackProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // 2026 Standard: AgX Tone Mapping (fallback to ACESFilmic) & SRGB Color Space
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Group for the main object to handle cursor tracking
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ─────────────────────────────────────────────────────────────
    // WORLD-CLASS MATERIAL (Tactile, Clearcoat, Dispersion feel)
    // ─────────────────────────────────────────────────────────────
    // Deep dark core with an intense orange sheen/rim
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#0A0A0A'), // Deep dark
      metalness: 0.9,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      sheen: 1.0,
      sheenColor: new THREE.Color('#E0561B'), // Orange sheen
      sheenRoughness: 0.4,
      iridescence: 0.5,
      iridescenceIOR: 1.3,
    });

    // ─────────────────────────────────────────────────────────────
    // GEOMETRY (Smooth, organic, complex but uncluttered)
    // ─────────────────────────────────────────────────────────────
    // A thick, beautifully curved TorusKnot
    const geometry = new THREE.TorusKnotGeometry(1.6, 0.65, 300, 64, 2, 3);
    const mesh = new THREE.Mesh(geometry, material);
    mainGroup.add(mesh);

    // ─────────────────────────────────────────────────────────────
    // LIGHTING (Studio Setup with strong rim light)
    // ─────────────────────────────────────────────────────────────
    // Ambient for base fill
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.8);
    scene.add(ambientLight);

    // Key Light (Warm)
    const keyLight = new THREE.SpotLight('#FFE8D6', 180);
    keyLight.position.set(5, 5, 5);
    keyLight.angle = Math.PI / 6;
    keyLight.penumbra = 0.5;
    scene.add(keyLight);

    // Fill Light (Cool)
    const fillLight = new THREE.PointLight('#E2F0FF', 80);
    fillLight.position.set(-5, -2, 5);
    scene.add(fillLight);

    // Rim Light (Crucial for that 3D separation)
    const rimLight = new THREE.SpotLight('#E0561B', 300); // Brand orange rim
    rimLight.position.set(0, 4, -5);
    rimLight.angle = Math.PI / 4;
    rimLight.penumbra = 1;
    scene.add(rimLight);

    // ─────────────────────────────────────────────────────────────
    // CONTACT SHADOW (Fake baked shadow under the object)
    // ─────────────────────────────────────────────────────────────
    const shadowGeo = new THREE.PlaneGeometry(8, 8);
    const canvas2d = document.createElement('canvas');
    canvas2d.width = 256;
    canvas2d.height = 256;
    const ctx = canvas2d.getContext('2d')!;
    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, 'rgba(0,0,0, 0.4)');
    gradient.addColorStop(1, 'rgba(0,0,0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
    
    const shadowTex = new THREE.CanvasTexture(canvas2d);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.7,
      depthWrite: false
    });
    
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -3.0; // Place below the object
    scene.add(shadowPlane);

    // ─────────────────────────────────────────────────────────────
    // MOTION & PHYSICS (Spring Damped Cursor Tracking + Idle Float)
    // ─────────────────────────────────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / width) * 2 - 1;
      targetY = -((e.clientY - rect.top) / height) * 2 + 1;
    };
    
    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const clock = new THREE.Clock();
    let animationFrameId: number;
    let isVisible = true;
    
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });
    observer.observe(container);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const t = clock.getElapsedTime();
      
      // Spring physics (lerp) for smooth tracking
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Cursor rotation tracking (subtle)
      mainGroup.rotation.x = mouseY * 0.25;
      mainGroup.rotation.y = mouseX * 0.25;

      // Continuous Idle Kinematics ("Breathing" & slow spin)
      mesh.rotation.x = Math.sin(t * 0.3) * 0.1;
      mesh.rotation.y = t * 0.12; // Slow continuous rotation
      mesh.rotation.z = Math.cos(t * 0.2) * 0.1;
      
      // Subtle float up and down
      mainGroup.position.y = Math.sin(t * 1.5) * 0.05;

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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      shadowTex.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      <div 
        ref={mountRef} 
        className="w-full h-[360px] sm:h-[420px] lg:h-[460px] relative z-10"
      />
    </div>
  );
};

export default Hero3DArchitectureStack;
