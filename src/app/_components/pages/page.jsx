'use client';
import React, { useState } from 'react';
import PageInfo from '../pageInfo/page';
export default function MyPages() {
  return (
    <div className="my-auto md:my-10 flex flex-col overflow-hidden gap-3">
      <div className="title w-full">
        <h1 className="text-2xl border-b pb-4 border-[#dbd3d333] w-full font-extralight text-[#dbd3d38b]">
          Pages
        </h1>
      </div>
      <div>
        <PageInfo />
      </div>
    </div>
  );
}
