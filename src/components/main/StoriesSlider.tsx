import type { Story } from '__mocks__/stories';
import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import type { FC } from 'react';
import React from 'react';
import { Text } from 'react-native';

import { View } from '@/ui';

type Props = {
  stories: Story[];
};

const StoriesSlider: FC<Props> = ({ stories }) => {
  return (
    <FlashList
      data={stories}
      horizontal
      estimatedItemSize={250}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View className="ml-2 h-52 w-44 rounded-xl border-[5px] border-[#FB921D] p-1">
          <Image
            contentFit="cover"
            className="h-full w-full rounded-md"
            source={item.image}
          />
          <Text className="absolute bottom-2 left-3 font-gropled text-xl font-bold leading-tight text-white">
            {item.title}
          </Text>
        </View>
      )}
    />
  );
};

export { StoriesSlider };
