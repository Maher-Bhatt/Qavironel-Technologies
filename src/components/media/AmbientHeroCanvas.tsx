import React, { useEffect, useRef } from 'react';

export const AmbientHeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.008;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle harmonic wave lines
      const lineCount = 5;
      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();
        const factor = i * 0.15;
        const alpha = 0.035 + (i * 0.015);
        ctx.strokeStyle = i === 2 
          ? `rgba(224, 86, 27, ${alpha * 1.5})` 
          : `rgba(10, 10, 10, ${alpha})`;
        ctx.lineWidth = 1.2;

        const points = 40;
        for (let j = 0; j <= points; j++) {
          const x = (width / points) * j;
          const distToMouse = Math.hypot(x - mouseX, height * 0.5 - mouseY);
          const mouseInfluence = Math.max(0, 1 - distToMouse / 400) * 35;
          const y = height * 0.5 + 
            Math.sin(time + j * 0.15 + factor) * (40 + i * 12) +
            Math.cos(time * 0.8 + j * 0.08) * (20 + i * 8) -
            mouseInfluence * Math.sin(time * 2 + j * 0.2);

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      aria-hidden="true"
    />
  );
};
