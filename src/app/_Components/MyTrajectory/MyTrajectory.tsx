import { HiLightningBolt } from 'react-icons/hi';
import { BsRocket } from 'react-icons/bs';
import { MdStar } from 'react-icons/md';
import type { TimelineItem } from '../../interface';

const items: TimelineItem[] = [
  { year: '2022 — The Start', side: 'left', title: 'Self-Taught Foundations', description: 'Started with HTML, CSS, and JavaScript, learning web fundamentals by building small projects.', icon: HiLightningBolt },
  { year: '2023 — Growing', side: 'right', title: 'React & Modern Stack', description: 'Studied the React ecosystem, TypeScript, and modern tooling through Route Academy, then applied them in web projects.', icon: MdStar },
  { year: '2024 — Now', side: 'left', title: 'Fullstack Exploration', description: 'Expanded into Next.js and Supabase to build complete projects, from the interface to data storage and deployment.', icon: BsRocket },
];
export default function MyTrajectory() {
  return <section className="py-16 px-3 max-w-[1300px] mx-auto">
    <div className="text-center mb-12">
      <p className="font-mono text-12 tracking-widest text-light-bg-cta dark:text-dark-teal">THE TRAJECTORY</p>
      <h2 className="text-28 md:text-35 font-bold text-light-bg-cta dark:text-dark-button-text mt-3">My development journey</h2>
    </div>
    <ol className="flex flex-col gap-8">
      {items.map(({ year, title, description, side, icon: Icon }) => <li key={year} className="grid grid-cols-[44px_1fr] md:grid-cols-[1fr_50px_1fr] gap-5 items-start">
        <span className="col-start-1 md:col-start-2 row-start-1 flex h-11 w-11 items-center justify-center rounded-full border-2 border-light-bg-cta text-light-bg-cta dark:border-dark-teal dark:text-dark-teal"><Icon aria-hidden="true" /></span>
        <div className={'col-start-2 row-start-1 p-5 rounded-xl bg-light-tag-bg/60 dark:bg-dark-bg-card/40 ' + (side === 'left' ? 'md:col-start-1 md:text-right' : 'md:col-start-3')}>
          <p className="text-14 text-light-bg-cta dark:text-dark-teal">{year}</p>
          <h3 className="text-20 font-bold text-light-text-primary dark:text-dark-button-text my-2">{title}</h3>
          <p className="text-14 leading-relaxed text-light-text-secondary dark:text-dark-text-primary">{description}</p>
        </div>
      </li>)}
    </ol>
  </section>;
}
