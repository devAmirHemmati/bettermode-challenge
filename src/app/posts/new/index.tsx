import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import {
  AppLoading,
  Button,
  Card,
  Container,
  Input,
  Select,
  Textarea,
  Typography,
} from '@/components';
import { BackIcon } from '@/components/icons';
import APP_DATA from '@/data/app';
import NAVIGATION from '@/data/routes';
import {
  PostMappingTypeEnum,
  useCreatePostMutation,
  useInitializeAppQuery,
} from '@/gql/generated';
import { useForm } from '@/hooks';
import { normalizeImageIcon } from '@/utils';

function NewPostPageClient() {
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
  console.log('Form: ', form);

  useEffect(() => {
    if (initialQuery.loading) return;

    handleSetValue('space', spaces[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery.loading]);

  if (initialQuery.loading) return <AppLoading />;
  return (
    <Container fullHeight>
      <div className="w-full h-full flex justify-center items-center">
        <form className="w-[800px]" onSubmit={handleSubmit}>
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Link href={NAVIGATION.POST_LIST} aria-label="back to post list">
                <BackIcon />
              </Link>

              <Typography variant="titleMd">Create a new discussion</Typography>
            </div>

            <Select
              label="Post in"
              value={form.space.value}
              onClickItem={option => {
                handleSetValue('space', option.value);
              }}
              options={spaces.map(option => ({
                label: option.name,
                value: option.id,
                imageUrl: normalizeImageIcon(option.imageId),
              }))}
            />

            <Input className="mt-5" {...register('title')} />

            <Textarea className="mt-5" {...register('content')} />

            <div className="flex flex-row-reverse items-center gap-2 mt-12">
              <Button type="submit" loading={createPostData.loading}>
                Publish
              </Button>

              <Link href={NAVIGATION.POST_LIST}>
                <Button variant="neutral">Cancel</Button>
              </Link>
            </div>
          </Card>
        </form>
      </div>
    </Container>
  );
}

export default NewPostPageClient;
