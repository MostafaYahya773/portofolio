import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <footer className="py-6 border-t border-light-border-card/30 dark:border-dark-border-card/20 bg-light-bg-primary dark:bg-dark-bg-primary">
      <div className="max-w-[1300px] mx-auto px-3 grid md:grid-cols-3 gap-5">
        <span className="text-14 font-mono text-light-text-muted dark:text-dark-text-secondary">
          Mostafa Yahya
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
