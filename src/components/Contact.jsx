import React from "react";
import Border from "../components/Border";
import { socials } from "../constants";
import Social from "./carts/Social";
export default function Contact() {
  return (
    <div
      id="contact"
      className="flex min-h-[60dvh] flex-col justify-center px-5 py-10 lg:px-10"
    >
      <div>
        <h2 className="font-vazir text-center text-2xl font-bold lg:text-3xl">
          ارتباط با من
        </h2>
        <Border display="flex justify-center w-28 lg:w-28 mx-auto" />
      </div>
      <div className="mt-10 grid grid-cols-1 place-items-center gap-10 px-8 sm:grid-cols-2 lg:grid-cols-3">
        {socials.map((item) => (
          <Social key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
