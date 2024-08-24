import React, { useState } from "react";
import Border from "./Border";

import boy from "../assets/images/about/boy.png";
import doodle1 from "../assets/images/about/doodle1.png";
import doodle2 from "../assets/images/about/doodle2.png";
import doodle3 from "../assets/images/about/doodle3.png";
import doodle4 from "../assets/images/about/doodle4.png";

import dotsBrand from "../assets/images/svgs/dots-brand.svg";
import { AboutInfo } from "../constants/index";

export default function About() {
  const [infoCount, setInfoCount] = useState(0);

  function handlerCount() {
    setInfoCount((prev) => (prev === 2 ? 0 : prev + 1));
  }

  return (
    <div id="about" className="mt-10 bg-white px-5 pt-5 lg:px-10">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-10">
        <div>
          <h2 className="font-vazir text-center text-2xl font-bold lg:text-right lg:text-3xl">
            درباره من
          </h2>
          <Border display="flex justify-center w-28 lg:w-28 mx-auto lg:mx-0" />
          <p
            className={`font-vazir mt-5 font-semibold text-natural-7 opacity-100 transition-all duration-300 md:mt-6`}
          >
            {AboutInfo[infoCount]?.text}
          </p>
          <button
            onClick={handlerCount}
            className="font-vazir mt-5 flex animate-bounce items-center gap-1 font-semibold text-brand-9"
          >
            بیشتر
            <img
              src={dotsBrand}
              draggable={false}
              className="w-5 fill-brand-9"
              alt="svg"
            />
          </button>
        </div>
        <div className="relative mt-10 flex-shrink-0 self-end px-10">
          <img src={boy} draggable={false} alt="svg" className="w-32 md:w-40" />
          <img
            src={doodle1}
            className="absolute left-0 top-0 w-16 md:w-20"
            alt="svg"
            draggable={false}
          />
          <img
            src={doodle2}
            className="absolute right-5 top-0 w-16 md:w-20"
            alt="svg"
            draggable={false}
          />
          <img
            src={doodle3}
            className="absolute right-5 top-[50%] w-16 translate-y-[-50%] md:w-20"
            alt="svg"
            draggable={false}
          />
          <img
            src={doodle4}
            className="absolute left-0 top-[50%] w-16 translate-y-[-50%] md:w-20"
            alt="svg"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
