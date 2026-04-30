'use client';

import React from 'react';
import { IconType } from 'react-icons';

export interface Interest {
  icon: IconType;
  title: string;
  description: string;
  iconBg: string;
}

const InterestCard = ({ interest }: { interest: Interest }) => {
  const Icon = interest.icon;
  return (
    <div className="flex flex-col gap-4 p-6 rounded-2xl bg-light-tag-bg/90 dark:bg-dark-bg-card/40 border border-light-border-card/30 dark:border-dark-border-card/20">
      <div className={`w-fit p-3 rounded-xl ${interest.iconBg}`}>
        <Icon className="text-20 md:text-24" />
      </div>
      <h4 className="text-16 md:text-18 font-bold text-light-bg-cta dark:text-dark-button-text">
        {interest.title}
      </h4>
      <p className="text-12 md:text-14 text-light-text-secondary dark:text-dark-text-secondary">
        {interest.description}
      </p>
    </div>
  );
};

export default InterestCard;
