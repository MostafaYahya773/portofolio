'use client';

import React, { useState } from 'react';
import Animation from '../_components/animation/page';
import PageInfo from '../_components/pageInfo/page';
import NextReact from '../_components/next_react/page';
import HtmlCssJs from '../_components/html_css_js/page';
export default function Portfolio() {
  return (
    <div className="flex flex-col gap-3 py-5 md:py-16">
      <div className="title">
        <div className="order-2 md:order-1 ">
          <div className="info dark:text-[var(--white-color)] text-[var(--primary-color)] text-[30px] md:text-[36px] flex flex-col gap-0  ">
            <h1>
              Mostafa's{' '}
              <span className=" dark:text-[var(--secoundry-color-dark)] text-[var(--secoundry-color)]">
                Portfolio
              </span>
              ,
            </h1>
            <p className="dark:text-[var(--header-color-dark)] text-[var(--header-color)] font-light text-[16px] sm:text-[18px] md:text-[20px]">
              Turning ideas into interactive, responsive, and user-friendly web
              experiences
            </p>
          </div>
        </div>
      </div>

      <div className="my-5 md:my-10 flex flex-col overflow-hidden gap-10 md:gap-16">
        <div className="nextReact flex flex-col ">
          <Animation delay={0} y={40} duration={0.8}>
            <NextReact />
          </Animation>
        </div>
        <div className="html_css_js">
          <Animation delay={0} y={40} duration={0.8}>
            <HtmlCssJs />
          </Animation>
        </div>
      </div>
    </div>
  );
}
