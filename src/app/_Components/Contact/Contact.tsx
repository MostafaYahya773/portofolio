import Link from 'next/link';
import React from 'react';
import StaggerContainer from '../Animations/StaggerContainer';

const Contact = () => {
  return (
    <StaggerContainer className="px-4 pb-20 pt-6 md:pb-28 md:pt-12">
      <div className="relative mx-auto max-w-[1300px] overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 text-white md:px-14 md:py-20">
          {/* Glow circles */}
          <span className="absolute -right-32 -top-52 h-[420px] w-[420px] rounded-full bg-teal-400/20 blur-3xl" />
          <span className="absolute -bottom-64 -left-24 h-[460px] w-[460px] rounded-full bg-indigo-500/25 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="font-mono text-12 font-semibold tracking-[0.22em] text-teal-300">03 · LET'S TALK</p>
              <h2 className="mt-5 max-w-[760px] text-35 font-bold leading-tight tracking-[-0.035em] md:text-[3.5rem]">Have a project that needs a clear, polished interface?</h2>
              <p className="mt-5 max-w-[620px] text-16 leading-8 text-slate-300">Tell me what you're building, where it is today, and what you want users to be able to do.</p>
            </div>
            <Link
              href="/ContactUs"
              className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3.5 text-14 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-200"
            >
              Send me the brief
            </Link>
          </div>
      </div>
    </StaggerContainer>
  );
};

export default Contact;
