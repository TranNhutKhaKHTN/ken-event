"use client";

import { type FormEvent, useState } from "react";

const AttendForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState<"attend" | "definite" | null>(
    null,
  );

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section
      className="mx-4 mt-18 mb-8 rounded-3xl bg-white px-5 py-7 shadow-[0_8px_30px_rgba(75,44,130,0.22)]"
      aria-labelledby="attend-form-title"
    >
      <h2
        id="attend-form-title"
        className="text-center text-lg uppercase tracking-wide text-black"
      >
        XÁC NHẬN THAM DỰ
      </h2>

      <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
        <input
          id="attend-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tên người tham dự:"
          className="w-full rounded-full border border-black bg-white px-5 py-3 text-sm text-black italic outline-none placeholder:text-[#A0A0A0] placeholder:italic focus-visible:ring-2 focus-visible:ring-black/15"
        />

        <input
          id="attend-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Số điện thoại:"
          className="w-full rounded-full border border-black bg-white px-5 py-3 text-sm text-black italic outline-none placeholder:text-[#A0A0A0] placeholder:italic focus-visible:ring-2 focus-visible:ring-black/15"
        />

        <p className="px-1 text-center text-xs italic leading-relaxed text-black">
          Xác nhận tham gia Chương trình nghệ thuật Kén
        </p>

        <div className="rounded-full border border-black px-4 py-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-around sm:gap-4">
            <label className="flex cursor-pointer items-center gap-2.5 text-sm italic text-[#A0A0A0]">
              <input
                type="checkbox"
                checked={attendance === "attend"}
                onChange={() =>
                  setAttendance(attendance === "attend" ? null : "attend")
                }
                className="size-4 shrink-0 rounded-sm border border-black accent-[#4B2C82]"
              />
              Tham dự
            </label>
            <label className="flex cursor-pointer items-center gap-2.5 text-sm italic text-[#A0A0A0]">
              <input
                type="checkbox"
                checked={attendance === "definite"}
                onChange={() =>
                  setAttendance(attendance === "definite" ? null : "definite")
                }
                className="size-4 shrink-0 rounded-sm border border-black accent-[#4B2C82]"
              />
              Chắc chắn tham dự
            </label>
          </div>
        </div>

        <div className="mt-2 flex justify-center pt-1">
          <span className="cursor-pointer rounded-full bg-white p-[2px] shadow-[0_6px_20px_rgba(0,0,0,0.18)] hover:scale-[1.1] ease-in-out duration-300">
            <span className="block rounded-full bg-white p-[2px]">
              <button
                type="submit"
                className="block min-w-[200px] cursor-pointer rounded-full font-medium bg-[#4B2C82] px-10 py-2 text-center uppercase tracking-wide text-white transition hover:bg-[#3d246c] active:scale-[0.99]"
              >
                GỬI NGAY
              </button>
            </span>
          </span>
        </div>
      </form>
    </section>
  );
};

export default AttendForm;
