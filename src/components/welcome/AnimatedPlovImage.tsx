import React, { memo, useCallback, useEffect } from 'react';
import Animated, {
  FadeOutLeft,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import { Image, View } from '@/ui';

const AnimatedPlovImage = memo(() => {
  const rotation = useSharedValue(0);
  const marginLeft = useSharedValue(1000);

  const startAnimation = useCallback(() => {
    rotation.value = withDelay(800, withTiming(720, { duration: 1000 }));
    marginLeft.value = withDelay(800, withTiming(-250, { duration: 1000 }));
  }, [marginLeft, rotation]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
      marginLeft: marginLeft.value,
    };
  });

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <Animated.View
      exiting={FadeOutLeft.duration(700).restSpeedThreshold(1)}
      className="items-center justify-center"
      style={[animatedStyles]}
    >
      <View className="h-[430px] w-[430px] items-center justify-center">
        <Image
          source={require('../../../assets/images/plov.png')}
          className=" h-full w-full rounded-full"
        />
      </View>
    </Animated.View>
  );
});

export { AnimatedPlovImage };
