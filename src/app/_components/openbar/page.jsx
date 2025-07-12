'use client';

import React, { useContext, useState } from 'react';

import { contextManu } from '@/app/context/manu';
import PageInfo from '../pageInfo/page';
import SocailMedail from '../socailMedai/page';
export default function OpenBar() {
  //use context
  const { setIsOpenManu } = useContext(contextManu);
  return (
    <div className="flex z-[1000] justify-center items-center backdrop-blur-lg  w-full h-full fixed top-0 right-0 left-0 bottom-0">
      <div className="w-[90%] md:w-[70%] bg-[#092635] rounded-2xl shadow h-fit  p-4 flex flex-col gap-2">
        <button
          onClick={() => setIsOpenManu(false)}
          className="text-white py-2 text-end cursor-pointer"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <div>
          <PageInfo />
        </div>
        <div className="flex justify-center mt-5">
          <SocailMedail />
        </div>
      </div>
    </div>
  );
}
