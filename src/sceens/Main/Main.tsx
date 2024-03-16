import { slider_categories } from '__mocks__/categories';
import { lagman_cards, pizza_cards, plov_cards } from '__mocks__/foods';
import { stories } from '__mocks__/stories';
import { useNavigation } from '@react-navigation/core';
import { Image } from 'expo-image';
import React from 'react';
import { Text as RNText } from 'react-native';

import { FoodCard } from '@/components/cards/FoodCard';
import { CategoriesSlider } from '@/components/main/CategoriesSlider';
import { SelectType } from '@/components/main/SelectType';
import { StoriesSlider } from '@/components/main/StoriesSlider';
import { Separator } from '@/components/Separator';
import { Title } from '@/components/title';
import {
  Input,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from '@/ui';

import SearchSvg from '../../../assets/svg/SearchSvg';

export default function Main({ route }: { route: any }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView className=" h-full w-full bg-[#F9F9F9] pt-8">
      <View className="px-6">
        <SelectType />
        {route.params?.title && (
          <View className="mt-4 flex w-full flex-row justify-between rounded-2xl bg-white p-2 shadow-md shadow-stone-200">
            <View className="flex flex-row">
              <Image source={route.params?.image} className={'h-12 w-12'} />
              <View className="ml-2">
                <RNText className="font-gilroy text-xl font-medium leading-tight">
                  {route.params?.title}
                </RNText>
                <Text className="font-gilroy text-sm font-medium">
                  {route.params?.type}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={navigation.goBack}
              className=" w-fit items-center justify-center rounded-2xl bg-[#FFE7DC] px-4"
            >
              <Text>Изменить</Text>
            </TouchableOpacity>
          </View>
        )}
        <Separator className="mt-5" />
      </View>
      <ScrollView>
        <View className="mt-5 px-6">
          <Input
            icon={<SearchSvg />}
            className="h-14 w-full justify-center rounded-full bg-white pb-1 pl-16 pr-5 text-xl"
            placeholder="Поиск блюда"
            placeholderTextColor="#000"
          />
        </View>
        <View className="mt-6">
          <StoriesSlider stories={stories} />
        </View>
        <View className="mt-12">
          <CategoriesSlider data={slider_categories} />
        </View>
        <View className="mt-16 gap-5 px-6">
          {plov_cards.map((item, index) => (
            <FoodCard data={{ ...item }} key={index} />
          ))}
          <Separator className="mb-3 mt-7" />
          <Title text="Лагман" className="mb-3 flex w-full items-start" />
          {lagman_cards.map((item, index) => (
            <FoodCard data={{ ...item }} key={index} />
          ))}
          <Separator className="mb-3 mt-7" />
          <Title text="Пицца" className="mb-3 flex w-full items-start" />
          {pizza_cards.map((item, index) => (
            <FoodCard data={{ ...item }} key={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
