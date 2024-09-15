import { ApolloQueryResult } from '@apollo/client';
import Link from 'next/link';

import {
  Button,
  Container,
  Flex,
  Input,
  Table,
  TBody,
  Td,
  Th,
  THead,
  Tr,
  Typography,
} from '@/components';
import NAVIGATION from '@/data/routes';
import { MyAwesomePostsQuery } from '@/gql/generated';

interface IPostListPage {
  postListQuery?: ApolloQueryResult<MyAwesomePostsQuery | undefined>;
  loading?: boolean;
}

function PostListPage({ postListQuery }: IPostListPage) {
  console.log(postListQuery);

  return (
    <Container>
      <Flex justify="between" flexWrap className="gap-x-20 gap-y-3">
        <Typography variant="titleMd">Posts (14)</Typography>

        <Flex className="h-[36px] md:max-w-[450px] gap-x-5" fullWidth>
          <Input
            inputClassName="h-full w-full"
            className="w-full"
            placeholder="Search ..."
            onChange={() => {}}
          />

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
            <Th>Title</Th>

            <Th>Author</Th>

            <Th>Space</Th>

            <Th hasArrow>Published at</Th>

            <Th hasArrow>Replies</Th>

            <Th hasArrow>Reactions</Th>
          </THead>

          <TBody>
            {Array(10)
              .fill(null)
              .map((_, index) => (
                <Tr key={index}>
                  <Td>Lorem</Td>

                  <Td>Amir Hemmati</Td>

                  <Td>Discussions</Td>

                  <Td>09/08/2024</Td>

                  <Td>0</Td>

                  <Td>0</Td>
                </Tr>
              ))}
          </TBody>
        </Table>
      </div>
    </Container>
  );
}

export default PostListPage;
