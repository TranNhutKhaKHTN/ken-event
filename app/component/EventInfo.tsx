import { motion } from "motion/react";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "200 Nguyễn Duy Trinh, Phường Bình Trưng, Thành phố Hồ Chí Minh",
  );

function CalendarIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-gray-600"
      aria-hidden
    >
      <rect
        x="7"
        y="9"
        width="30"
        height="28"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path d="M7 17h30" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M14 6v5M30 6v5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <text
        x="22"
        y="31.5"
        textAnchor="middle"
        fill="currentColor"
        fontSize="12"
        fontWeight="600"
      >
        14
      </text>
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-gray-600"
      aria-hidden
    >
      <path
        d="M22 9a7.25 7.25 0 0 0-7.25 7.25c0 5.4 7.25 13.25 7.25 13.25s7.25-7.85 7.25-13.25A7.25 7.25 0 0 0 22 9Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="16.25" r="2" fill="currentColor" />
    </svg>
  );
}

const EventInfo = () => {
  return (
    <motion.section
      className="mx-4 font-essendine mt-10 mb-8 rounded-3xl bg-white px-5 py-7 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
      aria-labelledby="event-info-title"
      initial={{ y: 200, opacity: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{
        once: true,
      }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h2
        id="event-info-title"
        className="text-center text-lg uppercase leading-snug tracking-wide text-black"
      >
        CHƯƠNG TRÌNH NGHỆ THUẬT KÉN
      </h2>
      <div className="w-full px-16">
        <div
          className="mt-4 border-t border-dashed border-neutral-400"
          aria-hidden
        />
      </div>

      <div className="mt-6 flex gap-1">
        <motion.div
          initial={{ x: -20, opacity: 0.1 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{
            once: true,
          }}
        >
          <CalendarIcon />
        </motion.div>
        <motion.div
          className="min-w-0 flex-1 pt-0.5"
          initial={{ x: 300, opacity: 0.1 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{
            once: true,
          }}
        >
          <p className="text-[14px] uppercase leading-snug text-black">
            19:00 - CHỦ NHẬT
          </p>
          <p className="mt-1 text-[11px] font-normal leading-relaxed text-neutral-800">
            Ngày 14 tháng 06 năm 2026
          </p>
        </motion.div>
      </div>

      <div className="mt-6 flex gap-1">
        <motion.div
          initial={{ x: -20, opacity: 0.1 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{
            once: true,
          }}
        >
          <MapPinIcon />
        </motion.div>
        <motion.div
          className="min-w-0 flex-1 pt-0.5"
          initial={{ x: 300, opacity: 0.1 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{
            once: true,
          }}
        >
          <p className="text-[14px]  uppercase leading-snug text-black">
            TRUNG TÂM CUNG ỨNG DỊCH VỤ CÔNG PHƯỜNG BÌNH TRƯNG
          </p>
          <p className="mt-1 text-[11px] font-normal leading-relaxed text-neutral-800">
            200 Nguyễn Duy Trinh, Phường Bình Trưng, TP. HCM
          </p>
        </motion.div>
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex ease-in-out duration-300 items-center justify-center rounded-full border border-black bg-white px-5 py-2 text-center text-[12px] uppercase leading-tight tracking-wide text-black shadow-[0_4px_14px_rgb(0,0,0,0.15)] transition hover:bg-neutral-50 active:scale-[0.99] hover:scale-[1.1]"
        >
          XEM CHỈ ĐƯỜNG TRÊN GOOGLE MAPS
        </a>
      </div>
    </motion.section>
  );
};

export default EventInfo;
