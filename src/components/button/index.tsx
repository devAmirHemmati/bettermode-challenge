import { AllHTMLAttributes, PropsWithChildren } from 'react';

export interface IButtonProps
  extends PropsWithChildren<AllHTMLAttributes<HTMLButtonElement>> {
  type?: 'button' | 'submit';
  variant?: keyof typeof variantStyles;
  fullWidth?: boolean;
  loading?: boolean;
  btnSize?: keyof typeof sizeStyles;
}

const variantStyles = {
  neutral:
    'bg-white hover:bg-gray-100 border-gray-500 text-gray-500 disabled:hover:bg-blue-500 disabled:hover:bg-white disabled:hover:border-gray-700',
  primary:
    'bg-blue-700 hover:bg-blue-500 border-blue-700 hover:border-blue-500 text-white disabled:hover:bg-blue-700 disabled:hover:border-blue-700',
};

const sizeStyles = {
  small: 'font-bold text-[14px] h-[35px] py-0 px-2',
  medium: 'font-bold py-2 px-4',
};

function Button({
  children,
  type = 'button',
  className = '',
  variant = 'primary',
  fullWidth,
  btnSize = 'medium',
  disabled,
  loading,
  ...props
}: IButtonProps) {
  return (
    <button
      type={type}
      className={`border rounded transition-all active:scale-95 disabled:opacity-70 disabled:active:scale-100 ${variantStyles[variant]} ${sizeStyles[btnSize]} ${fullWidth && 'w-full'} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
