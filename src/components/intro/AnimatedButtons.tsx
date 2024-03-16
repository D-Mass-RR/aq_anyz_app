/** Core **/
import type { FC } from 'react';
import React, { memo, useEffect, useRef, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';

/** Types **/
import type { Buttons, LanguageId } from '@/@types/components';
/** Components **/
import { AnimatedButton } from '@/components/intro/AnimatedButton';
import { View } from '@/ui';

type Props = {
  onPress: (value: LanguageId) => void;
};

const buttons: Buttons[] = [
  { label: 'English', icon: '🇬🇧', id: 0, value: 'eng' },
  { label: 'Қазақша', icon: '🇰🇿', id: 1, value: 'kaz' },
  { label: 'Русский', icon: '🇷🇺', id: 2, value: 'ru' },
];

const AnimatedButtons: FC<Props> = memo(({ onPress }) => {
  const [animationId, setAnimationId] = useState<number>(0);
  const handleStart = () => setAnimationId((prev) => prev + 1);
  const intervalID = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    intervalID.current = setInterval(() => {
      handleStart();
    }, 200);

    if (animationId > 2) {
      clearInterval(intervalID.current);
    }
    return () => clearInterval(intervalID.current);
  }, [animationId]);

  return (
    <View
      style={styles.container}
      className="h-[40%] w-full justify-end font-bold"
    >
      {buttons.map((item) => (
        <AnimatedButton
          onPress={onPress}
          animationId={animationId}
          item={item}
          key={item.id}
        />
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: Platform.select({
    android: { paddingBottom: 10 },
    default: {},
  }),
});

export { AnimatedButtons };
