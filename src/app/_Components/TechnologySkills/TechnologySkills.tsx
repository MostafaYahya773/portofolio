'use client';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiReactquery,
  SiSupabase,
} from 'react-icons/si';
import { FaCodeBranch } from 'react-icons/fa';
import { Skill } from '../../interface';
import SkillCard from '../SkillsCard/SkillsCard';
import StaggerContainer from '../Animations/StaggerContainer';

const technologySkills: Skill[] = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss },
  { name: 'Tanstack Query', icon: SiReactquery },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'Context API', icon: FaCodeBranch },
];

const TechnologySkills = () => {
  return (
    <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
      {technologySkills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </StaggerContainer>
  );
};

export default TechnologySkills;
