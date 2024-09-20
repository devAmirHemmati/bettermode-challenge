import { PreloadQuery } from '@/configs/apolloClient';
import { PostListDocument, PostListQueryVariables } from '@/gql/generated';

import PostListClient from './posts';

const initialVariables: PostListQueryVariables = {
  offset: 0,
  limit: 10,
  orderByString: 'createdAt',
  reverse: true,
};

async function PostListPageSSR() {
  return (
    <PreloadQuery query={PostListDocument} variables={initialVariables}>
      <PostListClient />
    </PreloadQuery>
  );
}

export const revalidate = 0;

export const dynamic = 'force-dynamic';

export default PostListPageSSR;
