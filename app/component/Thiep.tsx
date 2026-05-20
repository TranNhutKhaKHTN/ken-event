/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const PLACEHOLDER_GUEST = {
  name: "Quý Khách",
  image: "/og-image.png",
};

const GuestGreeting = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="relative mt-36 z-40 w-[300px] h-[200px]"
      style={{ perspective: "800px" }}
    >
      <div className="absolute inset-0 rounded-lg bg-[#4B2C82] shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-white/15" />

      <div
        className="absolute bottom-0 left-0 w-0 h-0 border-l-[150px] border-r-[150px] border-b-[90px] border-l-transparent border-r-transparent border-b-[#3d246c] rounded-b-lg"
        aria-hidden
      />

      <div className="absolute inset-x-3 bottom-2 top-11 overflow-hidden rounded-sm bg-white shadow-inner">
        <motion.div
          className="flex flex-col items-center pt-3 pb-2 px-2"
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
        >
          <img
            src={PLACEHOLDER_GUEST.image}
            alt={PLACEHOLDER_GUEST.name}
            className="w-[72px] h-[72px] rounded-full object-cover border-2 border-[#4B2C82]/30"
          />
          <p
            className="mt-2 text-xl text-[#4B2C82]"
            style={{ fontFamily: "cursive" }}
          >
            {PLACEHOLDER_GUEST.name}
          </p>
          <motion.div
            className="border-t border-dotted border-[#4B2C82]/50 w-[220px] mt-1 h-[1.5px]"
            initial={{ scaleX: 0.2, opacity: 0 }}
            animate={
              isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0.2, opacity: 0 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute top-0 left-0 right-0 h-[105px] origin-top z-10"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ rotateX: 0 }}
        animate={isInView ? { rotateX: 180 } : { rotateX: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div
          className="w-full h-full bg-[#4B2C84] border-b border-white shadow-2xl"
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
        />
      </motion.div>
    </div>
  );
};

export default GuestGreeting;
