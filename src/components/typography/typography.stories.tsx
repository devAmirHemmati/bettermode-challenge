import type { Meta } from '@storybook/react';

import Typography, { ITypographyProps } from '.';

const meta = {
  title: 'Component/Typography',
  component: Typography,
  argTypes: {
    children: {
      type: 'string',
    },
    variant: {
      control: 'select',
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'title2Xs',
        'titleXs',
        'titleSm',
        'titleMd',
        'titleLg',
        'titleXl',
        'title2Xl',
      ],
    },
  },
} satisfies Meta<typeof Typography>;

export const All = ({
  children = 'Lorem ipsum dolor sit amet.',
  ...props
}: ITypographyProps) => {
  const variants: Array<ITypographyProps['variant']> = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'title2Xs',
    'titleXs',
    'titleSm',
    'titleMd',
    'titleLg',
    'titleXl',
    'title2Xl',
  ];

  return (
    <div>
      <ul className="w-[80%] mx-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {variants.reverse().map((variant) => {
          return (
            <li
              key={variant}
              className="w-full px-4 py-5 border-b border-gray-200 rounded-t-lg dark:border-gray-600 flex items-center justify-between"
            >
              <Typography variant="xl">{variant}</Typography>

              <Typography {...props} variant={variant}>
                {children}
              </Typography>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Single = ({
  children = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cumque.',
  variant = 'xl',
  ...props
}: ITypographyProps) => {
  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  );
};

export default meta;
