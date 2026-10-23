import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  className?: string;
}

/** A hand-built field of interwoven metal ribbons, unique to the Qavironel home page. */
export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: window.innerWidth > 760, powerPreference: 'low-power' });
    } catch {
      container.classList.add('studio-3d-canvas--unavailable');
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 40);
    camera.position.set(0, 0, 7.1);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.45));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.22;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const sculpture = new THREE.Group();
    scene.add(sculpture);

    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    const finishes = [
      new THREE.MeshPhysicalMaterial({ color: '#F1F1F1', metalness: 0.7, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.11, side: THREE.DoubleSide }),
      new THREE.MeshPhysicalMaterial({ color: '#858585', metalness: 0.82, roughness: 0.24, clearcoat: 0.9, clearcoatRoughness: 0.14, side: THREE.DoubleSide }),
      new THREE.MeshPhysicalMaterial({ color: '#353535', metalness: 0.76, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.08, side: THREE.DoubleSide })
    ];
    materials.push(...finishes);

    const makeRibbon = (phase: number, width: number, squash: number) => {
      const along = 256;
      const across = 16;
      const vertices: number[] = [];
      const indices: number[] = [];
      const centerAt = (u: number) => {
        const radius = 1.22 + 0.14 * Math.sin(3 * u + phase);
        return new THREE.Vector3(
          radius * Math.cos(u) + 0.12 * Math.sin(2 * u + phase),
          squash * (0.42 * Math.sin(2 * u + phase) + 0.12 * Math.sin(3 * u)),
          0.94 * radius * Math.sin(u)
        );
      };

      for (let i = 0; i <= along; i += 1) {
        const u = (i / along) * Math.PI * 2;
        const center = centerAt(u);
        const tangent = centerAt(u + 0.001).sub(centerAt(u - 0.001)).normalize();
        const reference = Math.abs(tangent.dot(new THREE.Vector3(0, 1, 0))) > 0.94
          ? new THREE.Vector3(0, 0, 1)
          : new THREE.Vector3(0, 1, 0);
        const side = new THREE.Vector3().crossVectors(tangent, reference).normalize();
        const normal = new THREE.Vector3().crossVectors(tangent, side).normalize();
        const twist = u * 1.28 + phase + 0.2 * Math.sin(3 * u);

        for (let j = 0; j <= across; j += 1) {
          const v = j / across * 2 - 1;
          const turnedSide = side.clone().multiplyScalar(Math.cos(twist)).addScaledVector(normal, Math.sin(twist));
          const point = center.clone().addScaledVector(turnedSide, v * width);
          vertices.push(point.x, point.y, point.z);
          if (i < along && j < across) {
            const a = i * (across + 1) + j;
            const b = a + across + 1;
            indices.push(a, b, a + 1, b, b + 1, a + 1);
          }
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      geometry.setIndex(indices);
      geometry.computeVertexNormals();
      geometries.push(geometry);
      return geometry;
    };

    const ribbons: THREE.Group[] = [];
    [
      { phase: 0, width: 0.2, squash: 1 },
      { phase: 2.05, width: 0.16, squash: 0.78 },
      { phase: 4.15, width: 0.12, squash: 1.18 }
    ].forEach((shape, index) => {
      const loop = new THREE.Group();
      const band = new THREE.Mesh(makeRibbon(shape.phase, shape.width, shape.squash), finishes[index]);
      band.castShadow = false;
      loop.add(band);
      loop.rotation.set(index * 0.11 - 0.12, index * 0.16, index * -0.1);
      sculpture.add(loop);
      ribbons.push(loop);
    });

    const coreGeometry = new THREE.IcosahedronGeometry(0.19, 2);
    const coreMaterial = new THREE.MeshPhysicalMaterial({ color: '#FFFFFF', metalness: 0.3, roughness: 0.12, clearcoat: 1, emissive: '#9E9E9E', emissiveIntensity: 0.1 });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    geometries.push(coreGeometry);
    materials.push(coreMaterial);
    sculpture.add(core);

    const satelliteGeometry = new THREE.SphereGeometry(0.035, 14, 12);
    const satelliteMaterial = new THREE.MeshStandardMaterial({ color: '#F5F5F5', metalness: 0.5, roughness: 0.18 });
    geometries.push(satelliteGeometry);
    materials.push(satelliteMaterial);
    const satellites = [0, 1, 2].map(() => {
      const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
      sculpture.add(satellite);
      return satellite;
    });

    scene.add(new THREE.AmbientLight('#FFFFFF', 0.72));
    const key = new THREE.DirectionalLight('#FFFFFF', 4.7);
    key.position.set(-3.5, 4.5, 5);
    scene.add(key);
    const rim = new THREE.PointLight('#D7D7D7', 26, 12);
    rim.position.set(3.5, 0.8, -1.8);
    scene.add(rim);
    const front = new THREE.PointLight('#FFFFFF', 17, 10);
    front.position.set(0, -2.5, 5);
    scene.add(front);

    let visible = false;
    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;
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
      sculpture.rotation.y += (pointerX * 0.17 - sculpture.rotation.y) * 0.025;
      sculpture.rotation.x += (pointerY * -0.11 - sculpture.rotation.x) * 0.025;
      ribbons.forEach((ribbon, index) => {
        ribbon.rotation.y = Math.sin(t * (0.14 + index * 0.025) + index * 1.7) * 0.16;
        ribbon.rotation.z = Math.cos(t * 0.17 + index) * 0.09;
      });
      core.rotation.set(t * 0.13, t * 0.2, t * -0.09);
      satellites.forEach((satellite, index) => {
        const angle = t * (0.2 + index * 0.035) + index * Math.PI * 2 / satellites.length;
        satellite.position.set(Math.cos(angle) * 1.72, Math.sin(angle * 1.3) * 0.65, Math.sin(angle) * 1.28);
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
    const stop = () => {
      cancelAnimationFrame(frameId);
      frameId = 0;
    };
    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 0.8;
      pointerY = ((event.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 0.8;
    };
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMotionChange = () => { reducedMotion = motionPreference.matches; start(); };
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      visible ? start() : stop();
    }, { threshold: 0.02 });
    const resizeObserver = new ResizeObserver(resize);
    intersection.observe(container);
    resizeObserver.observe(container);
    container.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('visibilitychange', start);
    motionPreference.addEventListener?.('change', onMotionChange);
    resize();

    return () => {
      stop();
      intersection.disconnect();
      resizeObserver.disconnect();
      container.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', start);
      motionPreference.removeEventListener?.('change', onMotionChange);
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      container.classList.remove('studio-3d-canvas--unavailable');
    };
  }, []);

  return <div ref={mountRef} className={`studio-3d-canvas ${className}`} aria-hidden="true" />;
};

export default Hero3DCanvas;
