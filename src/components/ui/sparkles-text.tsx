"use client";

import { CSSProperties, ReactElement, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface SparklesTextProps {
  as?: ReactElement;
  className?: string;
  text: string;
  sparklesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
}

const SparklesText: React.FC<SparklesTextProps> = ({
  text,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  className,
  sparklesCount = 10,
  ...props
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateStar = (): Sparkle => {
      // Create a wider distribution for sparkles
      const position = Math.random();
      let starX, starY;

      // Distribute sparkles in a rectangle around the text
      if (position < 0.25) {
        // Left side
        starX = `-${Math.random() * 50}%`;
        starY = `${Math.random() * 150 - 25}%`;
      } else if (position < 0.5) {
        // Right side
        starX = `${Math.random() * 50 + 100}%`;
        starY = `${Math.random() * 150 - 25}%`;
      } else if (position < 0.75) {
        // Top
        starX = `${Math.random() * 150 - 25}%`;
        starY = `-${Math.random() * 50}%`;
      } else {
        // Bottom
        starX = `${Math.random() * 150 - 25}%`;
        starY = `${Math.random() * 50 + 100}%`;
      }

      const color = Math.random() > 0.5 ? colors.first : colors.second;
      const delay = Math.random() * 4;
      const scale = Math.random() * 0.8 + 0.4; // Slightly smaller sparkles
      const lifespan = Math.random() * 15 + 10;
      const id = `${starX}-${starY}-${Date.now()}`;
      return { id, x: starX, y: starY, color, delay, scale, lifespan };
    };

    const initializeStars = () => {
      const newSparkles = Array.from({ length: sparklesCount }, generateStar);
      setSparkles(newSparkles);
    };

    const updateStars = () => {
      setSparkles((currentSparkles) =>
        currentSparkles.map((star) => {
          if (star.lifespan <= 0) {
            return generateStar();
          } else {
            return { ...star, lifespan: star.lifespan - 0.05 };
          }
        }),
      );
    };

    initializeStars();
    const interval = setInterval(updateStars, 200);

    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparklesCount]);

  return (
    <div
      className={cn("text-lg font-medium relative", className)}
      {...props}
      style={
        {
          "--sparkles-first-color": `${colors.first}`,
          "--sparkles-second-color": `${colors.second}`,
        } as CSSProperties
      }
    >
      <span className="relative inline-block">
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
        <strong className="relative z-10">{text}</strong>
      </span>
    </div>
  );
};

const Sparkle: React.FC<Sparkle> = ({ id, x, y, color, delay, scale }) => {
  return (
    <motion.svg
      key={id}
      className="pointer-events-none absolute z-20"
      initial={{ opacity: 0, left: x, top: y }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, scale, 0],
        rotate: [0, 180, 360],
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        delay,
        ease: "easeInOut"
      }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <path
        d="M7.4 0.6C7.6 0.2 8.3 0.2 8.5 0.6L9 1.8C9.4 2.8 9.3 4.8 10.2 5.7C11 6.5 13.1 6.5 14 6.9L15.3 7.4C15.7 7.6 15.7 8.3 15.3 8.5L14 9C13.1 9.4 11 9.3 10.2 10.2C9.3 11 9.4 13.1 9 14L8.5 15.3C8.3 15.7 7.6 15.7 7.4 15.3L6.9 14C6.5 13.1 6.5 11 5.7 10.2C4.8 9.3 2.8 9.4 1.8 9L0.6 8.5C0.2 8.3 0.2 7.6 0.6 7.4L1.8 6.9C2.8 6.5 4.8 6.5 5.7 5.7C6.5 4.8 6.5 2.8 6.9 1.8L7.4 0.6Z"
        fill={color}
      />
    </motion.svg>
  );
};

export { SparklesText };