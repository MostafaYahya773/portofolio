'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

interface SocialLink {
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mostafa-yahya-78a780286',
  },
  { label: 'WhatsApp', href: 'https://wa.me/01159635438' },
  { label: 'Gmail', href: 'mailto:mostafayahya000@gmail.com' },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1EKR7BadFz/?mibextid=wwXIfr',
  },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-6">
      {socialLinks.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-12 md:text-14 font-mono tracking-[2px] uppercase text-light-text-muted dark:text-dark-text-secondary hover:text-light-bg-cta dark:hover:text-dark-teal transition-colors duration-300"
        >
          {label}
          <FiArrowUpRight className="text-14" />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
