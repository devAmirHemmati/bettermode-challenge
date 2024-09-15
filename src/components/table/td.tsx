import { AllHTMLAttributes, PropsWithChildren } from 'react';

interface ITdProps extends PropsWithChildren<AllHTMLAttributes<HTMLElement>> {}

function Td({ className = '', children, ...props }: ITdProps) {
  return (
    <td
      scope="row"
      className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap ${className}`}
      {...props}
    >
      {children}
    </td>
  );
}

export default Td;
