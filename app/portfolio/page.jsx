"use client";
import Footer from "@/components/Footer";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Reveal from "@/utils/Reveal";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import StickyPanelScroller from "./StickyPanelScroller";

const page = () => {
  
  const ITEMS = [
    {
      title:
        "What Makes Vedara Different From Traditional Branding Or Marketing Agencies?",
      body: `Vedara does not create brands for market cycles; we architect identities meant to enter cultural memory.
  Our work blends cultural research, symbolic strategy, and UHNWI-level refinement to build legacies, not deliverables. Clients come to us when they want their brand to become a dynasty, not a trend.`,
    },
    {
      title: "How Do You Ensure Your Work Remains Timeless, Not Trend-Driven?",
      body: `We anchor every project in heritage, philosophy, and long-term cultural relevance.
  Design and strategy evolve from meaning, not from what's momentarily fashionable.
  The result: identities, systems, and experiences that hold power across decades.`,
    },
    {
      title: "Who Is The Ideal Client For Vedara?",
      body: `We work with luxury hotels, heritage brands, UHNWI founders, and culturally ambitious businesses.
  Our clients share one trait: a desire to build something that outlives them.
  If you value depth, symbolism, and legacy, you are aligned with our world.`,
    },
    {
      title: "What Can I Expect From Working With Vedara?",
      body: `A deeply investigative, collaborative, and high-touch process that reveals your brand's cultural core.
  Expect rigorous thinking, elevated execution, and an obsession with meaning.
  We don't just design, we define the future of your brand's legacy.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }
  const container1 = useRef(null);
  // const container2 = useRef(null);
  const container3 = useRef(null);
  const container4 = useRef(null);

  const {scrollYProgress: section1} = useScroll({
    target: container1,
    offset: ["start start", "end start"]
  });

  // const {scrollYProgress: section2} = useScroll({
  //   target: container2,
  //   offset: ["start start", "end start"]
  // });

  const {scrollYProgress: section3} = useScroll({
    target: container3,
    offset: ["start start", "end start"]
  });

  const {scrollYProgress: section4} = useScroll({
    target: container4,
    offset: ["start end", "end start"]
  });

  const s1 = useTransform(section1, [0,1], [0,-300]);
  const s1bg= useTransform(section1, [0,1], [0,500]);
  // const s2 = useTransform(section2, [0,1], [0,-200]);
  // const s2bg = useTransform(section2, [0,1], [0,500]);
  const s3 = useTransform(section3, [0,1], [0,-200]);
  const s4 = useTransform(section4, [0,1], [0,100]);

  return (
    <div className="relative w-full overflow-x-clip">
      {/* section hero */}
      <section ref={container1} className="flex flex-col justify-end items-start w-screen h-screen relative overflow-hidden">
        <motion.div style={{y:s1bg}} className="parallax-bg absolute inset-0 -z-1 w-full h-full">
          <img
            src="/portfolio/heroImg.png"
            alt="hero"
            className="w-full h-full will-change-transform object-top object-cover"
            style={{ transformOrigin: "center center" }}
          />
        </motion.div>

        {/* <Reveal variants={slideInFromRight(0.2)}>
          <motion.p style={{y:s1}} className="w-screen text-right mb-12 pr-15 text-[14px] lg:text-[16px]">
            info@vedaracollective.com
          </motion.p>
        </Reveal> */}

        <motion.div style={{y:s1}} className="flex flex-col gap-y-20 px-15 lg:flex-row lg:justify-between w-screen mb-20">
          <Reveal variants={slideInFromLeft(0.2)}>
            <div className="flex flex-col"> 
              <h1 className="text-[45px] lg:text-[64px] italic font-semibold">Our Portfolio</h1>
              <p className="text-[16px] lg:text-[18px]">Work That Outlives Seasons</p>
            </div>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
            <div className="flex flex-col items-end justify-end gap-y-11">
              <p className="text-right text-[16px] lg:text-[18px]">
                info@vedaracollective.com
              </p>
              <p className="w-[300px] md:w-[405px] tracking-tighter font-light lg:text-right text-[16px] lg:text-[18px]">
                Each project is a world we constructed with intention. Here strategy
                becomes culture, design becomes memory, and vision becomes
                permanence.
              </p>
            </div>
          </Reveal>
        </motion.div>

        {/* <Reveal variants={slideInFromLeft(0.2)}>
          <motion.div style={{y:s1}} className="flex flex-col lg:flex-row gap-10 ml-15 mt-12 mb-20 text-[16px] lg:text-[18px]">
            <p>Branding 01</p>
            <p>Digital Marketing 01</p>
            <p>Development 01</p>
          </motion.div>
        </Reveal> */}
      </section>

      {/* section 2 */}
      {/* <section ref={container2} className="flex flex-col justify-center items-center w-screen bg-primary relative py-30 lg:py-42 overflow-hidden">
        <motion.div style={{y:s2bg}} className="absolute inset-0 w-full h-full">
          <img
            src={bgImg.src}
            alt="bg overlay"
            className="w-full h-full object-cover will-change-transform"
            style={{ transformOrigin: "center center" }}
          />
        </motion.div>

        <motion.div style={{y:s2}} className="flex flex-col lg:flex-row lg:items-start lg:gap-42">
          <div
            className="relative bg-cover bg-center w-[400px] h-[504px]"
            style={{ backgroundImage: `url('/portfolio/img1.png')` }}
          >
            <p className="w-full pl-10 py-7">
              Explore <ArrowForwardOutlined />
            </p>
            <p className="w-full backdrop-blur-xs mt-86 pl-10 py-7">
              A legacy does not end at completion
            </p>
          </div>

          <div className="w-[377px] mt-10 text-black space-y-10 text-[20px]">
            <p className="font-medium">A legacy does not end at completion</p>
            <p className="text-[16px] font-light">
              We remain as your quiet counsel refining, expanding, and
              preserving the cultural frequency you’ve created.This is not
              delivery. It is devotion.
            </p>
            <p className="font-medium">
              Explore <ArrowForwardOutlined />{" "}
            </p>
          </div>
        </motion.div>

        <motion.div style={{y:s2}} className="flex flex-col-reverse lg:flex-row items-center lg:gap-42">
          <div className="w-[377px] text-black space-y-10 mt-10 lg:mt-0 text-[20px]">
            <p className="font-medium">A legacy does not end at completion</p>
            <p className="text-[16px] font-light">
              We remain as your quiet counsel refining, expanding, and
              preserving the cultural frequency you’ve created.This is not
              delivery. It is devotion.
            </p>
            <p className="font-medium">
              Explore <ArrowForwardOutlined />
            </p>
          </div>

          <div
            className="relative bg-cover bg-center w-[400px] h-[504px] mt-10 lg:-mt-30 "
            style={{ backgroundImage: `url('/portfolio/img1.png')` }}
          >
            <p className="w-full backdrop-blur-xs pl-10 py-7">
              A legacy does not end at completion
            </p>
            <p className="w-full mt-86 pl-10 py-7">
              Explore <ArrowForwardOutlined />{" "}
            </p>
          </div>
        </motion.div>
      </section> */}

      {/* section 3 */}
      <section className="flex flex-col justify-center items-center">
        <div className="top-0 pt-[140px] mb-[140px] space-y-20">
          <div className="flex justify-between w-[300px] lg:w-[800px] text-[28px] lg:text-[45px] uppercase">
            <Reveal variants={slideInFromLeft(0.2)}><p>All Projects</p></Reveal>
            <Reveal variants={slideInFromRight(0.2)}><p>01</p></Reveal>
          </div>

          <Reveal variants={slideInFromRight(0.2)}>
            <p className="justify-self-end w-[300px] lg:w-[410px] text-right font-medium text-[14px] lg:text-[18px]">
              Every identity is built to endure, designed with the precision of an
              archivist and the vision of a futurist. What emerges is not a
              “brand,” but a cultural marker.
            </p>
          </Reveal>
        </div>
      <StickyPanelScroller panels={
        [
          // {
          //   bg: "/portfolio/img3.png", cardImg: "/portfolio/img4.png", link: "/portfolio/antara", number: "01", heading: "The Revelation", text: "Through guided dialogue and symbolic inquiry, we uncover the deeper architecture of your identity the myth you were always meant to live.Your cultural territory, archetype, and legacy intention emerge with precision.",explore:"Explore"
          // }, 
        {
          bg: "/portfolio/img11.png", cardImg: "/portfolio/img12.png", link: "/portfolio/selhaya", number: "01", heading: "SELHAYA", text: "We reimagined Selhaya’s foundational identity with refined narrative, elevated language, and cultural intelligence.Vedara shaped a distinct luxury persona that feels timeless, confident, and unmistakably Selhaya.",explore:"Explore"
        },
        // {
        //   bg: "/portfolio/img7.png", cardImg: "/portfolio/img8.png", link: "/portfolio", number: "03", heading: "The Revelation", text: "Through guided dialogue and symbolic inquiry, we uncover the deeper architecture of your identity the myth you were always meant to live.Your cultural territory, archetype, and legacy intention emerge with precision.",explore:"Explore"
        // }
      ]
        } />
      </section>

      {/* section 4 */}
      {/* <section className="flex flex-col justify-center items-center bg-primary">

        <div className="sticky top-0 pt-[140px] mb-[140px] space-y-20 text-black">
          <div className="flex justify-between w-[300px] lg:w-[800px] max-w-screen text-[28px] lg:text-[40px] uppercase">
            <p>Digital Marketing</p>
            <p>03</p>
          </div>

          <p className="justify-self-end w-[300px] lg:w-[410px] text-right font-medium text-[14px] lg:text-[16px]">
            We engineer digital presence with the intelligence of market
            architecture and the elegance luxury demands. Our campaigns are
            influence-driven.
          </p>
        </div>

        <StickyPanelScroller panels={
        [
          {
            bg: "/portfolio/img9.png", cardImg: "/portfolio/img10.png", link: "/portfolio", number: "01", heading: "The Revelation", text: "Through guided dialogue and symbolic inquiry, we uncover the deeper architecture of your identity the myth you were always meant to live.Your cultural territory, archetype, and legacy intention emerge with precision.",explore:"Explore", bgcolor:"bg-[#2A2927]", txtcolor:"text-white", alignment:"justify-start"
          }
        ]
        } />
      </section> */}

      {/* section 5 */}
      {/* <section className="flex flex-col justify-center items-center bg-black">
        <div className="sticky top-0 pt-[140px] mb-[140px] space-y-20">
          <div className="flex justify-between w-[300px] lg:w-[800px] max-w-screen text-[28px] lg:text-[40px] uppercase">
            <p>Web Development & Tech</p>
            <p>05</p>
          </div>

          <p className="justify-self-end w-[300px] lg:w-[410px] text-right font-medium text-[14px] lg:text-[16px]">
            We build digital experiences that feel architectural: immersive, &
            intuitive. Every interface is crafted to signal rarity,
            sophistication, and uncompromising taste.
          </p>
        </div>

        <StickyPanelScroller panels={
        [
          {
            bg: "/portfolio/img11.png", cardImg: "/portfolio/img12.png", link: "/portfolio/antara", number: "01", heading: "The Revelation", text: "Through guided dialogue and symbolic inquiry, we uncover the deeper architecture of your identity the myth you were always meant to live.Your cultural territory, archetype, and legacy intention emerge with precision.",explore:"Explore"
          }, 
        {
          bg: "/portfolio/img3.png", cardImg: "/portfolio/img4.png", link: "/portfolio/selhaya", number: "02", heading: "The Revelation", text: "Through guided dialogue and symbolic inquiry, we uncover the deeper architecture of your identity the myth you were always meant to live.Your cultural territory, archetype, and legacy intention emerge with precision.",explore:"Explore"
        }
        ]
        } />
      </section> */}

      {/* section 6 */}
      <motion.section ref={container3} className="flex flex-col justify-center items-center py-42 relative bg-black overflow-hidden">
        <Reveal variants={slideInFromTop(0.2)}>
          <motion.h2 style={{y:s3}} className="font-extralight italic text-[28px] lg:text-[45px]">
            FAQs
          </motion.h2>
        </Reveal>

        <Reveal variants={slideInFromBottom(0.2)}>
          <motion.section style={{y:s3}} className="w-[380px] lg:w-[1100px] mx-auto px-6 py-12 text-gray-200">
            <div className="space-y-8">
              {ITEMS.map((item, i) => {
                const indexLabel = String(i + 1).padStart(2, "0");
                const isOpen = openIndex === i;

                return (
                  <div key={i} className="relative">
                    {/* top divider */}
                    <div className="border-t border-white"/>

                    <div
                      className="flex items-start gap-6 py-8"
                    >
                      {/* Left number */}
                      <div className="w-12 shrink-0">
                        <h2 className="text-[20px] lg:text-[36px] italic font-extralight">
                          {indexLabel}
                        </h2>
                      </div>

                      {/* Content area (title + body) */}
                      <div className="flex-1 min-w-0">
                        <button
                          type="button"
                          onClick={() => toggle(i)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${i}`}
                          className="flex items-start w-full text-left gap-4 focus:outline-none"
                        >
                          <p className="flex-1 text-[16px] md:text-[24px] leading-snug">
                            {item.title}
                          </p>

                          {/* Icon */}
                          <div className="shrink-0">
                            <motion.span
                              animate={{ rotate: isOpen ? 45 : 0 }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 22,
                              }}
                              className="w-7 h-7 flex items-center justify-center"
                              aria-hidden="true"
                            >
                              {/* plus icon made with two lines (SVG) so rotation -> cross */}
                              <svg
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                className="text-gray-300"
                              >
                                <path
                                  d="M12 5v14"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M5 12h14"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </motion.span>
                          </div>
                        </button>

                        {/* Expandable panel */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={`faq-panel-${i}`}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.35, ease: "easeInOut" }}
                              className="overflow-hidden mt-4 text-[14px] lg:text-[18px] leading-tight"
                            >
                              {/* content paragraph(s) */}
                              {item.body.split("\n").map((para, idx) => (
                                <p
                                  key={idx}
                                >
                                  {para}
                                </p>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-2 border-t border-white"/>
          </motion.section>
        </Reveal>
      </motion.section>

      {/* footer */}
      <motion.div ref={container4} style={{y:s4}} className="relative ">
        <Footer />
      </motion.div>
    </div>
  );
};

export default page;
