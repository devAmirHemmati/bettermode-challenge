import { useState } from 'react';

import {
  PostListQueryVariables,
  usePostListSuspenseQuery,
} from '@/gql/generated';

function usePostList(initialVariables?: PostListQueryVariables) {
  const [variables, setVariables] = useState<
    PostListQueryVariables | undefined
  >(initialVariables);
  const postListQuery = usePostListSuspenseQuery({ variables });

  const handleChangeOrderBy = (orderKey: string) => {
    const isCurrentOrderBy = variables?.orderByString === orderKey;

    setVariables({
      ...(variables as PostListQueryVariables),
      orderByString: orderKey,
      reverse: isCurrentOrderBy ? !variables.reverse : true,
    });
  };

  const handleSearch = (value: string) => {
    setVariables({
      ...(variables as PostListQueryVariables),
      query: value === '' ? undefined : value.trim(),
    });
  };

  return {
    variables,
    postListQuery,
    handleChangeOrderBy,
    handleSearch,
  };
}

export default usePostList;
