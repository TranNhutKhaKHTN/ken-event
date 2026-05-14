/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "motion/react";
import AttendForm from "./component/AttendForm";
import Committee from "./component/Committee";
import EventInfo from "./component/EventInfo";
import Flower from "./component/Flower";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[420px] overflow-x-hidden pb-[400px] pt-1 h-screen w-full mx-auto bg-[url('/bg-all.png')] bg-cover bg-center bg-no-repeat bg-fixed overflow-y-auto">
        <Navbar />
        <div className="flex items-center flex-col justify-center pt-12">
          <motion.div
            initial={{ y: -30, opacity: 0.1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            className="text-xs italic font-light text-center tracking-wider leading-5"
          >
            THƯ MỜI THAM DỰ <br /> CHƯƠNG TRÌNH NGHỆ THUẬT
          </motion.div>
          <motion.img
            src="https://content.pancake.vn/web-media-262/s853x554/fwebp80/2f/44/9f/a8/ddefa21b19757c609fccb001841cb12501d00a371409175d4ef77f4a-w:1077-h:699-l:406503-t:image/png.png"
            alt=""
            className="w-[236px] h-full object-cover mt-7"
            initial={{ scale: 0.3, opacity: 0.1 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.1 }}
          />
          <motion.div
            className="w-[236px] rounded-lg flex justify-end mt-5 translate-x-[10px]"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.1 }}
          >
            <img
              src="/favicon.png"
              className="w-[200px]"
              alt="FPT Polytechnic"
            />
          </motion.div>
        </div>
        <div className="relative flex items-center flex-col justify-center">
          <motion.div
            className="capitalize text-md font-light italic mt-14 z-40"
            initial={{ y: 20, opacity: 0.1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
          >
            Trân trọng kính mời:
          </motion.div>
          <div className="w-full flex items-center flex-col justify-center mt-4 z-40">
            <motion.div
              className="text-xl"
              style={{ fontFamily: "cursive" }}
              initial={{ y: 20, opacity: 0.1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            >
              Quý Khách
            </motion.div>
            <motion.div
              className="border-t border-dotted w-[240px] mx-auto translate-y-[-6px] h-[1.5px]"
              initial={{ scale: 0.2, opacity: 0.3, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            />
          </div>
          <motion.div
            className="absolute left-0 top-[-40px] z-20"
            initial={{ x: -200, opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
          >
            <Flower />
          </motion.div>
          <div
            className="absolute right-0 top-[-40px] z-10"
            style={{ transform: "scaleX(-1)" }}
            // initial={{ x: 200, opacity: 0.1 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 2.5, ease: "easeOut" }}
          >
            <motion.div
              initial={{ x: -200, opacity: 0.1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.1 }}
            >
              <Flower />
            </motion.div>
          </div>
        </div>
        <Committee />
        <EventInfo />
        <AttendForm />
      </div>
    </div>
  );
}
