"use client";

import React, { useEffect,useRef } from "react";
import { useScroll, useTransform, motion } from 'framer-motion'
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

const page = () => {
  const router = useRouter();
  const container = useRef(null);
  // const footer = useRef(null);

  const { scrollYProgress:containerScroll } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(containerScroll, [0, 1], [1, 4]);

  // const { scrollYProgress:footerScroll } = useScroll({
  //   target: footer,
  //   offset: ["start start", "end end"],
  // });

  // const scale2 = useTransform(footerScroll, [0, 1], [1, 4]);

  // Optional: if you want route to scroll to top on arrival
  // useEffect(() => {
  //   if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "auto" });
  // }, []);

  return (
    <div>
      <section className="h-screen relative">
        <motion.img
          src="/portfolio/img4.png"
          alt="hero-img"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }} 
          transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.12 }}
        />

        {/* Overlay + textual hero content */}
        <div className="absolute inset-0 bg-black/40 "/> 
        <div className="flex flex-col text-white justify-center items-start w-screen h-screen relative overflow-hidden">
          <div className='flex flex-col gap-y-20 pl-15 lg:flex-row lg:justify-between lg:items-start w-screen'>
            <div className="flex flex-col">
              <h1 className='text-[38px]'>Antara Living</h1>
              <p className='text-[16px] uppercase'>World’s First Luxury Abaya Maison</p>
            </div>
            <div className="flex flex-col justify-center items-end gap-6 lg:pr-15">
              <p className="w-[200px] md:w-[325px] font-light lg:text-right text-[16px]">
                Selhaya entered Vedara’s closed-circle ecosystem to evolve from a promising luxury brand into an unforgettable maison.
              </p>
              <button className="w-40 h-10 lg:w-45 lg:h-13 rounded-full bg-[#CEBFB3]/10">
                <div className="">
                  Visit Website
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between w-screen gap-10 px-15 mt-12">
            <div className="flex flex-col">
              <div className="flex gap-12">
                <p className="font-semibold">Client</p>
                <li className='list-disc list-inside'>Kalpesh Singh</li>
              </div>

              <div className="flex gap-6">
                <p className="font-semibold">Services</p>
                <ul className="flex gap-4 lg:list-disc list-inside">
                  <li className=''>Visual Design</li>
                  <li className=''>Brand identity </li>
                  <li className=''>UX/UI design</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-6">
                <p>Industries</p>
                <li className='list-disc list-inside'>Hospitality</li>
              </div>

              <div className="flex gap-16">
                <p>Date</p>
                <ul className="flex gap-4 lg:list-disc list-inside">
                  <li className=''>August ‘2025</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-45 bg-black flex flex-col justify-center items-center gap-y-25">
        <p className="uppercase text-[20px] lg:text-[36px] w-[300px] lg:w-[665px]">Selhaya World’s First Luxury Abaya Maison</p>
        <div className="flex flex-col lg:flex-row w-[300px] lg:w-[600px] relative gap-6">
          <p className="uppercase font-semibold lg:absolute -left-50">our objective</p>
          <p className="text-[12px] lg:text-[20px]">
            Vedara’s objective with Selhaya was to evolve a beautiful concept into a fully realized couture identity, one that could stand confidently beside established luxury houses while retaining the soul of its origin.
          </p>
        </div>
        <img src="/antara/img1.png" alt="img1" className="w-[300px] lg:w-[480px]"/>
        <div className="flex w-[300px] lg:w-screen lg:justify-center items-center lg:gap-42">
          <img src="/antara/img2.png" alt="img2" className="w-[155px] lg:w-[224px]"/>

          <div className="hidden lg:block space-y-4">
            <p className="uppercase font-semibold">core challenges</p>
            <p className='w-103'>
              Selhaya possessed depth and artistic intention but its digital expression lacked the architecture needed to convey true luxury. Our challenge was to honour Selhaya’s soul while taking care of every touchpoint to meet the standards of a world-class luxury house.
            </p>
          </div>
        </div>

        <img src="/antara/img3.png" alt="img3" className="lg:hidden w-[300px]"/>

        <div className="flex w-[300px] lg:w-screen justify-end items-center lg:pl-20 lg:justify-center lg:gap-56">

          <img src="/antara/img4.png" alt="img4" className="lg:hidden relative w-[155px]"/>
          <img src="/antara/img4.png" alt="img4" className="hidden lg:flex relative w-56 top-[143px]"/>
          <img src="/antara/img3.png" alt="img3" className="hidden lg:flex w-[300px] lg:w-[480px]"/>
        </div>
        <div className="lg:hidden space-y-4">
          <p className="uppercase font-semibold">core challenges</p>
          <p className='w-70 text-[12px]'>
            Selhaya possessed depth and artistic intention but its digital expression lacked the architecture needed to convey true luxury. Our challenge was to honour Selhaya’s soul while taking care of every touchpoint to meet the standards of a world-class luxury house.
          </p>
        </div>

        <div ref={container} className="w-screen h-[300vh] -mt-70 lg:-mt-30 relative">
          <div className="sticky overflow-hidden top-0 h-screen">
            <motion.div style={{scale: scale1}} className='w-full h-full top-0 absolute flex justify-center items-center'>
              <div className="relative w-[25vw]">
                <img src="/antara/img5.png" alt="img5" className="object-cover"/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center pb-26 bg-black">
        <div className="flex flex-col lg:flex-row justify-center w-70 lg:w-screen gap-10 lg:gap-24">
          <p className='uppercase text-[18px] lg:text-[20px]'>Our solution</p>
          <p className="lg:w-120 text-[12px] lg:text-[18px]">
            Vedara distilled Selhaya’s fragmented presence into a coherent, luxurious digital universe, one defined by intention, restraint, and emotional precision. We rebuilt the brand’s narrative system, visual language, and website architecture. The result was a platform not just redesigned, but re-imagined.
          </p>
        </div>
        <video src="/selhaya/vid1.mp4" autoPlay muted loop className="w-[300px] lg:w-[814px] mt-15"/>

      </section>

      <section className="py-34 bg-primary relative overflow-x-hidden">

        <img src="/antara/img6.png" alt="img6" className="w-[300px] lg:w-[813px] mx-auto"/>

        <div className="flex flex-row-reverse justify-between mt-68">
          <img src="/antara/img7.png" alt="img7" className="w-[300px] lg:w-[722px] lg:h-[1299px]"/>

          <div className="flex flex-col justify-between gap-60">
            <div className="flex flex-col gap-4 pl-25 text-black">
              <p className="uppercase font-semibold">
                From Aesthetically Nice to Unforgettable
              </p>
              <p className="w-103">
                The transformation began with a complete reinvention of Selhaya’s website, a digital maison crafted with obsessive detail. Thoughtful micro-interactions that brought the brand to life.
              </p>
            </div>
            <img src="/antara/img8.png" alt="img8" className="w-[300px] lg:w-[722px] lg:h-[1535px]"/>

          </div>
        </div>


        <video src="/selhaya/vid2.mp4" autoPlay muted loop className="w-[300px] lg:w-[813px] mx-auto mt-80"/>

        <div className="flex justify-between pl-25 mt-80 w-screen">
          <div className="flex flex-col gap-4 text-black">
            <p className="uppercase font-semibold">
              From Aesthetically Nice to Unforgettable
            </p>
            <p className="w-103">
              The transformation began with a complete reinvention of Selhaya’s website, a digital maison crafted with obsessive detail. Thoughtful micro-interactions that brought the brand to life.
            </p>
          </div>
          <img src="/antara/img9.png" alt="img9" className="w-[300px] lg:w-[480px]"/>
        </div>

        <div className="flex justify-between pr-25 mt-40 w-screen">
          <img src="/antara/img10.png" alt="img10" className="w-[300px] lg:w-[480px]"/>
          <div className="flex flex-col gap-4 text-black">
            <p className="uppercase font-semibold">
              From Aesthetically Nice to Unforgettable
            </p>
            <p className="w-103">
              The transformation began with a complete reinvention of Selhaya’s website, a digital maison crafted with obsessive detail. Thoughtful micro-interactions that brought the brand to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-45 bg-black flex flex-col justify-center items-center gap-y-30 lg:gap-y-55">
        <img src="/antara/img11.png" alt="img11" className="w-[300px] lg:w-[480px]"/>

        <div className="hidden lg:flex justify-between gap-36 relative">
          <img src="/antara/img12.png" alt="img12" className="relative w-[300px] lg:w-[224px] -top-20"/>
          <img src="/antara/img13.png" alt="img13" className="w-[300px] lg:w-[480px]"/>
        </div>

        <img src="/antara/img13.png" alt="img13" className="w-[300px] lg:hidden"/>

        <img src="/antara/img12.png" alt="img12" className="w-[155px] lg:hidden"/>

        <div className="lg:hidden flex flex-col gap-y-4 w-70 mx-auto">
            <p className="uppercase font-semibold text-[18px]">A Precise Showcase</p>
            <p className='text-[12px]'>
              Every product, narrative, and detail was re-presented with clarity, intention, and aesthetic precision.
              We ensured the digital display became an extension of Selhaya’s craftsmanship, not merely a catalogue.
            </p>
        </div>

        <div className="hidden lg:flex gap-42 ml-50">
          <div className="space-y-4">
            <p className="uppercase font-semibold">A Precise Showcase</p>
            <p className='w-103'>
              Every product, narrative, and detail was re-presented with clarity, intention, and aesthetic precision.
              We ensured the digital display became an extension of Selhaya’s craftsmanship, not merely a catalogue.
            </p>
          </div>
          <img src="/antara/img14.png" alt="img14" className="w-[224px]"/>
        </div>

        <img src="/antara/img14.png" alt="img14" className='w-[300px] lg:hidden'/>

        <img src="/antara/img15.png" alt="img15" className="hidden lg:block w-[300px] lg:w-[480px] -mt-85 -ml-40"/>
      </section>

      <Footer/>
    </div>
    );
}

export default page