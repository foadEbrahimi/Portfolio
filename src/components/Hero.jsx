import React from "react";
import foad from "../assets/images/foad.jpg";
import dots from "../assets/images/svgs/dots.svg";
import hamkari from "../assets/images/svgs/hamkari.svg";
import Border from "./Border";

export default function Hero() {
  return (
    <div className="animate__animated animate__backInUp animate__slow animate__delay-2s mt-10 space-y-5 px-5 lg:flex lg:items-center lg:justify-center lg:gap-10 lg:px-10">
      <div className="relative mx-auto h-[300px] w-[300px] overflow-hidden rounded-full border-2 border-brand-6 bg-brand-8 lg:mx-0 lg:h-[350px] lg:w-[350px]">
        <img
          src={foad}
          alt="img"
          className="absolute left-0 top-0"
          draggable={false}
        />
      </div>
      <div className="space-y-5">
        <div className="space-y-2">
          <h1 className="text-center font-morraba text-4xl font-semibold text-natural-10-title lg:w-10 lg:text-6xl">
            فواد ابراهــیـمـی
          </h1>
          <p className="text-center font-vazir text-natural-7 lg:hidden lg:max-w-[20rem] lg:text-right">
            من فواد ابراهیمی 17 ساله و برنامه نویس فرانت اند هستم
          </p>
          <p className="hidden text-center font-vazir text-natural-7 lg:block lg:max-w-[20rem] lg:text-right">
            من فواد ابراهیمی هستم 17 ساله و فرانت اند دولوپر و علاقه مند به کار
            و یادگیری...
          </p>
          <Border display="hidden lg:flex" />
        </div>
        <div className="grid grid-cols-2 gap-[16px] font-vazir xl:gap-[24px]">
          <button
            onClick={() => document.getElementById("contact").scrollIntoView()}
            className="flex items-center justify-center gap-3 rounded-lg bg-brand-8 p-3 text-white transition-all duration-300 hover:bg-brand-10-hover"
          >
            همکاری
            <img src={hamkari} className="w-5" alt="svg" />
          </button>
          <button
            onClick={() => document.getElementById("about").scrollIntoView()}
            className="flex items-center justify-center gap-3 rounded-lg bg-brand-8 p-3 text-white transition-all duration-300 hover:bg-brand-10-hover"
          >
            بیشتر
            <img src={dots} className="w-5" alt="svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
