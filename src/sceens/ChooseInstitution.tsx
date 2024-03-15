import { useNavigation } from '@react-navigation/core';
import { Image } from 'expo-image';
import React from 'react';

import { InstitutionCard } from '@/components/cards/InstitutionCard';
import { Title } from '@/components/title';
import { SafeAreaView, View } from '@/ui';

const ChooseInstitution = () => {
  const { navigate } = useNavigation();
  const onSelect = () => {
    navigate('' as never);
  };
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#F9F9F9] px-6">
      <View className="h-full w-full items-center justify-center pb-24">
        <Title text="Выберите заведение" className="mb-14" />
        <InstitutionCard
          onPress={onSelect}
          id="restaurants"
          title="Рестораны и кафе"
          restaurant_images={[
            require('../../assets/images/institutions/aqanyz.png'),
            require('../../assets/images/institutions/vostochnuidvor.png'),
          ]}
        >
          <>
            <View className="absolute right-0 top-0 h-full">
              <Image
                className=" h-full w-36 rounded-t-2xl"
                source={require('../../assets/images/institutions/food.png')}
              />
            </View>
            <View className="absolute -right-2 bottom-0 h-full">
              <Image
                className="h-full w-44 rounded-b-3xl rounded-t-full"
                source={require('../../assets/images/institutions/plov_cut.png')}
              />
            </View>
          </>
        </InstitutionCard>
        <View className="my-6 w-full border-[1px] border-[#EEEEEE]" />
        <InstitutionCard
          onPress={onSelect}
          id="sweets"
          title="Кондитерская"
          imageClass="rounded-full"
          restaurant_images={[
            require('../../assets/images/institutions/sweets.png'),
          ]}
        >
          <View className="absolute bottom-0 right-0 h-32">
            <Image
              className="h-full w-44"
              source={require('../../assets/images/institutions/cake.png')}
            />
          </View>
        </InstitutionCard>
      </View>
    </SafeAreaView>
  );
};

export { ChooseInstitution };
