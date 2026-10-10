import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Spatial3DPrismProps {
  className?: string;
  size?: number;
}

/**
 * Spatial3DPrism
 * An optical crystalline prism in frosted physical glass and studio copper.
 * Designed to seamlessly sit within the Capabilities Bento Grid or technical modules.
 */
export const Spatial3DPrism: React.FC<Spatial3DPrismProps> = ({
  className = '',
  size = 200
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || size;
    const height = container.clientHeight || size;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.z = 4.2;

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

    const group = new THREE.Group();
    scene.add(group);

    // Inner Glowing Copper Pyramidal Core
    const innerGeo = new THREE.OctahedronGeometry(0.7, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#E0561B'),
      emissive: new THREE.Color('#E0561B'),
      emissiveIntensity: 1.2,
      metalness: 0.85,
      roughness: 0.2
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // Outer Frosted Glass Octahedron
    const glassGeo = new THREE.OctahedronGeometry(1.3, 0);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#FFFFFF'),
      transmission: 0.94,
      roughness: 0.1,
      metalness: 0.05,
      ior: 1.52,
      thickness: 1.5,
      clearcoat: 1.0,
      transparent: true,
      opacity: 0.9
    });
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    group.add(glassMesh);

    // Delicate Copper Edge Bevels
    const wireGeo = new THREE.EdgesGeometry(glassGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#E0561B'),
      transparent: true,
      opacity: 0.7
    });
    const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    group.add(wireMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight('#E0561B', 16, 12);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    const rimLight = new THREE.DirectionalLight('#FFFFFF', 1.5);
    rimLight.position.set(-3, 3, 2);
    scene.add(rimLight);

    // Lifecycle & Visibility Throttling
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const t = clock.getElapsedTime();

      group.rotation.y += delta * 0.45;
      group.rotation.x = Math.sin(t * 0.5) * 0.2 + 0.3;
      group.rotation.z = Math.cos(t * 0.4) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

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
      observer.disconnect();
      cancelAnimationFrame(frameId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      innerGeo.dispose();
      glassGeo.dispose();
      wireGeo.dispose();
      innerMat.dispose();
      glassMat.dispose();
      wireMat.dispose();
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

export default Spatial3DPrism;

