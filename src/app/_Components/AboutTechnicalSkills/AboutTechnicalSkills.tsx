'use client';

import React from 'react';
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiFigma,
  SiNpm,
  SiPostman,
  SiVsco,
  SiClaude,
  SiVercel,
} from 'react-icons/si';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import { IconType } from 'react-icons';
import StaggerContainer from '../Animations/StaggerContainer';

// ============================================================
// Interfaces
// ============================================================
interface Tag {
  label: string;
}

interface Tool {
  icon: IconType;
  label: string;
}

// ============================================================
// Data
// ============================================================
const fullstackTags: Tag[] = [
  { label: 'Next.js' },
  { label: 'Supabase' },
  { label: 'Formik' },
  { label: 'Yup' },
  { label: 'Framer Motion' },
  { label: 'Axios' },
  { label: 'TanStack Query' },
  { label: 'Context API' },
];

const workflowTools: Tool[] = [
  { icon: SiGit, label: 'Git' },
  { icon: SiFigma, label: 'Figma' },
  { icon: SiNpm, label: 'npm' },
  { icon: SiPostman, label: 'Postman' },
  { icon: SiVsco, label: 'VS Code' },
  { icon: SiClaude, label: 'Claude' },
  { icon: SiVercel, label: 'Vercel' },
];

// ============================================================
// Main Component
// ============================================================
const AboutTechnicalSkills = () => {
  return (
    <section className="py-16 bg-light-bg-secondery dark:bg-dark-bg-primary">
      <StaggerContainer className="max-w-[1300px] mx-auto px-3 flex flex-col gap-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-5 items-start">
          <div className="flex flex-col gap-2">
            <span className="text-12 font-mono tracking-[2px] uppercase text-light-bg-cta dark:text-dark-teal">
              Core Expertise
            </span>
            <h3 className="text-28 md:text-35 font-bold darkTextStyle text-light-bg-cta">
              The Technical Arsenal
            </h3>
          </div>
          <p className="text-12 md:text-14 text-light-text-secondary dark:text-dark-text-secondary md:text-end self-end">
            Specializing in modern stacks that prioritize performance,
            type-safety, and visual excellence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-auto">
          {/* Card 1 — React Ecosystem */}
          <div className="flex flex-col justify-between gap-6 p-6 rounded-2xl bg-light-tag-bg/90 dark:bg-dark-bg-card/40 border border-light-border-card/30 dark:border-dark-border-card/20">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <SiReact className="text-28 text-light-bg-cta dark:text-dark-mouve" />
                <span className="text-12 font-mono text-light-text-muted dark:text-dark-text-secondary">
                  01
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-18 md:text-20 font-bold text-light-bg-cta dark:text-dark-button-text">
                  React Ecosystem
                </h4>
                <p className="text-12 md:text-14 text-light-text-secondary dark:text-dark-text-secondary">
                  Mastering state management, hooks, and modern rendering
                  patterns for scalable applications.
                </p>
              </div>
            </div>
            <div className="w-full h-1 rounded-full bg-light-border-card/30 dark:bg-dark-border-card/30 overflow-hidden">
              <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-light-bg-cta to-light-teal dark:from-dark-mouve dark:to-dark-teal" />
            </div>
          </div>

          {/* Card 2 & 3 — Tailwind + TypeScript */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-light-tag-bg/90 dark:bg-dark-bg-card/40 border border-light-border-card/30 dark:border-dark-border-card/20">
              <SiTailwindcss className="text-24 text-light-bg-cta dark:text-dark-mouve" />
              <div className="flex flex-col gap-2">
                <h4 className="text-16 md:text-18 font-bold text-light-bg-cta dark:text-dark-button-text">
                  Tailwind CSS
                </h4>
                <p className="text-12 text-light-text-secondary dark:text-dark-text-secondary">
                  Crafting bespoke design systems without the bloat.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="text-12 px-3 py-1 rounded-full bg-light-bg-cta/10 dark:bg-dark-mouve/10 text-light-bg-cta dark:text-dark-mouve font-mono">
                  UI
                </span>
                <span className="text-12 px-3 py-1 rounded-full bg-light-teal/10 dark:bg-dark-teal/10 text-light-teal dark:text-dark-teal font-mono">
                  UX
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-light-tag-bg/90 dark:bg-dark-bg-card/40 border border-light-border-card/30 dark:border-dark-border-card/20">
              <SiTypescript className="text-24 text-light-bg-cta dark:text-dark-mouve" />
              <div className="flex flex-col gap-2">
                <h4 className="text-16 md:text-18 font-bold text-light-bg-cta dark:text-dark-button-text">
                  TypeScript
                </h4>
                <p className="text-12 text-light-text-secondary dark:text-dark-text-secondary">
                  Type-safe development for enterprise stability.
                </p>
              </div>
              <span className="w-fit text-12 px-3 py-1 rounded-full bg-light-bg-cta/10 dark:bg-dark-mouve/10 text-light-bg-cta dark:text-dark-mouve font-mono">
                Strict Mode
              </span>
            </div>
          </div>

          {/* Card 4 — Fullstack Versatility */}
          <div className="flex flex-col gap-4 p-6 rounded-2xl bg-light-tag-bg/90 dark:bg-dark-bg-card/40 border border-light-border-card/30 dark:border-dark-border-card/20">
            <div className="flex flex-col gap-2">
              <h4 className="text-16 md:text-18 font-bold text-light-bg-cta dark:text-dark-button-text">
                Fullstack Versatility
              </h4>
              <p className="text-12 text-light-text-secondary dark:text-dark-text-secondary">
                Bridging the gap between beautiful frontends and robust backends
                using Next.js, Supabase
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {fullstackTags.map((tag) => (
                <span
                  key={tag.label}
                  className="text-12 px-3 py-1 rounded-full bg-light-bg-card dark:bg-dark-bg-section text-light-text-secondary dark:text-dark-button-text font-mono"
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Card 5 — Workflow & Tools */}
          <div className="flex flex-col gap-4 p-6 rounded-2xl bg-light-tag-bg/90 dark:bg-dark-bg-card/40 border border-light-border-card/30 dark:border-dark-border-card/20">
            <div className="flex items-center justify-between">
              <h4 className="text-16 md:text-18 font-bold text-light-bg-cta dark:text-dark-button-text">
                Workflow & Tools
              </h4>
              <HiWrenchScrewdriver className="text-20 text-light-text-muted dark:text-dark-text-secondary" />
            </div>
            <div className="flex gap-3 flex-wrap">
              {workflowTools.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-xl bg-light-bg-card dark:bg-dark-bg-section text-light-text-secondary dark:text-dark-button-text"
                >
                  <Icon className="text-18" />
                  <span className="text-12 font-mono">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </StaggerContainer>
    </section>
  );
};

export default AboutTechnicalSkills;
