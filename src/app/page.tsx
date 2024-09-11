import { query } from '@/configs/apolloClient';
import { MyAwesomePostsDocument } from '@/gql/generated';

import PostListPage from './postList';

async function _PostListPage() {
  const postListQuery = await query({
    query: MyAwesomePostsDocument,
  });

  return <PostListPage postListQuery={postListQuery} />;
}

export const dynamic = 'force-dynamic';

export default _PostListPage;
