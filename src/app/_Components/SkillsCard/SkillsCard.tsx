'use client';
import React from 'react';
import { Skill } from '../../interface';

const SkillCard = React.memo(({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;

  return (
    <div className="flex flex-col items-center text-center justify-center gap-3 p-4 md:p-6 rounded-2xl dark:bg-dark-bg-card/40 bg-light-tag-bg/90 duration-300 hover:scale-105 hover:shadow-lg">
      <Icon className="text-24 md:text-28 lg:text-35 text-light-text-secondary dark:text-dark-mouve" />
      <span className="text-12 md:text-14 font-medium text-light-text-primary dark:text-dark-button-text">
        {skill.name}
      </span>
    </div>
  );
});

export default SkillCard;
