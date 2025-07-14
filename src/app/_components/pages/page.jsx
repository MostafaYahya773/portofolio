'use client';
import React, { useState } from 'react';
import PageInfo from '../pageInfo/page';
export default function MyPages() {
  return (
    <div className="my-auto md:my-10 flex flex-col overflow-hidden gap-3">
      <div className="title w-full">
        <h1 className="text-2xl border-b pb-4 dark:border-[var(--secoundry-color-dark)] border-[var(--secoundry-color)]  w-full font-extralight dark:text-[var(--secoundry-color-dark)] text-[var(--secoundry-color)]">
          Pages
        </h1>
      </div>
      <div>
        <PageInfo />
      </div>
    </div>
  );
}
