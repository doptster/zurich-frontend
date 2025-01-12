import './globals.css';

import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { Logo, SettingsIcon, UsersIcon } from '@/components/icons';
import { Header } from './header';
import { Footer } from './footer';
import { NavItem } from './nav-item';
import { auth } from '@/lib/auth';
import LoginPage from './login/page';

export const metadata = {
  title: 'Zurich Web Application',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = session?.user;

  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-5">
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="/"
                >
                  <Logo />
                  <span className="">Zurich</span>
                </Link>
              </div>
              {user &&
                <div className="flex-1 overflow-auto py-2">
                  <nav className="grid items-start px-4 text-sm font-medium">
                    <NavItem href="/">
                      <UsersIcon className="h-4 w-4" />
                      Users
                    </NavItem>
                    <NavItem href="/settings">
                      <SettingsIcon className="h-4 w-4" />
                      Settings
                    </NavItem>
                  </nav>
                </div>
              }
            </div>
          </div>
          <div className="flex flex-col">
            <Header />
            {user ? children: (
              <LoginPage />)}
          </div>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
