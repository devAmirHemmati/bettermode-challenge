import { useRouter } from 'next/router';
import { useEffect } from 'react';

import APP_DATA from '@/data/app';
import NAVIGATION from '@/data/routes';
import {
  PostMappingTypeEnum,
  useCreatePostMutation,
  useInitializeAppQuery,
} from '@/gql/generated';
import { useForm } from '@/hooks';

function useNewPost() {
  const router = useRouter();
  const initialQuery = useInitializeAppQuery();
  const [mutateCreatePost, createPostData] = useCreatePostMutation();
  const spaces =
    initialQuery.data?.spaces.nodes?.filter(
      space => space.name !== APP_DATA.postListKey,
    ) || [];
  const postType =
    initialQuery.data?.postTypes.nodes?.find(
      node => node.name === APP_DATA.discussionKey,
    )?.id || '';

  const { register, handleSubmit, handleSetValue, form } = useForm({
    initialValues: {
      space: {},
      title: {
        label: 'Title',
        max: 60,
        validation: {
          type: 'not-empty',
          errorMessage: 'Type the title of post',
        },
      },
      content: {
        label: '',
        max: 20000,
        validation: {
          type: 'not-empty',
          errorMessage: 'Type the content of post',
        },
      },
    },
    onSubmit(values) {
      mutateCreatePost({
        variables: {
          input: {
            ownerId: initialQuery.data?.subscriberSettings.networkId,
            postTypeId: postType,
            publish: true,
            mappingFields: [
              {
                key: 'title',
                value: `"${values.title}"`,
                type: PostMappingTypeEnum.Text,
              },
              {
                key: 'content',
                value: JSON.stringify(values.content as string),
                type: PostMappingTypeEnum.Text,
              },
            ],
            tagNames: [],
          },
          spaceId: values.space.toString(),
        },
        onCompleted(data) {
          router.push(NAVIGATION.POST_DETAIL(data.createPost.id));
        },
      });
    },
  });

  useEffect(() => {
    if (initialQuery.loading) return;

    handleSetValue('space', spaces[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery.loading]);

  return {
    initialQuery,
    handleSubmit,
    spaces,
    form,
    register,
    createPostData,
    handleSetValue,
  };
}

export default useNewPost;
