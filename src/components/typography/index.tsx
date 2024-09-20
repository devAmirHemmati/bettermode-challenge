import {
  AllHTMLAttributes,
  type ElementType,
  type FC,
  PropsWithChildren,
} from 'react';

export interface ITypographyProps
  extends PropsWithChildren<AllHTMLAttributes<HTMLElement>> {
  component?: ElementType;
  variant?: keyof typeof variantStyles;
  align?: 'center' | 'left' | 'right' | 'justify';
  href?: string;
}

const variantStyles = {
  xs: 'text-[12px]',
  sm: 'text-[14px]',
  md: 'text-[16px]',
  lg: 'text-[18px]',
  xl: 'text-[20px]',
  title2Xs: 'text-[18px] font-medium',
  titleXs: 'text-[20px] font-medium',
  titleSm: 'text-[24px] font-medium',
  titleMd: 'text-[26px] font-medium',
  titleLg: 'text-[28px] font-bold',
  titleXl: 'text-[30px] font-bold',
  title2Xl: 'text-[32px] font-bold',
};

const Typography: FC<ITypographyProps> = ({
  component: Component = 'p',
  variant = 'md',
  className = '',
  align = 'left',
  children,
  ...props
}: ITypographyProps) => {
  return (
    <Component
      className={`${variantStyles[variant]} text-${align} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
