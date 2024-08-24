import React from "react";

import Border from "./Border";
import BtnSlider from "./slider/BtnSlider";
import TestimonialCart from "./carts/TestimonialCart";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

export default function Testimonial() {
  return (
    <div className="px-5 py-10 lg:px-10">
      <div>
        <h2 className="font-vazir text-center text-2xl font-bold lg:text-3xl">
          نظرات کارفرمایان
        </h2>
        <Border display="flex justify-center w-28 lg:w-28 mx-auto" />
      </div>
      <div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".testominal.swiper-button-prev",
            prevEl: ".testominal.swiper-button-next",
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
            <TestimonialCart />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCart />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCart />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCart />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCart />
          </SwiperSlide>
        </Swiper>
        <BtnSlider className="testominal" />
      </div>
    </div>
  );
}
