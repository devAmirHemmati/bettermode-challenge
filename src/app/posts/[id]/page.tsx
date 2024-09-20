import { PreloadQuery } from '@/configs/apolloClient';
import { PostDetailDocument, PostDetailQueryVariables } from '@/gql/generated';

import PostDetailsClient from '.';

interface IProps {
  params: {
    id: string;
  };
}

function PostDetailsPageSSR({ params }: IProps) {
  const initialVariables: PostDetailQueryVariables = {
    id: params.id,
  };

  return (
    <PreloadQuery query={PostDetailDocument} variables={initialVariables}>
      <PostDetailsClient initialVariables={initialVariables} />
    </PreloadQuery>
  );
}

export const revalidate = 0;

export const dynamic = 'force-dynamic';

export default PostDetailsPageSSR;
