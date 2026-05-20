/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "motion/react";
import AttendForm from "./component/AttendForm";
import Committee from "./component/Committee";
import EventInfo from "./component/EventInfo";
import Flower from "./component/Flower";
import GuestGreeting from "./component/GuestGreeting";
import Navbar from "./component/Navbar";
import QuestionForm from "./component/QuestionForm";
import { NS, NS1 } from "./data/index";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <img
        src="/bg-all.png"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="max-w-[420px] absolute inset-0 overflow-x-hidden pb-[400px] pt-1 h-screen w-full mx-auto bg-contain bg-top bg-fixed overflow-y-auto">
        <Navbar />
        <div className="flex items-center flex-col justify-center pt-12 min-h-[480px]">
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
        <div className="relative flex items-center flex-col justify-center min-h-[280px] pb-4">
          {/* <motion.div
            className="capitalize text-md font-light italic mt-10 z-40 text-white"
            initial={{ y: 20, opacity: 0.1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
          >
            Trân trọng kính mời:
          </motion.div> */}
          <GuestGreeting />
          <motion.div
            className="absolute left-0 top-[190px] z-40"
            initial={{ x: -200, opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
          >
            <Flower />
          </motion.div>
          <div
            className="absolute right-0 top-[190px] z-40"
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
        <motion.img
          src="/poster.jpeg"
          className="mt-[200px] rounded"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.section
          className="mt-10 w-full px-1"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          aria-label="Nghệ sĩ"
        >
          <h2 className="text-center font-essendine text-2xl text-white">
            NGHỆ SĨ THAM GIA
          </h2>
          <div className="mt-6 grid grid-cols-3 gap-x-1.5 gap-y-4">
            {NS.map((item, index) => (
              <motion.div
                key={item.name}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 28, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full rounded-xl object-cover"
                />
                <div className="mt-2 px-0.5 font-semibold text-[12px] italic leading-snug text-white">
                  {item.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section
          className="mt-12 w-full px-1 flex justify-center"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          aria-label="Nghệ sĩ"
        >
          <div className="flex justify-center gap-x-1.5">
            {NS1.map((item, index) => (
              <motion.div
                key={item.name}
                className="flex flex-col items-center text-center w-1/3 rounded-xl"
                initial={{ opacity: 0, y: 28, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full rounded-xl object-cover"
                />
                <div className="mt-2 px-0.5 text-[12px] font-semibold italic leading-snug text-white">
                  {item.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <Committee />
        <EventInfo />
        <AttendForm />
        <QuestionForm />
      </div>
    </div>
  );
}
