'use client';
import { useEffect, useState } from 'react';

import { EMOJI_KEY } from '@/components/reActionButton';
import {
  PostDetailQueryVariables,
  useAddPostReactionMutation,
  usePostDetailSuspenseQuery,
  useRemovePostReactionMutation,
} from '@/gql/generated';

function usePostDetail(initialVariables?: PostDetailQueryVariables) {
  const [isInitial, setIsInitial] = useState<boolean>(false);
  const postDetailQuery = usePostDetailSuspenseQuery({
    variables: initialVariables,
  });
  const [mutateAddReaction] = useAddPostReactionMutation();
  const [mutateRemoveReaction] = useRemovePostReactionMutation();

  const activeReactions =
    postDetailQuery.data.post.reactions?.filter(
      reaction => reaction.reacted === true,
    ) || [];
  const activeReactionKeys = activeReactions?.map(
    reaction => reaction.reaction,
  );

  useEffect(() => {
    setIsInitial(true);
  }, []);

  const handleSwitchReactionActivation = (key: EMOJI_KEY) => {
    const isActive = activeReactionKeys.some(k => k === key);

    if (isActive) {
      mutateRemoveReaction({
        variables: {
          id: initialVariables?.id as string,
          reaction: key,
        },
        onCompleted() {
          postDetailQuery.refetch(initialVariables);
        },
      });
      return;
    }

    mutateAddReaction({
      variables: {
        id: initialVariables?.id as string,
        reaction: key,
      },
      onCompleted() {
        postDetailQuery.refetch(initialVariables);
      },
    });
  };

  return {
    handleSwitchReactionActivation,
    isInitial,
    activeReactions,
    activeReactionKeys,
    postDetailQuery,
  };
}

export default usePostDetail;
