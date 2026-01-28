"use client";
import { motion } from "framer-motion";

export default function Reveal({ children, variants, className }) {
  return (
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`${className}`}
      >
        {children}
      </motion.div>

  );
}