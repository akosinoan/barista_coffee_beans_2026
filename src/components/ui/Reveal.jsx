import { motion, useReducedMotion } from 'framer-motion';

/**
 * Fade-up-on-scroll wrapper used throughout the page.
 * - Animates once when it enters the viewport.
 * - Honors prefers-reduced-motion (renders without motion).
 * - `delay` lets callers stagger sequences manually.
 */
const Reveal = ({ children, delay = 0, y = 24, className, as = 'div' }) => {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
