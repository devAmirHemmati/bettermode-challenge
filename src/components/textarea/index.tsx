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
  max?: number;
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
  max,
  onChange,
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
        id={_id}
        rows={5}
        onPaste={event => {
          event.preventDefault();
          const paste = event.clipboardData.getData('text');
          const current = event.currentTarget.value;

          if (max && current.length + paste.length > max) {
            event.preventDefault();
            return;
          }

          event.currentTarget.value += paste;

          if (onChange) {
            onChange(event);
          }
        }}
        onChange={event => {
          if (max && event.target.value.length > max) {
            return;
          }

          if (onChange) {
            onChange(event);
          }
        }}
        className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${error && 'border-red-400 focus:outline-red-400 focus:border-red-400'} ${success && 'border-green-500 focus:outline-green-500 focus:border-green-500'} resize-none ${inputClassName}`}
        {...props}
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
