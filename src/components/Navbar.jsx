import React from 'react';

import menu from '../assets/images/menu.svg';
export default function Navbar() {
  return (
    <div className="flex shadow-1 p-3 items-center justify-between ">
      <img src="" className="w-7" alt="logo" />
      <img src={menu} className="w-7 cursor-pointer" alt="svg" />
    </div>
  );
}
