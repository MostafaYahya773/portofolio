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
    <nav className="bg-light-bg-card dark:bg-dark-bg-primary py-4 shadow-md fixed top-0 left-0 right-0 z-50 px-3">
      <div className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] max-w-[1300px] mx-auto items-center">
        {/* Logo */}
        <h1 className="text-light-bg-cta darkTextStyle text-16 md:text-18 lg:text-20 font-bold">
          Mostafa Yahya
        </h1>

        {/* Links — Desktop only */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 justify-center">
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.link}
                className={`${pathName === link.link ? 'navActive' : ''} text-12 lg:text-14 text-light-nav-Color`}
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
            className="flex px-4 py-2 text-12 lg:text-14 bg-light-bg-cta text-white rounded-3xl hover:bg-light-bg-cta/90 dark:bg-gradient-to-r dark:from-dark-mouve dark:to-dark-teal dark:text-dark-blue font-bold transition-colors duration-300"
          >
            Resume
          </Link>
          <ThemeToggle />
          {/* Burger */}
          <button
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
        <div className="md:hidden mt-4 flex flex-col gap-4 px-3 pb-4">
          <ul className="flex flex-col gap-3">
            {Links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.link}
                  onClick={() => setIsOpen(false)}
                  className={`${pathName === link.link ? 'text-light-bg-cta dark:text-dark-teal font-bold' : 'text-light-nav-Color'} text-14 block`}
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
