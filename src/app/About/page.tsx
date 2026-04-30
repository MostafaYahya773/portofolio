import React from 'react';
import AboutHero from '../_Components/AboutHero/AboutHero';
import AboutTechnicalSkills from '../_Components/AboutTechnicalSkills/AboutTechnicalSkills';
import MyTrajectory from '../_Components/MyTrajectory/MyTrajectory';
import BeyondTerminal from '../_Components/BeyondTerminal/BeyondTerminal';

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
