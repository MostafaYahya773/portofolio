'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contact', link: '/contact' },
  ];
  const pathName = usePathname();
  return (
    <nav className=" bg-light-bg-card dark:bg-dark-bg-primary py-4 items-center shadow-md fixed top-0 left-0 right-0 z-50 px-3">
      <div className="grid md:grid-cols-[auto_1fr_auto] max-w-[1300px] mx-auto">
        <h1 className="text-light-bg-cta darkTextStyle text-20 font-bold">
          Mostafa Yahya
        </h1>
        <ul className="flex space-x-10  justify-center">
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.link}
                className={`${pathName === link.link ? 'navActive' : ''} text-light-nav-Color`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex space-x-3">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 bg-light-bg-cta text-white rounded-3xl hover:bg-light-bg-cta/90 dark:bg-gradient-to-r dark:from-dark-mouve dark:to-dark-teal dark:text-dark-blue font-bold transition-colors duration-300"
          >
            Resume
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
