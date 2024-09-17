import { PreloadQuery } from '@/configs/apolloClient';
import { PostListDocument, PostListQueryVariables } from '@/gql/generated';

import PostListPage from './posts';

const initialVariables: PostListQueryVariables = {
  offset: 0,
  limit: 10,
  orderByString: 'createdAt',
  reverse: true,
};

async function _PostListPage() {
  return (
    <PreloadQuery query={PostListDocument} variables={initialVariables}>
      <PostListPage initialVariables={initialVariables} />
    </PreloadQuery>
  );
}

export const revalidate = 5;

export const dynamic = 'force-dynamic';

export default _PostListPage;
