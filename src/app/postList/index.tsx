import { ApolloQueryResult } from '@apollo/client';

import { MyAwesomePostsQuery } from '@/gql/generated';

interface IPostListPage {
  postListQuery?: ApolloQueryResult<MyAwesomePostsQuery | undefined>;
  loading?: boolean;
}

function PostListPage({ postListQuery, loading }: IPostListPage) {
  console.log(postListQuery);

  return (
    <div className="text-5xl mt-40 text-center px-9">
      {loading ? 'Loading' : postListQuery?.data?.posts.nodes?.[1].title}
    </div>
  );
}

export default PostListPage;
