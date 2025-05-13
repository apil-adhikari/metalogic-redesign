"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMouse } from "./useMouse";
import { cn } from "./mouse-utils";

export default function AnimatedCursor() {
  const [mouseState] = useMouse();

  // Motion values (for animation)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smoother motion
  const springX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  // Update the motion values when mouse moves
  if (mouseState.x !== null && mouseState.y !== null) {
    mouseX.set(mouseState.x);
    mouseY.set(mouseState.y);
  }

  return (
    <motion.div
      className={cn(
        "fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]",
        "bg-white mix-blend-difference"
      )}
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
}
