import { useEffect, useRef } from 'react';

export default function SolarFlareCanvas({ active = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const drawSolarFlare = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!active) {
        time = 0;
        return;
      }

      time += 0.05;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 3;

      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8 + time;
        const radius = 50 + Math.sin(time * 2 + i) * 30;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(255, 16, 240, ${0.6 + Math.sin(time * 3) * 0.3})`);
        gradient.addColorStop(0.5, 'rgba(255, 100, 240, 0.3)');
        gradient.addColorStop(1, 'rgba(255, 16, 240, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      const pulseGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        100 + Math.sin(time * 2) * 20
      );
      pulseGradient.addColorStop(0, 'rgba(255, 16, 240, 0.8)');
      pulseGradient.addColorStop(0.3, 'rgba(255, 100, 240, 0.4)');
      pulseGradient.addColorStop(1, 'rgba(255, 16, 240, 0)');

      ctx.fillStyle = pulseGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 100 + Math.sin(time * 2) * 20, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(drawSolarFlare);
    };

    drawSolarFlare();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: active ? 0.4 : 0, transition: 'opacity 0.5s ease' }}
    />
  );
}
