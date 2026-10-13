import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  className?: string;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

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

    // Root Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Primary Luxury Sculpture: Torus Knot with Physical Frosted Acrylic/Glass Material
    const knotGeometry = new THREE.TorusKnotGeometry(1.4, 0.42, 128, 32, 2, 3);
    const knotMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#FFFFFF'),
      emissive: new THREE.Color('#1A0802'),
      roughness: 0.15,
      metalness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.82, // Frosted glass acrylic refraction
      ior: 1.45,
      thickness: 1.8,
      specularIntensity: 1.0,
      specularColor: new THREE.Color('#FFFFFF'),
      transparent: true,
      opacity: 0.95
    });
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
    mainGroup.add(knotMesh);

    // 2. Wireframe Accent Ring (Inner Gyroscopic Orbit)
    const ringGeometry = new THREE.TorusGeometry(2.2, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#E5E5E5'),
      metalness: 0.95,
      roughness: 0.1,
      emissive: new THREE.Color('#1A1A1A'),
      emissiveIntensity: 0.1
    });
    const ringMesh1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh1.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.scale.set(1.15, 1.15, 1.15);
    mainGroup.add(ringMesh2);

    // 3. Floating Geometric Satellites (Icosahedrons & Gems)
    const satelliteCount = 12;
    const satellites: { mesh: THREE.Mesh; speed: number; orbitRadius: number; angle: number; yOffset: number }[] = [];
    const satGeo = new THREE.IcosahedronGeometry(0.12, 0);
    const satMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1A1A1A'),
      metalness: 0.95,
      roughness: 0.1,
      wireframe: false
    });

    for (let i = 0; i < satelliteCount; i++) {
      const satMesh = new THREE.Mesh(satGeo, satMat);
      const orbitRadius = 2.4 + Math.random() * 1.2;
      const angle = (i / satelliteCount) * Math.PI * 2;
      const yOffset = (Math.random() - 0.5) * 1.5;

      satMesh.position.set(
        Math.cos(angle) * orbitRadius,
        yOffset,
        Math.sin(angle) * orbitRadius
      );
      mainGroup.add(satMesh);
      satellites.push({
        mesh: satMesh,
        speed: 0.005 + Math.random() * 0.008,
        orbitRadius,
        angle,
        yOffset
      });
    }

    // 4. Studio Lighting Rig
    // Ambient soft fill
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    // Pure White Key Light
    const whiteKeyLight = new THREE.PointLight('#FFFFFF', 18, 20);
    whiteKeyLight.position.set(4, 3, 4);
    scene.add(whiteKeyLight);

    // Subtle Chrome Rim Light
    const rimLight = new THREE.PointLight('#E5E5E5', 10, 20);
    rimLight.position.set(-4, -3, 3);
    scene.add(rimLight);

    // Overhead White Key
    const overheadLight = new THREE.DirectionalLight(0xffffff, 2.0);
    overheadLight.position.set(0, 8, 5);
    scene.add(overheadLight);

    // Mouse Tracking & Inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop with Viewport Throttling
    let isVisible = false;
    let animationFrameId: number | null = null;
    const startTime = performance.now() * 0.001;

    const animate = () => {
      if (!isVisible) return;
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = performance.now() * 0.001 - startTime;

      // Smooth Lerp for interactive orientation
      targetRotationY += (mouseX * 0.8 - targetRotationY) * 0.05;
      targetRotationX += (mouseY * 0.8 - targetRotationX) * 0.05;

      // Rotate sculpture
      knotMesh.rotation.x = elapsedTime * 0.25 + targetRotationX;
      knotMesh.rotation.y = elapsedTime * 0.35 + targetRotationY;

      // Orbit gyroscopic rings
      ringMesh1.rotation.x = Math.PI / 3 + elapsedTime * 0.15;
      ringMesh1.rotation.y = elapsedTime * 0.2;

      ringMesh2.rotation.y = Math.PI / 4 + elapsedTime * 0.18;
      ringMesh2.rotation.z = elapsedTime * 0.12;

      // Move white key light dynamically with cursor for specular shimmer
      whiteKeyLight.position.x = 4 + mouseX * 2;
      whiteKeyLight.position.y = 3 - mouseY * 2;

      // Animate floating satellites
      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        sat.mesh.position.x = Math.cos(sat.angle) * sat.orbitRadius;
        sat.mesh.position.z = Math.sin(sat.angle) * sat.orbitRadius;
        sat.mesh.position.y = sat.yOffset + Math.sin(elapsedTime * 2 + sat.angle) * 0.2;
        sat.mesh.rotation.x += 0.02;
        sat.mesh.rotation.y += 0.03;
      });

      renderer.render(scene, camera);
    };

    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting && entry.intersectionRatio > 0;
      if (visible && !isVisible) {
        isVisible = true;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(animate);
      } else if (!visible && isVisible) {
        isVisible = false;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      }
    }, { threshold: [0, 0.05] });

    observer.observe(container);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      } else if (isVisible) {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      knotGeometry.dispose();
      knotMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      satGeo.dispose();
      satMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full min-h-[420px] pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
};
export default Hero3DCanvas;

