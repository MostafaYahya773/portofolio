'use client';
import { Skill } from '../../interface';
import {
  SiFigma,
  SiNpm,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiVsco,
} from 'react-icons/si';
import SkillCard from '../SkillsCard/SkillsCard';
import StaggerContainer from '../Animations/StaggerContainer';

const toolsSkills: Skill[] = [
  { name: 'Figma', icon: SiFigma },
  { name: 'NPM', icon: SiNpm },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Postman', icon: SiPostman },
  { name: 'Vercel', icon: SiVercel },
  { name: 'VS Code', icon: SiVsco },
];

const ToolsSkills = () => {
  return (
    <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
      {toolsSkills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </StaggerContainer>
  );
};

export default ToolsSkills;
