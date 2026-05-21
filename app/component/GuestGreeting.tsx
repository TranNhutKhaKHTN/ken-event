/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import type { Inviter } from "../data/index";

type GuestGreetingProps = {
  inviter?: Inviter;
};

const GuestGreeting = ({ inviter }: GuestGreetingProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="relative mt-60 z-40 w-[300px] h-[200px]"
      style={{ perspective: "800px" }}
    >
      <div className="relative inset-0 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.35)] z-20 bg-[#743ceb]/50">
        <motion.div
          className="absolute left-4 right-4 bottom-6! h-[380px] overflow-hidden rounded-sm px-4 py-5 bg-white/95 shadow-inner"
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          {inviter ? (
            <>
              <motion.img
                src={inviter.img}
                alt={`Thư mời ${inviter.title} ${inviter.name}`}
                className="rounded w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
              />
              <div
                className="text-black text-center py-4 text-lg"
                style={{ fontFamily: "cursive" }}
              >
                {inviter.title} {inviter.name}
              </div>
            </>
          ) : (
            <motion.div
              className="flex h-full items-start pt-8 text-center text-sm leading-relaxed text-black"
              style={{ fontFamily: "cursive" }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="space-y-6">
                <div className="text-xl text-gray-600"> Kính gửi</div>
                <div className="text-2xl">Quý Thầy Cô</div>
                <div className="text-lg text-gray-600">
                  Thư mời đến tham dự chương trình nghệ thuật Kén
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
        <div className="relative w-full h-full overflow-hidden">
          <img src="/thiep.png" className="w-[300%] scale-[1.18]" alt="" />
        </div>
      </div>

      <motion.div
        className="absolute top-0 left-0 right-0 translate-y-[2px] h-[105px] origin-top z-10"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ rotateX: 0 }}
        animate={isInView ? { rotateX: 180 } : { rotateX: 0 }}
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
