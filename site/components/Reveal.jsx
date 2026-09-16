"use client";
import { motion, useReducedMotion } from "motion/react";

// Wraps server-rendered children. Without JS the content is visible (see .js rule in globals.css).
export default function Reveal({ children, index = 0, className = "", as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <Tag
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: Math.min(index * 0.08, 0.4) }}
    >
      {children}
    </Tag>
  );
}
