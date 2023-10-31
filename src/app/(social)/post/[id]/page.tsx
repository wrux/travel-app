'use client';

import type { PublicationId } from '@lens-protocol/react-web';
import { usePublication } from '@lens-protocol/react-web';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { cn } from '~/lib/utils';

export default function PostPage({
  params: { id },
}: {
  params: { id: PublicationId };
}) {
  const { data: publication, loading } = usePublication({
    publicationId: id,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!publication) {
    return notFound();
  }

  return (
    <article>
      <img
        className={cn(
          'h-auto max-w-full',
          'rounded-2xl object-cover sm:max-w-[500px]',
        )}
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
