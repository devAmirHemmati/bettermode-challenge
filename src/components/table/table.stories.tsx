import type { Meta } from '@storybook/react';

import Table, { ITableProps } from '.';
import TBody from './tBody';
import THead from './tHead';
import Tr, { Td } from './tr';

const meta = {
  title: 'Component/Table',
  component: Table,
  argTypes: {},
} satisfies Meta<typeof Table>;

export const Single = ({}: ITableProps) => {
  return (
    <Table>
      <THead>
        <Td>Title</Td>

        <Td>Author</Td>

        <Td>Space</Td>

        <Td>Published at</Td>

        <Td>Replies</Td>

        <Td>Reactions</Td>
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
