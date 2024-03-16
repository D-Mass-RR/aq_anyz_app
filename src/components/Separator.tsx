import type { FC } from 'react';
import React from 'react';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

const Separator: FC<{ className?: string }> = ({ className }) => (
  <View
    className={twMerge(['w-full border-[1px] border-[#EEEEEE]', className])}
  />
);

export { Separator };
