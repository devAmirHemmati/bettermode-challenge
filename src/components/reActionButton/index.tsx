'use client';
import { AllHTMLAttributes, useRef, useState } from 'react';

import { useOutsideClick } from '@/hooks';

import Flex from '../flex';
import { HeartIcon } from '../icons';

export enum EMOJI_KEY {
  LIKE = '+1',
  HEART = 'heart',
  TADA = 'tada',
  MOUTH = 'open_mouth',
}

export const emojiItems = [
  {
    label: '👍',
    key: EMOJI_KEY.LIKE,
  },
  {
    label: '❤️',
    key: EMOJI_KEY.HEART,
  },
  {
    label: '🎉',
    key: EMOJI_KEY.TADA,
  },
  {
    label: '😮',
    key: EMOJI_KEY.MOUTH,
  },
];

interface IReActionButtonProps extends AllHTMLAttributes<HTMLDivElement> {
  labelKey?: EMOJI_KEY;
  activeItems: EMOJI_KEY[];
  onClickItem(key: EMOJI_KEY): void;
}

function ReActionButton({
  className = '',
  labelKey,
  activeItems,
  onClickItem,
  ...props
}: IReActionButtonProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>();

  const handleActive = () => {
    setIsActive(true);
  };

  const handleDeActive = () => {
    setIsActive(false);
  };

  useOutsideClick(wrapperRef, () => {
    handleDeActive();
  });

  const activeLabel = emojiItems?.find(e => e.key === labelKey);
  return (
    <div className={`relative ${className}`} {...props}>
      <div
        className="rounded-2xl border border-gray-300 hover:border-gray-400 transition-all px-4 py-1.5 cursor-pointer h-[38px]"
        onClick={handleActive}
      >
        {activeLabel ? activeLabel?.label : <HeartIcon />}
      </div>

      <div
        className={`flex transition-all items-center justify-center absolute bottom-[calc(100%+5px)] left-0 border border-gray-300 rounded-2xl bg-white px-2 ${!isActive && 'collapse opacity-0'} py-2 gap-2`}
        ref={wrapperRef as any}
      >
        {emojiItems.map((item, index) => (
          <Flex
            justify="center"
            align="center"
            className={`cursor-pointer px-1.5 text-[20px] hover:text-[23px] transition-all active:scale-75 w-[35px] h-[35px] rounded-full ${activeItems.some(key => key === item.key) && 'bg-gray-100'}`}
            onClick={() => {
              setIsActive(false);
              onClickItem(item.key);
            }}
            key={index}
          >
            {item.label}
          </Flex>
        ))}
      </div>
    </div>
  );
}

export default ReActionButton;
