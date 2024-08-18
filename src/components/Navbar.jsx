import React from "react";

import menu from "../assets/images/svgs/menu.svg";
export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-3 px-5 shadow-1 lg:px-10">
      <img src={menu} className="w-7 cursor-pointer" alt="svg" />
      <img src="" className="w-7" alt="logo" />
    </div>
  );
}
