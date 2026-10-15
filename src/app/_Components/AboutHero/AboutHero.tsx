import Image from 'next/image';
import React from 'react';

const AboutHero = () => {
  return (
    <section className="flex flex-col md:flex-row *:md:w-1/2 gap-5 mt-24 max-w-[1300px] mx-auto items-center px-3 ">
      <div className="info flex flex-col gap-5 order-2 md:order-1">
        <h1 className="text-24 md:text-28 lg:text-40 font-bold text-light-bg-cta darkTextStyle">
          React interfaces. Fullstack thinking.
        </h1>
        <p className="text-12 md:text-14 text-light-text-muted dark:text-dark-text-secondary font-mono">
          I'm a frontend developer based in Cairo, working with React,
          Next.js, and TypeScript. My projects include travel websites,
          an e-commerce app, and an e-learning platform.{' '}
          <span className="dark:text-dark-teal text-light-bg-cta">
            I also use Supabase to connect interfaces with the data behind them.
          </span>
        </p>
        <div className="dark:bg-dark-bg-section bg-light-tag-bg/90 drop-shadow-md rounded-lg text-light-text-secondary font-mono dark:text-dark-button-text">
          <p className="text-12 md:text-14 border-l-4 border-light-bg-cta dark:border-l-dark-teal p-5 rounded-lg italic font-light">
            I focus on clear interfaces, responsive layouts, and reliable
            interactions — from browsing a product to sending a message.
          </p>
        </div>
      </div>
      <div className="img order-1 md:order-2 overflow-hidden lg:ms-auto w-full h-[310px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] rounded-lg dark:drop-shadow-[0_4px_80px_rgba(255,255,255,0.1)] drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
        <Image
          src={'/my_image.jpeg'}
          alt="Mostafa Yahya"
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 340px, 100vw"
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </section>
  );
};

export default AboutHero;
