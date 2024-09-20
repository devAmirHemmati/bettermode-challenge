'use client';
import Image from 'next/image';
import { AllHTMLAttributes, useRef, useState } from 'react';

import { useOutsideClick } from '@/hooks';

import { ArrowDownIcon } from '../icons';
import Typography from '../typography';

interface IOption {
  label: string;
  value: string;
  imageUrl?: string;
}

export interface ISelectProps extends AllHTMLAttributes<HTMLDivElement> {
  label?: string;
  errorMessage?: string;
  error?: boolean;
  successMessage?: string;
  success?: boolean;
  hint?: string;
  options: Array<IOption>;
  value?: IOption['value'];
  onClickItem: (option: IOption, index: number) => void;
}

function Select({
  className = '',
  label,
  errorMessage,
  error,
  success,
  successMessage,
  hint,
  value,
  options,
  onClickItem,
  ...props
}: ISelectProps) {
  const activeOption = options.find(option => option.value === value);
  const selectRef = useRef<HTMLDivElement>();
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleActive = () => {
    setIsActive(true);
  };

  const handleDeActive = () => {
    setIsActive(false);
  };

  useOutsideClick(selectRef, () => {
    handleDeActive();
  });

  return (
    <div className={`relative ${className}`}>
      {label && (
        <Typography
          component="label"
          variant="md"
          className={`text-gray-900 mb-1 inline-block`}
          onClick={isActive ? handleDeActive : handleActive}
        >
          {label}
        </Typography>
      )}

      <div
        {...props}
        ref={selectRef as any}
        onClick={handleActive}
        className={`block h-[42px] p-2.5 w-full cursor-pointer text-sm text-gray-900 bg-gray-50 rounded-lg border transition-all ${!isActive && 'hover:border-gray-400  border-gray-300'} ${isActive && 'ring-blue-500 border-blue-500'} ${error && 'border-red-400 focus:outline-red-400 focus:border-red-400'} ${success && 'border-green-500 focus:outline-green-500 focus:border-green-500'}`}
      >
        <div className="flex items-center justify-between">
          {activeOption && (
            <div className="flex items-center">
              {activeOption.imageUrl && (
                <Image
                  src={activeOption.imageUrl}
                  alt={activeOption.label}
                  className="mr-2"
                  width={20}
                  height={20}
                />
              )}

              <Typography variant="sm">{activeOption.label}</Typography>
            </div>
          )}

          <ArrowDownIcon className="transition-all ml-auto" rotate={isActive} />
        </div>
      </div>

      <div
        className={`absolute left-0 top-[calc(100%+3px)] w-full bg-gray-50 rounded-lg border border-gray-300 transition-all ${!isActive && 'collapse opacity-0'}`}
      >
        {options.map((option, index) => (
          <div
            className="p-2.5 cursor-pointer hover:bg-gray-100 transition-all rounded-md flex items-center active:bg-gray-200"
            key={index}
            onClick={() => {
              onClickItem(option, index);
              handleDeActive();
            }}
          >
            {option.imageUrl && (
              <Image
                src={option.imageUrl}
                alt={option.label}
                className="mr-2"
                width={20}
                height={20}
              />
            )}

            <Typography variant="sm">{option.label}</Typography>
          </div>
        ))}
      </div>

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

export default Select;
