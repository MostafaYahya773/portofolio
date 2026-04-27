import React from 'react';
import HomeHero from './_Components/HomeHero/HomeHero';
import MySkills from './_Components/MySkills/MySkills';
import getLastProjects from '../../lib/SSRFunctions/getLastProjects';
import Projects from './_Components/Projects/Projects';
const Home = async () => {
  const data = await getLastProjects();

  return (
    <div className="flex flex-col gap-7 mt-40 md:mt-0">
      <HomeHero />
      <MySkills />
      <Projects allProjects={data} />
    </div>
  );
};

export default Home;
