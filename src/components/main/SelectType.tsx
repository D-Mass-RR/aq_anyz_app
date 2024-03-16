import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { Text, View } from '@/ui';

const SelectType = () => {
  const [isDeliveryMode, setIsDelivery] = useState(true);
  return (
    <View className="flex h-14 w-full flex-row rounded-2xl bg-white  shadow-md shadow-stone-200">
      <TouchableOpacity
        onPress={() => setIsDelivery(true)}
        className={twMerge([
          'w-1/2 items-center justify-center rounded-2xl',
          isDeliveryMode && ' bg-orange-500',
        ])}
      >
        <Text className={twMerge(['text-2xl', isDeliveryMode && 'text-white'])}>
          Доставка
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsDelivery(false)}
        className={twMerge([
          'w-1/2 items-center justify-center rounded-2xl',
          !isDeliveryMode && ' bg-orange-500',
        ])}
      >
        <Text
          className={twMerge(['text-2xl', !isDeliveryMode && 'text-white'])}
        >
          Самовывоз
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export { SelectType };
