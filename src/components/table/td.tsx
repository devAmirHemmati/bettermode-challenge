import { AllHTMLAttributes, PropsWithChildren } from 'react';

import { LinedSkeleton } from '../skeleton';

interface ITdProps extends PropsWithChildren<AllHTMLAttributes<HTMLElement>> {
  loading?: boolean;
}

function Td({ className = '', children, loading, ...props }: ITdProps) {
  return (
    <td
      scope="row"
      className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap ${className}`}
      {...props}
    >
      {loading ? <LinedSkeleton /> : children}
    </td>
  );
}

export default Td;
