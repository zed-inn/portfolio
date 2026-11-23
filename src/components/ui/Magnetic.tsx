// lowercased comments per rule 8
// subtle fine-pointer magnetic spring wrapper clamped to 5px with zero touch interference
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export const Magnetic: React.FC<MagneticProps> = ({
  children,
  strength = 5,
  className = "",
}) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const isFinePointerRef = useRef(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 260, damping: 20, mass: 0.4 });
  const springY = useSpring(rawY, { stiffness: 260, damping: 20, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    isFinePointerRef.current = window.matchMedia("(pointer: fine)").matches;
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !isFinePointerRef.current || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const relY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    const clampedX = Math.max(-1, Math.min(1, relX)) * strength;
    const clampedY = Math.max(-1, Math.min(1, relY)) * strength;
    rawX.set(clampedX);
    rawY.set(clampedY);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={prefersReducedMotion ? undefined : { x: springX, y: springY }}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.div>
  );
};
