import React, { memo, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';

import Logo from '@/ui/icons/logo';

const AnimatedLogo = memo(() => {
  const translateY = useSharedValue(700);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  const startAnimation = () => {};
  translateY.value = withDelay(
    1000,
    withSpring(0, {
      damping: 5,
      velocity: 1,
      stiffness: 12,
    })
  );
  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <Animated.View style={[animatedStyle, styles.box]}>
      <Logo />
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 180,
    height: '60%',
    width: 300,
  },
});

export { AnimatedLogo };
