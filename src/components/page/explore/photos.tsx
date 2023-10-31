'use client';

import {
  PublicationMainFocus,
  PublicationSortCriteria,
  PublicationTypes, // useExploreProfiles,
  useExplorePublications,
} from '@lens-protocol/react-web';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { cn } from '~/lib/utils';

export default function ExplorePhotos() {
  return (
    <div>
      <h1>Recent Travel Photos</h1>
      <PublicationList />
    </div>
  );
}

function PublicationList() {
  const { data, error, loading } = useExplorePublications({
    limit: 25,
    sortCriteria: PublicationSortCriteria.CuratedProfiles,
    publicationTypes: [PublicationTypes.Post],
    metadataFilter: {
      restrictPublicationMainFocusTo: [PublicationMainFocus.Image],
      restrictPublicationTagsTo: { oneOf: ['travel'] },
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="space-y-16">
      {data.map((publication) => (
        <Publication key={publication.id} publication={publication} />
      ))}
    </div>
  );
}

function Publication({ publication }: { publication: any }) {
  console.log('Publication', publication);
  return (
    <article className="border-2 border-red-500">
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
