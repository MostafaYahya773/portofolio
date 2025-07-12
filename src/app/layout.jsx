import Nav from './_components/nav/page';
import ManuProvider from './context/manu';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-grid min-h-screen  dark:bg-[#092635]">
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
