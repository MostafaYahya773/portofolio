import Link from 'next/link';
import React from 'react';
import StaggerContainer from '../Animations/StaggerContainer';

const Contact = () => {
  return (
    <StaggerContainer className="flex items-center justify-center bg-light-bg-secondery dark:bg-dark-bg-primary">
      <div className="py-0 md:py-16 max-w-[1300px] w-full mx-auto dark:text-dark-button-text text-white flex justify-center px-3">
        <div className="flex justify-center dark:bg-transparent dark:bg-none bg-gradient-to-r from-[#2A14B4] to-[#4338CA] items-center backdrop-blur-xl bg-white/1 border border-light-text-secondary/10 w-full md:w-[700px] lg:w-[1000px] min-h-[300px] md:h-[400px] rounded-2xl p-7 relative overflow-hidden shadow-lg drop-shadow-md">
          {/* Glow circles */}
          <span className="absolute w-[400px] h-[400px] rounded-full bg-teal-400/10 -top-48 -right-48 blur-3xl"></span>
          <span className="absolute w-[400px] h-[400px] rounded-full bg-purple-400/10 -bottom-48 -left-48 blur-3xl"></span>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center gap-1 font-bold">
            <h4 className="text-24 md:text-28 lg:text-35">
              Have an idea? Let's build
            </h4>
            <p className="text-24 md:text-28 lg:text-35">
              something <span className="darkTextStyle">amazing</span> together.
            </p>
            <Link
              href="/contact"
              className="px-5 mt-5 text-14 md:text-16 lg:text-18 font-normal py-2 flex rounded-full font-mono bg-white text-light-bg-cta dark:bg-gradient-to-r dark:from-dark-mouve dark:to-dark-teal dark:text-dark-blue transition-colors duration-300"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </StaggerContainer>
  );
};

export default Contact;
