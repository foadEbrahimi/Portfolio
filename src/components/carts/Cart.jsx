import React from "react";

import img from "./Frame 44 (1).png";
import link from "../../assets/images/svgs/link.svg";

export default function Cart() {
  return (
    <div className="font-vazir rounded-xl bg-white p-4 shadow-1">
      <img src={img} className="w-full" alt="" draggable={false} />
      <div className="mt-4 space-y-3">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          اپلیکیشن فیلم و سریال اکتور
          <a href="link">
            <img src={link} className="w-5 cursor-pointer" alt="svg" />
          </a>
        </h2>
        <p className="min-w-[19rem] text-right text-sm font-semibold leading-[18px] text-natural-7 md:w-full">
          اپلیکیشنی با ظاهری متفاوت و جذاب برای کسانی که در این حوزه فعالیت می
          کنند و برای کاربران خود ارزش قاعل هستند
        </p>
      </div>
      <div className="mt-5 flex flex-row-reverse flex-wrap items-center gap-3">
        <div className="rounded-full bg-warning-6 px-5 py-1 font-morraba text-white">
          react
        </div>
        <div className="rounded-full bg-warning-6 px-5 py-1 font-morraba text-white">
          tailwind
        </div>
        <div className="rounded-full bg-warning-6 px-5 py-1 font-morraba text-white">
          redux
        </div>
        <div className="rounded-full bg-warning-6 px-5 py-1 font-morraba text-white">
          react-query
        </div>
      </div>
    </div>
  );
}
