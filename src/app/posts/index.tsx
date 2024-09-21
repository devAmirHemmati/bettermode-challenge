'use client';
import Link from 'next/link';

import {
  Button,
  Container,
  Flex,
  Input,
  LinedSkeleton,
  Table,
  TBody,
  Td,
  Th,
  THead,
  Tr,
  Typography,
  TypographyLink,
} from '@/components';
import NAVIGATION from '@/data/routes';
import { transformDate } from '@/utils';

import usePostList from './usePostList';

const tHeads = [
  {
    label: 'Title',
  },
  {
    label: 'Author',
  },
  {
    label: 'Space',
  },
  {
    label: 'Published at',
    orderKey: 'createdAt',
  },
  {
    label: 'Replies',
    orderKey: 'totalRepliesCount',
  },
  {
    label: 'Reactions',
    orderKey: 'reactionsCount',
  },
];

function PostListClient() {
  const {
    posts,
    handleChangeOrderBy,
    handleSearch,
    postListQuery,
    variables,
    loadingCount,
    allLoading,
    isInitial,
    thresholdElementRef,
  } = usePostList();

  return (
    <Container>
      <Flex justify="between" flexWrap className="gap-x-20 gap-y-3">
        <Typography variant="titleMd">
          Posts {!allLoading && `(${postListQuery.data.posts.totalCount})`}
        </Typography>

        <Flex className="h-[36px] md:max-w-[450px] gap-x-5" fullWidth>
          {isInitial ? (
            <Input
              inputClassName="h-full w-full"
              className="w-full"
              placeholder="Search ..."
              onSearch={value => {
                if (!handleSearch) return;
                handleSearch(value);
              }}
            />
          ) : (
            <LinedSkeleton fullHeight noRounded />
          )}

          <Link href={NAVIGATION.NEW_POST}>
            <Button btnSize="small" className="text-nowrap">
              Add Post
            </Button>
          </Link>
        </Flex>
      </Flex>

      <div className="mt-5">
        <Table>
          <THead>
            {tHeads.map(({ label, orderKey }, index) => {
              const hasOrderKey = typeof orderKey === 'string';
              const isActiveOrderKey = variables?.orderByString === orderKey;
              const arrow = variables?.reverse ? 'bottom' : 'top';

              return (
                <Th
                  key={index}
                  hasArrow={hasOrderKey}
                  arrow={isActiveOrderKey ? arrow : undefined}
                  onClick={() => {
                    if (!orderKey || !handleChangeOrderBy) return;
                    handleChangeOrderBy(orderKey);
                  }}
                >
                  {label}
                </Th>
              );
            })}
          </THead>

          <TBody>
            {isInitial &&
              posts.map((item, index) => {
                const isLastPost = index === posts.length - 1;

                return (
                  <Tr
                    key={item.id}
                    ref={isLastPost ? thresholdElementRef : undefined}
                  >
                    <Td>
                      <TypographyLink href={NAVIGATION.POST_DETAIL(item.id)}>
                        {item.title}
                      </TypographyLink>
                    </Td>
                    <Td>{item.createdBy?.member?.name}</Td>
                    <Td>{item.space?.name}</Td>
                    <Td>{transformDate(item.createdAt)}</Td>
                    <Td>{item.totalRepliesCount}</Td>
                    <Td>{item.reactionsCount}</Td>
                  </Tr>
                );
              })}

            {allLoading &&
              Array(loadingCount)
                .fill(null)
                .map((_, index) => (
                  <Tr key={index}>
                    <Td loading />
                    <Td loading />
                    <Td loading />
                    <Td loading />
                    <Td loading />
                    <Td loading />
                  </Tr>
                ))}
          </TBody>
        </Table>
      </div>
    </Container>
  );
}

export default PostListClient;
