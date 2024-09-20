import { AllHTMLAttributes } from 'react';

interface IFlexProps extends AllHTMLAttributes<HTMLDivElement> {
  justify?: 'center' | 'end' | 'start' | 'between';
  align?: 'center' | 'start' | 'end' | 'stretch' | 'between';
  column?: boolean;
  reverse?: boolean;
  flexWrap?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

function Flex({
  children,
  className = '',
  justify = 'start',
  align = 'center',
  reverse,
  column,
  flexWrap,
  fullWidth,
  fullHeight,
  ...props
}: IFlexProps) {
  return (
    <div
      className={`
        flex
        justify-${justify}
        items-${align}
        ${fullWidth && 'w-full'}
        ${fullHeight && 'h-full'}
        ${flexWrap && 'flex-wrap'}
        ${!column && reverse && 'flex-row-reverse'}
        ${column && reverse && 'flex-col-reverse'}
        ${column && 'flex-col'}
        ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Flex;
