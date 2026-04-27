'use client';
import React from 'react';
import { IconType } from 'react-icons';
import {
  FaUsers,
  FaComments,
  FaLightbulb,
  FaClock,
  FaPuzzlePiece,
  FaHandshake,
  FaChartLine,
} from 'react-icons/fa';
import { Skill } from '../../interface';
import SkillCard from '../SkillsCard/SkillsCard';
import StaggerContainer from '../Animations/StaggerContainer';

const personalSkills: Skill[] = [
  { name: 'Teamwork', icon: FaUsers },
  { name: 'Communication', icon: FaComments },
  { name: 'Problem Solving', icon: FaPuzzlePiece },
  { name: 'Creativity', icon: FaLightbulb },
  { name: 'Time Management', icon: FaClock },
  { name: 'Collaboration', icon: FaHandshake },
  { name: 'Fast Learner', icon: FaChartLine },
];

const PersonalSkills = () => {
  return (
    <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
      {personalSkills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </StaggerContainer>
  );
};

export default PersonalSkills;
