'use client';
import React, { useState } from 'react';
import Animation from '../animation/page';

export default function Skills() {
  // crate a skills
  const [skills, setSkills] = useState([
    {
      name: 'Html',
      icon: '/html-5.png',
    },
    {
      name: 'CSS',
      icon: '/css3.png',
    },
    {
      name: 'Sass',
      icon: '/sass.png',
    },
    {
      name: 'Bootstrap',
      icon: '/bootstrap.png',
    },
    {
      name: 'Tailwind',
      icon: '/tailwindcss.png',
    },
    {
      name: 'Javascript',
      icon: '/js.png',
    },

    {
      name: 'React',
      icon: '/react.png',
    },
    {
      name: 'Next Js',
      icon: '/next-js.png',
    },
  ]);
  // create a Tools
  const [tools, setTools] = useState([
    {
      name: 'VS Code',
      icon: '/vs-code.png',
    },
    {
      name: 'Git',
      icon: '/git.png',
    },
    {
      name: 'Github',
      icon: '/github.png',
    },
    {
      name: 'Figma',
      icon: '/figma.png',
    },
    {
      name: 'Npm',
      icon: '/npm.png',
    },
  ]);
  return (
    <div className="flex flex-col gap-3 my-5 md:my-10 overflow-hidden">
      <div className="title w-full mb-2">
        <h1 className="text-2xl border-b pb-4 border-[#dbd3d333] w-full font-extralight text-[#dbd3d38b]">
          Technical
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="title text-[20px] pb-4 w-full font-extralight text-[#dbd3d38b]">
          Frontend
        </h1>
        <Animation delay={0} y={40} duration={0.7}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <div
                className="flex flex-col  items-center gap-2 bg-[#9ec8b920] opacity-85 p-4 rounded-md hover:opacity-100"
                key={index}
              >
                <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                <h1 className="text-[18px] text-shadow-lg text-[#ffffff]">
                  {skill.name}
                </h1>
              </div>
            ))}
          </div>
        </Animation>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="title text-[20px] pb-4 w-full font-extralight text-[#dbd3d38b]">
          Tools
        </h1>
        <Animation delay={0} y={40} duration={0.7}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {tools.map((skill, index) => (
              <div
                className="flex flex-col  items-center gap-2 bg-[#9ec8b920] opacity-85 p-4 rounded-md hover:opacity-100"
                key={index}
              >
                <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                <h1 className="text-[18px] text-shadow-lg text-[#ffffff]">
                  {skill.name}
                </h1>
              </div>
            ))}
          </div>
        </Animation>
      </div>
    </div>
  );
}
