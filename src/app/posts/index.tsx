'use client';
import NextLink from 'next/link';

import {
  Button,
  Container,
  Flex,
  Input,
  Link,
  Table,
  TBody,
  Td,
  Th,
  THead,
  Tr,
  Typography,
} from '@/components';
import NAVIGATION from '@/data/routes';
import { PostListQueryVariables } from '@/gql/generated';
import transformDate from '@/utils/date';

import usePostList from './usePostList';

interface IPostListPage {
  // postListQuery?: ApolloQueryResult<PostListQuery | undefined>;
  loading?: boolean;
  initialVariables?: PostListQueryVariables;
}

function PostListPage({ loading, initialVariables }: IPostListPage) {
  const { postListQuery } = usePostList(initialVariables);
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
      hasArrow: true,
      arrow: undefined,
    },
    {
      label: 'Replies',
      hasArrow: true,
      arrow: undefined,
    },
    {
      label: 'Reactions',
      hasArrow: true,
      arrow: undefined,
    },
  ];

  console.log('index.tsx: ', postListQuery);
  return (
    <Container>
      <Flex justify="between" flexWrap className="gap-x-20 gap-y-3">
        <Typography variant="titleMd">
          Posts {!loading && `(${postListQuery?.data?.posts.totalCount})`}
        </Typography>

        <Flex className="h-[36px] md:max-w-[450px] gap-x-5" fullWidth>
          <Input
            inputClassName="h-full w-full"
            className="w-full"
            placeholder="Search ..."
            onChange={() => {}}
          />

          <NextLink href={NAVIGATION.NEW_POST} prefetch>
            <Button btnSize="small" className="text-nowrap">
              Add Post
            </Button>
          </NextLink>
        </Flex>
      </Flex>

      <div className="mt-5">
        <Table>
          <THead>
            {tHeads.map(({ label, ...trProps }, index) => {
              return (
                <Th key={index} {...trProps}>
                  {label}
                </Th>
              );
            })}
          </THead>

          <TBody>
            {!loading &&
              postListQuery?.data?.posts?.nodes?.map(item => (
                <Tr key={item.id}>
                  <Td>
                    <Link href={NAVIGATION.POST_DETAIL(item.id)}>
                      {item.title}
                    </Link>
                  </Td>

                  <Td>{item.owner?.member?.name}</Td>

                  <Td>{item.space?.name}</Td>

                  <Td>{transformDate(item.createdAt)}</Td>

                  <Td>{item.totalRepliesCount}</Td>

                  <Td>{item.reactionsCount}</Td>
                </Tr>
              ))}

            {loading &&
              Array(10)
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

export default PostListPage;
