import { AllHTMLAttributes, PropsWithChildren } from 'react';

export interface ICardProps
  extends PropsWithChildren<AllHTMLAttributes<HTMLDivElement>> {}

function Card({ className, children, ...props }: ICardProps) {
  return (
    <div
      className={`block w-full p-6 bg-white border border-gray-200 rounded-lg shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
