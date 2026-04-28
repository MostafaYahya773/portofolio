import Image from 'next/image';
import React from 'react';

const HomeHero = () => {
  return (
    <section className="flex flex-col md:flex-row *:md:w-1/2 gap-5 lg:min-h-screen max-w-[1300px] mx-auto items-center px-3">
      <div className="info flex flex-col gap-5 order-2 md:order-1">
        <p className="font-mono tracking-[2px] text-12 md:text-14 text-light-bg-cta dark:text-dark-teal font-semibold">
          FRONTEND DEVELOPER
        </p>
        <h2 className="text-24 md:text-28 lg:text-35 font-bold text-light-bg-cta darkTextStyle">
          Designing seamless UI experiences powered by modern{' '}
          <span className="text-light-teal">front-end</span> technologies
        </h2>
        <p className="text-16 md:text-20 lg:text-24 text-light-text-secondary dark:text-dark-text-primary">
          I build fast, scalable, and user-focused web experiences.
        </p>
        <p className="text-12 md:text-14 text-light-text-muted dark:text-dark-text-secondary">
          Transforming complex problems into elegant digital solutions through
          precise engineering and creative design.
        </p>
        <div className="flex gap-5 items-start *:px-4 *:py-2 *:rounded-lg *:font-bold *:text-14 md:*:text-16">
          <button className="bg-gradient-to-r dark:from-dark-mouve dark:to-dark-teal dark:text-dark-blue from-[#2A14B4] to-[#4338CA] text-white">
            View My Work
          </button>
          <button className="bg-light-bg-card drop-shadow-md rounded-lg text-light-bg-cta dark:bg-dark-bg-card dark:text-white">
            Contact Me
          </button>
        </div>
      </div>
      <div className="img order-1 md:order-2 overflow-hidden lg:ms-auto w-full h-[310px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] rounded-lg dark:drop-shadow-[0_4px_80px_rgba(255,255,255,0.1)] drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
        <Image
          src={'/my_image.jpeg'}
          alt="personal-img"
          width={1000}
          height={1000}
          className="bg-cover"
        />
      </div>
    </section>
  );
};

export default HomeHero;
