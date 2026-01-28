"use client";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import { useEffect } from "react";

const links=[
  {name:"Home", href:"/"},
  {name:"Atelier", href:"/atelier"},
  {name:"Capital", href:"/capital"},
  {name:"Portfolio", href:"/portfolio"},
  {name:"Insights", href:"/insights"},
]

export default function MobileNavOverlay({ open, onClose, active }) {
  // Prevent background scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <div
      className={`
        fixed inset-0 z-10
        transition-opacity duration-300 ease-out
        will-change-opacity backdrop-blur-xl
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >

      {/* Content */}
      <div className={`relative h-full w-full flex flex-col items-center justify-center
      transition-transform duration-300 ease-out bg-black/60
          will-change-transform
          ${open ? "translate-y-0 scale-100" : "-translate-y-4 scale-[0.98]"}`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="
            absolute top-10 left-1/2 -translate-x-1/2
            text-2xl tracking-widest
            hover:opacity-70 transition
          "
        >
          <CloseIcon/>
        </button>

        {/* Divider */}
        <div className="w-20 h-px bg-white mb-10" />

        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-6 text-[18px] font-semibold">
          {links.map(
            (link) => (
              <h2
                key={link.name}
                onClick={onClose}
                className={`italic ${active===link.href ? "text-white" : "text-primary"}`}
              >
                <Link href={link.href}>
                  {link.name}
                </Link>
              </h2>
            )
          )}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="
            mt-12 px-2 py-2 rounded-full
            bg-tertiary text-black transition
            flex justify-between items-center gap-2
          "
        >
          <h2 className="text-[18px] italic font-semibold">
            Contact
          </h2>
          <ArrowForwardIosOutlined className="h-3"/>
        </Link>

        {/* Footer */}
        <h2 className="absolute bottom-8 text-[14px] italic font-semibold text-center">
          © 2025 Vedara. All Rights Reserved.
        </h2>
      </div>
    </div>
  );
}
