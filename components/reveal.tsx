"use client";

import { motion, useReducedMotion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport" | "transition"> & {
  children: ReactNode;
  delay?: number;
};

export function Reveal({ children, delay = 0, className, ...props }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 68, rotate: 1.25, filter: "blur(12px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.08, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1.05, ease: [0.1, 0.4, 0.15, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
