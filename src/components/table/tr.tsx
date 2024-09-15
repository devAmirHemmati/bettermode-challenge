import { AllHTMLAttributes, PropsWithChildren } from 'react';

interface ITBodyProps
  extends PropsWithChildren<AllHTMLAttributes<HTMLElement>> {}

function Tr({ className = '', children, ...props }: ITBodyProps) {
  return (
    <tr
      className={`bg-white border-b hover:bg-gray-50 ${className}`}
      {...props}
    >
      {children}
    </tr>
  );
}

export default Tr;
