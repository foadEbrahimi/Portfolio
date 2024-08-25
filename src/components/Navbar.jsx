import React from "react";

import logo from "../assets/images/Logo.png";

export default function Navbar() {
  return (
    <div className="animate__animated animate__fadeInDownBig animate__slow mx-auto p-3 px-5 font-vazir shadow-1 lg:px-10">
      <div className="mx-auto flex max-w-[70rem] items-center justify-between">
        {/* <img src={menu} className="w-7 cursor-pointer" alt="svg" /> */}
        <ul className="flex items-center gap-5 *:text-lg">
          <li
            className="cursor-pointer transition-all hover:text-brand-8"
            onClick={() => document.getElementById("works").scrollIntoView()}
          >
            پروژه ها
          </li>
          <li
            className="cursor-pointer transition-all hover:text-brand-8"
            onClick={() => document.getElementById("about").scrollIntoView()}
          >
            درباره من
          </li>
          <li
            className="cursor-pointer transition-all hover:text-brand-8"
            onClick={() => document.getElementById("contact").scrollIntoView()}
          >
            ارتباط
          </li>
        </ul>
        <img src={logo} className="w-12" alt="logo" />
      </div>
    </div>
  );
}
