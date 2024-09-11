import type { Meta } from '@storybook/react';

import Textarea, { ITextareaProps } from '.';

const meta = {
  title: 'Component/Textarea',
  component: Textarea,
  argTypes: {},
} satisfies Meta<typeof Textarea>;

export const Single = ({ label = 'Description', ...props }: ITextareaProps) => {
  return <Textarea label={label} {...props} />;
};

export default meta;
