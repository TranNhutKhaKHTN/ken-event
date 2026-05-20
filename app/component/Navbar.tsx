/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <header className="flex h-16 w-full shrink-0 justify-center gap-1 pl-2">
      <motion.div
        initial={{ y: -30, opacity: 0.1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-1/4! flex items-center justify-center"
      >
        <Link
          href="/"
          className="flex min-h-0 min-w-0 items-center justify-center px-0.5 w-full"
        >
          <span className="relative block h-9 w-full max-w-19">
            <Image
              src="/fpt.png"
              alt="FPT Polytechnic"
              fill
              className="object-contain object-center"
              sizes="76px"
              priority
            />
          </span>
        </Link>
      </motion.div>

      <motion.div
        className="h-full overflow-hidden relative w-1/4! mr-6"
        initial={{ y: -30, opacity: 0.1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.6, ease: "easeOut" }}
      >
        <div className="relative overflow-hidden">
          <img
            src="https://content.pancake.vn/web-media-262/s818x461/fwebp80/69/5e/e7/00/c4d3af932946b8ee0a5e861f982bf8cca6497bdc4078b388290b8d4b-w:6000-h:3375-l:194601-t:image/png.png"
            alt=""
            className="w-[106px]! h-[60px]! shrink-0 scale-[1.2] translate-y-[5px]"
          />
        </div>
      </motion.div>
      {/* <motion.div
        className="w-full h-full overflow-hidden flex items-center justify-center"
        initial={{ y: -30, opacity: 0.1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.1 }}
      >
        <div className="relative overflow-hidden">
          <img
            alt=""
            className="object-contain scale-[1.2] translate-y-[10px]"
            src="https://content.pancake.vn/web-media-262/11/2e/a4/7c/1000c9e7725c9e95667f11e423862e81850cd2d10ce5fe977aaa57a5-w:1080-h:1080-l:30503-t:image/png.png"
          />
        </div>
      </motion.div> */}

      <motion.div
        className="h-full overflow-hidden flex items-center justify-center w-1/4"
        initial={{ y: -30, opacity: 0.1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeOut", delay: 0.2 }}
      >
        <div className="relative overflow-hidden">
          <img
            alt=""
            className="object-contain scale-[2.5] translate-y-[10px]"
            src="https://content.pancake.vn/web-media-262/7c/00/d3/81/5640d9687a893f0011e8a79909fd4a3bcd5fb9f9c9f600dabdc4deb4-w:1080-h:1080-l:37452-t:image/png.png"
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
