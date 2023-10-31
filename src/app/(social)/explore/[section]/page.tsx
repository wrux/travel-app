import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

// import { ExplorePublications } from '~/components/page/explore-publications';

const pageComponents = {
  overview: dynamic(() => import('~/components/page/explore/overview')),
  photos: dynamic(() => import('~/components/page/explore/photos')),
  posts: dynamic(() => import('~/components/page/explore/posts')),
  videos: dynamic(() => import('~/components/page/explore/videos')),
} as const;

export default function ExploreSectionPage({
  params: { section },
}: {
  // params: { section: 'default' | 'post' | 'image' | 'video' };
  params: { section: keyof typeof pageComponents };
}) {
  // return <ExplorePublications publicationFocus={section} />;
  const PageComponent = pageComponents?.[section] || pageComponents.overview;
  if (!PageComponent) return notFound();
  return <PageComponent />;
}
