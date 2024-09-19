'use client';

import { PostListQueryVariables } from '@/gql/generated';

import PostList from '.';
import usePostList from './usePostList';

interface IPostListPage {
  initialVariables?: PostListQueryVariables;
}

function PostListPageClient({ initialVariables }: IPostListPage) {
  const { postListQuery, variables, handleChangeOrderBy, handleSearch } =
    usePostList(initialVariables);

  return (
    <PostList
      variables={variables}
      postListQuery={postListQuery.data}
      handleChangeOrderBy={handleChangeOrderBy}
      handleSearch={handleSearch}
    />
  );
}

export default PostListPageClient;
