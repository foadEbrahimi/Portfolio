import React from "react";
import Border from "../components/Border";
import Social from "./carts/Social";
import { socials } from "../constants";
export default function Contact() {
  return (
    <div className="px-5 py-10 lg:px-10">
      <div>
        <h2 className="text-center font-iranSans text-2xl font-bold lg:text-3xl">
          ارتباط با من
        </h2>
        <Border display="flex justify-center w-28 lg:w-28 mx-auto" />
      </div>
      <div className="mt-10 flex flex-col justify-center gap-10 px-8 sm:flex-row">
        {socials.map((item) => (
          <Social key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
