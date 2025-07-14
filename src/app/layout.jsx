import Nav from './_components/nav/page';
import ManuProvider from './context/manu';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" min-h-screen  dark:bg-[var(--primary-color)] bg-[var(--white-color)]">
        <ManuProvider>
          <main className="max-w-[1200px] mx-auto p-3">
            <nav>
              <Nav />
            </nav>
            {children}
          </main>
        </ManuProvider>
      </body>
    </html>
  );
}
