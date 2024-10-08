import React from "react";

export default function Social({ img, label, link }) {
  return (
    <div className="relative flex w-full items-center justify-between rounded-full bg-white p-5 shadow-1 lg:max-w-[300px]">
      <img
        src={img}
        draggable={false}
        alt="img"
        className="absolute -right-1.5 -top-4 w-24"
      />
      <a
        className="w-full text-left text-lg font-bold text-natural-10-title underline"
        href={link}
      >
        {label}
      </a>
    </div>
  );
}
