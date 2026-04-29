// DiskTopTimeLine.tsx
'use client';

import { TimelineItem } from '../../interface';
import StaggerContainer from '../Animations/StaggerContainer';

const DiskTopTimeLine = ({ items }: { items: TimelineItem[] }) => {
  const leftItems = items.filter((item) => item.side === 'left');
  const rightItems = items.filter((item) => item.side === 'right');

  return (
    <div className="hidden md:flex w-full font-mono items-start">
      {/* Left Side */}
      <div className="flex flex-col gap-[410px] w-[45%] text-end">
        {leftItems.map((item, i) => (
          <StaggerContainer key={i} className="flex flex-col gap-3 items-end">
            <p className="py-1 px-4 w-fit rounded-full dark:bg-dark-mouve/10 bg-light-bg-cta/10 border-2 border-dark-mouve/20 text-12 font-bold dark:text-dark-mouve text-light-purple">
              {item.year}
            </p>
            <h3 className="font-bold text-18 md:text-20 lg:text-28 dark:text-dark-button-text text-light-bg-cta">
              {item.title}
            </h3>
            <p className="text-12 md:text-14 dark:text-dark-text-secondary text-light-text-secondary">
              {item.description}
            </p>
          </StaggerContainer>
        ))}
      </div>

      {/* Center Line + Icons */}
      <div className="relative flex flex-col items-center w-[50px] mx-auto">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] dark:bg-white/20 bg-light-bg-cta/20 z-0" />
        <div className="relative z-10 flex flex-col gap-64">
          {items.map(({ icon: Icon, iconColor }, i) => (
            <span
              key={i}
              className={`border-4 flex items-center justify-center w-[50px] h-[50px] rounded-full dark:bg-dark-bg-primary bg-light-bg-primary ${iconColor}`}
            >
              <Icon />
            </span>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-64 w-[45%]">
        {rightItems.map((item, i) => (
          <StaggerContainer
            key={i}
            className={`flex flex-col gap-3 items-start ${i === 0 ? 'pt-64' : ''}`}
          >
            <p className="py-1 px-4 w-fit rounded-full dark:bg-dark-mouve/10 bg-light-bg-cta/10 border-2 border-dark-mouve/20 text-12 font-bold dark:text-dark-mouve text-light-purple">
              {item.year}
            </p>
            <h3 className="font-bold text-18 md:text-20 lg:text-28 dark:text-dark-button-text text-light-bg-cta">
              {item.title}
            </h3>
            <p className="text-12 md:text-14 dark:text-dark-text-secondary text-light-text-secondary">
              {item.description}
            </p>
          </StaggerContainer>
        ))}
      </div>
    </div>
  );
};

export default DiskTopTimeLine;
