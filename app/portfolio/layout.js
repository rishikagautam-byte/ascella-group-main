// app/portfolio/layout.js
"use client";

import React from "react";
import { LayoutGroup, AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Layout for the /portfolio route subtree.
 * Place LayoutGroup here so shared layoutId animations work between pages
 * under /portfolio (e.g., /portfolio/selhaya -> /portfolio/antara).
 */
export default function PortfolioLayout({ children }) {
  const pathname = usePathname();

  return (
    // LayoutGroup keeps shared layout animations working for all children.
    <LayoutGroup>
      {/* AnimatePresence helps choreograph exit/enter. mode="wait" makes it wait for exit to finish. */}
      {/* <AnimatePresence mode="wait"> */}
        {/* Key by pathname so AnimatePresence knows when the route inside /portfolio changed */}
        {/* <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          style={{ minHeight: "100vh" }}
        > */}
          {children}
        {/* </motion.div> */}
      {/* </AnimatePresence> */}
    </LayoutGroup>
  );
}