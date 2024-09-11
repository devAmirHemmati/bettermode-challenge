import { AllHTMLAttributes, PropsWithChildren, useId } from 'react';

export interface IInputProps
  extends PropsWithChildren<AllHTMLAttributes<HTMLInputElement>> {
  type?: 'text' | 'number';
  label?: string;
  id?: string;
  inputClassName?: string;
}

function Input({
  type = 'text',
  label,
  id,
  className,
  inputClassName,
  ...props
}: IInputProps) {
  const reactId = useId();
  const _id = id || reactId;

  return (
    <div className={`${className}`}>
      {label && (
        <label
          htmlFor={_id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}

      <input
        {...props}
        type={type}
        id={_id}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all ${inputClassName}`}
      />
    </div>
  );
}

export default Input;
