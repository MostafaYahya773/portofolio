'use client';
import React, { useState } from 'react';
import Animation from '../animation/page';
import Image from 'next/image';

export default function NextReact() {
  const [projects, setProjects] = useState([
    {
      name: 'Tourism website',
      image: '/tourism.png',
      tools: ['Next Js', 'TailwindCss', 'React Query', 'Context Api', 'Api'],
      description:
        'A full-featured web platform designed for tourists, Allowing users to book transportation and hotel accommodations with interactive map support',
      github: 'https://github.com/MostafaYahya773/tourism-project',
      live: 'https://tourism-project-nu.vercel.app/',
    },
    {
      name: 'Real estate website',
      image: '/Realestate.png',
      tools: ['React Js', 'TailwindCss', 'React Query', 'Context Api', 'Api'],
      description:
        'Fully responsive real estate website that delivers a smooth and intuitive user experience , Users can explore featured areas Detailed information',
      github: 'https://github.com/MostafaYahya773/AIG',
      live: 'https://aig-mostafayahyas-projects.vercel.app/',
    },
  ]);
  return (
    <div className="flex flex-col gap-2">
      <div className="title w-full">
        <h1 className="text-[20px] sm:text-[24px]  border-b pb-2 border-[#dbd3d333] w-full font-extralight text-[#dbd3d38b]">
          React & Next
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-5 p-2">
        {projects.map((project, index) => (
          <div className="flex flex-col bg-[#1b4242b2] rounded-lg " key={index}>
            <div className="img">
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={500}
                loading="lazy"
                className="w-full rounded-t-lg h-[200px] sm:h-auto"
              />
            </div>
            <div className="details h-full grid grid-rows-[auto_auto_auto] gap-2 md:gap-5 px-2 py-2">
              <div className="title flex justify-between items-center gap-3">
                <h1 className="text-white text-[16px] md:text-[20px] font-medium">
                  {project.name}
                </h1>
                <div className="action flex gap-1 md:gap-3  items-center *:bg-[#dbd3d333] *text-[15px] *sm:text-[16px] *:md:text-[18px] *:rounded-lg *:text-white *:py-1 *:px-3 *:md:px-5 *sm:px-4 ">
                  <a href={project.github} target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href={project.live} target="_blank">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              <div className="desc">
                <p className="text-[#ffffff] text-[14px] md:text[16px]">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <p
                    key={index}
                    className=" text-[15px] font-normal text-[#FF9D23] bg-[#dbd3d333] py-1 px-2 rounded-md"
                  >
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
