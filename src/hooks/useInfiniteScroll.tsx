'use client';
import useIntersectedElement, {
  UseIntersectedElementProps,
} from './useIntersectedElement';

interface UseInfiniteScrollProps {
  fetchNextPage: () => void;
  options?: UseIntersectedElementProps['options'];
}

const useInfiniteScroll = <ThresholdElement extends Element = Element>({
  fetchNextPage,
  options = {},
}: UseInfiniteScrollProps) => {
  const { thresholdElementRef } = useIntersectedElement<ThresholdElement>({
    callback: fetchNextPage,
    options,
  });

  return { thresholdElementRef };
};

export default useInfiniteScroll;
