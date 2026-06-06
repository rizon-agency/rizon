"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

// Smooth ease-out — visible movement across the full duration,
// starts with momentum and decelerates into a soft stop.
const ease = [0.25, 0.46, 0.45, 0.94] as const;

// ── Single element reveal ──

type RevealProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className,
  duration = 1,
  delay = 0,
  y = 48,
}: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Stagger container ──

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ol" | "ul";
};

export function RevealGroup({
  children,
  className,
  stagger = 0.15,
  as = "div",
}: RevealGroupProps) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  return (
    <Tag
      initial={reduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </Tag>
  );
}

// ── Stagger child ──

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
  y?: number;
  as?: "div" | "li" | "article";
};

const itemVariants = (y: number, duration: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease },
  },
});

export function RevealItem({
  children,
  className,
  style,
  duration = 0.9,
  y = 40,
  as = "div",
}: RevealItemProps) {
  const Tag = motion[as];

  return (
    <Tag
      variants={itemVariants(y, duration)}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
