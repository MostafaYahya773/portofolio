'use client';
import React from 'react';
import { Skill } from '../../interface';
import StaggerContainer from '../Animations/StaggerContainer';

const SkillCard = React.memo(({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl dark:bg-dark-bg-card/40 bg-light-tag-bg/90 duration-300 hover:scale-105 hover:shadow-lg">
      <Icon className="text-35 text-light-text-secondary dark:text-dark-mouve" />
      <span className="text-sm font-medium text-light-text-primary dark:text-dark-button-text">
        {skill.name}
      </span>
    </div>
  );
});

export default SkillCard;
