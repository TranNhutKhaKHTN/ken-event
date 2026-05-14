/* eslint-disable @next/next/no-img-element */
import { motion } from "motion/react";

const COMMITTEE_ITEMS = [
  {
    name: "NGUYỄN TRIỆU MẪN",
    position: (
      <p className="text-center">
        TRƯỞNG BAN TỔ CHỨC <br /> TRƯỞNG BAN THIẾT KẾ
      </p>
    ),
    image:
      "https://content.pancake.vn/web-media-262/82/2d/c8/fc/0d2bd327f3b4b1699ae0313c6532e86b1f53a8623f90c8260d69ee0b-w:1080-h:1620-l:140131-t:image/jpeg.jpg",
  },
  {
    name: "LÊ PHI ANH",
    position: (
      <p className="text-center">
        TRƯỞNG BAN TÀI CHÍNH <br /> TRƯỞNG BAN SẢN XUẤT
      </p>
    ),
    image:
      "https://content.pancake.vn/web-media-262/58/1a/aa/58/0b903bf83d5c32e32fb47580ec27551ae18649b367b04dc995f4e9f2-w:1080-h:1620-l:169538-t:image/jpeg.jpg",
  },
  {
    name: "QUÁCH BẢO GIA NGHI",
    position: (
      <p className="text-center">
        TRƯỞNG BAN <br /> TRUYỀN THÔNG
      </p>
    ),
    image:
      "https://content.pancake.vn/web-media-262/9a/7b/d0/15/63a68fdbeec3e71bdda1d911217ef825da33ed5ee95ca0146df63ba4-w:1080-h:1620-l:210544-t:image/jpeg.jpeg",
  },
  {
    name: "LƯƠNG YẾN VY",
    position: (
      <p className="text-center">
        TRƯỞNG BAN <br /> NỘI DUNG
      </p>
    ),
    image:
      "https://content.pancake.vn/web-media-262/62/da/11/d3/c9650e4a40507b330f6a780de2fdcdf45f92cfa905ae325d8bb82bd8-w:1080-h:1620-l:161457-t:image/jpeg.jpg",
  },
  {
    name: "NGUYỄN THỊ ÁNH SÁNG",
    position: <p className="text-center">BAN NỘI DUNG</p>,
    image:
      "https://content.pancake.vn/web-media-262/27/74/e3/42/88ddeb41f97fb6abc5f7853ee99e6bde3a619e61fa4c7bdb92496c92-w:1080-h:1620-l:204186-t:image/jpeg.jpg",
  },
  {
    name: "TRẦN THỊ MỸ DUYÊN",
    position: <p className="text-center">BAN NỘI DUNG</p>,
    image:
      "https://content.pancake.vn/web-media-262/14/2b/95/3c/e9f7e57c072e3b548a86eed6642a07e6706b51edd90a7852f6819fa6-w:1080-h:1620-l:147970-t:image/jpeg.jpg",
  },
];

const END_ITEMS = [
  {
    name: "NGUYỄN THẾ QUYỀN ",
    position: <p className="text-center">BAN HẬU CẦN</p>,
    image:
      "https://content.pancake.vn/web-media-262/49/7b/00/ae/30410180a2f769a491f93bf3e034a57018706d42be12ead023bfa18e-w:1080-h:1620-l:131248-t:image/jpeg.jpeg",
  },
  {
    name: "LÂM QUỐC CƯỜNG",
    position: <p className="text-center">BAN HẬU CẦN</p>,
    image:
      "https://content.pancake.vn/web-media-262/af/ed/aa/2a/8e5a62450c7faf5ce4af7e8d769f4189de719a475574af17007cad10-w:1080-h:1620-l:122513-t:image/jpeg.jpg",
  },
];

const Committee = () => {
  return (
    <div className="w-full px-1 shadow-2xl mt-36">
      <div className="w-full text-center py-10 text-xl font-essendine">
        BAN TỔ CHỨC
      </div>
      <motion.div
        className="w-full"
        initial={{ y: 250, opacity: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-full grid grid-cols-3 gap-x-1.5 gap-y-8">
          {COMMITTEE_ITEMS.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center"
            >
              <img src={item.image} alt={item.name} className="rounded-xl" />
              <div className="w-full flex flex-col items-center h-[60px]">
                <div className="text-xs font-thin whitespace-nowrap py-2 text-[#ffffff] italic">
                  {item.name}
                </div>
                <div className="px-3 w-full">
                  <div className="border-t w-full border-white"></div>
                </div>
                <div className="text-[11px] font-light py-1 italic">
                  {item.position}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center gap-1.5 mt-8">
          {END_ITEMS.map((item) => (
            <div
              key={item.name}
              className="w-1/3 flex flex-col items-center justify-center"
            >
              <img src={item.image} alt={item.name} className="rounded-xl" />
              <div className="w-full flex flex-col items-center h-[60px]">
                <div className="text-xs font-light whitespace-nowrap py-2 italic text-[#ffffff]">
                  {item.name}
                </div>
                <div className="px-3 w-full">
                  <div className="border-t w-full border-white"></div>
                </div>
                <div className="text-[11px] font-light py-1 italic">
                  {item.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Committee;
