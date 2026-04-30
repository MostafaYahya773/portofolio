'use client';

import React from 'react';
import { MdSportsMartialArts } from 'react-icons/md';
import { GiMountainRoad } from 'react-icons/gi';
import { TbBrain } from 'react-icons/tb';
import { BsRocket } from 'react-icons/bs';
import StaggerContainer from '../Animations/StaggerContainer';
import InterestCard, { Interest } from '../InterestCard/InterestCard';

const interests: Interest[] = [
  {
    icon: MdSportsMartialArts,
    title: 'Tactical Gaming',
    description:
      'Strategic thinking and quick decision-making under pressure. I love competitive shooters and complex RPGs.',
    iconBg:
      'bg-light-bg-cta/10 dark:bg-dark-mouve/10 text-light-bg-cta dark:text-dark-mouve',
  },
  {
    icon: GiMountainRoad,
    title: 'Trail Seeking',
    description:
      'Nothing clears the mind like a long hike. Finding parallels between navigating rough terrain and legacy codebases.',
    iconBg:
      'bg-light-teal/10 dark:bg-dark-teal/10 text-light-teal dark:text-dark-teal',
  },
  {
    icon: TbBrain,
    title: 'UX Research',
    description:
      'Obsessed with why users click where they click. Reading about behavioral economics and cognitive load.',
    iconBg: 'bg-[#FFB783]/10 text-[#FFB783]',
  },
  {
    icon: BsRocket,
    title: 'Future Focus',
    description:
      'My goal is to lead engineering teams that value accessibility as much as they value speed and design.',
    iconBg:
      'bg-light-bg-cta/10 dark:bg-dark-mouve/10 text-light-bg-cta dark:text-dark-mouve',
  },
];

const BeyondTerminal = () => {
  return (
    <section className="py-16 bg-light-bg-secondery dark:bg-dark-bg-section/30">
      <div className="max-w-[1300px] mx-auto px-3 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h3 className="text-28 md:text-35 font-bold text-light-bg-cta dark:text-dark-button-text">
            Beyond the <span className="darkTextStyle">Terminal</span>
          </h3>
          <p className="text-12 md:text-14 text-light-text-secondary dark:text-dark-text-secondary max-w-[500px]">
            Diversity in hobbies fuels creativity in code. When I'm not
            debugging, I'm exploring the intersections of human psychology and
            digital interfaces.
          </p>
        </div>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-2 gap-4 items-start">
          {interests.map((interest) => (
            <InterestCard key={interest.title} interest={interest} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default BeyondTerminal;
