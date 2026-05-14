/* eslint-disable @next/next/no-img-element */
import AttendForm from "./component/AttendForm";
import Committee from "./component/Committee";
import EventInfo from "./component/EventInfo";
import Flower from "./component/Flower";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[420px] pb-[400px] pt-1 h-screen w-full mx-auto bg-[url('/bg-all.png')] bg-contain bg-center bg-no-repeat bg-fixed overflow-auto">
        <Navbar />
        <div className="flex items-center flex-col justify-center pt-12">
          <div className="text-xs italic font-light text-center tracking-wider leading-5">
            THƯ MỜI THAM DỰ <br /> CHƯƠNG TRÌNH NGHỆ THUẬT
          </div>
          <img
            src="https://content.pancake.vn/web-media-262/s853x554/fwebp80/2f/44/9f/a8/ddefa21b19757c609fccb001841cb12501d00a371409175d4ef77f4a-w:1077-h:699-l:406503-t:image/png.png"
            alt=""
            className="w-[236px] h-full object-cover mt-7"
          />
          <div className="w-[236px] rounded-lg flex justify-end mt-5 translate-x-[10px]">
            <img
              src="/favicon.png"
              className="w-[200px]"
              alt="FPT Polytechnic"
            />
          </div>
        </div>
        <div className="relative flex items-center flex-col justify-center">
          <div className="capitalize text-md font-light italic mt-14 z-40">
            Trân trọng kính mời:
          </div>
          <div className="w-full flex items-center flex-col justify-center mt-4 z-40">
            <div className="text-xl" style={{ fontFamily: "cursive" }}>
              Quý Khách
            </div>
            <div className="border-t border-dotted w-[240px] mx-auto translate-y-[-6px]"></div>
          </div>
          <div className="absolute left-0 top-[-120px] z-20">
            <Flower />
          </div>
          <div
            className="absolute right-0 top-[-120px] z-10"
            style={{ transform: "scaleX(-1)" }}
          >
            <Flower />
          </div>
        </div>
        <Committee />
        <EventInfo />
        <AttendForm />
      </div>
    </div>
  );
}
