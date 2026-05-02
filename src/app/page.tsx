import React from 'react';
import HomeHero from './_Components/HomeHero/HomeHero';
import MySkills from './_Components/MySkills/MySkills';
import getLastProjects from '../../lib/SSRFunctions/getLastProjects';
import Projects from './_Components/Projects/Projects';
import Contact from './_Components/Contact/Contact';
const Home = async () => {
  const data = await getLastProjects();

  return (
    <div className="flex flex-col gap-7 mb-10">
      <HomeHero />
      <MySkills />
      <Projects allProjects={data} />
      <Contact />
    </div>
  );
};

export default Home;
