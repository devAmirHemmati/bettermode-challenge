import type { Meta } from '@storybook/react';

import Input, { IInputProps } from '.';

const meta = {
  title: 'Component/Input',
  component: Input,
  argTypes: {},
} satisfies Meta<typeof Input>;

export const Single = ({ label = 'Full Name', ...props }: IInputProps) => {
  return <Input label={label} error errorMessage="Hello World" {...props} />;
};

export default meta;
