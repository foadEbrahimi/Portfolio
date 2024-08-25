import React from "react";

import ins from "../assets/images/socials/instagram2.png";
import tel from "../assets/images/socials/telegram2.png";
import whats from "../assets/images/socials/whatsapp.png";

import logo from "../assets/images/Logo.png";

import place from "../assets/images/svgs/place.svg";
import phone from "../assets/images/svgs/phone.svg";
import email from "../assets/images/svgs/email.svg";

export default function Footer() {
  return (
    <div className="mt-10 rounded-t-3xl bg-brand-9 p-5 font-vazir lg:mx-auto lg:w-[95%] lg:px-10">
      <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-center md:gap-20 lg:gap-40">
        <div className="space-y-3">
          <img src={logo} className="w-10" alt="logo" />
          <p className="max-w-[20rem] text-sm text-natural-2 md:text-[16px]">
            کلیه حقوق مادی و معنوی سایت برای فواد ابراهیمی محفوظ است &copy;
          </p>
          <div className="mt-3 flex items-center gap-3">
            <a href="">
              <div className="w-fit cursor-pointer rounded-full border-2 border-white p-1.5 transition-all hover:scale-110">
                <img src={ins} className="h-7 w-7" alt="svg" />
              </div>
            </a>
            <a href="https://t.me/foadEbr">
              <div className="flex w-fit cursor-pointer items-center justify-center rounded-full border-2 border-white p-1.5 transition-all hover:scale-110">
                <img src={tel} className="h-7 w-7" alt="svg" />
              </div>
            </a>
            <a href="https://wa.me/09388721653">
              <div className="w-fit cursor-pointer rounded-full border-2 border-white p-1.5 transition-all hover:scale-110">
                <img src={whats} className="h-7 w-7" alt="svg" />
              </div>
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-xl text-natural-2">لینک های مرتبط</h1>
          <ul className="mt-5 space-y-3 text-sm text-natural-2 lg:text-[16px]">
            <li
              className="cursor-pointer"
              onClick={() => document.getElementById("about").scrollIntoView()}
            >
              درباره من
            </li>
            <li
              onClick={() => document.getElementById("works").scrollIntoView()}
              className="cursor-pointer"
            >
              کارهای من
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-natural-2">ارتباط با من</h1>
          <ul className="mt-5 space-y-3 text-sm text-natural-2">
            <li className="flex items-center gap-2">
              <img src={place} alt="" className="w-8" />
              <span className="lg:text-[16px]">ایران، کرمان</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={phone} alt="" className="w-8" />
              <span className="lg:text-[16px]">09388721653</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={email} alt="" className="w-8" />
              <span className="lg:text-[16px]">fwad40901@gmail.com</span>
            </li>
          </ul>
        </div>
        {/* <div className="hidden lg:block"></div> */}
        {/* <div className="hidden lg:block"></div> */}
      </div>
    </div>
  );
}
