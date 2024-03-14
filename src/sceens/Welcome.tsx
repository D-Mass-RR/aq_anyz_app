import { Image } from 'expo-image';
import React, { useState } from 'react';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';

import { Title } from '@/components/title';
import { AnimatedPlovImage } from '@/components/welcome/AnimatedPlovImage';
import { Indicators } from '@/components/welcome/Indicators';
import { Button, SafeAreaView, Text, View } from '@/ui';

import ArrowRightSvg from '../../assets/icons/ArrowRightSvg';

const DeliveryImage = () => {
  return (
    <Animated.View
      className="h-full w-full justify-end"
      entering={FadeInRight.duration(700).mass(10)}
      exiting={FadeOutLeft.duration(700)}
    >
      <Image
        className="h-4/5 w-full"
        source={require('../../assets/images/delivery.png')}
      />
    </Animated.View>
  );
};
const CustomerImage = () => {
  return (
    <Animated.View
      className="mt-12 h-5/6 w-full justify-end"
      entering={FadeInRight.duration(700)}
      exiting={FadeOutLeft.duration(700)}
    >
      <Image
        className="h-full w-full"
        source={require('../../assets/images/customer.png')}
      />
    </Animated.View>
  );
};

const slides = [<AnimatedPlovImage />, <DeliveryImage />, <CustomerImage />];
const text = [
  'Начните ваше гастрономическое путешествие вместе с нашими блюдами',
  'Заказывайте доставку и получайте кэшбэк после каждого заказа',
  'Проголодались в пути? Заберите заказ в удобное для вас время',
];
const titles = [
  'Добро пожаловать в Aqkiiz!',
  'Доставим вашу еду куда угодно',
  'Сделайте предзаказ на самовывоз',
];
export default function Welcome() {
  const [activeSlideId, setActiveSlideId] = useState(0);

  const next = () => {
    if (activeSlideId < 2) {
      setActiveSlideId((prev) => prev + 1);
    }
  };

  const skip = () => {};

  return (
    <SafeAreaView className="flex h-full w-full items-center justify-start bg-white">
      <Indicators activeId={activeSlideId} />
      <View className="h-[60%] w-full items-center px-7">
        {slides[activeSlideId]}
      </View>
      <View className="h-[43%] w-full items-center justify-between bg-white px-6 py-10">
        <View className="items-center">
          <Title text={titles[activeSlideId]} />
          <Text className="mt-5 text-center text-2xl font-light text-black">
            {text[activeSlideId]}
          </Text>
        </View>
        <View className="mb-6 flex w-full flex-row justify-between">
          <Button
            onPress={skip}
            label="Пропустить"
            size="sm"
            textClassName="text-[#FB631D]"
          />
          <Button
            onPress={next}
            label="Далее"
            size="sm"
            className="bg-[#FB631D]"
            iconR={<ArrowRightSvg />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
