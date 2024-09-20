'use client';

import { usePostListContext } from '@/context';
import { usePostListSuspenseQuery } from '@/gql/generated';

function usePostList() {
  const { isInitial, isLoadingMore, variables, handleSetVariables } =
    usePostListContext();
  const postListQuery = usePostListSuspenseQuery({
    variables,
    fetchPolicy: 'cache-and-network',
  });

  const handleChangeOrderBy = (orderKey: string) => {
    if (!variables) return;

    const updatedVariables = { ...variables };
    const isCurrentOrderBy = variables?.orderByString === orderKey;

    updatedVariables.orderByString = orderKey;
    updatedVariables.reverse = isCurrentOrderBy ? !variables.reverse : true;

    handleSetVariables(updatedVariables);
  };

  const handleSearch = async (value: string) => {
    if (!variables) return;

    const updatedVariables = { ...variables };

    updatedVariables.query = value === '' ? undefined : value.trim();

    handleSetVariables(updatedVariables);
  };

  const allLoading = !isInitial || isLoadingMore;
  const loadingCount = variables ? variables.limit - variables.offset : 10;

  return {
    variables,
    postListQuery,
    handleChangeOrderBy,
    handleSearch,
    isLoadingMore,
    isInitial,
    allLoading,
    loadingCount,
  };
}

export default usePostList;
