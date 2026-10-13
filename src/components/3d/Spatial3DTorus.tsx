import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Spatial3DTorusProps {
  className?: string;
  size?: number;
}

/**
 * Spatial3DTorus
 * An architectural 3D Torus Knot in frosted optical glass and studio chrome.
 * Elegant continuous motion matching Qavironel's digital craftsmanship theme.
 */
export const Spatial3DTorus: React.FC<Spatial3DTorusProps> = ({
  className = '',
  size = 240
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || size;
    const height = container.clientHeight || size;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.z = 6.0;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Frosted Glass Torus Knot
    const knotGeo = new THREE.TorusKnotGeometry(1.2, 0.28, 120, 24, 2, 3);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#FFFFFF'),
      transmission: 0.94,
      roughness: 0.12,
      metalness: 0.05,
      ior: 1.52,
      thickness: 1.6,
      clearcoat: 1.0,
      transparent: true,
      opacity: 0.92
    });
    const knotMesh = new THREE.Mesh(knotGeo, glassMat);
    group.add(knotMesh);

    // Inner Titanium Core Spline
    const coreGeo = new THREE.TorusKnotGeometry(1.2, 0.08, 100, 16, 2, 3);
    const splineMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1A1A1A'),
      emissive: new THREE.Color('#111111'),
      emissiveIntensity: 0.15,
      metalness: 0.95,
      roughness: 0.2
    });
    const coreMesh = new THREE.Mesh(coreGeo, splineMat);
    group.add(coreMesh);

    // Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight('#FFFFFF', 14, 12);
    pointLight.position.set(3, 4, 3);
    scene.add(pointLight);

    const rimLight = new THREE.DirectionalLight('#FFFFFF', 1.6);
    rimLight.position.set(-3, 3, 2);
    scene.add(rimLight);

    // Viewport and Tab Visibility Throttling (0% CPU/GPU when offscreen or tab hidden)
    let isVisible = false;
    let frameId: number | null = null;
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible) return;
      frameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const t = clock.getElapsedTime();

      group.rotation.y += delta * 0.35;
      group.rotation.x = Math.sin(t * 0.4) * 0.2 + 0.2;
      group.rotation.z += delta * 0.15;

      renderer.render(scene, camera);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio > 0;
        if (visible && !isVisible) {
          isVisible = true;
          if (frameId) cancelAnimationFrame(frameId);
          frameId = requestAnimationFrame(animate);
        } else if (!visible && isVisible) {
          isVisible = false;
          if (frameId) cancelAnimationFrame(frameId);
        }
      },
      { threshold: [0, 0.05] }
    );
    observer.observe(container);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (frameId) cancelAnimationFrame(frameId);
      } else if (isVisible) {
        if (frameId) cancelAnimationFrame(frameId);
        frameId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || size;
      const h = container.clientHeight || size;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      knotGeo.dispose();
      coreGeo.dispose();
      glassMat.dispose();
      splineMat.dispose();
    };
  }, [size]);

  return (
    <div 
      ref={mountRef} 
      className={`relative flex items-center justify-center pointer-events-none ${className}`}
      style={{ width: '100%', height: size }}
      aria-hidden="true"
    />
  );
};

export default Spatial3DTorus;

