import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button, Card, Input, Textarea, Typography } from '@/components';
import { BackIcon } from '@/components/icons';
import NAVIGATION from '@/data/routes';
import { useForm } from '@/hooks';

function NewPostPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    onSubmit() {
      router.push(NAVIGATION.POST_LIST);
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

  return (
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
          <Button type="submit">Publish</Button>

          <Link href={NAVIGATION.POST_LIST}>
            <Button variant="neutral">Cancel</Button>
          </Link>
        </div>
      </Card>
    </form>
  );
}

export default NewPostPage;
