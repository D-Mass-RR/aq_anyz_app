import { Image } from 'expo-image';
import React, { memo } from 'react';
import { Text } from 'react-native';

import { View } from '@/ui';

type Props = {
  image: string;
  title: string;
};
const CategoryCard = memo(({ image, title }: Props) => {
  return (
    <View className="mr-3 h-16 w-52 overflow-hidden rounded-xl bg-[#EFEFEF] py-2 pl-3">
      <Text className="w-28 text-base font-bold">{title}</Text>
      <Image className="absolute -bottom-4 -right-2 h-20 w-20" source={image} />
    </View>
  );
});

export { CategoryCard };
