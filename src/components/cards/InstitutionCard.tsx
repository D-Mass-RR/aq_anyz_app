import { Image } from 'expo-image';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { Text, View } from '@/ui';

type Slug = string;
type Props = {
  restaurant_images: string[];
  title: string;
  imageClass?: string;
  onPress?: (id: Slug) => void;
  id: Slug;
} & PropsWithChildren;

const InstitutionCard: FC<Props> = ({
  children,
  restaurant_images,
  title,
  imageClass,
  onPress,
  id,
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress(id);
    } else {
      console.warn('onPress param is undefined type');
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="z-30 w-full overflow-hidden rounded-2xl bg-white p-4 shadow-md shadow-stone-200"
    >
      <Text className="text-2xl">{title}</Text>
      <View className="mt-3 flex w-fit flex-row gap-2.5">
        {restaurant_images.map((item, index) => (
          <Image
            key={index}
            className={twMerge(['h-10 w-10', imageClass])}
            source={item}
          />
        ))}
      </View>
      {children}
    </TouchableOpacity>
  );
};

export { InstitutionCard };
