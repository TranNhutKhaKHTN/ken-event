/* eslint-disable @next/next/no-img-element */
import { motion } from "motion/react";

const Sponsors = () => {
  return (
    <motion.section
      className="mx-5 mb-12 mt-4 w-full h-40"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="mb-3 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-white/70">
        Trân trọng cảm ơn
      </p>

      <div className="relative">
        <div
          className="absolute -inset-[1px] rounded-[20px] opacity-90"
          style={{
            background:
              "linear-gradient(135deg, #f5e6a8 0%, #d4af37 35%, #8b6914 70%, #4B2C82 100%)",
          }}
        />

        <div className="relative overflow-hidden rounded-[19px] bg-[#0c0616] px-4 pb-5 pt-5 shadow-[0_16px_48px_rgba(0,0,0,0.45)]">
          <span className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-[#d4af37]/80" />
          <span className="pointer-events-none absolute right-4 top-4 h-5 w-5 border-r border-t border-[#d4af37]/80" />
          <span className="pointer-events-none absolute bottom-4 left-4 h-5 w-5 border-b border-l border-[#d4af37]/80" />
          <span className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-[#d4af37]/80" />

          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
          <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 0%, #d4af37 0%, transparent 55%)",
            }}
          />

          <img
            src="/don-vi-tai-tro.png"
            alt="Đơn vị tài trợ"
            className="relative z-10 w-full object-contain"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Sponsors;
