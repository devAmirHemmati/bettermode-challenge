import { AllHTMLAttributes } from 'react';

export interface IIconProps extends AllHTMLAttributes<SVGElement> {
  width?: string;
  height?: string;
  color?: string;
}

export { default as ArrowDown } from './arrowDown';
export { default as BackIcon } from './back';
