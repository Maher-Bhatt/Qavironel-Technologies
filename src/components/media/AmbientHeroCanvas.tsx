import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export const AmbientHeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Skip expensive canvas particle animation on mobile
    if (window.innerWidth < 768) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;
    let isHovering = false;

    // Generate dynamic particle nodes
    let particles: Particle[] = [];
    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((width * height) / 22000), 55);
      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const isCopper = Math.random() < 0.28;
        particles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: isCopper ? Math.random() * 2.2 + 1.2 : Math.random() * 1.8 + 0.8,
          alpha: isCopper ? Math.random() * 0.35 + 0.15 : Math.random() * 0.15 + 0.05,
          color: isCopper ? '#C7612E' : '#71717A'
        });
      }
    };

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      targetMouseX = width / 2;
      targetMouseY = height / 2;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        targetMouseX = e.touches[0].clientX - rect.left;
        targetMouseY = e.touches[0].clientY - rect.top;
        isHovering = true;
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    resize();

    let time = 0;

    const render = () => {
      time += 0.007;

      // Smooth mouse interpolation
      if (isHovering) {
        mouseX += (targetMouseX - mouseX) * 0.06;
        mouseY += (targetMouseY - mouseY) * 0.06;
      } else {
        mouseX += (width / 2 - mouseX) * 0.02;
        mouseY += (height / 2 - mouseY) * 0.02;
      }

      ctx.clearRect(0, 0, width, height);

      // 01. Render soft ambient radiant mesh background
      const grad = ctx.createRadialGradient(
        width * 0.75 + Math.sin(time * 0.8) * 80,
        height * 0.35 + Math.cos(time * 0.6) * 60,
        30,
        width * 0.75,
        height * 0.35,
        width * 0.55
      );
      grad.addColorStop(0, 'rgba(199, 97, 46, 0.045)');
      grad.addColorStop(0.5, 'rgba(199, 97, 46, 0.015)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 02. Render flowing fluid mathematical contour lines
      const lineCount = 4;
      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();
        const factor = i * 0.22;
        const isAccent = i === 1;

        ctx.strokeStyle = isAccent 
          ? 'rgba(199, 97, 46, 0.12)' 
          : 'rgba(10, 10, 10, 0.04)';
        ctx.lineWidth = isAccent ? 1.6 : 1.0;

        const segments = 45;
        for (let j = 0; j <= segments; j++) {
          const x = (width / segments) * j;
          const distToMouse = Math.hypot(x - mouseX, height * 0.45 - mouseY);
          const mouseDeflection = Math.max(0, 1 - distToMouse / 380) * 45;

          const y = height * 0.42 + 
            Math.sin(time * 1.2 + j * 0.12 + factor) * (45 + i * 16) +
            Math.cos(time * 0.85 + j * 0.08) * (25 + i * 10) -
            mouseDeflection * Math.sin(time * 1.8 + j * 0.18);

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // 03. Render particle constellation network
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Cursor magnetic gravity
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 180 && dist > 1) {
          const force = (1 - dist / 180) * 0.8;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Connect nearby nodes with subtle vectors
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distNodes < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#C7612E';
            ctx.globalAlpha = (1 - distNodes / 110) * 0.08;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    let isVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio > 0;
        if (visible && !isVisible) {
          isVisible = true;
          if (animationFrameId) cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        } else if (!visible && isVisible) {
          isVisible = false;
          if (animationFrameId) cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: [0, 0.05] }
    );
    observer.observe(canvas);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      } else if (isVisible) {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

