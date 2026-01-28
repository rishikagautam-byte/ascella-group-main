"use client";

import { useState } from "react";
import Image from "next/image";

const SECTIONS = [
  {
    title: "LUXURY BRAND BUILDING",
    content: "We build brands that are meant to last beyond market cycles. Vedara Studio shapes identity, narrative, and experience for hospitality, lifestyle, and heritage-driven ventures seeking distinction, depth, and cultural permanence.",
    image: "/atelier/floating1.png",
    items: [
      {
        heading: "BRAND ETHOS",
        text: "We structure every visual and verbal element so your offerings appear clear, compelling, and instantly desirable to your audience.",
      },
      {
        heading: "VISUAL IDENTITY SYSTEMS",
        text: "With intuitive flow and high-clarity design choices, we craft displays that guide users effortlessly through what you provide.",
      },
      {
        heading: "GUEST RITUALS & EXPERIENCE",
        text: "We highlight your strongest differentiators through precise messaging that builds trust and reinforces why your solution matters.",
      },
    ],
  },
  {
    title: "DIGITAL MARKETING",
    content: "We design communication that earns attention without chasing it. Through considered messaging, content, and campaign strategy, we help brands cultivate presence, engagement, and long-term relevance in the digital sphere.",
    image: "/atelier/floating2.png",
    items: [
      {
        heading: "CAMPAIGN ARCHITECTURE",
        text: "High-performance digital campaigns crafted for premium audiences, driving visibility, influence, and measurable brand elevation.",
      },
      {
        heading: "SOCIAL ECOSYSTEMS",
        text: "Sophisticated social strategies and content systems built on aesthetic coherence, behavioral insight, and algorithm intelligence.",
      },
      {
        heading: "ORGANIC AUTHORITY",
        text: "Comprehensive SEO frameworks that enhance discoverability, build credibility, and ensure your brand is chosen organically.",
      },
    ],
  },
  {
    title: "WEB DEVELOPMENT & TECH",
    content: "We create digital environments that feel as refined as the brands they represent. From immersive websites to custom digital platforms, our work merges aesthetic precision with seamless performance and intuitive interaction.",
    image: "/atelier/floating3.png",
    items: [
      {
        heading: "BESPOKE WEBSITES",
        text: "Fully custom, high-performance websites crafted with luxury-grade design, seamless UX, and robust full-stack engineering.",
      },
      {
        heading: "CUSTOM PRODUCTS",
        text: "Scalable web applications, dashboards, and internal tools engineered for reliability, precision, and operational efficiency.",
      },
      {
        heading: "SECURE INFRASTRUCTURE",
        text: "Enterprise-grade hosting and deployment architectures designed for stability, compliance, and long-term scalability.",
      },
    ],
  },
];

export default function LuxuryBrand() {
  const [activeRow, setActiveRow] = useState(null);

  return (
    <section className="bg-primary text-black ">
      <div className="hidden lg:block pl-30 pr-40 py-32 w-screen">
        {/* Header */}
        <div className="mb-20 flex justify-between">
          <h2 className="text-[45px] leading-tight italic font-semibold">
            Luxury brand building for <br /> brands that seek distinction
          </h2>
          <p className="text-[24px] text-black/70 w-[438px] leading-tight">
            We craft the identity, strategy, and presence that moves your brand from competition to cultural dominion.
          </p>
        </div>

        <p className="text-[14px] uppercase mb-10">
          What We Do
        </p>

        {/* Rows */}
        <div className="flex flex-col">
          {SECTIONS.map((item, index) => {
            const isActive = activeRow === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveRow(index)}
                onMouseLeave={() => setActiveRow(null)}
                className="relative grid grid-cols-[1fr_172px_1fr] gap-x-20 mx-auto py-12 border-t border-black/20 overflow-visible"
              >
                {/* LEFT TITLE */}
                <div className="flex flex-col">

                <h2
                  className={`italic text-[36px] transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  {item.title}
                </h2>
                <p className="font-light text-[14px] leading-tight">{item.content}</p>
                </div>

                {/* CENTER IMAGE WINDOW */}
                <div className="relative mt-10">
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
                  {item.items.map((subItem, idx) => (
                    <div key={idx} className="mb-4">
                      <p className="text-[16px] font-medium mb-4">
                        {subItem.heading}
                      </p>
                      <p className="text-sm leading-relaxed text-black/70">
                        {subItem.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="border-t border-black/20" />
        </div>
      </div>

      <div className="lg:hidden mx-auto flex flex-col justify-center items-center py-17 gap-8 w-[380px]">
        <h2 className="text-[32px] w-full leading-tight italic font-semibold">Luxury brand building <br /> for brands that seek distinction</h2>
        <p className="-mt-2 font-light text-[16px] w-full pr-20">
          We craft the identity, strategy, and presence that moves your brand from competition to cultural dominion.
        </p>
        <p className="mt-2 w-full text-[12px]">
          What We Do
        </p>

        <div className="-mt-5 w-full border-b border-black/10"/>

        {SECTIONS.map((item,idx) => (
          <div key={idx} className="flex flex-col justify-center gap-6 border-b border-black/10 pb-14">
            <h2 className="italic font-semibold text-[24px]">
              {item.title}
            </h2>
            <p className="font-light text-[12px] leading-tight">
              {item.content}
            </p>
            {item.items.map((subItem, idx) => (
              <div key={idx} className="mb-4">
                <p className="text-[16px] font-semibold mb-2">
                  {subItem.heading}
                </p>
                <p className="text-[12px] font-light leading-tight text-black/70">
                  {subItem.text}
                </p>
              </div>
            ))}
            <img src={item.image} alt="img1" className="w-full h-50 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
