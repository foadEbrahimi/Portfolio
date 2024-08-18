import React from "react";

export default function Border({ display }) {
  return (
    <div className={`!mt-3 flex items-center gap-1 ${display}`}>
      <span className="h-[3px] w-32 rounded-full bg-brand-8"></span>
      <span className="h-[3px] w-10 rounded-full bg-brand-8"></span>
    </div>
  );
}
