'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

import { Project } from '../../interface';

const ProjectCard = ({ project }: { project: Project }) => {
  const toolsArray = project.tools.split('-').map((tool) => tool.trim());

  return (
    <div className="grid grid-rows-[300px_auto_auto_auto_auto_auto] drop-shadow-md border border-black/10 gap-7 h-full rounded-2xl bg-light-tag-bg/90 dark:bg-dark-bg-card/40 p-4">
      {/* الصف الأول — الصورة */}
      <div className="w-full rounded-xl overflow-hidden">
        <Image
          src={project.image_url}
          alt={project.name}
          width={600}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* الصف الثاني — title + date و name */}
      <div className="flex flex-col items-start gap-1">
        <span className="text-12 md:text-14 font-mono tracking-[2px] uppercase text-light-bg-cta dark:text-dark-teal">
          {project.title} - {project.project_date.slice(0, 4)}
        </span>
        <span className="text-20 md:text-24 lg:text-28 font-bold dark:text-dark-button-text text-light-text-secondary">
          {project.name}
        </span>
      </div>

      {/* الصف الثالث — الوصف */}
      <p className="text-12 md:text-14 dark:text-dark-text-secondary text-light-text-secondary">
        {project.description}
      </p>

      {/* الصف الرابع — Future description */}
      <div className="text-12 md:text-14 flex flex-col gap-2 dark:text-dark-text-secondary bg-light-bg-card/50 rounded-md text-light-text-secondary dark:bg-dark-bg-primary border-l-4 p-2 dark:border-dark-teal border-light-purple pl-3">
        <span className="text-12 md:text-14 text-light-bg-cta dark:text-dark-teal uppercase tracking-[2px]">
          Future Description
        </span>
        <p>{project.Future_description}</p>
      </div>

      {/* الصف الخامس — Tools */}
      <div className="flex flex-wrap gap-2">
        {toolsArray.map((tool, index) => (
          <span
            key={index}
            className="text-12 md:text-14 px-3 py-1 rounded-full dark:bg-dark-bg-card/40 text-light-text-primary dark:text-dark-button-text bg-light-bg-card"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* الصف السادس — الزرارين */}
      <div className="flex gap-3 *:md:w-1/2">
        <Link
          href={project.live_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-12 md:text-14 px-4 py-2 rounded-lg bg-light-bg-card dark:bg-dark-bg-card/40 dark:text-dark-button-text hover:opacity-80 transition-opacity"
        >
          <FiExternalLink className="text-base" />
          Live Demo
        </Link>
        <Link
          href={project.github_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-12 md:text-14 px-4 py-2 rounded-lg bg-light-bg-card dark:bg-dark-bg-card/40 dark:text-dark-button-text hover:opacity-80 transition-opacity"
        >
          <FiGithub className="text-base" />
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
