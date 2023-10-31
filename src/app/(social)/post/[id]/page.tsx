'use client';

import type { PublicationId } from '@lens-protocol/react-web';
import { usePublication } from '@lens-protocol/react-web';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

// import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { cn } from '~/lib/utils';

export default function PostPage({
  params: { id },
}: {
  params: { id: PublicationId };
}) {
  const { data, loading } = usePublication({
    publicationId: id,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return notFound();
  }

  const publication = data as any;

  // const hasMedia = publication.metadata?.media.length;
  const isMirror = publication.__typename === 'Mirror';
  // const profile: any = isMirror
  //   ? publication?.mirrorOf?.profile
  //   : publication?.profile;
  // const publicationId = isMirror ? publication?.mirrorOf?.id : id;

  // Stats
  const commentsCount = isMirror
    ? publication.mirrorOf.stats.totalAmountOfComments
    : publication.stats.totalAmountOfComments;
  const likesCount = isMirror
    ? publication.mirrorOf.stats.totalUpvotes
    : publication.stats.totalUpvotes;
  const collectsCount = isMirror
    ? publication.mirrorOf.stats.totalAmountOfCollects
    : publication.stats.totalAmountOfCollects;
  const mirrorsCount = isMirror
    ? publication.mirrorOf.stats.totalAmountOfMirrors
    : publication.stats.totalAmountOfMirrors;

  return (
    <article>
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

      {/* {publication.profile?.picture && (
        <Avatar>
          <AvatarImage src={publication.profile?.picture?.original?.url} />
          <AvatarFallback>
            {publication.profile.handle.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      )} */}

      <div className="flex gap-8 border-y-2 border-border py-2">
        <div>{commentsCount} Comments</div>
        <div>{likesCount} Likes</div>
        {publication.collectModule.__typename !==
        'RevertCollectModuleSettings' ? (
          <div>{collectsCount} Collects</div>
        ) : null}
        <div>{mirrorsCount} Mirrors</div>
      </div>
    </article>
  );
}
