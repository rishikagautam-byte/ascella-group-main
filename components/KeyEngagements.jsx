"use client";

import { useState } from "react";
import Image from "next/image";
import { slideInFromLeft,slideInFromRight } from "@/utils/motion";
import Reveal from "@/utils/Reveal";
const ENGAGEMENTS = [
  {
    title: "Brand & Business Audits",
    heading: "Brand & Business Audits",
    description:
      "A deep evaluation of your brand, market position, internal alignment, and growth readiness. We identify gaps, strengths, and opportunities to create a clear strategic baseline.",
    image: "/home/floating1.png",
  },
  {
    title: "Growth Roadmaps",
    heading: "Growth Roadmaps",
    description:
      "Structured, long-term plans that align business goals, brand strategy, and execution priorities. These roadmaps provide clarity on what to do, when to do it, and why it matters.",
    image: "/home/floating2.png",
  },
  {
    title: "Market Entry Strategy",
    heading: "Market Entry Strategy",
    description:
      "Strategic planning for brands entering new markets or launching new offerings. We assess market dynamics, positioning, audience fit, and competitive landscape to reduce risk and improve success.",
    image: "/home/floating3.png",
  },
  {
    title: "Strategic Decision Support",
    heading: "Strategic Decision Support",
    description:
      "Ongoing strategic guidance for leadership teams navigating high-impact decisions. From restructuring to scaling, we provide clarity, perspective, and confidence at critical moments.",
    image: "/home/floating4.png",
  },
];

export default function KeyEngagements() {
  const [activeRow, setActiveRow] = useState(null);

  return (
    <section className="bg-primary text-black ">
      <div className="hidden lg:block pl-30 pr-40 py-32 w-screen">
        {/* Header */}
        <div className="mb-20 flex justify-between">
          <Reveal variants={slideInFromLeft(0.2)}>
            <p className="text-[36px] leading-tight">
              Strategic Consultancy For <br /> Brands Ready To Scale
            </p>
          </Reveal>
          <Reveal variants={slideInFromRight(0.2)}>
            <p className="text-[16px] w-[438px] leading-tight">
              Vedara Consultancy works closely with leadership teams to define
              direction, solve complex challenges, and build frameworks for
              sustainable growth.
            </p>
          </Reveal>
        </div>
        <Reveal variants={slideInFromLeft(0.2)}>
        <p className="text-[18px] mb-5">
          Key Engagements
        </p>
        </Reveal>
        {/* Rows */}
        <div className="flex flex-col">
          {ENGAGEMENTS.map((item, index) => {
            const isActive = activeRow === index;

            return (
              <div
                key={item.title}
                onMouseEnter={() => setActiveRow(index)}
                onMouseLeave={() => setActiveRow(null)}
                className="relative grid grid-cols-[1fr_172px_1fr] gap-x-20 mx-auto py-12 border-t border-black/20 items-center overflow-visible"
              >
                {/* LEFT TITLE */}
                <h2
                  className={`italic text-[38px] font-semibold transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  {item.title}
                </h2>

                {/* CENTER IMAGE WINDOW */}
                <div className="relative">
                  <div
                    className={`absolute left-0 right-0 -top-10 h-52
                      transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        isActive
                          ? "opacity-100 scale-100 [clip-path:inset(0%)]"
                          : "opacity-0 scale-[0.92] [clip-path:inset(50%)]"
                      }`}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="relative w-md">
                  <p className="text-[16px] font-medium mb-4">
                    {item.heading}
                  </p>
                  <p className="text-sm leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="border-t border-black/20" />
        </div>
      </div>

      <div className="lg:hidden mx-auto flex flex-col justify-center items-center py-17 gap-7 w-[380px]">
        <p className="text-[24px] w-full leading-tight">Strategic consultancy for brands ready to scale</p>
        <p className="font-light text-[12px] w-full pr-20">
          Vedara Consultancy works closely with leadership teams to define direction, solve complex challenges, and build frameworks for sustainable growth.We don’t offer generic advice — we work as strategic partners embedded in your vision.
        </p>
        <p className="w-full">
          Key Engagements
        </p>

        <div className="-mt-3 w-full border-b border-black/10"/>

        {ENGAGEMENTS.map((item,idx) => (
          <div key={idx} className="flex flex-col justify-center gap-6 border-b border-black/10 pb-14">
            <h2 className="italic font-semibold text-[24px]">
              {item.title}
            </h2>
            <p className="font-light text-[12px]">
              {item.description}
            </p>
            <img src={item.image} alt="img1" className="w-full h-50 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
