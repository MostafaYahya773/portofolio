'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import CountUp from 'react-countup';

import SocailMedail from '../socailMedai/page';
export default function Hero() {
  // Animated Counter
  const [animated, setAnimated] = useState([
    { type: 'projects', count: 15 },
    { type: 'experience', count: 2 },
    { type: 'skills', count: 25 },
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 my-10 md:my-16 overflow-hidden">
      <div className="order-2 md:order-1">
        <div className="info dark:text-white text-[var(--primary-color)] text-[30px] md:text-[36px] flex flex-col gap-0  ">
          <h1>
            Mostafa{' '}
            <span className="dark:text-[var(--secoundry-color-dark)] text-[var(--secoundry-color)]">
              Yahya
            </span>
            ,
          </h1>
          <h2>FrontEnd Developer</h2>
          <div className="text-[20px] flex flex-col gap-3">
            <p className="dark:text-[var(--header-color-dark)] text-[var(--header-color)]   font-light">
              Turning ideas into interactive, responsive, and user-friendly web
              experiences using
            </p>
            <div className="text-[20px] flex gap-1 dark:text-[var(--secoundry-color-dark)] text-[var(--secoundry-color)]">
              <a href="https://react.dev/" target="_blank">
                React.js,
              </a>
              <a href="https://nextjs.org/" target="_blank">
                Next.js
              </a>
              <a href="https://tailwindcss.com/" target="_blank">
                & Tailwind CSS
              </a>
            </div>
          </div>
          <div className="counter mt-5 backdrop-blur-md dark:bg-[var(--box-bg-dark)] bg-[var(--box-bg)] rounded-xl w-full md:w-3/4 lg:w-1/2 py-2">
            <div className="projects grid grid-cols-3 text-[20px] ">
              {animated.map((item, index) => (
                <div className="flex gap-3 flex-col items-center " key={index}>
                  <p className="font-light ">{item.type}</p>
                  <div className="flex items-center">
                    <CountUp
                      className="text-[var(--secoundry-color)] dark:text-[var(--secoundry-color-dark)]"
                      start={0}
                      end={item.count}
                      duration={4}
                      delay={0.2}
                    />
                    +
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2 flex flex-col justify-between z-0  gap-5">
        <div className="image dark:bg-[var(--white-color)] bg-[var(--box-bg)]  relative overflow-hidden me-auto  md:mx-auto  w-[200px] h-[200px] rounded-full ">
          <Image
            className="scale-[210%] absolute top-5"
            src="/personal-img.png"
            alt="profile"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="hidden md:block">
          <SocailMedail />
        </div>
      </div>
    </div>
  );
}
