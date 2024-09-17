import { useState } from 'react';

import {
  PostListQueryVariables,
  usePostListSuspenseQuery,
} from '@/gql/generated';

function usePostList(initialVariables?: PostListQueryVariables) {
  const [variables] = useState<PostListQueryVariables | undefined>(
    initialVariables,
  );
  const postListQuery = usePostListSuspenseQuery({ variables });

  return {
    variables,
    postListQuery,
  };
}

export default usePostList;
