import React from "react";
import Border from "./Border";
import Cart from "./carts/Cart";

export default function Works() {
  return (
    <div className="px-5 py-5 lg:px-10">
      <div className="">
        <h2 className="text-center font-iranSans text-2xl font-bold lg:text-3xl">
          کارهای من
        </h2>
        <Border display="flex justify-center w-28 lg:w-36 mx-auto" />
      </div>
      <div className="mt-10 grid justify-center gap-5 md:grid-cols-2 xl:grid-cols-3">
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  );
}
