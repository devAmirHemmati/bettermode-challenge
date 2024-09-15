import type { Meta } from '@storybook/react';

import Table, { ITableProps } from '.';
import TBody from './tBody';
import Td from './td';
import Th from './th';
import THead from './tHead';
import Tr from './tr';

const meta = {
  title: 'Component/Table',
  component: Table,
  argTypes: {},
} satisfies Meta<typeof Table>;

export const Single = ({}: ITableProps) => {
  return (
    <Table>
      <THead>
        <Th>Title</Th>

        <Th>Author</Th>

        <Th>Space</Th>

        <Th>Published at</Th>

        <Th hasArrow>Replies</Th>

        <Th hasArrow arrow="top">
          Reactions
        </Th>
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
  );
};

export default meta;
