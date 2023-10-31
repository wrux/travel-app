'use client';

import { PublicationTeaser } from '~/components/ui/publication-teaser';
import useExplore from '~/lib/hooks/useExplore';

export default function ExploreVideos() {
  const { data, error, loading } = useExplore({
    focus: 'video',
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="mb-8">Travel Videos</h1>
      {loading && <p>Loading...</p>}
      {data?.length === 0 ? (
        <p>No photos found.</p>
      ) : (
        <div className="space-y-8">
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
