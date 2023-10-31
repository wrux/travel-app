'use client';

import { PublicationTeaser } from '~/components/ui/publication-teaser';
import useExplore from '~/lib/hooks/useExplore';

export default function ExplorePosts() {
  const { data, error, loading } = useExplore({
    focus: 'post',
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="mb-8">Travel Photos</h1>
      {loading && <p>Loading...</p>}
      {data?.length === 0 ? (
        <p>No photos found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {data?.map((publication) => (
            <div key={publication.id}>
              <PublicationTeaser publication={publication} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
