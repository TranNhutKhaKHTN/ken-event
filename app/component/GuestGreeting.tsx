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
      className="relative mt-52 z-40 w-[300px] h-[200px]"
      style={{ perspective: "800px" }}
    >
      <div className="relative inset-0 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.35)] z-20 bg-[#743ceb]/50">
        <motion.div
          className="absolute left-4 right-4 bottom-6! h-[360px] overflow-hidden rounded-sm px-4 py-5 bg-white/95 shadow-inner"
          initial={{ y: "100%", opacity: 0 }}
          animate={true ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <div className="text-center text-xs font-bold text-black">
            Trân trọng kính mời
          </div>
          <div className="relative w-24 h-24 rounded-full mx-auto my-4">
            <img
              src="https://content.pancake.vn/web-media-262/82/2d/c8/fc/0d2bd327f3b4b1699ae0313c6532e86b1f53a8623f90c8260d69ee0b-w:1080-h:1620-l:140131-t:image/jpeg.jpg"
              className="w-full h-full object-cover object-top rounded-full"
              alt="avatar"
            />
          </div>
          <div className="flex flex-col items-center text-gray-900">
            <div
              className="text-md italic"
              style={{ fontFamily: "cursive", opacity: 1, transform: "none" }}
            >
              Chị:
            </div>
            <div
              className="mt-1"
              style={{ fontFamily: "cursive", opacity: 1, transform: "none" }}
            >
              Nguyễn Triệu Mẫn
            </div>
          </div>
        </motion.div>
        <div className="relative w-full h-full overflow-hidden">
          <img src="/thiep.png" className="w-[300%] scale-[1.18]" />
        </div>
      </div>

      <motion.div
        className="absolute top-0 left-0 right-0 translate-y-[2px] h-[105px] origin-top z-10"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ rotateX: 0 }}
        animate={true ? { rotateX: 180 } : { rotateX: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div
          className="w-full h-full bg-[#5c2cc7] shadow-2xl"
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
        />
      </motion.div>
    </div>
  );
};

export default GuestGreeting;
