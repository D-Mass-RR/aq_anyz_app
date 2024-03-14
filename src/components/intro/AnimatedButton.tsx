import type { FC } from 'react';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

/** Types **/
import type { Buttons, LanguageId } from '@/@types/components';
/** Components **/
import { Button, Text } from '@/ui';

type Props = {
  item: Buttons;
  animationId: number;
  onPress: (value: LanguageId) => void;
};
const AnimatedButton: FC<Props> = ({ item, animationId, onPress }) => {
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
  const handlePress = () => {
    onPress(item.value);
  };

  return (
    <Animated.View style={[styles.box, animatedStyle]}>
      <Button
        onPress={handlePress}
        label={item.label}
        icon={<Text className="text-2xl">{item.icon}</Text>}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
  },
});

export { AnimatedButton };
