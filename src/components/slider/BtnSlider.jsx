import React from "react";

import left from "../../assets/images/slider/svgs/chevron-left.svg";
import right from "../../assets/images/slider/svgs/chevron-right.svg";

export default function BtnSlider({ className }) {
  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <button
          className={`${className} swiper-button-next flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-brand-8 transition-all hover:bg-brand-8 md:h-12 md:w-12`}
        >
          <img src={right} alt="svg" className="h-10 w-5" />
        </button>
        <button
          className={`${className} swiper-button-prev flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-brand-8 transition-all hover:bg-brand-8 md:h-12 md:w-12`}
        >
          <img src={left} alt="svg" className="h-10 w-5" />
        </button>
      </div>
    </div>
  );
}
