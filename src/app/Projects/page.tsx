// app/projects/page.tsx
import React from 'react';
import getAllProjects from '../../../lib/SSRFunctions/getAllProjects'; // غير المسار حسب عندك
import ProjectCard from '../_Components/ProjectCard/ProjectCard';
import StaggerContainer from '../_Components/Animations/StaggerContainer';

const ProjectsPage = async () => {
  const projects = await getAllProjects();

  return (
    <section className="py-16 mt-10 bg-light-bg-primary dark:bg-dark-bg-primary min-h-screen">
      <div className="max-w-[1300px] mx-auto px-3 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center text-center">
          <span className="text-12 font-mono tracking-[2px] uppercase text-light-bg-cta dark:text-dark-teal">
            Portfolio
          </span>
          <h1 className="text-28 md:text-35 lg:text-40 font-bold text-light-bg-cta dark:text-dark-button-text">
            Selected <span className="darkTextStyle">Works</span>
          </h1>
          <p className="text-12 md:text-14 text-light-text-secondary dark:text-dark-text-secondary max-w-[500px]">
            A curation of engineering challenges transformed into
            high-performance digital experiences. Focused on scalability,
            aesthetic precision, and user-centric storytelling.
          </p>
        </div>

        {/* Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProjectsPage;
