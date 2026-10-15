'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/About' },
    { name: 'Projects', link: '/Projects' },
    { name: 'Contact', link: '/ContactUs' },
  ];
  const pathName = usePathname();

  return (
    <nav className="fixed left-0 right-0 top-3 z-50 px-3">
      <div className="mx-auto grid max-w-[1300px] grid-cols-[auto_1fr] items-center rounded-full border border-white/60 bg-white/80 px-4 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 md:grid-cols-[auto_1fr_auto] md:px-5">
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-16 font-bold text-slate-950 dark:text-white md:text-18">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-12 text-white dark:bg-white dark:text-slate-950">MY</span>
          <span className="hidden sm:inline">Mostafa Yahya</span>
        </Link>

        {/* Links — Desktop only */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 justify-center">
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.link}
                aria-current={pathName === link.link ? 'page' : undefined}
                className={`${pathName === link.link ? 'text-indigo-700 dark:text-teal-300' : 'text-slate-600 dark:text-slate-300'} text-12 font-semibold transition hover:text-indigo-700 dark:hover:text-teal-300 lg:text-14`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center justify-end space-x-3">
          <Link
            href="https://drive.google.com/file/d/1jNUQCNf59SCvbUW4_NrixMZcIcSElhLo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex rounded-full bg-slate-950 px-4 py-2 text-12 font-bold text-white transition hover:bg-indigo-700 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-200 lg:text-14"
          >
            Resume
          </Link>
          <ThemeToggle />
          {/* Burger */}
          <button
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-light-bg-cta dark:text-dark-button-text"
          >
            {isOpen ?
              <RiCloseLine className="text-24" />
            : <RiMenu3Line className="text-24" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-navigation" onKeyDown={(event) => { if (event.key === 'Escape') setIsOpen(false); }} className="absolute left-3 right-3 top-[4.6rem] rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-slate-950 md:hidden">
          <ul className="flex flex-col gap-3">
            {Links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.link}
                  aria-current={pathName === link.link ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`${pathName === link.link ? 'text-indigo-700 dark:text-teal-300 font-bold' : 'text-slate-700 dark:text-slate-200'} block rounded-xl px-3 py-2 text-16`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
