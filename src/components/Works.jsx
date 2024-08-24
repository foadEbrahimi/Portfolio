import React from "react";
import Border from "./Border";
import Cart from "./carts/Cart";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import BtnSlider from "./slider/BtnSlider";

export default function Works() {
  return (
    <div className="mt-10 px-2 py-5 lg:px-10">
      <div className="">
        <h2 className="font-vazir text-center text-2xl font-bold lg:text-3xl">
          کارهای من
        </h2>
        <Border display="flex justify-center w-28 lg:w-36 mx-auto" />
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".works.swiper-button-prev",
          prevEl: ".works.swiper-button-next",
        }}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: "1.1",
          },
          600: {
            slidesPerView: "1.6",
          },
          800: {
            slidesPerView: "2.1",
          },
          1200: {
            slidesPerView: "3.1",
          },
        }}
      >
        <SwiperSlide>
          <Cart />
        </SwiperSlide>
        <SwiperSlide>
          <Cart />
        </SwiperSlide>
        <SwiperSlide>
          <Cart />
        </SwiperSlide>
        <SwiperSlide>
          <Cart />
        </SwiperSlide>
        <SwiperSlide>
          <Cart />
        </SwiperSlide>
        <SwiperSlide>
          <Cart />
        </SwiperSlide>
      </Swiper>
      <BtnSlider className={"works"} />
    </div>
  );
}
