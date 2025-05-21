// utils/animations.ts
import { Variants } from "framer-motion";
import { motion } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export const cardVariants: Variants = {
  hidden: { scale: 1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.3,
    },
  },
};

export const quoteVariants: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    },
  },
};

export const iconVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.3,
    },
  },
};

export const imageVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.3,
    },
  },
};

export const dividerVariants = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  transition: { duration: 0.5, delay: 0.4 },
};

export const Divider = () => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    transition={dividerVariants.transition}
    variants={dividerVariants}
    className="w-3/4 h-px bg-[var(--themeColor_2)] rounded mx-auto mt-16 origin-right"
  />
);
