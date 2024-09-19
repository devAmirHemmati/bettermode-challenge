import { AllHTMLAttributes } from 'react';

interface ILinedSkeletonProps extends AllHTMLAttributes<HTMLDivElement> {
  noRounded?: boolean;
  fullHeight?: boolean;
}

export function LinedSkeleton({
  className = '',
  noRounded,
  fullHeight,
  ...props
}: ILinedSkeletonProps) {
  return (
    <div
      className={`h-4 bg-gray-200 ${!noRounded && 'rounded-full'} dark:bg-gray-700 w-full ${fullHeight && 'h-full'} ${className}`}
      {...props}
    />
  );
}
