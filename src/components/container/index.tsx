import { AllHTMLAttributes } from 'react';

interface IContainerProps extends AllHTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean;
  fullHeight?: boolean;
}

function Container({
  className = '',
  fullWidth,
  fullHeight,
  children,
  ...props
}: IContainerProps) {
  return (
    <div
      className={`py-[30px]  ${!fullWidth && 'container px-2 mx-auto'} h-full ${fullHeight && 'lg:h-[calc(100vh)]'} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
