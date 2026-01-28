'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Footer from '@/components/Footer'
import { ArrowForwardIosOutlined } from '@mui/icons-material'
import Reveal from '@/utils/Reveal'
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const page = () => {
  const container= useRef(null);
  // const footer = useRef(null);
  // const hasNavigated = useRef(false);
  // const router = useRouter();

  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);
  const container4 = useRef(null);

  const {scrollYProgress: section1} = useScroll({
    target: container1,
    offset: ["start start", "end start"]
  });

  const {scrollYProgress: section2} = useScroll({
    target: container2,
    offset: ["start start", "end start"]
  });

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
  const s2 = useTransform(section2, [0,1], [0,-200]);
  const s2bg = useTransform(section2, [0,1], [0,500]);
  const s3 = useTransform(section3, [0,1], [0,-150]);
  const s4 = useTransform(section4, [0,1], [0,-70]);

  
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

//   useMotionValueEvent(footerScroll, "change", (latest) => {
//   if (latest > 0.98 && !hasNavigated.current) {
//     hasNavigated.current = true;

//     window.scrollTo({ top: 0, behavior: "auto" });

//     router.push("/portfolio/antara", {scroll:false});
//   }
// });
  return (
    <div className='relative w-full overflow-x-clip'>
      <section ref={container1} className="flex flex-col justify-end items-start w-screen h-screen relative overflow-hidden">
        <motion.div style={{y:s1bg}} className="absolute -z-1 w-full h-full">
          <img
            src="/selhaya/heroImg.png"
            alt="hero"
            className="w-full h-full will-change-transform object-top object-cover"
            style={{ transformOrigin: "center center" }}
          />
        </motion.div>

        <motion.div style={{y:s1}} className='flex flex-col lg:gap-y-20 px-15 lg:flex-row lg:justify-between lg:items-start w-screen'>
          <Reveal variants={slideInFromLeft(0.2)}>
          <div className="flex flex-col">
            <h1 className='text-[45px] lg:text-[64px] italic font-semibold'>Selhaya</h1>
            <p className='text-[18px] lg:text-[24px] uppercase'>World’s First Luxury Abaya Maison</p>
          </div>
          </Reveal>

          <Reveal variants={slideInFromRight(0.2)}>
          <div className="flex flex-col justify-end items-end lg:text-right text-left gap-6">
            <p className="w-full md:w-[360px] font-light text-[14px] lg:text-[18px] mt-6 lg:mt-0 leading-tight">
              Selhaya entered Vedara’s closed-circle ecosystem to evolve from a promising luxury brand into an unforgettable maison.
            </p>
          </div>
          </Reveal>
        </motion.div>

        <motion.div style={{y:s1}} className="flex flex-col lg:flex-row lg:justify-between w-screen gap-10 px-15 mt-12 text-[14px] lg:text-[18px]">
          <Reveal variants={slideInFromLeft(0.2)}>
          <div className="flex flex-col gap-4">
            <div className="flex gap-11.5">
              <p className='font-semibold'>Client</p>
              <li className='list-disc list-inside'>Selhaya</li>
            </div>

            <div className="flex gap-6">
              <p className='font-semibold'>Services</p>
              <ul className="flex flex-col lg:flex-row gap-4 list-disc list-inside">
                <li className=''>Visual Design</li>
                <li className=''>Brand identity </li>
                <li className=''>UX/UI design</li>
              </ul>
            </div>
          </div>
          </Reveal>

          <Reveal variants={slideInFromRight(0.2)}>
            <div className="flex flex-col gap-4">
              <div className="flex gap-6">
                <p className='font-semibold'>Industries</p>
                <li className='list-disc list-inside'>Fashion</li>
              </div>

              <div className="flex gap-15 lg:gap-18">
                <p className='font-semibold'>Date</p>
                <ul className="flex gap-4 list-disc list-inside">
                  <li className=''>August ‘2025</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </motion.div>
        <Reveal variants={slideInFromBottom(0.2)} className={`mx-auto`}>
          <motion.button style={{y:s1}} className="w-40 h-10 lg:w-45 lg:h-13 rounded-full bg-[#6b6256]/20 backdrop-blur-lg text-[12px] lg:text-[14px] mb-20 lg:mb-30 mt-12 relative">
            <div className='flex justify-between items-center px-5'>
              Visit Website
              <ArrowForwardIosOutlined/>
            </div>
          </motion.button>
        </Reveal>
      </section>

      <section className="py-25 lg:py-45 flex flex-col justify-center items-center gap-y-15 lg:gap-y-25">
        <Reveal variants={slideInFromTop(0.2)}>
          <p className="uppercase text-[28px] lg:text-[45px] w-[300px] lg:w-[665px] leading-9 lg:leading-14">Selhaya World’s First Luxury Abaya Maison</p>
        </Reveal>
        <div className="flex flex-col lg:flex-row w-[300px] lg:w-[600px] relative gap-6">
          <Reveal variants={slideInFromLeft(0.2)}>
            <h2 className="lg:absolute -left-50 italic text-[18px] lg:text-[24px]">Our Objective</h2>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
          <p className="text-[14px] lg:text-[18px] tracking-tighter leading-tight font-light">
            Vedara’s objective with Selhaya was to evolve a beautiful concept into a fully realized couture identity, one that could stand confidently beside established luxury houses while retaining the soul of its origin.
          </p>
          </Reveal>
        </div>
        <Reveal variants={slideInFromBottom(0.2)}>
        <img src="/selhaya/img1.png" alt="img1" className="w-[300px] lg:w-[480px]"/>
        </Reveal>

        <div className="flex w-[300px] lg:w-screen lg:justify-center items-center lg:gap-42">
          <Reveal variants={slideInFromLeft(0.2)}>
          <img src="/selhaya/img2.png" alt="img2" className="w-[155px] lg:w-56"/>
          </Reveal>

          <Reveal variants={slideInFromRight(0.2)}>
          <div className="hidden lg:block space-y-4">
            <h2 className="font-semibold italic text-[24px]">Core Challenges</h2>
            <p className='text-[18px] w-103 font-light tracking-tighter leading-tight'>
              Selhaya possessed depth and artistic intention but its digital expression lacked the architecture needed to convey true luxury. Our challenge was to honour Selhaya’s soul while taking care of every touchpoint to meet the standards of a world-class luxury house.
            </p>
          </div>
          </Reveal>
        </div>

        <img src="/selhaya/img3.png" alt="img3" className="lg:hidden w-[300px]"/>

        <div className="flex w-[300px] lg:w-screen justify-end items-center lg:pl-20 lg:justify-center lg:gap-56">

          <img src="/selhaya/img4.png" alt="img4" className="lg:hidden relative w-[155px]"/>
          <Reveal variants={slideInFromTop(0.2)}>
          <img src="/selhaya/img4.png" alt="img4" className="hidden lg:flex relative w-56 top-[143px]"/>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
          <img src="/selhaya/img3.png" alt="img3" className="hidden lg:flex w-[300px] lg:w-[480px]"/>
          </Reveal>
        </div>
        <Reveal variants={slideInFromLeft(0.2)}>
          <div className="lg:hidden space-y-4">
            <h2 className="italic text-[18px]">Core Challenges</h2>
            <p className='w-70 text-[14px]'>
              Selhaya possessed depth and artistic intention but its digital expression lacked the architecture needed to convey true luxury. Our challenge was to honour Selhaya’s soul while taking care of every touchpoint to meet the standards of a world-class luxury house.
            </p>
          </div>
        </Reveal>

        <Reveal variants={slideInFromRight(0.2)}>
          <img src="/selhaya/img5.png" alt="img5" className="lg:hidden w-[300px]"/>
        </Reveal>

        <div ref={container} className="w-screen h-[300vh] -mt-30 relative hidden lg:block">
          <div className="sticky overflow-hidden top-0 h-screen">
            <motion.div style={{scale: scale1}} className='w-full h-full top-0 absolute flex justify-center items-center'>
              <div className="relative w-[25vw]">
                <img src="/selhaya/img5.png" alt="img5" className="object-cover"/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={container2} className="flex flex-col items-center py-10 lg:py-26">
        <motion.div style={{y:s2}} className="flex flex-col lg:flex-row justify-center gap-x-24 gap-y-6">
          <Reveal variants={slideInFromLeft(0.2)}>
            <h2 className='italic text-[18px] lg:text-[24px]'>Our Solution</h2>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
            <p className="w-70 text-[14px] lg:text-[18px] lg:w-120 tracking-tighter leading-tight">
              Vedara distilled Selhaya’s fragmented presence into a coherent, luxurious digital universe, one defined by intention, restraint, and emotional precision. We rebuilt the brand’s narrative system, visual language, and website architecture. The result was a platform not just redesigned, but re-imagined.
            </p>
          </Reveal>
        </motion.div>
        <Reveal variants={slideInFromBottom(0.2)}>
          <motion.video style={{y:s2}} src="/selhaya/vid1.mp4" autoPlay muted loop className="w-[300px] lg:w-[814px] mt-15"/>
        </Reveal>

      </section>

      <section ref={container3} className="py-20 lg:py-34 bg-primary relative overflow-x-hidden">

        <motion.img style={{y:s3}} src="/selhaya/img6.png" alt="img6" className="w-[300px] lg:w-[813px] mx-auto"/>

        <motion.div style={{y:s3}} className="flex md:hidden flex-col mx-auto mt-32 gap-4 text-black w-72">
          <h2 className="font-semibold italic text-[18px]">
            Vedara’s Strategic Intervention
          </h2>
          <p className="text-[14px] font-light">
            We conducted in-depth alignment sessions, evaluated their long-term vision, and audited their narrative, and experiential gaps.Ensured every page, word, and frame reflected Selhaya’s ethos of craft and elegance.
          </p>
        </motion.div>

        <motion.div style={{y:s3}} className="flex justify-between mt-32 lg:mt-68">
          <img src="/selhaya/img7.png" alt="img7" className="w-[150px] md:w-[300px] lg:w-[663px] relative"/>

          <div className="flex flex-col justify-end md:justify-start md:gap-y-19">
            <Reveal variants={slideInFromRight(0.2)}>
              <div className="hidden md:flex flex-col md:gap-4 text-black w-54 lg:w-104 ml-18">
                <h2 className="font-semibold relative -left-19 italic text-[18px] lg:text-[24px]">
                  Vedara’s Strategic Intervention
                </h2>
                <p className="text-[14px] lg:text-[18px] font-light tracking-tighter leading-tight">
                  We conducted in-depth alignment sessions, evaluated their long-term vision, and audited their narrative, and experiential gaps.Ensured every page, word, and frame reflected Selhaya’s ethos of craft and elegance.
                </p>
              </div>
            </Reveal>
            <img src="/selhaya/img8.png" alt="img8" className="w-[150px] md:w-[300px] lg:w-full relative"/>

          </div>
        </motion.div>


        <Reveal variants={slideInFromBottom(0.2)}>
          <motion.video style={{y:s3}} src="/selhaya/vid2.mp4" autoPlay muted loop className="w-[300px] lg:w-[813px] mx-auto mt-32 lg:mt-45"/>
        </Reveal>

        <motion.div style={{y:s3}} className="flex flex-col items-center lg:items-start lg:flex-row justify-end gap-x-32 gap-y-22 mt-22 lg:mt-50 w-auto">
          <Reveal variants={slideInFromLeft(0.2)}>
            <div className="flex flex-col gap-4 w-[251px] lg:w-103 text-black lg:mt-12">
              <h2 className="font-semibold italic text-[18px] lg:text-[24px]">
                From Aesthetically Nice to Unforgettable
              </h2>
              <p className="text-[14px] lg:text-[18px] font-light tracking-tighter leading-tight">
                The transformation began with a complete reinvention of Selhaya’s website, a digital maison crafted with obsessive detail. Thoughtful micro-interactions that brought the brand to life.
              </p>
            </div>
          </Reveal>
          <div className="lg:hidden w-screen flex justify-end">
            <img src="/selhaya/img9.png" alt="img9" className="w-[300px]"/>
          </div>
          <Reveal variants={slideInFromRight(0.2)}>
            <img src="/selhaya/img9.png" alt="img9" className="hidden lg:block w-full"/>
          </Reveal>
        </motion.div>

        <motion.div style={{y:s3}} className="flex flex-col items-center lg:flex-row-reverse justify-end lg:items-start gap-x-32  gap-y-22 mt-26 lg:mt-40 w-auto">
          <Reveal variants={slideInFromRight(0.2)}>
            <div className="flex flex-col gap-4 w-[285px] lg:w-121 text-black text-right lg:text-left">
              <h2 className="font-semibold italic text-[18px] lg:text-[24px]">
                Our Eye For Detail
              </h2>
              <p className="text-[14px] lg:text-[18px] font-light tracking-tighter leading-tight">
                Design moments that slow the visitor down, exactly how luxury should feel. This level of detail is not optional; it is what separates a premium brand from a luxury house.
              </p>
            </div>
          </Reveal>
          <div className="lg:hidden w-screen flex">
            <img src="/selhaya/img10.png" alt="img10" className="w-[300px]"/>
          </div>
          <Reveal variants={slideInFromLeft(0.2)}>
            <img src="/selhaya/img10.png" alt="img10" className="hidden lg:block w-full"/>
          </Reveal>
        </motion.div>
      </section>

      <section ref={container4} className="py-25 lg:py-45 flex flex-col justify-center items-center gap-y-[75px] lg:gap-y-0">
        <Reveal variants={slideInFromBottom(0.2)}>
          <motion.img style={{y:s4}} src="/selhaya/img11.png" alt="img11" className="w-[300px] lg:w-[480px]"/>
        </Reveal>

        <motion.div style={{y:s4}} className="hidden lg:flex justify-between gap-x-36 relative lg:mt-50">
          <Reveal variants={slideInFromLeft(0.2)}>
            <img src="/selhaya/img14.png" alt="img14" className="relative w-[300px] lg:w-56 -top-20"/>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
            <img src="/selhaya/img12.png" alt="img12" className="w-[300px] lg:w-[480px]"/>
          </Reveal>
        </motion.div>

        <motion.img style={{y:s4}} src="/selhaya/img13.png" alt="img13" className="w-[300px] lg:hidden"/>

        <motion.img style={{y:s4}} src="/selhaya/img15.png" alt="img15" className="w-[155px] lg:hidden"/>

        <Reveal variants={slideInFromLeft(0.2)}>
          <motion.div style={{y:s4}} className="lg:hidden flex flex-col gap-y-4 w-72 mx-auto">
            <h2 className="italic font-semibold text-[18px]">A Precise Showcase</h2>
            <p className='text-[14px] font-light tracking-tighter leading-tight'>
              Every product, narrative, and detail was re-presented with clarity, intention, and aesthetic precision.
              We ensured the digital display became an extension of Selhaya’s craftsmanship, not merely a catalogue.
            </p>
          </motion.div>
        </Reveal>

        <motion.div style={{y:s4}} className="hidden lg:flex gap-x-42 mt-24 ml-50">
          <Reveal variants={slideInFromLeft(0.2)}>
            <div className="space-y-4">
              <h2 className="relative -left-20 italic font-semibold text-[24px]">A Precise Showcase</h2>
              <p className='text-[18px] font-light w-103 tracking-tighter leading-tight'>
                Every product, narrative, and detail was re-presented with clarity, intention, and aesthetic precision.
                We ensured the digital display became an extension of Selhaya’s craftsmanship, not merely a catalogue.
              </p>
            </div>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
            <img src="/selhaya/img15.png" alt="img15" className="relative top-3 w-[300px] lg:w-56"/>
          </Reveal>
        </motion.div>

        <motion.img style={{y:s4}} src="/selhaya/img14.png" alt="img14" className='w-[300px] lg:hidden'/>

        <Reveal variants={slideInFromBottom(0.2)}>
          <motion.img style={{y:s4}} src="/selhaya/img13.png" alt="img13" className="hidden lg:block w-[300px] lg:w-[425px] relative -left-20 -top-24"/>
        </Reveal>
      </section>

      {/* <section ref={footer} className="w-screen h-[300vh] relative">
        <div  className="sticky top-0 w-screen h-screen overflow-hidden flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.5)),url('/antara/img5.png')] bg-cover bg-center bg-no-repeat">
          <div className="flex justify-center items-center relative w-full">
            <div className="flex flex-col left-48 top-10 absolute z-10">
              <h1 className='text-[36px]'>Antara Living</h1>
              <p className="uppercase">Ethical Profit Hospitality</p>
            </div>
            <motion.div
              style={{ scale: scale2 }}
              className="relative z-10"
            >
              <img
                src="/portfolio/img4.png"
                alt="img4"
                className="w-[25vw] will-change-transform object-cover object-top"
              />
            </motion.div>
          </div>
        </div>
      </section> */}
      <Footer/>

    </div>
  )
}

export default page;
