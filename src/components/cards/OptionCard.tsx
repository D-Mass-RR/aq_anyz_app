import type { FC } from 'react';
import React, { type PropsWithChildren } from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { TouchableOpacity } from '@/ui';

type Props = {
  className?: string;
} & PropsWithChildren &
  TouchableOpacityProps;

const OptionCard: FC<Props> = ({ className, children, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      className={twMerge([
        className,
        'w-[48%] items-center justify-center rounded-2xl bg-white py-11 shadow-md shadow-charcoal-100',
      ])}
    >
      {children}
    </TouchableOpacity>
  );
};

export { OptionCard };
