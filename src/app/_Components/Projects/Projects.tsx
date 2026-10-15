'use client';
import { Project } from '../../interface';
import Link from 'next/link';
import ProjectCard from '../ProjectCard/ProjectCard';
import StaggerContainer from '../Animations/StaggerContainer';
import EmptyProjects from './EmptyProjects';
const Projects = ({ allProjects }: { allProjects: Project[] }) => {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-12">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-mono text-12 font-semibold tracking-[0.22em] text-indigo-700 dark:text-dark-teal">02 · SELECTED WORK</p>
          <h2 className="mt-4 text-35 font-bold tracking-[-0.03em] text-slate-950 dark:text-white md:text-[3.25rem]">Projects built for real use.</h2>
          <p className="mt-4 max-w-[680px] text-16 leading-8 text-slate-600 dark:text-slate-300">
            A selection of travel, commerce, and learning products—from interface design through frontend implementation and backend integration.
          </p>
        </div>
        <Link
          href="/Projects"
          className="w-fit rounded-full border border-slate-300 px-5 py-3 text-14 font-bold text-slate-800 transition hover:border-indigo-500 hover:text-indigo-700 dark:border-white/15 dark:text-white dark:hover:border-teal-300 dark:hover:text-teal-300"
        >
          View all projects
        </Link>
      </div>
      {allProjects.length === 0 ? <EmptyProjects /> : <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </StaggerContainer>}
      </div>
    </section>
  );
};

export default Projects;
