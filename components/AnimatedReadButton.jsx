"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function AnimatedReadButton({slug}) {
  return (
    <motion.div
      initial={false}
      className="
        absolute
        pointer-events-none
        opacity-0
        scale-90
        translate-y-3
        group-hover:pointer-events-auto
        group-hover:opacity-100
        group-hover:scale-100
        group-hover:translate-y-0
        transition-all
        duration-300
        ease-out
      "
    >
      <Link href={`/insights/${slug}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            rounded-full
            bg-black/50
            backdrop-blur-sm
            w-[100px]
            py-3
            text-[14px]
            lg:text-[18px]
            text-white
            hover:cursor-pointer
          "
        >
          Read
        </motion.button>
      </Link>
    </motion.div>
  );
}