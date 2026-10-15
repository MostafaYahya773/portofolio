import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import Navbar from './_Components/Navbar/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import ReactQueryProvider from './_Components/ReactQueryProvider/ReactQueryProvider';
import { Toaster } from 'react-hot-toast';
import Footer from './_Components/Footer/Footer';
import { siteUrl } from '../../lib/site';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: 'Mostafa Yahya | Frontend Developer', template: '%s | Mostafa Yahya' },
  description: 'Frontend developer based in Cairo, building web experiences with React, Next.js, TypeScript, and Supabase. Explore my projects and get in touch.',
  openGraph: {
    title: 'Mostafa Yahya | Frontend Developer',
    description: 'React, Next.js, and TypeScript projects by Mostafa Yahya. Based in Cairo and available for remote collaboration.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mostafa Yahya',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches));}catch(e){document.documentElement.classList.toggle('dark',matchMedia('(prefers-color-scheme: dark)').matches);}})();` }} />
      </head>
      <body className="dark:bg-dark-bg-primary bg-light-bg-primary mt-20 md:mt-32 lg:mt-0">
        <ThemeProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-black focus:p-3">Skip to content</a>
          <header>
            <Navbar />
          </header>
          <Toaster />
          <ReactQueryProvider>
            <main id="main-content" tabIndex={-1}>{children}</main>
          </ReactQueryProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
