import React from "react";
import img from "./Frame 44 (1).png";
import user from "../../assets/images/svgs/user.svg";
import date from "../../assets/images/svgs/date.svg";
export default function Cart() {
  return (
    <div className="rounded-xl bg-white p-4 shadow-1">
      <img src={img} className="w-full" alt="" draggable={false} />
      <div className="mt-4 space-y-3">
        <h2 className="font-iranSans text-lg font-bold">
          اپلیکیشن فیلم و سریال اکتور
        </h2>
        <p className="min-w-[19rem] text-right font-iranSans text-sm font-semibold leading-[18px] text-natural-7 md:w-full">
          اپلیکیشنی با ظاهری متفاوت و جذاب برای کسانی که در این حوزه فعالیت می
          کنند و برای کاربران خود ارزش قاعل هستند
        </p>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img src={user} className="w-5" alt="svg" draggable={false} />
          <span className="font-iranSans text-sm font-semibold text-natural-3-caption lg:text-body-medium">
            فواد ابراهیمی
          </span>
        </div>
        <div className="flex items-center gap-1">
          <img src={date} className="w-5" alt="svg" draggable={false} />
          <span className="font-iranSans text-sm font-semibold text-natural-3-caption lg:text-body-medium">
            1403/05/21
          </span>
        </div>
      </div>
    </div>
  );
}
