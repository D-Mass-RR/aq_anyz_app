import { Image } from 'expo-image';
import { MotiView } from 'moti';
import React from 'react';

import { Button, SafeAreaView, Text, View } from '@/ui';

export default function Welcome() {
  return (
    <SafeAreaView className="flex h-full w-full items-center justify-start bg-white">
      <View className="h-[60%] w-full px-7">
        <MotiView
          delay={1000}
          from={{
            rotateZ: '0deg',
            marginLeft: 600,
          }}
          animate={{
            rotateZ: '720deg',
            marginLeft: -250,
          }}
          transition={{
            type: 'timing',
            duration: 1000,
          }}
          className="items-center justify-center"
        >
          <View className=" jus tify-center h-[430px] w-[430px] items-center">
            <Image
              source={require('../../assets/images/plov.png')}
              className=" h-full w-full rounded-full"
            />
          </View>
        </MotiView>
      </View>
      <View className="h-[43%] w-full bg-white px-2">
        <View className="items-center">
          <Text className="text-2xl font-bold">Добро пожаловать в Aqkiiz!</Text>
          <Text className="text-lg font-light">
            Начните ваше гастрономическое путешествие вместе с нашими блюдами
          </Text>
        </View>
        <View className="flex w-full flex-row justify-between">
          <Button label="Пропустить" size="sm" textClassName="text-[#FB631D]" />
          <Button label="Далее" size="sm" className="bg-[#FB631D]" />
        </View>
      </View>
    </SafeAreaView>
  );
}
