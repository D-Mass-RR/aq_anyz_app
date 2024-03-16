import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';
import type { FC } from 'react';
import React from 'react';
import { Text as RNText } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { CategoryCard } from '@/components/cards/CategoryCard';
import { Text, TouchableOpacity, View } from '@/ui';

import type { Category } from '../../../__mocks__/categories';
import CheckRoundedSvg from '../../../assets/svg/CheckRoundedSvg';
import { Separator } from '../Separator';

type Props = {
  title: string;
  type: string;
  categories: Category[];
  distance: string;
  onSelect: (id: string) => void;
  id: string;
  active: boolean;
  image: string;
};
const RestaurantCard: FC<Props> = ({
  categories,
  type,
  title,
  distance,
  onSelect,
  id,
  active,
  image,
}) => {
  const onPress = () => {
    onSelect(id);
  };
  return (
    <View
      className={twMerge([
        'm-3 w-full rounded-xl bg-white px-4 pb-5 pt-4 shadow-md shadow-charcoal-100',
        active && 'border-orange-500 border-[1px]',
      ])}
    >
      {active && (
        <View className="absolute right-2 top-2">
          <CheckRoundedSvg />
        </View>
      )}
      <TouchableOpacity
        onPress={onPress}
        className="flex flex-row items-center gap-4"
      >
        <View className="h-16 w-16">
          <Image className="h-full w-full" contentFit="cover" source={image} />
        </View>
        <View>
          <RNText className="text-2xl font-medium">{title}</RNText>
          <View className="mt-0.5 w-full flex-row items-center justify-between">
            <Text className="text-xl">{type}</Text>
          </View>
        </View>
        <View className="absolute right-0">
          <Text className="mt-9 text-base text-[#FB631D]">{distance}</Text>
        </View>
      </TouchableOpacity>
      <Separator className="mb-5 mt-4" />
      <FlashList
        renderItem={({ item }) => (
          <CategoryCard title={item.title} image={item.image} />
        )}
        data={[...categories, ...categories]}
        horizontal
        estimatedItemSize={200}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export { RestaurantCard };
