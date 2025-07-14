'use client';
import React, { useState } from 'react';
export default function SocailMedail() {
  //socail media links
  const [social, setSocial] = useState([
    {
      name: 'facebook',
      link: 'https://www.facebook.com/share/16XYVSiSm1/?mibextid=wwXIfr',
      icon: 'fa-brands fa-facebook',
    },
    {
      name: 'twitter',
      link: 'https://x.com/Mostafa37407245',
      icon: 'fa-brands fa-x-twitter',
    },

    {
      name: 'linkedIn',
      link: 'https://www.linkedin.com/in/mostafa-yahya-78a780286',
      icon: 'fa-brands fa-linkedin-in',
    },
    {
      name: 'github',
      link: 'https://github.com/MostafaYahya773',
      icon: 'fa-brands fa-github',
    },
  ]);
  return (
    <div className="links">
      <ul className="flex items-center gap-3 flex-wrap">
        {social.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center rounded-md dark:bg-[var(--box-bg-dark)] bg-[var(--box-bg)] dark:text-[var(--header-color-dark)] text-[var(--secoundry-color)] opacity-85 cursor-pointer hover:opacity-100"
          >
            <a className="py-2 px-5 " href={item.link} target="_blank">
              <i className={`${item.icon} text-[20px]`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
