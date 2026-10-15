'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { Children, isValidElement } from 'react';

export default function StaggerContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return <div className={className}>
    {Children.map(children, (child, index) => <motion.div
      key={isValidElement(child) ? child.key ?? index : index}
      className="h-full min-w-0"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: reduceMotion ? 0 : 0.4 }}
      whileHover={reduceMotion ? undefined : { y: -2 }}
    >{child}</motion.div>)}
  </div>;
}
