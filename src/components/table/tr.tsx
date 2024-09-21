import { AllHTMLAttributes, forwardRef, PropsWithChildren } from 'react';

interface ITBodyProps
  extends PropsWithChildren<AllHTMLAttributes<HTMLElement>> {}

const Tr = forwardRef(function Tr(
  { className = '', children, ...props }: ITBodyProps,
  ref,
) {
  return (
    <tr
      className={`bg-white border-b hover:bg-gray-50 ${className}`}
      ref={ref as any}
      {...props}
    >
      {children}
    </tr>
  );
});

export default Tr;
