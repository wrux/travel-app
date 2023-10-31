'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { cn } from '~/lib/utils';
import type { Publication } from '~/types/lense';

export interface PublicationTeaserProps {
  publication: Publication;
}

export function PublicationTeaser({ publication }: PublicationTeaserProps) {
  console.log('Publication', publication);
  return (
    <article className="border-2 border-red-500">
      <img
        className={cn(
          'h-auto max-w-full',
          'rounded-2xl object-cover sm:max-w-[500px]',
        )}
        alt=""
        src={
          publication.__typename === 'Post'
            ? publication.metadata?.media[0]?.original.url
            : ''
        }
      />

      <ReactMarkdown className="mt-4 break-words">
        {publication.metadata.content.replace(
          /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
          '[LINK]($1)',
        )}
      </ReactMarkdown>

      <Link href={`/post/${publication.id}`}>View Post</Link>

      {publication.profile?.picture && (
        <Avatar>
          <AvatarImage src={publication.profile?.picture?.original?.url} />
          <AvatarFallback>
            {publication.profile.handle.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      )}
    </article>
  );
}
