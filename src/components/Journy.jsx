import React from "react";

import user from "../assets/images/journy/boy-iso-color.png";
import rate from "../assets/images/journy/chart-iso-color.png";
import ellipse from "../assets/images/journy/Ellipse.png";
import figma from "../assets/images/journy/figma-iso-color.png";

import charactar from "../assets/images/journy/Character_5_Standing 1.png";

export default function Journy() {
  return (
    <div className="animate__animated animate__jackInTheBox animate__delay-3s animate__slow relative mt-10 h-fit px-5 py-10 lg:flex lg:items-center lg:justify-end lg:gap-20 lg:bg-white lg:px-10">
      <div className="grid w-full grid-cols-12 gap-5 md:grid-cols-3 lg:w-9/12">
        <div className="col-span-6 space-y-2 rounded-xl p-3 text-center shadow-2 md:col-span-1 lg:bg-natural-1">
          <img
            src={figma}
            className="mx-auto w-16"
            alt="svg"
            draggable={false}
          />
          <img
            src={ellipse}
            className="mx-auto w-16"
            alt="svg"
            draggable={false}
          />
          <span className="font-vazir text-xl font-bold text-natural-10-title lg:text-2xl">
            مـدت فـعـالـیـت
          </span>
          <p className="font-vazir text-body-small font-semibold text-natural-7">
            6 ماه یادگیری حرفه ای
          </p>
        </div>
        <div className="col-span-6 space-y-2 rounded-xl p-3 text-center shadow-2 md:col-span-1 lg:bg-natural-1">
          <img
            src={rate}
            className="mx-auto w-16"
            alt="svg"
            draggable={false}
          />
          <img
            src={ellipse}
            className="mx-auto w-16"
            alt="svg"
            draggable={false}
          />
          <span className="font-vazir text-xl font-bold text-natural-10-title lg:text-2xl">
            مـدت فـعـالـیـت
          </span>
          <p className="font-vazir text-body-small font-semibold text-natural-7">
            6 ماه یادگیری حرفه ای
          </p>
        </div>
        <div className="col-start-4 col-end-10 space-y-2 rounded-xl p-3 text-center shadow-2 md:col-span-1 lg:bg-natural-1">
          <img
            src={user}
            className="mx-auto w-16"
            alt="svg"
            draggable={false}
          />
          <img
            src={ellipse}
            className="mx-auto w-16"
            alt="svg"
            draggable={false}
          />
          <span className="font-vazir text-xl font-bold text-natural-10-title lg:text-2xl">
            مـدت فـعـالـیـت
          </span>
          <p className="font-vazir text-body-small font-semibold text-natural-7">
            6 ماه یادگیری حرفه ای
          </p>
        </div>
      </div>
      <img
        src={charactar}
        className="absolute hidden w-40 lg:right-10 lg:flex"
        alt="img"
      />
    </div>
  );
}
