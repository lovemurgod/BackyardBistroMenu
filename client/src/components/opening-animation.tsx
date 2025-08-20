import { useEffect } from "react";
import { motion } from "framer-motion";
import logoImage from "@assets/Screenshot_2025-07-01_231322-removebg-preview_1755704800527.png";

interface OpeningAnimationProps {
  onComplete: () => void;
}

export default function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-charcoal-grey flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      <div className="text-center">
        <motion.img
          src={logoImage}
          alt="The Backyard Bistro Logo"
          className="w-80 h-auto mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="text-luxury-gold font-dancing text-2xl md:text-3xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
        >
          Welcome to Luxury Dining
        </motion.div>
      </div>
    </motion.div>
  );
}