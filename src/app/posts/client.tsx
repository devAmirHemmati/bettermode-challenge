'use client';

import { PostListQueryVariables } from '@/gql/generated';

import PostList from '.';
import usePostList from './usePostList';

interface IPostListPage {
  initialVariables: PostListQueryVariables;
}

function PostListPageClient({ initialVariables }: IPostListPage) {
  const {
    handleChangeOrderBy,
    handleSearch,
    postListQuery,
    variables,
    isLoadingMore,
    isInitial,
  } = usePostList(initialVariables);

  console.log(postListQuery);
  return (
    <PostList
      variables={variables}
      postListQuery={postListQuery.data}
      handleChangeOrderBy={handleChangeOrderBy}
      handleSearch={handleSearch}
      isLoadingMore={isLoadingMore}
      isInitial={isInitial}
    />
  );
}

export default PostListPageClient;
