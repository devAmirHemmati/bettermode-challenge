import { AllHTMLAttributes, PropsWithChildren, useId } from 'react';

import Typography from '../typography';

export interface IInputProps
  extends PropsWithChildren<AllHTMLAttributes<HTMLInputElement>> {
  type?: 'text' | 'number';
  label?: string;
  id?: string;
  inputClassName?: string;
  errorMessage?: string;
  error?: boolean;
  successMessage?: string;
  success?: boolean;
  hint?: string;
}

function Input({
  type = 'text',
  label,
  id,
  className = '',
  inputClassName = '',
  success,
  hint,
  successMessage,
  error,
  errorMessage,
  onChange,
  max,
  ...props
}: IInputProps) {
  const reactId = useId();
  const _id = id || reactId;

  return (
    <div className={`${className}`}>
      {label && (
        <Typography
          htmlFor={_id}
          component="label"
          variant="md"
          className={`text-gray-900 block mb-1`}
        >
          {label}
        </Typography>
      )}

      <input
        {...props}
        type={type}
        id={_id}
        className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${error && 'border-red-400 focus:outline-red-400 focus:border-red-400'} ${success && 'border-green-500 focus:outline-green-500 focus:border-green-500'} ${inputClassName}`}
        onChange={
          typeof window !== 'undefined'
            ? (event) => {
                if (max && event.target.value.length > parseInt(`${max}`)) {
                  return;
                }

                if (typeof onChange === 'function') {
                  onChange(event);
                }
              }
            : undefined
        }
      />

      {hint && !success && !error && !errorMessage && !successMessage && (
        <Typography variant="sm" className="mt-1 text-gray-600">
          {hint}
        </Typography>
      )}

      {success && successMessage && (
        <Typography variant="sm" className="mt-1 text-green-500">
          {successMessage}
        </Typography>
      )}

      {error && errorMessage && (
        <Typography variant="sm" className="mt-1 text-red-400">
          {errorMessage}
        </Typography>
      )}
    </div>
  );
}

export default Input;
