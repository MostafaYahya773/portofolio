'use client';
import { HiLightningBolt } from 'react-icons/hi';
import { BsRocket } from 'react-icons/bs';
import { MdStar } from 'react-icons/md';
import DiskTopTimeLine from '../DiskTopTimeLine/DiskTopTimeLine';
import { TimelineItem } from '../../interface';
import MobileTimeLine from '../MobileTimeLine/MobileTimeLine';
import StaggerContainer from '../Animations/StaggerContainer';

const items: TimelineItem[] = [
  {
    year: '2022 - The Start',
    side: 'left',
    title: 'Self-Taught Foundations',
    description:
      'Dived deep into the world of web standards. Spent hundreds of hours mastering HTML, CSS, and vanilla JavaScript while building small utility apps from scratch.',
    icon: HiLightningBolt,
    iconColor:
      'dark:border-dark-mouve dark:drop-shadow-[0_5px_20px_rgba(192,193,255,0.5)] dark:text-dark-mouve border-light-bg-cta text-light-bg-cta drop-shadow-[0_5px_20px_rgba(55,48,200,0.3)]',
  },
  {
    year: '2024 - Now',
    side: 'left',
    title: 'Fullstack Exploration',
    description:
      'Ventured into backend territory with Next.js and Supabase. Started building complete products from database design to deployment.',
    icon: BsRocket,
    iconColor:
      'dark:border-dark-teal dark:drop-shadow-[0_10px_20px_rgba(68,226,205,0.6)] dark:text-dark-teal border-light-bg-cta text-light-bg-cta drop-shadow-[0_5px_20px_rgba(55,48,200,0.3)]',
  },
  {
    year: '2023 - Growing',
    title: 'React & Modern Stack',
    side: 'right',
    description:
      'internship with Route Academy focus to React ecosystem, TypeScript, and modern tooling. Built real-world projects and started contributing to open source.',
    icon: MdStar,
    iconColor:
      'dark:text-[#FFB783] dark:border-[#FFB783] dark:drop-shadow-[0_10px_20px_rgba(255,183,131,0.6)] border-light-bg-cta text-light-bg-cta drop-shadow-[0_5px_20px_rgba(55,48,200,0.3)]',
  },
];

const MyTrajectory = () => {
  return (
    <div className="dark:bg-dark-bg-primary  overflow-hidden relative">
      {/* Glow Background */}
      <div className="w-full h-full absolute inset-0 backdrop-blur-xl z-20 pointer-events-none">
        <span className="absolute w-[400px] h-[400px] rounded-full bg-teal-400/10 top-0 right-0 blur-3xl" />
        <span className="absolute w-[400px] h-[400px] rounded-full bg-purple-400/10 bottom-0 left-0 blur-3xl" />
      </div>

      <StaggerContainer className="flex flex-col md:gap-40 gap-10  px-3 max-w-[1300px] mx-auto relative z-30">
        {/* Title */}
        <div className="flex flex-col gap-2 items-center text-center">
          <h2 className="font-mono text-12 tracking-[2px] dark:text-dark-mouve text-light-bg-cta">
            THE TRAJECTORY
          </h2>
          <h3 className="text-28 md:text-35 lg:text-40 font-bold dark:text-white text-light-bg-cta">
            Evolution of an Engineer
          </h3>
        </div>

        <DiskTopTimeLine items={items} />
        <MobileTimeLine items={items} />
      </StaggerContainer>
    </div>
  );
};

export default MyTrajectory;
