import Image from 'next/image';
import React from 'react';

const AboutHero = () => {
  return (
    <section className="flex flex-col md:flex-row *:md:w-1/2 gap-5 mt-24 max-w-[1300px] mx-auto items-center px-3 ">
      <div className="info flex flex-col gap-5 order-2 md:order-1">
        <h2 className="text-24 md:text-28 lg:text-40 font-bold text-light-bg-cta darkTextStyle">
          Building digital alchemy with code.
        </h2>
        <p className="text-12 md:text-14 text-light-text-muted dark:text-dark-text-secondary font-mono">
          For me, frontend development isn't just about pixels; it's about the
          invisible threads of logic that weave together a seamless user
          experience. My journey started with a simple question:{' '}
          <span className="dark:text-dark-teal text-light-bg-cta">
            "How can I make this interactable?"
          </span>
        </p>
        <div className="dark:bg-dark-bg-section bg-light-tag-bg/90 drop-shadow-md rounded-lg text-light-text-secondary font-mono dark:text-dark-button-text">
          <p className="text-12 md:text-14 border-l-4 border-light-bg-cta dark:border-l-dark-teal p-5 rounded-lg italic font-light">
            I believe the best interfaces are those that feel natural, almost
            second nature. I don't just solve problems; I curate environments
            where users feel empowered by technology, not intimidated by it.
          </p>
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

export default AboutHero;
