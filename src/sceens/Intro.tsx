/** Core **/
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';

import type { LanguageId } from '@/@types/components';
/** Components **/
import { AnimatedButtons } from '@/components/intro/AnimatedButtons';
import { AnimatedLogo } from '@/components/intro/AnimatedLogo';
import { SafeAreaView } from '@/ui';

export default function Intro() {
  /** State **/
  const [startLogo, setStartLogo] = useState(false);
  const [startButtons, setStartButtons] = useState(false);

  // const { setLanguage } = useSelectedLanguage();
  const navigation = useNavigation();

  /** Effect **/
  useEffect(() => {
    setTimeout(() => {
      setStartLogo(true);
    }, 1000);
    setTimeout(() => {
      setStartButtons(true);
    }, 3000);
  }, []);

  const handleSelectLanguage = (value: LanguageId) => {
    // setLanguage(value);
    console.log(value);
    navigation.navigate('welcome' as never);
  };

  return (
    <SafeAreaView className="h-full w-full items-center justify-start bg-[#FF8933] px-5">
      {startLogo && <AnimatedLogo />}
      {startButtons && <AnimatedButtons onPress={handleSelectLanguage} />}
    </SafeAreaView>
  );
}
