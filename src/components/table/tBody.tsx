import { AllHTMLAttributes, PropsWithChildren } from 'react';

interface ITBodyProps
  extends PropsWithChildren<AllHTMLAttributes<HTMLElement>> {}

function TBody({ className = '', children, ...props }: ITBodyProps) {
  return (
    <tbody className={className} {...props}>
      {children}
    </tbody>
  );
}

export default TBody;
