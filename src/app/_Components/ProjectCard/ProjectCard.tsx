import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import type { Project } from '../../interface';

function publicUrl(value: string | null) {
  if (!value) return null;
  try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; }
  catch { return null; }
}
export default function ProjectCard({ project }: { project: Project }) {
  const tools = (project.tools ?? '').split(/\s+-\s+/).map((tool) => tool.trim()).filter(Boolean);
  const liveUrl = publicUrl(project.live_url);
  const githubUrl = publicUrl(project.github_url);
  const year = project.project_date?.slice(0, 4);
  return (
    <article className="group flex h-full flex-col gap-6 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/10 dark:border-white/10 dark:bg-slate-900 dark:hover:shadow-black/30">
      <div className="relative aspect-[2/1] bg-light-bg-secondery dark:bg-dark-bg-section">
        {project.image_url ? <Image src={project.image_url} alt={project.name + ' project preview'} fill sizes="(min-width: 1300px) 630px, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.025]" />
          : <div className="h-full flex items-center justify-center text-light-text-secondary dark:text-dark-button-text">{project.name}</div>}
      </div>
      <div className="px-5 flex flex-col gap-2">
        <p className="text-12 font-mono uppercase tracking-wider text-light-bg-cta dark:text-dark-teal">{project.title.trim()}{year ? ' · ' + year : ''}</p>
        <h3 className="text-24 font-bold tracking-[-0.02em] text-light-text-primary dark:text-dark-button-text">{project.name.trim()}</h3>
      </div>
      {project.description && <div className="px-5"><h4 className="text-14 font-bold mb-2 text-light-text-primary dark:text-dark-button-text">What it does</h4><p className="text-14 leading-7 text-light-text-secondary dark:text-dark-text-primary">{project.description}</p></div>}
      {(project.Future || project.Future_description) && <div className="mx-5 p-4 border-l-4 border-light-purple dark:border-dark-teal rounded-lg bg-light-bg-card/50 dark:bg-dark-bg-primary">
        <h4 className="text-14 font-bold text-light-bg-cta dark:text-dark-teal">My contribution{project.Future?.trim() ? ' · ' + project.Future.trim() : ''}</h4>
        {project.Future_description && <p className="mt-2 text-14 leading-relaxed text-light-text-secondary dark:text-dark-text-primary">{project.Future_description}</p>}
      </div>}
      {tools.length > 0 && <ul aria-label="Technologies used" className="flex flex-wrap gap-2 px-5">{tools.map((tool, index) => <li key={tool + index} className="px-3 py-1 rounded-full bg-light-bg-card dark:bg-dark-bg-section text-12 text-light-text-primary dark:text-dark-button-text">{tool}</li>)}</ul>}
      <div className="mt-auto flex flex-wrap gap-3 px-5 pb-5">
        {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={'View ' + project.name + ' live (opens in a new tab)'} className="inline-flex items-center gap-2 rounded-lg bg-light-bg-cta text-white px-4 py-3 text-14"><FiExternalLink aria-hidden="true" />Live Demo</a>}
        {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={project.name + ' source on GitHub (opens in a new tab)'} className="inline-flex items-center gap-2 rounded-lg bg-light-bg-card dark:bg-dark-bg-section text-light-text-primary dark:text-dark-button-text px-4 py-3 text-14"><FiGithub aria-hidden="true" />GitHub</a>}
      </div>
    </article>
  );
}
