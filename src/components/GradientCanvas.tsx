import React, { useEffect, useRef } from 'react';

class FluidGradient {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width: number = 0;
  private height: number = 0;
  private mouseX: number = 0;
  private mouseY: number = 0;
  private lastMouseX: number = 0;
  private lastMouseY: number = 0;
  private isMouseMoving: boolean = false;
  private isMouseDown: boolean = false;
  private mouseMovingTimeout: number = 0;
  private time: number = 0;
  private selectedOrb: number | null = null;
  private orbs: Array<{
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    size: number;
    color: number;
    speed: number;
    angle: number;
    radius: number;
    isFollower?: boolean;
    followIndex?: number;
    followDistance?: number;
  }> = [];
  private colors = [
    { r: 206, g: 150, b: 251 }, // #CE96FB
    { r: 255, g: 143, b: 207 }, // #FF8FCF
    { r: 0, g: 194, b: 186 },   // #00C2BA
    { r: 147, g: 51, b: 234 },  // #9333EA (Service card purple)
  ];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');
    this.ctx = ctx;

    // Initialize main orbs with larger sizes
    for (let i = 0; i < 12; i++) {
      const color = i % 3; // Only use first 3 colors for main orbs
      let baseSize: number;
      
      if (color === 0) { // #CE96FB - biggest
        baseSize = 280 + Math.random() * 320; // Doubled from 140-300 to 280-600
      } else if (color === 2) { // #00C2BA - smaller
        baseSize = 80 + Math.random() * 120; // Doubled from 40-100 to 80-200
      } else { // #FF8FCF - medium
        baseSize = 160 + Math.random() * 240; // Doubled from 80-200 to 160-400
      }

      this.orbs.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        targetX: Math.random() * this.width,
        targetY: Math.random() * this.height,
        size: baseSize,
        color: color,
        speed: 0.015 + Math.random() * 0.02, // Slightly slower for larger orbs
        angle: Math.random() * Math.PI * 2,
        radius: 200 + Math.random() * 400 // Increased radius range
      });
    }

    // Add follower orbs with the service card purple color
    for (let i = 0; i < 8; i++) {
      const followIndex = Math.floor(Math.random() * 12);
      this.orbs.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        targetX: Math.random() * this.width,
        targetY: Math.random() * this.height,
        size: 40 + Math.random() * 80, // Doubled from 20-60 to 40-120
        color: 3, // Service card purple
        speed: 0.04 + Math.random() * 0.04,
        angle: Math.random() * Math.PI * 2,
        radius: 100 + Math.random() * 200,
        isFollower: true,
        followIndex: followIndex,
        followDistance: 100 + Math.random() * 200 // Increased follow distance
      });
    }

    this.resize = this.resize.bind(this);
    this.animate = this.animate.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);

    window.addEventListener('resize', this.resize);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('mouseup', this.handleMouseUp);

    this.resize();
    this.animate(performance.now());
  }

  private handleMouseDown(e: MouseEvent) {
    this.isMouseDown = true;
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    this.selectedOrb = this.orbs.findIndex(orb => {
      const dx = this.mouseX - orb.x;
      const dy = this.mouseY - orb.y;
      return Math.hypot(dx, dy) < orb.size && !orb.isFollower;
    });
  }

  private handleMouseUp() {
    this.isMouseDown = false;
    this.selectedOrb = null;
  }

  private handleMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    
    const mouseMoved = Math.hypot(this.mouseX - this.lastMouseX, this.mouseY - this.lastMouseY) > 1;
    
    if (mouseMoved) {
      this.isMouseMoving = true;
      
      window.clearTimeout(this.mouseMovingTimeout);
      
      this.mouseMovingTimeout = window.setTimeout(() => {
        this.isMouseMoving = false;
      }, 100);
    }
    
    this.lastMouseX = this.mouseX;
    this.lastMouseY = this.mouseY;
  }

  private resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * window.devicePixelRatio;
    this.canvas.height = this.height * window.devicePixelRatio;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  private lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
  }

  private drawOrb(x: number, y: number, size: number, color: number, isSelected: boolean) {
    const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, size);
    const baseColor = this.colors[color];
    const alpha = isSelected ? 0.8 : 0.6;
    
    gradient.addColorStop(0, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${alpha})`);
    gradient.addColorStop(1, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0)`);
    
    this.ctx.fillStyle = gradient;
    this.ctx.beginPath();
    this.ctx.arc(x, y, size, 0, Math.PI * 2);
    this.ctx.fill();

    if (isSelected) {
      this.ctx.strokeStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0.4)`;
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.arc(x, y, size * 0.8, 0, Math.PI * 2);
      this.ctx.stroke();
    }
  }

  private updateOrbPosition(orb: typeof this.orbs[0], index: number, deltaTime: number) {
    if (orb.isFollower) {
      const leader = this.orbs[orb.followIndex!];
      const dx = leader.x - orb.x;
      const dy = leader.y - orb.y;
      const distance = Math.hypot(dx, dy);
      
      const followDistance = orb.followDistance! + Math.sin(this.time * 0.002 + index) * 40;
      
      if (distance > followDistance) {
        const angle = Math.atan2(dy, dx);
        const targetX = leader.x - Math.cos(angle) * followDistance;
        const targetY = leader.y - Math.sin(angle) * followDistance;
        
        orb.x = this.lerp(orb.x, targetX, orb.speed * 1.5);
        orb.y = this.lerp(orb.y, targetY, orb.speed * 1.5);
      }
      
      const swirl = 30 * Math.sin(this.time * 0.003 + index * 0.5);
      orb.x += Math.cos(this.time * 0.002 + index) * swirl * deltaTime;
      orb.y += Math.sin(this.time * 0.002 + index) * swirl * deltaTime;
      
    } else if (this.selectedOrb === index) {
      orb.x = this.mouseX;
      orb.y = this.mouseY;
      orb.targetX = this.mouseX;
      orb.targetY = this.mouseY;
    } else if (this.isMouseMoving) {
      const dx = this.mouseX - orb.x;
      const dy = this.mouseY - orb.y;
      const distance = Math.hypot(dx, dy);
      
      const maxDistance = Math.max(this.width, this.height) * 0.8;
      const influence = Math.pow(1 - Math.min(distance / maxDistance, 1), 2);
      
      const sizeInfluence = 1 - (orb.size / 600); // Adjusted for larger orbs
      const speed = 0.03 + (sizeInfluence * 0.04);
      
      orb.x += dx * influence * speed;
      orb.y += dy * influence * speed;
      
      orb.x += (Math.random() - 0.5) * 2;
      orb.y += (Math.random() - 0.5) * 2;
    } else {
      orb.angle += deltaTime * (0.15 + Math.random() * 0.2); // Slightly slower rotation
      
      const floatRadius = Math.min(this.width, this.height) * 0.5; // Increased float radius
      const centerX = this.width * 0.5;
      const centerY = this.height * 0.5;
      
      const time = this.time * 0.001;
      orb.targetX = centerX + 
        Math.cos(orb.angle) * floatRadius * Math.sin(time * 0.3) +
        Math.sin(orb.angle * 0.5) * floatRadius * 0.5;
      orb.targetY = centerY + 
        Math.sin(orb.angle) * floatRadius * Math.cos(time * 0.2) +
        Math.cos(orb.angle * 0.6) * floatRadius * 0.5;
      
      orb.x = this.lerp(orb.x, orb.targetX, orb.speed * 0.5);
      orb.y = this.lerp(orb.y, orb.targetY, orb.speed * 0.5);
    }
    
    orb.x = Math.max(0, Math.min(this.width, orb.x));
    orb.y = Math.max(0, Math.min(this.height, orb.y));
  }

  private draw(deltaTime: number) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    // Draw main orbs first
    this.orbs.forEach((orb, index) => {
      if (!orb.isFollower) {
        this.updateOrbPosition(orb, index, deltaTime);
        this.drawOrb(orb.x, orb.y, orb.size, orb.color, this.selectedOrb === index);
      }
    });
    
    // Draw follower orbs on top
    this.orbs.forEach((orb, index) => {
      if (orb.isFollower) {
        this.updateOrbPosition(orb, index, deltaTime);
        this.drawOrb(orb.x, orb.y, orb.size, orb.color, false);
      }
    });
  }

  private animate(currentTime: number) {
    const deltaTime = currentTime - this.time;
    this.time = currentTime;
    
    this.draw(deltaTime * 0.001);
    requestAnimationFrame(this.animate);
  }

  public cleanup() {
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mousedown', this.handleMouseDown);
    window.removeEventListener('mouseup', this.handleMouseUp);
    window.clearTimeout(this.mouseMovingTimeout);
  }
}

const GradientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gradientRef = useRef<FluidGradient | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new FluidGradient(canvasRef.current);

    return () => {
      gradientRef.current?.cleanup();
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-white -z-10" />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full -z-5"
        aria-hidden="true"
        style={{
          filter: 'blur(40px)', // Increased blur for larger orbs
          willChange: 'transform'
        }}
      />
    </>
  );
};

export default GradientCanvas;