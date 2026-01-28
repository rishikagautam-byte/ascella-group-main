"use client"

import { motion, AnimatePresence, useScroll } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import Reveal from "@/utils/Reveal";

export default function Section2({ data }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const prevProgress = useRef(0)

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const dir = v > prevProgress.current ? 1 : -1
      prevProgress.current = v
      setDirection(dir)

      const index = Math.min(
        data.length - 1,
        Math.floor(v * data.length)
      )

      setActiveIndex(index)
    })
  }, [scrollYProgress, data.length])

  return (
    <section ref={sectionRef} className="h-[250vh]">
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <AnimatePresence mode="sync">
          <div
            key={activeIndex}
            className={`absolute inset-0 flex flex-col lg:flex-row justify-between items-center ${data[activeIndex].style}`}
          >
            {/* LEFT TEXT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeIndex}`}
                initial={{
                  x: direction === 1 ? -80 : 80,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  x: direction === 1 ? 80 : -80,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col justify-center w-[380px] lg:w-full pt-25 pb-10 lg:py-20 lg:pl-20 gap-y-3 lg:gap-y-4 lg:max-w-[45%] text-[12px] lg:text-[14px]"
              >
                <Reveal variants={slideInFromTop(0.2)}>
                  <h2 className="italic text-[36px] lg:text-[45px] leading-10">
                    {data[activeIndex].title}
                  </h2>
                </Reveal>
                <Reveal variants={slideInFromLeft(0.2)}><p>{data[activeIndex].para1}</p></Reveal>
                <Reveal variants={slideInFromLeft(0.2)}><p>{data[activeIndex].para2}</p></Reveal>
                <Reveal variants={slideInFromLeft(0.2)}><p className="font-medium mt-1 lg:mt-4 text-[16px] lg:text-[18px] uppercase">{data[activeIndex].subtitle}</p></Reveal>
                <Reveal variants={slideInFromLeft(0.2)}><p>{data[activeIndex].para3}</p></Reveal>
                <button className={`rounded-full bg-black p-[11px] hover:cursor-pointer w-fit ${data[activeIndex].btnTextColor}`}>
                  <Link href={data[activeIndex].btnLink}>
                    {data[activeIndex].btnText}
                  </Link>
                </button>
              </motion.div>
            </AnimatePresence>

            {/* RIGHT IMAGE */}
            <AnimatePresence mode="sync">
              <motion.img
                key={`img-${activeIndex}`}
                src={data[activeIndex].imgSrc}
                alt={data[activeIndex].title}
                initial={{
                  y: direction === 1 ? "100%" : "-100%",
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: direction === 1 ? "-100%" : "100%",
                  opacity: 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="h-fit lg:h-screen lg:w-1/2"
              />
            </AnimatePresence>
          </div>
        </AnimatePresence>
      </div>
    </section>
  )
}
