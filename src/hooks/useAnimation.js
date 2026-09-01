import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Shared easing curves for a premium feel
export const EASE_OUT = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT = [0.45, 0, 0.55, 1];

// 1. Fade Up (Used for Headings & Text)
export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE_OUT, delay },
  }),
};

// 2. Scale Fade (Used for Buttons & Icons)
export const scaleFade = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: EASE_OUT, delay },
  }),
};

// 3. Stagger Container & Children (Used for Cards/Grids)
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const staggerChild = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};
