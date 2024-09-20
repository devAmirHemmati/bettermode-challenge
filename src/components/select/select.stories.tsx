import type { Meta } from '@storybook/react';
import { useState } from 'react';

import Select, { ISelectProps } from '.';

const meta = {
  title: 'Component/Select',
  component: Select,
  argTypes: {},
} satisfies Meta<typeof Select>;

export const WithImage = ({ label = 'User type', ...props }: ISelectProps) => {
  const [value, setValue] = useState<string>();
  const options = Array(5)
    .fill(null)
    .map((_, index) => ({
      label: `Item ${index}`,
      value: index.toString(),
      imageUrl: '/icon/home-line.svg',
    }));

  return (
    <Select
      {...props}
      label={label}
      value={value}
      onClickItem={option => {
        setValue(option.value);
      }}
      options={options}
    />
  );
};

export const WithoutImage = ({
  label = 'User type',
  ...props
}: ISelectProps) => {
  const [value, setValue] = useState<string>();
  const options = Array(5)
    .fill(null)
    .map((_, index) => ({
      label: `Item ${index}`,
      value: index.toString(),
    }));

  return (
    <Select
      {...props}
      label={label}
      value={value}
      onClickItem={option => {
        setValue(option.value);
      }}
      options={options}
    />
  );
};

export default meta;
