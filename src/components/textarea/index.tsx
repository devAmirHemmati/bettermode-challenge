'use client';
import { AllHTMLAttributes, PropsWithChildren, useId } from 'react';

import Typography from '../typography';

export interface ITextareaProps
  extends PropsWithChildren<AllHTMLAttributes<HTMLTextAreaElement>> {
  label?: string;
  id?: string;
  inputClassName?: string;
  errorMessage?: string;
  error?: boolean;
  successMessage?: string;
  success?: boolean;
}

function Textarea({
  label,
  id,
  className,
  inputClassName,
  error,
  errorMessage,
  success,
  successMessage,
  ...props
}: ITextareaProps) {
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

      <textarea
        {...props}
        id={_id}
        rows={5}
        className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${error && 'border-red-400 focus:outline-red-400 focus:border-red-400'} ${success && 'border-green-500 focus:outline-green-500 focus:border-green-500'} resize-none ${inputClassName}`}
      />

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

export default Textarea;
