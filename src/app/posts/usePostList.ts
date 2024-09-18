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
    if (!variables) return;
    const isCurrentOrderBy = variables?.orderByString === orderKey;

    const updatedVariables = { ...variables };

    updatedVariables.orderByString = orderKey;
    updatedVariables.reverse = isCurrentOrderBy ? !variables.reverse : true;

    setVariables(updatedVariables);
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
