/** Core **/
import { useNavigation } from '@react-navigation/core';
import React from 'react';

import type { LanguageId } from '@/@types/components';
/** Components **/
import { AnimatedButtons } from '@/components/intro/AnimatedButtons';
import { AnimatedLogo } from '@/components/intro/AnimatedLogo';
import { SafeAreaView } from '@/ui';

export default function Intro() {
  // const { setLanguage } = useSelectedLanguage();
  const navigation = useNavigation();

  const handleSelectLanguage = (value: LanguageId) => {
    // setLanguage(value);
    console.log(value);
    navigation.navigate('welcome' as never);
  };

  return (
    <SafeAreaView className="h-full w-full items-center justify-start bg-[#FF8933] px-5">
      <AnimatedLogo />
      <AnimatedButtons onPress={handleSelectLanguage} />
    </SafeAreaView>
  );
}
