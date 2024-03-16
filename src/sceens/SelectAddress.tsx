import {
  categories_aq_anyz,
  categories_vostochnui_dvor,
} from '__mocks__/categories';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { RestaurantCard } from '@/components/cards/RestaurantCard';
import { Title } from '@/components/title';
import { Button, SafeAreaView, TouchableOpacity, View } from '@/ui';

import ArrowBack from '../../assets/svg/ArrowBack';

export default function SelectAddress({}) {
  const [selectedId, setSelectedId] = useState<string>();
  const onSelect = (id: string) => {
    setSelectedId(id);
  };
  const navigation = useNavigation();
  const onPress = () => {
    if (selectedId === 'aq_anyz') {
      // @ts-ignore
      navigation.navigate('Tabs' as never, {
        title: 'Aq anyz',
        image: require('../../assets/images/institutions/aqanyz.png'),
        type: 'Семейный ресторан',
      });
    } else {
      // @ts-ignore
      navigation.navigate('Tabs' as never, {
        title: 'Восточный двор',
        image: require('../../assets/images/institutions/vostochnuidvor.png'),
        type: 'Ресторан',
      });
    }
  };
  return (
    <SafeAreaView className="h-full flex-1 items-center justify-start bg-[#F9F9F9] px-6 pt-10">
      <View className="mb-4 flex w-full flex-row items-center justify-between">
        <TouchableOpacity
          onPress={navigation.goBack}
          className="h-12 w-16 items-center justify-center rounded-2xl bg-white shadow-md shadow-charcoal-100"
        >
          <ArrowBack />
        </TouchableOpacity>
        <Title text="Выберите филиал" />
      </View>
      <RestaurantCard
        active={selectedId === 'aq_anyz'}
        id="aq_anyz"
        onSelect={onSelect}
        title="Aq anyz"
        type="Семейный ресторан"
        categories={[...categories_aq_anyz, ...categories_aq_anyz]}
        distance="1.5 км"
        image={require('../../assets/images/institutions/aqanyz.png')}
      />
      <RestaurantCard
        active={selectedId === 'vostochnui_dvor'}
        id="vostochnui_dvor"
        onSelect={onSelect}
        title="Восточный двор"
        type="Ресторан"
        categories={[
          ...categories_vostochnui_dvor,
          ...categories_vostochnui_dvor,
        ]}
        distance="3 км"
        image={require('../../assets/images/institutions/vostochnuidvor.png')}
      />
      {selectedId && (
        <Animated.View
          entering={FadeInDown.duration(700).mass(1)}
          className="absolute bottom-16 w-full"
        >
          <Button onPress={onPress} label="Начать заказ" variant="orange" />
        </Animated.View>
      )}
    </SafeAreaView>
  );
}
