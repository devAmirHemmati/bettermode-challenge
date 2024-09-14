import type { Meta } from '@storybook/react';

import Typography from '../typography';
import Card, { ICardProps } from '.';

const meta = {
  title: 'Component/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export const Single = ({ ...props }: ICardProps) => {
  return (
    <div className="w-[80%] mx-auto mt-4">
      <Card {...props}>
        <Typography variant="titleMd">Add New Post</Typography>

        <Typography variant="md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi
          vel esse sequi ducimus numquam ab. Tempore reprehenderit nihil
          dignissimos.
        </Typography>
      </Card>
    </div>
  );
};

export default meta;
