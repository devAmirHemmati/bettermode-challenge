import NextLink, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

import Typography, { ITypographyProps } from '../typography';

export interface ILinkProps extends PropsWithChildren<LinkProps> {
  variant?: ITypographyProps['variant'];
  typographyProps?: ITypographyProps;
  className?: string;
}

function TypographyLink({
  children,
  variant = 'md',
  className = '',
  ...props
}: ILinkProps) {
  return (
    <NextLink {...props}>
      <Typography
        component="span"
        className={`text-blue-400 hover:text-blue-600 hover:underline transition-all ${className}`}
        variant={variant}
      >
        {children}
      </Typography>
    </NextLink>
  );
}

export default TypographyLink;
