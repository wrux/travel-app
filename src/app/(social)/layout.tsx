'use client';

import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '~/lib/utils';

const navigation = [
  {
    id: 'home',
    href: '/',
    label: 'Home',
    isActive: (pathname: string) =>
      pathname === '/' || pathname.startsWith('/home'),
  },
  {
    id: 'explore',
    href: '/explore',
    label: 'Explore',
    isActive: (pathname: string) => pathname.startsWith('/explore'),
  },
  {
    id: 'search',
    href: '/search',
    label: 'Search',
    isActive: (pathname: string) => pathname.startsWith('/search'),
  },
  {
    id: 'bookmarks',
    href: '/bookmarks',
    label: 'Bookmarks',
    isActive: (pathname: string) => pathname.startsWith('/bookmarks'),
  },
  {
    id: 'settings',
    href: '/settings',
    label: 'Settings',
    isActive: (pathname: string) => pathname.startsWith('/settings'),
  },
];

export default function SocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex gap-16 p-8">
      <div className="max-w-[20%] flex-1">
        <nav aria-label="Sidebar navigation">
          <ul className="space-y-2">
            {navigation.map(({ id, ...props }) => (
              <li key={id}>
                <ExploreLink {...props} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}

export type ExploreLinkProps = LinkProps & {
  isActive: (pathname: string) => boolean;
  label: string;
};

function ExploreLink({ isActive, label, ...props }: ExploreLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        'block rounded-md px-4 py-2 hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground',
        isActive(pathname) ? 'bg-secondary text-secondary-foreground' : '',
      )}
      {...props}
    >
      {label}
    </Link>
  );
}
