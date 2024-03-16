import type { CardData } from '__mocks__/foods';
import HeartSvg from 'assets/svg/HeartSvg';
import { Image } from 'expo-image';
import type { FC } from 'react';
import React, { useState } from 'react';
import { Text as RNText } from 'react-native';

import { Text, TouchableOpacity, View } from '@/ui';

type Props = {
  data: CardData;
};

const FoodCard: FC<Props> = ({
  data: { image, title, description, price },
}) => {
  const [favorite, setFavorite] = useState(false);
  const onPress = () => {
    setFavorite((prev) => !prev);
  };
  return (
    <View className="flex h-44 w-full flex-row overflow-hidden rounded-xl">
      <TouchableOpacity
        onPress={onPress}
        className="absolute left-2 top-2 z-10 h-8 w-8 items-center justify-center rounded-full bg-white"
      >
        <HeartSvg fill={favorite ? '#FB631D' : 'none'} />
      </TouchableOpacity>
      <Image
        className="left-0 h-full w-[40%]"
        contentFit="cover"
        source={image}
      />
      <View className="absolute right-0 h-full w-[62%] justify-between rounded-l-2xl bg-white px-4 py-2">
        <View>
          <RNText className="text-2xl font-normal">{title}</RNText>
          <Text className="mt-1 text-sm leading-tight text-[#C1C1C1]">
            {description}
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-2xl">{price}</Text>
          <TouchableOpacity className="rounded-xl border-[1px] border-[#FB631D] px-4 py-2">
            <Text className="text-lg">В коризну</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export { FoodCard };
