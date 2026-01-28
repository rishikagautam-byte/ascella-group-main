"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { CARDS, SLIDES } from "./data";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Reveal from "@/utils/Reveal";
import {
  slideInFromBottom,
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "@/utils/motion";
import Footer from "@/components/Footer";
import ArrowBackIosNewOutlined from "@mui/icons-material/ArrowBackIosNewOutlined";
import Link from "next/link";
import LuxuryBrand from "@/components/LuxuryBrand";


const page = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"],
  });

  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);
  const container4 = useRef(null);
  const container5 = useRef(null);

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

  const {scrollYProgress: section5} = useScroll({
    target:container5,
    offset:["start start", "end start"]
  })

  const s1 = useTransform(section1, [0,1], [0,-300]);
  const s1bg= useTransform(section1, [0,1], [0,500]);
  const s2 = useTransform(section2, [0,1], [0,-200]);
  const s2bg = useTransform(section2, [0,1], [0,500]);
  const s3 = useTransform(section3, [0,1], [0,-200]);
  const s4 = useTransform(section4, [0,1], [0,-80]);
  const s5 = useTransform(section5, [0,1], [0,-90]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const next = Math.min(SLIDES.length - 1, Math.floor(v * SLIDES.length));
      setIndex(next);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const [[cardIdx, direction], setCardIdx] = useState([0, 0]);

  const paginate = (dir) => {
    setCardIdx([
      (cardIdx + dir + CARDS.length) % CARDS.length,
      dir,
    ]);
  };

  const card = CARDS[cardIdx];

  return (
    <div className="text-white relative w-full overflow-x-clip">
      <section ref={container1} className="w-screen h-screen bg-[url('/atelier/heroImg.png')] bg-cover bg-center flex flex-col justify-end items-start gap-y-2 lg:gap-y-8">

        <motion.div style={{y:s1}} className="flex w-full justify-between items-center lg:items-start px-10 lg:px-30">
          <Reveal variants={slideInFromLeft(0.2)}>
            <h1 className="lg:w-[660px] text-[45px] lg:text-[64px] font-extralight italic leading-14 lg:leading-18">
              Beautiful Brands <br /> <span className="font-semibold">Get Forgotten Every Day.</span>
            </h1>
          </Reveal>
        </motion.div>
        <Reveal variants={slideInFromLeft(0.2)}>
          <motion.p style={{y:s1}} className="hidden lg:block mx-10 lg:mx-30 w-92 lg:w-[558px] font-light text-[18px] lg:text-[24px] tracking-tight leading-tight">
            We don't design to impress. We design to make you irreplaceable visually, strategically, generationally.
          </motion.p>
        </Reveal>
        <Reveal variants={slideInFromLeft(0.2)}>
          <motion.p style={{y:s1}} className="lg:hidden mx-10 lg:mx-30 w-[320px] lg:w-[558px] font-light text-[18px] lg:text-[24px] tracking-tight leading-tight">
            We don't design to impress. We design to make you irreplaceable visually, strategically, generationally.
          </motion.p>
        </Reveal>
        <Reveal variants={slideInFromLeft(0.2)} className={`mb-20`}>
          <Link href="/contact">
          <motion.button style={{y:s1}} className="flex justify-between items-center gap-x-3 rounded-full bg-tertiary/55 backdrop-blur-lg py-4 pl-6 pr-4 text-[12px] lg:text-[14px] mt-8 lg:-mt-10 ml-10 lg:ml-30">
            <p>Begin the Conversation</p>
            <ArrowForwardIosOutlinedIcon />
          </motion.button>
          </Link>
        </Reveal>
      </section>

      <LuxuryBrand/>

      <section className="relative flex flex-col justify-center items-center lg:items-end">
        <div ref={sectionRef} className="relative h-[300vh] w-full">
      
          <div className="sticky top-0 py-10 lg:py-30 w-full min-h-screen lg:h-screen flex flex-col justify-center items-center lg:items-end gap-y-6 lg:gap-y-16">
          
            <div className="flex flex-col lg:flex-row w-full gap-y-4 pl-10 lg:h-20 lg:pl-24 lg:pr-20 justify-between">
              <Reveal variants={slideInFromBottom(0.2)}>
                <h2 className="hidden lg:flex italic text-[16px]">Vedara</h2>
              </Reveal>

              <Reveal variants={slideInFromTop(0.2)}>
                <p className="uppercase text-[18px] w-[345px] lg:text-[32px] lg:w-[459px]">Who Vedara Is Built For</p>
              </Reveal>

              <Reveal variants={slideInFromRight(0.2)}>
                <p className="text-[14px] lg:text-[16px] lg:text-right w-[370px]">
                  Vedara works with a rare class of founders and institutions,
                  those building not for seasons, but for generations.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col xl:mr-95 lg:mr-50 gap-y-4 justify-center items-center lg:items-end">
              <div className="flex justify-between w-[345px] lg:w-[952px]">
                <p>Ideal Clients</p>
                <div className="flex gap-4">
                  <p className={index === 0 ? "opacity-100" : "opacity-20"}>
                    01
                  </p>
                  <p className={index === 1 ? "opacity-100" : "opacity-20"}>
                    02
                  </p>
                  <p className={index === 2 ? "opacity-100" : "opacity-20"}>
                    03
                  </p>
                </div>
              </div>

              <div className="w-[345px] lg:w-[952px] lg:h-[420px] grid grid-cols-1 lg:grid-cols-2 lg:gap-5 bg-primary text-black">
                <div className="flex p-5 lg:pl-10 lg:pr-0 items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 24 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="flex flex-col lg:w-full justify-between gap-y-4 h-full lg:py-15"
                    >
                      <div className="flex justify-between w-full">
                        <p className="text-[16px] lg:text-3xl w-[200px] lg:w-[305px] leading-snug">
                          {SLIDES[index].title}
                        </p>
                        <span className="lg:hidden text-2xl">
                          {SLIDES[index].id}
                        </span>
                      </div>
                      <p className="text-[12px] lg:text-[14px] w-[271px] lg:w-[331px] opacity-80">
                        {SLIDES[index].text}
                      </p>
                      <span className="hidden lg:block text-4xl">{SLIDES[index].id}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="relative h-[250px] lg:h-[420px] overflow-hidden">
                  <AnimatePresence>
                    <motion.img
                      key={index}
                      src={SLIDES[index].image}
                      alt="slide"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      initial={{ x: "100%", zIndex: 1 }}
                      animate={{ x: "0%", zIndex: 1 }}
                      exit={{ x: "100%", zIndex: 1 }}
                      transition={{
                        duration: 2,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={container2} className="bg-primary text-black py-20 lg:py-30 lg:px-10 flex flex-col justify-center items-center gap-y-10">

        <motion.div style={{y:s2}} className="flex flex-col-reverse justify-center items-center lg:flex-row gap-x-23 gap-y-4 lg:mb-10">
          <div className="lg:hidden text-right flex justify-end font-light w-[380px]">
            <p className="w-[380px] text-[14px]">Your brand deserves to become a reference point, not another
            participant.</p>
          </div>
          <Reveal variants={slideInFromLeft(0.2)}>
            <img src="/atelier/img1.png" alt="img1" className="flex lg:justify-self-end h-[252px] lg:h-full lg:w-full w-[380px] lg:max-w-none object-cover object-center lg:object-top" />
          </Reveal>
          <div className="flex flex-col gap-4 w-[380px] lg:w-[650px]">
            <Reveal variants={slideInFromTop(0.2)}>
              <h2 className="text-[16px] lg:text-[20px] italic">Our Philosophy</h2>
            </Reveal>
            <Reveal variants={slideInFromTop(0.2)}>
              <p className="text-[24px] lg:text-[36px] w-[380px] lg:w-[605px] leading-tight">
                Excellence Is Inevitable When You Build With Intention
              </p>
            </Reveal>
            <Reveal variants={slideInFromRight(0.2)}>
              <p className="text-[12px] lg:text-[14px] w-[380px] lg:w-[430px]">
                We partner with the few who understand that true luxury. While
                others seek attention, we build authority!
              </p>
            </Reveal>
            <Reveal variants={slideInFromBottom(0.2)}>
              <img src="/atelier/img2.png" alt="img2" className="w-[380px] lg:my-10 lg:w-full object-cover object-center" />
            </Reveal>
            <Reveal variants={slideInFromRight(0.2)}>
              <p className="hidden text-right text-[12px] lg:text-[14px] lg:flex justify-self-end font-semibold lg:w-54">
                Your brand deserves to become a reference point, not another
                participant.
              </p>
            </Reveal>
          </div>
        </motion.div>

        <Reveal variants={slideInFromBottom(0.2)}>
          <motion.p style={{y:s2}} className="lg:hidden text-[12px] w-[380px]">
            Every brand we shape begins as an idea, then evolves into a Legacy a
            narrative powerful enough to influence culture, shape desire, and
            endure long after its originator has stepped aside.
          </motion.p>
          <motion.p style={{y:s2}} className="hidden lg:block text-center text-[14px] w-[526px]">
            Every brand we shape begins as an idea, then evolves into a Legacy a
            narrative powerful enough to influence culture, shape desire, <br />and
            endure long after its originator has stepped aside.
          </motion.p>
        </Reveal>
        <Reveal variants={slideInFromBottom(0.2)}>
          <motion.p style={{y:s2}} className="w-fit border-b border-black pb-1 text-[12px] lg:text-[14px] text-center">
            <Link href="/contact">
              Share Your Vision        
            </Link>
          </motion.p>
        </Reveal>
      </section>

      <section ref={container3} className="flex flex-col justify-center items-center gap-y-45 lg:gap-y-68 py-20 lg:py-30">
        <Reveal variants={slideInFromTop(0.2)}>
          <motion.div style={{y:s3}} className="flex flex-col lg:text-center gap-7">
            <h2 className="text-[16px] lg:text-[20px] italic">Our Approach</h2>
            <p className="w-[380px] text-[16px] lg:w-160 lg:text-[22px] leading-tight">
              We create a complete universe identity, narrative, digital
              presence, and experience. So your story is not just seen, but
              felt, remembered, and passed down.
            </p>
          </motion.div>
        </Reveal>

        <motion.div style={{y:s3}} className="flex lg:gap-x-20">
          <Reveal variants={slideInFromRight(0.2)}>
            <h2 className="text-[22px] font-extralight">
              [01]
            </h2>
          </Reveal>
            <div className="flex flex-col gap-y-7 lg:gap-y-11">
              <Reveal variants={slideInFromRight(0.2)}>
                <p className="uppercase text-[20px] lg:text-[28px] ml-10 text-right w-[204px] lg:w-95 ">the listening</p>
              </Reveal>
              <Reveal variants={slideInFromBottom(0.2)}>
                <img
                  src="/atelier/img3.png"
                  alt="img3"
                  className="lg:hidden relative"
                />
              </Reveal>
              <Reveal variants={slideInFromLeft(0.2)}>
                <p className="w-80 pl-20 md:pl-40 lg:pl-0 lg:w-[318px] text-[12px] lg:text-[14px] lg:font-light opacity-80">
                  <span className="text-[16px] lg:text-[20px] lg:font-medium">We begin by absorbing values, histories, ambitions,
                  contradictions.</span><br /> Not just what is said, but what is meant.That’s
                  when clarity begins to take form.
                </p>
            </Reveal>
            </div>
          <Reveal variants={slideInFromBottom(0.2)}>
            <img
              src="/atelier/img3.png"
              alt="img3"
              className="hidden lg:block bottom-24 relative"
            />
          </Reveal>
        </motion.div>

        <motion.div style={{y:s3}} className="flex lg:flex-row-reverse gap-x-4 lg:gap-x-25">
          <Reveal variants={slideInFromRight(0.2)}>
            <h2 className="text-[22px] font-extralight">[02]</h2>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
            <div className="flex flex-col gap-y-7 lg:gap-11">
              <p className="uppercase text-[20px] lg:text-[28px] text-right w-56 lg:w-105">the revelation</p>
              <Reveal variants={slideInFromBottom(0.2)}>
                <img
                  src="/atelier/img4.png"
                  alt="img4"
                  className="lg:hidden relative left-10 md:left-40"
                />
              </Reveal>
              <p className="w-60 lg:w-[430px] lg:pl-21 text-[12px] lg:text-[14px] lg:font-light opacity-80">
                <span className="text-[16px] lg:text-[20px] lg:font-medium">This is the moment clarity emerges.</span><br />Your cultural identity,
                intention, and emotional promise is understood.We focus on the
                essence that sets your brand apart from the world.
              </p>
            </div>
          </Reveal>
          <Reveal variants={slideInFromTop(0.2)}>
            <img
              src="/atelier/img4.png"
              alt="img4"
              className="hidden lg:block top-24 relative"
            />
          </Reveal>
        </motion.div>

        <motion.div style={{y:s3}} className="flex gap-x-4 lg:gap-x-25 lg:w-auto">
          <Reveal variants={slideInFromRight(0.2)}>
            <h2 className="text-[22px] font-extralight">
              [03]
            </h2>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
            <div className="flex flex-col gap-y-7 lg:gap-11">
              <p className="uppercase text-[20px] lg:text-[28px]">The Design of Meaning</p>
              <Reveal variants={slideInFromBottom(0.2)}>
                <img
                  src="/atelier/img5.png"
                  alt="img5"
                  className="lg:hidden relative"
                />
              </Reveal>
              <p className="w-80 pl-20 md:pl-40 lg:pl-0 lg:w-[318px] text-[12px] lg:text-[14px] lg:font-light opacity-80">
                <span className="text-[16px] lg:text-[20px] lg:font-medium">Meaning becomes architecture.</span><br /> We translate philosophy into strategy, aesthetics, and digital expression.Every element, colour, shape, word, interaction becomes a vessel of significance.
              </p>
            </div>
          </Reveal>
          <Reveal variants={slideInFromBottom(0.2)}>
            <img
              src="/atelier/img5.png"
              alt="img5"
              className="hidden lg:block bottom-24 relative"
            />
          </Reveal>
        </motion.div>

        <motion.div style={{y:s3}} className="flex lg:flex-row-reverse gap-x-4 lg:gap-x-25">
          <Reveal variants={slideInFromRight(0.2)}>
            <h2 className="text-[22px] font-extralight">[04]</h2>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
            <div className="flex flex-col gap-y-7 lg:gap-11">
              <p className="uppercase text-[20px] lg:text-[28px] lg:w-105">The Embodiment</p>
              <Reveal variants={slideInFromBottom(0.2)}>
                <img
                  src="/atelier/img3.png"
                  alt="img3"
                  className="lg:hidden relative md:left-48"
                />
              </Reveal>
              <p className="w-60 lg:w-[466px] text-[12px] lg:text-[14px] lg:font-light lg:pl-23 opacity-80">
                <span className="text-[16px] font-medium lg:text-[20px]">The brand takes form.</span><br />Identity systems, digital design, messaging, rituals, and experiences become aligned into a singular, unmistakable presence.
              </p>
            </div>
          </Reveal>
          <Reveal variants={slideInFromTop(0.2)}>
            <img
              src="/atelier/img3.png"
              alt="img3"
              className="hidden lg:block top-24 relative"
            />
          </Reveal>
        </motion.div>

        <motion.div style={{y:s3}} className="flex gap-x-4 lg:gap-x-25">
          <Reveal variants={slideInFromRight(0.2)}>
            <h2 className="text-[22px] font-extralight">[05]</h2>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
            <div className="flex flex-col gap-y-7 lg:gap-11">
              <p className="uppercase text-[20px] lg:text-[28px] lg:text-right lg:w-105">The Continuum</p>
              <Reveal variants={slideInFromBottom(0.2)}>
                <img
                  src="/atelier/img6.png"
                  alt="img6"
                  className="lg:hidden relative"
                />
              </Reveal>
              <p className="w-80 md:w-100 pl-20 md:pl-40 lg:pl-0 lg:w-[318px] text-[12px] lg:text-[14px] lg:font-light opacity-80">
                <span className="text-[16px] lg:text-[20px] lg:font-medium">Legacy is a marathon,<br /> not a launch.</span><br /> We refine, evolve, and guide, ensuring the brand remains alive, relevant, and generationally enduring.
              </p>
            </div>
          </Reveal>
          <Reveal variants={slideInFromBottom(0.2)}>
            <img
              src="/atelier/img6.png"
              alt="img6"
              className="hidden lg:block bottom-24 relative"
            />
          </Reveal>
        </motion.div>
      </section>

      <section ref={container4} className="flex flex-col justify-center items-center gap-y-11 lg:flex-row w-full bg-primary text-black">
        <div className="flex flex-col justify-center w-full h-[40vh] lg:w-1/2 lg:h-full px-[6vw] lg:px-23 pt-12 lg:pt-23 gap-y-8">
          <Reveal variants={slideInFromTop(0.2)}>
            <h2 className="italic text-[18px] lg:text-[20px]">
              Featured Projects
            </h2>
          </Reveal>

          <Reveal variants={slideInFromLeft(0.2)}>
            <p className="font-light text-[18px] lg:text-[28px] leading-tight tracking-tight max-w-[520px]"> 
              Our portfolio is a curated anthology of ideas brought to life,
              from heritage-rooted brands to future-thinking digital ecosystems.
              Every creation reflects our devotion to detail, narrative, and
              timeless aesthetic discipline.
            </p>
          </Reveal>

          <Reveal variants={slideInFromBottom(0.2)}>
            <Link href="/portfolio">
            <p className="border-b border-black pb-1 w-fit lg:mt-65 text-[12px] lg:text-[14px]">
              Explore All Projects
            </p>
            </Link>
          </Reveal>
        </div>

        <div className="relative w-full lg:w-1/2 lg:h-screen overflow-hidden">
          <Reveal variants={slideInFromRight(0.2)}>
            <img
              src="/atelier/img7.png"
              alt="Featured project"
              className="w-full h-full object-cover object-right"
            />

            <Link href="/portfolio/selhaya">
            <div className="absolute flex justify-between items-center bottom-0 backdrop-blur-[15px] w-full py-9 px-11 text-white">
              <div className="flex flex-col">
              <h3 className="text-[18px] lg:text-[20px] font-medium italic">
                Selhaya World’s First Luxury Abaya Maison
              </h3>
              <p className="text-[12px] lg:text-[14px] mt-2 opacity-90 w-[320px] lg:w-[474px]">
                Selhaya entered Vedara’s closed-circle ecosystem to evolve
                from a promising luxury brand into an unforgettable maison.
              </p>
              </div>
              <ArrowForwardIosOutlinedIcon/>
            </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section ref={container5} className="flex flex-col justify-center items-center gap-y-15 lg:gap-y-20 pt-30 pb-60">
        <Reveal variants={slideInFromTop(0.2)}>
          <motion.div style={{y:s5}} className="flex flex-col justify-center items-center text-center gap-y-7">
            <h2 className="text-[16px] lg:text-[24px] uppercase italic">Insights</h2>
            <p className="w-[322px] lg:w-150 text-[20px] lg:text-[28px] leading-tight">
              Where perspective becomes power, and knowledge becomes a creative
              asset.
            </p>
            <Link href="/insights" className="border-b border-white pb-1 text-[12px] lg:text-[14px] px-2">Explore</Link>
          </motion.div>
        </Reveal>

        <motion.div style={{y:s5}} className="relative flex items-center justify-center lg:hidden">
          {/* LEFT ARROW */}
          <button
            onClick={() => paginate(-1)}
            className="absolute -left-10 text-white opacity-60 hover:opacity-100 transition"
          >
            <ArrowBackIosNewOutlined/>
          </button>

          {/* CARD */}
          <div className="relative w-[322px] h-[415px] overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={cardIdx}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: [0.2, 0.9, 0.2, 1],
                }}
                className="absolute inset-0"
              >
                <div className="flex flex-col justify-between w-full h-full p-10 relative text-white">
                  {/* Background Image */}
                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Content */}
                  <div className="relative z-10 flex justify-between text-sm">
                    <p>{card.date}</p>
                    <p>{card.duration}</p>
                  </div>

                  <h2 className="relative z-10 text-[28px] leading-tight italic">
                    {card.title}
                  </h2>

                  <Link href={card.slug} className="relative z-10 w-25 border-b border-white pb-1">
                    Read More
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => paginate(1)}
            className="absolute -right-10 text-white opacity-60 hover:opacity-100 transition"
          >
            <ArrowForwardIosOutlinedIcon/>
          </button>
        </motion.div>

        <motion.div style={{y:s5}} className="hidden lg:flex gap-6">
          {CARDS.map((card,idx) => (
            <Reveal variants={slideInFromLeft(0.2 + (idx)/5)} key={idx}>
              <div className="flex flex-col justify-between w-[396px] h-[470px] p-10 relative">
                <img
                  src={card.image}
                  alt="img8"
                  className="absolute w-full h-full inset-0"
                />
                <div className="flex justify-between z-1">
                  <p>{card.date}</p>
                  <p>{card.duration}</p>
                </div>
                <h2 className="text-[32px] z-1 leading-tight italic">
                  {card.title}
                </h2>
                <Link href={card.slug} className="border-b w-23 border-white pb-1 z-1">
                  Read More
                </Link>
              </div>
            </Reveal>
          ))}
        </motion.div>
      </section>

      <Footer/>
    </div>
  );
};

export default page;
