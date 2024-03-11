import React, { useEffect, useState } from 'react';

import { AnimatedButtons } from '@/components/intro/AnimatedButtons';
import { AnimatedLogo } from '@/components/intro/AnimatedLogo';
import { SafeAreaView } from '@/ui';

export default function Intro() {
  const [startLogo, setStartLogo] = useState(false);
  const [startButtons, setStartButtons] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStartLogo(true);
    }, 1000);
    setTimeout(() => {
      setStartButtons(true);
    }, 3000);
  }, []);
  return (
    <SafeAreaView className="h-full w-full items-center justify-start bg-[#FF8933] px-5">
      {startLogo && <AnimatedLogo />}
      {startButtons && <AnimatedButtons />}
    </SafeAreaView>
  );
}
