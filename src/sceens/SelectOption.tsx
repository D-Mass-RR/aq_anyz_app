import { useNavigation } from '@react-navigation/core';
import React from 'react';

import { OptionCard } from '@/components/cards/OptionCard';
import { Title } from '@/components/title';
import { SafeAreaView, Text, TouchableOpacity, View } from '@/ui';

import ArrowBack from '../../assets/svg/ArrowBack';
import CarSvg from '../../assets/svg/CarSvg';
import ScooterSvg from '../../assets/svg/ScooterSvg';

export default function SelectOption() {
  const { navigate, goBack } = useNavigation();
  const onPressDelivery = () => {
    navigate('Main' as never);
  };
  const onPressPickup = () => {
    navigate('selectAddress' as never);
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#F9F9F9] px-6 pb-36">
      <View className="flex w-full flex-row items-center justify-between">
        <TouchableOpacity
          onPress={goBack}
          className="h-12 w-16 items-center justify-center rounded-2xl bg-white shadow-md shadow-charcoal-100"
        >
          <ArrowBack />
        </TouchableOpacity>
        <Title text="Выберите опцию" />
      </View>
      <View className="mt-12 flex w-full flex-row justify-between gap-5">
        <OptionCard onPress={onPressDelivery}>
          <ScooterSvg />
          <Text className="mt-5 text-2xl font-normal">Доставка</Text>
        </OptionCard>
        <OptionCard onPress={onPressPickup}>
          <CarSvg />
          <Text className="mt-5 text-2xl font-normal">Самовывоз</Text>
        </OptionCard>
      </View>
    </SafeAreaView>
  );
}
