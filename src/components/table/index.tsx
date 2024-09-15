import { AllHTMLAttributes, PropsWithChildren } from 'react';

export interface ITableProps
  extends PropsWithChildren<AllHTMLAttributes<HTMLTableElement>> {
  wrapperClassName?: string;
}

function Table({
  children,
  className = '',
  wrapperClassName = '',
  ...props
}: ITableProps) {
  return (
    <div
      className={`relative overflow-x-auto shadow-md sm:rounded-lg ${wrapperClassName}`}
    >
      <table
        className={`w-full text-sm text-left rtl:text-right text-gray-500 ${className}`}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

export default Table;
