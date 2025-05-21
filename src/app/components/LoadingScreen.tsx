"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  // ===== SINGLE TIME CONFIGURATION =====
  const LOADING_DURATION = 400; // Master duration in milliseconds

  // Derived timing values (automatically calculated)
  const UPDATE_INTERVAL = Math.max(50, LOADING_DURATION / 100); // Min 50ms interval
  const COMPLETION_DELAY = LOADING_DURATION * 0.1; // 10% of total duration
  const FADE_DURATION = LOADING_DURATION / 3000; // Scales with duration (1s per 3s)

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const totalUpdates = LOADING_DURATION / UPDATE_INTERVAL;
    const progressIncrement = 100 / totalUpdates;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + progressIncrement;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), COMPLETION_DELAY);
          return 100;
        }
        return newProgress;
      });
    }, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, [LOADING_DURATION, UPDATE_INTERVAL, COMPLETION_DELAY]);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: FADE_DURATION }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--themeColor_1)]"
    >
      <div className="w-64 flex flex-col items-center gap-4">
        <div className="w-full h-2 bg-[var(--themeColor_2)]/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
            className="h-full bg-[var(--themeColor_2)] rounded-full"
          />
        </div>
        
        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="text-[var(--textColor_3)] text-sm font-medium"
        >
          {/* {Math.min(100, Math.round(progress))}% */}
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
}