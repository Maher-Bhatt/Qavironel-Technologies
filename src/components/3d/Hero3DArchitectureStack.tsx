import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DArchitectureStackProps {
  className?: string;
}

/** A separate 3D language for services: a small system of connected, machined forms. */
export const Hero3DArchitectureStack: React.FC<Hero3DArchitectureStackProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: window.innerWidth > 760, powerPreference: 'low-power' });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 32);
    camera.position.set(0, 0.6, 6.8);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.28;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const system = new THREE.Group();
    scene.add(system);
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    const silver = new THREE.MeshPhysicalMaterial({ color: '#E7E7E7', metalness: 0.76, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.12 });
    const porcelain = new THREE.MeshPhysicalMaterial({ color: '#FAFAFA', metalness: 0.08, roughness: 0.24, clearcoat: 0.8 });
    const graphite = new THREE.MeshPhysicalMaterial({ color: '#353535', metalness: 0.84, roughness: 0.2, clearcoat: 0.95 });
    const wire = new THREE.MeshStandardMaterial({ color: '#A0A0A0', metalness: 0.68, roughness: 0.3 });
    materials.push(silver, porcelain, graphite, wire);

    const nodes: THREE.Mesh[] = [];
    const nodeSpecs = [
      { position: [-1.58, 0.42, 0.1], geometry: new THREE.OctahedronGeometry(0.42, 1), material: silver },
      { position: [-0.42, -0.54, 0.44], geometry: new THREE.IcosahedronGeometry(0.46, 1), material: graphite },
      { position: [0.82, 0.52, -0.18], geometry: new THREE.DodecahedronGeometry(0.38, 1), material: porcelain },
      { position: [1.62, -0.54, 0.22], geometry: new THREE.BoxGeometry(0.55, 0.55, 0.55), material: silver }
    ] as const;

    nodeSpecs.forEach((spec, index) => {
      geometries.push(spec.geometry);
      const node = new THREE.Mesh(spec.geometry, spec.material);
      node.position.set(spec.position[0], spec.position[1], spec.position[2]);
      node.rotation.set(index * 0.4, index * 0.62, index * -0.28);
      system.add(node);
      nodes.push(node);
    });

    const joints = [
      [nodeSpecs[0].position, nodeSpecs[1].position],
      [nodeSpecs[1].position, nodeSpecs[2].position],
      [nodeSpecs[2].position, nodeSpecs[3].position],
      [nodeSpecs[0].position, nodeSpecs[2].position]
    ] as const;
    joints.forEach(([from, to], index) => {
      const a = new THREE.Vector3(from[0], from[1], from[2]);
      const b = new THREE.Vector3(to[0], to[1], to[2]);
      const offset = new THREE.Vector3(0, index % 2 ? 0.55 : -0.42, index % 2 ? -0.4 : 0.35);
      const curve = new THREE.QuadraticBezierCurve3(a, a.clone().lerp(b, 0.5).add(offset), b);
      const geometry = new THREE.TubeGeometry(curve, 56, index === 3 ? 0.014 : 0.022, 6, false);
      geometries.push(geometry);
      system.add(new THREE.Mesh(geometry, wire));
    });

    const anchorGeometry = new THREE.SphereGeometry(0.045, 12, 10);
    const anchorMaterial = new THREE.MeshStandardMaterial({ color: '#FFFFFF', emissive: '#888888', emissiveIntensity: 0.2 });
    geometries.push(anchorGeometry);
    materials.push(anchorMaterial);
    joints.forEach(([from, to]) => {
      for (const point of [from, to]) {
        const anchor = new THREE.Mesh(anchorGeometry, anchorMaterial);
        anchor.position.set(point[0], point[1], point[2]);
        system.add(anchor);
      }
    });

    scene.add(new THREE.AmbientLight('#FFFFFF', 0.7));
    const key = new THREE.DirectionalLight('#FFFFFF', 4.4);
    key.position.set(-3, 4.5, 5);
    scene.add(key);
    const fill = new THREE.PointLight('#D0D0D0', 22, 11);
    fill.position.set(3, -1.2, 1.8);
    scene.add(fill);

    let visible = false;
    let frameId = 0;
    let reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const render = () => renderer.render(scene, camera);
    const resize = () => {
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      if (reducedMotion) render();
    };
    const animate = (time: number) => {
      if (!visible || document.hidden || reducedMotion) return;
      const t = time * 0.001;
      system.rotation.y = Math.sin(t * 0.22) * 0.16;
      system.rotation.x = Math.cos(t * 0.17) * 0.08;
      nodes.forEach((node, index) => {
        node.rotation.x += 0.002 + index * 0.00045;
        node.rotation.y += 0.003 + index * 0.0004;
        node.position.y = nodeSpecs[index].position[1] + Math.sin(t * 0.6 + index * 1.4) * 0.055;
      });
      render();
      frameId = requestAnimationFrame(animate);
    };
    const start = () => {
      if (!visible || document.hidden) return;
      cancelAnimationFrame(frameId);
      if (reducedMotion) render();
      else frameId = requestAnimationFrame(animate);
    };
    const stop = () => { cancelAnimationFrame(frameId); frameId = 0; };
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMotionChange = () => { reducedMotion = preference.matches; start(); };
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      visible ? start() : stop();
    }, { threshold: 0.02 });
    const resizeObserver = new ResizeObserver(resize);
    intersection.observe(container);
    resizeObserver.observe(container);
    document.addEventListener('visibilitychange', start);
    preference.addEventListener?.('change', onMotionChange);
    resize();

    return () => {
      stop();
      intersection.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', start);
      preference.removeEventListener?.('change', onMotionChange);
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={`services-stack-canvas ${className}`} aria-hidden="true" />;
};

export default Hero3DArchitectureStack;
