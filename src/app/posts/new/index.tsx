import Link from 'next/link';
import { toast } from 'react-toastify';

import {
  AppLoading,
  Button,
  Card,
  Container,
  Input,
  Textarea,
  Typography,
} from '@/components';
import { BackIcon } from '@/components/icons';
import NAVIGATION from '@/data/routes';
import {
  PostMappingTypeEnum,
  useCreatePostMutation,
  useInitializeAppQuery,
} from '@/gql/generated';
import { useForm } from '@/hooks';

function NewPostPage() {
  // const router = useRouter();
  const initialQuery = useInitializeAppQuery();
  const [mutateCreatePost, createPostData] = useCreatePostMutation();
  const { register, handleSubmit } = useForm({
    onSubmit(values) {
      mutateCreatePost({
        variables: {
          input: {
            ownerId: initialQuery.data?.subscriberSettings.networkId,
            postTypeId: 'kxz0iFb7GgOvZUW',
            publish: true,
            mappingFields: [
              {
                key: 'title',
                value: `"${values.title}"`,
                type: PostMappingTypeEnum.Text,
              },
              {
                key: 'content',
                value: `"<p>${values.content}</p>"`,
                type: PostMappingTypeEnum.Text,
              },
            ],
            tagNames: [],
          },
          spaceId: 'HXAACOY1sQ5z',
        },
        onCompleted() {
          toast('Add', { type: 'success' });
        },
      });
      // router.push(NAVIGATION.POST_LIST);
    },
    initialValues: {
      title: {
        label: 'Title',
        max: 100,
        validation: {
          type: 'not-empty',
          errorMessage: 'Type the title of post',
        },
      },
      content: {
        label: 'Content',
        max: 400,
        validation: {
          type: 'not-empty',
          errorMessage: 'Type the content of post',
        },
      },
    },
  });

  if (initialQuery.loading) return <AppLoading />;
  return (
    <Container fullHeight>
      <div className="w-full h-full flex justify-center items-center">
        <form className="w-[800px]" onSubmit={handleSubmit}>
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Link href={NAVIGATION.POST_LIST}>
                <BackIcon />
              </Link>

              <Typography variant="titleMd">Create a new discussion</Typography>
            </div>

            <Input {...register('title')} />

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

export default NewPostPage;
