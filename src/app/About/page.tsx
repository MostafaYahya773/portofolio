import React from 'react';
import AboutHero from '../_Components/AboutHero/AboutHero';
import AboutTechnicalSkills from '../_Components/AboutTechnicalSkills/AboutTechnicalSkills';
import MyTrajectory from '../_Components/MyTrajectory/MyTrajectory';
import BeyondTerminal from '../_Components/BeyondTerminal/BeyondTerminal';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About', description: 'Meet Mostafa Yahya, a frontend developer in Cairo. Discover my skills, learning journey, and approach to building web experiences.' };

const About = () => {
  return (
    <div className="">
      <AboutHero />
      <AboutTechnicalSkills />
      <MyTrajectory />
      <BeyondTerminal />
    </div>
  );
};

export default About;
