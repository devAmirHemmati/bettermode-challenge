import { Suspense } from 'react';

import { ClientChild } from '@/components/child';
import { PreloadQuery } from '@/configs/apolloClient';

import { MyAwesomePostsDocument } from '../../generated/graphql';

async function PostListPage() {
  return (
    <PreloadQuery query={MyAwesomePostsDocument}>
      <Suspense fallback={<>loading</>}>
        <ClientChild />
      </Suspense>
    </PreloadQuery>
  );
}

export default PostListPage;
