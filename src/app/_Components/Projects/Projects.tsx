'use client';
import { Project } from '../../interface';
import Link from 'next/link';
import ProjectCard from '../ProjectCard/ProjectCard';
import StaggerContainer from '../Animations/StaggerContainer';
const Projects = ({ allProjects }: { allProjects: Project[] }) => {
  return (
    <section className="md:py-16 py-0 max-w-[1300px] mx-auto px-3 flex flex-col gap-16">
      <div className="header grid md:grid-cols-2 gap-5 items-start">
        <div className="flex flex-col gap-2">
          <h3 className="text-28 md:text-35 lg:text-40 font-bold dark:text-white text-light-bg-cta">
            Recent{' '}
            <span className="darkTextStyle text-light-bg-cta">Works</span>
          </h3>
          <p className="text-12 md:text-14 dark:text-dark-text-secondary text-light-text-secondary">
            A collection of featured projects where I've combined technical
            expertise with creative problem-solving to deliver impactful digital
            experiences.
          </p>
        </div>
        <Link
          href="/projects"
          className="dark:bg-dark-bg-card/40 dark:text-dark-button-text md:ms-auto bg-light-tag-bg/90 px-5 py-2 hover:scale-105 hover:transition-all hover:duration-300 font-mono rounded-full"
        >
          View All Works
        </Link>
      </div>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2  gap-5">
        {allProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </StaggerContainer>
    </section>
  );
};

export default Projects;
