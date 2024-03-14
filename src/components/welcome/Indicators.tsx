import React, { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { View } from '@/ui';

const Indicator = ({ active }: { active: boolean }) => {
  const width = useSharedValue(active ? 25 : 7);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 500,
      }),
    };
  });
  useEffect(() => {
    if (active) {
      width.value = 25;
    } else {
      width.value = 7;
    }
  }, [active, width]);
  return (
    <Animated.View
      style={animatedStyle}
      className="mx-1 h-2 rounded-full bg-[#FB631D]"
    />
  );
};

const Indicators = ({ activeId }: { activeId: number }) => {
  return (
    <View className="absolute right-6 top-16 flex flex-row">
      {[0, 1, 2].map((item) => (
        <Indicator key={item} active={item === activeId} />
      ))}
    </View>
  );
};

export { Indicators };
