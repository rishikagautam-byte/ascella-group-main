'use client'

import Link from "next/link";
import Section2 from "@/components/Section2";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCarousal from "@/components/ProjectCarousal";
import KeyEngagements from "@/components/KeyEngagements";
import section2Data from "./constants/section2Data";
import TeamCarousel from "@/components/TeamCarousel";
import Reveal from "@/utils/Reveal";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-clip">
      <section className="flex justify-center md:justify-start items-end w-screen h-screen relative">
        <img src="/homeImg.png" alt="home" className="absolute -z-1 inset-0 w-screen h-screen object-cover object-top" />
        <Reveal variants={slideInFromLeft(0.2)}>
          <div className="flex flex-col gap-y-3 lg:gap-y-8 max-w-[370px] lg:max-w-[706px] mb-20 lg:mb-[130px] md:ml-20 lg:ml-[125px]">
            <h1 className="text-[45px] lg:text-[64px] italic font-semibold leading-14 lg:leading-17 tracking-tighter">
              For Those Who <br /> Refuse to Be Forgotten.
            </h1>
            <p className="text-[16px] lg:text-[24px] font-light w-full lg:w-[586px]">
              We forge brands, real estate, and capital systems for visionaries who build for generations, not quarters.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="flex flex-col justify-center items-center bg-black py-15 lg:py-19">
        <div className="flex w-[363px] lg:w-[1091px] max-w-screen">
          <Reveal variants={slideInFromLeft(0.2)}>
            <h2 className="italic text-[14px] lg:text-[16px]">
              About Vedara
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-x-10 items-center lg:items-start w-[363px] lg:w-full lg:px-32 mt-6 lg:mt-19">
          <Reveal variants={slideInFromLeft(0.2)}>
            <p className="lg:w-[510px] text-[24px] lg:text-[36px] mb-6 lg:mb-0 leading-tight">
              At Vedara, we exist to build clarity-driven brands and scalable ecosystems.
            </p>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
            <div className="flex flex-col lg:w-[541px] gap-y-5 lg:gap-y-6 text-[12px] lg:text-[14px]">
              <p className="">
                Vedara operates as an integrated ecosystem where strategy, creativity, and capital come together. We work closely with brands at different stages, from early direction-setting to long-term growth and expansion.
              </p>
              <p className="">
                Our work goes beyond execution. We partner deeply with founders and teams to define purpose, design meaningful brand experiences, and create systems that support sustainable scale. Every decision is guided by clarity, intent, and long-term thinking.
              </p>
            </div>
          </Reveal>
        </div>

        <ProjectCarousal />
      </section>

      <Section2 data={section2Data} />

      <KeyEngagements/>
      
      <TeamCarousel/>

      <section className='flex flex-col justify-center items-center py-35 gap-9 lg:gap-11'>
        <Reveal variants={slideInFromLeft(0.2)} className={`w-[380px] md:w-120 lg:w-[1104px] `}>
          <h2 className="italic text-[16px] lg:text-[18px] text-left">
            How Vedara Works
          </h2>
        </Reveal>
        <div className="flex flex-col gap-y-9 lg:flex-row justify-between items-center w-[380px] md:w-120 lg:w-[1104px]">
          <Reveal variants={slideInFromLeft(0.2)}>
            <motion.p  className=" w-full md:w-120 lg:w-[743px] text-[24px] lg:text-[36px]  leading-tight">
              A Structured Approach To Building, Executing, and Scaling Brands
            </motion.p>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
            <motion.p className="w-full md:w-120 lg:w-[336px] text-[14px] lg:text-[16px]">
              Vedara follows a clear, step-by-step model that connects strategy, execution, and long-term growth. 
            </motion.p>
          </Reveal>
        </div>
        <motion.div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <Reveal variants={slideInFromLeft(0.2)}>
            <div className="bg-primary text-black flex flex-col items-end gap-4 w-[380px] md:w-120 lg:w-84 rounded-2xl px-5 pt-6 pb-12">
              <img src="/home/img1.png" alt="img1" className="relative w-full object-cover" />
              <p className="text-[18px] lg:text-[24px] lg:w-[230px] tracking-tight">
                Discover & Diagnose
              </p>
              <p className="text-right text-[12px] lg:text-[14px] lg:w-[202px] leading-tight">
                Understand the business, brand, and market.
              </p>
            </div>
          </Reveal>
          
          <Reveal variants={slideInFromBottom(0.2)}>
            <div className="bg-secondary flex flex-col gap-2 lg:gap-6 w-[380px] md:w-120 lg:w-84 rounded-2xl px-8 pt-8 pb-13 text-primary">
              <img src="/dynasty/quoteIcon.svg" alt="img2" className="relative w-13 h-9" />
              <p className="text-[18px] lg:text-[24px] mt-16">
                Strategize & Align
              </p>
              <p className="text-[14px] lg:text-[16px] leading-tight">
                We define direction through clear strategy, aligning business goals, brand positioning, and operational priorities.
              </p>
            </div>
          </Reveal>
          
          <Reveal variants={slideInFromRight(0.2)}>
            <div className="bg-primary text-black flex flex-col gap-4 lg:gap-3 w-[380px] md:w-120 lg:w-84 rounded-2xl px-5 py-6">
              <img src="/home/img2.png" alt="img2" className="relative w-full object-cover" />
              <h2 className="italic text-[18px] lg:text-[24px] font-semibold">Build & Execute</h2>
              <p className="text-[14px] lg:text-[16px] leading-tight">
                We design identities, experiences, and digital systems that move brands from recognition to resonance.
              </p>
              <Link href= "/atelier">
                <button className="border-black border-b text-[12px] lg:text-[14px] w-[98px] lg:w-[118px] tracking-wide text-left hover:cursor-pointer">
                  Enter the Studio
                </button>
              </Link>
            </div>
          </Reveal>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
