import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface QavironelMarkSculptureProps {
  className?: string;
}

/** A small brushed-metal study of Qavironel's own mark, rendered in WebGL. */
export const QavironelMarkSculpture: React.FC<QavironelMarkSculptureProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: window.innerWidth > 760,
        powerPreference: 'low-power'
      });
    } catch {
      container.classList.add('qavironel-mark--fallback');
      return;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth >= 1920 ? 2 : 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1.65, 1.65, 1.65, -1.65, 0.1, 30);
    camera.position.set(0, 0, 7);

    const mark = new THREE.Group();
    mark.rotation.set(0.1, -0.2, 0.04);
    scene.add(mark);

    const toPoint = (x: number, y: number, z = 0) => new THREE.Vector3((x - 63.5) / 35, (58.5 - y) / 35, z);
    const outlinePoints = [
      [78, 14], [50, 14], [19, 45], [19, 75], [47, 103], [75, 103], [92, 86], [92, 55], [81, 34]
    ].map(([x, y]) => toPoint(x, y));

    // The contour follows the supplied Q mark: one open, rounded loop and its short diagonal stroke.
    const outlineCurve = new THREE.CatmullRomCurve3(outlinePoints, false, 'centripetal');
    const outlineGeometry = new THREE.TubeGeometry(outlineCurve, 180, 0.145, 16, false);
    const slashCurve = new THREE.LineCurve3(toPoint(69, 71, 0.04), toPoint(108, 110, 0.04));
    const slashGeometry = new THREE.TubeGeometry(slashCurve, 36, 0.16, 16, false);
    const mainMaterial = new THREE.MeshPhysicalMaterial({
      color: '#585852', metalness: 0.5, roughness: 0.24, clearcoat: 0.95, clearcoatRoughness: 0.12
    });
    const slashMaterial = new THREE.MeshPhysicalMaterial({
      color: '#c7c5be', metalness: 0.68, roughness: 0.17, clearcoat: 1, clearcoatRoughness: 0.1
    });
    const outlineMesh = new THREE.Mesh(outlineGeometry, mainMaterial);
    const slashMesh = new THREE.Mesh(slashGeometry, slashMaterial);
    mark.add(outlineMesh, slashMesh);

    const capGeometry = new THREE.SphereGeometry(0.145, 20, 14);
    const slashCapGeometry = new THREE.SphereGeometry(0.16, 20, 14);
    const caps = [
      new THREE.Mesh(capGeometry, mainMaterial),
      new THREE.Mesh(capGeometry, mainMaterial),
      new THREE.Mesh(slashCapGeometry, slashMaterial),
      new THREE.Mesh(slashCapGeometry, slashMaterial)
    ];
    caps[0].position.copy(outlinePoints[0]);
    caps[1].position.copy(outlinePoints[outlinePoints.length - 1]);
    caps[2].position.copy(toPoint(69, 71, 0.04));
    caps[3].position.copy(toPoint(108, 110, 0.04));
    mark.add(...caps);

    scene.add(new THREE.AmbientLight('#ffffff', 1.15));
    const key = new THREE.DirectionalLight('#ffffff', 4.2);
    key.position.set(-3.8, 4.8, 5.5);
    scene.add(key);
    const fill = new THREE.PointLight('#e6e5e0', 20, 10);
    fill.position.set(3.2, -1.8, 3.5);
    scene.add(fill);
    const rim = new THREE.PointLight('#ffffff', 14, 9);
    rim.position.set(0.5, 4.2, -3.5);
    scene.add(rim);

    const updateMaterialForTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      mainMaterial.color.set(isDark ? '#b7b5ad' : '#585852');
      slashMaterial.color.set(isDark ? '#77766f' : '#c7c5be');
      renderer.render(scene, camera);
    };
    updateMaterialForTheme();
    const themeObserver = new MutationObserver(updateMaterialForTheme);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    let visible = false;
    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;
    let reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const render = () => renderer.render(scene, camera);
    const resize = () => {
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);
      const aspect = width / height;
      const halfHeight = 1.65 / Math.min(1, aspect);
      camera.left = -halfHeight * aspect;
      camera.right = halfHeight * aspect;
      camera.top = halfHeight;
      camera.bottom = -halfHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      render();
    };
    const animate = (time: number) => {
      if (!visible || document.hidden || reducedMotion) return;
      const t = time * 0.001;
      mark.rotation.y += (pointerX * 0.16 + Math.sin(t * 0.24) * 0.06 - mark.rotation.y) * 0.035;
      mark.rotation.x += (pointerY * -0.12 + Math.cos(t * 0.2) * 0.035 - mark.rotation.x) * 0.035;
      mark.position.y = Math.sin(t * 0.5) * 0.035;
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
    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 0.65;
      pointerY = ((event.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 0.65;
    };
    const onPointerLeave = () => { pointerX = 0; pointerY = 0; };
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
    container.addEventListener('pointerleave', onPointerLeave, { passive: true });
    document.addEventListener('visibilitychange', start);
    motionPreference.addEventListener?.('change', onMotionChange);
    resize();
    container.classList.add('qavironel-mark--ready');

    return () => {
      stop();
      themeObserver.disconnect();
      intersection.disconnect();
      resizeObserver.disconnect();
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', start);
      motionPreference.removeEventListener?.('change', onMotionChange);
      outlineGeometry.dispose();
      slashGeometry.dispose();
      capGeometry.dispose();
      slashCapGeometry.dispose();
      mainMaterial.dispose();
      slashMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      container.classList.remove('qavironel-mark--ready');
    };
  }, []);

  return (
    <div ref={mountRef} className={`qavironel-mark-sculpture ${className}`} aria-hidden="true">
      <img className="qavironel-mark-sculpture__fallback" src="/brand/identity-v2/qavironel-mark-forest.svg" alt="" />
    </div>
  );
};

export default QavironelMarkSculpture;
