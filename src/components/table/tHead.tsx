import { AllHTMLAttributes } from 'react';

interface ITHeadProps extends AllHTMLAttributes<HTMLElement> {
  trClassName?: string;
}

function THead({
  className = '',
  trClassName = '',
  children,
  ...props
}: ITHeadProps) {
  return (
    <thead
      className={`text-xs text-gray-700 uppercase bg-gray-50 ${className}`}
      {...props}
    >
      <tr className={trClassName}>{children}</tr>
    </thead>
  );
}

export default THead;
