import { motion } from "framer-motion";
import { useMouse } from "./userMouse";
import { cn } from "./mouse-utils";

export default function AnimatedCursor() {
  const [mouseState] = useMouse();

  return (
    <motion.div
      className={cn(
        "fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]",
        "bg-white mix-blend-difference"
      )}
      animate={{
        translateX: mouseState.x ?? 0,
        translateY: mouseState.y ?? 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      style={{ x: 0, y: 0 }}
    />
  );
}
