'use client';
import React, { useState } from 'react';
import TechnologySkills from '../TechnologySkills/TechnologySkills';
import ToolsSkills from '../ToolsSkills/ToolsSkills';
import PersonalSkills from '../PersonalSkills/PersonalSkills';

interface SkillTypes {
  name: string;
  value: string;
}
const MySkills = () => {
  const skillTypes: SkillTypes[] = [
    { name: 'Technology', value: 'Technology' },
    {
      name: 'Tools',
      value: 'Tools',
    },
    { name: 'Personal', value: 'Personal' },
  ];
  const [isSelected, SetIsSelected] = useState<string>('Technology');
  return (
    <section className="dark:bg-dark-bg-section/30 bg-light-bg-secondery md:py-16 py-5">
      <div className="max-w-[1300px] mx-auto px-3 flex flex-col gap-16">
        <div className="header grid md:grid-cols-2 gap-5 items-start ">
          <div className="flex flex-col gap-2">
            <h3 className="text-28 md:text-35 lg:text-40 font-bold dark:text-white text-light-bg-cta">
              The{' '}
              <span className="darkTextStyle text-light-bg-cta">Toolkit</span>
            </h3>
            <p className="text-12 md:text-14 dark:text-dark-text-secondary text-light-text-secondary">
              Solving digital challenges requires a versatile set of
              instruments. Here is the curated selection of technologies and
              tools I use to bring ideas to life.
            </p>
          </div>
          <div className="skills flex gap-2 dark:bg-dark-bg-card dark:text-dark-button-text bg-light-tag-bg/90 md:w-fit w-full  md:ms-auto p-1 justify-between  rounded-full">
            {skillTypes.map((skill) => (
              <button
                onClick={() => SetIsSelected(skill.value)}
                key={skill.name}
                className={`${isSelected === skill.value ? 'dark:bg-dark-mouve text-dark-blue bg-light-bg-secondery rounded-full' : ''}   font-mono font-medium py-2 px-4 text-14`}
              >
                {skill.value}
              </button>
            ))}
          </div>
        </div>
        <div className={`${isSelected === 'Technology' ? 'block' : 'hidden'} `}>
          <TechnologySkills />
        </div>
        <div className={`${isSelected === 'Tools' ? 'block' : 'hidden'} `}>
          <ToolsSkills />
        </div>
        <div className={`${isSelected === 'Personal' ? 'block' : 'hidden'} `}>
          <PersonalSkills />
        </div>
      </div>
    </section>
  );
};

export default MySkills;
