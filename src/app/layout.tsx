'use client';

import { disconnect } from '@wagmi/core';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { ChevronRight, Droplets, LogOut } from 'lucide-react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAccount } from 'wagmi';

import { WalletProvider } from './WalletProvider';
import './globals.css';
import LensProvider from './lens-provider';

import { ModeToggle } from '~/components/dropdown';
import { ThemeProvider } from '~/components/theme-provider';
import { Button } from '~/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

function AppWithProviders({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

function Nav() {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-start border-b sm:flex-row sm:items-center sm:pr-10">
      <div className="p flex flex-1 items-center px-8 py-3">
        <Link href="/" className="mr-5 flex items-center">
          <Droplets className="opacity-85" size={19} />
          <p className={`ml-2 mr-4 text-lg font-semibold`}>lenscn</p>
        </Link>
        <Link
          href="/"
          className={`mr-5 text-sm ${pathname !== '/' && 'opacity-50'}`}
        >
          <p>Home</p>
        </Link>
        <Link
          href="/search"
          className={`mr-5 text-sm ${pathname !== '/search' && 'opacity-60'}`}
        >
          <p>Search</p>
        </Link>
      </div>
      <div
        className="
        flex
        pb-3
        pl-8 sm:items-center sm:p-0
      "
      >
        {!address && (
          <Button onClick={() => open()} variant="secondary" className="mr-4">
            Sign In
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
        {address && (
          <Button onClick={disconnect} variant="secondary" className="mr-4">
            Sign out
            <LogOut className="ml-3 h-4 w-4" />
          </Button>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
}

export default function RootLayout({ children, ...props }) {
  return (
    <LensProvider>
      <AppWithProviders {...props}>
        <WalletProvider>{children}</WalletProvider>
      </AppWithProviders>
    </LensProvider>
  );
}
