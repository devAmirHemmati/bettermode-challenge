'use client';
import Image from 'next/image';
import Link from 'next/link';

import {
  AppLoading,
  Avatar,
  Card,
  Container,
  Flex,
  ReActionButton,
  Typography,
} from '@/components';
import { BackIcon } from '@/components/icons';
import { emojiItems } from '@/components/reActionButton';
import NAVIGATION from '@/data/routes';
import { PostDetailQueryVariables } from '@/gql/generated';
import { normalizeImageIcon, transformDate } from '@/utils';

import usePostDetail from './usePostDetail';

interface IProps {
  initialVariables?: PostDetailQueryVariables;
}

function PostDetailsClient({ initialVariables }: IProps) {
  const {
    activeReactionKeys,
    activeReactions,
    handleSwitchReactionActivation,
    isInitial,
    postDetailQuery,
  } = usePostDetail(initialVariables);

  if (!isInitial) return <AppLoading />;
  return (
    <Container>
      <Card>
        <Flex className="gap-6">
          <Link href={NAVIGATION.POST_LIST} aria-label="back to post list">
            <BackIcon />
          </Link>

          <Flex className="gap-2">
            {postDetailQuery.data.post.space?.imageId && (
              <Image
                draggable={false}
                src={
                  normalizeImageIcon(
                    postDetailQuery.data.post.space?.imageId,
                  ) as string
                }
                alt=""
                width={20}
                height={20}
              />
            )}

            <Typography>{postDetailQuery.data.post.space?.name}</Typography>
          </Flex>
        </Flex>
      </Card>

      <Card className="mt-5 relative">
        <Flex className="gap-4">
          <Avatar
            fullName={postDetailQuery.data.post.createdBy?.member?.name || ''}
          />

          <Flex column justify="center" align="start">
            <Typography variant="sm" className="font-bold">
              {postDetailQuery.data.post.createdBy?.member?.name}
            </Typography>

            <Typography variant="xs">
              Posted at{' '}
              {transformDate(postDetailQuery.data.post.createdAt, 'date-time')}
            </Typography>
          </Flex>
        </Flex>

        <Typography variant="titleSm" className="mt-6">
          {postDetailQuery.data.post.title}
        </Typography>

        <Typography
          variant="md"
          className="mt-1"
          dangerouslySetInnerHTML={{
            __html:
              postDetailQuery.data.post.contentSummary?.summary?.replace(
                /\n/g,
                '<br />',
              ) || '',
          }}
        />

        <Flex className="mt-6 gap-4">
          <ReActionButton
            activeItems={activeReactionKeys as any}
            onClickItem={handleSwitchReactionActivation}
            labelKey={activeReactionKeys?.[0] as any}
          />

          <Flex className="gap-2">
            {activeReactions.map((item, index) => (
              <Flex
                className={`bg-gray-200 rounded-full px-3 border border-gray-300 hover:border-gray-400 transition-all active:scale-[0.95] gap-2 cursor-default`}
                key={index}
              >
                {emojiItems.find(i => i.key === item.reaction)?.label}

                <Typography>{item.count}</Typography>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
}

export default PostDetailsClient;
