'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import Animation from '../animation/page';
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
      <div className="order-2 md:order-1" delay={0} x={-100} duration={0.5}>
        <div className="info text-white text-[30px] md:text-[36px] flex flex-col gap-0  ">
          <h1>
            Mostafa <span className=" text-[#FF9D23]">Yahya</span>,
          </h1>
          <h2>FrontEnd Developer</h2>
          <div className="text-[20px] flex flex-col gap-3">
            <p className="text-[#DBD3D3]  font-light">
              Turning ideas into interactive, responsive, and user-friendly web
              experiences using
            </p>
            <div className="text-[20px] flex gap-1 text-[#FF9D23]">
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
          <div className="counter mt-5 backdrop-blur-md bg-white/5 rounded-xl w-full md:w-3/4 lg:w-1/2 py-2">
            <div className="projects grid grid-cols-3   text-[20px] ">
              {animated.map((item, index) => (
                <div className="flex gap-3 flex-col items-center " key={index}>
                  <p className="font-light ">{item.type}</p>
                  <div className="flex items-center">
                    <CountUp
                      className="text-[#FF9D23]"
                      start={0}
                      end={item.count}
                      duration={3}
                    />
                    +
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        delay={0}
        className="order-1 md:order-2 flex flex-col justify-between z-0  gap-5"
        x={100}
        duration={0.5}
      >
        <div className="image bg-[#DBD3D3]  relative overflow-hidden me-auto  md:mx-auto  w-[200px] h-[200px] rounded-full ">
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
