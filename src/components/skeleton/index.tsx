import { AllHTMLAttributes } from 'react';

interface ILinedSkeletonProps extends AllHTMLAttributes<HTMLDivElement> {
  noRounded?: boolean;
  fullHeight?: boolean;
  full?: boolean;
}

export function LinedSkeleton({
  className = '',
  noRounded,
  fullHeight,
  full,
  ...props
}: ILinedSkeletonProps) {
  return (
    <div
      className={`bg-gray-200 ${!noRounded && 'rounded-full'} w-full ${fullHeight ? 'h-full' : 'h-4 '} ${full && 'absolute left-0 top-0 w-full h-full'} ${className}`}
      {...props}
    />
  );
}
