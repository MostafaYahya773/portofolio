'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export default function HtmlCssJs() {
  const [projects, setProjects] = useState([
    {
      name: 'Wether app',
      image: '/weather.png',
      tools: ['Html', 'bootstrap', 'Javascript', 'Api'],
      description:
        'Developed a dynamic weather application Integrated a weather API (like Weather Api) to fetch real-time weather data.',
      github: 'https://github.com/MostafaYahya773/wether',
      live: 'https://mostafayahya773.github.io/wether//wether/app/index.html',
    },
    {
      name: 'Fresh food App',
      image: '/food.png',
      tools: ['Html', 'css', 'Javascript', 'Api'],
      description:
        ' Developed a food recipe web application ,integrated a public API to fetch recipes, ingredients, and cooking instructions in real-time. ',
      github: 'https://github.com/MostafaYahya773/fresh-food',
      live: 'https://mostafayahya773.github.io/fresh-food/food/app/index.html',
    },
    {
      name: 'Car Landing Page',
      image: '/car.png',
      tools: ['Html', 'Sass', 'Javascript'],
      description:
        ' buying, selling, and renting cars at the best prices. We offer a wide range of vehicles, after-sales services, and financing options. ',
      github: 'https://github.com/MostafaYahya773/car-store-landingpage',
      live: 'https://mostafayahya773.github.io/car-store-landingpage/app/index.html',
    },
    {
      name: 'game store App',
      image: '/game.png',
      tools: ['Html', 'tailwind', 'Javascript'],
      description:
        ' buying, and playing onling games at the best prices. We offer a wide range of games, after-sales services, and financing options. ',
      github: 'https://github.com/MostafaYahya773/game-store',
      live: 'https://mostafayahya773.github.io/game-store/app/index.html',
    },
  ]);
  return (
    <div className="flex flex-col gap-2 ">
      <div className="title w-full">
        <h1 className="text-[20px] sm:text-[24px]  border-b pb-2 dark:border-[var(--secoundry-color-dark)] border-[var(--secoundry-color)] w-full font-extralight dark:text-[var(--secoundry-color-dark)] text-[var(--secoundry-color)]">
          Html , Css & Js
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-5 p-2">
        {projects.map((project, index) => (
          <div
            className="flex flex-col gap-2 dark:bg-[var(--box-bg-dark)] bg-[var(--box-bg)] rounded-lg "
            key={index}
          >
            <div className="img">
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={500}
                loading="lazy"
                className="w-full rounded-t-lg sm:h-[150px] md:h-[200px] lg:h-[270px]"
              />
            </div>
            <div className="details h-full grid grid-rows-[auto_auto_auto] gap-2 md:gap-5 px-2 py-2">
              <div className="title flex justify-between items-center gap-3">
                <h1 className="dark:text-[var(--white-color)] text-[var(--secoundry-color)] text-[16px] md:text-[20px] font-medium">
                  {project.name}
                </h1>
                <div className="action flex gap-1 md:gap-3  items-center *:dark:bg-[var(--box-bg-dark)] *:bg-[var(--secoundry-color)] *text-[15px] *sm:text-[16px] *:md:text-[18px] *:rounded-lg *:text-white *:py-1 *:px-3 *:md:px-5 *sm:px-4 ">
                  <a href={project.github} target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href={project.live} target="_blank">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              <div className="desc">
                <p className="dark:text-[var(--white-color)] text-[var(--primary-color)] text-[14px] md:text[16px]">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <p
                    key={index}
                    className=" text-[15px] font-normal dark:text-[var(--secoundry-color-dark)] text-[var(--secoundry-color)]  bg-[var(--box-bg-dark)] py-1 px-2 rounded-md"
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
