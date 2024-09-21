'use client';
import { useCallback, useEffect, useState } from 'react';

export interface UseIntersectedElementProps {
  callback: () => void;
  options?: IntersectionObserverInit;
}

const useIntersectedElement = <ThresholdElement extends Element = Element>({
  callback,
  options,
}: UseIntersectedElementProps) => {
  const [thresholdElement, setThresholdElement] =
    useState<ThresholdElement | null>(null);

  const thresholdElementRef = useCallback(
    (element: ThresholdElement | null) => {
      setThresholdElement(element);
    },
    [],
  );

  useEffect(() => {
    if (!thresholdElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(thresholdElement);

    return () => {
      observer.unobserve(thresholdElement);
      observer.disconnect();
    };
  }, [callback, options, thresholdElement]);

  return { thresholdElementRef };
};

export default useIntersectedElement;
