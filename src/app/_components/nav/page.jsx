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
      <Link
        href="/"
        className="dark:bg-white bg-[var(--secoundry-color)] px-2 rounded-md hover:-rotate-6"
      >
        <h1 className="text-3xl font-bold dark:text-[var(--primary-color)] text-white">
          M
        </h1>
      </Link>
      <div className="icons flex *:dark:bg-[var(--box-bg-dark)] *:bg-[var(--secoundry-color)] *:text-white *:w-[30px] *:h-[30px] *:cursor-pointer *:text-[15px] *:rounded-full items-center gap-2">
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
