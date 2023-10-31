import {
  PublicationMainFocus,
  PublicationSortCriteria,
  PublicationTypes,
  useExplorePublications,
} from '@lens-protocol/react-web';

import type { Publication } from '~/types/lense';

const publicationFocusTypes: Record<string, PublicationMainFocus[]> = {
  default: [
    PublicationMainFocus.Article,
    PublicationMainFocus.Image,
    PublicationMainFocus.Link,
    PublicationMainFocus.TextOnly,
    PublicationMainFocus.Video,
  ],
  post: [PublicationMainFocus.TextOnly],
  image: [PublicationMainFocus.Image],
  video: [PublicationMainFocus.Video],
};

export default function useExplore({
  focus = 'default',
}: {
  focus?: keyof typeof publicationFocusTypes;
} = {}): {
  data: Publication[];
  error?: Error;
  loading?: boolean;
} {
  const { data, error, loading } = useExplorePublications({
    limit: 25,
    sortCriteria: PublicationSortCriteria.CuratedProfiles,
    publicationTypes: [PublicationTypes.Post],
    metadataFilter: {
      restrictPublicationMainFocusTo:
        publicationFocusTypes?.[focus] || publicationFocusTypes.default,
      restrictPublicationTagsTo: { oneOf: ['travel'] },
    },
  });

  return {
    data: data as Publication[],
    error,
    loading,
  };
}
