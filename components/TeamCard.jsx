"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, forwardRef } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const TeamCard = forwardRef(function TeamCard({member}, ref) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div ref={ref} className="relative w-[380px] h-[395px] rounded-xl overflow-hidden shrink-0 flex items-end">
      {/* Image */}
      <img
        src={member.image}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Base Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Bottom Content */}
      <div className="relative z-2 flex flex-col justify-end  w-full text-white">
        <div className="flex flex-col pl-6 pr-4 pb-6 backdrop-blur-[2px]">
          <p className="text-[20px]">{member.name}</p>

          <div className="flex justify-between items-center">
            <p className="text-[14px] w-50 lg:w-56">{member.role}</p>

            {/* Toggle Button */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className={`flex justify-center items-center w-[26px] h-[26px] rounded-full text-[18px] transition-colors
                ${isOpen ? "bg-black text-white" : "bg-white text-black"}`}
            >
              {isOpen ? <RemoveOutlinedIcon/> : <AddOutlinedIcon/>}
            </button>
          </div>
        </div>
      </div>

      {/* Full Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0 z-1 backdrop-blur-[10px] flex justify-center items-center p-8 text-white"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.35 }}
              className="text-left text-[14px] leading-tight font-light max-w-[260px]"
            >
              {member.description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default TeamCard;
