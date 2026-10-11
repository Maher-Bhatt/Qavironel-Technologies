import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Interactive3DSphereProps {
  className?: string;
  size?: number;
}

export const Interactive3DSphere: React.FC<Interactive3DSphereProps> = ({
  className = '',
  size = 280
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || size;
    const height = container.clientHeight || size;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Inner glowing core
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#FFFFFF'),
      roughness: 0.2,
      metalness: 0.1,
      transmission: 0.8,
      thickness: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.85
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Outer wireframe constellation
    const wireGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#C7612E'),
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    group.add(wireMesh);

    // Node vertices
    const pointsGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const pointsMat = new THREE.PointsMaterial({
      color: new THREE.Color('#C7612E'),
      size: 0.08
    });
    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    group.add(pointsMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight('#C7612E', 12, 10);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    container.addEventListener('mousemove', handleMouseMove);

    let frameId: number | null = null;
    let isVisible = false;
    const startTime = performance.now() * 0.001;

    const animate = () => {
      if (!isVisible) return;
      frameId = requestAnimationFrame(animate);
      const t = performance.now() * 0.001 - startTime;

      group.rotation.y = t * 0.35 + mouseX * 0.5;
      group.rotation.x = t * 0.2 + mouseY * 0.5;

      wireMesh.rotation.y = -t * 0.15;
      pointsMesh.rotation.y = -t * 0.15;

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

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [size]);

  return (
    <div
      ref={mountRef}
      className={`relative inline-block cursor-grab active:cursor-grabbing select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
};
export default Interactive3DSphere;

