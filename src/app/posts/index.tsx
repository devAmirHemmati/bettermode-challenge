import { ApolloQueryResult } from '@apollo/client';
import Link from 'next/link';

import { Typography } from '@/components';
import NAVIGATION from '@/data/routes';
import { MyAwesomePostsQuery } from '@/gql/generated';

interface IPostListPage {
  postListQuery?: ApolloQueryResult<MyAwesomePostsQuery | undefined>;
  loading?: boolean;
}

function PostListPage({ postListQuery }: IPostListPage) {
  console.log(postListQuery);

  return (
    <div className="text-5xl mt-40 text-center px-9">
      <Link href={NAVIGATION.NEW_POST} legacyBehavior>
        <Typography component="a" variant="titleSm" className="text-blue-400">
          New Post
        </Typography>
      </Link>
    </div>
  );
}

export default PostListPage;
