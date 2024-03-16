import type { Category } from '__mocks__/categories';
import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import type { FC } from 'react';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Text, TouchableOpacity } from '@/ui';

type Props = {
  data: Category[];
};
const CategoriesSlider: FC<Props> = ({ data }) => {
  const [activeItem, setActiveItem] = useState<number>();
  return (
    <FlashList
      data={data}
      horizontal
      estimatedItemSize={98}
      extraData={activeItem}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => setActiveItem(item.id)}
          className="ml-4 flex items-center justify-center"
        >
          <Image className="h-24 w-24" source={item.image} />
          <Text
            className={twMerge([
              'mt-2 text-xl',
              activeItem === item.id && 'text-[#FB631D]',
            ])}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export { CategoriesSlider };
