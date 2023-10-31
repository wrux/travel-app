'use client';

import { PublicationTeaser } from '~/components/ui/publication-teaser';
import useExplore from '~/lib/hooks/useExplore';

export default function OverviewPage() {
  const { data, error, loading } = useExplore();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Popular Content</h1>
      {loading && <p>Loading...</p>}
      {data?.map((publication) => (
        <div key={publication.id}>
          <PublicationTeaser publication={publication} />
        </div>
      ))}
    </div>
  );
}
