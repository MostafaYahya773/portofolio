'use client';

import { motion } from 'framer-motion';

export default function Animation({
  children,
  delay,
  duration,
  className,
  y,
  x,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay, duration, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
