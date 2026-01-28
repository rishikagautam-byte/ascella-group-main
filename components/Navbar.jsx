"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Twitter } from "@mui/icons-material";
import MobileNavOverlay from "./MobileNavOverlay";

export default function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  
  const active = pathname.startsWith("/atelier") ? "atelier" : pathname.startsWith("/capital") ? "capital" : pathname === "/" ? "home" : pathname.startsWith("/portfolio") ? "portfolio" :  pathname === "/contact" ? "contact" : "insights";
  
  const isActiveRoute = pathname === "/atelier" || pathname === "/capital";
  

  return (
    <header className="w-screen fixed top-[42px] z-50 flex justify-between items-center px-12 lg:px-26">

      <div className="flex items-center">
        <Link href="/"><img src="/vedara-logo.svg" alt="logo" className="w-[134px] lg:w-[216px]"/></Link>
      </div>

      <div className="rounded-full backdrop-blur-[5px] hidden lg:flex gap-7 items-center px-8 py-2 text-white border border-white/25">
        <Link href="/" className={active === "home" ? "opacity-100" : "opacity-50 hover:opacity-100"}>
          Home
        </Link>
        <Link href="/portfolio" className={active === "portfolio" ? "opacity-100" : "opacity-50 hover:opacity-100"}>
          Portfolio
        </Link>
        <Link href="/insights" className={active === "insights" ? "opacity-100" : "opacity-50 hover:opacity-100"}>
          Our Insights
        </Link>
        <Link href="/contact" className={active === "contact" ? "opacity-100" : "opacity-50 hover:opacity-100"}>
          Contact Us
        </Link>
      </div>

      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(null)} className="relative rounded-full backdrop-blur-[5px] hidden lg:flex gap-5 items-center py-2 text-white border border-white/25 w-[214px]">
        {(isActiveRoute) && (
          <span
            className={`absolute inset-0 w-1/2 -z-2 rounded-full bg-primary/35 transition-transform duration-400 ease-out ${
              active === "capital" ? "translate-x-full" : "translate-x-0"
            }`}
          />
        )}
        {(!isActiveRoute && hovered) && (
          <span
            className={`absolute inset-0 w-1/2 -z-2 rounded-full bg-primary/35 transition-transform duration-400 ease-out ${
              hovered === "capital" ? "translate-x-full" : "translate-x-0"
            }`}
          />
        )}
        <Link onMouseEnter={()=> setHovered("atelier")} href="/atelier" className={`pl-10 ${active === "atelier" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>
          Atelier
        </Link>
        <Link onMouseEnter={()=> setHovered("capital")} href="/capital" className={`px-5 ${active === "capital" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>
          Capital
        </Link>
      </div>

      <img src="/menuIcon.svg" alt="menu" className="lg:hidden" onClick={() => setMenuOpen(true)} />

      <MobileNavOverlay open={menuOpen} onClose={() => setMenuOpen(false)} active ={pathname} />
    </header>
  );
}
