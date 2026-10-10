import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

interface Hero3DArchitectureStackProps {
  className?: string;
}

/**
 * Hero3DArchitectureStack
 * The "Precision Glass Torsion Ribbon". A world-class, mathematically elegant 3D object.
 * NO MOUSE TRACKING. Pure, continuous, and visually lightweight.
 */
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
      alpha: true, // Transparent background (matches light theme)
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Modern Color Science for natural light falloff
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Use RoomEnvironment to give the glass beautiful, high-contrast studio reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const roomEnv = new RoomEnvironment();
    scene.environment = pmremGenerator.fromScene(roomEnv).texture;
    roomEnv.dispose();

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ─────────────────────────────────────────────────────────────
    // CUSTOM CURVE (Precision Torsion Ribbon)
    // ─────────────────────────────────────────────────────────────
    class InfinityCurve extends THREE.Curve<THREE.Vector3> {
      constructor() {
        super();
      }
      getPoint(t: number, optionalTarget = new THREE.Vector3()) {
        const p = 2; // lobes
        const q = 3;
        const u = t * Math.PI * 2;
        
        // A sophisticated, sweeping knot (Lissajous curve)
        const x = Math.sin(p * u) * 2.2;
        const y = Math.sin(q * u) * 1.5;
        const z = Math.cos(p * u) * 2.2;
        
        return optionalTarget.set(x, y, z);
      }
    }
    
    const curve = new InfinityCurve();
    
    // TubeGeometry: path, tubularSegments, radius, radialSegments (4 = sharp prism edges), closed
    const geometry = new THREE.TubeGeometry(curve, 350, 0.22, 4, true);

    // ─────────────────────────────────────────────────────────────
    // ADAPTIVE FROSTED GLASS MATERIAL
    // ─────────────────────────────────────────────────────────────
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#ffffff'), // Pure white base
      transmission: 1.0,     // Full glass transparency
      ior: 1.5,              // Glass index of refraction
      roughness: 0.12,       // Frosted/Satin finish (not perfectly clear)
      metalness: 0.05,
      clearcoat: 1.0,        // Crisp specular highlight over the frosted surface
      clearcoatRoughness: 0.05,
      thickness: 1.5,        // Volume for light refraction
      attenuationColor: new THREE.Color('#E0561B'), // Brand orange internal glow!
      attenuationDistance: 4.0, // How far light travels before becoming fully orange
      side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    mainGroup.add(mesh);

    // ─────────────────────────────────────────────────────────────
    // INTERNAL & SCENE LIGHTING
    // ─────────────────────────────────────────────────────────────
    // A soft core point light inside the knot to illuminate the frosted glass with the brand color
    const coreLight = new THREE.PointLight('#E0561B', 150, 8);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    // Subdued ambient for the overall scene
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.5);
    scene.add(ambientLight);

    // ─────────────────────────────────────────────────────────────
    // ANIMATION LOOP (Strictly Time-Based, ZERO Mouse Tracking)
    // ─────────────────────────────────────────────────────────────
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

      const delta = clock.getDelta();
      const t = clock.getElapsedTime();
      
      // Majestic, incredibly slow autonomous tumble. ZERO mouse tracking.
      mainGroup.rotation.y += delta * 0.12;
      mainGroup.rotation.x += delta * 0.08;

      // Subtle, autonomous hovering effect
      mainGroup.position.y = Math.sin(t * 1.5) * 0.12;

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
      geometry.dispose();
      material.dispose();
      pmremGenerator.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      {/* Absolute zero mouse interaction allowed */}
      <div 
        ref={mountRef} 
        className="w-full h-[360px] sm:h-[420px] lg:h-[460px] relative z-10 pointer-events-none"
      />
    </div>
  );
};

export default Hero3DArchitectureStack;
