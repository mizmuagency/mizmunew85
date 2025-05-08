import React, { useEffect, useRef } from 'react';

class Bubble {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  sparkles: { x: number; y: number; size: number }[];
  iridescence: number;

  constructor(canvas: HTMLCanvasElement) {
    // Create a mix of medium and large bubbles
    const sizeType = Math.random();
    if (sizeType < 0.6) {
      // 60% medium bubbles
      this.size = Math.random() * 60 + 60; // 60-120px
    } else {
      // 40% large bubbles
      this.size = Math.random() * 80 + 120; // 120-200px
    }

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    
    // Horizontal movement slightly random
    this.speedX = (Math.random() - 0.5) * 0.3;
    
    // Vertical movement always upward, speed based on size
    // Larger bubbles move faster
    const baseSpeed = -0.8 - (this.size / 100); // Increased base speed
    this.speedY = baseSpeed - Math.random() * 0.5;
    
    // Larger bubbles slightly more transparent
    this.opacity = Math.max(0.2, 0.5 - (this.size / 300));
    this.iridescence = Math.random() * Math.PI * 2;
    
    // More sparkles for larger bubbles
    const sparkleCount = Math.floor(this.size / 30) + 2;
    this.sparkles = Array(sparkleCount).fill(null).map(() => ({
      x: Math.random() * 0.8 - 0.4,
      y: Math.random() * 0.8 - 0.4,
      size: Math.random() * 2 + 1 // Slightly larger sparkles
    }));
  }

  draw(ctx: CanvasRenderingContext2D, time: number) {
    const t = time * 0.001;
    
    // Create bubble gradient with pastel iridescent colors
    const gradient = ctx.createRadialGradient(
      this.x - this.size * 0.3,
      this.y - this.size * 0.3,
      0,
      this.x,
      this.y,
      this.size
    );

    // Calculate iridescent colors
    const hue1 = (Math.sin(t + this.iridescence) * 60 + 280) % 360;
    const hue2 = (hue1 + 30) % 360;
    const hue3 = (hue1 + 60) % 360;

    gradient.addColorStop(0, `hsla(${hue1}, 100%, 80%, ${this.opacity * 0.8})`);
    gradient.addColorStop(0.5, `hsla(${hue2}, 100%, 75%, ${this.opacity * 0.5})`);
    gradient.addColorStop(1, `hsla(${hue3}, 100%, 70%, ${this.opacity * 0.1})`);

    // Draw main bubble
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Add iridescent rim
    const rimGradient = ctx.createRadialGradient(
      this.x,
      this.y,
      this.size * 0.85,
      this.x,
      this.y,
      this.size
    );

    const rimHue = (hue1 + 120) % 360;
    rimGradient.addColorStop(0, `hsla(${rimHue}, 100%, 80%, 0)`);
    rimGradient.addColorStop(0.5, `hsla(${rimHue}, 100%, 90%, ${this.opacity * 0.3})`);
    rimGradient.addColorStop(1, `hsla(${rimHue}, 100%, 80%, 0)`);

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = rimGradient;
    ctx.fill();

    // Add shine
    const shineX = this.x - this.size * 0.3;
    const shineY = this.y - this.size * 0.3;
    const shineGradient = ctx.createRadialGradient(
      shineX,
      shineY,
      0,
      shineX,
      shineY,
      this.size * 0.8
    );

    shineGradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * 0.8})`);
    shineGradient.addColorStop(0.2, `rgba(255, 255, 255, ${this.opacity * 0.3})`);
    shineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.beginPath();
    ctx.arc(shineX, shineY, this.size * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = shineGradient;
    ctx.fill();

    // Draw sparkles
    this.sparkles.forEach(sparkle => {
      const sparkleX = this.x + sparkle.x * this.size;
      const sparkleY = this.y + sparkle.y * this.size;
      
      const sparkleGradient = ctx.createRadialGradient(
        sparkleX,
        sparkleY,
        0,
        sparkleX,
        sparkleY,
        sparkle.size * 2
      );

      sparkleGradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
      sparkleGradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity * 0.5})`);
      sparkleGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.arc(sparkleX, sparkleY, sparkle.size, 0, Math.PI * 2);
      ctx.fillStyle = sparkleGradient;
      ctx.fill();
    });
  }

  update(canvas: HTMLCanvasElement) {
    this.x += this.speedX;
    this.y += this.speedY;

    // Reset position when bubbles move out of view
    if (this.x < -this.size) this.x = canvas.width + this.size;
    if (this.x > canvas.width + this.size) this.x = -this.size;
    if (this.y < -this.size) {
      // When bubble goes above screen, reset to bottom
      this.y = canvas.height + this.size;
      // Randomize horizontal position when resetting
      this.x = Math.random() * canvas.width;
    }
    if (this.y > canvas.height + this.size) this.y = -this.size;
  }
}

const FloatingBubbles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const initBubbles = () => {
      bubblesRef.current = Array(30).fill(null).map(() => new Bubble(canvas)); // Reduced to 30 bubbles
    };

    const animate = (time: number) => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      bubblesRef.current.forEach(bubble => {
        bubble.update(canvas);
        bubble.draw(ctx, time);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initBubbles();
    animate(0);

    window.addEventListener('resize', () => {
      resizeCanvas();
      initBubbles();
    });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none will-change-transform"
      aria-hidden="true"
    />
  );
};

export default FloatingBubbles;