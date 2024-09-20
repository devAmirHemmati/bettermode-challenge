import { AllHTMLAttributes, PropsWithChildren } from 'react';

import { ArrowDownIcon } from '../icons';

interface IThProps extends PropsWithChildren<AllHTMLAttributes<HTMLElement>> {
  hasArrow?: boolean;
  arrow?: 'top' | 'bottom';
}

function Th({ className = '', children, arrow, hasArrow, ...props }: IThProps) {
  return (
    <th
      scope="row"
      className={`px-6 py-4 font-bold normal-case whitespace-nowrap ${!hasArrow && 'text-gray-900'} ${hasArrow && 'text-blue-500 hover:text-blue-700 cursor-pointer transition-all'} ${className}`}
      {...props}
    >
      <div className="flex items-center gap-2">
        {children}

        {hasArrow && typeof arrow === 'string' && (
          <ArrowDownIcon
            width="16px"
            height="16px"
            rotate={arrow === 'top'}
            className="cursor-pointer transition-all"
          />
        )}
      </div>
    </th>
  );
}

export default Th;
