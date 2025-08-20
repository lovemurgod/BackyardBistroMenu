import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Bubble {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const createBubbles = () => {
      const bubbleCount = window.innerWidth < 768 ? 15 : 25;
      const newBubbles: Bubble[] = [];

      for (let i = 0; i < bubbleCount; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 30 + 10,
          left: Math.random() * 100,
          top: Math.random() * 100,
          duration: Math.random() * 4 + 4,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.6 + 0.2,
        });
      }

      setBubbles(newBubbles);
    };

    createBubbles();

    const handleResize = () => {
      createBubbles();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="bubble absolute"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            opacity: bubble.opacity,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
