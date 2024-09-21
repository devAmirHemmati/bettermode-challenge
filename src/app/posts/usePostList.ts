'use client';
import { useEffect } from 'react';

import { usePostListContext } from '@/context';
import {
  PostListQueryVariables,
  usePostListSuspenseQuery,
} from '@/gql/generated';
import { useInfiniteScroll } from '@/hooks';

function usePostList() {
  const {
    isInitial,
    isLoadingMore,
    variables,
    handleSetVariables,
    handleFinishLoadingMore,
    handleStartLoadingMore,
  } = usePostListContext();
  const postListQuery = usePostListSuspenseQuery({
    variables,
    fetchPolicy: 'no-cache',
  });
  const { thresholdElementRef } = useInfiniteScroll({
    fetchNextPage() {
      if (!postListQuery.data.posts.pageInfo.hasNextPage) {
        return;
      }

      handleStartLoadingMore();
    },
  });

  useEffect(() => {
    if (!isLoadingMore || !variables) return;

    const updatedVariables: PostListQueryVariables = {
      ...variables,
      after: postListQuery.data.posts.pageInfo.endCursor,
    };

    postListQuery.fetchMore({
      variables: updatedVariables,
      updateQuery(previousQueryResult, { fetchMoreResult }) {
        handleFinishLoadingMore();

        fetchMoreResult.posts.nodes = [
          ...(previousQueryResult.posts.nodes || []),
          ...(fetchMoreResult.posts.nodes || []),
        ];

        return fetchMoreResult;
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingMore]);

  const handleChangeOrderBy = (orderKey: string) => {
    if (!variables) return;

    const updatedVariables = { ...variables, after: undefined };
    const isCurrentOrderBy = variables?.orderByString === orderKey;

    updatedVariables.orderByString = orderKey;
    updatedVariables.reverse = isCurrentOrderBy ? !variables.reverse : true;

    handleSetVariables(updatedVariables);
  };

  const handleSearch = async (value: string) => {
    if (!variables) return;

    const updatedVariables = { ...variables, after: undefined };

    updatedVariables.query = value === '' ? undefined : value.trim();

    handleSetVariables(updatedVariables);
  };

  const allLoading = !isInitial || isLoadingMore;
  const loadingCount = variables ? variables.limit - variables.offset : 10;
  const posts = postListQuery?.data?.posts?.nodes || [];

  return {
    variables,
    postListQuery,
    handleChangeOrderBy,
    handleSearch,
    isLoadingMore,
    isInitial,
    allLoading,
    loadingCount,
    thresholdElementRef,
    posts,
  };
}

export default usePostList;
