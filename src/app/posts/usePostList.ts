'use client';
import { useEffect, useState } from 'react';

import {
  PostListQueryVariables,
  usePostListSuspenseQuery,
} from '@/gql/generated';

function usePostList(initialVariables?: PostListQueryVariables) {
  const [isInitial, setIsInitial] = useState<boolean>(false);
  const [isLoadingMore] = useState<boolean>(false);
  const [variables, setVariables] = useState<
    PostListQueryVariables | undefined
  >(initialVariables);
  const postListQuery = usePostListSuspenseQuery({
    variables,
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    setIsInitial(true);
  }, []);

  const handleChangeOrderBy = (orderKey: string) => {
    if (!variables) return;

    const updatedVariables = { ...variables };
    const isCurrentOrderBy = variables?.orderByString === orderKey;

    updatedVariables.orderByString = orderKey;
    updatedVariables.reverse = isCurrentOrderBy ? !variables.reverse : true;

    setVariables(updatedVariables);
  };

  const handleSearch = async (value: string) => {
    if (!variables) return;

    const updatedVariables = { ...variables };

    updatedVariables.query = value === '' ? undefined : value.trim();

    setVariables(updatedVariables);
  };

  return {
    variables,
    postListQuery,
    handleChangeOrderBy,
    handleSearch,
    isLoadingMore,
    isInitial,
  };
}

export default usePostList;
