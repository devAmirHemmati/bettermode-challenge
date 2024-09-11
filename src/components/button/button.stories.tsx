import type { Meta } from '@storybook/react';

import Typography from '../typography';
import Button, { IButtonProps } from '.';

const meta = {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['primary', 'neutral'],
    },
  },
} satisfies Meta<typeof Button>;

export const All = ({ children = 'Submit', ...props }: IButtonProps) => {
  const variants: Array<IButtonProps['variant']> = ['primary', 'neutral'];

  return (
    <ul className="w-[80%] mx-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {variants.map((variant) => (
        <li
          key={variant}
          className="w-full px-4 py-5 border-b border-gray-200 rounded-t-lg dark:border-gray-600 flex items-center justify-between"
        >
          <Typography>{variant}</Typography>

          <Button {...props} variant={variant}>
            {children}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export const Single = ({
  children = 'Submit',
  variant = 'primary',
  ...props
}: IButtonProps) => {
  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  );
};

export default meta;
