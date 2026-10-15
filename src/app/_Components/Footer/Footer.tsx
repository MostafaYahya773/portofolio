import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto grid max-w-[1300px] gap-5 px-4 md:grid-cols-3 md:items-center">
        <span className="text-14 font-mono text-light-text-muted dark:text-dark-text-secondary">
          Mostafa Yahya · Frontend Developer
        </span>
        <span className="text-14 font-mono text-light-text-muted dark:text-dark-text-secondary">
          © {new Date().getFullYear()} — Built with Next.js & Tailwind
        </span>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
