'use client';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Animation from '../animation/page';
import { contextManu } from '@/app/context/manu';

export default function PageInfo() {
  // use context
  const { setIsOpenManu } = useContext(contextManu);

  // pages list
  const [pages, setPages] = useState([
    {
      name: 'portfolio',
      link: '/portfolio',
      includes: 'projects , knowledges & experiences',
    },
    {
      name: "Let's talk",
      link: '/contact',
      includes: 'Contact with me',
    },
  ]);

  return (
    <>
      <Animation delay={0} y={40} duration={0.5}>
        <div className="links grid  grid-cols-1 lg:grid-cols-2 gap-3">
          {pages.map((page, index) => (
            <Link
              onClick={() => setIsOpenManu(false)}
              href={page.link}
              className="flex flex-col justify-between gap-3 dark:bg-[var(--box-bg-dark)] bg-[var(--box-bg)] opacity-85 p-4 rounded-md hover:opacity-100"
              key={index}
            >
              <h1 className="text-[18px] md:text-[20px] font-bold dark:text-[var(--secoundry-color-dark)] text-[var(--secoundry-color)]">
                {page.name}
              </h1>
              <p className="dark:text-[var(--white-color)] text-[var(--primary-color)] text-[15px] md:text-[18px]">
                {page.includes}
              </p>
            </Link>
          ))}
        </div>
      </Animation>
    </>
  );
}
