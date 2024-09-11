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
  href?: string;
}

const variantStyles = {
  xs: 'text-[12px]',
  sm: 'text-[14px]',
  md: 'text-[16px]',
  lg: 'text-[18px]',
  xl: 'text-[20px]',
  title2Xs: 'text-[18px]',
  titleXs: 'text-[20px]',
  titleSm: 'text-[24px]',
  titleMd: 'text-[26px]',
  titleLg: 'text-[28px]',
  titleXl: 'text-[30px]',
  title2Xl: 'text-[32px]',
};

const Typography: FC<ITypographyProps> = ({
  component: Component = 'p',
  variant = 'md',
  children,
  ...props
}: ITypographyProps) => {
  return (
    <Component className={`${variantStyles[variant]}`} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
