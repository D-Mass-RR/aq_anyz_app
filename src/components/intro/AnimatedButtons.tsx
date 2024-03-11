import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { Button, Text, View } from '@/ui';

type Buttons = {
  label: string;
  icon: string;
  id: number;
};

const buttons: Buttons[] = [
  { label: 'English', icon: '🇬🇧', id: 0 },
  { label: 'Қазақша', icon: '🇰🇿', id: 1 },
  { label: 'Русский', icon: '🇷🇺', id: 2 },
];

const AnimatedButton = ({
  item,
  animationId,
}: {
  item: Buttons;
  animationId: number;
}) => {
  const translateY = useSharedValue(300);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  useEffect(() => {
    if (animationId === item.id)
      translateY.value = withSpring(0, {
        damping: 5,
        velocity: 0,
        stiffness: 15,
      });
  }, [animationId, item.id, translateY]);

  return (
    <Animated.View style={[styles.box, animatedStyle]}>
      <Button
        label={item.label}
        icon={<Text className="text-2xl">{item.icon}</Text>}
      />
    </Animated.View>
  );
};
const AnimatedButtons = () => {
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
    <View className="h-[40%] w-full justify-end">
      {buttons.map((item) => (
        <AnimatedButton animationId={animationId} item={item} key={item.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
  },
});

export { AnimatedButtons };
