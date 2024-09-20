import { AllHTMLAttributes } from 'react';

import Typography from '../typography';

interface IAvatarProps extends AllHTMLAttributes<HTMLDivElement> {
  fullName: string;
}

function Avatar({ fullName = '', className = '', ...props }: IAvatarProps) {
  return (
    <div
      className={`w-[48px] h-[48px] rounded-full flex justify-center items-center uppercase bg-green-200 ${className}`}
      {...props}
    >
      <Typography variant="md">{fullName?.slice(0, 1)}</Typography>
    </div>
  );
}

export default Avatar;
