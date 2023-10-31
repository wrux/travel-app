'use client';

import { Image, Star, Text, Video } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { cn } from '~/lib/utils';

const sections = [
  {
    id: 'overview',
    label: 'Overview',
    icon: Star,
  },
  {
    id: 'posts',
    label: 'Posts',
    icon: Text,
  },
  {
    id: 'photos',
    label: 'Photos',
    icon: Image,
  },
  {
    id: 'videos',
    label: 'Videos',
    icon: Video,
  },
];

export default function ExploreLayout({ children, ...props }) {
  const pathname = usePathname();
  // Extract section from path name `/explore/${section}`
  const activeSection = pathname.split('/')[2] || 'overview';

  return (
    <main className="">
      <div className="">
        <nav>
          <ul className="flex gap-8">
            {sections.map(({ id, icon: Icon, label }) => (
              <li key={id} className="flex-1">
                <Link
                  href={`/explore/${id}`}
                  aria-label={`View ${label}`}
                  className={cn(
                    'mb-8 grid h-16 place-items-center border-b-2 text-center',
                    id === activeSection
                      ? 'border-gray-500'
                      : 'border-gray-900',
                  )}
                >
                  <Icon />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="">{children}</div>
    </main>
  );
}
