'use client';
// import ManuProvider from '@/app/context/manu';

import React, { useContext, useState } from 'react';
import OpenBar from '../openbar/page';
import { contextManu } from '@/app/context/manu';
import Link from 'next/link';

export default function Nav() {
  let { isOpenManu, setIsOpenManu } = useContext(contextManu);

  return (
    <div className="flex items-center justify-between py-2  ">
      <Link href="/" className="bg-white px-2 rounded-md hover:-rotate-6">
        <h1 className="text-3xl font-bold text-[#092635]">M</h1>
      </Link>
      <div className="icons flex *:bg-white/5 *:text-white *:w-[30px] *:h-[30px] *:cursor-pointer *:text-[15px] *:rounded-full items-center gap-2">
        <button>
          <i className="fa-solid fa-sun"></i>
        </button>
        <button onClick={() => setIsOpenManu(!isOpenManu)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className={`${isOpenManu ? 'block' : 'hidden'}`}>
        <OpenBar />
      </div>
    </div>
  );
}
