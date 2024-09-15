import { AllHTMLAttributes } from 'react';

interface IContainerProps extends AllHTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean;
}

function Container({ className = '', fullWidth, ...props }: IContainerProps) {
  return (
    <div
      className={`py-8 ${!fullWidth && 'container px-2 mx-auto'} h-full ${className}`}
      {...props}
    ></div>
  );
}

export default Container;
