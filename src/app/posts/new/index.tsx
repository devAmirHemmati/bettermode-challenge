import Link from 'next/link';

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
import NAVIGATION from '@/data/routes';
import { normalizeImageIcon } from '@/utils';

import useNewPost from './useNewPost';

function NewPostPageClient() {
  const {
    initialQuery,
    handleSubmit,
    spaces,
    form,
    register,
    createPostData,
    handleSetValue,
  } = useNewPost();

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
