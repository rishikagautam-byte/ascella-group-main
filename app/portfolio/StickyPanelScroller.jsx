"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageBgWithText from "@/components/ImageBgWithText";

function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

export default function StickyPanelScroller({ panels, onActiveChange = () => {} }) {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const [index, setIndex] = useState(0);

  // compute index from scroll
  useEffect(() => {
    if (!sectionRef.current) return;

    let rafId = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const section = sectionRef.current;
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        const isActive = sectionTop <= 0 && sectionBottom >= viewportHeight;
        onActiveChange(isActive);
        const sectionTopDocument = window.scrollY + rect.top;
        const scrollY = window.scrollY;
        const totalScrollableInSection = Math.max(section.offsetHeight - viewportHeight, 1);
        const scrolledInside = clamp(scrollY - sectionTopDocument, 0, totalScrollableInSection);

        const progress = scrolledInside / totalScrollableInSection; // 0..1
        const floatIndex = progress * panels.length;
        const newIndex = clamp(Math.floor(floatIndex), 0, panels.length - 1);

        setIndex(prev => (prev === newIndex ? prev : newIndex));
      });
    };

    // initial call
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [panels.length, onActiveChange]);

  const panelVariants = {
    initial: { opacity: 0, x: 60, scale: 1.2 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -60, scale: 0.9 },
  };

  const panelTransition = { duration: 0.7, ease: "easeInOut" };

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: `${panels.length * 100}vh` }}
    >
      {/* Sticky viewport */}
      <div ref={stickyRef} className="sticky top-0 h-screen w-screen">
        <div className="relative w-screen h-screen">
          <AnimatePresence mode="sync" initial={false}>
            {panels[index] && (
              <motion.div
                key={index}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={panelVariants}
                transition={panelTransition}
                className={`absolute inset-0 w-screen h-screen flex justify-center lg:justify-end items-center mx- lg:px-20 py-10`}
                style={{
                  zIndex: panels.length - index,
                  backgroundImage: `url(${panels[index].bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  pointerEvents: "auto",
                }}
              >
                <ImageBgWithText
                  img={panels[index].cardImg}
                  heading={panels[index].heading}
                  bgcolor={panels[index].bgcolor}
                  txtcolor={panels[index].txtcolor}
                  text={panels[index].text}
                  explore={panels[index].explore ?? "Explore"}
                  exploreLink={panels[index].link}
                  number={panels[index].number}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
