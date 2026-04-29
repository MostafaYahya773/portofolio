// MobileTimeLine.tsx
'use client';

import React from 'react';
import { TimelineItem } from '../../interface';

const MobileTimeLine = ({ items }: { items: TimelineItem[] }) => {
  return (
    <div className="flex md:hidden flex-col font-mono">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="flex gap-4 items-start">
            {/* Icon + Line */}
            <div className="flex flex-col items-center">
              <span
                className={`border-4 flex-shrink-0 flex items-center justify-center w-[42px] h-[42px] rounded-full dark:bg-dark-bg-primary bg-light-bg-primary ${item.iconColor}`}
              >
                <Icon />
              </span>
              {i < items.length - 1 && (
                <div className="w-[1px] flex-1 min-h-[60px] dark:bg-white/20 bg-light-bg-cta/20 my-2" />
              )}
            </div>

            {/* Content */}
            {/* Content */}
            <div className="flex flex-col gap-2 pb-10">
              <p className="py-1 px-3 w-fit rounded-full dark:bg-dark-mouve/10 bg-light-bg-cta/10 border dark:border-dark-mouve/20 border-light-bg-cta/20 text-12 font-bold dark:text-dark-mouve text-light-purple">
                {item.year}
              </p>
              <h3 className="font-bold text-16 md:text-18 dark:text-dark-button-text text-light-bg-cta">
                {item.title}
              </h3>
              <p className="text-12 dark:text-dark-text-secondary text-light-text-secondary">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileTimeLine;
