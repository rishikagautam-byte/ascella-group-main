"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import team from "@/app/constants/team";
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import TeamCard from "./TeamCard";
import { slideInFromLeft } from "@/utils/motion";
import Reveal from "@/utils/Reveal";

export default function TeamCarousel() {
  const containerRef = useRef(null);
  const firstCardRef = useRef(null);
  const lastCardRef = useRef(null);

  const trackRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [step, setStep] = useState(0);

  const [firstFullyVisible, setFirstFullyVisible] = useState(true);
  const [lastFullyVisible, setLastFullyVisible] = useState(false);

  useEffect(() => {
    if (!firstCardRef.current) return;
    const cardWidth = firstCardRef.current.offsetWidth;
    const gap = 40;
    setStep(cardWidth + gap);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === firstCardRef.current) {
            setFirstFullyVisible(entry.intersectionRatio === 1);
          }
          if (entry.target === lastCardRef.current) {
            setLastFullyVisible(entry.intersectionRatio === 1);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 1.0,
      }
    );

    if (firstCardRef.current) observer.observe(firstCardRef.current);
    if (lastCardRef.current) observer.observe(lastCardRef.current);

    return () => observer.disconnect();
  }, []);
  
  const hideControls = firstFullyVisible && lastFullyVisible;
  const maxIndex = team.length - 1;

  const goTo = (index) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  return (
    <section className="w-full flex flex-col justify-center items-center py-30 bg-primary overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between w-full lg:items-end items-center mb-15 lg:pl-33 lg:pr-35 text-black">
        <Reveal variants={slideInFromLeft(0.2)}>
          <h2 className="text-[24px] lg:text-[36px] w-[380px] lg:w-[840px] tracking-tight leading-tight">
            <span className="italic font-semibold">Our Consultancy</span> Is Led By <span className="italic font-semibold">Experienced Strategists</span> Who Work Closely With Founders, Executives, And Leadership Teams.
          </h2>
        </Reveal>
        {!hideControls && (
          <div className="hidden lg:flex gap-3">
            <button
              onClick={() => goTo(currentIndex - 1)}
              disabled={firstFullyVisible }
              className={`hover:cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-white
                ${firstFullyVisible ? " bg-tertiary hover:cursor-not-allowed": "bg-black hover:cursor-pointer"}`}
            >
              <ArrowBackIosNewOutlined />
            </button>

            <button
              onClick={() => goTo(currentIndex + 1)}
              disabled={lastFullyVisible}
              className={`hover:cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-white
                ${lastFullyVisible ? "bg-tertiary hover:cursor-not-allowed": "bg-black hover:cursor-pointer"}`}
            >
              <ArrowForwardIosOutlined />
            </button>
          </div>
        )}
      </div>

      {/* Carousel */}
      <div ref={containerRef} className="w-screen hidden lg:block pl-33 overflow-hidden">
        <motion.div
          animate={{ x: -currentIndex * step }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`flex gap-10`}
        >
          {team.map((member, i) => (
            <TeamCard ref={
                i === 0
                  ? firstCardRef
                  : i === team.length - 1
                  ? lastCardRef
                  : null
              }
              key={i} member={member}/>
          ))}
        </motion.div>
      </div>

      <div className="w-[380px] lg:hidden overflow-hidden mb-6">
        <motion.div
          ref={trackRef}
          animate={{ x: -currentIndex * 380 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`lg:hidden flex`}
        >
          {team.map((member, i) => (
            <TeamCard key={i} member={member}/>
          ))}
        </motion.div>
      </div>

      <div className="lg:hidden flex gap-3">
        <button
          onClick={() => goTo(currentIndex - 1)}
          disabled={currentIndex === 0 }
          className={`hover:cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-white
            ${currentIndex === 0 ? " bg-tertiary hover:cursor-not-allowed": "bg-black hover:cursor-pointer"}`}
        >
          <ArrowBackIosNewOutlined />
        </button>

        <button
          onClick={() => goTo(currentIndex + 1)}
          disabled={currentIndex === maxIndex}
          className={`hover:cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-white
            ${currentIndex === maxIndex ? "bg-tertiary hover:cursor-not-allowed": "bg-black hover:cursor-pointer"}`}
        >
          <ArrowForwardIosOutlined />
        </button>
      </div>
    </section>
  );
}
