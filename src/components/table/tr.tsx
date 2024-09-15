import { AllHTMLAttributes, PropsWithChildren } from 'react';

interface ITBodyProps
  extends PropsWithChildren<AllHTMLAttributes<HTMLElement>> {}

export function Tr({ className = '', children, ...props }: ITBodyProps) {
  return (
    <tr
      className={`bg-white border-b hover:bg-gray-50 ${className}`}
      {...props}
    >
      {children}
    </tr>
  );
}

export function Td({ className = '', children, ...props }: ITBodyProps) {
  return (
    <th
      scope="row"
      className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap ${className}`}
      {...props}
    >
      {children}
    </th>
  );
}

export default Tr;
